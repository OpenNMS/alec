const Ze = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, kR = {}, MR = window.Vue.resolveComponent, ZR = window.Vue.createVNode, bR = window.Vue.openBlock, JR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ER = { class: "main" };
function SR(t, o) {
  const r = MR("router-view");
  return bR(), JR("div", ER, [
    ZR(r)
  ]);
}
const FR = /* @__PURE__ */ Ze(kR, [["render", SR], ["__scopeId", "data-v-5d32d140"]]), AR = window.Vue.defineComponent, WR = window.Vue.openBlock, CR = window.Vue.createBlock, xR = /* @__PURE__ */ AR({
  __name: "App",
  setup(t) {
    return (o, r) => (WR(), CR(FR));
  }
});
var yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function BR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var dm = { exports: {} }, Wc = { exports: {} }, hm = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, IR = hm, Cc = Object.prototype.toString, xc = function(t) {
  return function(o) {
    var r = Cc.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function or(t) {
  return t = t.toLowerCase(), function(r) {
    return xc(r) === t;
  };
}
function Bc(t) {
  return Array.isArray(t);
}
function Ja(t) {
  return typeof t > "u";
}
function DR(t) {
  return t !== null && !Ja(t) && t.constructor !== null && !Ja(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var fm = or("ArrayBuffer");
function OR(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && fm(t.buffer), o;
}
function QR(t) {
  return typeof t == "string";
}
function zR(t) {
  return typeof t == "number";
}
function pm(t) {
  return t !== null && typeof t == "object";
}
function Ua(t) {
  if (xc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var GR = or("Date"), _R = or("File"), YR = or("Blob"), PR = or("FileList");
function Ic(t) {
  return Cc.call(t) === "[object Function]";
}
function HR(t) {
  return pm(t) && Ic(t.pipe);
}
function jR(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Cc.call(t) === o || Ic(t.toString) && t.toString() === o);
}
var XR = or("URLSearchParams");
function LR(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function $R() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Dc(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Bc(t))
      for (var r = 0, s = t.length; r < s; r++)
        o.call(null, t[r], r, t);
    else
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && o.call(null, t[a], a, t);
}
function Vc() {
  var t = {};
  function o(a, u) {
    Ua(t[u]) && Ua(a) ? t[u] = Vc(t[u], a) : Ua(a) ? t[u] = Vc({}, a) : Bc(a) ? t[u] = a.slice() : t[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Dc(arguments[r], o);
  return t;
}
function qR(t, o, r) {
  return Dc(o, function(a, u) {
    r && typeof a == "function" ? t[u] = IR(a, r) : t[u] = a;
  }), t;
}
function KR(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function eN(t, o, r, s) {
  t.prototype = Object.create(o.prototype, s), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function tN(t, o, r) {
  var s, a, u, d = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      u = s[a], d[u] || (o[u] = t[u], d[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function nN(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var s = t.indexOf(o, r);
  return s !== -1 && s === r;
}
function rN(t) {
  if (!t)
    return null;
  var o = t.length;
  if (Ja(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var oN = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Oe = {
  isArray: Bc,
  isArrayBuffer: fm,
  isBuffer: DR,
  isFormData: jR,
  isArrayBufferView: OR,
  isString: QR,
  isNumber: zR,
  isObject: pm,
  isPlainObject: Ua,
  isUndefined: Ja,
  isDate: GR,
  isFile: _R,
  isBlob: YR,
  isFunction: Ic,
  isStream: HR,
  isURLSearchParams: XR,
  isStandardBrowserEnv: $R,
  forEach: Dc,
  merge: Vc,
  extend: qR,
  trim: LR,
  stripBOM: KR,
  inherits: eN,
  toFlatObject: tN,
  kindOf: xc,
  kindOfTest: or,
  endsWith: nN,
  toArray: rN,
  isTypedArray: oN,
  isFileList: PR
}, yr = Oe;
function Ih(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var mm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (yr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    yr.forEach(r, function(w, U) {
      w === null || typeof w > "u" || (yr.isArray(w) ? U = U + "[]" : w = [w], yr.forEach(w, function(R) {
        yr.isDate(R) ? R = R.toISOString() : yr.isObject(R) && (R = JSON.stringify(R)), u.push(Ih(U) + "=" + Ih(R));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, iN = Oe;
function Qa() {
  this.handlers = [];
}
Qa.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Qa.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Qa.prototype.forEach = function(o) {
  iN.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var aN = Qa, sN = Oe, lN = function(o, r) {
  sN.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, wm = Oe;
function _r(t, o, r, s, a) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
wm.inherits(_r, Error, {
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
var vm = _r.prototype, Vm = {};
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
  Vm[t] = { value: t };
});
Object.defineProperties(_r, Vm);
Object.defineProperty(vm, "isAxiosError", { value: !0 });
_r.from = function(t, o, r, s, a, u) {
  var d = Object.create(vm);
  return wm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), _r.call(d, t.message, o, r, s, a), d.name = t.name, u && Object.assign(d, u), d;
};
var Lr = _r, Tm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, At = Oe;
function cN(t, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : At.isDate(u) ? u.toISOString() : At.isArrayBuffer(u) || At.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, d) {
    if (At.isPlainObject(u) || At.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(u), At.forEach(u, function(w, U) {
        if (!At.isUndefined(w)) {
          var V = d ? d + "." + U : U, R;
          if (w && !d && typeof w == "object") {
            if (At.endsWith(U, "{}"))
              w = JSON.stringify(w);
            else if (At.endsWith(U, "[]") && (R = At.toArray(w))) {
              R.forEach(function(N) {
                !At.isUndefined(N) && o.append(V, s(N));
              });
              return;
            }
          }
          a(w, V);
        }
      }), r.pop();
    } else
      o.append(d, s(u));
  }
  return a(t), o;
}
var gm = cN, yl, Dh;
function uN() {
  if (Dh)
    return yl;
  Dh = 1;
  var t = Lr;
  return yl = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new t(
      "Request failed with status code " + a.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, yl;
}
var kl, Oh;
function dN() {
  if (Oh)
    return kl;
  Oh = 1;
  var t = Oe;
  return kl = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, d, h, w) {
        var U = [];
        U.push(s + "=" + encodeURIComponent(a)), t.isNumber(u) && U.push("expires=" + new Date(u).toGMTString()), t.isString(d) && U.push("path=" + d), t.isString(h) && U.push("domain=" + h), w === !0 && U.push("secure"), document.cookie = U.join("; ");
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
  }(), kl;
}
var hN = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, fN = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, pN = hN, mN = fN, Um = function(o, r) {
  return o && !pN(r) ? mN(o, r) : r;
}, Ml, Qh;
function wN() {
  if (Qh)
    return Ml;
  Qh = 1;
  var t = Oe, o = [
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
  return Ml = function(s) {
    var a = {}, u, d, h;
    return s && t.forEach(s.split(`
`), function(U) {
      if (h = U.indexOf(":"), u = t.trim(U.substr(0, h)).toLowerCase(), d = t.trim(U.substr(h + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([d]) : a[u] = a[u] ? a[u] + ", " + d : d;
      }
    }), a;
  }, Ml;
}
var Zl, zh;
function vN() {
  if (zh)
    return Zl;
  zh = 1;
  var t = Oe;
  return Zl = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), a;
    function u(d) {
      var h = d;
      return r && (s.setAttribute("href", h), h = s.href), s.setAttribute("href", h), {
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
    return a = u(window.location.href), function(h) {
      var w = t.isString(h) ? u(h) : h;
      return w.protocol === a.protocol && w.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Zl;
}
var bl, Gh;
function za() {
  if (Gh)
    return bl;
  Gh = 1;
  var t = Lr, o = Oe;
  function r(s) {
    t.call(this, s == null ? "canceled" : s, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), bl = r, bl;
}
var Jl, _h;
function VN() {
  return _h || (_h = 1, Jl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Jl;
}
var El, Yh;
function Ph() {
  if (Yh)
    return El;
  Yh = 1;
  var t = Oe, o = uN(), r = dN(), s = mm, a = Um, u = wN(), d = vN(), h = Tm, w = Lr, U = za(), V = VN();
  return El = function(N) {
    return new Promise(function(S, x) {
      var B = N.data, F = N.headers, W = N.responseType, E;
      function O() {
        N.cancelToken && N.cancelToken.unsubscribe(E), N.signal && N.signal.removeEventListener("abort", E);
      }
      t.isFormData(B) && t.isStandardBrowserEnv() && delete F["Content-Type"];
      var b = new XMLHttpRequest();
      if (N.auth) {
        var z = N.auth.username || "", Q = N.auth.password ? unescape(encodeURIComponent(N.auth.password)) : "";
        F.Authorization = "Basic " + btoa(z + ":" + Q);
      }
      var P = a(N.baseURL, N.url);
      b.open(N.method.toUpperCase(), s(P, N.params, N.paramsSerializer), !0), b.timeout = N.timeout;
      function me() {
        if (!!b) {
          var Ve = "getAllResponseHeaders" in b ? u(b.getAllResponseHeaders()) : null, Ue = !W || W === "text" || W === "json" ? b.responseText : b.response, ke = {
            data: Ue,
            status: b.status,
            statusText: b.statusText,
            headers: Ve,
            config: N,
            request: b
          };
          o(function(Ce) {
            S(Ce), O();
          }, function(Ce) {
            x(Ce), O();
          }, ke), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = me : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(me);
      }, b.onabort = function() {
        !b || (x(new w("Request aborted", w.ECONNABORTED, N, b)), b = null);
      }, b.onerror = function() {
        x(new w("Network Error", w.ERR_NETWORK, N, b, b)), b = null;
      }, b.ontimeout = function() {
        var Ue = N.timeout ? "timeout of " + N.timeout + "ms exceeded" : "timeout exceeded", ke = N.transitional || h;
        N.timeoutErrorMessage && (Ue = N.timeoutErrorMessage), x(new w(
          Ue,
          ke.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          N,
          b
        )), b = null;
      }, t.isStandardBrowserEnv()) {
        var de = (N.withCredentials || d(P)) && N.xsrfCookieName ? r.read(N.xsrfCookieName) : void 0;
        de && (F[N.xsrfHeaderName] = de);
      }
      "setRequestHeader" in b && t.forEach(F, function(Ue, ke) {
        typeof B > "u" && ke.toLowerCase() === "content-type" ? delete F[ke] : b.setRequestHeader(ke, Ue);
      }), t.isUndefined(N.withCredentials) || (b.withCredentials = !!N.withCredentials), W && W !== "json" && (b.responseType = N.responseType), typeof N.onDownloadProgress == "function" && b.addEventListener("progress", N.onDownloadProgress), typeof N.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", N.onUploadProgress), (N.cancelToken || N.signal) && (E = function(Ve) {
        !b || (x(!Ve || Ve && Ve.type ? new U() : Ve), b.abort(), b = null);
      }, N.cancelToken && N.cancelToken.subscribe(E), N.signal && (N.signal.aborted ? E() : N.signal.addEventListener("abort", E))), B || (B = null);
      var ve = V(P);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        x(new w("Unsupported protocol " + ve + ":", w.ERR_BAD_REQUEST, N));
        return;
      }
      b.send(B);
    });
  }, El;
}
var Sl, Hh;
function TN() {
  return Hh || (Hh = 1, Sl = null), Sl;
}
var Ae = Oe, jh = lN, Xh = Lr, gN = Tm, UN = gm, RN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Lh(t, o) {
  !Ae.isUndefined(t) && Ae.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function NN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Ph()), t;
}
function yN(t, o, r) {
  if (Ae.isString(t))
    try {
      return (o || JSON.parse)(t), Ae.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(t);
}
var Ga = {
  transitional: gN,
  adapter: NN(),
  transformRequest: [function(o, r) {
    if (jh(r, "Accept"), jh(r, "Content-Type"), Ae.isFormData(o) || Ae.isArrayBuffer(o) || Ae.isBuffer(o) || Ae.isStream(o) || Ae.isFile(o) || Ae.isBlob(o))
      return o;
    if (Ae.isArrayBufferView(o))
      return o.buffer;
    if (Ae.isURLSearchParams(o))
      return Lh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Ae.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Ae.isFileList(o)) || s && a === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return UN(u ? { "files[]": o } : o, d && new d());
    } else if (s || a === "application/json")
      return Lh(r, "application/json"), yN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ga.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Ae.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (u)
          throw d.name === "SyntaxError" ? Xh.from(d, Xh.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: TN()
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
Ae.forEach(["delete", "get", "head"], function(o) {
  Ga.headers[o] = {};
});
Ae.forEach(["post", "put", "patch"], function(o) {
  Ga.headers[o] = Ae.merge(RN);
});
var Oc = Ga, kN = Oe, MN = Oc, ZN = function(o, r, s) {
  var a = this || MN;
  return kN.forEach(s, function(d) {
    o = d.call(a, o, r);
  }), o;
}, Fl, $h;
function Rm() {
  return $h || ($h = 1, Fl = function(o) {
    return !!(o && o.__CANCEL__);
  }), Fl;
}
var qh = Oe, Al = ZN, bN = Rm(), JN = Oc, EN = za();
function Wl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new EN();
}
var SN = function(o) {
  Wl(o), o.headers = o.headers || {}, o.data = Al.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = qh.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), qh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || JN.adapter;
  return r(o).then(function(a) {
    return Wl(o), a.data = Al.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return bN(a) || (Wl(o), a && a.response && (a.response.data = Al.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, ut = Oe, Nm = function(o, r) {
  r = r || {};
  var s = {};
  function a(V, R) {
    return ut.isPlainObject(V) && ut.isPlainObject(R) ? ut.merge(V, R) : ut.isPlainObject(R) ? ut.merge({}, R) : ut.isArray(R) ? R.slice() : R;
  }
  function u(V) {
    if (ut.isUndefined(r[V])) {
      if (!ut.isUndefined(o[V]))
        return a(void 0, o[V]);
    } else
      return a(o[V], r[V]);
  }
  function d(V) {
    if (!ut.isUndefined(r[V]))
      return a(void 0, r[V]);
  }
  function h(V) {
    if (ut.isUndefined(r[V])) {
      if (!ut.isUndefined(o[V]))
        return a(void 0, o[V]);
    } else
      return a(void 0, r[V]);
  }
  function w(V) {
    if (V in r)
      return a(o[V], r[V]);
    if (V in o)
      return a(void 0, o[V]);
  }
  var U = {
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
  return ut.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var N = U[R] || u, A = N(R);
    ut.isUndefined(A) && N !== w || (s[R] = A);
  }), s;
}, Cl, Kh;
function ym() {
  return Kh || (Kh = 1, Cl = {
    version: "0.27.2"
  }), Cl;
}
var FN = ym().version, kn = Lr, Qc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Qc[t] = function(s) {
    return typeof s === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var ef = {};
Qc.transitional = function(o, r, s) {
  function a(u, d) {
    return "[Axios v" + FN + "] Transitional option '" + u + "'" + d + (s ? ". " + s : "");
  }
  return function(u, d, h) {
    if (o === !1)
      throw new kn(
        a(d, " has been removed" + (r ? " in " + r : "")),
        kn.ERR_DEPRECATED
      );
    return r && !ef[d] && (ef[d] = !0, console.warn(
      a(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, d, h) : !0;
  };
};
function AN(t, o, r) {
  if (typeof t != "object")
    throw new kn("options must be an object", kn.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(t), a = s.length; a-- > 0; ) {
    var u = s[a], d = o[u];
    if (d) {
      var h = t[u], w = h === void 0 || d(h, u, t);
      if (w !== !0)
        throw new kn("option " + u + " must be " + w, kn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new kn("Unknown option " + u, kn.ERR_BAD_OPTION);
  }
}
var WN = {
  assertOptions: AN,
  validators: Qc
}, km = Oe, CN = mm, tf = aN, nf = SN, _a = Nm, xN = Um, Mm = WN, kr = Mm.validators;
function Yr(t) {
  this.defaults = t, this.interceptors = {
    request: new tf(),
    response: new tf()
  };
}
Yr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = _a(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Mm.assertOptions(s, {
    silentJSONParsing: kr.transitional(kr.boolean),
    forcedJSONParsing: kr.transitional(kr.boolean),
    clarifyTimeoutError: kr.transitional(kr.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(A) {
    typeof A.runWhen == "function" && A.runWhen(r) === !1 || (u = u && A.synchronous, a.unshift(A.fulfilled, A.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(A) {
    d.push(A.fulfilled, A.rejected);
  });
  var h;
  if (!u) {
    var w = [nf, void 0];
    for (Array.prototype.unshift.apply(w, a), w = w.concat(d), h = Promise.resolve(r); w.length; )
      h = h.then(w.shift(), w.shift());
    return h;
  }
  for (var U = r; a.length; ) {
    var V = a.shift(), R = a.shift();
    try {
      U = V(U);
    } catch (N) {
      R(N);
      break;
    }
  }
  try {
    h = nf(U);
  } catch (N) {
    return Promise.reject(N);
  }
  for (; d.length; )
    h = h.then(d.shift(), d.shift());
  return h;
};
Yr.prototype.getUri = function(o) {
  o = _a(this.defaults, o);
  var r = xN(o.baseURL, o.url);
  return CN(r, o.params, o.paramsSerializer);
};
km.forEach(["delete", "get", "head", "options"], function(o) {
  Yr.prototype[o] = function(r, s) {
    return this.request(_a(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
km.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, d, h) {
      return this.request(_a(h || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: d
      }));
    };
  }
  Yr.prototype[o] = r(), Yr.prototype[o + "Form"] = r(!0);
});
var BN = Yr, xl, rf;
function IN() {
  if (rf)
    return xl;
  rf = 1;
  var t = za();
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
        var d, h = a._listeners.length;
        for (d = 0; d < h; d++)
          a._listeners[d](u);
        a._listeners = null;
      }
    }), this.promise.then = function(u) {
      var d, h = new Promise(function(w) {
        a.subscribe(w), d = w;
      }).then(u);
      return h.cancel = function() {
        a.unsubscribe(d);
      }, h;
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
  }, xl = o, xl;
}
var Bl, of;
function DN() {
  return of || (of = 1, Bl = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Bl;
}
var Il, af;
function ON() {
  if (af)
    return Il;
  af = 1;
  var t = Oe;
  return Il = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Il;
}
var sf = Oe, QN = hm, Ra = BN, zN = Nm, GN = Oc;
function Zm(t) {
  var o = new Ra(t), r = QN(Ra.prototype.request, o);
  return sf.extend(r, Ra.prototype, o), sf.extend(r, o), r.create = function(a) {
    return Zm(zN(t, a));
  }, r;
}
var rt = Zm(GN);
rt.Axios = Ra;
rt.CanceledError = za();
rt.CancelToken = IN();
rt.isCancel = Rm();
rt.VERSION = ym().version;
rt.toFormData = gm;
rt.AxiosError = Lr;
rt.Cancel = rt.CanceledError;
rt.all = function(o) {
  return Promise.all(o);
};
rt.spread = DN();
rt.isAxiosError = ON();
Wc.exports = rt;
Wc.exports.default = rt;
(function(t) {
  t.exports = Wc.exports;
})(dm);
const bm = /* @__PURE__ */ BR(dm.exports), hn = bm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), En = bm.create({
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
(function(t, o) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", U = 500, V = "__lodash_placeholder__", R = 1, N = 2, A = 4, S = 1, x = 2, B = 1, F = 2, W = 4, E = 8, O = 16, b = 32, z = 64, Q = 128, P = 256, me = 512, de = 30, ve = "...", Ve = 800, Ue = 16, ke = 1, ce = 2, Ce = 3, xe = 1 / 0, Pe = 9007199254740991, eo = 17976931348623157e292, ui = 0 / 0, Dt = 4294967295, Bw = Dt - 1, Iw = Dt >>> 1, Dw = [
      ["ary", Q],
      ["bind", B],
      ["bindKey", F],
      ["curry", E],
      ["curryRight", O],
      ["flip", me],
      ["partial", b],
      ["partialRight", z],
      ["rearg", P]
    ], lr = "[object Arguments]", di = "[object Array]", Ow = "[object AsyncFunction]", to = "[object Boolean]", no = "[object Date]", Qw = "[object DOMException]", hi = "[object Error]", fi = "[object Function]", su = "[object GeneratorFunction]", Zt = "[object Map]", ro = "[object Number]", zw = "[object Null]", Pt = "[object Object]", lu = "[object Promise]", Gw = "[object Proxy]", oo = "[object RegExp]", bt = "[object Set]", io = "[object String]", pi = "[object Symbol]", _w = "[object Undefined]", ao = "[object WeakMap]", Yw = "[object WeakSet]", so = "[object ArrayBuffer]", cr = "[object DataView]", rs = "[object Float32Array]", os = "[object Float64Array]", is = "[object Int8Array]", as = "[object Int16Array]", ss = "[object Int32Array]", ls = "[object Uint8Array]", cs = "[object Uint8ClampedArray]", us = "[object Uint16Array]", ds = "[object Uint32Array]", Pw = /\b__p \+= '';/g, Hw = /\b(__p \+=) '' \+/g, jw = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cu = /&(?:amp|lt|gt|quot|#39);/g, uu = /[&<>"']/g, Xw = RegExp(cu.source), Lw = RegExp(uu.source), $w = /<%-([\s\S]+?)%>/g, qw = /<%([\s\S]+?)%>/g, du = /<%=([\s\S]+?)%>/g, Kw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, e1 = /^\w*$/, t1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hs = /[\\^$.*+?()[\]{}|]/g, n1 = RegExp(hs.source), fs = /^\s+/, r1 = /\s/, o1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, i1 = /\{\n\/\* \[wrapped with (.+)\] \*/, a1 = /,? & /, s1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, l1 = /[()=,{}\[\]\/\s]/, c1 = /\\(\\)?/g, u1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hu = /\w*$/, d1 = /^[-+]0x[0-9a-f]+$/i, h1 = /^0b[01]+$/i, f1 = /^\[object .+?Constructor\]$/, p1 = /^0o[0-7]+$/i, m1 = /^(?:0|[1-9]\d*)$/, w1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, mi = /($^)/, v1 = /['\n\r\u2028\u2029\\]/g, wi = "\\ud800-\\udfff", V1 = "\\u0300-\\u036f", T1 = "\\ufe20-\\ufe2f", g1 = "\\u20d0-\\u20ff", fu = V1 + T1 + g1, pu = "\\u2700-\\u27bf", mu = "a-z\\xdf-\\xf6\\xf8-\\xff", U1 = "\\xac\\xb1\\xd7\\xf7", R1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", N1 = "\\u2000-\\u206f", y1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wu = "A-Z\\xc0-\\xd6\\xd8-\\xde", vu = "\\ufe0e\\ufe0f", Vu = U1 + R1 + N1 + y1, ps = "['\u2019]", k1 = "[" + wi + "]", Tu = "[" + Vu + "]", vi = "[" + fu + "]", gu = "\\d+", M1 = "[" + pu + "]", Uu = "[" + mu + "]", Ru = "[^" + wi + Vu + gu + pu + mu + wu + "]", ms = "\\ud83c[\\udffb-\\udfff]", Z1 = "(?:" + vi + "|" + ms + ")", Nu = "[^" + wi + "]", ws = "(?:\\ud83c[\\udde6-\\uddff]){2}", vs = "[\\ud800-\\udbff][\\udc00-\\udfff]", ur = "[" + wu + "]", yu = "\\u200d", ku = "(?:" + Uu + "|" + Ru + ")", b1 = "(?:" + ur + "|" + Ru + ")", Mu = "(?:" + ps + "(?:d|ll|m|re|s|t|ve))?", Zu = "(?:" + ps + "(?:D|LL|M|RE|S|T|VE))?", bu = Z1 + "?", Ju = "[" + vu + "]?", J1 = "(?:" + yu + "(?:" + [Nu, ws, vs].join("|") + ")" + Ju + bu + ")*", E1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", S1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Eu = Ju + bu + J1, F1 = "(?:" + [M1, ws, vs].join("|") + ")" + Eu, A1 = "(?:" + [Nu + vi + "?", vi, ws, vs, k1].join("|") + ")", W1 = RegExp(ps, "g"), C1 = RegExp(vi, "g"), Vs = RegExp(ms + "(?=" + ms + ")|" + A1 + Eu, "g"), x1 = RegExp([
      ur + "?" + Uu + "+" + Mu + "(?=" + [Tu, ur, "$"].join("|") + ")",
      b1 + "+" + Zu + "(?=" + [Tu, ur + ku, "$"].join("|") + ")",
      ur + "?" + ku + "+" + Mu,
      ur + "+" + Zu,
      S1,
      E1,
      gu,
      F1
    ].join("|"), "g"), B1 = RegExp("[" + yu + wi + fu + vu + "]"), I1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, D1 = [
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
    ], O1 = -1, fe = {};
    fe[rs] = fe[os] = fe[is] = fe[as] = fe[ss] = fe[ls] = fe[cs] = fe[us] = fe[ds] = !0, fe[lr] = fe[di] = fe[so] = fe[to] = fe[cr] = fe[no] = fe[hi] = fe[fi] = fe[Zt] = fe[ro] = fe[Pt] = fe[oo] = fe[bt] = fe[io] = fe[ao] = !1;
    var he = {};
    he[lr] = he[di] = he[so] = he[cr] = he[to] = he[no] = he[rs] = he[os] = he[is] = he[as] = he[ss] = he[Zt] = he[ro] = he[Pt] = he[oo] = he[bt] = he[io] = he[pi] = he[ls] = he[cs] = he[us] = he[ds] = !0, he[hi] = he[fi] = he[ao] = !1;
    var Q1 = {
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
    }, z1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, G1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, _1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Y1 = parseFloat, P1 = parseInt, Su = typeof yo == "object" && yo && yo.Object === Object && yo, H1 = typeof self == "object" && self && self.Object === Object && self, Be = Su || H1 || Function("return this")(), Ts = o && !o.nodeType && o, An = Ts && !0 && t && !t.nodeType && t, Fu = An && An.exports === Ts, gs = Fu && Su.process, wt = function() {
      try {
        var T = An && An.require && An.require("util").types;
        return T || gs && gs.binding && gs.binding("util");
      } catch {
      }
    }(), Au = wt && wt.isArrayBuffer, Wu = wt && wt.isDate, Cu = wt && wt.isMap, xu = wt && wt.isRegExp, Bu = wt && wt.isSet, Iu = wt && wt.isTypedArray;
    function ot(T, k, y) {
      switch (y.length) {
        case 0:
          return T.call(k);
        case 1:
          return T.call(k, y[0]);
        case 2:
          return T.call(k, y[0], y[1]);
        case 3:
          return T.call(k, y[0], y[1], y[2]);
      }
      return T.apply(k, y);
    }
    function j1(T, k, y, I) {
      for (var H = -1, re = T == null ? 0 : T.length; ++H < re; ) {
        var be = T[H];
        k(I, be, y(be), T);
      }
      return I;
    }
    function vt(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I && k(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function X1(T, k) {
      for (var y = T == null ? 0 : T.length; y-- && k(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function Du(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I; )
        if (!k(T[y], y, T))
          return !1;
      return !0;
    }
    function fn(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length, H = 0, re = []; ++y < I; ) {
        var be = T[y];
        k(be, y, T) && (re[H++] = be);
      }
      return re;
    }
    function Vi(T, k) {
      var y = T == null ? 0 : T.length;
      return !!y && dr(T, k, 0) > -1;
    }
    function Us(T, k, y) {
      for (var I = -1, H = T == null ? 0 : T.length; ++I < H; )
        if (y(k, T[I]))
          return !0;
      return !1;
    }
    function pe(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length, H = Array(I); ++y < I; )
        H[y] = k(T[y], y, T);
      return H;
    }
    function pn(T, k) {
      for (var y = -1, I = k.length, H = T.length; ++y < I; )
        T[H + y] = k[y];
      return T;
    }
    function Rs(T, k, y, I) {
      var H = -1, re = T == null ? 0 : T.length;
      for (I && re && (y = T[++H]); ++H < re; )
        y = k(y, T[H], H, T);
      return y;
    }
    function L1(T, k, y, I) {
      var H = T == null ? 0 : T.length;
      for (I && H && (y = T[--H]); H--; )
        y = k(y, T[H], H, T);
      return y;
    }
    function Ns(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I; )
        if (k(T[y], y, T))
          return !0;
      return !1;
    }
    var $1 = ys("length");
    function q1(T) {
      return T.split("");
    }
    function K1(T) {
      return T.match(s1) || [];
    }
    function Ou(T, k, y) {
      var I;
      return y(T, function(H, re, be) {
        if (k(H, re, be))
          return I = re, !1;
      }), I;
    }
    function Ti(T, k, y, I) {
      for (var H = T.length, re = y + (I ? 1 : -1); I ? re-- : ++re < H; )
        if (k(T[re], re, T))
          return re;
      return -1;
    }
    function dr(T, k, y) {
      return k === k ? dv(T, k, y) : Ti(T, Qu, y);
    }
    function ev(T, k, y, I) {
      for (var H = y - 1, re = T.length; ++H < re; )
        if (I(T[H], k))
          return H;
      return -1;
    }
    function Qu(T) {
      return T !== T;
    }
    function zu(T, k) {
      var y = T == null ? 0 : T.length;
      return y ? Ms(T, k) / y : ui;
    }
    function ys(T) {
      return function(k) {
        return k == null ? r : k[T];
      };
    }
    function ks(T) {
      return function(k) {
        return T == null ? r : T[k];
      };
    }
    function Gu(T, k, y, I, H) {
      return H(T, function(re, be, ue) {
        y = I ? (I = !1, re) : k(y, re, be, ue);
      }), y;
    }
    function tv(T, k) {
      var y = T.length;
      for (T.sort(k); y--; )
        T[y] = T[y].value;
      return T;
    }
    function Ms(T, k) {
      for (var y, I = -1, H = T.length; ++I < H; ) {
        var re = k(T[I]);
        re !== r && (y = y === r ? re : y + re);
      }
      return y;
    }
    function Zs(T, k) {
      for (var y = -1, I = Array(T); ++y < T; )
        I[y] = k(y);
      return I;
    }
    function nv(T, k) {
      return pe(k, function(y) {
        return [y, T[y]];
      });
    }
    function _u(T) {
      return T && T.slice(0, ju(T) + 1).replace(fs, "");
    }
    function it(T) {
      return function(k) {
        return T(k);
      };
    }
    function bs(T, k) {
      return pe(k, function(y) {
        return T[y];
      });
    }
    function lo(T, k) {
      return T.has(k);
    }
    function Yu(T, k) {
      for (var y = -1, I = T.length; ++y < I && dr(k, T[y], 0) > -1; )
        ;
      return y;
    }
    function Pu(T, k) {
      for (var y = T.length; y-- && dr(k, T[y], 0) > -1; )
        ;
      return y;
    }
    function rv(T, k) {
      for (var y = T.length, I = 0; y--; )
        T[y] === k && ++I;
      return I;
    }
    var ov = ks(Q1), iv = ks(z1);
    function av(T) {
      return "\\" + _1[T];
    }
    function sv(T, k) {
      return T == null ? r : T[k];
    }
    function hr(T) {
      return B1.test(T);
    }
    function lv(T) {
      return I1.test(T);
    }
    function cv(T) {
      for (var k, y = []; !(k = T.next()).done; )
        y.push(k.value);
      return y;
    }
    function Js(T) {
      var k = -1, y = Array(T.size);
      return T.forEach(function(I, H) {
        y[++k] = [H, I];
      }), y;
    }
    function Hu(T, k) {
      return function(y) {
        return T(k(y));
      };
    }
    function mn(T, k) {
      for (var y = -1, I = T.length, H = 0, re = []; ++y < I; ) {
        var be = T[y];
        (be === k || be === V) && (T[y] = V, re[H++] = y);
      }
      return re;
    }
    function gi(T) {
      var k = -1, y = Array(T.size);
      return T.forEach(function(I) {
        y[++k] = I;
      }), y;
    }
    function uv(T) {
      var k = -1, y = Array(T.size);
      return T.forEach(function(I) {
        y[++k] = [I, I];
      }), y;
    }
    function dv(T, k, y) {
      for (var I = y - 1, H = T.length; ++I < H; )
        if (T[I] === k)
          return I;
      return -1;
    }
    function hv(T, k, y) {
      for (var I = y + 1; I--; )
        if (T[I] === k)
          return I;
      return I;
    }
    function fr(T) {
      return hr(T) ? pv(T) : $1(T);
    }
    function Jt(T) {
      return hr(T) ? mv(T) : q1(T);
    }
    function ju(T) {
      for (var k = T.length; k-- && r1.test(T.charAt(k)); )
        ;
      return k;
    }
    var fv = ks(G1);
    function pv(T) {
      for (var k = Vs.lastIndex = 0; Vs.test(T); )
        ++k;
      return k;
    }
    function mv(T) {
      return T.match(Vs) || [];
    }
    function wv(T) {
      return T.match(x1) || [];
    }
    var vv = function T(k) {
      k = k == null ? Be : pr.defaults(Be.Object(), k, pr.pick(Be, D1));
      var y = k.Array, I = k.Date, H = k.Error, re = k.Function, be = k.Math, ue = k.Object, Es = k.RegExp, Vv = k.String, Vt = k.TypeError, Ui = y.prototype, Tv = re.prototype, mr = ue.prototype, Ri = k["__core-js_shared__"], Ni = Tv.toString, ae = mr.hasOwnProperty, gv = 0, Xu = function() {
        var e = /[^.]+$/.exec(Ri && Ri.keys && Ri.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), yi = mr.toString, Uv = Ni.call(ue), Rv = Be._, Nv = Es(
        "^" + Ni.call(ae).replace(hs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ki = Fu ? k.Buffer : r, wn = k.Symbol, Mi = k.Uint8Array, Lu = ki ? ki.allocUnsafe : r, Zi = Hu(ue.getPrototypeOf, ue), $u = ue.create, qu = mr.propertyIsEnumerable, bi = Ui.splice, Ku = wn ? wn.isConcatSpreadable : r, co = wn ? wn.iterator : r, Wn = wn ? wn.toStringTag : r, Ji = function() {
        try {
          var e = Dn(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), yv = k.clearTimeout !== Be.clearTimeout && k.clearTimeout, kv = I && I.now !== Be.Date.now && I.now, Mv = k.setTimeout !== Be.setTimeout && k.setTimeout, Ei = be.ceil, Si = be.floor, Ss = ue.getOwnPropertySymbols, Zv = ki ? ki.isBuffer : r, ed = k.isFinite, bv = Ui.join, Jv = Hu(ue.keys, ue), Je = be.max, ze = be.min, Ev = I.now, Sv = k.parseInt, td = be.random, Fv = Ui.reverse, Fs = Dn(k, "DataView"), uo = Dn(k, "Map"), As = Dn(k, "Promise"), wr = Dn(k, "Set"), ho = Dn(k, "WeakMap"), fo = Dn(ue, "create"), Fi = ho && new ho(), vr = {}, Av = On(Fs), Wv = On(uo), Cv = On(As), xv = On(wr), Bv = On(ho), Ai = wn ? wn.prototype : r, po = Ai ? Ai.valueOf : r, nd = Ai ? Ai.toString : r;
      function f(e) {
        if (Te(e) && !j(e) && !(e instanceof ee)) {
          if (e instanceof Tt)
            return e;
          if (ae.call(e, "__wrapped__"))
            return rh(e);
        }
        return new Tt(e);
      }
      var Vr = function() {
        function e() {
        }
        return function(n) {
          if (!we(n))
            return {};
          if ($u)
            return $u(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function Wi() {
      }
      function Tt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = {
        escape: $w,
        evaluate: qw,
        interpolate: du,
        variable: "",
        imports: {
          _: f
        }
      }, f.prototype = Wi.prototype, f.prototype.constructor = f, Tt.prototype = Vr(Wi.prototype), Tt.prototype.constructor = Tt;
      function ee(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Dt, this.__views__ = [];
      }
      function Iv() {
        var e = new ee(this.__wrapped__);
        return e.__actions__ = $e(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $e(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $e(this.__views__), e;
      }
      function Dv() {
        if (this.__filtered__) {
          var e = new ee(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Ov() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = j(e), l = n < 0, c = i ? e.length : 0, p = qV(0, c, this.__views__), m = p.start, v = p.end, g = v - m, M = l ? v : m - 1, Z = this.__iteratees__, J = Z.length, C = 0, D = ze(g, this.__takeCount__);
        if (!i || !l && c == g && D == g)
          return Md(e, this.__actions__);
        var _ = [];
        e:
          for (; g-- && C < D; ) {
            M += n;
            for (var L = -1, Y = e[M]; ++L < J; ) {
              var K = Z[L], te = K.iteratee, lt = K.type, Xe = te(Y);
              if (lt == ce)
                Y = Xe;
              else if (!Xe) {
                if (lt == ke)
                  continue e;
                break e;
              }
            }
            _[C++] = Y;
          }
        return _;
      }
      ee.prototype = Vr(Wi.prototype), ee.prototype.constructor = ee;
      function Cn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Qv() {
        this.__data__ = fo ? fo(null) : {}, this.size = 0;
      }
      function zv(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Gv(e) {
        var n = this.__data__;
        if (fo) {
          var i = n[e];
          return i === w ? r : i;
        }
        return ae.call(n, e) ? n[e] : r;
      }
      function _v(e) {
        var n = this.__data__;
        return fo ? n[e] !== r : ae.call(n, e);
      }
      function Yv(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = fo && n === r ? w : n, this;
      }
      Cn.prototype.clear = Qv, Cn.prototype.delete = zv, Cn.prototype.get = Gv, Cn.prototype.has = _v, Cn.prototype.set = Yv;
      function Ht(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Pv() {
        this.__data__ = [], this.size = 0;
      }
      function Hv(e) {
        var n = this.__data__, i = Ci(n, e);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : bi.call(n, i, 1), --this.size, !0;
      }
      function jv(e) {
        var n = this.__data__, i = Ci(n, e);
        return i < 0 ? r : n[i][1];
      }
      function Xv(e) {
        return Ci(this.__data__, e) > -1;
      }
      function Lv(e, n) {
        var i = this.__data__, l = Ci(i, e);
        return l < 0 ? (++this.size, i.push([e, n])) : i[l][1] = n, this;
      }
      Ht.prototype.clear = Pv, Ht.prototype.delete = Hv, Ht.prototype.get = jv, Ht.prototype.has = Xv, Ht.prototype.set = Lv;
      function jt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function $v() {
        this.size = 0, this.__data__ = {
          hash: new Cn(),
          map: new (uo || Ht)(),
          string: new Cn()
        };
      }
      function qv(e) {
        var n = Hi(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Kv(e) {
        return Hi(this, e).get(e);
      }
      function eV(e) {
        return Hi(this, e).has(e);
      }
      function tV(e, n) {
        var i = Hi(this, e), l = i.size;
        return i.set(e, n), this.size += i.size == l ? 0 : 1, this;
      }
      jt.prototype.clear = $v, jt.prototype.delete = qv, jt.prototype.get = Kv, jt.prototype.has = eV, jt.prototype.set = tV;
      function xn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new jt(); ++n < i; )
          this.add(e[n]);
      }
      function nV(e) {
        return this.__data__.set(e, w), this;
      }
      function rV(e) {
        return this.__data__.has(e);
      }
      xn.prototype.add = xn.prototype.push = nV, xn.prototype.has = rV;
      function Et(e) {
        var n = this.__data__ = new Ht(e);
        this.size = n.size;
      }
      function oV() {
        this.__data__ = new Ht(), this.size = 0;
      }
      function iV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function aV(e) {
        return this.__data__.get(e);
      }
      function sV(e) {
        return this.__data__.has(e);
      }
      function lV(e, n) {
        var i = this.__data__;
        if (i instanceof Ht) {
          var l = i.__data__;
          if (!uo || l.length < a - 1)
            return l.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new jt(l);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      Et.prototype.clear = oV, Et.prototype.delete = iV, Et.prototype.get = aV, Et.prototype.has = sV, Et.prototype.set = lV;
      function rd(e, n) {
        var i = j(e), l = !i && Qn(e), c = !i && !l && Un(e), p = !i && !l && !c && Rr(e), m = i || l || c || p, v = m ? Zs(e.length, Vv) : [], g = v.length;
        for (var M in e)
          (n || ae.call(e, M)) && !(m && (M == "length" || c && (M == "offset" || M == "parent") || p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || qt(M, g))) && v.push(M);
        return v;
      }
      function od(e) {
        var n = e.length;
        return n ? e[_s(0, n - 1)] : r;
      }
      function cV(e, n) {
        return ji($e(e), Bn(n, 0, e.length));
      }
      function uV(e) {
        return ji($e(e));
      }
      function Ws(e, n, i) {
        (i !== r && !St(e[n], i) || i === r && !(n in e)) && Xt(e, n, i);
      }
      function mo(e, n, i) {
        var l = e[n];
        (!(ae.call(e, n) && St(l, i)) || i === r && !(n in e)) && Xt(e, n, i);
      }
      function Ci(e, n) {
        for (var i = e.length; i--; )
          if (St(e[i][0], n))
            return i;
        return -1;
      }
      function dV(e, n, i, l) {
        return vn(e, function(c, p, m) {
          n(l, c, i(c), m);
        }), l;
      }
      function id(e, n) {
        return e && Qt(n, Fe(n), e);
      }
      function hV(e, n) {
        return e && Qt(n, Ke(n), e);
      }
      function Xt(e, n, i) {
        n == "__proto__" && Ji ? Ji(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function Cs(e, n) {
        for (var i = -1, l = n.length, c = y(l), p = e == null; ++i < l; )
          c[i] = p ? r : ml(e, n[i]);
        return c;
      }
      function Bn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function gt(e, n, i, l, c, p) {
        var m, v = n & R, g = n & N, M = n & A;
        if (i && (m = c ? i(e, l, c, p) : i(e)), m !== r)
          return m;
        if (!we(e))
          return e;
        var Z = j(e);
        if (Z) {
          if (m = e0(e), !v)
            return $e(e, m);
        } else {
          var J = Ge(e), C = J == fi || J == su;
          if (Un(e))
            return Jd(e, v);
          if (J == Pt || J == lr || C && !c) {
            if (m = g || C ? {} : jd(e), !v)
              return g ? GV(e, hV(m, e)) : zV(e, id(m, e));
          } else {
            if (!he[J])
              return c ? e : {};
            m = t0(e, J, v);
          }
        }
        p || (p = new Et());
        var D = p.get(e);
        if (D)
          return D;
        p.set(e, m), Nh(e) ? e.forEach(function(Y) {
          m.add(gt(Y, n, i, Y, e, p));
        }) : Uh(e) && e.forEach(function(Y, K) {
          m.set(K, gt(Y, n, i, K, e, p));
        });
        var _ = M ? g ? tl : el : g ? Ke : Fe, L = Z ? r : _(e);
        return vt(L || e, function(Y, K) {
          L && (K = Y, Y = e[K]), mo(m, K, gt(Y, n, i, K, e, p));
        }), m;
      }
      function fV(e) {
        var n = Fe(e);
        return function(i) {
          return ad(i, e, n);
        };
      }
      function ad(e, n, i) {
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
      function sd(e, n, i) {
        if (typeof e != "function")
          throw new Vt(d);
        return Ro(function() {
          e.apply(r, i);
        }, n);
      }
      function wo(e, n, i, l) {
        var c = -1, p = Vi, m = !0, v = e.length, g = [], M = n.length;
        if (!v)
          return g;
        i && (n = pe(n, it(i))), l ? (p = Us, m = !1) : n.length >= a && (p = lo, m = !1, n = new xn(n));
        e:
          for (; ++c < v; ) {
            var Z = e[c], J = i == null ? Z : i(Z);
            if (Z = l || Z !== 0 ? Z : 0, m && J === J) {
              for (var C = M; C--; )
                if (n[C] === J)
                  continue e;
              g.push(Z);
            } else
              p(n, J, l) || g.push(Z);
          }
        return g;
      }
      var vn = Wd(Ot), ld = Wd(Bs, !0);
      function pV(e, n) {
        var i = !0;
        return vn(e, function(l, c, p) {
          return i = !!n(l, c, p), i;
        }), i;
      }
      function xi(e, n, i) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var p = e[l], m = n(p);
          if (m != null && (v === r ? m === m && !st(m) : i(m, v)))
            var v = m, g = p;
        }
        return g;
      }
      function mV(e, n, i, l) {
        var c = e.length;
        for (i = X(i), i < 0 && (i = -i > c ? 0 : c + i), l = l === r || l > c ? c : X(l), l < 0 && (l += c), l = i > l ? 0 : kh(l); i < l; )
          e[i++] = n;
        return e;
      }
      function cd(e, n) {
        var i = [];
        return vn(e, function(l, c, p) {
          n(l, c, p) && i.push(l);
        }), i;
      }
      function Ie(e, n, i, l, c) {
        var p = -1, m = e.length;
        for (i || (i = r0), c || (c = []); ++p < m; ) {
          var v = e[p];
          n > 0 && i(v) ? n > 1 ? Ie(v, n - 1, i, l, c) : pn(c, v) : l || (c[c.length] = v);
        }
        return c;
      }
      var xs = Cd(), ud = Cd(!0);
      function Ot(e, n) {
        return e && xs(e, n, Fe);
      }
      function Bs(e, n) {
        return e && ud(e, n, Fe);
      }
      function Bi(e, n) {
        return fn(n, function(i) {
          return Kt(e[i]);
        });
      }
      function In(e, n) {
        n = Tn(n, e);
        for (var i = 0, l = n.length; e != null && i < l; )
          e = e[zt(n[i++])];
        return i && i == l ? e : r;
      }
      function dd(e, n, i) {
        var l = n(e);
        return j(e) ? l : pn(l, i(e));
      }
      function He(e) {
        return e == null ? e === r ? _w : zw : Wn && Wn in ue(e) ? $V(e) : u0(e);
      }
      function Is(e, n) {
        return e > n;
      }
      function wV(e, n) {
        return e != null && ae.call(e, n);
      }
      function vV(e, n) {
        return e != null && n in ue(e);
      }
      function VV(e, n, i) {
        return e >= ze(n, i) && e < Je(n, i);
      }
      function Ds(e, n, i) {
        for (var l = i ? Us : Vi, c = e[0].length, p = e.length, m = p, v = y(p), g = 1 / 0, M = []; m--; ) {
          var Z = e[m];
          m && n && (Z = pe(Z, it(n))), g = ze(Z.length, g), v[m] = !i && (n || c >= 120 && Z.length >= 120) ? new xn(m && Z) : r;
        }
        Z = e[0];
        var J = -1, C = v[0];
        e:
          for (; ++J < c && M.length < g; ) {
            var D = Z[J], _ = n ? n(D) : D;
            if (D = i || D !== 0 ? D : 0, !(C ? lo(C, _) : l(M, _, i))) {
              for (m = p; --m; ) {
                var L = v[m];
                if (!(L ? lo(L, _) : l(e[m], _, i)))
                  continue e;
              }
              C && C.push(_), M.push(D);
            }
          }
        return M;
      }
      function TV(e, n, i, l) {
        return Ot(e, function(c, p, m) {
          n(l, i(c), p, m);
        }), l;
      }
      function vo(e, n, i) {
        n = Tn(n, e), e = qd(e, n);
        var l = e == null ? e : e[zt(Rt(n))];
        return l == null ? r : ot(l, e, i);
      }
      function hd(e) {
        return Te(e) && He(e) == lr;
      }
      function gV(e) {
        return Te(e) && He(e) == so;
      }
      function UV(e) {
        return Te(e) && He(e) == no;
      }
      function Vo(e, n, i, l, c) {
        return e === n ? !0 : e == null || n == null || !Te(e) && !Te(n) ? e !== e && n !== n : RV(e, n, i, l, Vo, c);
      }
      function RV(e, n, i, l, c, p) {
        var m = j(e), v = j(n), g = m ? di : Ge(e), M = v ? di : Ge(n);
        g = g == lr ? Pt : g, M = M == lr ? Pt : M;
        var Z = g == Pt, J = M == Pt, C = g == M;
        if (C && Un(e)) {
          if (!Un(n))
            return !1;
          m = !0, Z = !1;
        }
        if (C && !Z)
          return p || (p = new Et()), m || Rr(e) ? Yd(e, n, i, l, c, p) : XV(e, n, g, i, l, c, p);
        if (!(i & S)) {
          var D = Z && ae.call(e, "__wrapped__"), _ = J && ae.call(n, "__wrapped__");
          if (D || _) {
            var L = D ? e.value() : e, Y = _ ? n.value() : n;
            return p || (p = new Et()), c(L, Y, i, l, p);
          }
        }
        return C ? (p || (p = new Et()), LV(e, n, i, l, c, p)) : !1;
      }
      function NV(e) {
        return Te(e) && Ge(e) == Zt;
      }
      function Os(e, n, i, l) {
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
          var g = v[0], M = e[g], Z = v[1];
          if (m && v[2]) {
            if (M === r && !(g in e))
              return !1;
          } else {
            var J = new Et();
            if (l)
              var C = l(M, Z, g, e, n, J);
            if (!(C === r ? Vo(Z, M, S | x, l, J) : C))
              return !1;
          }
        }
        return !0;
      }
      function fd(e) {
        if (!we(e) || i0(e))
          return !1;
        var n = Kt(e) ? Nv : f1;
        return n.test(On(e));
      }
      function yV(e) {
        return Te(e) && He(e) == oo;
      }
      function kV(e) {
        return Te(e) && Ge(e) == bt;
      }
      function MV(e) {
        return Te(e) && ea(e.length) && !!fe[He(e)];
      }
      function pd(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? j(e) ? vd(e[0], e[1]) : wd(e) : xh(e);
      }
      function Qs(e) {
        if (!Uo(e))
          return Jv(e);
        var n = [];
        for (var i in ue(e))
          ae.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function ZV(e) {
        if (!we(e))
          return c0(e);
        var n = Uo(e), i = [];
        for (var l in e)
          l == "constructor" && (n || !ae.call(e, l)) || i.push(l);
        return i;
      }
      function zs(e, n) {
        return e < n;
      }
      function md(e, n) {
        var i = -1, l = qe(e) ? y(e.length) : [];
        return vn(e, function(c, p, m) {
          l[++i] = n(c, p, m);
        }), l;
      }
      function wd(e) {
        var n = rl(e);
        return n.length == 1 && n[0][2] ? Ld(n[0][0], n[0][1]) : function(i) {
          return i === e || Os(i, e, n);
        };
      }
      function vd(e, n) {
        return il(e) && Xd(n) ? Ld(zt(e), n) : function(i) {
          var l = ml(i, e);
          return l === r && l === n ? wl(i, e) : Vo(n, l, S | x);
        };
      }
      function Ii(e, n, i, l, c) {
        e !== n && xs(n, function(p, m) {
          if (c || (c = new Et()), we(p))
            bV(e, n, m, i, Ii, l, c);
          else {
            var v = l ? l(sl(e, m), p, m + "", e, n, c) : r;
            v === r && (v = p), Ws(e, m, v);
          }
        }, Ke);
      }
      function bV(e, n, i, l, c, p, m) {
        var v = sl(e, i), g = sl(n, i), M = m.get(g);
        if (M) {
          Ws(e, i, M);
          return;
        }
        var Z = p ? p(v, g, i + "", e, n, m) : r, J = Z === r;
        if (J) {
          var C = j(g), D = !C && Un(g), _ = !C && !D && Rr(g);
          Z = g, C || D || _ ? j(v) ? Z = v : Re(v) ? Z = $e(v) : D ? (J = !1, Z = Jd(g, !0)) : _ ? (J = !1, Z = Ed(g, !0)) : Z = [] : No(g) || Qn(g) ? (Z = v, Qn(v) ? Z = Mh(v) : (!we(v) || Kt(v)) && (Z = jd(g))) : J = !1;
        }
        J && (m.set(g, Z), c(Z, g, l, p, m), m.delete(g)), Ws(e, i, Z);
      }
      function Vd(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, qt(n, i) ? e[n] : r;
      }
      function Td(e, n, i) {
        n.length ? n = pe(n, function(p) {
          return j(p) ? function(m) {
            return In(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [et];
        var l = -1;
        n = pe(n, it(G()));
        var c = md(e, function(p, m, v) {
          var g = pe(n, function(M) {
            return M(p);
          });
          return { criteria: g, index: ++l, value: p };
        });
        return tv(c, function(p, m) {
          return QV(p, m, i);
        });
      }
      function JV(e, n) {
        return gd(e, n, function(i, l) {
          return wl(e, l);
        });
      }
      function gd(e, n, i) {
        for (var l = -1, c = n.length, p = {}; ++l < c; ) {
          var m = n[l], v = In(e, m);
          i(v, m) && To(p, Tn(m, e), v);
        }
        return p;
      }
      function EV(e) {
        return function(n) {
          return In(n, e);
        };
      }
      function Gs(e, n, i, l) {
        var c = l ? ev : dr, p = -1, m = n.length, v = e;
        for (e === n && (n = $e(n)), i && (v = pe(e, it(i))); ++p < m; )
          for (var g = 0, M = n[p], Z = i ? i(M) : M; (g = c(v, Z, g, l)) > -1; )
            v !== e && bi.call(v, g, 1), bi.call(e, g, 1);
        return e;
      }
      function Ud(e, n) {
        for (var i = e ? n.length : 0, l = i - 1; i--; ) {
          var c = n[i];
          if (i == l || c !== p) {
            var p = c;
            qt(c) ? bi.call(e, c, 1) : Hs(e, c);
          }
        }
        return e;
      }
      function _s(e, n) {
        return e + Si(td() * (n - e + 1));
      }
      function SV(e, n, i, l) {
        for (var c = -1, p = Je(Ei((n - e) / (i || 1)), 0), m = y(p); p--; )
          m[l ? p : ++c] = e, e += i;
        return m;
      }
      function Ys(e, n) {
        var i = "";
        if (!e || n < 1 || n > Pe)
          return i;
        do
          n % 2 && (i += e), n = Si(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function $(e, n) {
        return ll($d(e, n, et), e + "");
      }
      function FV(e) {
        return od(Nr(e));
      }
      function AV(e, n) {
        var i = Nr(e);
        return ji(i, Bn(n, 0, i.length));
      }
      function To(e, n, i, l) {
        if (!we(e))
          return e;
        n = Tn(n, e);
        for (var c = -1, p = n.length, m = p - 1, v = e; v != null && ++c < p; ) {
          var g = zt(n[c]), M = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (c != m) {
            var Z = v[g];
            M = l ? l(Z, g, v) : r, M === r && (M = we(Z) ? Z : qt(n[c + 1]) ? [] : {});
          }
          mo(v, g, M), v = v[g];
        }
        return e;
      }
      var Rd = Fi ? function(e, n) {
        return Fi.set(e, n), e;
      } : et, WV = Ji ? function(e, n) {
        return Ji(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Vl(n),
          writable: !0
        });
      } : et;
      function CV(e) {
        return ji(Nr(e));
      }
      function Ut(e, n, i) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), i = i > c ? c : i, i < 0 && (i += c), c = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = y(c); ++l < c; )
          p[l] = e[l + n];
        return p;
      }
      function xV(e, n) {
        var i;
        return vn(e, function(l, c, p) {
          return i = n(l, c, p), !i;
        }), !!i;
      }
      function Di(e, n, i) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= Iw) {
          for (; l < c; ) {
            var p = l + c >>> 1, m = e[p];
            m !== null && !st(m) && (i ? m <= n : m < n) ? l = p + 1 : c = p;
          }
          return c;
        }
        return Ps(e, n, et, i);
      }
      function Ps(e, n, i, l) {
        var c = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, v = n === null, g = st(n), M = n === r; c < p; ) {
          var Z = Si((c + p) / 2), J = i(e[Z]), C = J !== r, D = J === null, _ = J === J, L = st(J);
          if (m)
            var Y = l || _;
          else
            M ? Y = _ && (l || C) : v ? Y = _ && C && (l || !D) : g ? Y = _ && C && !D && (l || !L) : D || L ? Y = !1 : Y = l ? J <= n : J < n;
          Y ? c = Z + 1 : p = Z;
        }
        return ze(p, Bw);
      }
      function Nd(e, n) {
        for (var i = -1, l = e.length, c = 0, p = []; ++i < l; ) {
          var m = e[i], v = n ? n(m) : m;
          if (!i || !St(v, g)) {
            var g = v;
            p[c++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function yd(e) {
        return typeof e == "number" ? e : st(e) ? ui : +e;
      }
      function at(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return pe(e, at) + "";
        if (st(e))
          return nd ? nd.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -xe ? "-0" : n;
      }
      function Vn(e, n, i) {
        var l = -1, c = Vi, p = e.length, m = !0, v = [], g = v;
        if (i)
          m = !1, c = Us;
        else if (p >= a) {
          var M = n ? null : HV(e);
          if (M)
            return gi(M);
          m = !1, c = lo, g = new xn();
        } else
          g = n ? [] : v;
        e:
          for (; ++l < p; ) {
            var Z = e[l], J = n ? n(Z) : Z;
            if (Z = i || Z !== 0 ? Z : 0, m && J === J) {
              for (var C = g.length; C--; )
                if (g[C] === J)
                  continue e;
              n && g.push(J), v.push(Z);
            } else
              c(g, J, i) || (g !== v && g.push(J), v.push(Z));
          }
        return v;
      }
      function Hs(e, n) {
        return n = Tn(n, e), e = qd(e, n), e == null || delete e[zt(Rt(n))];
      }
      function kd(e, n, i, l) {
        return To(e, n, i(In(e, n)), l);
      }
      function Oi(e, n, i, l) {
        for (var c = e.length, p = l ? c : -1; (l ? p-- : ++p < c) && n(e[p], p, e); )
          ;
        return i ? Ut(e, l ? 0 : p, l ? p + 1 : c) : Ut(e, l ? p + 1 : 0, l ? c : p);
      }
      function Md(e, n) {
        var i = e;
        return i instanceof ee && (i = i.value()), Rs(n, function(l, c) {
          return c.func.apply(c.thisArg, pn([l], c.args));
        }, i);
      }
      function js(e, n, i) {
        var l = e.length;
        if (l < 2)
          return l ? Vn(e[0]) : [];
        for (var c = -1, p = y(l); ++c < l; )
          for (var m = e[c], v = -1; ++v < l; )
            v != c && (p[c] = wo(p[c] || m, e[v], n, i));
        return Vn(Ie(p, 1), n, i);
      }
      function Zd(e, n, i) {
        for (var l = -1, c = e.length, p = n.length, m = {}; ++l < c; ) {
          var v = l < p ? n[l] : r;
          i(m, e[l], v);
        }
        return m;
      }
      function Xs(e) {
        return Re(e) ? e : [];
      }
      function Ls(e) {
        return typeof e == "function" ? e : et;
      }
      function Tn(e, n) {
        return j(e) ? e : il(e, n) ? [e] : nh(ie(e));
      }
      var BV = $;
      function gn(e, n, i) {
        var l = e.length;
        return i = i === r ? l : i, !n && i >= l ? e : Ut(e, n, i);
      }
      var bd = yv || function(e) {
        return Be.clearTimeout(e);
      };
      function Jd(e, n) {
        if (n)
          return e.slice();
        var i = e.length, l = Lu ? Lu(i) : new e.constructor(i);
        return e.copy(l), l;
      }
      function $s(e) {
        var n = new e.constructor(e.byteLength);
        return new Mi(n).set(new Mi(e)), n;
      }
      function IV(e, n) {
        var i = n ? $s(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function DV(e) {
        var n = new e.constructor(e.source, hu.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function OV(e) {
        return po ? ue(po.call(e)) : {};
      }
      function Ed(e, n) {
        var i = n ? $s(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Sd(e, n) {
        if (e !== n) {
          var i = e !== r, l = e === null, c = e === e, p = st(e), m = n !== r, v = n === null, g = n === n, M = st(n);
          if (!v && !M && !p && e > n || p && m && g && !v && !M || l && m && g || !i && g || !c)
            return 1;
          if (!l && !p && !M && e < n || M && i && c && !l && !p || v && i && c || !m && c || !g)
            return -1;
        }
        return 0;
      }
      function QV(e, n, i) {
        for (var l = -1, c = e.criteria, p = n.criteria, m = c.length, v = i.length; ++l < m; ) {
          var g = Sd(c[l], p[l]);
          if (g) {
            if (l >= v)
              return g;
            var M = i[l];
            return g * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Fd(e, n, i, l) {
        for (var c = -1, p = e.length, m = i.length, v = -1, g = n.length, M = Je(p - m, 0), Z = y(g + M), J = !l; ++v < g; )
          Z[v] = n[v];
        for (; ++c < m; )
          (J || c < p) && (Z[i[c]] = e[c]);
        for (; M--; )
          Z[v++] = e[c++];
        return Z;
      }
      function Ad(e, n, i, l) {
        for (var c = -1, p = e.length, m = -1, v = i.length, g = -1, M = n.length, Z = Je(p - v, 0), J = y(Z + M), C = !l; ++c < Z; )
          J[c] = e[c];
        for (var D = c; ++g < M; )
          J[D + g] = n[g];
        for (; ++m < v; )
          (C || c < p) && (J[D + i[m]] = e[c++]);
        return J;
      }
      function $e(e, n) {
        var i = -1, l = e.length;
        for (n || (n = y(l)); ++i < l; )
          n[i] = e[i];
        return n;
      }
      function Qt(e, n, i, l) {
        var c = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var v = n[p], g = l ? l(i[v], e[v], v, i, e) : r;
          g === r && (g = e[v]), c ? Xt(i, v, g) : mo(i, v, g);
        }
        return i;
      }
      function zV(e, n) {
        return Qt(e, ol(e), n);
      }
      function GV(e, n) {
        return Qt(e, Pd(e), n);
      }
      function Qi(e, n) {
        return function(i, l) {
          var c = j(i) ? j1 : dV, p = n ? n() : {};
          return c(i, e, G(l, 2), p);
        };
      }
      function Tr(e) {
        return $(function(n, i) {
          var l = -1, c = i.length, p = c > 1 ? i[c - 1] : r, m = c > 2 ? i[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (c--, p) : r, m && je(i[0], i[1], m) && (p = c < 3 ? r : p, c = 1), n = ue(n); ++l < c; ) {
            var v = i[l];
            v && e(n, v, l, p);
          }
          return n;
        });
      }
      function Wd(e, n) {
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
      function Cd(e) {
        return function(n, i, l) {
          for (var c = -1, p = ue(n), m = l(n), v = m.length; v--; ) {
            var g = m[e ? v : ++c];
            if (i(p[g], g, p) === !1)
              break;
          }
          return n;
        };
      }
      function _V(e, n, i) {
        var l = n & B, c = go(e);
        function p() {
          var m = this && this !== Be && this instanceof p ? c : e;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function xd(e) {
        return function(n) {
          n = ie(n);
          var i = hr(n) ? Jt(n) : r, l = i ? i[0] : n.charAt(0), c = i ? gn(i, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function gr(e) {
        return function(n) {
          return Rs(Wh(Ah(n).replace(W1, "")), e, "");
        };
      }
      function go(e) {
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
          var i = Vr(e.prototype), l = e.apply(i, n);
          return we(l) ? l : i;
        };
      }
      function YV(e, n, i) {
        var l = go(e);
        function c() {
          for (var p = arguments.length, m = y(p), v = p, g = Ur(c); v--; )
            m[v] = arguments[v];
          var M = p < 3 && m[0] !== g && m[p - 1] !== g ? [] : mn(m, g);
          if (p -= M.length, p < i)
            return Qd(
              e,
              n,
              zi,
              c.placeholder,
              r,
              m,
              M,
              r,
              r,
              i - p
            );
          var Z = this && this !== Be && this instanceof c ? l : e;
          return ot(Z, this, m);
        }
        return c;
      }
      function Bd(e) {
        return function(n, i, l) {
          var c = ue(n);
          if (!qe(n)) {
            var p = G(i, 3);
            n = Fe(n), i = function(v) {
              return p(c[v], v, c);
            };
          }
          var m = e(n, i, l);
          return m > -1 ? c[p ? n[m] : m] : r;
        };
      }
      function Id(e) {
        return $t(function(n) {
          var i = n.length, l = i, c = Tt.prototype.thru;
          for (e && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Vt(d);
            if (c && !m && Pi(p) == "wrapper")
              var m = new Tt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var v = Pi(p), g = v == "wrapper" ? nl(p) : r;
            g && al(g[0]) && g[1] == (Q | E | b | P) && !g[4].length && g[9] == 1 ? m = m[Pi(g[0])].apply(m, g[3]) : m = p.length == 1 && al(p) ? m[v]() : m.thru(p);
          }
          return function() {
            var M = arguments, Z = M[0];
            if (m && M.length == 1 && j(Z))
              return m.plant(Z).value();
            for (var J = 0, C = i ? n[J].apply(this, M) : Z; ++J < i; )
              C = n[J].call(this, C);
            return C;
          };
        });
      }
      function zi(e, n, i, l, c, p, m, v, g, M) {
        var Z = n & Q, J = n & B, C = n & F, D = n & (E | O), _ = n & me, L = C ? r : go(e);
        function Y() {
          for (var K = arguments.length, te = y(K), lt = K; lt--; )
            te[lt] = arguments[lt];
          if (D)
            var Xe = Ur(Y), ct = rv(te, Xe);
          if (l && (te = Fd(te, l, c, D)), p && (te = Ad(te, p, m, D)), K -= ct, D && K < M) {
            var Ne = mn(te, Xe);
            return Qd(
              e,
              n,
              zi,
              Y.placeholder,
              i,
              te,
              Ne,
              v,
              g,
              M - K
            );
          }
          var Ft = J ? i : this, tn = C ? Ft[e] : e;
          return K = te.length, v ? te = d0(te, v) : _ && K > 1 && te.reverse(), Z && g < K && (te.length = g), this && this !== Be && this instanceof Y && (tn = L || go(tn)), tn.apply(Ft, te);
        }
        return Y;
      }
      function Dd(e, n) {
        return function(i, l) {
          return TV(i, e, n(l), {});
        };
      }
      function Gi(e, n) {
        return function(i, l) {
          var c;
          if (i === r && l === r)
            return n;
          if (i !== r && (c = i), l !== r) {
            if (c === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = at(i), l = at(l)) : (i = yd(i), l = yd(l)), c = e(i, l);
          }
          return c;
        };
      }
      function qs(e) {
        return $t(function(n) {
          return n = pe(n, it(G())), $(function(i) {
            var l = this;
            return e(n, function(c) {
              return ot(c, l, i);
            });
          });
        });
      }
      function _i(e, n) {
        n = n === r ? " " : at(n);
        var i = n.length;
        if (i < 2)
          return i ? Ys(n, e) : n;
        var l = Ys(n, Ei(e / fr(n)));
        return hr(n) ? gn(Jt(l), 0, e).join("") : l.slice(0, e);
      }
      function PV(e, n, i, l) {
        var c = n & B, p = go(e);
        function m() {
          for (var v = -1, g = arguments.length, M = -1, Z = l.length, J = y(Z + g), C = this && this !== Be && this instanceof m ? p : e; ++M < Z; )
            J[M] = l[M];
          for (; g--; )
            J[M++] = arguments[++v];
          return ot(C, c ? i : this, J);
        }
        return m;
      }
      function Od(e) {
        return function(n, i, l) {
          return l && typeof l != "number" && je(n, i, l) && (i = l = r), n = en(n), i === r ? (i = n, n = 0) : i = en(i), l = l === r ? n < i ? 1 : -1 : en(l), SV(n, i, l, e);
        };
      }
      function Yi(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Nt(n), i = Nt(i)), e(n, i);
        };
      }
      function Qd(e, n, i, l, c, p, m, v, g, M) {
        var Z = n & E, J = Z ? m : r, C = Z ? r : m, D = Z ? p : r, _ = Z ? r : p;
        n |= Z ? b : z, n &= ~(Z ? z : b), n & W || (n &= ~(B | F));
        var L = [
          e,
          n,
          c,
          D,
          J,
          _,
          C,
          v,
          g,
          M
        ], Y = i.apply(r, L);
        return al(e) && Kd(Y, L), Y.placeholder = l, eh(Y, e, n);
      }
      function Ks(e) {
        var n = be[e];
        return function(i, l) {
          if (i = Nt(i), l = l == null ? 0 : ze(X(l), 292), l && ed(i)) {
            var c = (ie(i) + "e").split("e"), p = n(c[0] + "e" + (+c[1] + l));
            return c = (ie(p) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(i);
        };
      }
      var HV = wr && 1 / gi(new wr([, -0]))[1] == xe ? function(e) {
        return new wr(e);
      } : Ul;
      function zd(e) {
        return function(n) {
          var i = Ge(n);
          return i == Zt ? Js(n) : i == bt ? uv(n) : nv(n, e(n));
        };
      }
      function Lt(e, n, i, l, c, p, m, v) {
        var g = n & F;
        if (!g && typeof e != "function")
          throw new Vt(d);
        var M = l ? l.length : 0;
        if (M || (n &= ~(b | z), l = c = r), m = m === r ? m : Je(X(m), 0), v = v === r ? v : X(v), M -= c ? c.length : 0, n & z) {
          var Z = l, J = c;
          l = c = r;
        }
        var C = g ? r : nl(e), D = [
          e,
          n,
          i,
          l,
          c,
          Z,
          J,
          p,
          m,
          v
        ];
        if (C && l0(D, C), e = D[0], n = D[1], i = D[2], l = D[3], c = D[4], v = D[9] = D[9] === r ? g ? 0 : e.length : Je(D[9] - M, 0), !v && n & (E | O) && (n &= ~(E | O)), !n || n == B)
          var _ = _V(e, n, i);
        else
          n == E || n == O ? _ = YV(e, n, v) : (n == b || n == (B | b)) && !c.length ? _ = PV(e, n, i, l) : _ = zi.apply(r, D);
        var L = C ? Rd : Kd;
        return eh(L(_, D), e, n);
      }
      function Gd(e, n, i, l) {
        return e === r || St(e, mr[i]) && !ae.call(l, i) ? n : e;
      }
      function _d(e, n, i, l, c, p) {
        return we(e) && we(n) && (p.set(n, e), Ii(e, n, r, _d, p), p.delete(n)), e;
      }
      function jV(e) {
        return No(e) ? r : e;
      }
      function Yd(e, n, i, l, c, p) {
        var m = i & S, v = e.length, g = n.length;
        if (v != g && !(m && g > v))
          return !1;
        var M = p.get(e), Z = p.get(n);
        if (M && Z)
          return M == n && Z == e;
        var J = -1, C = !0, D = i & x ? new xn() : r;
        for (p.set(e, n), p.set(n, e); ++J < v; ) {
          var _ = e[J], L = n[J];
          if (l)
            var Y = m ? l(L, _, J, n, e, p) : l(_, L, J, e, n, p);
          if (Y !== r) {
            if (Y)
              continue;
            C = !1;
            break;
          }
          if (D) {
            if (!Ns(n, function(K, te) {
              if (!lo(D, te) && (_ === K || c(_, K, i, l, p)))
                return D.push(te);
            })) {
              C = !1;
              break;
            }
          } else if (!(_ === L || c(_, L, i, l, p))) {
            C = !1;
            break;
          }
        }
        return p.delete(e), p.delete(n), C;
      }
      function XV(e, n, i, l, c, p, m) {
        switch (i) {
          case cr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case so:
            return !(e.byteLength != n.byteLength || !p(new Mi(e), new Mi(n)));
          case to:
          case no:
          case ro:
            return St(+e, +n);
          case hi:
            return e.name == n.name && e.message == n.message;
          case oo:
          case io:
            return e == n + "";
          case Zt:
            var v = Js;
          case bt:
            var g = l & S;
            if (v || (v = gi), e.size != n.size && !g)
              return !1;
            var M = m.get(e);
            if (M)
              return M == n;
            l |= x, m.set(e, n);
            var Z = Yd(v(e), v(n), l, c, p, m);
            return m.delete(e), Z;
          case pi:
            if (po)
              return po.call(e) == po.call(n);
        }
        return !1;
      }
      function LV(e, n, i, l, c, p) {
        var m = i & S, v = el(e), g = v.length, M = el(n), Z = M.length;
        if (g != Z && !m)
          return !1;
        for (var J = g; J--; ) {
          var C = v[J];
          if (!(m ? C in n : ae.call(n, C)))
            return !1;
        }
        var D = p.get(e), _ = p.get(n);
        if (D && _)
          return D == n && _ == e;
        var L = !0;
        p.set(e, n), p.set(n, e);
        for (var Y = m; ++J < g; ) {
          C = v[J];
          var K = e[C], te = n[C];
          if (l)
            var lt = m ? l(te, K, C, n, e, p) : l(K, te, C, e, n, p);
          if (!(lt === r ? K === te || c(K, te, i, l, p) : lt)) {
            L = !1;
            break;
          }
          Y || (Y = C == "constructor");
        }
        if (L && !Y) {
          var Xe = e.constructor, ct = n.constructor;
          Xe != ct && "constructor" in e && "constructor" in n && !(typeof Xe == "function" && Xe instanceof Xe && typeof ct == "function" && ct instanceof ct) && (L = !1);
        }
        return p.delete(e), p.delete(n), L;
      }
      function $t(e) {
        return ll($d(e, r, ah), e + "");
      }
      function el(e) {
        return dd(e, Fe, ol);
      }
      function tl(e) {
        return dd(e, Ke, Pd);
      }
      var nl = Fi ? function(e) {
        return Fi.get(e);
      } : Ul;
      function Pi(e) {
        for (var n = e.name + "", i = vr[n], l = ae.call(vr, n) ? i.length : 0; l--; ) {
          var c = i[l], p = c.func;
          if (p == null || p == e)
            return c.name;
        }
        return n;
      }
      function Ur(e) {
        var n = ae.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function G() {
        var e = f.iteratee || Tl;
        return e = e === Tl ? pd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Hi(e, n) {
        var i = e.__data__;
        return o0(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function rl(e) {
        for (var n = Fe(e), i = n.length; i--; ) {
          var l = n[i], c = e[l];
          n[i] = [l, c, Xd(c)];
        }
        return n;
      }
      function Dn(e, n) {
        var i = sv(e, n);
        return fd(i) ? i : r;
      }
      function $V(e) {
        var n = ae.call(e, Wn), i = e[Wn];
        try {
          e[Wn] = r;
          var l = !0;
        } catch {
        }
        var c = yi.call(e);
        return l && (n ? e[Wn] = i : delete e[Wn]), c;
      }
      var ol = Ss ? function(e) {
        return e == null ? [] : (e = ue(e), fn(Ss(e), function(n) {
          return qu.call(e, n);
        }));
      } : Rl, Pd = Ss ? function(e) {
        for (var n = []; e; )
          pn(n, ol(e)), e = Zi(e);
        return n;
      } : Rl, Ge = He;
      (Fs && Ge(new Fs(new ArrayBuffer(1))) != cr || uo && Ge(new uo()) != Zt || As && Ge(As.resolve()) != lu || wr && Ge(new wr()) != bt || ho && Ge(new ho()) != ao) && (Ge = function(e) {
        var n = He(e), i = n == Pt ? e.constructor : r, l = i ? On(i) : "";
        if (l)
          switch (l) {
            case Av:
              return cr;
            case Wv:
              return Zt;
            case Cv:
              return lu;
            case xv:
              return bt;
            case Bv:
              return ao;
          }
        return n;
      });
      function qV(e, n, i) {
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
              n = ze(n, e + m);
              break;
            case "takeRight":
              e = Je(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function KV(e) {
        var n = e.match(i1);
        return n ? n[1].split(a1) : [];
      }
      function Hd(e, n, i) {
        n = Tn(n, e);
        for (var l = -1, c = n.length, p = !1; ++l < c; ) {
          var m = zt(n[l]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++l != c ? p : (c = e == null ? 0 : e.length, !!c && ea(c) && qt(m, c) && (j(e) || Qn(e)));
      }
      function e0(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && ae.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function jd(e) {
        return typeof e.constructor == "function" && !Uo(e) ? Vr(Zi(e)) : {};
      }
      function t0(e, n, i) {
        var l = e.constructor;
        switch (n) {
          case so:
            return $s(e);
          case to:
          case no:
            return new l(+e);
          case cr:
            return IV(e, i);
          case rs:
          case os:
          case is:
          case as:
          case ss:
          case ls:
          case cs:
          case us:
          case ds:
            return Ed(e, i);
          case Zt:
            return new l();
          case ro:
          case io:
            return new l(e);
          case oo:
            return DV(e);
          case bt:
            return new l();
          case pi:
            return OV(e);
        }
      }
      function n0(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), e.replace(o1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function r0(e) {
        return j(e) || Qn(e) || !!(Ku && e && e[Ku]);
      }
      function qt(e, n) {
        var i = typeof e;
        return n = n == null ? Pe : n, !!n && (i == "number" || i != "symbol" && m1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function je(e, n, i) {
        if (!we(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? qe(i) && qt(n, i.length) : l == "string" && n in i) ? St(i[n], e) : !1;
      }
      function il(e, n) {
        if (j(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || st(e) ? !0 : e1.test(e) || !Kw.test(e) || n != null && e in ue(n);
      }
      function o0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function al(e) {
        var n = Pi(e), i = f[n];
        if (typeof i != "function" || !(n in ee.prototype))
          return !1;
        if (e === i)
          return !0;
        var l = nl(i);
        return !!l && e === l[0];
      }
      function i0(e) {
        return !!Xu && Xu in e;
      }
      var a0 = Ri ? Kt : Nl;
      function Uo(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || mr;
        return e === i;
      }
      function Xd(e) {
        return e === e && !we(e);
      }
      function Ld(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in ue(i));
        };
      }
      function s0(e) {
        var n = qi(e, function(l) {
          return i.size === U && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function l0(e, n) {
        var i = e[1], l = n[1], c = i | l, p = c < (B | F | Q), m = l == Q && i == E || l == Q && i == P && e[7].length <= n[8] || l == (Q | P) && n[7].length <= n[8] && i == E;
        if (!(p || m))
          return e;
        l & B && (e[2] = n[2], c |= i & B ? 0 : W);
        var v = n[3];
        if (v) {
          var g = e[3];
          e[3] = g ? Fd(g, v, n[4]) : v, e[4] = g ? mn(e[3], V) : n[4];
        }
        return v = n[5], v && (g = e[5], e[5] = g ? Ad(g, v, n[6]) : v, e[6] = g ? mn(e[5], V) : n[6]), v = n[7], v && (e[7] = v), l & Q && (e[8] = e[8] == null ? n[8] : ze(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function c0(e) {
        var n = [];
        if (e != null)
          for (var i in ue(e))
            n.push(i);
        return n;
      }
      function u0(e) {
        return yi.call(e);
      }
      function $d(e, n, i) {
        return n = Je(n === r ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, p = Je(l.length - n, 0), m = y(p); ++c < p; )
            m[c] = l[n + c];
          c = -1;
          for (var v = y(n + 1); ++c < n; )
            v[c] = l[c];
          return v[n] = i(m), ot(e, this, v);
        };
      }
      function qd(e, n) {
        return n.length < 2 ? e : In(e, Ut(n, 0, -1));
      }
      function d0(e, n) {
        for (var i = e.length, l = ze(n.length, i), c = $e(e); l--; ) {
          var p = n[l];
          e[l] = qt(p, i) ? c[p] : r;
        }
        return e;
      }
      function sl(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Kd = th(Rd), Ro = Mv || function(e, n) {
        return Be.setTimeout(e, n);
      }, ll = th(WV);
      function eh(e, n, i) {
        var l = n + "";
        return ll(e, n0(l, h0(KV(l), i)));
      }
      function th(e) {
        var n = 0, i = 0;
        return function() {
          var l = Ev(), c = Ue - (l - i);
          if (i = l, c > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function ji(e, n) {
        var i = -1, l = e.length, c = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = _s(i, c), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var nh = s0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(t1, function(i, l, c, p) {
          n.push(c ? p.replace(c1, "$1") : l || i);
        }), n;
      });
      function zt(e) {
        if (typeof e == "string" || st(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -xe ? "-0" : n;
      }
      function On(e) {
        if (e != null) {
          try {
            return Ni.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function h0(e, n) {
        return vt(Dw, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Vi(e, l) && e.push(l);
        }), e.sort();
      }
      function rh(e) {
        if (e instanceof ee)
          return e.clone();
        var n = new Tt(e.__wrapped__, e.__chain__);
        return n.__actions__ = $e(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function f0(e, n, i) {
        (i ? je(e, n, i) : n === r) ? n = 1 : n = Je(X(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1)
          return [];
        for (var c = 0, p = 0, m = y(Ei(l / n)); c < l; )
          m[p++] = Ut(e, c, c += n);
        return m;
      }
      function p0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
          var p = e[n];
          p && (c[l++] = p);
        }
        return c;
      }
      function m0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = y(e - 1), i = arguments[0], l = e; l--; )
          n[l - 1] = arguments[l];
        return pn(j(i) ? $e(i) : [i], Ie(n, 1));
      }
      var w0 = $(function(e, n) {
        return Re(e) ? wo(e, Ie(n, 1, Re, !0)) : [];
      }), v0 = $(function(e, n) {
        var i = Rt(n);
        return Re(i) && (i = r), Re(e) ? wo(e, Ie(n, 1, Re, !0), G(i, 2)) : [];
      }), V0 = $(function(e, n) {
        var i = Rt(n);
        return Re(i) && (i = r), Re(e) ? wo(e, Ie(n, 1, Re, !0), r, i) : [];
      });
      function T0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), Ut(e, n < 0 ? 0 : n, l)) : [];
      }
      function g0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ut(e, 0, n < 0 ? 0 : n)) : [];
      }
      function U0(e, n) {
        return e && e.length ? Oi(e, G(n, 3), !0, !0) : [];
      }
      function R0(e, n) {
        return e && e.length ? Oi(e, G(n, 3), !0) : [];
      }
      function N0(e, n, i, l) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && je(e, n, i) && (i = 0, l = c), mV(e, n, i, l)) : [];
      }
      function oh(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : X(i);
        return c < 0 && (c = Je(l + c, 0)), Ti(e, G(n, 3), c);
      }
      function ih(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l - 1;
        return i !== r && (c = X(i), c = i < 0 ? Je(l + c, 0) : ze(c, l - 1)), Ti(e, G(n, 3), c, !0);
      }
      function ah(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ie(e, 1) : [];
      }
      function y0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ie(e, xe) : [];
      }
      function k0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : X(n), Ie(e, n)) : [];
      }
      function M0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = {}; ++n < i; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function sh(e) {
        return e && e.length ? e[0] : r;
      }
      function Z0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : X(i);
        return c < 0 && (c = Je(l + c, 0)), dr(e, n, c);
      }
      function b0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ut(e, 0, -1) : [];
      }
      var J0 = $(function(e) {
        var n = pe(e, Xs);
        return n.length && n[0] === e[0] ? Ds(n) : [];
      }), E0 = $(function(e) {
        var n = Rt(e), i = pe(e, Xs);
        return n === Rt(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Ds(i, G(n, 2)) : [];
      }), S0 = $(function(e) {
        var n = Rt(e), i = pe(e, Xs);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Ds(i, r, n) : [];
      });
      function F0(e, n) {
        return e == null ? "" : bv.call(e, n);
      }
      function Rt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function A0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l;
        return i !== r && (c = X(i), c = c < 0 ? Je(l + c, 0) : ze(c, l - 1)), n === n ? hv(e, n, c) : Ti(e, Qu, c, !0);
      }
      function W0(e, n) {
        return e && e.length ? Vd(e, X(n)) : r;
      }
      var C0 = $(lh);
      function lh(e, n) {
        return e && e.length && n && n.length ? Gs(e, n) : e;
      }
      function x0(e, n, i) {
        return e && e.length && n && n.length ? Gs(e, n, G(i, 2)) : e;
      }
      function B0(e, n, i) {
        return e && e.length && n && n.length ? Gs(e, n, r, i) : e;
      }
      var I0 = $t(function(e, n) {
        var i = e == null ? 0 : e.length, l = Cs(e, n);
        return Ud(e, pe(n, function(c) {
          return qt(c, i) ? +c : c;
        }).sort(Sd)), l;
      });
      function D0(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var l = -1, c = [], p = e.length;
        for (n = G(n, 3); ++l < p; ) {
          var m = e[l];
          n(m, l, e) && (i.push(m), c.push(l));
        }
        return Ud(e, c), i;
      }
      function cl(e) {
        return e == null ? e : Fv.call(e);
      }
      function O0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (i && typeof i != "number" && je(e, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === r ? l : X(i)), Ut(e, n, i)) : [];
      }
      function Q0(e, n) {
        return Di(e, n);
      }
      function z0(e, n, i) {
        return Ps(e, n, G(i, 2));
      }
      function G0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Di(e, n);
          if (l < i && St(e[l], n))
            return l;
        }
        return -1;
      }
      function _0(e, n) {
        return Di(e, n, !0);
      }
      function Y0(e, n, i) {
        return Ps(e, n, G(i, 2), !0);
      }
      function P0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Di(e, n, !0) - 1;
          if (St(e[l], n))
            return l;
        }
        return -1;
      }
      function H0(e) {
        return e && e.length ? Nd(e) : [];
      }
      function j0(e, n) {
        return e && e.length ? Nd(e, G(n, 2)) : [];
      }
      function X0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ut(e, 1, n) : [];
      }
      function L0(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : X(n), Ut(e, 0, n < 0 ? 0 : n)) : [];
      }
      function $0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ut(e, n < 0 ? 0 : n, l)) : [];
      }
      function q0(e, n) {
        return e && e.length ? Oi(e, G(n, 3), !1, !0) : [];
      }
      function K0(e, n) {
        return e && e.length ? Oi(e, G(n, 3)) : [];
      }
      var eT = $(function(e) {
        return Vn(Ie(e, 1, Re, !0));
      }), tT = $(function(e) {
        var n = Rt(e);
        return Re(n) && (n = r), Vn(Ie(e, 1, Re, !0), G(n, 2));
      }), nT = $(function(e) {
        var n = Rt(e);
        return n = typeof n == "function" ? n : r, Vn(Ie(e, 1, Re, !0), r, n);
      });
      function rT(e) {
        return e && e.length ? Vn(e) : [];
      }
      function oT(e, n) {
        return e && e.length ? Vn(e, G(n, 2)) : [];
      }
      function iT(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? Vn(e, r, n) : [];
      }
      function ul(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = fn(e, function(i) {
          if (Re(i))
            return n = Je(i.length, n), !0;
        }), Zs(n, function(i) {
          return pe(e, ys(i));
        });
      }
      function ch(e, n) {
        if (!(e && e.length))
          return [];
        var i = ul(e);
        return n == null ? i : pe(i, function(l) {
          return ot(n, r, l);
        });
      }
      var aT = $(function(e, n) {
        return Re(e) ? wo(e, n) : [];
      }), sT = $(function(e) {
        return js(fn(e, Re));
      }), lT = $(function(e) {
        var n = Rt(e);
        return Re(n) && (n = r), js(fn(e, Re), G(n, 2));
      }), cT = $(function(e) {
        var n = Rt(e);
        return n = typeof n == "function" ? n : r, js(fn(e, Re), r, n);
      }), uT = $(ul);
      function dT(e, n) {
        return Zd(e || [], n || [], mo);
      }
      function hT(e, n) {
        return Zd(e || [], n || [], To);
      }
      var fT = $(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, ch(e, i);
      });
      function uh(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function pT(e, n) {
        return n(e), e;
      }
      function Xi(e, n) {
        return n(e);
      }
      var mT = $t(function(e) {
        var n = e.length, i = n ? e[0] : 0, l = this.__wrapped__, c = function(p) {
          return Cs(p, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ee) || !qt(i) ? this.thru(c) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Xi,
          args: [c],
          thisArg: r
        }), new Tt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function wT() {
        return uh(this);
      }
      function vT() {
        return new Tt(this.value(), this.__chain__);
      }
      function VT() {
        this.__values__ === r && (this.__values__ = yh(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function TT() {
        return this;
      }
      function gT(e) {
        for (var n, i = this; i instanceof Wi; ) {
          var l = rh(i);
          l.__index__ = 0, l.__values__ = r, n ? c.__wrapped__ = l : n = l;
          var c = l;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function UT() {
        var e = this.__wrapped__;
        if (e instanceof ee) {
          var n = e;
          return this.__actions__.length && (n = new ee(this)), n = n.reverse(), n.__actions__.push({
            func: Xi,
            args: [cl],
            thisArg: r
          }), new Tt(n, this.__chain__);
        }
        return this.thru(cl);
      }
      function RT() {
        return Md(this.__wrapped__, this.__actions__);
      }
      var NT = Qi(function(e, n, i) {
        ae.call(e, i) ? ++e[i] : Xt(e, i, 1);
      });
      function yT(e, n, i) {
        var l = j(e) ? Du : pV;
        return i && je(e, n, i) && (n = r), l(e, G(n, 3));
      }
      function kT(e, n) {
        var i = j(e) ? fn : cd;
        return i(e, G(n, 3));
      }
      var MT = Bd(oh), ZT = Bd(ih);
      function bT(e, n) {
        return Ie(Li(e, n), 1);
      }
      function JT(e, n) {
        return Ie(Li(e, n), xe);
      }
      function ET(e, n, i) {
        return i = i === r ? 1 : X(i), Ie(Li(e, n), i);
      }
      function dh(e, n) {
        var i = j(e) ? vt : vn;
        return i(e, G(n, 3));
      }
      function hh(e, n) {
        var i = j(e) ? X1 : ld;
        return i(e, G(n, 3));
      }
      var ST = Qi(function(e, n, i) {
        ae.call(e, i) ? e[i].push(n) : Xt(e, i, [n]);
      });
      function FT(e, n, i, l) {
        e = qe(e) ? e : Nr(e), i = i && !l ? X(i) : 0;
        var c = e.length;
        return i < 0 && (i = Je(c + i, 0)), ta(e) ? i <= c && e.indexOf(n, i) > -1 : !!c && dr(e, n, i) > -1;
      }
      var AT = $(function(e, n, i) {
        var l = -1, c = typeof n == "function", p = qe(e) ? y(e.length) : [];
        return vn(e, function(m) {
          p[++l] = c ? ot(n, m, i) : vo(m, n, i);
        }), p;
      }), WT = Qi(function(e, n, i) {
        Xt(e, i, n);
      });
      function Li(e, n) {
        var i = j(e) ? pe : md;
        return i(e, G(n, 3));
      }
      function CT(e, n, i, l) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = l ? r : i, j(i) || (i = i == null ? [] : [i]), Td(e, n, i));
      }
      var xT = Qi(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function BT(e, n, i) {
        var l = j(e) ? Rs : Gu, c = arguments.length < 3;
        return l(e, G(n, 4), i, c, vn);
      }
      function IT(e, n, i) {
        var l = j(e) ? L1 : Gu, c = arguments.length < 3;
        return l(e, G(n, 4), i, c, ld);
      }
      function DT(e, n) {
        var i = j(e) ? fn : cd;
        return i(e, Ki(G(n, 3)));
      }
      function OT(e) {
        var n = j(e) ? od : FV;
        return n(e);
      }
      function QT(e, n, i) {
        (i ? je(e, n, i) : n === r) ? n = 1 : n = X(n);
        var l = j(e) ? cV : AV;
        return l(e, n);
      }
      function zT(e) {
        var n = j(e) ? uV : CV;
        return n(e);
      }
      function GT(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return ta(e) ? fr(e) : e.length;
        var n = Ge(e);
        return n == Zt || n == bt ? e.size : Qs(e).length;
      }
      function _T(e, n, i) {
        var l = j(e) ? Ns : xV;
        return i && je(e, n, i) && (n = r), l(e, G(n, 3));
      }
      var YT = $(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && je(e, n[0], n[1]) ? n = [] : i > 2 && je(n[0], n[1], n[2]) && (n = [n[0]]), Td(e, Ie(n, 1), []);
      }), $i = kv || function() {
        return Be.Date.now();
      };
      function PT(e, n) {
        if (typeof n != "function")
          throw new Vt(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function fh(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, Lt(e, Q, r, r, r, r, n);
      }
      function ph(e, n) {
        var i;
        if (typeof n != "function")
          throw new Vt(d);
        return e = X(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var dl = $(function(e, n, i) {
        var l = B;
        if (i.length) {
          var c = mn(i, Ur(dl));
          l |= b;
        }
        return Lt(e, l, n, i, c);
      }), mh = $(function(e, n, i) {
        var l = B | F;
        if (i.length) {
          var c = mn(i, Ur(mh));
          l |= b;
        }
        return Lt(n, l, e, i, c);
      });
      function wh(e, n, i) {
        n = i ? r : n;
        var l = Lt(e, E, r, r, r, r, r, n);
        return l.placeholder = wh.placeholder, l;
      }
      function vh(e, n, i) {
        n = i ? r : n;
        var l = Lt(e, O, r, r, r, r, r, n);
        return l.placeholder = vh.placeholder, l;
      }
      function Vh(e, n, i) {
        var l, c, p, m, v, g, M = 0, Z = !1, J = !1, C = !0;
        if (typeof e != "function")
          throw new Vt(d);
        n = Nt(n) || 0, we(i) && (Z = !!i.leading, J = "maxWait" in i, p = J ? Je(Nt(i.maxWait) || 0, n) : p, C = "trailing" in i ? !!i.trailing : C);
        function D(Ne) {
          var Ft = l, tn = c;
          return l = c = r, M = Ne, m = e.apply(tn, Ft), m;
        }
        function _(Ne) {
          return M = Ne, v = Ro(K, n), Z ? D(Ne) : m;
        }
        function L(Ne) {
          var Ft = Ne - g, tn = Ne - M, Bh = n - Ft;
          return J ? ze(Bh, p - tn) : Bh;
        }
        function Y(Ne) {
          var Ft = Ne - g, tn = Ne - M;
          return g === r || Ft >= n || Ft < 0 || J && tn >= p;
        }
        function K() {
          var Ne = $i();
          if (Y(Ne))
            return te(Ne);
          v = Ro(K, L(Ne));
        }
        function te(Ne) {
          return v = r, C && l ? D(Ne) : (l = c = r, m);
        }
        function lt() {
          v !== r && bd(v), M = 0, l = g = c = v = r;
        }
        function Xe() {
          return v === r ? m : te($i());
        }
        function ct() {
          var Ne = $i(), Ft = Y(Ne);
          if (l = arguments, c = this, g = Ne, Ft) {
            if (v === r)
              return _(g);
            if (J)
              return bd(v), v = Ro(K, n), D(g);
          }
          return v === r && (v = Ro(K, n)), m;
        }
        return ct.cancel = lt, ct.flush = Xe, ct;
      }
      var HT = $(function(e, n) {
        return sd(e, 1, n);
      }), jT = $(function(e, n, i) {
        return sd(e, Nt(n) || 0, i);
      });
      function XT(e) {
        return Lt(e, me);
      }
      function qi(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Vt(d);
        var i = function() {
          var l = arguments, c = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(c))
            return p.get(c);
          var m = e.apply(this, l);
          return i.cache = p.set(c, m) || p, m;
        };
        return i.cache = new (qi.Cache || jt)(), i;
      }
      qi.Cache = jt;
      function Ki(e) {
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
      function LT(e) {
        return ph(2, e);
      }
      var $T = BV(function(e, n) {
        n = n.length == 1 && j(n[0]) ? pe(n[0], it(G())) : pe(Ie(n, 1), it(G()));
        var i = n.length;
        return $(function(l) {
          for (var c = -1, p = ze(l.length, i); ++c < p; )
            l[c] = n[c].call(this, l[c]);
          return ot(e, this, l);
        });
      }), hl = $(function(e, n) {
        var i = mn(n, Ur(hl));
        return Lt(e, b, r, n, i);
      }), Th = $(function(e, n) {
        var i = mn(n, Ur(Th));
        return Lt(e, z, r, n, i);
      }), qT = $t(function(e, n) {
        return Lt(e, P, r, r, r, n);
      });
      function KT(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n === r ? n : X(n), $(e, n);
      }
      function eg(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n == null ? 0 : Je(X(n), 0), $(function(i) {
          var l = i[n], c = gn(i, 0, n);
          return l && pn(c, l), ot(e, this, c);
        });
      }
      function tg(e, n, i) {
        var l = !0, c = !0;
        if (typeof e != "function")
          throw new Vt(d);
        return we(i) && (l = "leading" in i ? !!i.leading : l, c = "trailing" in i ? !!i.trailing : c), Vh(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function ng(e) {
        return fh(e, 1);
      }
      function rg(e, n) {
        return hl(Ls(n), e);
      }
      function og() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function ig(e) {
        return gt(e, A);
      }
      function ag(e, n) {
        return n = typeof n == "function" ? n : r, gt(e, A, n);
      }
      function sg(e) {
        return gt(e, R | A);
      }
      function lg(e, n) {
        return n = typeof n == "function" ? n : r, gt(e, R | A, n);
      }
      function cg(e, n) {
        return n == null || ad(e, n, Fe(n));
      }
      function St(e, n) {
        return e === n || e !== e && n !== n;
      }
      var ug = Yi(Is), dg = Yi(function(e, n) {
        return e >= n;
      }), Qn = hd(function() {
        return arguments;
      }()) ? hd : function(e) {
        return Te(e) && ae.call(e, "callee") && !qu.call(e, "callee");
      }, j = y.isArray, hg = Au ? it(Au) : gV;
      function qe(e) {
        return e != null && ea(e.length) && !Kt(e);
      }
      function Re(e) {
        return Te(e) && qe(e);
      }
      function fg(e) {
        return e === !0 || e === !1 || Te(e) && He(e) == to;
      }
      var Un = Zv || Nl, pg = Wu ? it(Wu) : UV;
      function mg(e) {
        return Te(e) && e.nodeType === 1 && !No(e);
      }
      function wg(e) {
        if (e == null)
          return !0;
        if (qe(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || Un(e) || Rr(e) || Qn(e)))
          return !e.length;
        var n = Ge(e);
        if (n == Zt || n == bt)
          return !e.size;
        if (Uo(e))
          return !Qs(e).length;
        for (var i in e)
          if (ae.call(e, i))
            return !1;
        return !0;
      }
      function vg(e, n) {
        return Vo(e, n);
      }
      function Vg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(e, n) : r;
        return l === r ? Vo(e, n, r, i) : !!l;
      }
      function fl(e) {
        if (!Te(e))
          return !1;
        var n = He(e);
        return n == hi || n == Qw || typeof e.message == "string" && typeof e.name == "string" && !No(e);
      }
      function Tg(e) {
        return typeof e == "number" && ed(e);
      }
      function Kt(e) {
        if (!we(e))
          return !1;
        var n = He(e);
        return n == fi || n == su || n == Ow || n == Gw;
      }
      function gh(e) {
        return typeof e == "number" && e == X(e);
      }
      function ea(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pe;
      }
      function we(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Te(e) {
        return e != null && typeof e == "object";
      }
      var Uh = Cu ? it(Cu) : NV;
      function gg(e, n) {
        return e === n || Os(e, n, rl(n));
      }
      function Ug(e, n, i) {
        return i = typeof i == "function" ? i : r, Os(e, n, rl(n), i);
      }
      function Rg(e) {
        return Rh(e) && e != +e;
      }
      function Ng(e) {
        if (a0(e))
          throw new H(u);
        return fd(e);
      }
      function yg(e) {
        return e === null;
      }
      function kg(e) {
        return e == null;
      }
      function Rh(e) {
        return typeof e == "number" || Te(e) && He(e) == ro;
      }
      function No(e) {
        if (!Te(e) || He(e) != Pt)
          return !1;
        var n = Zi(e);
        if (n === null)
          return !0;
        var i = ae.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Ni.call(i) == Uv;
      }
      var pl = xu ? it(xu) : yV;
      function Mg(e) {
        return gh(e) && e >= -Pe && e <= Pe;
      }
      var Nh = Bu ? it(Bu) : kV;
      function ta(e) {
        return typeof e == "string" || !j(e) && Te(e) && He(e) == io;
      }
      function st(e) {
        return typeof e == "symbol" || Te(e) && He(e) == pi;
      }
      var Rr = Iu ? it(Iu) : MV;
      function Zg(e) {
        return e === r;
      }
      function bg(e) {
        return Te(e) && Ge(e) == ao;
      }
      function Jg(e) {
        return Te(e) && He(e) == Yw;
      }
      var Eg = Yi(zs), Sg = Yi(function(e, n) {
        return e <= n;
      });
      function yh(e) {
        if (!e)
          return [];
        if (qe(e))
          return ta(e) ? Jt(e) : $e(e);
        if (co && e[co])
          return cv(e[co]());
        var n = Ge(e), i = n == Zt ? Js : n == bt ? gi : Nr;
        return i(e);
      }
      function en(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Nt(e), e === xe || e === -xe) {
          var n = e < 0 ? -1 : 1;
          return n * eo;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = en(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function kh(e) {
        return e ? Bn(X(e), 0, Dt) : 0;
      }
      function Nt(e) {
        if (typeof e == "number")
          return e;
        if (st(e))
          return ui;
        if (we(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = we(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = _u(e);
        var i = h1.test(e);
        return i || p1.test(e) ? P1(e.slice(2), i ? 2 : 8) : d1.test(e) ? ui : +e;
      }
      function Mh(e) {
        return Qt(e, Ke(e));
      }
      function Fg(e) {
        return e ? Bn(X(e), -Pe, Pe) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : at(e);
      }
      var Ag = Tr(function(e, n) {
        if (Uo(n) || qe(n)) {
          Qt(n, Fe(n), e);
          return;
        }
        for (var i in n)
          ae.call(n, i) && mo(e, i, n[i]);
      }), Zh = Tr(function(e, n) {
        Qt(n, Ke(n), e);
      }), na = Tr(function(e, n, i, l) {
        Qt(n, Ke(n), e, l);
      }), Wg = Tr(function(e, n, i, l) {
        Qt(n, Fe(n), e, l);
      }), Cg = $t(Cs);
      function xg(e, n) {
        var i = Vr(e);
        return n == null ? i : id(i, n);
      }
      var Bg = $(function(e, n) {
        e = ue(e);
        var i = -1, l = n.length, c = l > 2 ? n[2] : r;
        for (c && je(n[0], n[1], c) && (l = 1); ++i < l; )
          for (var p = n[i], m = Ke(p), v = -1, g = m.length; ++v < g; ) {
            var M = m[v], Z = e[M];
            (Z === r || St(Z, mr[M]) && !ae.call(e, M)) && (e[M] = p[M]);
          }
        return e;
      }), Ig = $(function(e) {
        return e.push(r, _d), ot(bh, r, e);
      });
      function Dg(e, n) {
        return Ou(e, G(n, 3), Ot);
      }
      function Og(e, n) {
        return Ou(e, G(n, 3), Bs);
      }
      function Qg(e, n) {
        return e == null ? e : xs(e, G(n, 3), Ke);
      }
      function zg(e, n) {
        return e == null ? e : ud(e, G(n, 3), Ke);
      }
      function Gg(e, n) {
        return e && Ot(e, G(n, 3));
      }
      function _g(e, n) {
        return e && Bs(e, G(n, 3));
      }
      function Yg(e) {
        return e == null ? [] : Bi(e, Fe(e));
      }
      function Pg(e) {
        return e == null ? [] : Bi(e, Ke(e));
      }
      function ml(e, n, i) {
        var l = e == null ? r : In(e, n);
        return l === r ? i : l;
      }
      function Hg(e, n) {
        return e != null && Hd(e, n, wV);
      }
      function wl(e, n) {
        return e != null && Hd(e, n, vV);
      }
      var jg = Dd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = yi.call(n)), e[n] = i;
      }, Vl(et)), Xg = Dd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = yi.call(n)), ae.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, G), Lg = $(vo);
      function Fe(e) {
        return qe(e) ? rd(e) : Qs(e);
      }
      function Ke(e) {
        return qe(e) ? rd(e, !0) : ZV(e);
      }
      function $g(e, n) {
        var i = {};
        return n = G(n, 3), Ot(e, function(l, c, p) {
          Xt(i, n(l, c, p), l);
        }), i;
      }
      function qg(e, n) {
        var i = {};
        return n = G(n, 3), Ot(e, function(l, c, p) {
          Xt(i, c, n(l, c, p));
        }), i;
      }
      var Kg = Tr(function(e, n, i) {
        Ii(e, n, i);
      }), bh = Tr(function(e, n, i, l) {
        Ii(e, n, i, l);
      }), eU = $t(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var l = !1;
        n = pe(n, function(p) {
          return p = Tn(p, e), l || (l = p.length > 1), p;
        }), Qt(e, tl(e), i), l && (i = gt(i, R | N | A, jV));
        for (var c = n.length; c--; )
          Hs(i, n[c]);
        return i;
      });
      function tU(e, n) {
        return Jh(e, Ki(G(n)));
      }
      var nU = $t(function(e, n) {
        return e == null ? {} : JV(e, n);
      });
      function Jh(e, n) {
        if (e == null)
          return {};
        var i = pe(tl(e), function(l) {
          return [l];
        });
        return n = G(n), gd(e, i, function(l, c) {
          return n(l, c[0]);
        });
      }
      function rU(e, n, i) {
        n = Tn(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = r); ++l < c; ) {
          var p = e == null ? r : e[zt(n[l])];
          p === r && (l = c, p = i), e = Kt(p) ? p.call(e) : p;
        }
        return e;
      }
      function oU(e, n, i) {
        return e == null ? e : To(e, n, i);
      }
      function iU(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : To(e, n, i, l);
      }
      var Eh = zd(Fe), Sh = zd(Ke);
      function aU(e, n, i) {
        var l = j(e), c = l || Un(e) || Rr(e);
        if (n = G(n, 4), i == null) {
          var p = e && e.constructor;
          c ? i = l ? new p() : [] : we(e) ? i = Kt(p) ? Vr(Zi(e)) : {} : i = {};
        }
        return (c ? vt : Ot)(e, function(m, v, g) {
          return n(i, m, v, g);
        }), i;
      }
      function sU(e, n) {
        return e == null ? !0 : Hs(e, n);
      }
      function lU(e, n, i) {
        return e == null ? e : kd(e, n, Ls(i));
      }
      function cU(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : kd(e, n, Ls(i), l);
      }
      function Nr(e) {
        return e == null ? [] : bs(e, Fe(e));
      }
      function uU(e) {
        return e == null ? [] : bs(e, Ke(e));
      }
      function dU(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Nt(i), i = i === i ? i : 0), n !== r && (n = Nt(n), n = n === n ? n : 0), Bn(Nt(e), n, i);
      }
      function hU(e, n, i) {
        return n = en(n), i === r ? (i = n, n = 0) : i = en(i), e = Nt(e), VV(e, n, i);
      }
      function fU(e, n, i) {
        if (i && typeof i != "boolean" && je(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = en(e), n === r ? (n = e, e = 0) : n = en(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (i || e % 1 || n % 1) {
          var c = td();
          return ze(e + c * (n - e + Y1("1e-" + ((c + "").length - 1))), n);
        }
        return _s(e, n);
      }
      var pU = gr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? Fh(n) : n);
      });
      function Fh(e) {
        return vl(ie(e).toLowerCase());
      }
      function Ah(e) {
        return e = ie(e), e && e.replace(w1, ov).replace(C1, "");
      }
      function mU(e, n, i) {
        e = ie(e), n = at(n);
        var l = e.length;
        i = i === r ? l : Bn(X(i), 0, l);
        var c = i;
        return i -= n.length, i >= 0 && e.slice(i, c) == n;
      }
      function wU(e) {
        return e = ie(e), e && Lw.test(e) ? e.replace(uu, iv) : e;
      }
      function vU(e) {
        return e = ie(e), e && n1.test(e) ? e.replace(hs, "\\$&") : e;
      }
      var VU = gr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), TU = gr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), gU = xd("toLowerCase");
      function UU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? fr(e) : 0;
        if (!n || l >= n)
          return e;
        var c = (n - l) / 2;
        return _i(Si(c), i) + e + _i(Ei(c), i);
      }
      function RU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? fr(e) : 0;
        return n && l < n ? e + _i(n - l, i) : e;
      }
      function NU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? fr(e) : 0;
        return n && l < n ? _i(n - l, i) + e : e;
      }
      function yU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), Sv(ie(e).replace(fs, ""), n || 0);
      }
      function kU(e, n, i) {
        return (i ? je(e, n, i) : n === r) ? n = 1 : n = X(n), Ys(ie(e), n);
      }
      function MU() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var ZU = gr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function bU(e, n, i) {
        return i && typeof i != "number" && je(e, n, i) && (n = i = r), i = i === r ? Dt : i >>> 0, i ? (e = ie(e), e && (typeof n == "string" || n != null && !pl(n)) && (n = at(n), !n && hr(e)) ? gn(Jt(e), 0, i) : e.split(n, i)) : [];
      }
      var JU = gr(function(e, n, i) {
        return e + (i ? " " : "") + vl(n);
      });
      function EU(e, n, i) {
        return e = ie(e), i = i == null ? 0 : Bn(X(i), 0, e.length), n = at(n), e.slice(i, i + n.length) == n;
      }
      function SU(e, n, i) {
        var l = f.templateSettings;
        i && je(e, n, i) && (n = r), e = ie(e), n = na({}, n, l, Gd);
        var c = na({}, n.imports, l.imports, Gd), p = Fe(c), m = bs(c, p), v, g, M = 0, Z = n.interpolate || mi, J = "__p += '", C = Es(
          (n.escape || mi).source + "|" + Z.source + "|" + (Z === du ? u1 : mi).source + "|" + (n.evaluate || mi).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (ae.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++O1 + "]") + `
`;
        e.replace(C, function(Y, K, te, lt, Xe, ct) {
          return te || (te = lt), J += e.slice(M, ct).replace(v1, av), K && (v = !0, J += `' +
__e(` + K + `) +
'`), Xe && (g = !0, J += `';
` + Xe + `;
__p += '`), te && (J += `' +
((__t = (` + te + `)) == null ? '' : __t) +
'`), M = ct + Y.length, Y;
        }), J += `';
`;
        var _ = ae.call(n, "variable") && n.variable;
        if (!_)
          J = `with (obj) {
` + J + `
}
`;
        else if (l1.test(_))
          throw new H(h);
        J = (g ? J.replace(Pw, "") : J).replace(Hw, "$1").replace(jw, "$1;"), J = "function(" + (_ || "obj") + `) {
` + (_ ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var L = Ch(function() {
          return re(p, D + "return " + J).apply(r, m);
        });
        if (L.source = J, fl(L))
          throw L;
        return L;
      }
      function FU(e) {
        return ie(e).toLowerCase();
      }
      function AU(e) {
        return ie(e).toUpperCase();
      }
      function WU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return _u(e);
        if (!e || !(n = at(n)))
          return e;
        var l = Jt(e), c = Jt(n), p = Yu(l, c), m = Pu(l, c) + 1;
        return gn(l, p, m).join("");
      }
      function CU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.slice(0, ju(e) + 1);
        if (!e || !(n = at(n)))
          return e;
        var l = Jt(e), c = Pu(l, Jt(n)) + 1;
        return gn(l, 0, c).join("");
      }
      function xU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.replace(fs, "");
        if (!e || !(n = at(n)))
          return e;
        var l = Jt(e), c = Yu(l, Jt(n));
        return gn(l, c).join("");
      }
      function BU(e, n) {
        var i = de, l = ve;
        if (we(n)) {
          var c = "separator" in n ? n.separator : c;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? at(n.omission) : l;
        }
        e = ie(e);
        var p = e.length;
        if (hr(e)) {
          var m = Jt(e);
          p = m.length;
        }
        if (i >= p)
          return e;
        var v = i - fr(l);
        if (v < 1)
          return l;
        var g = m ? gn(m, 0, v).join("") : e.slice(0, v);
        if (c === r)
          return g + l;
        if (m && (v += g.length - v), pl(c)) {
          if (e.slice(v).search(c)) {
            var M, Z = g;
            for (c.global || (c = Es(c.source, ie(hu.exec(c)) + "g")), c.lastIndex = 0; M = c.exec(Z); )
              var J = M.index;
            g = g.slice(0, J === r ? v : J);
          }
        } else if (e.indexOf(at(c), v) != v) {
          var C = g.lastIndexOf(c);
          C > -1 && (g = g.slice(0, C));
        }
        return g + l;
      }
      function IU(e) {
        return e = ie(e), e && Xw.test(e) ? e.replace(cu, fv) : e;
      }
      var DU = gr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), vl = xd("toUpperCase");
      function Wh(e, n, i) {
        return e = ie(e), n = i ? r : n, n === r ? lv(e) ? wv(e) : K1(e) : e.match(n) || [];
      }
      var Ch = $(function(e, n) {
        try {
          return ot(e, r, n);
        } catch (i) {
          return fl(i) ? i : new H(i);
        }
      }), OU = $t(function(e, n) {
        return vt(n, function(i) {
          i = zt(i), Xt(e, i, dl(e[i], e));
        }), e;
      });
      function QU(e) {
        var n = e == null ? 0 : e.length, i = G();
        return e = n ? pe(e, function(l) {
          if (typeof l[1] != "function")
            throw new Vt(d);
          return [i(l[0]), l[1]];
        }) : [], $(function(l) {
          for (var c = -1; ++c < n; ) {
            var p = e[c];
            if (ot(p[0], this, l))
              return ot(p[1], this, l);
          }
        });
      }
      function zU(e) {
        return fV(gt(e, R));
      }
      function Vl(e) {
        return function() {
          return e;
        };
      }
      function GU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var _U = Id(), YU = Id(!0);
      function et(e) {
        return e;
      }
      function Tl(e) {
        return pd(typeof e == "function" ? e : gt(e, R));
      }
      function PU(e) {
        return wd(gt(e, R));
      }
      function HU(e, n) {
        return vd(e, gt(n, R));
      }
      var jU = $(function(e, n) {
        return function(i) {
          return vo(i, e, n);
        };
      }), XU = $(function(e, n) {
        return function(i) {
          return vo(e, i, n);
        };
      });
      function gl(e, n, i) {
        var l = Fe(n), c = Bi(n, l);
        i == null && !(we(n) && (c.length || !l.length)) && (i = n, n = e, e = this, c = Bi(n, Fe(n)));
        var p = !(we(i) && "chain" in i) || !!i.chain, m = Kt(e);
        return vt(c, function(v) {
          var g = n[v];
          e[v] = g, m && (e.prototype[v] = function() {
            var M = this.__chain__;
            if (p || M) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = $e(this.__actions__);
              return J.push({ func: g, args: arguments, thisArg: e }), Z.__chain__ = M, Z;
            }
            return g.apply(e, pn([this.value()], arguments));
          });
        }), e;
      }
      function LU() {
        return Be._ === this && (Be._ = Rv), this;
      }
      function Ul() {
      }
      function $U(e) {
        return e = X(e), $(function(n) {
          return Vd(n, e);
        });
      }
      var qU = qs(pe), KU = qs(Du), eR = qs(Ns);
      function xh(e) {
        return il(e) ? ys(zt(e)) : EV(e);
      }
      function tR(e) {
        return function(n) {
          return e == null ? r : In(e, n);
        };
      }
      var nR = Od(), rR = Od(!0);
      function Rl() {
        return [];
      }
      function Nl() {
        return !1;
      }
      function oR() {
        return {};
      }
      function iR() {
        return "";
      }
      function aR() {
        return !0;
      }
      function sR(e, n) {
        if (e = X(e), e < 1 || e > Pe)
          return [];
        var i = Dt, l = ze(e, Dt);
        n = G(n), e -= Dt;
        for (var c = Zs(l, n); ++i < e; )
          n(i);
        return c;
      }
      function lR(e) {
        return j(e) ? pe(e, zt) : st(e) ? [e] : $e(nh(ie(e)));
      }
      function cR(e) {
        var n = ++gv;
        return ie(e) + n;
      }
      var uR = Gi(function(e, n) {
        return e + n;
      }, 0), dR = Ks("ceil"), hR = Gi(function(e, n) {
        return e / n;
      }, 1), fR = Ks("floor");
      function pR(e) {
        return e && e.length ? xi(e, et, Is) : r;
      }
      function mR(e, n) {
        return e && e.length ? xi(e, G(n, 2), Is) : r;
      }
      function wR(e) {
        return zu(e, et);
      }
      function vR(e, n) {
        return zu(e, G(n, 2));
      }
      function VR(e) {
        return e && e.length ? xi(e, et, zs) : r;
      }
      function TR(e, n) {
        return e && e.length ? xi(e, G(n, 2), zs) : r;
      }
      var gR = Gi(function(e, n) {
        return e * n;
      }, 1), UR = Ks("round"), RR = Gi(function(e, n) {
        return e - n;
      }, 0);
      function NR(e) {
        return e && e.length ? Ms(e, et) : 0;
      }
      function yR(e, n) {
        return e && e.length ? Ms(e, G(n, 2)) : 0;
      }
      return f.after = PT, f.ary = fh, f.assign = Ag, f.assignIn = Zh, f.assignInWith = na, f.assignWith = Wg, f.at = Cg, f.before = ph, f.bind = dl, f.bindAll = OU, f.bindKey = mh, f.castArray = og, f.chain = uh, f.chunk = f0, f.compact = p0, f.concat = m0, f.cond = QU, f.conforms = zU, f.constant = Vl, f.countBy = NT, f.create = xg, f.curry = wh, f.curryRight = vh, f.debounce = Vh, f.defaults = Bg, f.defaultsDeep = Ig, f.defer = HT, f.delay = jT, f.difference = w0, f.differenceBy = v0, f.differenceWith = V0, f.drop = T0, f.dropRight = g0, f.dropRightWhile = U0, f.dropWhile = R0, f.fill = N0, f.filter = kT, f.flatMap = bT, f.flatMapDeep = JT, f.flatMapDepth = ET, f.flatten = ah, f.flattenDeep = y0, f.flattenDepth = k0, f.flip = XT, f.flow = _U, f.flowRight = YU, f.fromPairs = M0, f.functions = Yg, f.functionsIn = Pg, f.groupBy = ST, f.initial = b0, f.intersection = J0, f.intersectionBy = E0, f.intersectionWith = S0, f.invert = jg, f.invertBy = Xg, f.invokeMap = AT, f.iteratee = Tl, f.keyBy = WT, f.keys = Fe, f.keysIn = Ke, f.map = Li, f.mapKeys = $g, f.mapValues = qg, f.matches = PU, f.matchesProperty = HU, f.memoize = qi, f.merge = Kg, f.mergeWith = bh, f.method = jU, f.methodOf = XU, f.mixin = gl, f.negate = Ki, f.nthArg = $U, f.omit = eU, f.omitBy = tU, f.once = LT, f.orderBy = CT, f.over = qU, f.overArgs = $T, f.overEvery = KU, f.overSome = eR, f.partial = hl, f.partialRight = Th, f.partition = xT, f.pick = nU, f.pickBy = Jh, f.property = xh, f.propertyOf = tR, f.pull = C0, f.pullAll = lh, f.pullAllBy = x0, f.pullAllWith = B0, f.pullAt = I0, f.range = nR, f.rangeRight = rR, f.rearg = qT, f.reject = DT, f.remove = D0, f.rest = KT, f.reverse = cl, f.sampleSize = QT, f.set = oU, f.setWith = iU, f.shuffle = zT, f.slice = O0, f.sortBy = YT, f.sortedUniq = H0, f.sortedUniqBy = j0, f.split = bU, f.spread = eg, f.tail = X0, f.take = L0, f.takeRight = $0, f.takeRightWhile = q0, f.takeWhile = K0, f.tap = pT, f.throttle = tg, f.thru = Xi, f.toArray = yh, f.toPairs = Eh, f.toPairsIn = Sh, f.toPath = lR, f.toPlainObject = Mh, f.transform = aU, f.unary = ng, f.union = eT, f.unionBy = tT, f.unionWith = nT, f.uniq = rT, f.uniqBy = oT, f.uniqWith = iT, f.unset = sU, f.unzip = ul, f.unzipWith = ch, f.update = lU, f.updateWith = cU, f.values = Nr, f.valuesIn = uU, f.without = aT, f.words = Wh, f.wrap = rg, f.xor = sT, f.xorBy = lT, f.xorWith = cT, f.zip = uT, f.zipObject = dT, f.zipObjectDeep = hT, f.zipWith = fT, f.entries = Eh, f.entriesIn = Sh, f.extend = Zh, f.extendWith = na, gl(f, f), f.add = uR, f.attempt = Ch, f.camelCase = pU, f.capitalize = Fh, f.ceil = dR, f.clamp = dU, f.clone = ig, f.cloneDeep = sg, f.cloneDeepWith = lg, f.cloneWith = ag, f.conformsTo = cg, f.deburr = Ah, f.defaultTo = GU, f.divide = hR, f.endsWith = mU, f.eq = St, f.escape = wU, f.escapeRegExp = vU, f.every = yT, f.find = MT, f.findIndex = oh, f.findKey = Dg, f.findLast = ZT, f.findLastIndex = ih, f.findLastKey = Og, f.floor = fR, f.forEach = dh, f.forEachRight = hh, f.forIn = Qg, f.forInRight = zg, f.forOwn = Gg, f.forOwnRight = _g, f.get = ml, f.gt = ug, f.gte = dg, f.has = Hg, f.hasIn = wl, f.head = sh, f.identity = et, f.includes = FT, f.indexOf = Z0, f.inRange = hU, f.invoke = Lg, f.isArguments = Qn, f.isArray = j, f.isArrayBuffer = hg, f.isArrayLike = qe, f.isArrayLikeObject = Re, f.isBoolean = fg, f.isBuffer = Un, f.isDate = pg, f.isElement = mg, f.isEmpty = wg, f.isEqual = vg, f.isEqualWith = Vg, f.isError = fl, f.isFinite = Tg, f.isFunction = Kt, f.isInteger = gh, f.isLength = ea, f.isMap = Uh, f.isMatch = gg, f.isMatchWith = Ug, f.isNaN = Rg, f.isNative = Ng, f.isNil = kg, f.isNull = yg, f.isNumber = Rh, f.isObject = we, f.isObjectLike = Te, f.isPlainObject = No, f.isRegExp = pl, f.isSafeInteger = Mg, f.isSet = Nh, f.isString = ta, f.isSymbol = st, f.isTypedArray = Rr, f.isUndefined = Zg, f.isWeakMap = bg, f.isWeakSet = Jg, f.join = F0, f.kebabCase = VU, f.last = Rt, f.lastIndexOf = A0, f.lowerCase = TU, f.lowerFirst = gU, f.lt = Eg, f.lte = Sg, f.max = pR, f.maxBy = mR, f.mean = wR, f.meanBy = vR, f.min = VR, f.minBy = TR, f.stubArray = Rl, f.stubFalse = Nl, f.stubObject = oR, f.stubString = iR, f.stubTrue = aR, f.multiply = gR, f.nth = W0, f.noConflict = LU, f.noop = Ul, f.now = $i, f.pad = UU, f.padEnd = RU, f.padStart = NU, f.parseInt = yU, f.random = fU, f.reduce = BT, f.reduceRight = IT, f.repeat = kU, f.replace = MU, f.result = rU, f.round = UR, f.runInContext = T, f.sample = OT, f.size = GT, f.snakeCase = ZU, f.some = _T, f.sortedIndex = Q0, f.sortedIndexBy = z0, f.sortedIndexOf = G0, f.sortedLastIndex = _0, f.sortedLastIndexBy = Y0, f.sortedLastIndexOf = P0, f.startCase = JU, f.startsWith = EU, f.subtract = RR, f.sum = NR, f.sumBy = yR, f.template = SU, f.times = sR, f.toFinite = en, f.toInteger = X, f.toLength = kh, f.toLower = FU, f.toNumber = Nt, f.toSafeInteger = Fg, f.toString = ie, f.toUpper = AU, f.trim = WU, f.trimEnd = CU, f.trimStart = xU, f.truncate = BU, f.unescape = IU, f.uniqueId = cR, f.upperCase = DU, f.upperFirst = vl, f.each = dh, f.eachRight = hh, f.first = sh, gl(f, function() {
        var e = {};
        return Ot(f, function(n, i) {
          ae.call(f.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), f.VERSION = s, vt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), vt(["drop", "take"], function(e, n) {
        ee.prototype[e] = function(i) {
          i = i === r ? 1 : Je(X(i), 0);
          var l = this.__filtered__ && !n ? new ee(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = ze(i, l.__takeCount__) : l.__views__.push({
            size: ze(i, Dt),
            type: e + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ee.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), vt(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, l = i == ke || i == Ce;
        ee.prototype[e] = function(c) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: G(c, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), vt(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        ee.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), vt(["initial", "tail"], function(e, n) {
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
      }, ee.prototype.invokeMap = $(function(e, n) {
        return typeof e == "function" ? new ee(this) : this.map(function(i) {
          return vo(i, e, n);
        });
      }), ee.prototype.reject = function(e) {
        return this.filter(Ki(G(e)));
      }, ee.prototype.slice = function(e, n) {
        e = X(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new ee(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, ee.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ee.prototype.toArray = function() {
        return this.take(Dt);
      }, Ot(ee.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), c = f[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !c || (f.prototype[n] = function() {
          var m = this.__wrapped__, v = l ? [1] : arguments, g = m instanceof ee, M = v[0], Z = g || j(m), J = function(K) {
            var te = c.apply(f, pn([K], v));
            return l && C ? te[0] : te;
          };
          Z && i && typeof M == "function" && M.length != 1 && (g = Z = !1);
          var C = this.__chain__, D = !!this.__actions__.length, _ = p && !C, L = g && !D;
          if (!p && Z) {
            m = L ? m : new ee(this);
            var Y = e.apply(m, v);
            return Y.__actions__.push({ func: Xi, args: [J], thisArg: r }), new Tt(Y, C);
          }
          return _ && L ? e.apply(this, v) : (Y = this.thru(J), _ ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), vt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Ui[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(e);
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
      }), Ot(ee.prototype, function(e, n) {
        var i = f[n];
        if (i) {
          var l = i.name + "";
          ae.call(vr, l) || (vr[l] = []), vr[l].push({ name: n, func: i });
        }
      }), vr[zi(r, F).name] = [{
        name: "wrapper",
        func: r
      }], ee.prototype.clone = Iv, ee.prototype.reverse = Dv, ee.prototype.value = Ov, f.prototype.at = mT, f.prototype.chain = wT, f.prototype.commit = vT, f.prototype.next = VT, f.prototype.plant = gT, f.prototype.reverse = UT, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = RT, f.prototype.first = f.prototype.head, co && (f.prototype[co] = TT), f;
    }, pr = vv();
    An ? ((An.exports = pr)._ = pr, Ts._ = pr) : Be._ = pr;
  }).call(yo);
})(ge, ge.exports);
const _N = "/alarms?_s=", Ya = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, YN = async (t, o) => {
  try {
    return (await En.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      Ya
    )).status === 204;
  } catch {
    return !1;
  }
}, PN = async (t, o) => {
  try {
    return (await En.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      Ya
    )).status === 204;
  } catch {
    return !1;
  }
}, HN = async (t) => {
  try {
    const o = t.join(",alarm.id==");
    return (await hn.put(
      `alarms?_s=alarm.id==${o}&clear=true`,
      null,
      Ya
    )).status == 204;
  } catch {
    return !1;
  }
}, jN = async () => {
  try {
    const t = `${_N}isSituation==true&limit=0`, o = await hn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, XN = async () => {
  try {
    const t = await hn("/alarms?limit=0");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, LN = async (t) => {
  try {
    const o = t.join(",id=="), r = await hn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Jm = async (t) => {
  try {
    const o = await hn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, $N = async (t) => {
  try {
    const o = await hn(`/events?_s=alarm.id==${t}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, qN = async () => {
  try {
    const t = await hn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((s) => ge.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, KN = async (t, o, r) => {
  try {
    return (await hn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      Ya
    )).status == 204;
  } catch {
    return !1;
  }
}, ey = async (t, o) => {
  try {
    return (await hn.delete(`/alarms/${t}/${o}`)).status == 204;
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
}, ty = "/alec", ny = "/alec/engine/configuration", Em = "/alec/agreement/configuration", ry = "/alec/situation/statusList", Sm = async (t) => {
  try {
    return (await En.post(`${Em}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, oy = async () => {
  try {
    const t = await En.get(`${Em}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, iy = async (t, o) => {
  try {
    return (await En.post(ny, {
      distanceMeasureName: o ? ft.HELLINGER_OPTION : ft.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Fm = async (t, o) => {
  try {
    return (await En.post(`${ty}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, ay = async () => {
  try {
    const t = await En.get(ry);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, sy = window.Pinia.defineStore, ir = sy("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    nodes: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await qN();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await jN(), o = await XN();
      let r = [];
      o && (r = ge.exports.mapKeys(o, (a) => a.id));
      const s = await ay();
      if (t) {
        const a = t.alarm.map((h) => {
          const w = h.relatedAlarms.map((V) => r[V.id]), U = s.filter(
            (V) => parseInt(V.id) === h.id
          );
          return h.alarms = w, h.status = U && U[0] ? U[0].status : "CREATED", h;
        }), u = ge.exports.groupBy(a, "status"), d = [
          ...u.CREATED || [],
          ...u.ACCEPTED || [],
          ...u.REJECTED || []
        ];
        this.situations = d;
      }
    },
    async getSituation(t) {
      const o = await Jm(t);
      if (o) {
        const r = o.relatedAlarms.map((d) => d.id), s = await LN(r);
        o.alarms = s;
        const a = ge.exports.cloneDeep(this.situations), u = this.situations.findIndex((d) => d.id == t);
        a[u] = o, this.situations = a;
      }
    },
    async getEvents(t, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const u = await $N(a);
          u && (r[a] = ge.exports.reverse(u));
        })
      );
      const s = this.situations.findIndex((a) => a.id == t);
      this.situations[s].events = r;
    }
  }
}), ly = window.Vue.openBlock, cy = window.Vue.createElementBlock, uy = window.Vue.createElementVNode;
var dy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hy = {}, fy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, py = /* @__PURE__ */ uy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), my = [
  py
];
function wy(t, o) {
  return ly(), cy("svg", fy, my);
}
var zc = /* @__PURE__ */ dy(hy, [["render", wy]]);
var vy = Object.defineProperty, lf = Object.getOwnPropertySymbols, Vy = Object.prototype.hasOwnProperty, Ty = Object.prototype.propertyIsEnumerable, cf = (t, o, r) => o in t ? vy(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, uf = (t, o) => {
  for (var r in o || (o = {}))
    Vy.call(o, r) && cf(t, r, o[r]);
  if (lf)
    for (var r of lf(o))
      Ty.call(o, r) && cf(t, r, o[r]);
  return t;
};
const gy = window.Vue.defineComponent, Uy = window.Vue.toRaw, Dl = window.Vue.h;
var Ry = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ny = {
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
}, yy = gy({
  props: Ny,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = Uy(this.icon);
    return this.$slots.default ? Dl("span", { class: "feather-icon-container" }, [
      Dl(this.$slots.default()[0], uf({
        class: o
      }, r))
    ]) : Dl(s, uf({
      class: o
    }, r));
  }
});
var ne = /* @__PURE__ */ Ry(yy, [["__scopeId", "data-v-52cbf270"]]);
const ky = window.Vue.openBlock, My = window.Vue.createElementBlock, Zy = window.Vue.createElementVNode;
var by = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Jy = {}, Ey = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Sy = /* @__PURE__ */ Zy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Fy = [
  Sy
];
function Ay(t, o) {
  return ky(), My("svg", Ey, Fy);
}
var Am = /* @__PURE__ */ by(Jy, [["render", Ay]]);
const Wy = window.Vue.defineComponent, nn = window.Vue.unref, df = window.Vue.normalizeClass, ko = window.Vue.createElementVNode, Ol = window.Vue.toDisplayString, hf = window.Vue.createVNode, Mr = window.Vue.openBlock, Zr = window.Vue.createElementBlock, Ql = window.Vue.createCommentVNode, Cy = window.Vue.createTextVNode, xy = window.Vue.renderList, By = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Iy = { class: "content" }, Dy = { class: "title-row" }, Oy = { class: "title" }, Qy = {
  key: 0,
  class: "accepted"
}, zy = {
  key: 1,
  class: "rejected"
}, Gy = {
  key: 0,
  class: "count-info"
}, _y = /* @__PURE__ */ Cy(" Alarms: "), Yy = { class: "info-title" }, Py = /* @__PURE__ */ Wy({
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
    return (d, h) => {
      var w, U, V;
      return Mr(), Zr("div", {
        onClick: u,
        class: df(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == nn(a)
        }])
      }, [
        ko("div", {
          class: df(["severity-line", [`${(U = (w = r.situationInfo) == null ? void 0 : w.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        ko("div", Iy, [
          ko("div", Dy, [
            ko("div", Oy, "Situation " + Ol((V = r.situationInfo) == null ? void 0 : V.id), 1),
            r.situationInfo.status == nn(s) ? (Mr(), Zr("div", Qy, [
              hf(nn(ne), {
                icon: nn(zc),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ql("", !0),
            r.situationInfo.status == nn(a) ? (Mr(), Zr("div", zy, [
              hf(nn(ne), {
                icon: nn(Am),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ql("", !0)
          ]),
          r.situationInfo.alarms ? (Mr(), Zr("div", Gy, [
            _y,
            ko("span", Yy, Ol(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ql("", !0),
          (Mr(!0), Zr(By, null, xy(nn(ge.exports.keys)(nn(ge.exports.groupBy)(r.situationInfo.alarms, "nodeLabel")), (R) => (Mr(), Zr("div", {
            class: "info-title",
            key: R
          }, " - " + Ol(R), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Hy = /* @__PURE__ */ Ze(Py, [["__scopeId", "data-v-1bda4968"]]);
const ra = window.Vue.ref, jy = window.Vue.inject, Xy = window.Vue.computed, Ly = window.Vue.onMounted, $y = {
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
}, qy = (t) => {
  const o = ra(!1), r = ra(), s = ra(t.controls), a = ra(t.id), u = () => {
    r.value && r.value.focus();
  }, d = jy("registerTab");
  Ly(() => {
    if (r.value && d) {
      const w = r.value.parentElement, U = w && w.parentElement ? w.parentElement : void 0, V = Array.from(U ? U.children : []).filter((N) => N.querySelectorAll("[role=tab]").length), R = w ? V.indexOf(w) : -1;
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
  const h = Xy(() => ({
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
    attrs: h,
    tab: r
  };
};
const Pr = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, Hr = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var Ky = Object.defineProperty, ek = Object.defineProperties, tk = Object.getOwnPropertyDescriptors, ff = Object.getOwnPropertySymbols, nk = Object.prototype.hasOwnProperty, rk = Object.prototype.propertyIsEnumerable, pf = (t, o, r) => o in t ? Ky(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, mf = (t, o) => {
  for (var r in o || (o = {}))
    nk.call(o, r) && pf(t, r, o[r]);
  if (ff)
    for (var r of ff(o))
      rk.call(o, r) && pf(t, r, o[r]);
  return t;
}, ok = (t, o) => ek(t, tk(o));
const ik = window.Vue.defineComponent, ak = window.Vue.h;
var sk = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lk = {
  center: {
    type: Boolean,
    default: !1
  }
}, ck = ik({
  props: lk,
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
          const u = this.parent.getBoundingClientRect(), d = t.pageY, h = t.pageX;
          a = {
            top: `${d - u.top - s / 2 - document.documentElement.scrollTop}px`,
            left: `${h - u.left - s / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = ok(mf({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Hr(this.failsafe), this.failsafe = Pr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return ak("div", {
        style: mf({}, this.styles),
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
var nr = /* @__PURE__ */ sk(ck, [["__scopeId", "data-v-18e2a5db"]]);
const le = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
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
}, wf = window.Vue.ref, uk = window.Vue.toRef, dk = window.Vue.watch, vf = window.Vue.provide, hk = {
  prop: "modelValue",
  event: "update:modelValue"
}, fk = {
  "update:modelValue": (t) => !0
}, pk = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, mk = (t, o) => {
  const r = uk(t, "modelValue"), s = wf(t.modelValue), a = wf([]);
  dk(r, (S) => {
    w(S);
  });
  const u = (S) => {
    S.preventDefault(), a.value.some((x, B) => x.tab && x.tab.el.contains(S.target) ? (h(B), w(B), !0) : !1);
  }, d = (S) => {
    if (((P) => P.shiftKey || P.ctrlKey || P.metaKey || P.altKey)(S))
      return;
    const B = S.keyCode, F = (P) => {
      P.stopPropagation(), P.preventDefault();
    }, W = a.value.filter((P) => P.tab && !P.tab.disabled), E = a.value.findIndex((P) => P.tab && P.tab.el.contains(document.activeElement));
    let O = E !== -1 ? E : s.value;
    const b = [q.RIGHT], z = [q.LEFT], Q = [q.ENTER, q.SPACE];
    t.vertical && (b.push(q.DOWN), z.push(q.UP)), b.indexOf(B) > -1 ? (O++, O >= W.length && (O = 0), F(S), h(a.value.indexOf(W[O]))) : z.indexOf(B) > -1 && (O--, O < 0 && (O = W.length - 1), F(S), h(a.value.indexOf(W[O]))), Q.indexOf(B) > -1 && w(O);
  }, h = (S) => {
    a.value.forEach(function(x, B) {
      S === B && x.tab && x.tab.focus();
    });
  }, w = (S) => {
    const x = a.value[S];
    !x || x.tab && x.tab.disabled || (a.value.forEach((B, F) => {
      B.tab && (B.tab.selected = S === F), B.panel && (B.panel.selected = S === F);
    }), s.value = S, o.emit("update:modelValue", S));
  };
  vf("registerTab", (S) => {
    const x = S.index;
    x > -1 && (a.value[x] = { ...a.value[x], tab: S }, a.value = [...a.value], R());
  }), vf("registerPanel", (S) => {
    const x = S.index;
    x > -1 && (a.value[x] = {
      ...a.value[x],
      panel: S
    }, a.value = [...a.value], R());
  });
  const R = () => {
    a.value.forEach(({ tab: S, panel: x }, B) => {
      if (x && S) {
        const F = S.id || le("tab"), W = S.controls || le("panel");
        S.controls = W, S.id = F, x.tab = F, x.id = W;
      }
      B === s.value && (x && (x.selected = !0), S && (S.selected = !0));
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
}, oa = window.Vue.ref, wk = window.Vue.inject, vk = window.Vue.computed, Vk = window.Vue.onMounted, Tk = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, gk = (t) => {
  const o = oa(!1), r = oa(), s = oa(t.tab), a = oa(t.id), u = wk("registerPanel");
  Vk(() => {
    if (u) {
      const h = r.value, w = h && h.parentElement ? h.parentElement : void 0, U = h ? Array.from(w ? w.children : []).indexOf(h) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: U
      });
    }
  });
  const d = vk(() => ({
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
}, Gc = window.Vue.defineComponent, Uk = window.Vue.resolveComponent, _c = window.Vue.openBlock, Yc = window.Vue.createElementBlock, zo = window.Vue.createElementVNode, Wm = window.Vue.mergeProps, Ea = window.Vue.renderSlot, Rk = window.Vue.createVNode, Nk = window.Vue.normalizeStyle, yk = window.Vue.toHandlers, kk = window.Vue.withDirectives, Mk = window.Vue.normalizeProps, Zk = window.Vue.guardReactiveProps, bk = window.Vue.vShow;
var Pc = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Jk = $y, Ek = Gc({
  props: Jk,
  setup(t) {
    return qy(t);
  },
  components: {
    FeatherRipple: nr
  }
}), Sk = { role: "presentation" }, Fk = { class: "tab-text" };
function Ak(t, o, r, s, a, u) {
  const d = Uk("FeatherRipple");
  return _c(), Yc("li", Sk, [
    zo("button", Wm(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      zo("span", Fk, [
        Ea(t.$slots, "default", {}, void 0, !0)
      ]),
      Rk(d)
    ], 16)
  ]);
}
var Vf = /* @__PURE__ */ Pc(Ek, [["render", Ak], ["__scopeId", "data-v-e6bb52b6"]]);
const Wk = pk, Ck = fk, xk = Gc({
  model: hk,
  emits: Ck,
  props: Wk,
  setup(t, o) {
    return mk(t, o);
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
}), Bk = { class: "feather-tab-container" }, Ik = { class: "tab-panels" };
function Dk(t, o, r, s, a, u) {
  return _c(), Yc("div", Bk, [
    zo("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: Nk({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    zo("ul", Wm(t.attrs, yk(t.listeners)), [
      Ea(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    zo("div", Ik, [
      Ea(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var Ok = /* @__PURE__ */ Pc(xk, [["render", Dk], ["__scopeId", "data-v-27adffb9"]]);
const Qk = Tk, zk = Gc({
  props: Qk,
  setup(t) {
    return gk(t);
  }
});
function Gk(t, o, r, s, a, u) {
  return kk((_c(), Yc("div", Mk(Zk(t.attrs)), [
    Ea(t.$slots, "default")
  ], 16)), [
    [bk, t.selected]
  ]);
}
var Tf = /* @__PURE__ */ Pc(zk, [["render", Gk]]);
const _k = window.Vue.defineComponent, Yk = window.Vue.toDisplayString, Pk = window.Vue.normalizeClass, Hk = window.Vue.openBlock, jk = window.Vue.createElementBlock, Xk = window.Vue.createCommentVNode, Lk = /* @__PURE__ */ _k({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (Hk(), jk("span", {
      key: 0,
      class: Pk(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, Yk(o.severity), 3)) : Xk("", !0);
  }
});
const Cm = /* @__PURE__ */ Ze(Lk, [["__scopeId", "data-v-83c2cdce"]]), $k = window.Vue.defineComponent, gf = window.Vue.toDisplayString, Uf = window.Vue.createElementVNode, qk = window.Vue.openBlock, Kk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const eM = { class: "box" }, tM = { class: "label" }, nM = { class: "date" }, rM = /* @__PURE__ */ $k({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (qk(), Kk("div", eM, [
      Uf("div", tM, gf(o.label), 1),
      Uf("div", nM, gf(o.info), 1)
    ]));
  }
});
const zl = /* @__PURE__ */ Ze(rM, [["__scopeId", "data-v-b4afa751"]]), oM = window.Vue.defineComponent, iM = window.Vue.unref, aM = window.Vue.renderList, sM = window.Vue.Fragment, Gl = window.Vue.openBlock, _l = window.Vue.createElementBlock, lM = window.Vue.toDisplayString, cM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const uM = { class: "alarms-list" }, dM = /* @__PURE__ */ oM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (Gl(), _l("div", uM, [
      (Gl(!0), _l(sM, null, aM(iM(ge.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Gl(), _l("div", {
        class: cM(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, lM(a.length), 3))), 128))
    ]));
  }
});
const hM = /* @__PURE__ */ Ze(dM, [["__scopeId", "data-v-52d63440"]]);
const fM = window.Vue.computed, xm = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = fM(() => t.value[s] ? t.value[s] : o[s]);
  }), r;
}, pM = window.Vue.openBlock, mM = window.Vue.createElementBlock, wM = window.Vue.createElementVNode;
var vM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VM = {}, TM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gM = /* @__PURE__ */ wM("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), UM = [
  gM
];
function RM(t, o) {
  return pM(), mM("svg", TM, UM);
}
var ri = /* @__PURE__ */ vM(VM, [["render", RM]]);
const Rf = window.Vue.computed, NM = (t, o, r) => {
  const s = Rf(() => o.value.filter((u) => !u.disabled)), a = Rf(() => t.value ? s.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const yM = window.Vue.openBlock, kM = window.Vue.createElementBlock, Hc = window.Vue.createElementVNode;
var MM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZM = {}, bM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JM = /* @__PURE__ */ Hc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), EM = /* @__PURE__ */ Hc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), SM = /* @__PURE__ */ Hc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), FM = [
  JM,
  EM,
  SM
];
function AM(t, o) {
  return yM(), kM("svg", bM, FM);
}
var Bm = /* @__PURE__ */ MM(ZM, [["render", AM]]), WM = Object.defineProperty, CM = Object.defineProperties, xM = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, BM = Object.prototype.hasOwnProperty, IM = Object.prototype.propertyIsEnumerable, yf = (t, o, r) => o in t ? WM(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Im = (t, o) => {
  for (var r in o || (o = {}))
    BM.call(o, r) && yf(t, r, o[r]);
  if (Nf)
    for (var r of Nf(o))
      IM.call(o, r) && yf(t, r, o[r]);
  return t;
}, Dm = (t, o) => CM(t, xM(o));
const $r = window.Vue.defineComponent, Lo = window.Vue.resolveComponent, Gt = window.Vue.openBlock, Dr = window.Vue.createElementBlock, DM = window.Vue.createVNode, Sa = window.Vue.createBlock, OM = window.Vue.withModifiers, jr = window.Vue.inject, $o = window.Vue.computed, QM = window.Vue.normalizeClass, br = window.Vue.createElementVNode, Fa = window.Vue.toDisplayString, Na = window.Vue.renderSlot, Go = window.Vue.createCommentVNode, zM = window.Vue.withDirectives, GM = window.Vue.vShow, Tc = window.Vue.ref, kf = window.Vue.toRef, Mf = window.Vue.nextTick, gc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const jc = window.Vue.provide, Zf = window.Vue.isRef, _M = window.Vue.onBeforeUnmount;
var oi = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const YM = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, PM = $r({
  props: YM,
  components: {
    FeatherIcon: ne
  }
}), HM = ["title"];
function jM(t, o, r, s, a, u) {
  const d = Lo("FeatherIcon");
  return Gt(), Dr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    DM(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, HM);
}
var XM = /* @__PURE__ */ oi(PM, [["render", jM], ["__scopeId", "data-v-4265058e"]]);
const LM = $r({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return ri;
    }
  },
  components: {
    ActionIcon: XM
  }
});
function $M(t, o, r, s, a, u) {
  const d = Lo("ActionIcon");
  return Gt(), Sa(d, {
    onClick: o[0] || (o[0] = OM((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var qM = /* @__PURE__ */ oi(LM, [["render", $M]]);
const KM = $r({
  computed: {
    errorIcon() {
      return Bm;
    }
  },
  components: {
    FeatherIcon: ne
  }
});
function eZ(t, o, r, s, a, u) {
  const d = Lo("FeatherIcon");
  return Gt(), Sa(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var tZ = /* @__PURE__ */ oi(KM, [["render", eZ], ["__scopeId", "data-v-0b8faef3"]]);
const nZ = {
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
}, rZ = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, oZ = $r({
  emits: rZ,
  props: nZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = jr("wrapperOptions", {}), o = jr("validationErrorMessage", !1), r = $o(() => t.error ? t.error : o && o.value ? o.value : !1);
    return Dm(Im({}, t), { error: r });
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
    ClearIcon: qM,
    ErrorIcon: tZ
  }
}), iZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, aZ = ["for"], sZ = { class: "prefix" }, lZ = { class: "post" };
function cZ(t, o, r, s, a, u) {
  const d = Lo("ClearIcon"), h = Lo("ErrorIcon");
  return Gt(), Dr("div", {
    class: QM(["feather-input-wrapper-container", t.containerCls])
  }, [
    br("fieldset", iZ, [
      br("legend", null, Fa(t.label), 1)
    ]),
    br("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Fa(t.label), 9, aZ),
    br("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      br("div", sZ, [
        Na(t.$slots, "pre", {}, void 0, !0)
      ]),
      Na(t.$slots, "default", {}, void 0, !0),
      br("div", lZ, [
        t.showClear && t.computedClearText ? (Gt(), Sa(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Go("", !0),
        t.error ? (Gt(), Sa(h, { key: 1 })) : Go("", !0),
        Na(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Om = /* @__PURE__ */ oi(oZ, [["render", cZ], ["__scopeId", "data-v-4db296db"]]);
const uZ = $r({
  setup() {
    const t = jr("subTextOptions", {}), o = jr("validationErrorMessage", !1), r = $o(() => t.error ? t.error : o && o.value ? o.value : "");
    return Dm(Im({}, t), { error: r });
  }
}), dZ = { class: "feather-input-sub-text" }, hZ = {
  key: 0,
  class: "feather-input-spacer"
}, fZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, pZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function mZ(t, o, r, s, a, u) {
  return zM((Gt(), Dr("div", dZ, [
    !t.hint && !t.error.length ? (Gt(), Dr("div", hZ, "\xA0")) : Go("", !0),
    t.hint && !t.error.length ? (Gt(), Dr("div", fZ, Fa(t.hint), 1)) : Go("", !0),
    t.error.length > 0 ? (Gt(), Dr("div", pZ, Fa(t.error), 1)) : Go("", !0),
    Na(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [GM, !t.inline || t.hint || t.error.length]
  ]);
}
var Pa = /* @__PURE__ */ oi(uZ, [["render", mZ], ["__scopeId", "data-v-8e0ac99e"]]);
const wZ = {
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
$r({
  props: wZ,
  setup(t) {
    const o = jr("featherFormErrors", Tc([])), r = kf(t, "errorList"), s = $o(() => {
      var V;
      return (V = r.value) != null && V.length ? r.value : o.value;
    }), a = kf(t, "generalError"), u = (V) => {
      document.getElementById(V).focus();
    }, d = (V) => V.replace(/ \*$/, ""), h = Tc(), w = (V) => `${d(V.label)} - ${V.message}`, U = $o(() => (s.value.length && Mf(() => h.value.focus()), t.headingText(s.value)));
    return gc(a, (V) => {
      V.length && Mf(() => h.value.focus());
    }), {
      errors: s,
      errorsHeading: U,
      heading: h,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const Ha = (t, o, r, s, a) => {
  const u = jr("featherForm", !1);
  if (s && u && t.value) {
    const d = Tc("");
    jc("validationErrorMessage", d);
    const h = () => {
      if (a && Zf(a) && a.value)
        return d.value = a.value, {
          success: !1,
          message: a.value,
          inputId: t.value,
          label: r
        };
      try {
        return s.validateSync(o.value), d.value = "", { success: !0 };
      } catch (V) {
        const R = V;
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
      validate: h
    };
    return a && Zf(a) && gc(a, () => {
      u.runValidation();
    }), gc(t, (V, R) => {
      V && u && u.register(V, U), R && u && u.deregister(R);
    }, { immediate: !0 }), _M(() => {
      u.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, ja = (t) => ({
  inherittedAttrs: $o(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), Xa = {
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
}, La = (t) => {
  jc("subTextOptions", t);
}, Qm = {
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
}, zm = (t) => {
  jc("wrapperOptions", t);
}, ia = window.Vue.ref, vZ = window.Vue.watch, VZ = window.Vue.watchEffect, bf = window.Vue.computed, Yl = window.Vue.provide, Gm = (t, o, r, s, a) => {
  const u = ia([]), d = ia(), h = ia(), w = ia();
  VZ(() => {
    if (!u.value.length)
      return;
    const F = u.value.map((W) => W.value);
    if (t.value !== void 0 && t.value !== null && (d.value = u.value[F.indexOf(t.value)]), !d.value && u.value.length) {
      let W = u.value.filter((E) => !E.disabled);
      W = W.length ? W : u.value, h.value = W[0], h.value.first = !0;
    }
  }), vZ(d, (F, W) => {
    W && (W.checked = !1), F && (F.checked = !0);
  });
  const U = (F) => {
    F && F.disabled || (h.value && (h.value.first = !1), d.value !== F && (o("update:modelValue", F.value), d.value = F, F.focus()));
  }, V = bf(() => d.value || h.value), R = NM(V, u, U), N = bf(() => le("feather-radio-group"));
  w.value = N.value;
  const { validate: A } = Ha(w, t, r, s, a);
  return Yl("register", (F) => {
    u.value = [...u.value, F], w.value === N.value && (w.value = F.id);
  }), Yl("select", U), Yl("blur", (F) => {
    o("blur", F);
  }), {
    keydown: (F) => {
      switch (F.keyCode) {
        case 13:
        case 32:
          d.value ? U(d.value) : h.value && U(h.value);
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
    validate: A,
    firstElementId: w,
    groupId: N
  };
};
var TZ = Object.defineProperty, gZ = Object.defineProperties, UZ = Object.getOwnPropertyDescriptors, Jf = Object.getOwnPropertySymbols, RZ = Object.prototype.hasOwnProperty, NZ = Object.prototype.propertyIsEnumerable, Ef = (t, o, r) => o in t ? TZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, zr = (t, o) => {
  for (var r in o || (o = {}))
    RZ.call(o, r) && Ef(t, r, o[r]);
  if (Jf)
    for (var r of Jf(o))
      NZ.call(o, r) && Ef(t, r, o[r]);
  return t;
}, _m = (t, o) => gZ(t, UZ(o));
const Sn = window.Vue.defineComponent, _o = window.Vue.inject, Aa = window.Vue.computed, Yo = window.Vue.ref, Mt = window.Vue.resolveComponent, pt = window.Vue.openBlock, ii = window.Vue.createElementBlock, Ym = window.Vue.normalizeClass, Yt = window.Vue.renderSlot, Zn = window.Vue.createBlock, qo = window.Vue.createCommentVNode, Wa = window.Vue.createElementVNode, yZ = window.Vue.withModifiers, $a = window.Vue.createVNode, Pm = window.Vue.toRef, Uc = window.Vue.mergeProps, un = window.Vue.withCtx, kZ = window.Vue.h, MZ = window.Vue.provide;
var Fn = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZZ = {
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
}, bZ = Sn({
  props: ZZ,
  setup(t) {
    const o = _o("isCondensed", null), r = Aa(() => o || t.condensed), s = Yo(!1);
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
    FeatherRipple: nr
  }
}), JZ = ["aria-disabled"];
function EZ(t, o, r, s, a, u) {
  const d = Mt("FeatherRipple");
  return pt(), ii("div", {
    class: Ym(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (h) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (h) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    Yt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (pt(), Zn(d, { key: 0 })) : qo("", !0)
  ], 42, JZ);
}
var qa = /* @__PURE__ */ Fn(bZ, [["render", EZ], ["__scopeId", "data-v-44d413dc"]]);
const SZ = {
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
}, FZ = Sn({
  emits: ["delete"],
  props: SZ,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: ri
    };
  },
  components: {
    FeatherIcon: ne
  }
}), AZ = { class: "chip-delete" }, WZ = ["aria-label", "aria-describedby"];
function CZ(t, o, r, s, a, u) {
  const d = Mt("FeatherIcon");
  return pt(), ii("span", AZ, [
    Wa("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = yZ((...h) => t.handleDelete && t.handleDelete(...h), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      $a(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, WZ)
  ]);
}
var xZ = /* @__PURE__ */ Fn(FZ, [["render", CZ], ["__scopeId", "data-v-4bae6cb4"]]);
const BZ = Sn({
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
}), IZ = ["title"];
function DZ(t, o, r, s, a, u) {
  return pt(), ii("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 8, IZ);
}
var Ka = /* @__PURE__ */ Fn(BZ, [["render", DZ], ["__scopeId", "data-v-1a0445b2"]]);
const OZ = {}, QZ = {
  class: "chip-icon",
  role: "presentation"
};
function zZ(t, o) {
  return pt(), ii("span", QZ, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var es = /* @__PURE__ */ Fn(OZ, [["render", zZ], ["__scopeId", "data-v-2230176f"]]);
const Sf = {
  delete: "Remove"
}, GZ = Sn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Sf
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, o) {
    const r = xm(Pm(t, "labels"), Sf), s = Aa(() => le("chip-text")), a = () => {
      t.disabled || o.emit("click");
    }, u = zr({}, o.attrs);
    return t.disabled && delete u.onClick, _m(zr({}, r), {
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
    Chip: qa,
    DeleteIcon: xZ,
    Label: Ka,
    PreIcon: es
  }
}), _Z = ["aria-disabled"];
function YZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), h = Mt("Label"), w = Mt("DeleteIcon"), U = Mt("Chip");
  return pt(), Zn(U, Uc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: un(() => [
      Wa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Wa("span", Uc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (pt(), Zn(d, { key: 0 }, {
            default: un(() => [
              Yt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : qo("", !0),
          $a(h, { id: t.chipTextId }, {
            default: un(() => [
              Yt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, _Z),
      t.canDelete ? (pt(), Zn(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (V) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : qo("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var PZ = /* @__PURE__ */ Fn(GZ, [["render", YZ], ["__scopeId", "data-v-48b2704a"]]);
const HZ = Sn({
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
    Chip: qa,
    Label: Ka,
    PreIcon: es
  }
}), jZ = ["aria-disabled"];
function XZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), h = Mt("Label"), w = Mt("Chip");
  return pt(), Zn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: un(() => [
      Wa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (pt(), Zn(d, { key: 0 }, {
          default: un(() => [
            Yt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : qo("", !0),
        $a(h, null, {
          default: un(() => [
            Yt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, jZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var LZ = /* @__PURE__ */ Fn(HZ, [["render", XZ], ["__scopeId", "data-v-3e0c4eba"]]);
const $Z = Sn({
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
    const o = Yo(!1), r = Yo(!1), s = Aa(() => le("chip-label-id")), a = Aa(() => o.value || r.value ? 0 : -1), u = Yo(), d = () => {
      u.value.$el.focus();
    }, h = _o("register", (N) => {
    }), w = _o("blur", (N) => {
    }), U = _o("select", (N) => {
    }), V = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return h(V), {
      labelId: s,
      tabindex: a,
      first: o,
      blur: w,
      click: () => {
        U(V);
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
    Chip: qa,
    Label: Ka,
    PreIcon: es
  }
});
function qZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), h = Mt("Label"), w = Mt("Chip");
  return pt(), Zn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: Ym(["focus hover", { selected: t.checked }]),
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
    default: un(() => [
      t.hasIcon ? (pt(), Zn(d, { key: 0 }, {
        default: un(() => [
          Yt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : qo("", !0),
      $a(h, { id: t.labelId }, {
        default: un(() => [
          Yt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var KZ = /* @__PURE__ */ Fn($Z, [["render", qZ], ["__scopeId", "data-v-bbcc2f70"]]);
const eb = {
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
}, Ff = Sn({
  props: eb,
  setup() {
    return { format: _o("chipListFormat", "") };
  },
  render() {
    const t = (o) => kZ(o, zr(zr({}, this.$props), this.$attrs), zr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(PZ) : this.format === "radio" ? t(KZ) : t(LZ);
  }
}), tb = {
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
}, nb = Sn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: tb,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    MZ("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const d = Pm(t, "modelValue");
      return _m(zr({
        attrs: {
          role: "radiogroup"
        }
      }, Gm(d, o.emit, t.label, {}, Yo(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), rb = ["aria-label"];
function ob(t, o, r, s, a, u) {
  return pt(), ii("div", Uc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 16, rb);
}
var ib = /* @__PURE__ */ Fn(nb, [["render", ob], ["__scopeId", "data-v-1e06f41d"]]);
function rr(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var o = Number(t);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Qe(t, o) {
  if (o.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Ye(t) {
  Qe(1, arguments);
  var o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || o === "[object Number]" ? new Date(t) : ((typeof t == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function ab(t, o) {
  Qe(2, arguments);
  var r = Ye(t).getTime(), s = rr(o);
  return new Date(r + s);
}
var sb = {};
function ai() {
  return sb;
}
function Rc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function lb(t, o) {
  Qe(2, arguments);
  var r = Ye(t), s = Ye(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function cb(t) {
  return Qe(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function ub(t) {
  if (Qe(1, arguments), !cb(t) && typeof t != "number")
    return !1;
  var o = Ye(t);
  return !isNaN(Number(o));
}
function db(t, o) {
  Qe(2, arguments);
  var r = rr(o);
  return ab(t, -r);
}
var hb = 864e5;
function fb(t) {
  Qe(1, arguments);
  var o = Ye(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / hb) + 1;
}
function Ca(t) {
  Qe(1, arguments);
  var o = 1, r = Ye(t), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Hm(t) {
  Qe(1, arguments);
  var o = Ye(t), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Ca(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var d = Ca(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function pb(t) {
  Qe(1, arguments);
  var o = Hm(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Ca(r);
  return s;
}
var mb = 6048e5;
function wb(t) {
  Qe(1, arguments);
  var o = Ye(t), r = Ca(o).getTime() - pb(o).getTime();
  return Math.round(r / mb) + 1;
}
function xa(t, o) {
  var r, s, a, u, d, h, w, U;
  Qe(1, arguments);
  var V = ai(), R = rr((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && a !== void 0 ? a : V.weekStartsOn) !== null && s !== void 0 ? s : (w = V.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = Ye(t), A = N.getUTCDay(), S = (A < R ? 7 : 0) + A - R;
  return N.setUTCDate(N.getUTCDate() - S), N.setUTCHours(0, 0, 0, 0), N;
}
function jm(t, o) {
  var r, s, a, u, d, h, w, U;
  Qe(1, arguments);
  var V = Ye(t), R = V.getUTCFullYear(), N = ai(), A = rr((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : N.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = N.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(R + 1, 0, A), S.setUTCHours(0, 0, 0, 0);
  var x = xa(S, o), B = new Date(0);
  B.setUTCFullYear(R, 0, A), B.setUTCHours(0, 0, 0, 0);
  var F = xa(B, o);
  return V.getTime() >= x.getTime() ? R + 1 : V.getTime() >= F.getTime() ? R : R - 1;
}
function vb(t, o) {
  var r, s, a, u, d, h, w, U;
  Qe(1, arguments);
  var V = ai(), R = rr((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : V.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = V.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), N = jm(t, o), A = new Date(0);
  A.setUTCFullYear(N, 0, R), A.setUTCHours(0, 0, 0, 0);
  var S = xa(A, o);
  return S;
}
var Vb = 6048e5;
function Tb(t, o) {
  Qe(1, arguments);
  var r = Ye(t), s = xa(r, o).getTime() - vb(r, o).getTime();
  return Math.round(s / Vb) + 1;
}
function se(t, o) {
  for (var r = t < 0 ? "-" : "", s = Math.abs(t).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var gb = {
  y: function(t, o) {
    var r = t.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return se(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(t, o) {
    var r = t.getUTCMonth();
    return o === "M" ? String(r + 1) : se(r + 1, 2);
  },
  d: function(t, o) {
    return se(t.getUTCDate(), o.length);
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
    return se(t.getUTCHours() % 12 || 12, o.length);
  },
  H: function(t, o) {
    return se(t.getUTCHours(), o.length);
  },
  m: function(t, o) {
    return se(t.getUTCMinutes(), o.length);
  },
  s: function(t, o) {
    return se(t.getUTCSeconds(), o.length);
  },
  S: function(t, o) {
    var r = o.length, s = t.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return se(a, o.length);
  }
};
const Rn = gb;
var Jr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Ub = {
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
    return Rn.y(t, o);
  },
  Y: function(t, o, r, s) {
    var a = jm(t, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var d = u % 100;
      return se(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : se(u, o.length);
  },
  R: function(t, o) {
    var r = Hm(t);
    return se(r, o.length);
  },
  u: function(t, o) {
    var r = t.getUTCFullYear();
    return se(r, o.length);
  },
  Q: function(t, o, r) {
    var s = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return se(s, 2);
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
        return se(s, 2);
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
        return Rn.M(t, o);
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
        return se(s + 1, 2);
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
    var a = Tb(t, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : se(a, o.length);
  },
  I: function(t, o, r) {
    var s = wb(t);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : se(s, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Rn.d(t, o);
  },
  D: function(t, o, r) {
    var s = fb(t);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : se(s, o.length);
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
        return se(u, 2);
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
        return se(u, o.length);
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
        return se(a, o.length);
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
    switch (s === 12 ? a = Jr.noon : s === 0 ? a = Jr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = Jr.evening : s >= 12 ? a = Jr.afternoon : s >= 4 ? a = Jr.morning : a = Jr.night, o) {
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
    return Rn.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Rn.H(t, o);
  },
  K: function(t, o, r) {
    var s = t.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : se(s, o.length);
  },
  k: function(t, o, r) {
    var s = t.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : se(s, o.length);
  },
  m: function(t, o, r) {
    return o === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Rn.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Rn.s(t, o);
  },
  S: function(t, o) {
    return Rn.S(t, o);
  },
  X: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Wf(u);
      case "XXXX":
      case "XX":
        return qn(u);
      case "XXXXX":
      case "XXX":
      default:
        return qn(u, ":");
    }
  },
  x: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Wf(u);
      case "xxxx":
      case "xx":
        return qn(u);
      case "xxxxx":
      case "xxx":
      default:
        return qn(u, ":");
    }
  },
  O: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Af(u, ":");
      case "OOOO":
      default:
        return "GMT" + qn(u, ":");
    }
  },
  z: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Af(u, ":");
      case "zzzz":
      default:
        return "GMT" + qn(u, ":");
    }
  },
  t: function(t, o, r, s) {
    var a = s._originalDate || t, u = Math.floor(a.getTime() / 1e3);
    return se(u, o.length);
  },
  T: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTime();
    return se(u, o.length);
  }
};
function Af(t, o) {
  var r = t > 0 ? "-" : "+", s = Math.abs(t), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var d = o || "";
  return r + String(a) + d + se(u, 2);
}
function Wf(t, o) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + se(Math.abs(t) / 60, 2);
  }
  return qn(t, o);
}
function qn(t, o) {
  var r = o || "", s = t > 0 ? "-" : "+", a = Math.abs(t), u = se(Math.floor(a / 60), 2), d = se(a % 60, 2);
  return s + u + r + d;
}
const Rb = Ub;
var Cf = function(t, o) {
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
}, Xm = function(t, o) {
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
}, Nb = function(t, o) {
  var r = t.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Cf(t, o);
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
  return u.replace("{{date}}", Cf(s, o)).replace("{{time}}", Xm(a, o));
}, yb = {
  p: Xm,
  P: Nb
};
const kb = yb;
var Mb = ["D", "DD"], Zb = ["YY", "YYYY"];
function bb(t) {
  return Mb.indexOf(t) !== -1;
}
function Jb(t) {
  return Zb.indexOf(t) !== -1;
}
function xf(t, o, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Eb = {
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
}, Sb = function(t, o, r) {
  var s, a = Eb[t];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const Fb = Sb;
function Pl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, s = t.formats[r] || t.formats[t.defaultWidth];
    return s;
  };
}
var Ab = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Wb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Cb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xb = {
  date: Pl({
    formats: Ab,
    defaultWidth: "full"
  }),
  time: Pl({
    formats: Wb,
    defaultWidth: "full"
  }),
  dateTime: Pl({
    formats: Cb,
    defaultWidth: "full"
  })
};
const Bb = xb;
var Ib = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Db = function(t, o, r, s) {
  return Ib[t];
};
const Ob = Db;
function Mo(t) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && t.formattingValues) {
      var u = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : u;
      a = t.formattingValues[d] || t.formattingValues[u];
    } else {
      var h = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      a = t.values[w] || t.values[h];
    }
    var U = t.argumentCallback ? t.argumentCallback(o) : o;
    return a[U];
  };
}
var Qb = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zb = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Gb = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, _b = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Yb = {
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
}, Pb = {
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
}, Hb = function(t, o) {
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
}, jb = {
  ordinalNumber: Hb,
  era: Mo({
    values: Qb,
    defaultWidth: "wide"
  }),
  quarter: Mo({
    values: zb,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Mo({
    values: Gb,
    defaultWidth: "wide"
  }),
  day: Mo({
    values: _b,
    defaultWidth: "wide"
  }),
  dayPeriod: Mo({
    values: Yb,
    defaultWidth: "wide",
    formattingValues: Pb,
    defaultFormattingWidth: "wide"
  })
};
const Xb = jb;
function Zo(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && t.matchPatterns[s] || t.matchPatterns[t.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var d = u[0], h = s && t.parsePatterns[s] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(h) ? $b(h, function(R) {
      return R.test(d);
    }) : Lb(h, function(R) {
      return R.test(d);
    }), U;
    U = t.valueCallback ? t.valueCallback(w) : w, U = r.valueCallback ? r.valueCallback(U) : U;
    var V = o.slice(d.length);
    return {
      value: U,
      rest: V
    };
  };
}
function Lb(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function $b(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function qb(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = o.match(t.matchPattern);
    if (!s)
      return null;
    var a = s[0], u = o.match(t.parsePattern);
    if (!u)
      return null;
    var d = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var h = o.slice(a.length);
    return {
      value: d,
      rest: h
    };
  };
}
var Kb = /^(\d+)(th|st|nd|rd)?/i, e2 = /\d+/i, t2 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, n2 = {
  any: [/^b/i, /^(a|c)/i]
}, r2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, o2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, i2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, a2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, s2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, l2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, c2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, u2 = {
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
}, d2 = {
  ordinalNumber: qb({
    matchPattern: Kb,
    parsePattern: e2,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Zo({
    matchPatterns: t2,
    defaultMatchWidth: "wide",
    parsePatterns: n2,
    defaultParseWidth: "any"
  }),
  quarter: Zo({
    matchPatterns: r2,
    defaultMatchWidth: "wide",
    parsePatterns: o2,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Zo({
    matchPatterns: i2,
    defaultMatchWidth: "wide",
    parsePatterns: a2,
    defaultParseWidth: "any"
  }),
  day: Zo({
    matchPatterns: s2,
    defaultMatchWidth: "wide",
    parsePatterns: l2,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zo({
    matchPatterns: c2,
    defaultMatchWidth: "any",
    parsePatterns: u2,
    defaultParseWidth: "any"
  })
};
const h2 = d2;
var f2 = {
  code: "en-US",
  formatDistance: Fb,
  formatLong: Bb,
  formatRelative: Ob,
  localize: Xb,
  match: h2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Lm = f2;
var p2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, m2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, w2 = /^'([^]*?)'?$/, v2 = /''/g, V2 = /[a-zA-Z]/;
function T2(t, o, r) {
  var s, a, u, d, h, w, U, V, R, N, A, S, x, B, F, W, E, O;
  Qe(2, arguments);
  var b = String(o), z = ai(), Q = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : z.locale) !== null && s !== void 0 ? s : Lm, P = rr((u = (d = (h = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (U = r.locale) === null || U === void 0 || (V = U.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && h !== void 0 ? h : z.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = z.locale) === null || R === void 0 || (N = R.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(P >= 1 && P <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var me = rr((A = (S = (x = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (F = r.locale) === null || F === void 0 || (W = F.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && x !== void 0 ? x : z.weekStartsOn) !== null && S !== void 0 ? S : (E = z.locale) === null || E === void 0 || (O = E.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && A !== void 0 ? A : 0);
  if (!(me >= 0 && me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = Ye(t);
  if (!ub(de))
    throw new RangeError("Invalid time value");
  var ve = Rc(de), Ve = db(de, ve), Ue = {
    firstWeekContainsDate: P,
    weekStartsOn: me,
    locale: Q,
    _originalDate: de
  }, ke = b.match(m2).map(function(ce) {
    var Ce = ce[0];
    if (Ce === "p" || Ce === "P") {
      var xe = kb[Ce];
      return xe(ce, Q.formatLong);
    }
    return ce;
  }).join("").match(p2).map(function(ce) {
    if (ce === "''")
      return "'";
    var Ce = ce[0];
    if (Ce === "'")
      return g2(ce);
    var xe = Rb[Ce];
    if (xe)
      return !(r != null && r.useAdditionalWeekYearTokens) && Jb(ce) && xf(ce, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && bb(ce) && xf(ce, o, String(t)), xe(Ve, ce, Q.localize, Ue);
    if (Ce.match(V2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ce + "`");
    return ce;
  }).join("");
  return ke;
}
function g2(t) {
  var o = t.match(w2);
  return o ? o[1].replace(v2, "'") : t;
}
function $m(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function U2(t) {
  return $m({}, t);
}
var Bf = 1e3 * 60, Ba = 60 * 24, If = Ba * 30, Df = Ba * 365;
function R2(t, o, r) {
  var s, a, u;
  Qe(2, arguments);
  var d = ai(), h = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : d.locale) !== null && s !== void 0 ? s : Lm;
  if (!h.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = lb(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var U = $m(U2(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), V, R;
  w > 0 ? (V = Ye(o), R = Ye(t)) : (V = Ye(t), R = Ye(o));
  var N = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), A;
  if (N === "floor")
    A = Math.floor;
  else if (N === "ceil")
    A = Math.ceil;
  else if (N === "round")
    A = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var S = R.getTime() - V.getTime(), x = S / Bf, B = Rc(R) - Rc(V), F = (S - B) / Bf, W = r == null ? void 0 : r.unit, E;
  if (W ? E = String(W) : x < 1 ? E = "second" : x < 60 ? E = "minute" : x < Ba ? E = "hour" : F < If ? E = "day" : F < Df ? E = "month" : E = "year", E === "second") {
    var O = A(S / 1e3);
    return h.formatDistance("xSeconds", O, U);
  } else if (E === "minute") {
    var b = A(x);
    return h.formatDistance("xMinutes", b, U);
  } else if (E === "hour") {
    var z = A(x / 60);
    return h.formatDistance("xHours", z, U);
  } else if (E === "day") {
    var Q = A(F / Ba);
    return h.formatDistance("xDays", Q, U);
  } else if (E === "month") {
    var P = A(F / If);
    return P === 12 && W !== "month" ? h.formatDistance("xYears", 1, U) : h.formatDistance("xMonths", P, U);
  } else if (E === "year") {
    var me = A(F / Df);
    return h.formatDistance("xYears", me, U);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const dn = (t) => {
  let o = "";
  if (t)
    try {
      o = T2(new Date(t), ft.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
};
var N2 = Object.defineProperty, y2 = Object.defineProperties, k2 = Object.getOwnPropertyDescriptors, Of = Object.getOwnPropertySymbols, M2 = Object.prototype.hasOwnProperty, Z2 = Object.prototype.propertyIsEnumerable, Qf = (t, o, r) => o in t ? N2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, bo = (t, o) => {
  for (var r in o || (o = {}))
    M2.call(o, r) && Qf(t, r, o[r]);
  if (Of)
    for (var r of Of(o))
      Z2.call(o, r) && Qf(t, r, o[r]);
  return t;
}, zf = (t, o) => y2(t, k2(o));
const b2 = window.Vue.defineComponent, J2 = window.Vue.inject, Jo = window.Vue.h;
var E2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const S2 = {
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
}, F2 = b2({
  inheritAttrs: !1,
  props: S2,
  setup() {
    return { hasTooltip: J2("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let h = "";
      this.primary && (h = "btn-primary"), this.secondary && (h = "btn-secondary"), (this.text || this.icon) && (h = "btn-text");
      const w = ["btn", "hover", "focus", h];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = bo({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (h) => {
        this.disabled ? (this.asAnchor && h.preventDefault(), this.$emit("disabled-click", h)) : this.$emit("click", h);
      }
    };
    const a = t();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Jo(nr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const h = this.icon;
      return r.attrs["aria-label"] = h, this.hasTooltip || (r.attrs.title = h), Jo(o, zf(bo(bo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Jo(nr, { center: !0 })
      ]);
    }
    const d = Jo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Jo(o, zf(bo(bo({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      u
    ]);
  }
});
var bn = /* @__PURE__ */ E2(F2, [["__scopeId", "data-v-702d1074"]]);
const A2 = window.Vue.openBlock, W2 = window.Vue.createElementBlock, C2 = window.Vue.createElementVNode;
var x2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const B2 = {}, I2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D2 = /* @__PURE__ */ C2("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), O2 = [
  D2
];
function Q2(t, o) {
  return A2(), W2("svg", I2, O2);
}
var z2 = /* @__PURE__ */ x2(B2, [["render", Q2]]);
const G2 = window.Vue.openBlock, _2 = window.Vue.createElementBlock, Y2 = window.Vue.createStaticVNode;
var P2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const H2 = {}, j2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X2 = /* @__PURE__ */ Y2('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), L2 = [
  X2
];
function $2(t, o) {
  return G2(), _2("svg", j2, L2);
}
var qm = /* @__PURE__ */ P2(H2, [["render", $2]]);
const q2 = window.Vue.defineComponent, Wt = window.Vue.unref, Hl = window.Vue.createVNode, Xc = window.Vue.createElementVNode, jl = window.Vue.withCtx, aa = window.Vue.openBlock, Xl = window.Vue.createBlock, Ll = window.Vue.createCommentVNode, K2 = window.Vue.normalizeClass, eJ = window.Vue.createElementBlock, tJ = window.Vue.pushScopeId, nJ = window.Vue.popScopeId, Lc = (t) => (tJ("data-v-cc0a6466"), t = t(), nJ(), t), rJ = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Xc("span", null, "Acknowledge", -1)), oJ = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Xc("span", null, "Escalate", -1)), iJ = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Xc("span", null, "Clear", -1)), aJ = /* @__PURE__ */ q2({
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
    const r = t, s = ir(), a = async (d) => {
      await YN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id)), r.isSituation && await Fm(
        r.situationId,
        ft.ACCEPTED.toLowerCase()
      );
    }, u = async (d) => {
      await PN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id), s.getSituation(r.situationId));
    };
    return (d, h) => (aa(), eJ("div", {
      class: K2(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? Ll("", !0) : (aa(), Xl(Wt(bn), {
        key: 0,
        class: "acction-btn",
        onClick: h[0] || (h[0] = () => a(!0))
      }, {
        default: jl(() => [
          Hl(Wt(ne), {
            icon: Wt(zc),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          rJ
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (aa(), Xl(Wt(bn), {
        key: 1,
        class: "acction-btn",
        onClick: h[1] || (h[1] = () => u(Wt(ft).ESCALATE))
      }, {
        default: jl(() => [
          Hl(Wt(ne), {
            icon: Wt(z2),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          oJ
        ]),
        _: 1
      })) : Ll("", !0),
      r.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (aa(), Xl(Wt(bn), {
        key: 2,
        class: "acction-btn",
        onClick: h[2] || (h[2] = () => u(Wt(ft).CLEAR))
      }, {
        default: jl(() => [
          Hl(Wt(ne), {
            icon: Wt(qm),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          iJ
        ]),
        _: 1
      })) : Ll("", !0)
    ], 2));
  }
});
const Km = /* @__PURE__ */ Ze(aJ, [["__scopeId", "data-v-cc0a6466"]]);
var sJ = Object.defineProperty, lJ = Object.defineProperties, cJ = Object.getOwnPropertyDescriptors, Gf = Object.getOwnPropertySymbols, uJ = Object.prototype.hasOwnProperty, dJ = Object.prototype.propertyIsEnumerable, _f = (t, o, r) => o in t ? sJ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Nc = (t, o) => {
  for (var r in o || (o = {}))
    uJ.call(o, r) && _f(t, r, o[r]);
  if (Gf)
    for (var r of Gf(o))
      dJ.call(o, r) && _f(t, r, o[r]);
  return t;
}, ew = (t, o) => lJ(t, cJ(o));
const tw = window.Vue.defineComponent, hJ = window.Vue.inject, fJ = window.Vue.resolveComponent, $l = window.Vue.openBlock, Yf = window.Vue.createElementBlock, Or = window.Vue.createElementVNode, pJ = window.Vue.createBlock, Pf = window.Vue.createCommentVNode, mJ = window.Vue.renderSlot, wJ = window.Vue.pushScopeId, vJ = window.Vue.popScopeId, ql = window.Vue.toRef, sa = window.Vue.computed, VJ = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var TJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gJ = {
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
}, UJ = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, RJ = tw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: UJ,
  props: gJ,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: hJ("registerCheckbox", (o) => {
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
      (t.keyCode === q.SPACE || t.keyCode === q.ENTER) && this.updateValue(), t.keyCode === q.SPACE && t.preventDefault();
    }
  },
  components: {
    FeatherRipple: nr
  }
}), NJ = (t) => (wJ("data-v-a7af27e2"), t = t(), vJ(), t), yJ = { class: "layout-container" }, kJ = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], MJ = { class: "checkbox hover focus" }, ZJ = /* @__PURE__ */ NJ(() => /* @__PURE__ */ Or("div", { class: "box" }, [
  /* @__PURE__ */ Or("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Or("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Or("div", { class: "indeterminate" })
], -1)), bJ = ["id", "for"];
function JJ(t, o, r, s, a, u) {
  const d = fJ("feather-ripple");
  return $l(), Yf("div", yJ, [
    Or("div", {
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
      Or("div", MJ, [
        ZJ,
        t.disabled ? Pf("", !0) : ($l(), pJ(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? Pf("", !0) : ($l(), Yf("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        mJ(t.$slots, "default", {}, void 0, !0)
      ], 8, bJ))
    ], 40, kJ)
  ]);
}
var $c = /* @__PURE__ */ TJ(RJ, [["render", JJ], ["__scopeId", "data-v-a7af27e2"]]);
const EJ = ew(Nc({}, Xa), {
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
tw({
  props: EJ,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    La(t);
    const r = ql(t, "error"), s = sa(() => le("feather-checkbox-group")), a = sa(() => le("feather-input-description")), u = sa(() => le("feather-input-label")), d = sa(() => {
      const V = JSON.parse(JSON.stringify(o.attrs));
      return V["aria-invalid"] || (V["aria-invalid"] = !!r.value), ew(Nc({}, V), {
        class: "",
        "aria-describedby": a.value
      });
    }), h = VJ(s.value), { validate: w } = Ha(h, ql(t, "modelValue"), t.label, t.schema, ql(t, "error"));
    return Nc({
      groupId: s,
      inputId: h,
      descriptionId: a,
      labelId: u,
      attrs: d,
      validate: w,
      registerCheckbox: (V) => {
        V && h.value === s.value && (h.value = V);
      }
    }, ja(o.attrs));
  },
  components: {
    InputSubText: Pa
  }
});
const SJ = window.Vue.openBlock, FJ = window.Vue.createElementBlock, nw = window.Vue.createElementVNode;
var AJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WJ = {}, CJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xJ = /* @__PURE__ */ nw("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), BJ = /* @__PURE__ */ nw("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), IJ = [
  xJ,
  BJ
];
function DJ(t, o) {
  return SJ(), FJ("svg", CJ, IJ);
}
var OJ = /* @__PURE__ */ AJ(WJ, [["render", DJ]]);
const Hf = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
};
const qr = window.Vue.defineComponent, Ko = window.Vue.resolveComponent, _t = window.Vue.openBlock, Qr = window.Vue.createElementBlock, QJ = window.Vue.createVNode, Ia = window.Vue.createBlock, zJ = window.Vue.withModifiers, Xr = window.Vue.inject, ei = window.Vue.computed, GJ = window.Vue.normalizeClass, Mn = window.Vue.createElementVNode, _J = window.Vue.normalizeStyle, yc = window.Vue.toDisplayString, ya = window.Vue.renderSlot, Po = window.Vue.createCommentVNode, YJ = window.Vue.pushScopeId, PJ = window.Vue.popScopeId, HJ = window.Vue.withDirectives, jJ = window.Vue.vShow, kc = window.Vue.ref, jf = window.Vue.toRef, Xf = window.Vue.nextTick, Mc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const qc = window.Vue.provide, Lf = window.Vue.isRef, XJ = window.Vue.onBeforeUnmount, LJ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, $J = qr({
  props: LJ,
  components: {
    FeatherIcon: ne
  }
}), si = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, qJ = ["title"];
function KJ(t, o, r, s, a, u) {
  const d = Ko("FeatherIcon");
  return _t(), Qr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    QJ(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, qJ);
}
const eE = /* @__PURE__ */ si($J, [["render", KJ], ["__scopeId", "data-v-8bb27a5c"]]), tE = qr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return ri;
    }
  },
  components: {
    ActionIcon: eE
  }
});
function nE(t, o, r, s, a, u) {
  const d = Ko("ActionIcon");
  return _t(), Ia(d, {
    onClick: o[0] || (o[0] = zJ((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
const rE = /* @__PURE__ */ si(tE, [["render", nE]]), oE = qr({
  computed: {
    errorIcon() {
      return Bm;
    }
  },
  components: {
    FeatherIcon: ne
  }
});
function iE(t, o, r, s, a, u) {
  const d = Ko("FeatherIcon");
  return _t(), Ia(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
const aE = /* @__PURE__ */ si(oE, [["render", iE], ["__scopeId", "data-v-2b61105f"]]), sE = {
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
}, lE = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, cE = qr({
  emits: lE,
  props: sE,
  data() {
    return {
      labelWidth: "0px",
      labelObserver: void 0
    };
  },
  setup() {
    const t = Xr(
      "wrapperOptions",
      {}
    ), o = Xr(
      "validationErrorMessage",
      !1
    ), r = ei(() => t.error ? t.error : o && o.value ? o.value : !1);
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
    ClearIcon: rE,
    ErrorIcon: aE
  }
}), rw = (t) => (YJ("data-v-ab1739ff"), t = t(), PJ(), t), uE = { class: "feather-input-border" }, dE = /* @__PURE__ */ rw(() => /* @__PURE__ */ Mn("div", { class: "pre-border" }, null, -1)), hE = ["for"], fE = /* @__PURE__ */ rw(() => /* @__PURE__ */ Mn("div", { class: "post-border" }, null, -1)), pE = { class: "prefix" }, mE = { class: "post" };
function wE(t, o, r, s, a, u) {
  const d = Ko("ClearIcon"), h = Ko("ErrorIcon");
  return _t(), Qr("div", {
    class: GJ(["feather-input-wrapper-container", t.containerCls])
  }, [
    Mn("div", uE, [
      dE,
      Mn("div", {
        class: "label-border",
        style: _J({ width: t.labelWidth })
      }, [
        Mn("label", {
          class: "feather-input-label",
          for: t.inputId,
          "data-ref-id": "feather-form-element-label"
        }, yc(t.label), 9, hE)
      ], 4),
      fE
    ]),
    Mn("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Mn("div", pE, [
        ya(t.$slots, "pre", {}, void 0, !0)
      ]),
      ya(t.$slots, "default", {}, void 0, !0),
      Mn("div", mE, [
        t.showClear && t.computedClearText ? (_t(), Ia(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Po("", !0),
        t.error ? (_t(), Ia(h, { key: 1 })) : Po("", !0),
        ya(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
const vE = /* @__PURE__ */ si(cE, [["render", wE], ["__scopeId", "data-v-ab1739ff"]]), VE = qr({
  setup() {
    const t = Xr(
      "subTextOptions",
      {}
    ), o = Xr(
      "validationErrorMessage",
      !1
    ), r = ei(() => t.error ? t.error : o && o.value ? o.value : "");
    return { ...t, error: r };
  }
}), TE = { class: "feather-input-sub-text" }, gE = {
  key: 0,
  class: "feather-input-spacer"
}, UE = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, RE = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function NE(t, o, r, s, a, u) {
  return HJ((_t(), Qr("div", TE, [
    !t.hint && !t.error.length ? (_t(), Qr("div", gE, "\xA0")) : Po("", !0),
    t.hint && !t.error.length ? (_t(), Qr("div", UE, yc(t.hint), 1)) : Po("", !0),
    t.error.length > 0 ? (_t(), Qr("div", RE, yc(t.error), 1)) : Po("", !0),
    ya(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [jJ, !t.inline || t.hint || t.error.length]
  ]);
}
const yE = /* @__PURE__ */ si(VE, [["render", NE], ["__scopeId", "data-v-f0789880"]]), kE = {
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
qr({
  props: kE,
  setup(t) {
    const o = Xr(
      "featherFormErrors",
      kc([])
    ), r = jf(t, "errorList"), s = ei(() => {
      var V;
      return (V = r.value) != null && V.length ? r.value : o.value;
    }), a = jf(t, "generalError"), u = (V) => {
      document.getElementById(V).focus();
    }, d = (V) => V.replace(/ \*$/, ""), h = kc(), w = (V) => `${d(V.label)} - ${V.message}`, U = ei(() => (s.value.length && Xf(() => h.value.focus()), t.headingText(s.value)));
    return Mc(a, (V) => {
      V.length && Xf(() => h.value.focus());
    }), {
      errors: s,
      errorsHeading: U,
      heading: h,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const ME = (t, o, r, s, a) => {
  const u = Xr("featherForm", !1);
  if (s && u && t.value) {
    const d = kc("");
    qc("validationErrorMessage", d);
    const h = () => {
      if (a && Lf(a) && a.value)
        return d.value = a.value, {
          success: !1,
          message: a.value,
          inputId: t.value,
          label: r
        };
      try {
        return s.validateSync(o.value), d.value = "", { success: !0 };
      } catch (V) {
        const R = V;
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
      validate: h
    };
    return a && Lf(a) && Mc(a, () => {
      u.runValidation();
    }), Mc(
      t,
      (V, R) => {
        V && u && u.register(V, U), R && u && u.deregister(R);
      },
      { immediate: !0 }
    ), XJ(() => {
      u.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, ZE = (t) => ({
  inherittedAttrs: ei(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), bE = {
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
}, JE = (t) => {
  qc("subTextOptions", t);
}, EE = {
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
}, SE = (t) => {
  qc("wrapperOptions", t);
}, FE = window.Vue.defineComponent, Kl = window.Vue.toRef, AE = window.Vue.computed, $f = window.Vue.resolveComponent, qf = window.Vue.openBlock, Kf = window.Vue.createElementBlock, ep = window.Vue.mergeProps, tp = window.Vue.createVNode, WE = window.Vue.normalizeClass, np = window.Vue.withCtx, CE = window.Vue.createElementVNode, xE = window.Vue.toDisplayString, BE = window.Vue.createCommentVNode, IE = {
  ...EE,
  ...bE,
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
}, DE = {
  "update:modelValue": (t) => !0
}, OE = FE({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: DE,
  props: IE,
  setup(t, o) {
    JE(t), SE(t);
    const r = Kl(t, "id"), s = AE(() => r.value ? r.value : Hf("feather-textarea-label")), { validate: a } = ME(
      s,
      Kl(t, "modelValue"),
      t.label,
      t.schema,
      Kl(t, "error")
    );
    return {
      inputId: s,
      incomingId: r,
      validate: a,
      ...ZE(o.attrs)
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
      return Hf("feather-textarea-description");
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
    InputSubText: yE,
    InputWrapper: vE
  }
}), QE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, zE = ["maxlength"], GE = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function _E(t, o, r, s, a, u) {
  const d = $f("InputWrapper"), h = $f("InputSubText");
  return qf(), Kf("div", ep(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    tp(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: WE(["feather-textarea-content", t.contentCls])
    }, {
      default: np(() => [
        CE("textarea", ep(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, zE)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    tp(h, { id: t.descriptionId }, {
      right: np(() => [
        t.maxlength ? (qf(), Kf("div", GE, xE(t.charCount), 1)) : BE("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
const YE = /* @__PURE__ */ QE(OE, [["render", _E], ["__scopeId", "data-v-eee43a95"]]), PE = window.Pinia.defineStore, ow = PE("appStore", {
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
}), HE = window.Vue.defineComponent, rp = window.Vue.toDisplayString, Eo = window.Vue.createElementVNode, zn = window.Vue.unref, Er = window.Vue.openBlock, op = window.Vue.createBlock, So = window.Vue.createCommentVNode, ip = window.Vue.createVNode, la = window.Vue.createElementBlock, jE = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XE = { class: "row" }, LE = { class: "label" }, $E = { class: "action-icons" }, qE = { class: "icon-btn" }, KE = {
  key: 0,
  class: "icon-btn"
}, eS = {
  key: 1,
  class: "icon-btn"
}, tS = {
  key: 0,
  class: "text"
}, nS = window.Vue.watch, ap = window.Vue.ref, rS = /* @__PURE__ */ HE({
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
    const o = t, r = ir(), s = ow(), a = ap(!1), u = ap((U = o.memo) == null ? void 0 : U.body);
    nS(o, () => {
      var V;
      u.value = (V = o.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const d = () => {
      a.value = !a.value;
    }, h = async () => {
      a.value = !1, await ey(o.id, o.type) ? (u.value = "", r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg("Error on removing memo :(");
    }, w = async () => {
      a.value = !1, u.value && u.value !== "" && (await KN(o.id, o.type, u.value) ? (r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg("Error on saving memo :("));
    };
    return (V, R) => (Er(), la("div", {
      class: jE([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Eo("div", XE, [
        Eo("div", LE, rp(t.label), 1),
        Eo("div", $E, [
          Eo("div", qE, [
            a.value ? So("", !0) : (Er(), op(zn(ne), {
              key: 0,
              icon: zn(OJ),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: d
            }, null, 8, ["icon"]))
          ]),
          a.value ? (Er(), la("div", KE, [
            ip(zn(ne), {
              icon: zn(zc),
              "aria-hidden": "true",
              class: "icon save",
              onClick: w
            }, null, 8, ["icon"])
          ])) : So("", !0),
          u.value && u.value != "" || a.value ? (Er(), la("div", eS, [
            ip(zn(ne), {
              icon: zn(ri),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: h
            }, null, 8, ["icon"])
          ])) : So("", !0)
        ])
      ]),
      Eo("div", null, [
        !a.value && u.value != null ? (Er(), la("div", tS, rp(u.value), 1)) : So("", !0),
        a.value ? (Er(), op(zn(YE), {
          key: 1,
          class: "textarea",
          modelValue: u.value,
          "onUpdate:modelValue": R[0] || (R[0] = (N) => u.value = N),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : So("", !0)
      ])
    ], 2));
  }
});
const Da = /* @__PURE__ */ Ze(rS, [["__scopeId", "data-v-c30021c9"]]), oS = window.Vue.defineComponent, ec = window.Vue.unref, Fo = window.Vue.createVNode, ca = window.Vue.toDisplayString, ln = window.Vue.createElementVNode, sp = window.Vue.createTextVNode, iS = window.Vue.openBlock, aS = window.Vue.createElementBlock, sS = window.Vue.createCommentVNode, lS = window.Vue.pushScopeId, cS = window.Vue.popScopeId, iw = (t) => (lS("data-v-3aa991f7"), t = t(), cS(), t), uS = {
  key: 0,
  class: "card"
}, dS = { class: "row" }, hS = { class: "title" }, fS = ["innerHTML"], pS = /* @__PURE__ */ iw(() => /* @__PURE__ */ ln("strong", null, "First Event", -1)), mS = /* @__PURE__ */ iw(() => /* @__PURE__ */ ln("strong", null, "Last Event", -1)), wS = { class: "section memo-boxes" }, lp = window.Vue.ref, vS = window.Vue.watch, VS = /* @__PURE__ */ oS({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, s = lp(!1), a = lp(r.alarm);
    vS(r, () => {
      a.value = r.alarm, s.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const u = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (h) => {
      const w = await Jm(h);
      w && (a.value = w);
    };
    return (h, w) => {
      var U, V, R, N, A;
      return a.value ? (iS(), aS("div", uS, [
        ln("div", null, [
          ln("div", dS, [
            Fo(ec($c), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (S) => s.value = S),
                u
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            ln("div", hS, ca(a.value.nodeLabel) + " - " + ca(a.value.id), 1),
            Fo(Cm, {
              severity: (U = a.value) == null ? void 0 : U.severity
            }, null, 8, ["severity"])
          ]),
          ln("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, fS),
          ln("div", null, [
            pS,
            sp(" - " + ca(ec(dn)(a.value.firstEventTime)), 1)
          ]),
          ln("div", null, [
            mS,
            sp(" - " + ca(ec(dn)(a.value.lastEventTime)), 1)
          ]),
          ln("div", wS, [
            Fo(Da, {
              id: (V = a.value) == null ? void 0 : V.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = a.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Fo(Da, {
              id: (N = a.value) == null ? void 0 : N.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (A = a.value) == null ? void 0 : A.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Fo(Km, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : sS("", !0);
    };
  }
});
const TS = /* @__PURE__ */ Ze(VS, [["__scopeId", "data-v-3aa991f7"]]), gS = window.Vue.defineComponent, US = window.Vue.normalizeClass, RS = window.Vue.openBlock, NS = window.Vue.createElementBlock, yS = window.Vue.createCommentVNode, kS = /* @__PURE__ */ gS({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (RS(), NS("span", {
      key: 0,
      class: US(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : yS("", !0);
  }
});
const MS = /* @__PURE__ */ Ze(kS, [["__scopeId", "data-v-e08880d6"]]), ZS = window.Vue.defineComponent, Ho = window.Vue.createElementVNode, rn = window.Vue.unref, aw = window.Vue.createTextVNode, cp = window.Vue.normalizeClass, ua = window.Vue.withCtx, Sr = window.Vue.createVNode, up = window.Vue.renderList, dp = window.Vue.Fragment, Gn = window.Vue.openBlock, Ao = window.Vue.createElementBlock, bS = window.Vue.toDisplayString, hp = window.Vue.createBlock, fp = window.Vue.createCommentVNode, JS = window.Vue.pushScopeId, ES = window.Vue.popScopeId, sw = (t) => (JS("data-v-b7900fa2"), t = t(), ES(), t), SS = { class: "container" }, FS = { class: "row" }, AS = /* @__PURE__ */ sw(() => /* @__PURE__ */ Ho("div", { class: "title" }, "Alarms", -1)), WS = /* @__PURE__ */ aw(" ALL "), CS = { class: "row actions" }, xS = /* @__PURE__ */ sw(() => /* @__PURE__ */ Ho("span", null, "Clear", -1)), BS = { class: "section" }, IS = {
  key: 0,
  class: "alarm-list"
}, pp = window.Vue.ref, DS = window.Vue.watch, OS = window.Vue.computed, QS = window.Vue.reactive, zS = /* @__PURE__ */ ZS({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = ir(), s = pp(!1), a = OS(() => ge.exports.keys(ge.exports.groupBy(o.alarms, "severity"))), u = pp(["all"]), d = QS({
      selectedAlarms: [],
      alarms: o.alarms
    }), h = (V) => {
      u.value = u.value.filter((R) => R !== "all"), u.value.includes(V) ? u.value = u.value.filter((R) => R !== V) : u.value.push(V), V === "all" || u.value.length === 0 ? (u.value = ["all"], d.alarms = o.alarms) : d.alarms = o.alarms.filter(
        (R) => u.value.includes(R.severity)
      );
    };
    DS(o, () => {
      u.value = ["all"], d.alarms = o.alarms, d.selectedAlarms = [], s.value = !1;
    });
    const w = (V) => {
      d.selectedAlarms.includes(V) ? ge.exports.remove(d.selectedAlarms, (R) => R == V) : d.selectedAlarms.push(V);
    }, U = async () => {
      d.selectedAlarms.length && (await HN(d.selectedAlarms), r.selectedSituation = o.situationId, r.getSituation(o.situationId), d.selectedAlarms = [], s.value = !1);
    };
    return (V, R) => (Gn(), Ao("div", SS, [
      Ho("div", FS, [
        AS,
        rn(a).length > 1 ? (Gn(), hp(rn(ib), {
          key: u.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: ua(() => [
            Sr(rn(Ff), {
              class: cp({ clicked: u.value.includes("all") }),
              onClick: R[0] || (R[0] = (N) => h("all"))
            }, {
              default: ua(() => [
                WS
              ]),
              _: 1
            }, 8, ["class"]),
            (Gn(!0), Ao(dp, null, up(rn(a), (N) => (Gn(), hp(rn(Ff), {
              class: cp([
                { clicked: u.value.includes(N) },
                `${N == null ? void 0 : N.toLowerCase()}-bg`
              ]),
              key: N,
              onClick: (A) => h(N)
            }, {
              default: ua(() => [
                Sr(MS, { severity: N }, null, 8, ["severity"]),
                aw(bS(N), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })) : fp("", !0)
      ]),
      Ho("div", CS, [
        Sr(rn($c), {
          modelValue: s.value,
          "onUpdate:modelValue": R[1] || (R[1] = (N) => s.value = N),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Sr(rn(bn), {
          class: "acction-btn",
          onClick: R[2] || (R[2] = () => U())
        }, {
          default: ua(() => [
            Sr(rn(ne), {
              icon: rn(qm),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            xS
          ]),
          _: 1
        })
      ]),
      Ho("div", BS, [
        d.alarms.length > 0 ? (Gn(), Ao("div", IS, [
          (Gn(!0), Ao(dp, null, up(d.alarms, (N) => (Gn(), Ao("div", {
            key: N.id
          }, [
            Sr(TS, {
              alarm: N,
              selectAll: s.value,
              "situation-id": o.situationId,
              onAlarmSelected: w
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : fp("", !0)
      ])
    ]));
  }
});
const GS = /* @__PURE__ */ Ze(zS, [["__scopeId", "data-v-b7900fa2"]]), _S = "/whoami", YS = async () => {
  try {
    const t = await En.get(_S);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, PS = window.Pinia.defineStore, li = PS("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await YS();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await oy();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await Sm(t);
        this.allowSave = o;
      }
    }
  }
}), HS = window.Vue.defineComponent, Ct = window.Vue.createVNode, dt = window.Vue.unref, tc = window.Vue.normalizeClass, da = window.Vue.toDisplayString, _n = window.Vue.openBlock, Yn = window.Vue.createElementBlock, ha = window.Vue.createCommentVNode, jS = window.Vue.withCtx, xt = window.Vue.createElementVNode, XS = window.Vue.createTextVNode, LS = window.Vue.Fragment, $S = window.Vue.pushScopeId, qS = window.Vue.popScopeId, KS = (t) => ($S("data-v-2ac18d30"), t = t(), qS(), t), eF = { class: "section" }, tF = { class: "action-section" }, nF = {
  key: 0,
  class: "btn-row"
}, rF = { key: 0 }, oF = { key: 1 }, iF = {
  key: 0,
  class: "situation-detail"
}, aF = { class: "situation-info" }, sF = { class: "id" }, lF = { key: 0 }, cF = ["innerHTML"], uF = /* @__PURE__ */ KS(() => /* @__PURE__ */ xt("p", null, null, -1)), dF = { class: "boxes" }, hF = { class: "parameters" }, fF = { class: "section memo-boxes" }, pF = { key: 0 }, mp = window.Vue.ref, mF = window.Vue.watch, wF = /* @__PURE__ */ HS({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = ir(), a = ft.REJECTED, u = li(), d = mp(r.situationInfo.status), h = mp(r.situationInfo);
    mF(r, () => {
      d.value = r.situationInfo.status || "", h.value = r.situationInfo;
    });
    const w = (V) => {
      var R, N;
      Fm((R = r.situationInfo) == null ? void 0 : R.id, V.toLowerCase()), d.value = V, o("situation-status-changed", V, (N = r.situationInfo) == null ? void 0 : N.id);
    }, U = () => {
      var V;
      s.selectedSituation = (V = r.situationInfo) == null ? void 0 : V.id, s.getSituations();
    };
    return (V, R) => {
      var N, A, S, x, B, F, W, E, O, b, z, Q;
      return _n(), Yn(LS, null, [
        xt("div", eF, [
          xt("div", tF, [
            Ct(Km, {
              alarm: h.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id,
              onActionClicked: U
            }, null, 8, ["alarm", "situation-id"]),
            dt(u).allowSave ? (_n(), Yn("div", nF, [
              Ct(dt(bn), {
                class: tc(["btn", { rejected: d.value == dt(a) }]),
                onClick: R[0] || (R[0] = () => w(dt(a)))
              }, {
                default: jS(() => [
                  Ct(dt(ne), {
                    icon: dt(Am),
                    "aria-hidden": "true",
                    class: tc(["icon reject", { rejected: d.value == dt(a) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == dt(a) ? (_n(), Yn("span", rF, da(dt(a)), 1)) : (_n(), Yn("span", oF, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : ha("", !0)
          ]),
          h.value ? (_n(), Yn("div", iF, [
            xt("div", {
              class: tc(["severity-line", [`${(A = (N = h.value) == null ? void 0 : N.severity) == null ? void 0 : A.toLowerCase()}-bg dark`]])
            }, null, 2),
            xt("div", aF, [
              xt("div", sF, [
                xt("div", null, [
                  XS(" Situation - " + da((S = h.value) == null ? void 0 : S.id) + " - affecting " + da(dt(ge.exports.size)(dt(ge.exports.groupBy)((x = h.value) == null ? void 0 : x.alarms, "nodeId"))) + " node ", 1),
                  h.value.alarms ? (_n(), Yn("span", lF, "having " + da(h.value.alarms.length) + " alarms ", 1)) : ha("", !0)
                ]),
                Ct(Cm, {
                  severity: (B = h.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              xt("span", {
                innerHTML: h.value.description
              }, null, 8, cF),
              uF,
              xt("div", dF, [
                Ct(zl, {
                  label: "First Event",
                  info: dt(dn)(h.value.firstEventTime)
                }, null, 8, ["info"]),
                Ct(zl, {
                  label: "Last Event",
                  info: dt(dn)(h.value.lastEventTime)
                }, null, 8, ["info"]),
                Ct(zl, {
                  label: "Reduction Key",
                  info: h.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            xt("div", hF, [
              Ct(hM, {
                alarms: (F = h.value) == null ? void 0 : F.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : ha("", !0),
          xt("div", fF, [
            Ct(Da, {
              id: (W = h.value) == null ? void 0 : W.id,
              situationId: (E = h.value) == null ? void 0 : E.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (O = h.value) == null ? void 0 : O.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ct(Da, {
              id: (b = h.value) == null ? void 0 : b.id,
              situationId: (z = h.value) == null ? void 0 : z.id,
              label: "Journal Memo",
              type: "journal",
              memo: (Q = h.value) == null ? void 0 : Q.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        h.value.alarms && h.value.alarms.length ? (_n(), Yn("div", pF, [
          Ct(GS, {
            alarms: h.value.alarms,
            "situation-id": h.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : ha("", !0)
      ], 64);
    };
  }
});
const vF = /* @__PURE__ */ Ze(wF, [["__scopeId", "data-v-2ac18d30"]]);
const VF = window.Vue.openBlock, TF = window.Vue.createElementBlock, gF = window.Vue.createElementVNode;
var UF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RF = {}, NF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yF = /* @__PURE__ */ gF("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), kF = [
  yF
];
function MF(t, o) {
  return VF(), TF("svg", NF, kF);
}
var Kc = /* @__PURE__ */ UF(RF, [["render", MF]]);
const ZF = window.Vue.watch, bF = window.Vue.onBeforeUnmount, JF = window.Vue.ref, EF = window.Vue.onMounted, SF = (t) => {
  const o = JF(!1);
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
  return EF(() => {
    const d = ZF(o, (h) => {
      window && h ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    bF(() => {
      d(), u();
    });
  }), o;
}, FF = window.Vue.watch, AF = window.Vue.onBeforeUnmount, WF = window.Vue.ref, CF = window.Vue.onMounted, xF = (t, o) => {
  const r = WF(!1), s = (d) => {
    d.target === window && o(d);
  }, a = (d) => {
    let h = [];
    Array.isArray(t.value) ? h = t.value : h = [t.value], h.some((U) => U && U.contains(d.target)) || o(d);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return CF(() => {
    const d = FF(r, (h) => {
      document && window && h ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    AF(() => {
      d(), u();
    });
  }), r;
}, BF = window.Vue.watch, IF = window.Vue.onBeforeUnmount, DF = window.Vue.ref, lw = (t, o) => {
  const r = DF(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, h = BF([t, r], ([w, U], V) => {
    V && V.length && V[0] && V[0].removeEventListener("scroll", u, !0), U && w ? w.addEventListener("scroll", u, !0) : d();
  }, {
    immediate: !0
  });
  return IF(() => {
    h(), d();
  }), r;
}, OF = window.Vue.defineComponent, on = window.Vue.ref, wp = window.Vue.toRef, QF = window.Vue.onMounted, zF = window.Vue.watch, vp = window.Vue.computed, GF = window.Vue.nextTick, Vp = window.Vue.openBlock, Tp = window.Vue.createElementBlock, gp = window.Vue.renderSlot, _F = window.Vue.normalizeClass, YF = window.Vue.normalizeStyle, PF = window.Vue.createCommentVNode;
var HF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const jF = {
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
}, XF = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, LF = OF({
  emits: XF,
  props: jF,
  setup(t, o) {
    const r = on(), s = on(), a = wp(t, "open"), u = wp(t, "noExpand"), d = on("auto"), h = on(), w = on(t.triggerId || le("feather-menu-trigger")), U = on(le("feather-menu-dropdown")), V = on(""), R = on("");
    QF(() => {
      h.value = window;
    });
    const N = on(!1), A = () => ({
      height: h.value.innerHeight,
      width: h.value.innerWidth,
      left: 0,
      top: 0
    }), S = () => {
      if (!s.value)
        return;
      const b = r.value.getBoundingClientRect();
      N.value = !0, d.value = "auto", GF(() => {
        let { height: z, width: Q } = s.value.getBoundingClientRect();
        const P = A(), me = P.height, de = P.width;
        t.fill && Q < b.width ? (d.value = b.width + "px", Q = b.width) : d.value = Q + "px";
        let ve = 0;
        me - b.bottom < z && b.top >= z ? (ve = b.top - z, t.cover && (ve += b.height)) : (ve = b.bottom, t.cover && (ve -= b.height));
        let Ve = t.right ? b.right - Q : b.left;
        !t.right && b.right >= Q && de - b.left < Q && (Ve = b.right - Q), t.right && b.right <= Q && de - b.left > Q && (Ve = b.left), R.value = `${Ve}px`, V.value = `${ve}px`, N.value = !1;
      });
    }, B = xF(r, (b) => {
      o.emit("outside-click", b);
    }), F = SF(S), W = lw(h, S);
    zF([a, s], ([b, z]) => {
      b && z && S(), B.value = b, F.value = b, W.value = b;
    });
    const E = vp(() => {
      const b = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (b["aria-controls"] = U.value), u.value || (b["aria-expanded"] = a.value ? "true" : "false"), b;
    }), O = vp(() => ({
      click: (b) => {
        o.emit("trigger-click", b);
      }
    }));
    return {
      positionTop: V,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: E,
      triggerListeners: O,
      menuId: U,
      menu: s,
      menuWidth: d,
      root: r,
      calculatePosition: S,
      calculating: N
    };
  }
}), $F = ["data-ref-id"], qF = ["data-ref-id", "id"];
function KF(t, o, r, s, a, u) {
  return Vp(), Tp("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    gp(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (Vp(), Tp("div", {
      key: 0,
      class: _F(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: YF({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      gp(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, qF)) : PF("", !0)
  ], 8, $F);
}
var cw = /* @__PURE__ */ HF(LF, [["render", KF], ["__scopeId", "data-v-f75af406"]]);
const eA = window.Vue.defineComponent, tA = window.Vue.openBlock, nA = window.Vue.createElementBlock, rA = window.Vue.normalizeClass, oA = window.Vue.pushScopeId, iA = window.Vue.popScopeId, Zc = window.Vue.createElementVNode;
var aA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, lA = {
  click: (t) => !0
}, cA = eA({
  emits: lA,
  props: sA,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), uw = (t) => (oA("data-v-07e020f5"), t = t(), iA(), t), uA = /* @__PURE__ */ uw(() => /* @__PURE__ */ Zc("div", { class: "track" }, null, -1)), dA = /* @__PURE__ */ uw(() => /* @__PURE__ */ Zc("div", { class: "switcher" }, [
  /* @__PURE__ */ Zc("div", { class: "switch-circle" })
], -1)), hA = [
  uA,
  dA
];
function fA(t, o, r, s, a, u) {
  return tA(), nA("div", {
    class: rA(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, hA, 2);
}
var pA = /* @__PURE__ */ aA(cA, [["render", fA], ["__scopeId", "data-v-07e020f5"]]), mA = Object.defineProperty, wA = Object.defineProperties, vA = Object.getOwnPropertyDescriptors, Up = Object.getOwnPropertySymbols, VA = Object.prototype.hasOwnProperty, TA = Object.prototype.propertyIsEnumerable, Rp = (t, o, r) => o in t ? mA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Np = (t, o) => {
  for (var r in o || (o = {}))
    VA.call(o, r) && Rp(t, r, o[r]);
  if (Up)
    for (var r of Up(o))
      TA.call(o, r) && Rp(t, r, o[r]);
  return t;
}, yp = (t, o) => wA(t, vA(o));
const eu = window.Vue.defineComponent, Pn = window.Vue.h, gA = window.Vue.openBlock, UA = window.Vue.createElementBlock, RA = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var dw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NA = {
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
}, yA = eu({
  inheritAttrs: !1,
  props: NA,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Pn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Pn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Pn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Pn(nr);
    if (this.asLi)
      return Pn("li", yp(Np({}, this.$attrs), {
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
    const u = Pn("a", yp(Np({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, s, a]);
    return Pn("li", {}, [u]);
  }
});
var ci = /* @__PURE__ */ dw(yA, [["__scopeId", "data-v-7c46b2b3"]]);
eu({
  components: {
    FeatherListItem: ci
  }
});
const kA = {}, MA = { class: "feather-list" };
function ZA(t, o) {
  return gA(), UA("ul", MA, [
    RA(t.$slots, "default", {}, void 0, !0)
  ]);
}
var tu = /* @__PURE__ */ dw(kA, [["render", ZA], ["__scopeId", "data-v-941a1d50"]]);
const bA = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, JA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
eu({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: bA,
  props: JA,
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
      (t.keyCode === q.SPACE || t.keyCode === q.ENTER) && this.updateValue(), t.keyCode === q.SPACE && t.preventDefault(), this.$emit("keydown", t);
    }
  },
  components: { SwitchRender: pA, FeatherListItem: ci }
});
const ti = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const s = getComputedStyle(t);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
var EA = Object.defineProperty, SA = Object.defineProperties, FA = Object.getOwnPropertyDescriptors, kp = Object.getOwnPropertySymbols, AA = Object.prototype.hasOwnProperty, WA = Object.prototype.propertyIsEnumerable, Mp = (t, o, r) => o in t ? EA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, bc = (t, o) => {
  for (var r in o || (o = {}))
    AA.call(o, r) && Mp(t, r, o[r]);
  if (kp)
    for (var r of kp(o))
      WA.call(o, r) && Mp(t, r, o[r]);
  return t;
}, CA = (t, o) => SA(t, FA(o));
const hw = window.Vue.defineComponent, Kn = window.Vue.resolveComponent, ka = window.Vue.openBlock, Zp = window.Vue.createBlock, Ma = window.Vue.mergeProps, er = window.Vue.withCtx, fw = window.Vue.createElementBlock, xA = window.Vue.Fragment, BA = window.Vue.renderList, IA = window.Vue.createTextVNode, DA = window.Vue.toDisplayString, OA = window.Vue.computed, bp = window.Vue.toRef, Wo = window.Vue.createVNode, Jp = window.Vue.toHandlers, QA = window.Vue.renderSlot, zA = window.Vue.normalizeClass, GA = window.Vue.createElementVNode;
var pw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _A = hw({
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
        ti(o, this.$refs.list.$el);
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
    FeatherList: tu,
    FeatherListItem: ci
  }
});
function YA(t, o, r, s, a, u) {
  const d = Kn("FeatherListItem"), h = Kn("FeatherList");
  return ka(), Zp(h, Ma(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: er(() => [
      (ka(!0), fw(xA, null, BA(t.options, (w, U) => (ka(), Zp(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(U),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(U),
        selected: t.isSelected(U),
        onClick: (V) => t.select(w)
      }, {
        default: er(() => [
          IA(DA(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var PA = /* @__PURE__ */ pw(_A, [["render", YA], ["__scopeId", "data-v-eae820da"]]);
const HA = CA(bc(bc({}, Qm), Xa), {
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
}), jA = {
  "update:modelValue": (t) => !0
}, XA = hw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: jA,
  props: HA,
  setup(t, o) {
    La(t), zm(t);
    const r = OA(() => le("feather-select-input")), { validate: s } = Ha(r, bp(t, "modelValue"), t.label, t.schema, bp(t, "error"));
    return bc({
      inputId: r,
      validate: s
    }, ja(o.attrs));
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
    icon: () => Kc
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
        const o = String.fromCharCode(t.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Hr(this.delayTimeout), this.delayTimeout = Pr(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Om,
    InputSubText: Pa,
    FeatherMenu: cw,
    List: PA,
    FeatherIcon: ne
  }
});
function LA(t, o, r, s, a, u) {
  const d = Kn("FeatherIcon"), h = Kn("InputWrapper"), w = Kn("List"), U = Kn("FeatherMenu"), V = Kn("InputSubText");
  return ka(), fw("div", Ma(t.inherittedAttrs, { class: "feather-select-container" }), [
    Wo(U, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: er((R) => [
        Wo(h, Ma({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Jp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: er(() => [
            QA(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: er(() => [
            Wo(d, {
              class: zA(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: er(() => [
            GA("input", Ma(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: er(() => [
        Wo(w, {
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
    Wo(V, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var $A = /* @__PURE__ */ pw(XA, [["render", LA], ["__scopeId", "data-v-ecb32d90"]]);
const qA = window.Vue.openBlock, KA = window.Vue.createElementBlock, mw = window.Vue.createElementVNode;
var eW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tW = {}, nW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rW = /* @__PURE__ */ mw("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), oW = /* @__PURE__ */ mw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), iW = [
  rW,
  oW
];
function aW(t, o) {
  return qA(), KA("svg", nW, iW);
}
var sW = /* @__PURE__ */ eW(tW, [["render", aW]]);
const Za = window.Vue.openBlock, Jc = window.Vue.createElementBlock, ww = window.Vue.createElementVNode, lW = window.Vue.defineComponent, Hn = window.Vue.ref, cW = window.Vue.provide, Ep = window.Vue.computed, uW = window.Vue.onUnmounted, Sp = window.Vue.toRef, dW = window.Vue.resolveComponent, hW = window.Vue.Fragment, fW = window.Vue.createBlock, pW = window.Vue.Teleport, Fp = window.Vue.createVNode, mW = window.Vue.Transition, wW = window.Vue.withCtx, vW = window.Vue.normalizeClass, VW = window.Vue.normalizeStyle, TW = window.Vue.toDisplayString, gW = window.Vue.createCommentVNode, UW = window.Vue.renderSlot, nc = window.Vue.nextTick;
var vw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RW = {}, NW = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, yW = /* @__PURE__ */ ww("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), kW = [
  yW
];
function MW(t, o) {
  return Za(), Jc("svg", NW, kW);
}
var ZW = /* @__PURE__ */ vw(RW, [["render", MW]]), De = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(De || {}), cn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(cn || {});
const bW = (t, o, r, s = 9) => {
  const a = window.innerHeight - t.bottom, u = window.innerWidth - t.right, d = [];
  t.top >= o.height + s && d.push(De.top), a >= o.height + s && d.push(De.bottom);
  const h = [];
  u >= o.width + s && h.push(De.right), t.left >= o.width + s && h.push(De.left);
  let w = [...h, ...d];
  return (r === De.top || r === De.bottom) && (w = [...d, ...h]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, JW = (t, o, r, s, a = 28) => {
  if (t === De.left || t === De.right)
    return cn.center;
  const u = o.left + o.width / 2, d = window.innerWidth - o.right, h = [], w = u, U = d + o.width / 2, V = r.width - a, R = r.width / 2;
  return w >= R && U >= R && h.push(cn.center), U >= V && h.push(cn.left), w >= V && h.push(cn.right), h.indexOf(s) > -1 ? s : h.length ? h[0] : s;
}, EW = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => De.top
  },
  pointerAlignment: {
    type: String,
    default: () => cn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, SW = lW({
  props: EW,
  setup(t) {
    const o = Hn(!1), r = Hn(!1), s = le("feather-tooltip-trigger"), a = le("feather-tooltip"), u = "data-feather-tooltip";
    cW("feather-has-tooltip", !0);
    let d = 0;
    const h = () => {
      Hr(d), o.value || (d = Pr(x, t.enterDelay));
    }, w = () => {
      Hr(d), d = Pr(B, t.exitDelay);
    }, U = (ve) => {
      ve.keyCode === q.ESCAPE && (ve.preventDefault(), B(!0));
    }, V = Ep(() => ({
      [u]: s,
      "aria-describedby": a
    })), R = {
      mouseenter: h,
      mouseleave: w,
      focus: h,
      blur: w,
      keydown: U
    }, N = Hn(document), A = lw(N, () => B(!0));
    uW(() => B(!0));
    const S = () => document.getElementById(a), x = () => {
      r.value = !1, o.value = !0, nc(() => {
        const ve = S();
        de(ve), o.value = !1, nc(() => {
          r.value = !0, o.value = !0, A.value = !0;
        });
      });
    }, B = (ve = !1) => {
      z.value = "", b.value = "", Q.value = "", P.value = "", o.value = !1, ve && (r.value = !1), A.value = !1;
    }, F = Sp(t, "placement"), W = Sp(t, "pointerAlignment"), E = 8, O = 24, b = Hn(""), z = Hn(""), Q = Hn(""), P = Hn(""), me = Ep(() => P.value ? "p-" + P.value : !1), de = (ve) => {
      const Ve = document.querySelector(`[${u}=${s}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      nc(() => {
        const Ue = Ve.getBoundingClientRect(), ke = ve.getBoundingClientRect(), ce = bW(Ue, ke, F.value, E), Ce = JW(ce, Ue, ke, W.value, O);
        Q.value = Ce.toString(), P.value = ce.toString();
        let xe = 0, Pe = 0;
        if ((ce === De.left || ce === De.right) && (xe = Ue.top + Ue.height / 2 - ke.height / 2, ce === De.left && (Pe = Ue.left - ke.width - E), ce === De.right && (Pe = Ue.right)), ce === De.top || ce === De.bottom) {
          xe = Ue.top - ke.height - E, ce === De.bottom && (xe = Ue.bottom);
          const eo = Ue.left + Ue.width / 2;
          switch (Ce) {
            case cn.center:
              Pe = eo - ke.width / 2;
              break;
            case cn.left:
              Pe = eo - O;
              break;
            case cn.right:
              Pe = eo - ke.width + O;
              break;
          }
        }
        b.value = xe.toString() + "px", z.value = Pe.toString() + "px";
      });
    };
    return {
      attrs: V,
      listeners: R,
      show: o,
      animate: r,
      alignmentClass: Q,
      placementClass: me,
      top: b,
      left: z,
      tooltipID: a
    };
  },
  components: {
    Pointer: ZW
  }
}), FW = ["id"];
function AW(t, o, r, s, a, u) {
  const d = dW("Pointer");
  return Za(), Jc(hW, null, [
    (Za(), fW(pW, { to: "body" }, [
      Fp(mW, { css: t.animate }, {
        default: wW(() => [
          t.show ? (Za(), Jc("div", {
            key: 0,
            class: vW(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: VW({ left: t.left, top: t.top })
          }, [
            ww("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, TW(t.title), 9, FW),
            Fp(d, { class: "tooltip-pointer" })
          ], 6)) : gW("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    UW(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Ap = /* @__PURE__ */ vw(SW, [["render", AW], ["__scopeId", "data-v-3da6b22e"]]);
const WW = window.Vue.defineComponent, rc = window.Vue.normalizeStyle, oc = window.Vue.createElementVNode, Co = window.Vue.unref, Wp = window.Vue.toHandlers, Cp = window.Vue.mergeProps, xp = window.Vue.withCtx, Bp = window.Vue.createVNode, CW = window.Vue.renderList, xW = window.Vue.Fragment, xo = window.Vue.openBlock, Bo = window.Vue.createElementBlock, Ip = window.Vue.normalizeClass, Dp = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const BW = { class: "row" }, IW = /* @__PURE__ */ WW({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null,
    events: null
  },
  setup(t) {
    const o = t, r = new Date().getTime(), s = (u, d) => u ? (Number(d) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, d) => (xo(), Bo("div", BW, [
      oc("div", {
        class: "line-gray",
        style: rc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Bp(Co(Ap), {
        title: Co(dn)(t.alarm.firstEventTime)
      }, {
        default: xp(({ attrs: h, on: w }) => [
          oc("div", Cp({ class: "circle" }, h, Wp(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (xo(!0), Bo(xW, null, CW(o.events, (h, w) => (xo(), Bo("div", {
        class: "event-trim",
        key: h.id
      }, [
        o.events[w + 1] ? (xo(), Bo("div", {
          key: 0,
          class: Ip(["line", [`${h.severity.toLowerCase()}-bg dark`]]),
          style: rc({
            width: s(h.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Dp("", !0),
        Bp(Co(Ap), {
          title: Co(dn)(t.alarm.firstEventTime)
        }, {
          default: xp(({ attrs: U, on: V }) => [
            o.events[w + 1] ? (xo(), Bo("div", Cp({ key: 0 }, U, Wp(V), {
              class: ["event", [`${h.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Dp("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      oc("div", {
        class: Ip(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: rc({
          width: s(t.events[t.events.length - 1].createTime, Co(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const DW = /* @__PURE__ */ Ze(IW, [["__scopeId", "data-v-26ca04d6"]]), OW = window.Vue.openBlock, QW = window.Vue.createElementBlock, Vw = window.Vue.createElementVNode;
var zW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const GW = {}, _W = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YW = /* @__PURE__ */ Vw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), PW = /* @__PURE__ */ Vw("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), HW = [
  YW,
  PW
];
function jW(t, o) {
  return OW(), QW("svg", _W, HW);
}
var XW = /* @__PURE__ */ zW(GW, [["render", jW]]);
const LW = window.Vue.openBlock, $W = window.Vue.createElementBlock, qW = window.Vue.createElementVNode;
var KW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const eC = {}, tC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nC = /* @__PURE__ */ qW("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), rC = [
  nC
];
function oC(t, o) {
  return LW(), $W("svg", tC, rC);
}
var iC = /* @__PURE__ */ KW(eC, [["render", oC]]);
const aC = window.Vue.openBlock, sC = window.Vue.createElementBlock, lC = window.Vue.createElementVNode;
var cC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uC = {}, dC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hC = /* @__PURE__ */ lC("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), fC = [
  hC
];
function pC(t, o) {
  return aC(), sC("svg", dC, fC);
}
var Tw = /* @__PURE__ */ cC(uC, [["render", pC]]);
const mC = window.Vue.defineComponent, Ec = window.Vue.createElementVNode, wC = window.Vue.renderList, Op = window.Vue.Fragment, ic = window.Vue.openBlock, ac = window.Vue.createElementBlock, vC = window.Vue.normalizeClass, VC = window.Vue.unref, Qp = window.Vue.toDisplayString, TC = window.Vue.pushScopeId, gC = window.Vue.popScopeId, UC = (t) => (TC("data-v-2e087f7b"), t = t(), gC(), t), RC = /* @__PURE__ */ UC(() => /* @__PURE__ */ Ec("strong", null, "Events:", -1)), NC = /* @__PURE__ */ mC({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (ic(), ac(Op, null, [
      RC,
      (ic(!0), ac(Op, null, wC(o.events, (a) => (ic(), ac("div", {
        class: "event-description",
        key: a.id
      }, [
        Ec("div", {
          class: vC(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Ec("div", null, Qp(VC(dn)(a.createTime)) + " - " + Qp(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const yC = /* @__PURE__ */ Ze(NC, [["__scopeId", "data-v-2e087f7b"]]), kC = window.Vue.defineComponent, MC = window.Vue.normalizeClass, ht = window.Vue.createElementVNode, Fr = window.Vue.toDisplayString, Ee = window.Vue.unref, Ar = window.Vue.createVNode, gw = window.Vue.createTextVNode, ZC = window.Vue.renderList, zp = window.Vue.Fragment, an = window.Vue.openBlock, jn = window.Vue.createElementBlock, Gp = window.Vue.createBlock, fa = window.Vue.createCommentVNode, bC = window.Vue.normalizeStyle, JC = window.Vue.pushScopeId, EC = window.Vue.popScopeId, SC = (t) => (JC("data-v-66e379b7"), t = t(), EC(), t), FC = { class: "section detail" }, AC = { class: "id" }, WC = {
  key: 0,
  class: "section"
}, CC = /* @__PURE__ */ SC(() => /* @__PURE__ */ ht("div", { class: "id" }, "Alarms", -1)), xC = { class: "action-btns" }, BC = { class: "zoom" }, IC = /* @__PURE__ */ gw(" Zoom "), DC = { class: "times" }, OC = {
  key: 0,
  class: "timeline-container"
}, QC = { class: "alarm-id" }, zC = {
  key: 0,
  class: "panel"
}, Xn = window.Vue.ref, GC = window.Vue.watch, _C = /* @__PURE__ */ kC({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(t) {
    var O, b;
    const o = t, r = ir(), s = Xn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Xn(a[0]);
    let d = Xn(o.width), h = Xn(o.width);
    const w = new Date().getTime(), U = () => {
      var z, Q;
      if (!o.situation.events) {
        const P = (Q = (z = o.situation) == null ? void 0 : z.alarms) == null ? void 0 : Q.map((me) => me.id);
        r.getEvents(o.situation.id, P);
      }
    };
    U();
    const V = () => d.value / (Number(w) - Number(N.value)), R = Xn(o.situation.alarms), N = Xn(
      ((b = ge.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : b.firstEventTime) || new Date().getTime()
    ), A = Xn(V());
    GC(o, () => {
      var z, Q;
      N.value = ((Q = ge.exports.minBy((z = o.situation) == null ? void 0 : z.alarms, "firstEventTime")) == null ? void 0 : Q.firstEventTime) || new Date().getTime(), U(), d.value = h.value, A.value = V(), R.value = o.situation.alarms, u.value = a[0];
    });
    const S = (z) => {
      if ((z == null ? void 0 : z.id) === 1 && (R.value = o.situation.alarms), (z == null ? void 0 : z.id) === 2) {
        const Q = ge.exports.groupBy(R.value, "severity"), P = [
          ...Q.CRITICAL || [],
          ...Q.MAJOR || [],
          ...Q.MINOR || [],
          ...Q.WARNING || [],
          ...Q.NORMAL || [],
          ...Q.CLEARED || [],
          ...Q.INDETERMINATE || []
        ];
        R.value = P.filter((me) => me);
      }
      if ((z == null ? void 0 : z.id) === 3) {
        const Q = ge.exports.reverse(
          ge.exports.sortBy(
            o.situation.alarms,
            (P) => Number(P.lastEventTime) - Number(P.firstEventTime)
          )
        );
        R.value = Q;
      }
    }, x = () => {
      d.value += 100, A.value = V();
    }, B = () => {
      d.value -= 100, A.value = V();
    }, F = () => {
      d.value = h.value, A.value = V();
    }, W = (z) => {
      s.value = z;
    }, E = () => {
      s.value = 0;
    };
    return (z, Q) => {
      var P, me;
      return an(), jn(zp, null, [
        ht("div", FC, [
          ht("div", {
            class: MC(["severity-line", [`${(me = (P = o.situation) == null ? void 0 : P.severity) == null ? void 0 : me.toLowerCase()}-bg dark`]])
          }, null, 2),
          ht("div", null, [
            ht("div", AC, "Situation " + Fr(o.situation.id), 1),
            ht("div", null, " Duration: " + Fr(Ee(R2)(Ee(w), new Date(N.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (an(), jn("div", WC, [
          CC,
          ht("div", xC, [
            Ar(Ee($A), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                Q[0] || (Q[0] = (de) => u.value = de),
                S
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            ht("div", BC, [
              IC,
              ht("div", null, [
                Ar(Ee(ne), {
                  icon: Ee(sW),
                  class: "zoom-icon",
                  onClick: x
                }, null, 8, ["icon"]),
                Ar(Ee(ne), {
                  icon: Ee(iC),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                Ar(Ee(ne), {
                  icon: Ee(XW),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          Ee(h) ? (an(), jn("div", {
            key: 0,
            class: "alarms",
            style: bC({
              width: Ee(h) + 30 + "px"
            })
          }, [
            ht("div", DC, [
              ht("div", null, Fr(Ee(dn)(N.value)), 1),
              ht("div", null, Fr(Ee(dn)(Ee(w))), 1)
            ]),
            t.situation.events ? (an(), jn("div", OC, [
              (an(!0), jn(zp, null, ZC(R.value, (de) => (an(), jn("div", {
                class: "timeline",
                key: de.id
              }, [
                ht("div", QC, [
                  gw(Fr(de.nodeLabel) + " - " + Fr(de.id) + " ", 1),
                  s.value === de.id ? (an(), Gp(Ee(ne), {
                    key: 0,
                    icon: Ee(Kc),
                    class: "zoom-icon expand",
                    onClick: E
                  }, null, 8, ["icon"])) : (an(), Gp(Ee(ne), {
                    key: 1,
                    icon: Ee(Tw),
                    class: "zoom-icon expand",
                    onClick: () => W(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Ar(DW, {
                  alarm: de,
                  proportion: A.value,
                  "min-start": N.value,
                  "max-end": Ee(w),
                  events: o.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "max-end", "events"]),
                s.value === de.id ? (an(), jn("div", zC, [
                  Ar(yC, {
                    events: o.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : fa("", !0)
              ]))), 128))
            ])) : fa("", !0)
          ], 4)) : fa("", !0)
        ])) : fa("", !0)
      ], 64);
    };
  }
});
const YC = /* @__PURE__ */ Ze(_C, [["__scopeId", "data-v-66e379b7"]]), PC = window.Vue.defineComponent, Uw = window.Vue.createTextVNode, Ln = window.Vue.unref, Wr = window.Vue.withCtx, Cr = window.Vue.createVNode, _p = window.Vue.openBlock, HC = window.Vue.createBlock, Yp = window.Vue.createCommentVNode, jC = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XC = {
  key: 0,
  class: "detail",
  id: "cont"
}, LC = /* @__PURE__ */ Uw("Details"), $C = /* @__PURE__ */ Uw("Metrics"), Pp = window.Vue.ref, qC = window.Vue.watch, KC = /* @__PURE__ */ PC({
  __name: "SituationDetail",
  props: {
    index: null,
    forceUpdate: { type: Boolean }
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = ir(), a = Pp(s.situations[r.index]);
    let u = Pp();
    const d = (h, w) => {
      o("situation-status-changed", h, w);
    };
    return qC(r, () => {
      a.value = s.situations[r.index];
    }), onMounted(() => {
      var w;
      const h = ((w = document.getElementById("cont")) == null ? void 0 : w.getBoundingClientRect().width) || 1200;
      u.value = h - 80;
    }), (h, w) => a.value ? (_p(), jC("div", XC, [
      Cr(Ln(Ok), null, {
        tabs: Wr(() => [
          Cr(Ln(Vf), null, {
            default: Wr(() => [
              LC
            ]),
            _: 1
          }),
          Cr(Ln(Vf), null, {
            default: Wr(() => [
              $C
            ]),
            _: 1
          })
        ]),
        default: Wr(() => [
          Cr(Ln(Tf), { class: "panel" }, {
            default: Wr(() => [
              Cr(vF, {
                "situation-info": a.value,
                onSituationStatusChanged: d
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          Cr(Ln(Tf), { class: "panel" }, {
            default: Wr(() => [
              Ln(u) ? (_p(), HC(YC, {
                key: 0,
                situation: a.value,
                width: Ln(u)
              }, null, 8, ["situation", "width"])) : Yp("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : Yp("", !0);
  }
});
const ex = /* @__PURE__ */ Ze(KC, [["__scopeId", "data-v-d4a657d7"]]), tx = window.Vue.openBlock, nx = window.Vue.createElementBlock, rx = window.Vue.createElementVNode;
var ox = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ix = {}, ax = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sx = /* @__PURE__ */ rx("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), lx = [
  sx
];
function cx(t, o) {
  return tx(), nx("svg", ax, lx);
}
var ux = /* @__PURE__ */ ox(ix, [["render", cx]]);
const dx = window.Vue.openBlock, hx = window.Vue.createElementBlock, Rw = window.Vue.createElementVNode;
var fx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const px = {}, mx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wx = /* @__PURE__ */ Rw("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), vx = /* @__PURE__ */ Rw("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), Vx = [
  wx,
  vx
];
function Tx(t, o) {
  return dx(), hx("svg", mx, Vx);
}
var gx = /* @__PURE__ */ fx(px, [["render", Tx]]);
const Ux = window.Vue.openBlock, Rx = window.Vue.createElementBlock, Nx = window.Vue.createElementVNode;
var yx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kx = {}, Mx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Zx = /* @__PURE__ */ Nx("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), bx = [
  Zx
];
function Jx(t, o) {
  return Ux(), Rx("svg", Mx, bx);
}
var Ex = /* @__PURE__ */ yx(kx, [["render", Jx]]);
const Sx = window.Vue.defineComponent, Nn = window.Vue.unref, pa = window.Vue.normalizeClass, ma = window.Vue.createVNode, Fx = window.Vue.openBlock, Ax = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Wx = { class: "paginator" }, Cx = /* @__PURE__ */ Sx({
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
    return (a, u) => (Fx(), Ax("div", Wx, [
      ma(Nn(ne), {
        icon: Nn(ux),
        "aria-hidden": "true",
        class: pa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (d) => s(0))
      }, null, 8, ["icon", "class"]),
      ma(Nn(ne), {
        icon: Nn(Ex),
        "aria-hidden": "true",
        class: pa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (d) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ma(Nn(ne), {
        icon: Nn(Tw),
        "aria-hidden": "true",
        class: pa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (d) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ma(Nn(ne), {
        icon: Nn(gx),
        "aria-hidden": "true",
        class: pa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (d) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const xx = /* @__PURE__ */ Ze(Cx, [["__scopeId", "data-v-40758818"]]);
const Bx = window.Vue.openBlock, Ix = window.Vue.createElementBlock, Dx = window.Vue.createElementVNode;
var Ox = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Qx = {}, zx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Gx = /* @__PURE__ */ Dx("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), _x = [
  Gx
];
function Yx(t, o) {
  return Bx(), Ix("svg", zx, _x);
}
var Px = /* @__PURE__ */ Ox(Qx, [["render", Yx]]);
const Hx = window.Vue.openBlock, jx = window.Vue.createElementBlock, nu = window.Vue.createElementVNode;
var Xx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Lx = {}, $x = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qx = /* @__PURE__ */ nu("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), Kx = /* @__PURE__ */ nu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), eB = /* @__PURE__ */ nu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), tB = [
  qx,
  Kx,
  eB
];
function nB(t, o) {
  return Hx(), jx("svg", $x, tB);
}
var rB = /* @__PURE__ */ Xx(Lx, [["render", nB]]), oB = Object.defineProperty, iB = Object.defineProperties, aB = Object.getOwnPropertyDescriptors, Hp = Object.getOwnPropertySymbols, sB = Object.prototype.hasOwnProperty, lB = Object.prototype.propertyIsEnumerable, jp = (t, o, r) => o in t ? oB(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, mt = (t, o) => {
  for (var r in o || (o = {}))
    sB.call(o, r) && jp(t, r, o[r]);
  if (Hp)
    for (var r of Hp(o))
      lB.call(o, r) && jp(t, r, o[r]);
  return t;
}, cB = (t, o) => iB(t, aB(o));
const Kr = window.Vue.defineComponent, oe = window.Vue.openBlock, Se = window.Vue.createElementBlock, tt = window.Vue.createElementVNode, Bt = window.Vue.toDisplayString, kt = window.Vue.createCommentVNode, Me = window.Vue.resolveComponent, yt = window.Vue.createBlock, _e = window.Vue.withCtx, Gr = window.Vue.Fragment, jo = window.Vue.renderList, nt = window.Vue.createVNode, ru = window.Vue.withModifiers, tr = window.Vue.normalizeClass, Sc = window.Vue.renderSlot, Nw = window.Vue.createTextVNode, uB = window.Vue.pushScopeId, dB = window.Vue.popScopeId, yw = window.Vue.reactive, kw = window.Vue.nextTick, sc = window.Vue.markRaw, lc = window.Vue.toRef, Xp = window.Vue.computed, hB = window.Vue.toRefs, xr = window.Vue.ref, cc = window.Vue.mergeProps, Lp = window.Vue.toHandlers, wa = window.Vue.withDirectives, va = window.Vue.vShow;
var ts = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, ou = {
  query: {
    type: String
  }
}, ar = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fB = Kr({
  mixins: [],
  props: mt(mt({
    text: {
      type: String,
      required: !0
    }
  }, ts), ou),
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
}), pB = {
  key: 0,
  class: "highlight"
}, mB = { key: 1 };
function wB(t, o, r, s, a, u) {
  return oe(), Se("span", null, [
    tt("span", null, Bt(t.beginning), 1),
    t.highlighted ? (oe(), Se("span", pB, Bt(t.highlighted), 1)) : kt("", !0),
    t.end ? (oe(), Se("span", mB, Bt(t.end), 1)) : kt("", !0)
  ]);
}
var Mw = /* @__PURE__ */ ar(fB, [["render", wB], ["__scopeId", "data-v-8abe2492"]]);
const vB = Kr({
  emits: ["select", "deselect"],
  props: mt(mt({
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
  }, ts), ou),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        ti(o, r.$el);
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
    FeatherList: tu,
    FeatherListItem: ci,
    Highlighter: Mw
  }
}), VB = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function TB(t, o, r, s, a, u) {
  const d = Me("Highlighter"), h = Me("FeatherListItem"), w = Me("FeatherList");
  return oe(), yt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: _e(() => [
      (oe(!0), Se(Gr, null, jo(t.items, (U, V) => (oe(), Se(Gr, {
        key: U[t.textProp]
      }, [
        nt(h, {
          "as-li": "",
          id: t.getId(V),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(U),
          highlighted: t.isActive(V),
          selected: t.isSelected(U),
          onClick: ru((R) => t.select(U), ["stop"])
        }, {
          default: _e(() => [
            nt(d, {
              highlight: t.highlight,
              query: t.query,
              text: U[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            U._new ? (oe(), Se("span", VB, Bt(t.newLabel), 1)) : kt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && U._new ? (oe(), Se("li", {
          role: "presentation",
          key: U[t.textProp] + "hr",
          class: "hr"
        })) : kt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var gB = /* @__PURE__ */ ar(vB, [["render", TB], ["__scopeId", "data-v-f623434a"]]);
const UB = Kr({
  emits: ["select"],
  props: mt(mt({
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
  }, ts), ou),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        ti(o, r);
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
    Highlighter: Mw
  }
}), RB = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, NB = ["aria-multiselectable"], yB = { role: "row" }, kB = ["aria-selected", "onClick"], MB = ["id", "aria-selected"], ZB = { key: 1 };
function bB(t, o, r, s, a, u) {
  const d = Me("Highlighter");
  return oe(), Se("div", RB, [
    tt("table", {
      class: tr(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      tt("thead", null, [
        tt("tr", yB, [
          (oe(!0), Se(Gr, null, jo(t.config, (h) => (oe(), Se("th", {
            key: h.title
          }, Bt(h.title), 1))), 128))
        ])
      ]),
      tt("tbody", null, [
        (oe(!0), Se(Gr, null, jo(t.items, (h, w) => (oe(), Se("tr", {
          role: "row",
          key: h[t.textProp],
          "aria-selected": t.isSelected(h),
          class: tr({ focus: t.isActive(w), selected: t.isSelected(h) }),
          onClick: ru((U) => t.select(h), ["stop"])
        }, [
          (oe(!0), Se(Gr, null, jo(t.config, (U, V) => (oe(), Se("td", {
            key: h[t.textProp] + U.prop,
            id: t.getId(w, V),
            "aria-selected": t.isSelected(h),
            class: tr({ "focus-cell": t.isActiveCell(w, V) })
          }, [
            U.prop === t.textProp ? (oe(), yt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: h[U.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Se("p", ZB, Bt(h[U.prop]), 1))
          ], 10, MB))), 128))
        ], 10, kB))), 128))
      ])
    ], 10, NB)
  ], 512);
}
var JB = /* @__PURE__ */ ar(UB, [["render", bB], ["__scopeId", "data-v-58c88fd1"]]);
const EB = Kr({
  components: {
    FeatherList: tu,
    FeatherListItem: ci
  }
});
function SB(t, o, r, s, a, u) {
  const d = Me("FeatherListItem"), h = Me("FeatherList");
  return oe(), yt(h, { class: "result-list" }, {
    default: _e(() => [
      nt(d, { "as-li": "" }, {
        default: _e(() => [
          Sc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var FB = /* @__PURE__ */ ar(EB, [["render", SB], ["__scopeId", "data-v-06b752c6"]]);
const AB = Kr({
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
    FeatherIcon: ne,
    Cancel: ri,
    BaseChip: qa,
    BaseChipLabel: Ka,
    BaseChipPreIcon: es
  }
});
function WB(t, o, r, s, a, u) {
  const d = Me("FeatherIcon"), h = Me("BaseChipPreIcon"), w = Me("BaseChipLabel"), U = Me("Cancel"), V = Me("BaseChip");
  return oe(), yt(V, {
    class: tr(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: _e(() => [
      t.showPreIcon ? (oe(), yt(h, { key: 0 }, {
        default: _e(() => {
          var R, N;
          return [
            nt(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (N = t.pre) == null ? void 0 : N.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : kt("", !0),
      nt(w, null, {
        default: _e(() => [
          Nw(Bt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? kt("", !0) : (oe(), Se("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = ru((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        nt(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: _e(() => [
            nt(U)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var CB = /* @__PURE__ */ ar(AB, [["render", WB], ["__scopeId", "data-v-e0fc6ac0"]]);
const xB = {}, BB = (t) => (uB("data-v-aa720e06"), t = t(), dB(), t), IB = { class: "spinner-container" }, DB = /* @__PURE__ */ BB(() => /* @__PURE__ */ tt("svg", {
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
], -1)), OB = [
  DB
];
function QB(t, o) {
  return oe(), Se("div", IB, OB);
}
var zB = /* @__PURE__ */ ar(xB, [["render", QB], ["__scopeId", "data-v-aa720e06"]]), ns = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(ns || {});
const Zw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, GB = mt(mt(mt({
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
    validator: (t) => !!ns[t]
  },
  labels: {
    type: Object,
    default: () => Zw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, ts), Xa), Qm), _B = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, YB = (t, o, r, s) => {
  if (r.toLowerCase() === ns.multi) {
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
        if (u.value && u.value.filter((U) => U[t.textProp.value] === h[t.textProp.value]).length)
          return;
        const w = u.value ? [...u.value, h] : [h];
        s("update:modelValue", w), d(w);
      },
      removeItem(h) {
        const w = u.value.findIndex((U) => {
          if (h[t.textProp.value] === U[t.textProp.value])
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
}, PB = () => {
  const t = yw({
    row: -1
  }), o = (u) => {
    kw(() => {
      t.row = u;
    });
  }, r = (u, d) => {
    if (u.keyCode === q.DOWN) {
      if (u.preventDefault(), t.row === -1)
        s(), o(0);
      else if (t.row + 1 <= d.length - 1) {
        const h = t.row;
        s(), o(h + 1);
      }
      return !0;
    }
    if (u.keyCode === q.UP) {
      if (u.preventDefault(), t.row === 0)
        s();
      else if (t.row > 0) {
        const h = t.row;
        s(), o(h - 1);
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
}, HB = (t) => {
  const o = yw({
    row: -1,
    col: -1
  }), r = (d, h) => {
    kw(() => {
      o.col = h, o.row = d;
    });
  }, s = (d, h) => {
    if (d.keyCode === q.DOWN) {
      if (d.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= h.length - 1) {
        const w = o.row, U = o.col;
        a(), r(w + 1, U);
      }
      return !0;
    }
    if (d.keyCode === q.UP) {
      if (d.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, U = o.col;
        a(), r(w - 1, U);
      }
      return !0;
    }
    if (d.keyCode === q.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, U = o.row;
        a(), r(U, w + 1);
      } else if (o.col <= t.length - 1 && o.row + 1 <= h.length - 1) {
        const w = o.row;
        a(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === q.LEFT && o.row !== -1) {
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
    if (d.keyCode === q.END && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return a(), r(d.ctrlKey ? h.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === q.HOME && o.row !== -1) {
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
}, jB = Kr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: _B,
  props: GB,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ns.multi;
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
      return sc(Px);
    },
    minCharIcon() {
      return sc(rB);
    },
    dropdownIcon() {
      return sc(Kc);
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
        ti(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ti(this.inputRef, this.scrollContainer);
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
      r !== void 0 && (Hr(this.typingTimeout), this.typingTimeout = Pr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === q.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === q.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
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
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        t.keyCode === q.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === q.RIGHT && (t.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === q.DELETE || t.keyCode === q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = xm(lc(t, "labels"), Zw);
    La(t), zm(t);
    let s;
    t.gridConfig ? s = HB(t.gridConfig) : s = PB();
    const a = lc(t, "id"), u = Xp(() => a.value ? a.value : le("feather-autocomplete-input")), { validate: d } = Ha(u, lc(t, "modelValue"), t.label, t.schema), { selectionLimit: h, modelValue: w, textProp: U, allowNew: V, type: R, minChar: N } = hB(t), A = xr(!1), S = xr(!1), x = xr(!1), B = xr(""), F = xr([]), W = xr(), E = Xp(() => W.value), O = () => {
      A.value && !S.value && (B.value && B.value.length >= N.value && o.emit("search", B.value), N.value <= 0 && o.emit("search", B.value || ""), F.value = [], s.reset());
    }, b = YB({
      selectionLimit: h,
      selectionLimitReached: S,
      modelValue: w,
      textProp: U,
      allowNew: V,
      forceCloseResults: x,
      query: B,
      internalResults: F,
      input: E,
      emitSearch: O
    }, s, R.value, o.emit);
    return cB(mt(mt({}, r), ja(o.attrs)), {
      query: B,
      internalResults: F,
      selectionLimitReached: S,
      forceCloseResults: x,
      hasFocus: A,
      strategy: b,
      emitSearch: O,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: W,
      incomingId: a,
      inputRef: E,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Om,
    InputSubText: Pa,
    AutocompleteResults: gB,
    AutocompleteResultsGrid: JB,
    Chip: CB,
    MenuMessage: FB,
    FeatherIcon: ne,
    FeatherMenu: cw,
    Spinner: zB
  }
}), XB = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, LB = ["id"], $B = { "data-ref-id": "feather-autocomplete-no-results" }, qB = { "data-ref-id": "feather-autocomplete-selection-limit" }, KB = { "data-ref-id": "feather-autocomplete-min-char" };
function e3(t, o, r, s, a, u) {
  const d = Me("FeatherIcon"), h = Me("Chip"), w = Me("InputWrapper"), U = Me("AutocompleteResults"), V = Me("AutocompleteResultsGrid"), R = Me("MenuMessage"), N = Me("Spinner"), A = Me("FeatherMenu"), S = Me("InputSubText");
  return oe(), Se("div", cc(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    nt(A, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: tr(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: _e(({ attrs: x, on: B }) => [
        nt(w, cc(mt(mt({}, x), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, Lp(B), { ref: "scroll" }), {
          pre: _e(() => [
            Sc(t.$slots, "pre", {}, () => [
              nt(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: _e(() => [
            nt(d, {
              icon: t.dropdownIcon,
              class: tr(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: _e(() => [
            tt("div", {
              class: tr(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              tt("div", XB, null, 512),
              tt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Bt(t.selectedDescribedByText), 9, LB),
              (oe(!0), Se(Gr, null, jo(t.modelValueList, (F, W) => wa((oe(), yt(h, {
                key: F[t.textProp],
                role: "button",
                id: W === t.activeChipIndex ? t.activeChipId : null,
                focused: W === t.activeChipIndex,
                disabled: t.disabled,
                text: F[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(F),
                onDelete: (E) => t.removeFromValue(F)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [va, !t.singleSelect]
              ])), 128)),
              tt("textarea", cc(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Lp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: _e(() => [
        t.gridConfig ? kt("", !0) : wa((oe(), yt(U, {
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
        t.gridConfig ? wa((oe(), yt(V, {
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
        ]) : kt("", !0),
        t.showNoResults ? (oe(), yt(R, { key: 2 }, {
          default: _e(() => [
            tt("span", $B, Bt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : kt("", !0),
        t.showSelectionLimit ? (oe(), yt(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: _e(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", qB, Bt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : kt("", !0),
        t.minChar ? wa((oe(), yt(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: _e(() => [
            nt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            tt("span", KB, [
              Sc(t.$slots, "min-char", {}, () => [
                Nw(Bt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [va, t.showMinCharWarning]
        ]) : kt("", !0),
        t.showLoading ? (oe(), yt(N, { key: 5 })) : kt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    nt(S, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var t3 = /* @__PURE__ */ ar(jB, [["render", e3], ["__scopeId", "data-v-43a7e951"]]);
const bw = window.Vue.defineComponent, uc = window.Vue.ref, n3 = window.Vue.toRef, dc = window.Vue.inject, $p = window.Vue.watch, r3 = window.Vue.nextTick, qp = window.Vue.openBlock, Kp = window.Vue.createElementBlock, hc = window.Vue.createElementVNode, o3 = window.Vue.normalizeClass, em = window.Vue.renderSlot, tm = window.Vue.createCommentVNode, fc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var i3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const a3 = {
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
}, s3 = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, l3 = bw({
  emits: s3,
  props: a3,
  setup(t, o) {
    const r = uc(), s = uc(!1), a = uc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), d = n3(t, "modelValue"), h = dc("queueSnackbar", !1), w = dc("unqueueSnackbar", !1), U = dc("nextSnackbar", () => {
    }), V = (x, B) => {
      let F, W, E = B;
      const O = () => {
        !F || (Hr(F), F = 0, E -= Date.now() - W);
      }, b = () => {
        F || (W = Date.now(), F = Pr(x, E));
      };
      return b(), { pause: O, resume: b };
    }, R = () => {
      s.value = !1, o.emit("closed"), U && U();
    }, N = (x) => {
      x.keyCode === q.ESCAPE && (a.value = !1);
    }, A = () => {
      r.value.pause();
    }, S = () => {
      a.value && r.value.resume();
    };
    return $p(d, (x) => {
      x ? r3(() => {
        h === !1 ? a.value = x : h(u, a);
      }) : w === !1 ? a.value = x : w(u);
    }, { immediate: !0 }), $p(a, (x) => {
      x ? (s.value = !0, r.value = V(() => {
        a.value = !1;
      }, t.timeout)) : (o.emit("update:modelValue", !1), A());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: d,
      closed: R,
      keyPressed: N,
      stopTimer: A,
      resumeTimer: S
    };
  }
}), c3 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, u3 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, d3 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, h3 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function f3(t, o, r, s, a, u) {
  return t.modelValue || t.contentShow ? (qp(), Kp("div", c3, [
    hc("div", {
      class: o3(["feather-snackbar", {
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
      hc("div", u3, [
        t.contentShow ? (qp(), Kp("div", d3, [
          em(t.$slots, "default", {}, void 0, !0)
        ])) : tm("", !0)
      ]),
      hc("div", h3, [
        em(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : tm("", !0);
}
var p3 = /* @__PURE__ */ i3(l3, [["render", f3], ["__scopeId", "data-v-5cf64a62"]]);
const m3 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
bw({
  props: m3,
  setup() {
    let t, o = [];
    const r = () => {
      t && (t.val.value = !0);
    }, s = (d, h) => {
      const w = { id: d, val: h };
      t ? o.push(w) : (t = w, r());
    }, a = (d) => {
      (t == null ? void 0 : t.id) === d ? t.val.value = !1 : o = o.filter((h) => h.id != d);
    }, u = () => {
      o.length ? (t = o.shift(), r()) : t = void 0;
    };
    return fc("queueSnackbar", s), fc("unqueueSnackbar", a), fc("nextSnackbar", u), {
      curr: t,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const w3 = window.Vue.defineComponent, Qo = window.Vue.createElementVNode, pc = window.Vue.unref, Va = window.Vue.createVNode, Io = window.Vue.toDisplayString, v3 = window.Vue.renderList, nm = window.Vue.Fragment, $n = window.Vue.openBlock, Br = window.Vue.createElementBlock, Ta = window.Vue.createCommentVNode, V3 = window.Vue.createBlock, T3 = window.Vue.createTextVNode, g3 = window.Vue.withCtx, U3 = window.Vue.pushScopeId, R3 = window.Vue.popScopeId, N3 = (t) => (U3("data-v-3e4a9e95"), t = t(), R3(), t), y3 = { class: "list-main" }, k3 = /* @__PURE__ */ N3(() => /* @__PURE__ */ Qo("h2", null, "Situation List", -1)), M3 = { class: "situation-filters" }, Z3 = {
  key: 0,
  class: "container"
}, b3 = { class: "situation-list" }, J3 = { key: 0 }, E3 = {
  key: 1,
  class: "container"
}, S3 = window.Vue.reactive, Ir = window.Vue.ref, F3 = /* @__PURE__ */ w3({
  __name: "SituationList",
  setup(t) {
    const o = ir(), r = ow();
    o.getSituations(), o.getNodes();
    const s = 10, a = S3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), u = Ir(!1), d = Ir(0), h = Ir(1), w = Ir(0), U = Ir(!1), V = Ir(!1), R = (W) => {
      d.value = 0, a.situations = W[0], h.value = W.length;
    }, N = (W) => {
      window.scrollTo(0, 0), a.situationSelected = W, a.selectedSituationIndex = o.situations.findIndex(
        (E) => E.id === W
      );
    }, A = (W, E) => {
      const O = a.situations;
      O.forEach((b) => {
        b.id === E && (b.status = W);
      }), a.situations = ge.exports.cloneDeep(O);
    }, S = () => {
      a.nodes = o.nodes, a.results = o.nodes;
    };
    r.$subscribe((W, E) => {
      V.value = E.showError;
    }), o.$subscribe((W, E) => {
      var O;
      if (E.selectedSituation != -1) {
        const b = a.selectedSituationIndex;
        a.selectedSituationIndex = o.situations.findIndex(
          (z) => z.id === E.selectedSituation
        ), o.situations[a.selectedSituationIndex] && (a.situationSelected = o.situations[a.selectedSituationIndex].id), b === a.selectedSituationIndex && (U.value = !U.value);
      } else
        a.situationSelected = (O = E.situations[0]) == null ? void 0 : O.id;
      S(), w.value = o.situations.length, a.allSituations = ge.exports.chunk(o.situations, s), R(a.allSituations);
    });
    const x = (W) => {
      if (!W)
        return a.nodeSelectedValue = void 0, [];
      u.value = !0, a.results = a.nodes.filter((E) => E.label.toLowerCase().indexOf(W) > -1).map((E) => ({
        _text: E.label,
        id: E.id
      })), u.value = !1;
    }, B = () => {
      if (a.nodeSelectedValue && a.nodeSelectedValue._text) {
        const W = o.situations.map((E) => {
          if (E.alarms.filter(
            (b) => {
              var z;
              return b.nodeLabel === ((z = a.nodeSelectedValue) == null ? void 0 : z._text);
            }
          ).length > 0)
            return E;
        }).filter((E) => E);
        W && (w.value = W.length, a.situations = W, W[0] && W[0].id && N(W[0].id));
      } else
        a.nodeSelectedValue = void 0, w.value = o.situations.length, R(a.allSituations), a.allSituations[0] && a.allSituations[0][0] && N(a.allSituations[0][0].id);
    }, F = (W) => {
      d.value = W, a.situations = a.allSituations[d.value];
    };
    return (W, E) => ($n(), Br(nm, null, [
      Qo("div", y3, [
        k3,
        Qo("div", M3, [
          Va(pc(t3), {
            class: "map-search",
            label: "Find by node",
            loading: u.value,
            modelValue: a.nodeSelectedValue,
            "onUpdate:modelValue": [
              E[0] || (E[0] = (O) => a.nodeSelectedValue = O),
              B
            ],
            results: a.results,
            type: "single",
            onSearch: x
          }, null, 8, ["loading", "modelValue", "results"])
        ]),
        a.situations && a.situations.length > 0 ? ($n(), Br("div", Z3, [
          Qo("div", b3, [
            Qo("div", null, " Result: " + Io(a.situations.length) + " of " + Io(w.value), 1),
            ($n(!0), Br(nm, null, v3(a.situations, (O) => ($n(), Br("div", {
              key: O.id
            }, [
              Va(Hy, {
                "situation-info": O,
                onSituationSelected: N,
                selected: a.situationSelected == O.id
              }, null, 8, ["situation-info", "selected"])
            ]))), 128)),
            a.nodeSelectedValue ? Ta("", !0) : ($n(), Br("div", J3, " Page: " + Io(d.value + 1) + " of " + Io(h.value), 1)),
            a.nodeSelectedValue ? Ta("", !0) : ($n(), V3(xx, {
              key: 1,
              onGoToPage: F,
              currentPage: d.value,
              totalPages: h.value
            }, null, 8, ["currentPage", "totalPages"]))
          ]),
          Va(ex, {
            index: a.selectedSituationIndex,
            forceUpdate: U.value,
            onSituationStatusChanged: A
          }, null, 8, ["index", "forceUpdate"])
        ])) : Ta("", !0),
        !a.situations || a.situations.length == 0 ? ($n(), Br("div", E3, " No results found ")) : Ta("", !0)
      ]),
      Va(pc(p3), {
        modelValue: V.value,
        "onUpdate:modelValue": E[1] || (E[1] = (O) => V.value = O),
        center: "",
        error: ""
      }, {
        default: g3(() => [
          T3(Io(pc(r).errorMessage || "Error has occurred :("), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const A3 = /* @__PURE__ */ Ze(F3, [["__scopeId", "data-v-3e4a9e95"]]);
var W3 = Object.defineProperty, C3 = Object.defineProperties, x3 = Object.getOwnPropertyDescriptors, rm = Object.getOwnPropertySymbols, B3 = Object.prototype.hasOwnProperty, I3 = Object.prototype.propertyIsEnumerable, om = (t, o, r) => o in t ? W3(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, ba = (t, o) => {
  for (var r in o || (o = {}))
    B3.call(o, r) && om(t, r, o[r]);
  if (rm)
    for (var r of rm(o))
      I3.call(o, r) && om(t, r, o[r]);
  return t;
}, Jw = (t, o) => C3(t, x3(o));
const Ew = window.Vue.defineComponent, D3 = window.Vue.ref, Xo = window.Vue.computed, O3 = window.Vue.reactive, im = window.Vue.watch, mc = window.Vue.inject, Sw = window.Vue.resolveComponent, Fc = window.Vue.openBlock, Fw = window.Vue.createElementBlock, Jn = window.Vue.createElementVNode, Q3 = window.Vue.createBlock, z3 = window.Vue.createCommentVNode, Aw = window.Vue.renderSlot, G3 = window.Vue.pushScopeId, _3 = window.Vue.popScopeId, wc = window.Vue.toRef, am = window.Vue.mergeProps, Y3 = window.Vue.toDisplayString, P3 = window.Vue.createVNode;
var Ww = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const H3 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, j3 = Ew({
  props: H3,
  setup(t) {
    const o = D3(), r = () => {
      o.value.focus();
    }, s = Xo(() => le("feather-radio-button")), a = O3({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: s.value
    }), u = Xo(() => le("radio-label-id")), d = Xo(() => a.first || a.checked ? 0 : -1);
    im(() => t.disabled, (R) => {
      a.disabled = R;
    }, { immediate: !0 }), im(() => t.value, (R) => {
      a.value = R;
    }, { immediate: !0 });
    const h = mc("register", (R) => {
    }), w = mc("blur", (R) => {
    }), U = mc("select", (R) => {
    });
    return h(a), {
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
    FeatherRipple: nr
  }
}), X3 = (t) => (G3("data-v-24790cf0"), t = t(), _3(), t), L3 = { class: "layout-container" }, $3 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], q3 = { class: "radio hover focus" }, K3 = /* @__PURE__ */ X3(() => /* @__PURE__ */ Jn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Jn("svg", { class: "dot" }, [
    /* @__PURE__ */ Jn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), eI = ["id"];
function tI(t, o, r, s, a, u) {
  const d = Sw("feather-ripple");
  return Fc(), Fw("div", L3, [
    Jn("div", {
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
      Jn("div", q3, [
        K3,
        t.vm.disabled ? z3("", !0) : (Fc(), Q3(d, {
          key: 0,
          center: ""
        }))
      ]),
      Jn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Aw(t.$slots, "default", {}, void 0, !0)
      ], 8, eI)
    ], 40, $3)
  ]);
}
var Oa = /* @__PURE__ */ Ww(j3, [["render", tI], ["__scopeId", "data-v-24790cf0"]]);
const nI = Jw(ba({}, Xa), {
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
}), rI = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, oI = Ew({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: nI,
  emits: rI,
  setup(t, o) {
    La(t);
    const r = wc(t, "error"), s = wc(t, "modelValue"), a = Xo(() => le("feather-input-description")), u = Xo(() => {
      const d = Jw(ba({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return ba(ba({
      descriptionId: a,
      attrs: u
    }, Gm(s, o.emit, t.label, t.schema, wc(t, "error"))), ja(o.attrs));
  },
  components: {
    InputSubText: Pa
  }
}), iI = ["for"], aI = ["id"];
function sI(t, o, r, s, a, u) {
  const d = Sw("InputSubText");
  return Fc(), Fw("div", am(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Jn("label", {
      for: t.groupId,
      class: "group-label"
    }, Y3(t.label), 9, iI),
    Jn("div", am(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...h) => t.keydown && t.keydown(...h))
    }), [
      Aw(t.$slots, "default", {}, void 0, !0)
    ], 16, aI),
    P3(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Cw = /* @__PURE__ */ Ww(oI, [["render", sI], ["__scopeId", "data-v-6775aeb9"]]);
const lI = window.Vue.openBlock, cI = window.Vue.createElementBlock, uI = window.Vue.createStaticVNode;
var dI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hI = {}, fI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pI = /* @__PURE__ */ uI('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), mI = [
  pI
];
function wI(t, o) {
  return lI(), cI("svg", fI, mI);
}
var vI = /* @__PURE__ */ dI(hI, [["render", wI]]);
const VI = window.Vue.openBlock, TI = window.Vue.createElementBlock, gI = window.Vue.createStaticVNode;
var UI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RI = {}, NI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yI = /* @__PURE__ */ gI('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), kI = [
  yI
];
function MI(t, o) {
  return VI(), TI("svg", NI, kI);
}
var ZI = /* @__PURE__ */ UI(RI, [["render", MI]]);
const bI = window.Vue.openBlock, JI = window.Vue.createElementBlock, EI = window.Vue.createElementVNode;
var SI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FI = {}, AI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WI = /* @__PURE__ */ EI("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), CI = [
  WI
];
function xI(t, o) {
  return bI(), JI("svg", AI, CI);
}
var BI = /* @__PURE__ */ SI(FI, [["render", xI]]);
const II = window.Vue.openBlock, DI = window.Vue.createElementBlock, OI = window.Vue.createStaticVNode;
var QI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const zI = {}, GI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _I = /* @__PURE__ */ OI('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), YI = [
  _I
];
function PI(t, o) {
  return II(), DI("svg", GI, YI);
}
var HI = /* @__PURE__ */ QI(zI, [["render", PI]]);
const jI = window.Vue.openBlock, XI = window.Vue.createElementBlock, LI = window.Vue.createElementVNode;
var $I = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qI = {}, KI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eD = /* @__PURE__ */ LI("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), tD = [
  eD
];
function nD(t, o) {
  return jI(), XI("svg", KI, tD);
}
var rD = /* @__PURE__ */ $I(qI, [["render", nD]]);
const iu = () => window.VRouter || au, oD = window.Vue.defineComponent, ye = window.Vue.createElementVNode, ni = window.Vue.createTextVNode, Le = window.Vue.unref, sn = window.Vue.createVNode, ga = window.Vue.withCtx, sm = window.Vue.openBlock, lm = window.Vue.createElementBlock, iD = window.Vue.createCommentVNode, aD = window.Vue.pushScopeId, sD = window.Vue.popScopeId, It = (t) => (aD("data-v-b4b3bdcf"), t = t(), sD(), t), lD = { class: "container" }, cD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", { class: "title" }, "ALEC", -1)), uD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", { class: "description" }, [
  /* @__PURE__ */ ni(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ ye("br"),
  /* @__PURE__ */ ye("strong", null, "Our goal"),
  /* @__PURE__ */ ni(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), dD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("h3", null, "Key Benefits:", -1)), hD = { class: "list" }, fD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), pD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, "Assist in root cause analysis.", -1)), mD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), wD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, "Easy configuration.", -1)), vD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), VD = {
  key: 0,
  class: "optin"
}, TD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("h3", null, "Enable ALEC for more precise results:", -1)), gD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), UD = { class: "choices" }, RD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), ND = /* @__PURE__ */ ni("Yes"), yD = /* @__PURE__ */ ni("No"), kD = /* @__PURE__ */ ni(" Continue "), MD = window.Vue.ref, ZD = /* @__PURE__ */ oD({
  __name: "WelcomePage",
  setup(t) {
    const o = li(), r = iu(), s = MD(!0), a = () => {
      const u = Boolean(s.value);
      o.savePermission(u), r.push({ name: "configuration" });
    };
    return (u, d) => (sm(), lm("div", lD, [
      cD,
      uD,
      ye("div", null, [
        dD,
        ye("div", hD, [
          ye("div", null, [
            sn(Le(ne), {
              icon: Le(HI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fD
          ]),
          ye("div", null, [
            sn(Le(ne), {
              icon: Le(BI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            pD
          ]),
          ye("div", null, [
            sn(Le(ne), {
              icon: Le(rD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            mD
          ]),
          ye("div", null, [
            sn(Le(ne), {
              icon: Le(vI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wD
          ]),
          ye("div", null, [
            sn(Le(ne), {
              icon: Le(ZI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            vD
          ])
        ])
      ]),
      Le(o).isAdmin ? (sm(), lm("div", VD, [
        TD,
        gD,
        ye("div", UD, [
          RD,
          sn(Le(Cw), {
            horizontal: "",
            modelValue: s.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => s.value = h),
            label: ""
          }, {
            default: ga(() => [
              sn(Le(Oa), { value: !0 }, {
                default: ga(() => [
                  ND
                ]),
                _: 1
              }),
              sn(Le(Oa), { value: !1 }, {
                default: ga(() => [
                  yD
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : iD("", !0),
      sn(Le(bn), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: a
      }, {
        default: ga(() => [
          kD
        ]),
        _: 1
      })
    ]));
  }
});
const bD = /* @__PURE__ */ Ze(ZD, [["__scopeId", "data-v-b4b3bdcf"]]), JD = window.Vue.defineComponent, ED = window.Vue.createElementVNode, SD = window.Vue.createTextVNode, FD = window.Vue.unref, AD = window.Vue.withCtx, WD = window.Vue.createVNode, CD = window.Vue.Fragment, xD = window.Vue.openBlock, BD = window.Vue.createElementBlock, ID = window.Vue.pushScopeId, DD = window.Vue.popScopeId, OD = (t) => (ID("data-v-bcb7dcc6"), t = t(), DD(), t), QD = /* @__PURE__ */ OD(() => /* @__PURE__ */ ED("div", { class: "main" }, "Something bad is happening...", -1)), zD = /* @__PURE__ */ SD(" Reload "), GD = /* @__PURE__ */ JD({
  __name: "ErrorPage",
  setup(t) {
    const o = iu(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (xD(), BD(CD, null, [
      QD,
      WD(FD(bn), {
        primary: "",
        onClick: r
      }, {
        default: AD(() => [
          zD
        ]),
        _: 1
      })
    ], 64));
  }
});
const _D = /* @__PURE__ */ Ze(GD, [["__scopeId", "data-v-bcb7dcc6"]]), YD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", PD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", HD = window.Vue.defineComponent, We = window.Vue.createElementVNode, Ac = window.Vue.createTextVNode, yn = window.Vue.unref, Do = window.Vue.withCtx, Oo = window.Vue.createVNode, jD = window.Vue.openBlock, XD = window.Vue.createElementBlock, LD = window.Vue.pushScopeId, $D = window.Vue.popScopeId, sr = (t) => (LD("data-v-9a5b5f4e"), t = t(), $D(), t), qD = { class: "container" }, KD = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("h2", null, "Configuration", -1)), eO = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("p", null, [
  /* @__PURE__ */ Ac(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ We("br"),
  /* @__PURE__ */ Ac(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ We("strong", null, [
    /* @__PURE__ */ We("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), tO = { class: "radio-content" }, nO = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("strong", { class: "title" }, "Clustering", -1)), rO = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), oO = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("img", {
  class: "img",
  src: YD
}, null, -1)), iO = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("div", { class: "hellinger" }, [
  /* @__PURE__ */ We("strong", null, "With hellinger distance"),
  /* @__PURE__ */ We("br"),
  /* @__PURE__ */ We("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), aO = /* @__PURE__ */ sr(() => /* @__PURE__ */ We("div", { class: "radio-content" }, [
  /* @__PURE__ */ We("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ We("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ We("img", {
    class: "img img2",
    src: PD
  })
], -1)), sO = /* @__PURE__ */ Ac(" Continue "), cm = window.Vue.ref, lO = /* @__PURE__ */ HD({
  __name: "ConfigurationPage",
  setup(t) {
    const o = li(), r = iu(), s = cm(!1), a = cm(ft.ENGINE_DBSCAN), u = () => {
      Sm(o.allowSave), iy(a.value, s.value), r.push({ name: "situations" });
    };
    return (d, h) => (jD(), XD("div", qD, [
      KD,
      eO,
      We("div", null, [
        Oo(yn(Cw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: a.value,
          "onUpdate:modelValue": h[1] || (h[1] = (w) => a.value = w)
        }, {
          default: Do(() => [
            Oo(yn(Oa), {
              class: "radio",
              value: yn(ft).ENGINE_DBSCAN
            }, {
              default: Do(() => [
                We("div", tO, [
                  nO,
                  rO,
                  oO,
                  Oo(yn($c), {
                    modelValue: s.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (w) => s.value = w),
                    disabled: a.value !== yn(ft).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Do(() => [
                      iO
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Oo(yn(Oa), {
              class: "radio",
              value: yn(ft).ENGINE_DEEP_LEARNING
            }, {
              default: Do(() => [
                aO
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Oo(yn(bn), {
        primary: "",
        class: "btn",
        onClick: h[2] || (h[2] = () => u())
      }, {
        default: Do(() => [
          sO
        ]),
        _: 1
      })
    ]));
  }
});
const cO = /* @__PURE__ */ Ze(lO, [["__scopeId", "data-v-9a5b5f4e"]]), uO = window.VueRouter.createRouter, dO = window.VueRouter.createWebHistory, vc = async () => {
  const t = window.VRouter || au, o = li();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, xw = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || au, r = li();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => vc(),
    component: bD
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => vc(),
    component: cO
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => vc(),
    component: A3
  },
  {
    path: "/error",
    name: "error",
    component: _D
  }
], um = window.VRouter;
if (um)
  for (const t of xw) {
    const { path: o, name: r, component: s, beforeEnter: a } = t;
    um.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: s,
      beforeEnter: a
    });
  }
const au = uO({
  history: dO(),
  routes: xw
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = xR;
