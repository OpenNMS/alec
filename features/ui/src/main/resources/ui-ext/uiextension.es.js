const Ze = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, RR = {}, NR = window.Vue.resolveComponent, yR = window.Vue.createVNode, kR = window.Vue.openBlock, MR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ZR = { class: "main" };
function bR(t, o) {
  const r = NR("router-view");
  return kR(), MR("div", ZR, [
    yR(r)
  ]);
}
const JR = /* @__PURE__ */ Ze(RR, [["render", bR], ["__scopeId", "data-v-5d32d140"]]), ER = window.Vue.defineComponent, SR = window.Vue.openBlock, FR = window.Vue.createBlock, AR = /* @__PURE__ */ ER({
  __name: "App",
  setup(t) {
    return (o, r) => (SR(), FR(JR));
  }
});
var No = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function WR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lm = { exports: {} }, Wc = { exports: {} }, cm = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, CR = cm, Cc = Object.prototype.toString, xc = function(t) {
  return function(o) {
    var r = Cc.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function nr(t) {
  return t = t.toLowerCase(), function(r) {
    return xc(r) === t;
  };
}
function Bc(t) {
  return Array.isArray(t);
}
function ba(t) {
  return typeof t > "u";
}
function xR(t) {
  return t !== null && !ba(t) && t.constructor !== null && !ba(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var um = nr("ArrayBuffer");
function BR(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && um(t.buffer), o;
}
function IR(t) {
  return typeof t == "string";
}
function DR(t) {
  return typeof t == "number";
}
function dm(t) {
  return t !== null && typeof t == "object";
}
function ga(t) {
  if (xc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var OR = nr("Date"), QR = nr("File"), zR = nr("Blob"), GR = nr("FileList");
function Ic(t) {
  return Cc.call(t) === "[object Function]";
}
function _R(t) {
  return dm(t) && Ic(t.pipe);
}
function YR(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Cc.call(t) === o || Ic(t.toString) && t.toString() === o);
}
var HR = nr("URLSearchParams");
function PR(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function jR() {
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
    ga(t[u]) && ga(a) ? t[u] = Vc(t[u], a) : ga(a) ? t[u] = Vc({}, a) : Bc(a) ? t[u] = a.slice() : t[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Dc(arguments[r], o);
  return t;
}
function XR(t, o, r) {
  return Dc(o, function(a, u) {
    r && typeof a == "function" ? t[u] = CR(a, r) : t[u] = a;
  }), t;
}
function LR(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function $R(t, o, r, s) {
  t.prototype = Object.create(o.prototype, s), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function qR(t, o, r) {
  var s, a, u, d = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(t), a = s.length; a-- > 0; )
      u = s[a], d[u] || (o[u] = t[u], d[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function KR(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var s = t.indexOf(o, r);
  return s !== -1 && s === r;
}
function eN(t) {
  if (!t)
    return null;
  var o = t.length;
  if (ba(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var tN = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Oe = {
  isArray: Bc,
  isArrayBuffer: um,
  isBuffer: xR,
  isFormData: YR,
  isArrayBufferView: BR,
  isString: IR,
  isNumber: DR,
  isObject: dm,
  isPlainObject: ga,
  isUndefined: ba,
  isDate: OR,
  isFile: QR,
  isBlob: zR,
  isFunction: Ic,
  isStream: _R,
  isURLSearchParams: HR,
  isStandardBrowserEnv: jR,
  forEach: Dc,
  merge: Vc,
  extend: XR,
  trim: PR,
  stripBOM: LR,
  inherits: $R,
  toFlatObject: qR,
  kindOf: xc,
  kindOfTest: nr,
  endsWith: KR,
  toArray: eN,
  isTypedArray: tN,
  isFileList: GR
}, Rr = Oe;
function Ih(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var hm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (Rr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    Rr.forEach(r, function(w, U) {
      w === null || typeof w > "u" || (Rr.isArray(w) ? U = U + "[]" : w = [w], Rr.forEach(w, function(R) {
        Rr.isDate(R) ? R = R.toISOString() : Rr.isObject(R) && (R = JSON.stringify(R)), u.push(Ih(U) + "=" + Ih(R));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, nN = Oe;
function Oa() {
  this.handlers = [];
}
Oa.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Oa.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Oa.prototype.forEach = function(o) {
  nN.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var rN = Oa, oN = Oe, iN = function(o, r) {
  oN.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, fm = Oe;
function Gr(t, o, r, s, a) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
fm.inherits(Gr, Error, {
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
var pm = Gr.prototype, mm = {};
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
  mm[t] = { value: t };
});
Object.defineProperties(Gr, mm);
Object.defineProperty(pm, "isAxiosError", { value: !0 });
Gr.from = function(t, o, r, s, a, u) {
  var d = Object.create(pm);
  return fm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), Gr.call(d, t.message, o, r, s, a), d.name = t.name, u && Object.assign(d, u), d;
};
var Xr = Gr, wm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, At = Oe;
function aN(t, o) {
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
var vm = aN, Nl, Dh;
function sN() {
  if (Dh)
    return Nl;
  Dh = 1;
  var t = Xr;
  return Nl = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new t(
      "Request failed with status code " + a.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Nl;
}
var yl, Oh;
function lN() {
  if (Oh)
    return yl;
  Oh = 1;
  var t = Oe;
  return yl = t.isStandardBrowserEnv() ? function() {
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
  }(), yl;
}
var cN = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, uN = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, dN = cN, hN = uN, Vm = function(o, r) {
  return o && !dN(r) ? hN(o, r) : r;
}, kl, Qh;
function fN() {
  if (Qh)
    return kl;
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
  return kl = function(s) {
    var a = {}, u, d, h;
    return s && t.forEach(s.split(`
`), function(U) {
      if (h = U.indexOf(":"), u = t.trim(U.substr(0, h)).toLowerCase(), d = t.trim(U.substr(h + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([d]) : a[u] = a[u] ? a[u] + ", " + d : d;
      }
    }), a;
  }, kl;
}
var Ml, zh;
function pN() {
  if (zh)
    return Ml;
  zh = 1;
  var t = Oe;
  return Ml = t.isStandardBrowserEnv() ? function() {
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
  }(), Ml;
}
var Zl, Gh;
function Qa() {
  if (Gh)
    return Zl;
  Gh = 1;
  var t = Xr, o = Oe;
  function r(s) {
    t.call(this, s == null ? "canceled" : s, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), Zl = r, Zl;
}
var bl, _h;
function mN() {
  return _h || (_h = 1, bl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), bl;
}
var Jl, Yh;
function Hh() {
  if (Yh)
    return Jl;
  Yh = 1;
  var t = Oe, o = sN(), r = lN(), s = hm, a = Vm, u = fN(), d = pN(), h = wm, w = Xr, U = Qa(), V = mN();
  return Jl = function(N) {
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
      var H = a(N.baseURL, N.url);
      b.open(N.method.toUpperCase(), s(H, N.params, N.paramsSerializer), !0), b.timeout = N.timeout;
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
          o(function(We) {
            S(We), O();
          }, function(We) {
            x(We), O();
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
        var de = (N.withCredentials || d(H)) && N.xsrfCookieName ? r.read(N.xsrfCookieName) : void 0;
        de && (F[N.xsrfHeaderName] = de);
      }
      "setRequestHeader" in b && t.forEach(F, function(Ue, ke) {
        typeof B > "u" && ke.toLowerCase() === "content-type" ? delete F[ke] : b.setRequestHeader(ke, Ue);
      }), t.isUndefined(N.withCredentials) || (b.withCredentials = !!N.withCredentials), W && W !== "json" && (b.responseType = N.responseType), typeof N.onDownloadProgress == "function" && b.addEventListener("progress", N.onDownloadProgress), typeof N.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", N.onUploadProgress), (N.cancelToken || N.signal) && (E = function(Ve) {
        !b || (x(!Ve || Ve && Ve.type ? new U() : Ve), b.abort(), b = null);
      }, N.cancelToken && N.cancelToken.subscribe(E), N.signal && (N.signal.aborted ? E() : N.signal.addEventListener("abort", E))), B || (B = null);
      var ve = V(H);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        x(new w("Unsupported protocol " + ve + ":", w.ERR_BAD_REQUEST, N));
        return;
      }
      b.send(B);
    });
  }, Jl;
}
var El, Ph;
function wN() {
  return Ph || (Ph = 1, El = null), El;
}
var Fe = Oe, jh = iN, Xh = Xr, vN = wm, VN = vm, TN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Lh(t, o) {
  !Fe.isUndefined(t) && Fe.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function gN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Hh()), t;
}
function UN(t, o, r) {
  if (Fe.isString(t))
    try {
      return (o || JSON.parse)(t), Fe.trim(t);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(t);
}
var za = {
  transitional: vN,
  adapter: gN(),
  transformRequest: [function(o, r) {
    if (jh(r, "Accept"), jh(r, "Content-Type"), Fe.isFormData(o) || Fe.isArrayBuffer(o) || Fe.isBuffer(o) || Fe.isStream(o) || Fe.isFile(o) || Fe.isBlob(o))
      return o;
    if (Fe.isArrayBufferView(o))
      return o.buffer;
    if (Fe.isURLSearchParams(o))
      return Lh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Fe.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Fe.isFileList(o)) || s && a === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return VN(u ? { "files[]": o } : o, d && new d());
    } else if (s || a === "application/json")
      return Lh(r, "application/json"), UN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || za.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Fe.isString(o) && o.length)
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
    FormData: wN()
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
Fe.forEach(["delete", "get", "head"], function(o) {
  za.headers[o] = {};
});
Fe.forEach(["post", "put", "patch"], function(o) {
  za.headers[o] = Fe.merge(TN);
});
var Oc = za, RN = Oe, NN = Oc, yN = function(o, r, s) {
  var a = this || NN;
  return RN.forEach(s, function(d) {
    o = d.call(a, o, r);
  }), o;
}, Sl, $h;
function Tm() {
  return $h || ($h = 1, Sl = function(o) {
    return !!(o && o.__CANCEL__);
  }), Sl;
}
var qh = Oe, Fl = yN, kN = Tm(), MN = Oc, ZN = Qa();
function Al(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new ZN();
}
var bN = function(o) {
  Al(o), o.headers = o.headers || {}, o.data = Fl.call(
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
  var r = o.adapter || MN.adapter;
  return r(o).then(function(a) {
    return Al(o), a.data = Fl.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return kN(a) || (Al(o), a && a.response && (a.response.data = Fl.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, dt = Oe, gm = function(o, r) {
  r = r || {};
  var s = {};
  function a(V, R) {
    return dt.isPlainObject(V) && dt.isPlainObject(R) ? dt.merge(V, R) : dt.isPlainObject(R) ? dt.merge({}, R) : dt.isArray(R) ? R.slice() : R;
  }
  function u(V) {
    if (dt.isUndefined(r[V])) {
      if (!dt.isUndefined(o[V]))
        return a(void 0, o[V]);
    } else
      return a(o[V], r[V]);
  }
  function d(V) {
    if (!dt.isUndefined(r[V]))
      return a(void 0, r[V]);
  }
  function h(V) {
    if (dt.isUndefined(r[V])) {
      if (!dt.isUndefined(o[V]))
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
  return dt.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var N = U[R] || u, A = N(R);
    dt.isUndefined(A) && N !== w || (s[R] = A);
  }), s;
}, Wl, Kh;
function Um() {
  return Kh || (Kh = 1, Wl = {
    version: "0.27.2"
  }), Wl;
}
var JN = Um().version, kn = Xr, Qc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Qc[t] = function(s) {
    return typeof s === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var ef = {};
Qc.transitional = function(o, r, s) {
  function a(u, d) {
    return "[Axios v" + JN + "] Transitional option '" + u + "'" + d + (s ? ". " + s : "");
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
function EN(t, o, r) {
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
var SN = {
  assertOptions: EN,
  validators: Qc
}, Rm = Oe, FN = hm, tf = rN, nf = bN, Ga = gm, AN = Vm, Nm = SN, Nr = Nm.validators;
function _r(t) {
  this.defaults = t, this.interceptors = {
    request: new tf(),
    response: new tf()
  };
}
_r.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ga(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Nm.assertOptions(s, {
    silentJSONParsing: Nr.transitional(Nr.boolean),
    forcedJSONParsing: Nr.transitional(Nr.boolean),
    clarifyTimeoutError: Nr.transitional(Nr.boolean)
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
_r.prototype.getUri = function(o) {
  o = Ga(this.defaults, o);
  var r = AN(o.baseURL, o.url);
  return FN(r, o.params, o.paramsSerializer);
};
Rm.forEach(["delete", "get", "head", "options"], function(o) {
  _r.prototype[o] = function(r, s) {
    return this.request(Ga(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Rm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, d, h) {
      return this.request(Ga(h || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: d
      }));
    };
  }
  _r.prototype[o] = r(), _r.prototype[o + "Form"] = r(!0);
});
var WN = _r, Cl, rf;
function CN() {
  if (rf)
    return Cl;
  rf = 1;
  var t = Qa();
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
  }, Cl = o, Cl;
}
var xl, of;
function xN() {
  return of || (of = 1, xl = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), xl;
}
var Bl, af;
function BN() {
  if (af)
    return Bl;
  af = 1;
  var t = Oe;
  return Bl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Bl;
}
var sf = Oe, IN = cm, Ua = WN, DN = gm, ON = Oc;
function ym(t) {
  var o = new Ua(t), r = IN(Ua.prototype.request, o);
  return sf.extend(r, Ua.prototype, o), sf.extend(r, o), r.create = function(a) {
    return ym(DN(t, a));
  }, r;
}
var ot = ym(ON);
ot.Axios = Ua;
ot.CanceledError = Qa();
ot.CancelToken = CN();
ot.isCancel = Tm();
ot.VERSION = Um().version;
ot.toFormData = vm;
ot.AxiosError = Xr;
ot.Cancel = ot.CanceledError;
ot.all = function(o) {
  return Promise.all(o);
};
ot.spread = xN();
ot.isAxiosError = BN();
Wc.exports = ot;
Wc.exports.default = ot;
(function(t) {
  t.exports = Wc.exports;
})(lm);
const km = /* @__PURE__ */ WR(lm.exports), dn = km.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), En = km.create({
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", h = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", U = 500, V = "__lodash_placeholder__", R = 1, N = 2, A = 4, S = 1, x = 2, B = 1, F = 2, W = 4, E = 8, O = 16, b = 32, z = 64, Q = 128, H = 256, me = 512, de = 30, ve = "...", Ve = 800, Ue = 16, ke = 1, ce = 2, We = 3, Ce = 1 / 0, He = 9007199254740991, Kr = 17976931348623157e292, ui = 0 / 0, Dt = 4294967295, Ww = Dt - 1, Cw = Dt >>> 1, xw = [
      ["ary", Q],
      ["bind", B],
      ["bindKey", F],
      ["curry", E],
      ["curryRight", O],
      ["flip", me],
      ["partial", b],
      ["partialRight", z],
      ["rearg", H]
    ], ar = "[object Arguments]", di = "[object Array]", Bw = "[object AsyncFunction]", eo = "[object Boolean]", to = "[object Date]", Iw = "[object DOMException]", hi = "[object Error]", fi = "[object Function]", su = "[object GeneratorFunction]", Zt = "[object Map]", no = "[object Number]", Dw = "[object Null]", Ht = "[object Object]", lu = "[object Promise]", Ow = "[object Proxy]", ro = "[object RegExp]", bt = "[object Set]", oo = "[object String]", pi = "[object Symbol]", Qw = "[object Undefined]", io = "[object WeakMap]", zw = "[object WeakSet]", ao = "[object ArrayBuffer]", sr = "[object DataView]", ns = "[object Float32Array]", rs = "[object Float64Array]", os = "[object Int8Array]", is = "[object Int16Array]", as = "[object Int32Array]", ss = "[object Uint8Array]", ls = "[object Uint8ClampedArray]", cs = "[object Uint16Array]", us = "[object Uint32Array]", Gw = /\b__p \+= '';/g, _w = /\b(__p \+=) '' \+/g, Yw = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cu = /&(?:amp|lt|gt|quot|#39);/g, uu = /[&<>"']/g, Hw = RegExp(cu.source), Pw = RegExp(uu.source), jw = /<%-([\s\S]+?)%>/g, Xw = /<%([\s\S]+?)%>/g, du = /<%=([\s\S]+?)%>/g, Lw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $w = /^\w*$/, qw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ds = /[\\^$.*+?()[\]{}|]/g, Kw = RegExp(ds.source), hs = /^\s+/, e1 = /\s/, t1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, n1 = /\{\n\/\* \[wrapped with (.+)\] \*/, r1 = /,? & /, o1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, i1 = /[()=,{}\[\]\/\s]/, a1 = /\\(\\)?/g, s1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hu = /\w*$/, l1 = /^[-+]0x[0-9a-f]+$/i, c1 = /^0b[01]+$/i, u1 = /^\[object .+?Constructor\]$/, d1 = /^0o[0-7]+$/i, h1 = /^(?:0|[1-9]\d*)$/, f1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, mi = /($^)/, p1 = /['\n\r\u2028\u2029\\]/g, wi = "\\ud800-\\udfff", m1 = "\\u0300-\\u036f", w1 = "\\ufe20-\\ufe2f", v1 = "\\u20d0-\\u20ff", fu = m1 + w1 + v1, pu = "\\u2700-\\u27bf", mu = "a-z\\xdf-\\xf6\\xf8-\\xff", V1 = "\\xac\\xb1\\xd7\\xf7", T1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", g1 = "\\u2000-\\u206f", U1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wu = "A-Z\\xc0-\\xd6\\xd8-\\xde", vu = "\\ufe0e\\ufe0f", Vu = V1 + T1 + g1 + U1, fs = "['\u2019]", R1 = "[" + wi + "]", Tu = "[" + Vu + "]", vi = "[" + fu + "]", gu = "\\d+", N1 = "[" + pu + "]", Uu = "[" + mu + "]", Ru = "[^" + wi + Vu + gu + pu + mu + wu + "]", ps = "\\ud83c[\\udffb-\\udfff]", y1 = "(?:" + vi + "|" + ps + ")", Nu = "[^" + wi + "]", ms = "(?:\\ud83c[\\udde6-\\uddff]){2}", ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", lr = "[" + wu + "]", yu = "\\u200d", ku = "(?:" + Uu + "|" + Ru + ")", k1 = "(?:" + lr + "|" + Ru + ")", Mu = "(?:" + fs + "(?:d|ll|m|re|s|t|ve))?", Zu = "(?:" + fs + "(?:D|LL|M|RE|S|T|VE))?", bu = y1 + "?", Ju = "[" + vu + "]?", M1 = "(?:" + yu + "(?:" + [Nu, ms, ws].join("|") + ")" + Ju + bu + ")*", Z1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", b1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Eu = Ju + bu + M1, J1 = "(?:" + [N1, ms, ws].join("|") + ")" + Eu, E1 = "(?:" + [Nu + vi + "?", vi, ms, ws, R1].join("|") + ")", S1 = RegExp(fs, "g"), F1 = RegExp(vi, "g"), vs = RegExp(ps + "(?=" + ps + ")|" + E1 + Eu, "g"), A1 = RegExp([
      lr + "?" + Uu + "+" + Mu + "(?=" + [Tu, lr, "$"].join("|") + ")",
      k1 + "+" + Zu + "(?=" + [Tu, lr + ku, "$"].join("|") + ")",
      lr + "?" + ku + "+" + Mu,
      lr + "+" + Zu,
      b1,
      Z1,
      gu,
      J1
    ].join("|"), "g"), W1 = RegExp("[" + yu + wi + fu + vu + "]"), C1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, x1 = [
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
    ], B1 = -1, fe = {};
    fe[ns] = fe[rs] = fe[os] = fe[is] = fe[as] = fe[ss] = fe[ls] = fe[cs] = fe[us] = !0, fe[ar] = fe[di] = fe[ao] = fe[eo] = fe[sr] = fe[to] = fe[hi] = fe[fi] = fe[Zt] = fe[no] = fe[Ht] = fe[ro] = fe[bt] = fe[oo] = fe[io] = !1;
    var he = {};
    he[ar] = he[di] = he[ao] = he[sr] = he[eo] = he[to] = he[ns] = he[rs] = he[os] = he[is] = he[as] = he[Zt] = he[no] = he[Ht] = he[ro] = he[bt] = he[oo] = he[pi] = he[ss] = he[ls] = he[cs] = he[us] = !0, he[hi] = he[fi] = he[io] = !1;
    var I1 = {
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
    }, D1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, O1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Q1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, z1 = parseFloat, G1 = parseInt, Su = typeof No == "object" && No && No.Object === Object && No, _1 = typeof self == "object" && self && self.Object === Object && self, xe = Su || _1 || Function("return this")(), Vs = o && !o.nodeType && o, An = Vs && !0 && t && !t.nodeType && t, Fu = An && An.exports === Vs, Ts = Fu && Su.process, wt = function() {
      try {
        var T = An && An.require && An.require("util").types;
        return T || Ts && Ts.binding && Ts.binding("util");
      } catch {
      }
    }(), Au = wt && wt.isArrayBuffer, Wu = wt && wt.isDate, Cu = wt && wt.isMap, xu = wt && wt.isRegExp, Bu = wt && wt.isSet, Iu = wt && wt.isTypedArray;
    function it(T, k, y) {
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
    function Y1(T, k, y, I) {
      for (var P = -1, re = T == null ? 0 : T.length; ++P < re; ) {
        var be = T[P];
        k(I, be, y(be), T);
      }
      return I;
    }
    function vt(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I && k(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function H1(T, k) {
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
    function hn(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length, P = 0, re = []; ++y < I; ) {
        var be = T[y];
        k(be, y, T) && (re[P++] = be);
      }
      return re;
    }
    function Vi(T, k) {
      var y = T == null ? 0 : T.length;
      return !!y && cr(T, k, 0) > -1;
    }
    function gs(T, k, y) {
      for (var I = -1, P = T == null ? 0 : T.length; ++I < P; )
        if (y(k, T[I]))
          return !0;
      return !1;
    }
    function pe(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length, P = Array(I); ++y < I; )
        P[y] = k(T[y], y, T);
      return P;
    }
    function fn(T, k) {
      for (var y = -1, I = k.length, P = T.length; ++y < I; )
        T[P + y] = k[y];
      return T;
    }
    function Us(T, k, y, I) {
      var P = -1, re = T == null ? 0 : T.length;
      for (I && re && (y = T[++P]); ++P < re; )
        y = k(y, T[P], P, T);
      return y;
    }
    function P1(T, k, y, I) {
      var P = T == null ? 0 : T.length;
      for (I && P && (y = T[--P]); P--; )
        y = k(y, T[P], P, T);
      return y;
    }
    function Rs(T, k) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I; )
        if (k(T[y], y, T))
          return !0;
      return !1;
    }
    var j1 = Ns("length");
    function X1(T) {
      return T.split("");
    }
    function L1(T) {
      return T.match(o1) || [];
    }
    function Ou(T, k, y) {
      var I;
      return y(T, function(P, re, be) {
        if (k(P, re, be))
          return I = re, !1;
      }), I;
    }
    function Ti(T, k, y, I) {
      for (var P = T.length, re = y + (I ? 1 : -1); I ? re-- : ++re < P; )
        if (k(T[re], re, T))
          return re;
      return -1;
    }
    function cr(T, k, y) {
      return k === k ? lv(T, k, y) : Ti(T, Qu, y);
    }
    function $1(T, k, y, I) {
      for (var P = y - 1, re = T.length; ++P < re; )
        if (I(T[P], k))
          return P;
      return -1;
    }
    function Qu(T) {
      return T !== T;
    }
    function zu(T, k) {
      var y = T == null ? 0 : T.length;
      return y ? ks(T, k) / y : ui;
    }
    function Ns(T) {
      return function(k) {
        return k == null ? r : k[T];
      };
    }
    function ys(T) {
      return function(k) {
        return T == null ? r : T[k];
      };
    }
    function Gu(T, k, y, I, P) {
      return P(T, function(re, be, ue) {
        y = I ? (I = !1, re) : k(y, re, be, ue);
      }), y;
    }
    function q1(T, k) {
      var y = T.length;
      for (T.sort(k); y--; )
        T[y] = T[y].value;
      return T;
    }
    function ks(T, k) {
      for (var y, I = -1, P = T.length; ++I < P; ) {
        var re = k(T[I]);
        re !== r && (y = y === r ? re : y + re);
      }
      return y;
    }
    function Ms(T, k) {
      for (var y = -1, I = Array(T); ++y < T; )
        I[y] = k(y);
      return I;
    }
    function K1(T, k) {
      return pe(k, function(y) {
        return [y, T[y]];
      });
    }
    function _u(T) {
      return T && T.slice(0, ju(T) + 1).replace(hs, "");
    }
    function at(T) {
      return function(k) {
        return T(k);
      };
    }
    function Zs(T, k) {
      return pe(k, function(y) {
        return T[y];
      });
    }
    function so(T, k) {
      return T.has(k);
    }
    function Yu(T, k) {
      for (var y = -1, I = T.length; ++y < I && cr(k, T[y], 0) > -1; )
        ;
      return y;
    }
    function Hu(T, k) {
      for (var y = T.length; y-- && cr(k, T[y], 0) > -1; )
        ;
      return y;
    }
    function ev(T, k) {
      for (var y = T.length, I = 0; y--; )
        T[y] === k && ++I;
      return I;
    }
    var tv = ys(I1), nv = ys(D1);
    function rv(T) {
      return "\\" + Q1[T];
    }
    function ov(T, k) {
      return T == null ? r : T[k];
    }
    function ur(T) {
      return W1.test(T);
    }
    function iv(T) {
      return C1.test(T);
    }
    function av(T) {
      for (var k, y = []; !(k = T.next()).done; )
        y.push(k.value);
      return y;
    }
    function bs(T) {
      var k = -1, y = Array(T.size);
      return T.forEach(function(I, P) {
        y[++k] = [P, I];
      }), y;
    }
    function Pu(T, k) {
      return function(y) {
        return T(k(y));
      };
    }
    function pn(T, k) {
      for (var y = -1, I = T.length, P = 0, re = []; ++y < I; ) {
        var be = T[y];
        (be === k || be === V) && (T[y] = V, re[P++] = y);
      }
      return re;
    }
    function gi(T) {
      var k = -1, y = Array(T.size);
      return T.forEach(function(I) {
        y[++k] = I;
      }), y;
    }
    function sv(T) {
      var k = -1, y = Array(T.size);
      return T.forEach(function(I) {
        y[++k] = [I, I];
      }), y;
    }
    function lv(T, k, y) {
      for (var I = y - 1, P = T.length; ++I < P; )
        if (T[I] === k)
          return I;
      return -1;
    }
    function cv(T, k, y) {
      for (var I = y + 1; I--; )
        if (T[I] === k)
          return I;
      return I;
    }
    function dr(T) {
      return ur(T) ? dv(T) : j1(T);
    }
    function Jt(T) {
      return ur(T) ? hv(T) : X1(T);
    }
    function ju(T) {
      for (var k = T.length; k-- && e1.test(T.charAt(k)); )
        ;
      return k;
    }
    var uv = ys(O1);
    function dv(T) {
      for (var k = vs.lastIndex = 0; vs.test(T); )
        ++k;
      return k;
    }
    function hv(T) {
      return T.match(vs) || [];
    }
    function fv(T) {
      return T.match(A1) || [];
    }
    var pv = function T(k) {
      k = k == null ? xe : hr.defaults(xe.Object(), k, hr.pick(xe, x1));
      var y = k.Array, I = k.Date, P = k.Error, re = k.Function, be = k.Math, ue = k.Object, Js = k.RegExp, mv = k.String, Vt = k.TypeError, Ui = y.prototype, wv = re.prototype, fr = ue.prototype, Ri = k["__core-js_shared__"], Ni = wv.toString, ae = fr.hasOwnProperty, vv = 0, Xu = function() {
        var e = /[^.]+$/.exec(Ri && Ri.keys && Ri.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), yi = fr.toString, Vv = Ni.call(ue), Tv = xe._, gv = Js(
        "^" + Ni.call(ae).replace(ds, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ki = Fu ? k.Buffer : r, mn = k.Symbol, Mi = k.Uint8Array, Lu = ki ? ki.allocUnsafe : r, Zi = Pu(ue.getPrototypeOf, ue), $u = ue.create, qu = fr.propertyIsEnumerable, bi = Ui.splice, Ku = mn ? mn.isConcatSpreadable : r, lo = mn ? mn.iterator : r, Wn = mn ? mn.toStringTag : r, Ji = function() {
        try {
          var e = Dn(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Uv = k.clearTimeout !== xe.clearTimeout && k.clearTimeout, Rv = I && I.now !== xe.Date.now && I.now, Nv = k.setTimeout !== xe.setTimeout && k.setTimeout, Ei = be.ceil, Si = be.floor, Es = ue.getOwnPropertySymbols, yv = ki ? ki.isBuffer : r, ed = k.isFinite, kv = Ui.join, Mv = Pu(ue.keys, ue), Je = be.max, ze = be.min, Zv = I.now, bv = k.parseInt, td = be.random, Jv = Ui.reverse, Ss = Dn(k, "DataView"), co = Dn(k, "Map"), Fs = Dn(k, "Promise"), pr = Dn(k, "Set"), uo = Dn(k, "WeakMap"), ho = Dn(ue, "create"), Fi = uo && new uo(), mr = {}, Ev = On(Ss), Sv = On(co), Fv = On(Fs), Av = On(pr), Wv = On(uo), Ai = mn ? mn.prototype : r, fo = Ai ? Ai.valueOf : r, nd = Ai ? Ai.toString : r;
      function f(e) {
        if (Te(e) && !j(e) && !(e instanceof ee)) {
          if (e instanceof Tt)
            return e;
          if (ae.call(e, "__wrapped__"))
            return rh(e);
        }
        return new Tt(e);
      }
      var wr = function() {
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
        escape: jw,
        evaluate: Xw,
        interpolate: du,
        variable: "",
        imports: {
          _: f
        }
      }, f.prototype = Wi.prototype, f.prototype.constructor = f, Tt.prototype = wr(Wi.prototype), Tt.prototype.constructor = Tt;
      function ee(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Dt, this.__views__ = [];
      }
      function Cv() {
        var e = new ee(this.__wrapped__);
        return e.__actions__ = $e(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $e(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $e(this.__views__), e;
      }
      function xv() {
        if (this.__filtered__) {
          var e = new ee(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Bv() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = j(e), l = n < 0, c = i ? e.length : 0, p = XV(0, c, this.__views__), m = p.start, v = p.end, g = v - m, M = l ? v : m - 1, Z = this.__iteratees__, J = Z.length, C = 0, D = ze(g, this.__takeCount__);
        if (!i || !l && c == g && D == g)
          return Md(e, this.__actions__);
        var _ = [];
        e:
          for (; g-- && C < D; ) {
            M += n;
            for (var L = -1, Y = e[M]; ++L < J; ) {
              var K = Z[L], te = K.iteratee, ct = K.type, Xe = te(Y);
              if (ct == ce)
                Y = Xe;
              else if (!Xe) {
                if (ct == ke)
                  continue e;
                break e;
              }
            }
            _[C++] = Y;
          }
        return _;
      }
      ee.prototype = wr(Wi.prototype), ee.prototype.constructor = ee;
      function Cn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Iv() {
        this.__data__ = ho ? ho(null) : {}, this.size = 0;
      }
      function Dv(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Ov(e) {
        var n = this.__data__;
        if (ho) {
          var i = n[e];
          return i === w ? r : i;
        }
        return ae.call(n, e) ? n[e] : r;
      }
      function Qv(e) {
        var n = this.__data__;
        return ho ? n[e] !== r : ae.call(n, e);
      }
      function zv(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = ho && n === r ? w : n, this;
      }
      Cn.prototype.clear = Iv, Cn.prototype.delete = Dv, Cn.prototype.get = Ov, Cn.prototype.has = Qv, Cn.prototype.set = zv;
      function Pt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function Gv() {
        this.__data__ = [], this.size = 0;
      }
      function _v(e) {
        var n = this.__data__, i = Ci(n, e);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : bi.call(n, i, 1), --this.size, !0;
      }
      function Yv(e) {
        var n = this.__data__, i = Ci(n, e);
        return i < 0 ? r : n[i][1];
      }
      function Hv(e) {
        return Ci(this.__data__, e) > -1;
      }
      function Pv(e, n) {
        var i = this.__data__, l = Ci(i, e);
        return l < 0 ? (++this.size, i.push([e, n])) : i[l][1] = n, this;
      }
      Pt.prototype.clear = Gv, Pt.prototype.delete = _v, Pt.prototype.get = Yv, Pt.prototype.has = Hv, Pt.prototype.set = Pv;
      function jt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var l = e[n];
          this.set(l[0], l[1]);
        }
      }
      function jv() {
        this.size = 0, this.__data__ = {
          hash: new Cn(),
          map: new (co || Pt)(),
          string: new Cn()
        };
      }
      function Xv(e) {
        var n = Pi(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Lv(e) {
        return Pi(this, e).get(e);
      }
      function $v(e) {
        return Pi(this, e).has(e);
      }
      function qv(e, n) {
        var i = Pi(this, e), l = i.size;
        return i.set(e, n), this.size += i.size == l ? 0 : 1, this;
      }
      jt.prototype.clear = jv, jt.prototype.delete = Xv, jt.prototype.get = Lv, jt.prototype.has = $v, jt.prototype.set = qv;
      function xn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new jt(); ++n < i; )
          this.add(e[n]);
      }
      function Kv(e) {
        return this.__data__.set(e, w), this;
      }
      function eV(e) {
        return this.__data__.has(e);
      }
      xn.prototype.add = xn.prototype.push = Kv, xn.prototype.has = eV;
      function Et(e) {
        var n = this.__data__ = new Pt(e);
        this.size = n.size;
      }
      function tV() {
        this.__data__ = new Pt(), this.size = 0;
      }
      function nV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function rV(e) {
        return this.__data__.get(e);
      }
      function oV(e) {
        return this.__data__.has(e);
      }
      function iV(e, n) {
        var i = this.__data__;
        if (i instanceof Pt) {
          var l = i.__data__;
          if (!co || l.length < a - 1)
            return l.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new jt(l);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      Et.prototype.clear = tV, Et.prototype.delete = nV, Et.prototype.get = rV, Et.prototype.has = oV, Et.prototype.set = iV;
      function rd(e, n) {
        var i = j(e), l = !i && Qn(e), c = !i && !l && gn(e), p = !i && !l && !c && gr(e), m = i || l || c || p, v = m ? Ms(e.length, mv) : [], g = v.length;
        for (var M in e)
          (n || ae.call(e, M)) && !(m && (M == "length" || c && (M == "offset" || M == "parent") || p && (M == "buffer" || M == "byteLength" || M == "byteOffset") || qt(M, g))) && v.push(M);
        return v;
      }
      function od(e) {
        var n = e.length;
        return n ? e[Gs(0, n - 1)] : r;
      }
      function aV(e, n) {
        return ji($e(e), Bn(n, 0, e.length));
      }
      function sV(e) {
        return ji($e(e));
      }
      function As(e, n, i) {
        (i !== r && !St(e[n], i) || i === r && !(n in e)) && Xt(e, n, i);
      }
      function po(e, n, i) {
        var l = e[n];
        (!(ae.call(e, n) && St(l, i)) || i === r && !(n in e)) && Xt(e, n, i);
      }
      function Ci(e, n) {
        for (var i = e.length; i--; )
          if (St(e[i][0], n))
            return i;
        return -1;
      }
      function lV(e, n, i, l) {
        return wn(e, function(c, p, m) {
          n(l, c, i(c), m);
        }), l;
      }
      function id(e, n) {
        return e && Qt(n, Se(n), e);
      }
      function cV(e, n) {
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
      function Ws(e, n) {
        for (var i = -1, l = n.length, c = y(l), p = e == null; ++i < l; )
          c[i] = p ? r : pl(e, n[i]);
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
          if (m = $V(e), !v)
            return $e(e, m);
        } else {
          var J = Ge(e), C = J == fi || J == su;
          if (gn(e))
            return Jd(e, v);
          if (J == Ht || J == ar || C && !c) {
            if (m = g || C ? {} : jd(e), !v)
              return g ? OV(e, cV(m, e)) : DV(e, id(m, e));
          } else {
            if (!he[J])
              return c ? e : {};
            m = qV(e, J, v);
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
        var _ = M ? g ? el : Ks : g ? Ke : Se, L = Z ? r : _(e);
        return vt(L || e, function(Y, K) {
          L && (K = Y, Y = e[K]), po(m, K, gt(Y, n, i, K, e, p));
        }), m;
      }
      function uV(e) {
        var n = Se(e);
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
        return Uo(function() {
          e.apply(r, i);
        }, n);
      }
      function mo(e, n, i, l) {
        var c = -1, p = Vi, m = !0, v = e.length, g = [], M = n.length;
        if (!v)
          return g;
        i && (n = pe(n, at(i))), l ? (p = gs, m = !1) : n.length >= a && (p = so, m = !1, n = new xn(n));
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
      var wn = Wd(Ot), ld = Wd(xs, !0);
      function dV(e, n) {
        var i = !0;
        return wn(e, function(l, c, p) {
          return i = !!n(l, c, p), i;
        }), i;
      }
      function xi(e, n, i) {
        for (var l = -1, c = e.length; ++l < c; ) {
          var p = e[l], m = n(p);
          if (m != null && (v === r ? m === m && !lt(m) : i(m, v)))
            var v = m, g = p;
        }
        return g;
      }
      function hV(e, n, i, l) {
        var c = e.length;
        for (i = X(i), i < 0 && (i = -i > c ? 0 : c + i), l = l === r || l > c ? c : X(l), l < 0 && (l += c), l = i > l ? 0 : kh(l); i < l; )
          e[i++] = n;
        return e;
      }
      function cd(e, n) {
        var i = [];
        return wn(e, function(l, c, p) {
          n(l, c, p) && i.push(l);
        }), i;
      }
      function Be(e, n, i, l, c) {
        var p = -1, m = e.length;
        for (i || (i = e0), c || (c = []); ++p < m; ) {
          var v = e[p];
          n > 0 && i(v) ? n > 1 ? Be(v, n - 1, i, l, c) : fn(c, v) : l || (c[c.length] = v);
        }
        return c;
      }
      var Cs = Cd(), ud = Cd(!0);
      function Ot(e, n) {
        return e && Cs(e, n, Se);
      }
      function xs(e, n) {
        return e && ud(e, n, Se);
      }
      function Bi(e, n) {
        return hn(n, function(i) {
          return Kt(e[i]);
        });
      }
      function In(e, n) {
        n = Vn(n, e);
        for (var i = 0, l = n.length; e != null && i < l; )
          e = e[zt(n[i++])];
        return i && i == l ? e : r;
      }
      function dd(e, n, i) {
        var l = n(e);
        return j(e) ? l : fn(l, i(e));
      }
      function Pe(e) {
        return e == null ? e === r ? Qw : Dw : Wn && Wn in ue(e) ? jV(e) : s0(e);
      }
      function Bs(e, n) {
        return e > n;
      }
      function fV(e, n) {
        return e != null && ae.call(e, n);
      }
      function pV(e, n) {
        return e != null && n in ue(e);
      }
      function mV(e, n, i) {
        return e >= ze(n, i) && e < Je(n, i);
      }
      function Is(e, n, i) {
        for (var l = i ? gs : Vi, c = e[0].length, p = e.length, m = p, v = y(p), g = 1 / 0, M = []; m--; ) {
          var Z = e[m];
          m && n && (Z = pe(Z, at(n))), g = ze(Z.length, g), v[m] = !i && (n || c >= 120 && Z.length >= 120) ? new xn(m && Z) : r;
        }
        Z = e[0];
        var J = -1, C = v[0];
        e:
          for (; ++J < c && M.length < g; ) {
            var D = Z[J], _ = n ? n(D) : D;
            if (D = i || D !== 0 ? D : 0, !(C ? so(C, _) : l(M, _, i))) {
              for (m = p; --m; ) {
                var L = v[m];
                if (!(L ? so(L, _) : l(e[m], _, i)))
                  continue e;
              }
              C && C.push(_), M.push(D);
            }
          }
        return M;
      }
      function wV(e, n, i, l) {
        return Ot(e, function(c, p, m) {
          n(l, i(c), p, m);
        }), l;
      }
      function wo(e, n, i) {
        n = Vn(n, e), e = qd(e, n);
        var l = e == null ? e : e[zt(Rt(n))];
        return l == null ? r : it(l, e, i);
      }
      function hd(e) {
        return Te(e) && Pe(e) == ar;
      }
      function vV(e) {
        return Te(e) && Pe(e) == ao;
      }
      function VV(e) {
        return Te(e) && Pe(e) == to;
      }
      function vo(e, n, i, l, c) {
        return e === n ? !0 : e == null || n == null || !Te(e) && !Te(n) ? e !== e && n !== n : TV(e, n, i, l, vo, c);
      }
      function TV(e, n, i, l, c, p) {
        var m = j(e), v = j(n), g = m ? di : Ge(e), M = v ? di : Ge(n);
        g = g == ar ? Ht : g, M = M == ar ? Ht : M;
        var Z = g == Ht, J = M == Ht, C = g == M;
        if (C && gn(e)) {
          if (!gn(n))
            return !1;
          m = !0, Z = !1;
        }
        if (C && !Z)
          return p || (p = new Et()), m || gr(e) ? Yd(e, n, i, l, c, p) : HV(e, n, g, i, l, c, p);
        if (!(i & S)) {
          var D = Z && ae.call(e, "__wrapped__"), _ = J && ae.call(n, "__wrapped__");
          if (D || _) {
            var L = D ? e.value() : e, Y = _ ? n.value() : n;
            return p || (p = new Et()), c(L, Y, i, l, p);
          }
        }
        return C ? (p || (p = new Et()), PV(e, n, i, l, c, p)) : !1;
      }
      function gV(e) {
        return Te(e) && Ge(e) == Zt;
      }
      function Ds(e, n, i, l) {
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
            if (!(C === r ? vo(Z, M, S | x, l, J) : C))
              return !1;
          }
        }
        return !0;
      }
      function fd(e) {
        if (!we(e) || n0(e))
          return !1;
        var n = Kt(e) ? gv : u1;
        return n.test(On(e));
      }
      function UV(e) {
        return Te(e) && Pe(e) == ro;
      }
      function RV(e) {
        return Te(e) && Ge(e) == bt;
      }
      function NV(e) {
        return Te(e) && ea(e.length) && !!fe[Pe(e)];
      }
      function pd(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? j(e) ? vd(e[0], e[1]) : wd(e) : xh(e);
      }
      function Os(e) {
        if (!go(e))
          return Mv(e);
        var n = [];
        for (var i in ue(e))
          ae.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function yV(e) {
        if (!we(e))
          return a0(e);
        var n = go(e), i = [];
        for (var l in e)
          l == "constructor" && (n || !ae.call(e, l)) || i.push(l);
        return i;
      }
      function Qs(e, n) {
        return e < n;
      }
      function md(e, n) {
        var i = -1, l = qe(e) ? y(e.length) : [];
        return wn(e, function(c, p, m) {
          l[++i] = n(c, p, m);
        }), l;
      }
      function wd(e) {
        var n = nl(e);
        return n.length == 1 && n[0][2] ? Ld(n[0][0], n[0][1]) : function(i) {
          return i === e || Ds(i, e, n);
        };
      }
      function vd(e, n) {
        return ol(e) && Xd(n) ? Ld(zt(e), n) : function(i) {
          var l = pl(i, e);
          return l === r && l === n ? ml(i, e) : vo(n, l, S | x);
        };
      }
      function Ii(e, n, i, l, c) {
        e !== n && Cs(n, function(p, m) {
          if (c || (c = new Et()), we(p))
            kV(e, n, m, i, Ii, l, c);
          else {
            var v = l ? l(al(e, m), p, m + "", e, n, c) : r;
            v === r && (v = p), As(e, m, v);
          }
        }, Ke);
      }
      function kV(e, n, i, l, c, p, m) {
        var v = al(e, i), g = al(n, i), M = m.get(g);
        if (M) {
          As(e, i, M);
          return;
        }
        var Z = p ? p(v, g, i + "", e, n, m) : r, J = Z === r;
        if (J) {
          var C = j(g), D = !C && gn(g), _ = !C && !D && gr(g);
          Z = g, C || D || _ ? j(v) ? Z = v : Re(v) ? Z = $e(v) : D ? (J = !1, Z = Jd(g, !0)) : _ ? (J = !1, Z = Ed(g, !0)) : Z = [] : Ro(g) || Qn(g) ? (Z = v, Qn(v) ? Z = Mh(v) : (!we(v) || Kt(v)) && (Z = jd(g))) : J = !1;
        }
        J && (m.set(g, Z), c(Z, g, l, p, m), m.delete(g)), As(e, i, Z);
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
        n = pe(n, at(G()));
        var c = md(e, function(p, m, v) {
          var g = pe(n, function(M) {
            return M(p);
          });
          return { criteria: g, index: ++l, value: p };
        });
        return q1(c, function(p, m) {
          return IV(p, m, i);
        });
      }
      function MV(e, n) {
        return gd(e, n, function(i, l) {
          return ml(e, l);
        });
      }
      function gd(e, n, i) {
        for (var l = -1, c = n.length, p = {}; ++l < c; ) {
          var m = n[l], v = In(e, m);
          i(v, m) && Vo(p, Vn(m, e), v);
        }
        return p;
      }
      function ZV(e) {
        return function(n) {
          return In(n, e);
        };
      }
      function zs(e, n, i, l) {
        var c = l ? $1 : cr, p = -1, m = n.length, v = e;
        for (e === n && (n = $e(n)), i && (v = pe(e, at(i))); ++p < m; )
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
      function Gs(e, n) {
        return e + Si(td() * (n - e + 1));
      }
      function bV(e, n, i, l) {
        for (var c = -1, p = Je(Ei((n - e) / (i || 1)), 0), m = y(p); p--; )
          m[l ? p : ++c] = e, e += i;
        return m;
      }
      function _s(e, n) {
        var i = "";
        if (!e || n < 1 || n > He)
          return i;
        do
          n % 2 && (i += e), n = Si(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function $(e, n) {
        return sl($d(e, n, et), e + "");
      }
      function JV(e) {
        return od(Ur(e));
      }
      function EV(e, n) {
        var i = Ur(e);
        return ji(i, Bn(n, 0, i.length));
      }
      function Vo(e, n, i, l) {
        if (!we(e))
          return e;
        n = Vn(n, e);
        for (var c = -1, p = n.length, m = p - 1, v = e; v != null && ++c < p; ) {
          var g = zt(n[c]), M = i;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (c != m) {
            var Z = v[g];
            M = l ? l(Z, g, v) : r, M === r && (M = we(Z) ? Z : qt(n[c + 1]) ? [] : {});
          }
          po(v, g, M), v = v[g];
        }
        return e;
      }
      var Rd = Fi ? function(e, n) {
        return Fi.set(e, n), e;
      } : et, SV = Ji ? function(e, n) {
        return Ji(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: vl(n),
          writable: !0
        });
      } : et;
      function FV(e) {
        return ji(Ur(e));
      }
      function Ut(e, n, i) {
        var l = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), i = i > c ? c : i, i < 0 && (i += c), c = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = y(c); ++l < c; )
          p[l] = e[l + n];
        return p;
      }
      function AV(e, n) {
        var i;
        return wn(e, function(l, c, p) {
          return i = n(l, c, p), !i;
        }), !!i;
      }
      function Di(e, n, i) {
        var l = 0, c = e == null ? l : e.length;
        if (typeof n == "number" && n === n && c <= Cw) {
          for (; l < c; ) {
            var p = l + c >>> 1, m = e[p];
            m !== null && !lt(m) && (i ? m <= n : m < n) ? l = p + 1 : c = p;
          }
          return c;
        }
        return Ys(e, n, et, i);
      }
      function Ys(e, n, i, l) {
        var c = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, v = n === null, g = lt(n), M = n === r; c < p; ) {
          var Z = Si((c + p) / 2), J = i(e[Z]), C = J !== r, D = J === null, _ = J === J, L = lt(J);
          if (m)
            var Y = l || _;
          else
            M ? Y = _ && (l || C) : v ? Y = _ && C && (l || !D) : g ? Y = _ && C && !D && (l || !L) : D || L ? Y = !1 : Y = l ? J <= n : J < n;
          Y ? c = Z + 1 : p = Z;
        }
        return ze(p, Ww);
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
        return typeof e == "number" ? e : lt(e) ? ui : +e;
      }
      function st(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return pe(e, st) + "";
        if (lt(e))
          return nd ? nd.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ce ? "-0" : n;
      }
      function vn(e, n, i) {
        var l = -1, c = Vi, p = e.length, m = !0, v = [], g = v;
        if (i)
          m = !1, c = gs;
        else if (p >= a) {
          var M = n ? null : _V(e);
          if (M)
            return gi(M);
          m = !1, c = so, g = new xn();
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
        return n = Vn(n, e), e = qd(e, n), e == null || delete e[zt(Rt(n))];
      }
      function kd(e, n, i, l) {
        return Vo(e, n, i(In(e, n)), l);
      }
      function Oi(e, n, i, l) {
        for (var c = e.length, p = l ? c : -1; (l ? p-- : ++p < c) && n(e[p], p, e); )
          ;
        return i ? Ut(e, l ? 0 : p, l ? p + 1 : c) : Ut(e, l ? p + 1 : 0, l ? c : p);
      }
      function Md(e, n) {
        var i = e;
        return i instanceof ee && (i = i.value()), Us(n, function(l, c) {
          return c.func.apply(c.thisArg, fn([l], c.args));
        }, i);
      }
      function Ps(e, n, i) {
        var l = e.length;
        if (l < 2)
          return l ? vn(e[0]) : [];
        for (var c = -1, p = y(l); ++c < l; )
          for (var m = e[c], v = -1; ++v < l; )
            v != c && (p[c] = mo(p[c] || m, e[v], n, i));
        return vn(Be(p, 1), n, i);
      }
      function Zd(e, n, i) {
        for (var l = -1, c = e.length, p = n.length, m = {}; ++l < c; ) {
          var v = l < p ? n[l] : r;
          i(m, e[l], v);
        }
        return m;
      }
      function js(e) {
        return Re(e) ? e : [];
      }
      function Xs(e) {
        return typeof e == "function" ? e : et;
      }
      function Vn(e, n) {
        return j(e) ? e : ol(e, n) ? [e] : nh(ie(e));
      }
      var WV = $;
      function Tn(e, n, i) {
        var l = e.length;
        return i = i === r ? l : i, !n && i >= l ? e : Ut(e, n, i);
      }
      var bd = Uv || function(e) {
        return xe.clearTimeout(e);
      };
      function Jd(e, n) {
        if (n)
          return e.slice();
        var i = e.length, l = Lu ? Lu(i) : new e.constructor(i);
        return e.copy(l), l;
      }
      function Ls(e) {
        var n = new e.constructor(e.byteLength);
        return new Mi(n).set(new Mi(e)), n;
      }
      function CV(e, n) {
        var i = n ? Ls(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function xV(e) {
        var n = new e.constructor(e.source, hu.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function BV(e) {
        return fo ? ue(fo.call(e)) : {};
      }
      function Ed(e, n) {
        var i = n ? Ls(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Sd(e, n) {
        if (e !== n) {
          var i = e !== r, l = e === null, c = e === e, p = lt(e), m = n !== r, v = n === null, g = n === n, M = lt(n);
          if (!v && !M && !p && e > n || p && m && g && !v && !M || l && m && g || !i && g || !c)
            return 1;
          if (!l && !p && !M && e < n || M && i && c && !l && !p || v && i && c || !m && c || !g)
            return -1;
        }
        return 0;
      }
      function IV(e, n, i) {
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
          g === r && (g = e[v]), c ? Xt(i, v, g) : po(i, v, g);
        }
        return i;
      }
      function DV(e, n) {
        return Qt(e, rl(e), n);
      }
      function OV(e, n) {
        return Qt(e, Hd(e), n);
      }
      function Qi(e, n) {
        return function(i, l) {
          var c = j(i) ? Y1 : lV, p = n ? n() : {};
          return c(i, e, G(l, 2), p);
        };
      }
      function vr(e) {
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
      function QV(e, n, i) {
        var l = n & B, c = To(e);
        function p() {
          var m = this && this !== xe && this instanceof p ? c : e;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function xd(e) {
        return function(n) {
          n = ie(n);
          var i = ur(n) ? Jt(n) : r, l = i ? i[0] : n.charAt(0), c = i ? Tn(i, 1).join("") : n.slice(1);
          return l[e]() + c;
        };
      }
      function Vr(e) {
        return function(n) {
          return Us(Wh(Ah(n).replace(S1, "")), e, "");
        };
      }
      function To(e) {
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
          var i = wr(e.prototype), l = e.apply(i, n);
          return we(l) ? l : i;
        };
      }
      function zV(e, n, i) {
        var l = To(e);
        function c() {
          for (var p = arguments.length, m = y(p), v = p, g = Tr(c); v--; )
            m[v] = arguments[v];
          var M = p < 3 && m[0] !== g && m[p - 1] !== g ? [] : pn(m, g);
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
          var Z = this && this !== xe && this instanceof c ? l : e;
          return it(Z, this, m);
        }
        return c;
      }
      function Bd(e) {
        return function(n, i, l) {
          var c = ue(n);
          if (!qe(n)) {
            var p = G(i, 3);
            n = Se(n), i = function(v) {
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
            if (c && !m && Hi(p) == "wrapper")
              var m = new Tt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var v = Hi(p), g = v == "wrapper" ? tl(p) : r;
            g && il(g[0]) && g[1] == (Q | E | b | H) && !g[4].length && g[9] == 1 ? m = m[Hi(g[0])].apply(m, g[3]) : m = p.length == 1 && il(p) ? m[v]() : m.thru(p);
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
        var Z = n & Q, J = n & B, C = n & F, D = n & (E | O), _ = n & me, L = C ? r : To(e);
        function Y() {
          for (var K = arguments.length, te = y(K), ct = K; ct--; )
            te[ct] = arguments[ct];
          if (D)
            var Xe = Tr(Y), ut = ev(te, Xe);
          if (l && (te = Fd(te, l, c, D)), p && (te = Ad(te, p, m, D)), K -= ut, D && K < M) {
            var Ne = pn(te, Xe);
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
          return K = te.length, v ? te = l0(te, v) : _ && K > 1 && te.reverse(), Z && g < K && (te.length = g), this && this !== xe && this instanceof Y && (tn = L || To(tn)), tn.apply(Ft, te);
        }
        return Y;
      }
      function Dd(e, n) {
        return function(i, l) {
          return wV(i, e, n(l), {});
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
            typeof i == "string" || typeof l == "string" ? (i = st(i), l = st(l)) : (i = yd(i), l = yd(l)), c = e(i, l);
          }
          return c;
        };
      }
      function $s(e) {
        return $t(function(n) {
          return n = pe(n, at(G())), $(function(i) {
            var l = this;
            return e(n, function(c) {
              return it(c, l, i);
            });
          });
        });
      }
      function _i(e, n) {
        n = n === r ? " " : st(n);
        var i = n.length;
        if (i < 2)
          return i ? _s(n, e) : n;
        var l = _s(n, Ei(e / dr(n)));
        return ur(n) ? Tn(Jt(l), 0, e).join("") : l.slice(0, e);
      }
      function GV(e, n, i, l) {
        var c = n & B, p = To(e);
        function m() {
          for (var v = -1, g = arguments.length, M = -1, Z = l.length, J = y(Z + g), C = this && this !== xe && this instanceof m ? p : e; ++M < Z; )
            J[M] = l[M];
          for (; g--; )
            J[M++] = arguments[++v];
          return it(C, c ? i : this, J);
        }
        return m;
      }
      function Od(e) {
        return function(n, i, l) {
          return l && typeof l != "number" && je(n, i, l) && (i = l = r), n = en(n), i === r ? (i = n, n = 0) : i = en(i), l = l === r ? n < i ? 1 : -1 : en(l), bV(n, i, l, e);
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
        return il(e) && Kd(Y, L), Y.placeholder = l, eh(Y, e, n);
      }
      function qs(e) {
        var n = be[e];
        return function(i, l) {
          if (i = Nt(i), l = l == null ? 0 : ze(X(l), 292), l && ed(i)) {
            var c = (ie(i) + "e").split("e"), p = n(c[0] + "e" + (+c[1] + l));
            return c = (ie(p) + "e").split("e"), +(c[0] + "e" + (+c[1] - l));
          }
          return n(i);
        };
      }
      var _V = pr && 1 / gi(new pr([, -0]))[1] == Ce ? function(e) {
        return new pr(e);
      } : gl;
      function zd(e) {
        return function(n) {
          var i = Ge(n);
          return i == Zt ? bs(n) : i == bt ? sv(n) : K1(n, e(n));
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
        var C = g ? r : tl(e), D = [
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
        if (C && i0(D, C), e = D[0], n = D[1], i = D[2], l = D[3], c = D[4], v = D[9] = D[9] === r ? g ? 0 : e.length : Je(D[9] - M, 0), !v && n & (E | O) && (n &= ~(E | O)), !n || n == B)
          var _ = QV(e, n, i);
        else
          n == E || n == O ? _ = zV(e, n, v) : (n == b || n == (B | b)) && !c.length ? _ = GV(e, n, i, l) : _ = zi.apply(r, D);
        var L = C ? Rd : Kd;
        return eh(L(_, D), e, n);
      }
      function Gd(e, n, i, l) {
        return e === r || St(e, fr[i]) && !ae.call(l, i) ? n : e;
      }
      function _d(e, n, i, l, c, p) {
        return we(e) && we(n) && (p.set(n, e), Ii(e, n, r, _d, p), p.delete(n)), e;
      }
      function YV(e) {
        return Ro(e) ? r : e;
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
            if (!Rs(n, function(K, te) {
              if (!so(D, te) && (_ === K || c(_, K, i, l, p)))
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
      function HV(e, n, i, l, c, p, m) {
        switch (i) {
          case sr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case ao:
            return !(e.byteLength != n.byteLength || !p(new Mi(e), new Mi(n)));
          case eo:
          case to:
          case no:
            return St(+e, +n);
          case hi:
            return e.name == n.name && e.message == n.message;
          case ro:
          case oo:
            return e == n + "";
          case Zt:
            var v = bs;
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
            if (fo)
              return fo.call(e) == fo.call(n);
        }
        return !1;
      }
      function PV(e, n, i, l, c, p) {
        var m = i & S, v = Ks(e), g = v.length, M = Ks(n), Z = M.length;
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
            var ct = m ? l(te, K, C, n, e, p) : l(K, te, C, e, n, p);
          if (!(ct === r ? K === te || c(K, te, i, l, p) : ct)) {
            L = !1;
            break;
          }
          Y || (Y = C == "constructor");
        }
        if (L && !Y) {
          var Xe = e.constructor, ut = n.constructor;
          Xe != ut && "constructor" in e && "constructor" in n && !(typeof Xe == "function" && Xe instanceof Xe && typeof ut == "function" && ut instanceof ut) && (L = !1);
        }
        return p.delete(e), p.delete(n), L;
      }
      function $t(e) {
        return sl($d(e, r, ah), e + "");
      }
      function Ks(e) {
        return dd(e, Se, rl);
      }
      function el(e) {
        return dd(e, Ke, Hd);
      }
      var tl = Fi ? function(e) {
        return Fi.get(e);
      } : gl;
      function Hi(e) {
        for (var n = e.name + "", i = mr[n], l = ae.call(mr, n) ? i.length : 0; l--; ) {
          var c = i[l], p = c.func;
          if (p == null || p == e)
            return c.name;
        }
        return n;
      }
      function Tr(e) {
        var n = ae.call(f, "placeholder") ? f : e;
        return n.placeholder;
      }
      function G() {
        var e = f.iteratee || Vl;
        return e = e === Vl ? pd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Pi(e, n) {
        var i = e.__data__;
        return t0(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function nl(e) {
        for (var n = Se(e), i = n.length; i--; ) {
          var l = n[i], c = e[l];
          n[i] = [l, c, Xd(c)];
        }
        return n;
      }
      function Dn(e, n) {
        var i = ov(e, n);
        return fd(i) ? i : r;
      }
      function jV(e) {
        var n = ae.call(e, Wn), i = e[Wn];
        try {
          e[Wn] = r;
          var l = !0;
        } catch {
        }
        var c = yi.call(e);
        return l && (n ? e[Wn] = i : delete e[Wn]), c;
      }
      var rl = Es ? function(e) {
        return e == null ? [] : (e = ue(e), hn(Es(e), function(n) {
          return qu.call(e, n);
        }));
      } : Ul, Hd = Es ? function(e) {
        for (var n = []; e; )
          fn(n, rl(e)), e = Zi(e);
        return n;
      } : Ul, Ge = Pe;
      (Ss && Ge(new Ss(new ArrayBuffer(1))) != sr || co && Ge(new co()) != Zt || Fs && Ge(Fs.resolve()) != lu || pr && Ge(new pr()) != bt || uo && Ge(new uo()) != io) && (Ge = function(e) {
        var n = Pe(e), i = n == Ht ? e.constructor : r, l = i ? On(i) : "";
        if (l)
          switch (l) {
            case Ev:
              return sr;
            case Sv:
              return Zt;
            case Fv:
              return lu;
            case Av:
              return bt;
            case Wv:
              return io;
          }
        return n;
      });
      function XV(e, n, i) {
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
      function LV(e) {
        var n = e.match(n1);
        return n ? n[1].split(r1) : [];
      }
      function Pd(e, n, i) {
        n = Vn(n, e);
        for (var l = -1, c = n.length, p = !1; ++l < c; ) {
          var m = zt(n[l]);
          if (!(p = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return p || ++l != c ? p : (c = e == null ? 0 : e.length, !!c && ea(c) && qt(m, c) && (j(e) || Qn(e)));
      }
      function $V(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && ae.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function jd(e) {
        return typeof e.constructor == "function" && !go(e) ? wr(Zi(e)) : {};
      }
      function qV(e, n, i) {
        var l = e.constructor;
        switch (n) {
          case ao:
            return Ls(e);
          case eo:
          case to:
            return new l(+e);
          case sr:
            return CV(e, i);
          case ns:
          case rs:
          case os:
          case is:
          case as:
          case ss:
          case ls:
          case cs:
          case us:
            return Ed(e, i);
          case Zt:
            return new l();
          case no:
          case oo:
            return new l(e);
          case ro:
            return xV(e);
          case bt:
            return new l();
          case pi:
            return BV(e);
        }
      }
      function KV(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), e.replace(t1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function e0(e) {
        return j(e) || Qn(e) || !!(Ku && e && e[Ku]);
      }
      function qt(e, n) {
        var i = typeof e;
        return n = n == null ? He : n, !!n && (i == "number" || i != "symbol" && h1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function je(e, n, i) {
        if (!we(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? qe(i) && qt(n, i.length) : l == "string" && n in i) ? St(i[n], e) : !1;
      }
      function ol(e, n) {
        if (j(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || lt(e) ? !0 : $w.test(e) || !Lw.test(e) || n != null && e in ue(n);
      }
      function t0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function il(e) {
        var n = Hi(e), i = f[n];
        if (typeof i != "function" || !(n in ee.prototype))
          return !1;
        if (e === i)
          return !0;
        var l = tl(i);
        return !!l && e === l[0];
      }
      function n0(e) {
        return !!Xu && Xu in e;
      }
      var r0 = Ri ? Kt : Rl;
      function go(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || fr;
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
      function o0(e) {
        var n = qi(e, function(l) {
          return i.size === U && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function i0(e, n) {
        var i = e[1], l = n[1], c = i | l, p = c < (B | F | Q), m = l == Q && i == E || l == Q && i == H && e[7].length <= n[8] || l == (Q | H) && n[7].length <= n[8] && i == E;
        if (!(p || m))
          return e;
        l & B && (e[2] = n[2], c |= i & B ? 0 : W);
        var v = n[3];
        if (v) {
          var g = e[3];
          e[3] = g ? Fd(g, v, n[4]) : v, e[4] = g ? pn(e[3], V) : n[4];
        }
        return v = n[5], v && (g = e[5], e[5] = g ? Ad(g, v, n[6]) : v, e[6] = g ? pn(e[5], V) : n[6]), v = n[7], v && (e[7] = v), l & Q && (e[8] = e[8] == null ? n[8] : ze(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function a0(e) {
        var n = [];
        if (e != null)
          for (var i in ue(e))
            n.push(i);
        return n;
      }
      function s0(e) {
        return yi.call(e);
      }
      function $d(e, n, i) {
        return n = Je(n === r ? e.length - 1 : n, 0), function() {
          for (var l = arguments, c = -1, p = Je(l.length - n, 0), m = y(p); ++c < p; )
            m[c] = l[n + c];
          c = -1;
          for (var v = y(n + 1); ++c < n; )
            v[c] = l[c];
          return v[n] = i(m), it(e, this, v);
        };
      }
      function qd(e, n) {
        return n.length < 2 ? e : In(e, Ut(n, 0, -1));
      }
      function l0(e, n) {
        for (var i = e.length, l = ze(n.length, i), c = $e(e); l--; ) {
          var p = n[l];
          e[l] = qt(p, i) ? c[p] : r;
        }
        return e;
      }
      function al(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Kd = th(Rd), Uo = Nv || function(e, n) {
        return xe.setTimeout(e, n);
      }, sl = th(SV);
      function eh(e, n, i) {
        var l = n + "";
        return sl(e, KV(l, c0(LV(l), i)));
      }
      function th(e) {
        var n = 0, i = 0;
        return function() {
          var l = Zv(), c = Ue - (l - i);
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
          var p = Gs(i, c), m = e[p];
          e[p] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var nh = o0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(qw, function(i, l, c, p) {
          n.push(c ? p.replace(a1, "$1") : l || i);
        }), n;
      });
      function zt(e) {
        if (typeof e == "string" || lt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ce ? "-0" : n;
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
      function c0(e, n) {
        return vt(xw, function(i) {
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
      function u0(e, n, i) {
        (i ? je(e, n, i) : n === r) ? n = 1 : n = Je(X(n), 0);
        var l = e == null ? 0 : e.length;
        if (!l || n < 1)
          return [];
        for (var c = 0, p = 0, m = y(Ei(l / n)); c < l; )
          m[p++] = Ut(e, c, c += n);
        return m;
      }
      function d0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = 0, c = []; ++n < i; ) {
          var p = e[n];
          p && (c[l++] = p);
        }
        return c;
      }
      function h0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = y(e - 1), i = arguments[0], l = e; l--; )
          n[l - 1] = arguments[l];
        return fn(j(i) ? $e(i) : [i], Be(n, 1));
      }
      var f0 = $(function(e, n) {
        return Re(e) ? mo(e, Be(n, 1, Re, !0)) : [];
      }), p0 = $(function(e, n) {
        var i = Rt(n);
        return Re(i) && (i = r), Re(e) ? mo(e, Be(n, 1, Re, !0), G(i, 2)) : [];
      }), m0 = $(function(e, n) {
        var i = Rt(n);
        return Re(i) && (i = r), Re(e) ? mo(e, Be(n, 1, Re, !0), r, i) : [];
      });
      function w0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), Ut(e, n < 0 ? 0 : n, l)) : [];
      }
      function v0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ut(e, 0, n < 0 ? 0 : n)) : [];
      }
      function V0(e, n) {
        return e && e.length ? Oi(e, G(n, 3), !0, !0) : [];
      }
      function T0(e, n) {
        return e && e.length ? Oi(e, G(n, 3), !0) : [];
      }
      function g0(e, n, i, l) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && je(e, n, i) && (i = 0, l = c), hV(e, n, i, l)) : [];
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
        return n ? Be(e, 1) : [];
      }
      function U0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Be(e, Ce) : [];
      }
      function R0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : X(n), Be(e, n)) : [];
      }
      function N0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, l = {}; ++n < i; ) {
          var c = e[n];
          l[c[0]] = c[1];
        }
        return l;
      }
      function sh(e) {
        return e && e.length ? e[0] : r;
      }
      function y0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = i == null ? 0 : X(i);
        return c < 0 && (c = Je(l + c, 0)), cr(e, n, c);
      }
      function k0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ut(e, 0, -1) : [];
      }
      var M0 = $(function(e) {
        var n = pe(e, js);
        return n.length && n[0] === e[0] ? Is(n) : [];
      }), Z0 = $(function(e) {
        var n = Rt(e), i = pe(e, js);
        return n === Rt(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Is(i, G(n, 2)) : [];
      }), b0 = $(function(e) {
        var n = Rt(e), i = pe(e, js);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Is(i, r, n) : [];
      });
      function J0(e, n) {
        return e == null ? "" : kv.call(e, n);
      }
      function Rt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function E0(e, n, i) {
        var l = e == null ? 0 : e.length;
        if (!l)
          return -1;
        var c = l;
        return i !== r && (c = X(i), c = c < 0 ? Je(l + c, 0) : ze(c, l - 1)), n === n ? cv(e, n, c) : Ti(e, Qu, c, !0);
      }
      function S0(e, n) {
        return e && e.length ? Vd(e, X(n)) : r;
      }
      var F0 = $(lh);
      function lh(e, n) {
        return e && e.length && n && n.length ? zs(e, n) : e;
      }
      function A0(e, n, i) {
        return e && e.length && n && n.length ? zs(e, n, G(i, 2)) : e;
      }
      function W0(e, n, i) {
        return e && e.length && n && n.length ? zs(e, n, r, i) : e;
      }
      var C0 = $t(function(e, n) {
        var i = e == null ? 0 : e.length, l = Ws(e, n);
        return Ud(e, pe(n, function(c) {
          return qt(c, i) ? +c : c;
        }).sort(Sd)), l;
      });
      function x0(e, n) {
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
      function ll(e) {
        return e == null ? e : Jv.call(e);
      }
      function B0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (i && typeof i != "number" && je(e, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === r ? l : X(i)), Ut(e, n, i)) : [];
      }
      function I0(e, n) {
        return Di(e, n);
      }
      function D0(e, n, i) {
        return Ys(e, n, G(i, 2));
      }
      function O0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Di(e, n);
          if (l < i && St(e[l], n))
            return l;
        }
        return -1;
      }
      function Q0(e, n) {
        return Di(e, n, !0);
      }
      function z0(e, n, i) {
        return Ys(e, n, G(i, 2), !0);
      }
      function G0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var l = Di(e, n, !0) - 1;
          if (St(e[l], n))
            return l;
        }
        return -1;
      }
      function _0(e) {
        return e && e.length ? Nd(e) : [];
      }
      function Y0(e, n) {
        return e && e.length ? Nd(e, G(n, 2)) : [];
      }
      function H0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ut(e, 1, n) : [];
      }
      function P0(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : X(n), Ut(e, 0, n < 0 ? 0 : n)) : [];
      }
      function j0(e, n, i) {
        var l = e == null ? 0 : e.length;
        return l ? (n = i || n === r ? 1 : X(n), n = l - n, Ut(e, n < 0 ? 0 : n, l)) : [];
      }
      function X0(e, n) {
        return e && e.length ? Oi(e, G(n, 3), !1, !0) : [];
      }
      function L0(e, n) {
        return e && e.length ? Oi(e, G(n, 3)) : [];
      }
      var $0 = $(function(e) {
        return vn(Be(e, 1, Re, !0));
      }), q0 = $(function(e) {
        var n = Rt(e);
        return Re(n) && (n = r), vn(Be(e, 1, Re, !0), G(n, 2));
      }), K0 = $(function(e) {
        var n = Rt(e);
        return n = typeof n == "function" ? n : r, vn(Be(e, 1, Re, !0), r, n);
      });
      function eT(e) {
        return e && e.length ? vn(e) : [];
      }
      function tT(e, n) {
        return e && e.length ? vn(e, G(n, 2)) : [];
      }
      function nT(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? vn(e, r, n) : [];
      }
      function cl(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = hn(e, function(i) {
          if (Re(i))
            return n = Je(i.length, n), !0;
        }), Ms(n, function(i) {
          return pe(e, Ns(i));
        });
      }
      function ch(e, n) {
        if (!(e && e.length))
          return [];
        var i = cl(e);
        return n == null ? i : pe(i, function(l) {
          return it(n, r, l);
        });
      }
      var rT = $(function(e, n) {
        return Re(e) ? mo(e, n) : [];
      }), oT = $(function(e) {
        return Ps(hn(e, Re));
      }), iT = $(function(e) {
        var n = Rt(e);
        return Re(n) && (n = r), Ps(hn(e, Re), G(n, 2));
      }), aT = $(function(e) {
        var n = Rt(e);
        return n = typeof n == "function" ? n : r, Ps(hn(e, Re), r, n);
      }), sT = $(cl);
      function lT(e, n) {
        return Zd(e || [], n || [], po);
      }
      function cT(e, n) {
        return Zd(e || [], n || [], Vo);
      }
      var uT = $(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, ch(e, i);
      });
      function uh(e) {
        var n = f(e);
        return n.__chain__ = !0, n;
      }
      function dT(e, n) {
        return n(e), e;
      }
      function Xi(e, n) {
        return n(e);
      }
      var hT = $t(function(e) {
        var n = e.length, i = n ? e[0] : 0, l = this.__wrapped__, c = function(p) {
          return Ws(p, e);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ee) || !qt(i) ? this.thru(c) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Xi,
          args: [c],
          thisArg: r
        }), new Tt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function fT() {
        return uh(this);
      }
      function pT() {
        return new Tt(this.value(), this.__chain__);
      }
      function mT() {
        this.__values__ === r && (this.__values__ = yh(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function wT() {
        return this;
      }
      function vT(e) {
        for (var n, i = this; i instanceof Wi; ) {
          var l = rh(i);
          l.__index__ = 0, l.__values__ = r, n ? c.__wrapped__ = l : n = l;
          var c = l;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function VT() {
        var e = this.__wrapped__;
        if (e instanceof ee) {
          var n = e;
          return this.__actions__.length && (n = new ee(this)), n = n.reverse(), n.__actions__.push({
            func: Xi,
            args: [ll],
            thisArg: r
          }), new Tt(n, this.__chain__);
        }
        return this.thru(ll);
      }
      function TT() {
        return Md(this.__wrapped__, this.__actions__);
      }
      var gT = Qi(function(e, n, i) {
        ae.call(e, i) ? ++e[i] : Xt(e, i, 1);
      });
      function UT(e, n, i) {
        var l = j(e) ? Du : dV;
        return i && je(e, n, i) && (n = r), l(e, G(n, 3));
      }
      function RT(e, n) {
        var i = j(e) ? hn : cd;
        return i(e, G(n, 3));
      }
      var NT = Bd(oh), yT = Bd(ih);
      function kT(e, n) {
        return Be(Li(e, n), 1);
      }
      function MT(e, n) {
        return Be(Li(e, n), Ce);
      }
      function ZT(e, n, i) {
        return i = i === r ? 1 : X(i), Be(Li(e, n), i);
      }
      function dh(e, n) {
        var i = j(e) ? vt : wn;
        return i(e, G(n, 3));
      }
      function hh(e, n) {
        var i = j(e) ? H1 : ld;
        return i(e, G(n, 3));
      }
      var bT = Qi(function(e, n, i) {
        ae.call(e, i) ? e[i].push(n) : Xt(e, i, [n]);
      });
      function JT(e, n, i, l) {
        e = qe(e) ? e : Ur(e), i = i && !l ? X(i) : 0;
        var c = e.length;
        return i < 0 && (i = Je(c + i, 0)), ta(e) ? i <= c && e.indexOf(n, i) > -1 : !!c && cr(e, n, i) > -1;
      }
      var ET = $(function(e, n, i) {
        var l = -1, c = typeof n == "function", p = qe(e) ? y(e.length) : [];
        return wn(e, function(m) {
          p[++l] = c ? it(n, m, i) : wo(m, n, i);
        }), p;
      }), ST = Qi(function(e, n, i) {
        Xt(e, i, n);
      });
      function Li(e, n) {
        var i = j(e) ? pe : md;
        return i(e, G(n, 3));
      }
      function FT(e, n, i, l) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = l ? r : i, j(i) || (i = i == null ? [] : [i]), Td(e, n, i));
      }
      var AT = Qi(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function WT(e, n, i) {
        var l = j(e) ? Us : Gu, c = arguments.length < 3;
        return l(e, G(n, 4), i, c, wn);
      }
      function CT(e, n, i) {
        var l = j(e) ? P1 : Gu, c = arguments.length < 3;
        return l(e, G(n, 4), i, c, ld);
      }
      function xT(e, n) {
        var i = j(e) ? hn : cd;
        return i(e, Ki(G(n, 3)));
      }
      function BT(e) {
        var n = j(e) ? od : JV;
        return n(e);
      }
      function IT(e, n, i) {
        (i ? je(e, n, i) : n === r) ? n = 1 : n = X(n);
        var l = j(e) ? aV : EV;
        return l(e, n);
      }
      function DT(e) {
        var n = j(e) ? sV : FV;
        return n(e);
      }
      function OT(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return ta(e) ? dr(e) : e.length;
        var n = Ge(e);
        return n == Zt || n == bt ? e.size : Os(e).length;
      }
      function QT(e, n, i) {
        var l = j(e) ? Rs : AV;
        return i && je(e, n, i) && (n = r), l(e, G(n, 3));
      }
      var zT = $(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && je(e, n[0], n[1]) ? n = [] : i > 2 && je(n[0], n[1], n[2]) && (n = [n[0]]), Td(e, Be(n, 1), []);
      }), $i = Rv || function() {
        return xe.Date.now();
      };
      function GT(e, n) {
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
      var ul = $(function(e, n, i) {
        var l = B;
        if (i.length) {
          var c = pn(i, Tr(ul));
          l |= b;
        }
        return Lt(e, l, n, i, c);
      }), mh = $(function(e, n, i) {
        var l = B | F;
        if (i.length) {
          var c = pn(i, Tr(mh));
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
          return M = Ne, v = Uo(K, n), Z ? D(Ne) : m;
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
          v = Uo(K, L(Ne));
        }
        function te(Ne) {
          return v = r, C && l ? D(Ne) : (l = c = r, m);
        }
        function ct() {
          v !== r && bd(v), M = 0, l = g = c = v = r;
        }
        function Xe() {
          return v === r ? m : te($i());
        }
        function ut() {
          var Ne = $i(), Ft = Y(Ne);
          if (l = arguments, c = this, g = Ne, Ft) {
            if (v === r)
              return _(g);
            if (J)
              return bd(v), v = Uo(K, n), D(g);
          }
          return v === r && (v = Uo(K, n)), m;
        }
        return ut.cancel = ct, ut.flush = Xe, ut;
      }
      var _T = $(function(e, n) {
        return sd(e, 1, n);
      }), YT = $(function(e, n, i) {
        return sd(e, Nt(n) || 0, i);
      });
      function HT(e) {
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
      function PT(e) {
        return ph(2, e);
      }
      var jT = WV(function(e, n) {
        n = n.length == 1 && j(n[0]) ? pe(n[0], at(G())) : pe(Be(n, 1), at(G()));
        var i = n.length;
        return $(function(l) {
          for (var c = -1, p = ze(l.length, i); ++c < p; )
            l[c] = n[c].call(this, l[c]);
          return it(e, this, l);
        });
      }), dl = $(function(e, n) {
        var i = pn(n, Tr(dl));
        return Lt(e, b, r, n, i);
      }), Th = $(function(e, n) {
        var i = pn(n, Tr(Th));
        return Lt(e, z, r, n, i);
      }), XT = $t(function(e, n) {
        return Lt(e, H, r, r, r, n);
      });
      function LT(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n === r ? n : X(n), $(e, n);
      }
      function $T(e, n) {
        if (typeof e != "function")
          throw new Vt(d);
        return n = n == null ? 0 : Je(X(n), 0), $(function(i) {
          var l = i[n], c = Tn(i, 0, n);
          return l && fn(c, l), it(e, this, c);
        });
      }
      function qT(e, n, i) {
        var l = !0, c = !0;
        if (typeof e != "function")
          throw new Vt(d);
        return we(i) && (l = "leading" in i ? !!i.leading : l, c = "trailing" in i ? !!i.trailing : c), Vh(e, n, {
          leading: l,
          maxWait: n,
          trailing: c
        });
      }
      function KT(e) {
        return fh(e, 1);
      }
      function eg(e, n) {
        return dl(Xs(n), e);
      }
      function tg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function ng(e) {
        return gt(e, A);
      }
      function rg(e, n) {
        return n = typeof n == "function" ? n : r, gt(e, A, n);
      }
      function og(e) {
        return gt(e, R | A);
      }
      function ig(e, n) {
        return n = typeof n == "function" ? n : r, gt(e, R | A, n);
      }
      function ag(e, n) {
        return n == null || ad(e, n, Se(n));
      }
      function St(e, n) {
        return e === n || e !== e && n !== n;
      }
      var sg = Yi(Bs), lg = Yi(function(e, n) {
        return e >= n;
      }), Qn = hd(function() {
        return arguments;
      }()) ? hd : function(e) {
        return Te(e) && ae.call(e, "callee") && !qu.call(e, "callee");
      }, j = y.isArray, cg = Au ? at(Au) : vV;
      function qe(e) {
        return e != null && ea(e.length) && !Kt(e);
      }
      function Re(e) {
        return Te(e) && qe(e);
      }
      function ug(e) {
        return e === !0 || e === !1 || Te(e) && Pe(e) == eo;
      }
      var gn = yv || Rl, dg = Wu ? at(Wu) : VV;
      function hg(e) {
        return Te(e) && e.nodeType === 1 && !Ro(e);
      }
      function fg(e) {
        if (e == null)
          return !0;
        if (qe(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || gn(e) || gr(e) || Qn(e)))
          return !e.length;
        var n = Ge(e);
        if (n == Zt || n == bt)
          return !e.size;
        if (go(e))
          return !Os(e).length;
        for (var i in e)
          if (ae.call(e, i))
            return !1;
        return !0;
      }
      function pg(e, n) {
        return vo(e, n);
      }
      function mg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(e, n) : r;
        return l === r ? vo(e, n, r, i) : !!l;
      }
      function hl(e) {
        if (!Te(e))
          return !1;
        var n = Pe(e);
        return n == hi || n == Iw || typeof e.message == "string" && typeof e.name == "string" && !Ro(e);
      }
      function wg(e) {
        return typeof e == "number" && ed(e);
      }
      function Kt(e) {
        if (!we(e))
          return !1;
        var n = Pe(e);
        return n == fi || n == su || n == Bw || n == Ow;
      }
      function gh(e) {
        return typeof e == "number" && e == X(e);
      }
      function ea(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= He;
      }
      function we(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Te(e) {
        return e != null && typeof e == "object";
      }
      var Uh = Cu ? at(Cu) : gV;
      function vg(e, n) {
        return e === n || Ds(e, n, nl(n));
      }
      function Vg(e, n, i) {
        return i = typeof i == "function" ? i : r, Ds(e, n, nl(n), i);
      }
      function Tg(e) {
        return Rh(e) && e != +e;
      }
      function gg(e) {
        if (r0(e))
          throw new P(u);
        return fd(e);
      }
      function Ug(e) {
        return e === null;
      }
      function Rg(e) {
        return e == null;
      }
      function Rh(e) {
        return typeof e == "number" || Te(e) && Pe(e) == no;
      }
      function Ro(e) {
        if (!Te(e) || Pe(e) != Ht)
          return !1;
        var n = Zi(e);
        if (n === null)
          return !0;
        var i = ae.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Ni.call(i) == Vv;
      }
      var fl = xu ? at(xu) : UV;
      function Ng(e) {
        return gh(e) && e >= -He && e <= He;
      }
      var Nh = Bu ? at(Bu) : RV;
      function ta(e) {
        return typeof e == "string" || !j(e) && Te(e) && Pe(e) == oo;
      }
      function lt(e) {
        return typeof e == "symbol" || Te(e) && Pe(e) == pi;
      }
      var gr = Iu ? at(Iu) : NV;
      function yg(e) {
        return e === r;
      }
      function kg(e) {
        return Te(e) && Ge(e) == io;
      }
      function Mg(e) {
        return Te(e) && Pe(e) == zw;
      }
      var Zg = Yi(Qs), bg = Yi(function(e, n) {
        return e <= n;
      });
      function yh(e) {
        if (!e)
          return [];
        if (qe(e))
          return ta(e) ? Jt(e) : $e(e);
        if (lo && e[lo])
          return av(e[lo]());
        var n = Ge(e), i = n == Zt ? bs : n == bt ? gi : Ur;
        return i(e);
      }
      function en(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Nt(e), e === Ce || e === -Ce) {
          var n = e < 0 ? -1 : 1;
          return n * Kr;
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
        if (lt(e))
          return ui;
        if (we(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = we(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = _u(e);
        var i = c1.test(e);
        return i || d1.test(e) ? G1(e.slice(2), i ? 2 : 8) : l1.test(e) ? ui : +e;
      }
      function Mh(e) {
        return Qt(e, Ke(e));
      }
      function Jg(e) {
        return e ? Bn(X(e), -He, He) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : st(e);
      }
      var Eg = vr(function(e, n) {
        if (go(n) || qe(n)) {
          Qt(n, Se(n), e);
          return;
        }
        for (var i in n)
          ae.call(n, i) && po(e, i, n[i]);
      }), Zh = vr(function(e, n) {
        Qt(n, Ke(n), e);
      }), na = vr(function(e, n, i, l) {
        Qt(n, Ke(n), e, l);
      }), Sg = vr(function(e, n, i, l) {
        Qt(n, Se(n), e, l);
      }), Fg = $t(Ws);
      function Ag(e, n) {
        var i = wr(e);
        return n == null ? i : id(i, n);
      }
      var Wg = $(function(e, n) {
        e = ue(e);
        var i = -1, l = n.length, c = l > 2 ? n[2] : r;
        for (c && je(n[0], n[1], c) && (l = 1); ++i < l; )
          for (var p = n[i], m = Ke(p), v = -1, g = m.length; ++v < g; ) {
            var M = m[v], Z = e[M];
            (Z === r || St(Z, fr[M]) && !ae.call(e, M)) && (e[M] = p[M]);
          }
        return e;
      }), Cg = $(function(e) {
        return e.push(r, _d), it(bh, r, e);
      });
      function xg(e, n) {
        return Ou(e, G(n, 3), Ot);
      }
      function Bg(e, n) {
        return Ou(e, G(n, 3), xs);
      }
      function Ig(e, n) {
        return e == null ? e : Cs(e, G(n, 3), Ke);
      }
      function Dg(e, n) {
        return e == null ? e : ud(e, G(n, 3), Ke);
      }
      function Og(e, n) {
        return e && Ot(e, G(n, 3));
      }
      function Qg(e, n) {
        return e && xs(e, G(n, 3));
      }
      function zg(e) {
        return e == null ? [] : Bi(e, Se(e));
      }
      function Gg(e) {
        return e == null ? [] : Bi(e, Ke(e));
      }
      function pl(e, n, i) {
        var l = e == null ? r : In(e, n);
        return l === r ? i : l;
      }
      function _g(e, n) {
        return e != null && Pd(e, n, fV);
      }
      function ml(e, n) {
        return e != null && Pd(e, n, pV);
      }
      var Yg = Dd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = yi.call(n)), e[n] = i;
      }, vl(et)), Hg = Dd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = yi.call(n)), ae.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, G), Pg = $(wo);
      function Se(e) {
        return qe(e) ? rd(e) : Os(e);
      }
      function Ke(e) {
        return qe(e) ? rd(e, !0) : yV(e);
      }
      function jg(e, n) {
        var i = {};
        return n = G(n, 3), Ot(e, function(l, c, p) {
          Xt(i, n(l, c, p), l);
        }), i;
      }
      function Xg(e, n) {
        var i = {};
        return n = G(n, 3), Ot(e, function(l, c, p) {
          Xt(i, c, n(l, c, p));
        }), i;
      }
      var Lg = vr(function(e, n, i) {
        Ii(e, n, i);
      }), bh = vr(function(e, n, i, l) {
        Ii(e, n, i, l);
      }), $g = $t(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var l = !1;
        n = pe(n, function(p) {
          return p = Vn(p, e), l || (l = p.length > 1), p;
        }), Qt(e, el(e), i), l && (i = gt(i, R | N | A, YV));
        for (var c = n.length; c--; )
          Hs(i, n[c]);
        return i;
      });
      function qg(e, n) {
        return Jh(e, Ki(G(n)));
      }
      var Kg = $t(function(e, n) {
        return e == null ? {} : MV(e, n);
      });
      function Jh(e, n) {
        if (e == null)
          return {};
        var i = pe(el(e), function(l) {
          return [l];
        });
        return n = G(n), gd(e, i, function(l, c) {
          return n(l, c[0]);
        });
      }
      function eU(e, n, i) {
        n = Vn(n, e);
        var l = -1, c = n.length;
        for (c || (c = 1, e = r); ++l < c; ) {
          var p = e == null ? r : e[zt(n[l])];
          p === r && (l = c, p = i), e = Kt(p) ? p.call(e) : p;
        }
        return e;
      }
      function tU(e, n, i) {
        return e == null ? e : Vo(e, n, i);
      }
      function nU(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : Vo(e, n, i, l);
      }
      var Eh = zd(Se), Sh = zd(Ke);
      function rU(e, n, i) {
        var l = j(e), c = l || gn(e) || gr(e);
        if (n = G(n, 4), i == null) {
          var p = e && e.constructor;
          c ? i = l ? new p() : [] : we(e) ? i = Kt(p) ? wr(Zi(e)) : {} : i = {};
        }
        return (c ? vt : Ot)(e, function(m, v, g) {
          return n(i, m, v, g);
        }), i;
      }
      function oU(e, n) {
        return e == null ? !0 : Hs(e, n);
      }
      function iU(e, n, i) {
        return e == null ? e : kd(e, n, Xs(i));
      }
      function aU(e, n, i, l) {
        return l = typeof l == "function" ? l : r, e == null ? e : kd(e, n, Xs(i), l);
      }
      function Ur(e) {
        return e == null ? [] : Zs(e, Se(e));
      }
      function sU(e) {
        return e == null ? [] : Zs(e, Ke(e));
      }
      function lU(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Nt(i), i = i === i ? i : 0), n !== r && (n = Nt(n), n = n === n ? n : 0), Bn(Nt(e), n, i);
      }
      function cU(e, n, i) {
        return n = en(n), i === r ? (i = n, n = 0) : i = en(i), e = Nt(e), mV(e, n, i);
      }
      function uU(e, n, i) {
        if (i && typeof i != "boolean" && je(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = en(e), n === r ? (n = e, e = 0) : n = en(n)), e > n) {
          var l = e;
          e = n, n = l;
        }
        if (i || e % 1 || n % 1) {
          var c = td();
          return ze(e + c * (n - e + z1("1e-" + ((c + "").length - 1))), n);
        }
        return Gs(e, n);
      }
      var dU = Vr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? Fh(n) : n);
      });
      function Fh(e) {
        return wl(ie(e).toLowerCase());
      }
      function Ah(e) {
        return e = ie(e), e && e.replace(f1, tv).replace(F1, "");
      }
      function hU(e, n, i) {
        e = ie(e), n = st(n);
        var l = e.length;
        i = i === r ? l : Bn(X(i), 0, l);
        var c = i;
        return i -= n.length, i >= 0 && e.slice(i, c) == n;
      }
      function fU(e) {
        return e = ie(e), e && Pw.test(e) ? e.replace(uu, nv) : e;
      }
      function pU(e) {
        return e = ie(e), e && Kw.test(e) ? e.replace(ds, "\\$&") : e;
      }
      var mU = Vr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), wU = Vr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), vU = xd("toLowerCase");
      function VU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? dr(e) : 0;
        if (!n || l >= n)
          return e;
        var c = (n - l) / 2;
        return _i(Si(c), i) + e + _i(Ei(c), i);
      }
      function TU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? dr(e) : 0;
        return n && l < n ? e + _i(n - l, i) : e;
      }
      function gU(e, n, i) {
        e = ie(e), n = X(n);
        var l = n ? dr(e) : 0;
        return n && l < n ? _i(n - l, i) + e : e;
      }
      function UU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), bv(ie(e).replace(hs, ""), n || 0);
      }
      function RU(e, n, i) {
        return (i ? je(e, n, i) : n === r) ? n = 1 : n = X(n), _s(ie(e), n);
      }
      function NU() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var yU = Vr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function kU(e, n, i) {
        return i && typeof i != "number" && je(e, n, i) && (n = i = r), i = i === r ? Dt : i >>> 0, i ? (e = ie(e), e && (typeof n == "string" || n != null && !fl(n)) && (n = st(n), !n && ur(e)) ? Tn(Jt(e), 0, i) : e.split(n, i)) : [];
      }
      var MU = Vr(function(e, n, i) {
        return e + (i ? " " : "") + wl(n);
      });
      function ZU(e, n, i) {
        return e = ie(e), i = i == null ? 0 : Bn(X(i), 0, e.length), n = st(n), e.slice(i, i + n.length) == n;
      }
      function bU(e, n, i) {
        var l = f.templateSettings;
        i && je(e, n, i) && (n = r), e = ie(e), n = na({}, n, l, Gd);
        var c = na({}, n.imports, l.imports, Gd), p = Se(c), m = Zs(c, p), v, g, M = 0, Z = n.interpolate || mi, J = "__p += '", C = Js(
          (n.escape || mi).source + "|" + Z.source + "|" + (Z === du ? s1 : mi).source + "|" + (n.evaluate || mi).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (ae.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++B1 + "]") + `
`;
        e.replace(C, function(Y, K, te, ct, Xe, ut) {
          return te || (te = ct), J += e.slice(M, ut).replace(p1, rv), K && (v = !0, J += `' +
__e(` + K + `) +
'`), Xe && (g = !0, J += `';
` + Xe + `;
__p += '`), te && (J += `' +
((__t = (` + te + `)) == null ? '' : __t) +
'`), M = ut + Y.length, Y;
        }), J += `';
`;
        var _ = ae.call(n, "variable") && n.variable;
        if (!_)
          J = `with (obj) {
` + J + `
}
`;
        else if (i1.test(_))
          throw new P(h);
        J = (g ? J.replace(Gw, "") : J).replace(_w, "$1").replace(Yw, "$1;"), J = "function(" + (_ || "obj") + `) {
` + (_ ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var L = Ch(function() {
          return re(p, D + "return " + J).apply(r, m);
        });
        if (L.source = J, hl(L))
          throw L;
        return L;
      }
      function JU(e) {
        return ie(e).toLowerCase();
      }
      function EU(e) {
        return ie(e).toUpperCase();
      }
      function SU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return _u(e);
        if (!e || !(n = st(n)))
          return e;
        var l = Jt(e), c = Jt(n), p = Yu(l, c), m = Hu(l, c) + 1;
        return Tn(l, p, m).join("");
      }
      function FU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.slice(0, ju(e) + 1);
        if (!e || !(n = st(n)))
          return e;
        var l = Jt(e), c = Hu(l, Jt(n)) + 1;
        return Tn(l, 0, c).join("");
      }
      function AU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.replace(hs, "");
        if (!e || !(n = st(n)))
          return e;
        var l = Jt(e), c = Yu(l, Jt(n));
        return Tn(l, c).join("");
      }
      function WU(e, n) {
        var i = de, l = ve;
        if (we(n)) {
          var c = "separator" in n ? n.separator : c;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? st(n.omission) : l;
        }
        e = ie(e);
        var p = e.length;
        if (ur(e)) {
          var m = Jt(e);
          p = m.length;
        }
        if (i >= p)
          return e;
        var v = i - dr(l);
        if (v < 1)
          return l;
        var g = m ? Tn(m, 0, v).join("") : e.slice(0, v);
        if (c === r)
          return g + l;
        if (m && (v += g.length - v), fl(c)) {
          if (e.slice(v).search(c)) {
            var M, Z = g;
            for (c.global || (c = Js(c.source, ie(hu.exec(c)) + "g")), c.lastIndex = 0; M = c.exec(Z); )
              var J = M.index;
            g = g.slice(0, J === r ? v : J);
          }
        } else if (e.indexOf(st(c), v) != v) {
          var C = g.lastIndexOf(c);
          C > -1 && (g = g.slice(0, C));
        }
        return g + l;
      }
      function CU(e) {
        return e = ie(e), e && Hw.test(e) ? e.replace(cu, uv) : e;
      }
      var xU = Vr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), wl = xd("toUpperCase");
      function Wh(e, n, i) {
        return e = ie(e), n = i ? r : n, n === r ? iv(e) ? fv(e) : L1(e) : e.match(n) || [];
      }
      var Ch = $(function(e, n) {
        try {
          return it(e, r, n);
        } catch (i) {
          return hl(i) ? i : new P(i);
        }
      }), BU = $t(function(e, n) {
        return vt(n, function(i) {
          i = zt(i), Xt(e, i, ul(e[i], e));
        }), e;
      });
      function IU(e) {
        var n = e == null ? 0 : e.length, i = G();
        return e = n ? pe(e, function(l) {
          if (typeof l[1] != "function")
            throw new Vt(d);
          return [i(l[0]), l[1]];
        }) : [], $(function(l) {
          for (var c = -1; ++c < n; ) {
            var p = e[c];
            if (it(p[0], this, l))
              return it(p[1], this, l);
          }
        });
      }
      function DU(e) {
        return uV(gt(e, R));
      }
      function vl(e) {
        return function() {
          return e;
        };
      }
      function OU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var QU = Id(), zU = Id(!0);
      function et(e) {
        return e;
      }
      function Vl(e) {
        return pd(typeof e == "function" ? e : gt(e, R));
      }
      function GU(e) {
        return wd(gt(e, R));
      }
      function _U(e, n) {
        return vd(e, gt(n, R));
      }
      var YU = $(function(e, n) {
        return function(i) {
          return wo(i, e, n);
        };
      }), HU = $(function(e, n) {
        return function(i) {
          return wo(e, i, n);
        };
      });
      function Tl(e, n, i) {
        var l = Se(n), c = Bi(n, l);
        i == null && !(we(n) && (c.length || !l.length)) && (i = n, n = e, e = this, c = Bi(n, Se(n)));
        var p = !(we(i) && "chain" in i) || !!i.chain, m = Kt(e);
        return vt(c, function(v) {
          var g = n[v];
          e[v] = g, m && (e.prototype[v] = function() {
            var M = this.__chain__;
            if (p || M) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = $e(this.__actions__);
              return J.push({ func: g, args: arguments, thisArg: e }), Z.__chain__ = M, Z;
            }
            return g.apply(e, fn([this.value()], arguments));
          });
        }), e;
      }
      function PU() {
        return xe._ === this && (xe._ = Tv), this;
      }
      function gl() {
      }
      function jU(e) {
        return e = X(e), $(function(n) {
          return Vd(n, e);
        });
      }
      var XU = $s(pe), LU = $s(Du), $U = $s(Rs);
      function xh(e) {
        return ol(e) ? Ns(zt(e)) : ZV(e);
      }
      function qU(e) {
        return function(n) {
          return e == null ? r : In(e, n);
        };
      }
      var KU = Od(), eR = Od(!0);
      function Ul() {
        return [];
      }
      function Rl() {
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
      function oR(e, n) {
        if (e = X(e), e < 1 || e > He)
          return [];
        var i = Dt, l = ze(e, Dt);
        n = G(n), e -= Dt;
        for (var c = Ms(l, n); ++i < e; )
          n(i);
        return c;
      }
      function iR(e) {
        return j(e) ? pe(e, zt) : lt(e) ? [e] : $e(nh(ie(e)));
      }
      function aR(e) {
        var n = ++vv;
        return ie(e) + n;
      }
      var sR = Gi(function(e, n) {
        return e + n;
      }, 0), lR = qs("ceil"), cR = Gi(function(e, n) {
        return e / n;
      }, 1), uR = qs("floor");
      function dR(e) {
        return e && e.length ? xi(e, et, Bs) : r;
      }
      function hR(e, n) {
        return e && e.length ? xi(e, G(n, 2), Bs) : r;
      }
      function fR(e) {
        return zu(e, et);
      }
      function pR(e, n) {
        return zu(e, G(n, 2));
      }
      function mR(e) {
        return e && e.length ? xi(e, et, Qs) : r;
      }
      function wR(e, n) {
        return e && e.length ? xi(e, G(n, 2), Qs) : r;
      }
      var vR = Gi(function(e, n) {
        return e * n;
      }, 1), VR = qs("round"), TR = Gi(function(e, n) {
        return e - n;
      }, 0);
      function gR(e) {
        return e && e.length ? ks(e, et) : 0;
      }
      function UR(e, n) {
        return e && e.length ? ks(e, G(n, 2)) : 0;
      }
      return f.after = GT, f.ary = fh, f.assign = Eg, f.assignIn = Zh, f.assignInWith = na, f.assignWith = Sg, f.at = Fg, f.before = ph, f.bind = ul, f.bindAll = BU, f.bindKey = mh, f.castArray = tg, f.chain = uh, f.chunk = u0, f.compact = d0, f.concat = h0, f.cond = IU, f.conforms = DU, f.constant = vl, f.countBy = gT, f.create = Ag, f.curry = wh, f.curryRight = vh, f.debounce = Vh, f.defaults = Wg, f.defaultsDeep = Cg, f.defer = _T, f.delay = YT, f.difference = f0, f.differenceBy = p0, f.differenceWith = m0, f.drop = w0, f.dropRight = v0, f.dropRightWhile = V0, f.dropWhile = T0, f.fill = g0, f.filter = RT, f.flatMap = kT, f.flatMapDeep = MT, f.flatMapDepth = ZT, f.flatten = ah, f.flattenDeep = U0, f.flattenDepth = R0, f.flip = HT, f.flow = QU, f.flowRight = zU, f.fromPairs = N0, f.functions = zg, f.functionsIn = Gg, f.groupBy = bT, f.initial = k0, f.intersection = M0, f.intersectionBy = Z0, f.intersectionWith = b0, f.invert = Yg, f.invertBy = Hg, f.invokeMap = ET, f.iteratee = Vl, f.keyBy = ST, f.keys = Se, f.keysIn = Ke, f.map = Li, f.mapKeys = jg, f.mapValues = Xg, f.matches = GU, f.matchesProperty = _U, f.memoize = qi, f.merge = Lg, f.mergeWith = bh, f.method = YU, f.methodOf = HU, f.mixin = Tl, f.negate = Ki, f.nthArg = jU, f.omit = $g, f.omitBy = qg, f.once = PT, f.orderBy = FT, f.over = XU, f.overArgs = jT, f.overEvery = LU, f.overSome = $U, f.partial = dl, f.partialRight = Th, f.partition = AT, f.pick = Kg, f.pickBy = Jh, f.property = xh, f.propertyOf = qU, f.pull = F0, f.pullAll = lh, f.pullAllBy = A0, f.pullAllWith = W0, f.pullAt = C0, f.range = KU, f.rangeRight = eR, f.rearg = XT, f.reject = xT, f.remove = x0, f.rest = LT, f.reverse = ll, f.sampleSize = IT, f.set = tU, f.setWith = nU, f.shuffle = DT, f.slice = B0, f.sortBy = zT, f.sortedUniq = _0, f.sortedUniqBy = Y0, f.split = kU, f.spread = $T, f.tail = H0, f.take = P0, f.takeRight = j0, f.takeRightWhile = X0, f.takeWhile = L0, f.tap = dT, f.throttle = qT, f.thru = Xi, f.toArray = yh, f.toPairs = Eh, f.toPairsIn = Sh, f.toPath = iR, f.toPlainObject = Mh, f.transform = rU, f.unary = KT, f.union = $0, f.unionBy = q0, f.unionWith = K0, f.uniq = eT, f.uniqBy = tT, f.uniqWith = nT, f.unset = oU, f.unzip = cl, f.unzipWith = ch, f.update = iU, f.updateWith = aU, f.values = Ur, f.valuesIn = sU, f.without = rT, f.words = Wh, f.wrap = eg, f.xor = oT, f.xorBy = iT, f.xorWith = aT, f.zip = sT, f.zipObject = lT, f.zipObjectDeep = cT, f.zipWith = uT, f.entries = Eh, f.entriesIn = Sh, f.extend = Zh, f.extendWith = na, Tl(f, f), f.add = sR, f.attempt = Ch, f.camelCase = dU, f.capitalize = Fh, f.ceil = lR, f.clamp = lU, f.clone = ng, f.cloneDeep = og, f.cloneDeepWith = ig, f.cloneWith = rg, f.conformsTo = ag, f.deburr = Ah, f.defaultTo = OU, f.divide = cR, f.endsWith = hU, f.eq = St, f.escape = fU, f.escapeRegExp = pU, f.every = UT, f.find = NT, f.findIndex = oh, f.findKey = xg, f.findLast = yT, f.findLastIndex = ih, f.findLastKey = Bg, f.floor = uR, f.forEach = dh, f.forEachRight = hh, f.forIn = Ig, f.forInRight = Dg, f.forOwn = Og, f.forOwnRight = Qg, f.get = pl, f.gt = sg, f.gte = lg, f.has = _g, f.hasIn = ml, f.head = sh, f.identity = et, f.includes = JT, f.indexOf = y0, f.inRange = cU, f.invoke = Pg, f.isArguments = Qn, f.isArray = j, f.isArrayBuffer = cg, f.isArrayLike = qe, f.isArrayLikeObject = Re, f.isBoolean = ug, f.isBuffer = gn, f.isDate = dg, f.isElement = hg, f.isEmpty = fg, f.isEqual = pg, f.isEqualWith = mg, f.isError = hl, f.isFinite = wg, f.isFunction = Kt, f.isInteger = gh, f.isLength = ea, f.isMap = Uh, f.isMatch = vg, f.isMatchWith = Vg, f.isNaN = Tg, f.isNative = gg, f.isNil = Rg, f.isNull = Ug, f.isNumber = Rh, f.isObject = we, f.isObjectLike = Te, f.isPlainObject = Ro, f.isRegExp = fl, f.isSafeInteger = Ng, f.isSet = Nh, f.isString = ta, f.isSymbol = lt, f.isTypedArray = gr, f.isUndefined = yg, f.isWeakMap = kg, f.isWeakSet = Mg, f.join = J0, f.kebabCase = mU, f.last = Rt, f.lastIndexOf = E0, f.lowerCase = wU, f.lowerFirst = vU, f.lt = Zg, f.lte = bg, f.max = dR, f.maxBy = hR, f.mean = fR, f.meanBy = pR, f.min = mR, f.minBy = wR, f.stubArray = Ul, f.stubFalse = Rl, f.stubObject = tR, f.stubString = nR, f.stubTrue = rR, f.multiply = vR, f.nth = S0, f.noConflict = PU, f.noop = gl, f.now = $i, f.pad = VU, f.padEnd = TU, f.padStart = gU, f.parseInt = UU, f.random = uU, f.reduce = WT, f.reduceRight = CT, f.repeat = RU, f.replace = NU, f.result = eU, f.round = VR, f.runInContext = T, f.sample = BT, f.size = OT, f.snakeCase = yU, f.some = QT, f.sortedIndex = I0, f.sortedIndexBy = D0, f.sortedIndexOf = O0, f.sortedLastIndex = Q0, f.sortedLastIndexBy = z0, f.sortedLastIndexOf = G0, f.startCase = MU, f.startsWith = ZU, f.subtract = TR, f.sum = gR, f.sumBy = UR, f.template = bU, f.times = oR, f.toFinite = en, f.toInteger = X, f.toLength = kh, f.toLower = JU, f.toNumber = Nt, f.toSafeInteger = Jg, f.toString = ie, f.toUpper = EU, f.trim = SU, f.trimEnd = FU, f.trimStart = AU, f.truncate = WU, f.unescape = CU, f.uniqueId = aR, f.upperCase = xU, f.upperFirst = wl, f.each = dh, f.eachRight = hh, f.first = sh, Tl(f, function() {
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
        var i = n + 1, l = i == ke || i == We;
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
          return wo(i, e, n);
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
            var te = c.apply(f, fn([K], v));
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
          ae.call(mr, l) || (mr[l] = []), mr[l].push({ name: n, func: i });
        }
      }), mr[zi(r, F).name] = [{
        name: "wrapper",
        func: r
      }], ee.prototype.clone = Cv, ee.prototype.reverse = xv, ee.prototype.value = Bv, f.prototype.at = hT, f.prototype.chain = fT, f.prototype.commit = pT, f.prototype.next = mT, f.prototype.plant = vT, f.prototype.reverse = VT, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = TT, f.prototype.first = f.prototype.head, lo && (f.prototype[lo] = wT), f;
    }, hr = pv();
    An ? ((An.exports = hr)._ = hr, Vs._ = hr) : xe._ = hr;
  }).call(No);
})(ge, ge.exports);
const QN = "/alarms?_s=", _a = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, zN = async (t, o) => {
  try {
    return (await En.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      _a
    )).status === 204;
  } catch {
    return !1;
  }
}, GN = async (t, o) => {
  try {
    return (await En.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      _a
    )).status === 204;
  } catch {
    return !1;
  }
}, _N = async (t) => {
  try {
    const o = t.join(",alarm.id==");
    return (await dn.put(
      `alarms?_s=alarm.id==${o}&clear=true`,
      null,
      _a
    )).status == 204;
  } catch {
    return !1;
  }
}, YN = async () => {
  try {
    const t = `${QN}isSituation==true&limit=0`, o = await dn(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, HN = async () => {
  try {
    const t = await dn("/alarms?limit=0");
    return t.status === 200 ? t.data.alarm : !1;
  } catch {
    return !1;
  }
}, PN = async (t) => {
  try {
    const o = t.join(",id=="), r = await dn(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Mm = async (t) => {
  try {
    const o = await dn(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, jN = async (t) => {
  try {
    const o = await dn(`/events?_s=alarm.id==${t}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, XN = async () => {
  try {
    const t = await dn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((s) => ge.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, LN = async (t, o, r) => {
  try {
    return (await dn.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      _a
    )).status == 204;
  } catch {
    return !1;
  }
}, $N = async (t, o) => {
  try {
    return (await dn.delete(`/alarms/${t}/${o}`)).status == 204;
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
}, qN = "/alec", KN = "/alec/engine/configuration", Zm = "/alec/agreement/configuration", ey = "/alec/situation/statusList", bm = async (t) => {
  try {
    return (await En.post(`${Zm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, ty = async () => {
  try {
    const t = await En.get(`${Zm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, ny = async (t, o) => {
  try {
    return (await En.post(KN, {
      distanceMeasureName: o ? ft.HELLINGER_OPTION : ft.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Jm = async (t, o) => {
  try {
    return (await En.post(`${qN}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, ry = async () => {
  try {
    const t = await En.get(ey);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, oy = window.Pinia.defineStore, rr = oy("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    nodes: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await XN();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await YN(), o = await HN();
      let r = [];
      o && (r = ge.exports.mapKeys(o, (a) => a.id));
      const s = await ry();
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
      const o = await Mm(t);
      if (o) {
        const r = o.relatedAlarms.map((d) => d.id), s = await PN(r);
        o.alarms = s;
        const a = ge.exports.cloneDeep(this.situations), u = this.situations.findIndex((d) => d.id == t);
        a[u] = o, this.situations = a;
      }
    },
    async getEvents(t, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const u = await jN(a);
          u && (r[a] = ge.exports.reverse(u));
        })
      );
      const s = this.situations.findIndex((a) => a.id == t);
      this.situations[s].events = r;
    }
  }
}), iy = window.Vue.openBlock, ay = window.Vue.createElementBlock, sy = window.Vue.createElementVNode;
var ly = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cy = {}, uy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dy = /* @__PURE__ */ sy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), hy = [
  dy
];
function fy(t, o) {
  return iy(), ay("svg", uy, hy);
}
var zc = /* @__PURE__ */ ly(cy, [["render", fy]]);
var py = Object.defineProperty, lf = Object.getOwnPropertySymbols, my = Object.prototype.hasOwnProperty, wy = Object.prototype.propertyIsEnumerable, cf = (t, o, r) => o in t ? py(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, uf = (t, o) => {
  for (var r in o || (o = {}))
    my.call(o, r) && cf(t, r, o[r]);
  if (lf)
    for (var r of lf(o))
      wy.call(o, r) && cf(t, r, o[r]);
  return t;
};
const vy = window.Vue.defineComponent, Vy = window.Vue.toRaw, Il = window.Vue.h;
var Ty = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gy = {
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
}, Uy = vy({
  props: gy,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = Vy(this.icon);
    return this.$slots.default ? Il("span", { class: "feather-icon-container" }, [
      Il(this.$slots.default()[0], uf({
        class: o
      }, r))
    ]) : Il(s, uf({
      class: o
    }, r));
  }
});
var ne = /* @__PURE__ */ Ty(Uy, [["__scopeId", "data-v-52cbf270"]]);
const Ry = window.Vue.openBlock, Ny = window.Vue.createElementBlock, yy = window.Vue.createElementVNode;
var ky = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const My = {}, Zy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, by = /* @__PURE__ */ yy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Jy = [
  by
];
function Ey(t, o) {
  return Ry(), Ny("svg", Zy, Jy);
}
var Em = /* @__PURE__ */ ky(My, [["render", Ey]]);
const Sy = window.Vue.defineComponent, nn = window.Vue.unref, df = window.Vue.normalizeClass, yo = window.Vue.createElementVNode, Dl = window.Vue.toDisplayString, hf = window.Vue.createVNode, yr = window.Vue.openBlock, kr = window.Vue.createElementBlock, Ol = window.Vue.createCommentVNode, Fy = window.Vue.createTextVNode, Ay = window.Vue.renderList, Wy = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Cy = { class: "content" }, xy = { class: "title-row" }, By = { class: "title" }, Iy = {
  key: 0,
  class: "accepted"
}, Dy = {
  key: 1,
  class: "rejected"
}, Oy = {
  key: 0,
  class: "count-info"
}, Qy = /* @__PURE__ */ Fy(" Alarms: "), zy = { class: "info-title" }, Gy = /* @__PURE__ */ Sy({
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
      return yr(), kr("div", {
        onClick: u,
        class: df(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == nn(a)
        }])
      }, [
        yo("div", {
          class: df(["severity-line", [`${(U = (w = r.situationInfo) == null ? void 0 : w.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        yo("div", Cy, [
          yo("div", xy, [
            yo("div", By, "Situation " + Dl((V = r.situationInfo) == null ? void 0 : V.id), 1),
            r.situationInfo.status == nn(s) ? (yr(), kr("div", Iy, [
              hf(nn(ne), {
                icon: nn(zc),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ol("", !0),
            r.situationInfo.status == nn(a) ? (yr(), kr("div", Dy, [
              hf(nn(ne), {
                icon: nn(Em),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ol("", !0)
          ]),
          r.situationInfo.alarms ? (yr(), kr("div", Oy, [
            Qy,
            yo("span", zy, Dl(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ol("", !0),
          (yr(!0), kr(Wy, null, Ay(nn(ge.exports.keys)(nn(ge.exports.groupBy)(r.situationInfo.alarms, "nodeLabel")), (R) => (yr(), kr("div", {
            class: "info-title",
            key: R
          }, " - " + Dl(R), 1))), 128))
        ])
      ], 2);
    };
  }
});
const _y = /* @__PURE__ */ Ze(Gy, [["__scopeId", "data-v-1bda4968"]]);
const ra = window.Vue.ref, Yy = window.Vue.inject, Hy = window.Vue.computed, Py = window.Vue.onMounted, jy = {
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
}, Xy = (t) => {
  const o = ra(!1), r = ra(), s = ra(t.controls), a = ra(t.id), u = () => {
    r.value && r.value.focus();
  }, d = Yy("registerTab");
  Py(() => {
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
  const h = Hy(() => ({
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
const Yr = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, Hr = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var Ly = Object.defineProperty, $y = Object.defineProperties, qy = Object.getOwnPropertyDescriptors, ff = Object.getOwnPropertySymbols, Ky = Object.prototype.hasOwnProperty, ek = Object.prototype.propertyIsEnumerable, pf = (t, o, r) => o in t ? Ly(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, mf = (t, o) => {
  for (var r in o || (o = {}))
    Ky.call(o, r) && pf(t, r, o[r]);
  if (ff)
    for (var r of ff(o))
      ek.call(o, r) && pf(t, r, o[r]);
  return t;
}, tk = (t, o) => $y(t, qy(o));
const nk = window.Vue.defineComponent, rk = window.Vue.h;
var ok = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ik = {
  center: {
    type: Boolean,
    default: !1
  }
}, ak = nk({
  props: ik,
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
        this.styles = tk(mf({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Hr(this.failsafe), this.failsafe = Yr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return rk("div", {
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
var er = /* @__PURE__ */ ok(ak, [["__scopeId", "data-v-18e2a5db"]]);
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
}, wf = window.Vue.ref, sk = window.Vue.toRef, lk = window.Vue.watch, vf = window.Vue.provide, ck = {
  prop: "modelValue",
  event: "update:modelValue"
}, uk = {
  "update:modelValue": (t) => !0
}, dk = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, hk = (t, o) => {
  const r = sk(t, "modelValue"), s = wf(t.modelValue), a = wf([]);
  lk(r, (S) => {
    w(S);
  });
  const u = (S) => {
    S.preventDefault(), a.value.some((x, B) => x.tab && x.tab.el.contains(S.target) ? (h(B), w(B), !0) : !1);
  }, d = (S) => {
    if (((H) => H.shiftKey || H.ctrlKey || H.metaKey || H.altKey)(S))
      return;
    const B = S.keyCode, F = (H) => {
      H.stopPropagation(), H.preventDefault();
    }, W = a.value.filter((H) => H.tab && !H.tab.disabled), E = a.value.findIndex((H) => H.tab && H.tab.el.contains(document.activeElement));
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
}, oa = window.Vue.ref, fk = window.Vue.inject, pk = window.Vue.computed, mk = window.Vue.onMounted, wk = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, vk = (t) => {
  const o = oa(!1), r = oa(), s = oa(t.tab), a = oa(t.id), u = fk("registerPanel");
  mk(() => {
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
  const d = pk(() => ({
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
}, Gc = window.Vue.defineComponent, Vk = window.Vue.resolveComponent, _c = window.Vue.openBlock, Yc = window.Vue.createElementBlock, zo = window.Vue.createElementVNode, Sm = window.Vue.mergeProps, Ja = window.Vue.renderSlot, Tk = window.Vue.createVNode, gk = window.Vue.normalizeStyle, Uk = window.Vue.toHandlers, Rk = window.Vue.withDirectives, Nk = window.Vue.normalizeProps, yk = window.Vue.guardReactiveProps, kk = window.Vue.vShow;
var Hc = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Mk = jy, Zk = Gc({
  props: Mk,
  setup(t) {
    return Xy(t);
  },
  components: {
    FeatherRipple: er
  }
}), bk = { role: "presentation" }, Jk = { class: "tab-text" };
function Ek(t, o, r, s, a, u) {
  const d = Vk("FeatherRipple");
  return _c(), Yc("li", bk, [
    zo("button", Sm(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      zo("span", Jk, [
        Ja(t.$slots, "default", {}, void 0, !0)
      ]),
      Tk(d)
    ], 16)
  ]);
}
var Vf = /* @__PURE__ */ Hc(Zk, [["render", Ek], ["__scopeId", "data-v-e6bb52b6"]]);
const Sk = dk, Fk = uk, Ak = Gc({
  model: ck,
  emits: Fk,
  props: Sk,
  setup(t, o) {
    return hk(t, o);
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
}), Wk = { class: "feather-tab-container" }, Ck = { class: "tab-panels" };
function xk(t, o, r, s, a, u) {
  return _c(), Yc("div", Wk, [
    zo("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: gk({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    zo("ul", Sm(t.attrs, Uk(t.listeners)), [
      Ja(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    zo("div", Ck, [
      Ja(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var Bk = /* @__PURE__ */ Hc(Ak, [["render", xk], ["__scopeId", "data-v-27adffb9"]]);
const Ik = wk, Dk = Gc({
  props: Ik,
  setup(t) {
    return vk(t);
  }
});
function Ok(t, o, r, s, a, u) {
  return Rk((_c(), Yc("div", Nk(yk(t.attrs)), [
    Ja(t.$slots, "default")
  ], 16)), [
    [kk, t.selected]
  ]);
}
var Tf = /* @__PURE__ */ Hc(Dk, [["render", Ok]]);
const Qk = window.Vue.defineComponent, zk = window.Vue.toDisplayString, Gk = window.Vue.normalizeClass, _k = window.Vue.openBlock, Yk = window.Vue.createElementBlock, Hk = window.Vue.createCommentVNode, Pk = /* @__PURE__ */ Qk({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (_k(), Yk("span", {
      key: 0,
      class: Gk(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, zk(o.severity), 3)) : Hk("", !0);
  }
});
const Fm = /* @__PURE__ */ Ze(Pk, [["__scopeId", "data-v-83c2cdce"]]), jk = window.Vue.defineComponent, gf = window.Vue.toDisplayString, Uf = window.Vue.createElementVNode, Xk = window.Vue.openBlock, Lk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $k = { class: "box" }, qk = { class: "label" }, Kk = { class: "date" }, eM = /* @__PURE__ */ jk({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (Xk(), Lk("div", $k, [
      Uf("div", qk, gf(o.label), 1),
      Uf("div", Kk, gf(o.info), 1)
    ]));
  }
});
const Ql = /* @__PURE__ */ Ze(eM, [["__scopeId", "data-v-b4afa751"]]), tM = window.Vue.defineComponent, nM = window.Vue.unref, rM = window.Vue.renderList, oM = window.Vue.Fragment, zl = window.Vue.openBlock, Gl = window.Vue.createElementBlock, iM = window.Vue.toDisplayString, aM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const sM = { class: "alarms-list" }, lM = /* @__PURE__ */ tM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (zl(), Gl("div", sM, [
      (zl(!0), Gl(oM, null, rM(nM(ge.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (zl(), Gl("div", {
        class: aM(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, iM(a.length), 3))), 128))
    ]));
  }
});
const cM = /* @__PURE__ */ Ze(lM, [["__scopeId", "data-v-52d63440"]]);
const uM = window.Vue.computed, Am = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = uM(() => t.value[s] ? t.value[s] : o[s]);
  }), r;
}, dM = window.Vue.openBlock, hM = window.Vue.createElementBlock, fM = window.Vue.createElementVNode;
var pM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mM = {}, wM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vM = /* @__PURE__ */ fM("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), VM = [
  vM
];
function TM(t, o) {
  return dM(), hM("svg", wM, VM);
}
var ri = /* @__PURE__ */ pM(mM, [["render", TM]]);
const Rf = window.Vue.computed, gM = (t, o, r) => {
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
const UM = window.Vue.openBlock, RM = window.Vue.createElementBlock, Pc = window.Vue.createElementVNode;
var NM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yM = {}, kM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MM = /* @__PURE__ */ Pc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), ZM = /* @__PURE__ */ Pc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), bM = /* @__PURE__ */ Pc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), JM = [
  MM,
  ZM,
  bM
];
function EM(t, o) {
  return UM(), RM("svg", kM, JM);
}
var Wm = /* @__PURE__ */ NM(yM, [["render", EM]]), SM = Object.defineProperty, FM = Object.defineProperties, AM = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, WM = Object.prototype.hasOwnProperty, CM = Object.prototype.propertyIsEnumerable, yf = (t, o, r) => o in t ? SM(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Cm = (t, o) => {
  for (var r in o || (o = {}))
    WM.call(o, r) && yf(t, r, o[r]);
  if (Nf)
    for (var r of Nf(o))
      CM.call(o, r) && yf(t, r, o[r]);
  return t;
}, xm = (t, o) => FM(t, AM(o));
const Lr = window.Vue.defineComponent, Lo = window.Vue.resolveComponent, Gt = window.Vue.openBlock, Ir = window.Vue.createElementBlock, xM = window.Vue.createVNode, Ea = window.Vue.createBlock, BM = window.Vue.withModifiers, Pr = window.Vue.inject, $o = window.Vue.computed, IM = window.Vue.normalizeClass, Mr = window.Vue.createElementVNode, Sa = window.Vue.toDisplayString, Ra = window.Vue.renderSlot, Go = window.Vue.createCommentVNode, DM = window.Vue.withDirectives, OM = window.Vue.vShow, Tc = window.Vue.ref, kf = window.Vue.toRef, Mf = window.Vue.nextTick, gc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const jc = window.Vue.provide, Zf = window.Vue.isRef, QM = window.Vue.onBeforeUnmount;
var oi = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const zM = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, GM = Lr({
  props: zM,
  components: {
    FeatherIcon: ne
  }
}), _M = ["title"];
function YM(t, o, r, s, a, u) {
  const d = Lo("FeatherIcon");
  return Gt(), Ir("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    xM(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, _M);
}
var HM = /* @__PURE__ */ oi(GM, [["render", YM], ["__scopeId", "data-v-4265058e"]]);
const PM = Lr({
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
    ActionIcon: HM
  }
});
function jM(t, o, r, s, a, u) {
  const d = Lo("ActionIcon");
  return Gt(), Ea(d, {
    onClick: o[0] || (o[0] = BM((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var XM = /* @__PURE__ */ oi(PM, [["render", jM]]);
const LM = Lr({
  computed: {
    errorIcon() {
      return Wm;
    }
  },
  components: {
    FeatherIcon: ne
  }
});
function $M(t, o, r, s, a, u) {
  const d = Lo("FeatherIcon");
  return Gt(), Ea(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var qM = /* @__PURE__ */ oi(LM, [["render", $M], ["__scopeId", "data-v-0b8faef3"]]);
const KM = {
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
}, eZ = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, tZ = Lr({
  emits: eZ,
  props: KM,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = Pr("wrapperOptions", {}), o = Pr("validationErrorMessage", !1), r = $o(() => t.error ? t.error : o && o.value ? o.value : !1);
    return xm(Cm({}, t), { error: r });
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
    ClearIcon: XM,
    ErrorIcon: qM
  }
}), nZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, rZ = ["for"], oZ = { class: "prefix" }, iZ = { class: "post" };
function aZ(t, o, r, s, a, u) {
  const d = Lo("ClearIcon"), h = Lo("ErrorIcon");
  return Gt(), Ir("div", {
    class: IM(["feather-input-wrapper-container", t.containerCls])
  }, [
    Mr("fieldset", nZ, [
      Mr("legend", null, Sa(t.label), 1)
    ]),
    Mr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Sa(t.label), 9, rZ),
    Mr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Mr("div", oZ, [
        Ra(t.$slots, "pre", {}, void 0, !0)
      ]),
      Ra(t.$slots, "default", {}, void 0, !0),
      Mr("div", iZ, [
        t.showClear && t.computedClearText ? (Gt(), Ea(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Go("", !0),
        t.error ? (Gt(), Ea(h, { key: 1 })) : Go("", !0),
        Ra(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Bm = /* @__PURE__ */ oi(tZ, [["render", aZ], ["__scopeId", "data-v-4db296db"]]);
const sZ = Lr({
  setup() {
    const t = Pr("subTextOptions", {}), o = Pr("validationErrorMessage", !1), r = $o(() => t.error ? t.error : o && o.value ? o.value : "");
    return xm(Cm({}, t), { error: r });
  }
}), lZ = { class: "feather-input-sub-text" }, cZ = {
  key: 0,
  class: "feather-input-spacer"
}, uZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, dZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function hZ(t, o, r, s, a, u) {
  return DM((Gt(), Ir("div", lZ, [
    !t.hint && !t.error.length ? (Gt(), Ir("div", cZ, "\xA0")) : Go("", !0),
    t.hint && !t.error.length ? (Gt(), Ir("div", uZ, Sa(t.hint), 1)) : Go("", !0),
    t.error.length > 0 ? (Gt(), Ir("div", dZ, Sa(t.error), 1)) : Go("", !0),
    Ra(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [OM, !t.inline || t.hint || t.error.length]
  ]);
}
var Ya = /* @__PURE__ */ oi(sZ, [["render", hZ], ["__scopeId", "data-v-8e0ac99e"]]);
const fZ = {
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
  props: fZ,
  setup(t) {
    const o = Pr("featherFormErrors", Tc([])), r = kf(t, "errorList"), s = $o(() => {
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
  const u = Pr("featherForm", !1);
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
    }, { immediate: !0 }), QM(() => {
      u.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, Pa = (t) => ({
  inherittedAttrs: $o(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), ja = {
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
}, Xa = (t) => {
  jc("subTextOptions", t);
}, Im = {
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
}, Dm = (t) => {
  jc("wrapperOptions", t);
}, ia = window.Vue.ref, pZ = window.Vue.watch, mZ = window.Vue.watchEffect, bf = window.Vue.computed, _l = window.Vue.provide, Om = (t, o, r, s, a) => {
  const u = ia([]), d = ia(), h = ia(), w = ia();
  mZ(() => {
    if (!u.value.length)
      return;
    const F = u.value.map((W) => W.value);
    if (t.value !== void 0 && t.value !== null && (d.value = u.value[F.indexOf(t.value)]), !d.value && u.value.length) {
      let W = u.value.filter((E) => !E.disabled);
      W = W.length ? W : u.value, h.value = W[0], h.value.first = !0;
    }
  }), pZ(d, (F, W) => {
    W && (W.checked = !1), F && (F.checked = !0);
  });
  const U = (F) => {
    F && F.disabled || (h.value && (h.value.first = !1), d.value !== F && (o("update:modelValue", F.value), d.value = F, F.focus()));
  }, V = bf(() => d.value || h.value), R = gM(V, u, U), N = bf(() => le("feather-radio-group"));
  w.value = N.value;
  const { validate: A } = Ha(w, t, r, s, a);
  return _l("register", (F) => {
    u.value = [...u.value, F], w.value === N.value && (w.value = F.id);
  }), _l("select", U), _l("blur", (F) => {
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
var wZ = Object.defineProperty, vZ = Object.defineProperties, VZ = Object.getOwnPropertyDescriptors, Jf = Object.getOwnPropertySymbols, TZ = Object.prototype.hasOwnProperty, gZ = Object.prototype.propertyIsEnumerable, Ef = (t, o, r) => o in t ? wZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Qr = (t, o) => {
  for (var r in o || (o = {}))
    TZ.call(o, r) && Ef(t, r, o[r]);
  if (Jf)
    for (var r of Jf(o))
      gZ.call(o, r) && Ef(t, r, o[r]);
  return t;
}, Qm = (t, o) => vZ(t, VZ(o));
const Sn = window.Vue.defineComponent, _o = window.Vue.inject, Fa = window.Vue.computed, Yo = window.Vue.ref, Mt = window.Vue.resolveComponent, pt = window.Vue.openBlock, ii = window.Vue.createElementBlock, zm = window.Vue.normalizeClass, Yt = window.Vue.renderSlot, Zn = window.Vue.createBlock, qo = window.Vue.createCommentVNode, Aa = window.Vue.createElementVNode, UZ = window.Vue.withModifiers, La = window.Vue.createVNode, Gm = window.Vue.toRef, Uc = window.Vue.mergeProps, cn = window.Vue.withCtx, RZ = window.Vue.h, NZ = window.Vue.provide;
var Fn = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yZ = {
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
}, kZ = Sn({
  props: yZ,
  setup(t) {
    const o = _o("isCondensed", null), r = Fa(() => o || t.condensed), s = Yo(!1);
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
    FeatherRipple: er
  }
}), MZ = ["aria-disabled"];
function ZZ(t, o, r, s, a, u) {
  const d = Mt("FeatherRipple");
  return pt(), ii("div", {
    class: zm(["chip", {
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
  ], 42, MZ);
}
var $a = /* @__PURE__ */ Fn(kZ, [["render", ZZ], ["__scopeId", "data-v-44d413dc"]]);
const bZ = {
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
}, JZ = Sn({
  emits: ["delete"],
  props: bZ,
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
}), EZ = { class: "chip-delete" }, SZ = ["aria-label", "aria-describedby"];
function FZ(t, o, r, s, a, u) {
  const d = Mt("FeatherIcon");
  return pt(), ii("span", EZ, [
    Aa("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = UZ((...h) => t.handleDelete && t.handleDelete(...h), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      La(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, SZ)
  ]);
}
var AZ = /* @__PURE__ */ Fn(JZ, [["render", FZ], ["__scopeId", "data-v-4bae6cb4"]]);
const WZ = Sn({
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
}), CZ = ["title"];
function xZ(t, o, r, s, a, u) {
  return pt(), ii("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 8, CZ);
}
var qa = /* @__PURE__ */ Fn(WZ, [["render", xZ], ["__scopeId", "data-v-1a0445b2"]]);
const BZ = {}, IZ = {
  class: "chip-icon",
  role: "presentation"
};
function DZ(t, o) {
  return pt(), ii("span", IZ, [
    Yt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Ka = /* @__PURE__ */ Fn(BZ, [["render", DZ], ["__scopeId", "data-v-2230176f"]]);
const Sf = {
  delete: "Remove"
}, OZ = Sn({
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
    const r = Am(Gm(t, "labels"), Sf), s = Fa(() => le("chip-text")), a = () => {
      t.disabled || o.emit("click");
    }, u = Qr({}, o.attrs);
    return t.disabled && delete u.onClick, Qm(Qr({}, r), {
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
    Chip: $a,
    DeleteIcon: AZ,
    Label: qa,
    PreIcon: Ka
  }
}), QZ = ["aria-disabled"];
function zZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), h = Mt("Label"), w = Mt("DeleteIcon"), U = Mt("Chip");
  return pt(), Zn(U, Uc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: cn(() => [
      Aa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Aa("span", Uc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (pt(), Zn(d, { key: 0 }, {
            default: cn(() => [
              Yt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : qo("", !0),
          La(h, { id: t.chipTextId }, {
            default: cn(() => [
              Yt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, QZ),
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
var GZ = /* @__PURE__ */ Fn(OZ, [["render", zZ], ["__scopeId", "data-v-48b2704a"]]);
const _Z = Sn({
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
    Chip: $a,
    Label: qa,
    PreIcon: Ka
  }
}), YZ = ["aria-disabled"];
function HZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), h = Mt("Label"), w = Mt("Chip");
  return pt(), Zn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: cn(() => [
      Aa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (pt(), Zn(d, { key: 0 }, {
          default: cn(() => [
            Yt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : qo("", !0),
        La(h, null, {
          default: cn(() => [
            Yt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, YZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var PZ = /* @__PURE__ */ Fn(_Z, [["render", HZ], ["__scopeId", "data-v-3e0c4eba"]]);
const jZ = Sn({
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
    const o = Yo(!1), r = Yo(!1), s = Fa(() => le("chip-label-id")), a = Fa(() => o.value || r.value ? 0 : -1), u = Yo(), d = () => {
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
    Chip: $a,
    Label: qa,
    PreIcon: Ka
  }
});
function XZ(t, o, r, s, a, u) {
  const d = Mt("PreIcon"), h = Mt("Label"), w = Mt("Chip");
  return pt(), Zn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: zm(["focus hover", { selected: t.checked }]),
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
    default: cn(() => [
      t.hasIcon ? (pt(), Zn(d, { key: 0 }, {
        default: cn(() => [
          Yt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : qo("", !0),
      La(h, { id: t.labelId }, {
        default: cn(() => [
          Yt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var LZ = /* @__PURE__ */ Fn(jZ, [["render", XZ], ["__scopeId", "data-v-bbcc2f70"]]);
const $Z = {
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
  props: $Z,
  setup() {
    return { format: _o("chipListFormat", "") };
  },
  render() {
    const t = (o) => RZ(o, Qr(Qr({}, this.$props), this.$attrs), Qr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(GZ) : this.format === "radio" ? t(LZ) : t(PZ);
  }
}), qZ = {
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
}, KZ = Sn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: qZ,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    NZ("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const d = Gm(t, "modelValue");
      return Qm(Qr({
        attrs: {
          role: "radiogroup"
        }
      }, Om(d, o.emit, t.label, {}, Yo(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), eb = ["aria-label"];
function tb(t, o, r, s, a, u) {
  return pt(), ii("div", Uc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    Yt(t.$slots, "default", {}, void 0, !0)
  ], 16, eb);
}
var nb = /* @__PURE__ */ Fn(KZ, [["render", tb], ["__scopeId", "data-v-1e06f41d"]]);
function tr(t) {
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
function rb(t, o) {
  Qe(2, arguments);
  var r = Ye(t).getTime(), s = tr(o);
  return new Date(r + s);
}
var ob = {};
function ai() {
  return ob;
}
function Rc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function ib(t, o) {
  Qe(2, arguments);
  var r = Ye(t), s = Ye(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function ab(t) {
  return Qe(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function sb(t) {
  if (Qe(1, arguments), !ab(t) && typeof t != "number")
    return !1;
  var o = Ye(t);
  return !isNaN(Number(o));
}
function lb(t, o) {
  Qe(2, arguments);
  var r = tr(o);
  return rb(t, -r);
}
var cb = 864e5;
function ub(t) {
  Qe(1, arguments);
  var o = Ye(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / cb) + 1;
}
function Wa(t) {
  Qe(1, arguments);
  var o = 1, r = Ye(t), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function _m(t) {
  Qe(1, arguments);
  var o = Ye(t), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Wa(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var d = Wa(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function db(t) {
  Qe(1, arguments);
  var o = _m(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Wa(r);
  return s;
}
var hb = 6048e5;
function fb(t) {
  Qe(1, arguments);
  var o = Ye(t), r = Wa(o).getTime() - db(o).getTime();
  return Math.round(r / hb) + 1;
}
function Ca(t, o) {
  var r, s, a, u, d, h, w, U;
  Qe(1, arguments);
  var V = ai(), R = tr((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.weekStartsOn) !== null && a !== void 0 ? a : V.weekStartsOn) !== null && s !== void 0 ? s : (w = V.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var N = Ye(t), A = N.getUTCDay(), S = (A < R ? 7 : 0) + A - R;
  return N.setUTCDate(N.getUTCDate() - S), N.setUTCHours(0, 0, 0, 0), N;
}
function Ym(t, o) {
  var r, s, a, u, d, h, w, U;
  Qe(1, arguments);
  var V = Ye(t), R = V.getUTCFullYear(), N = ai(), A = tr((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : N.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = N.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(R + 1, 0, A), S.setUTCHours(0, 0, 0, 0);
  var x = Ca(S, o), B = new Date(0);
  B.setUTCFullYear(R, 0, A), B.setUTCHours(0, 0, 0, 0);
  var F = Ca(B, o);
  return V.getTime() >= x.getTime() ? R + 1 : V.getTime() >= F.getTime() ? R : R - 1;
}
function pb(t, o) {
  var r, s, a, u, d, h, w, U;
  Qe(1, arguments);
  var V = ai(), R = tr((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (d = o.locale) === null || d === void 0 || (h = d.options) === null || h === void 0 ? void 0 : h.firstWeekContainsDate) !== null && a !== void 0 ? a : V.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = V.locale) === null || w === void 0 || (U = w.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), N = Ym(t, o), A = new Date(0);
  A.setUTCFullYear(N, 0, R), A.setUTCHours(0, 0, 0, 0);
  var S = Ca(A, o);
  return S;
}
var mb = 6048e5;
function wb(t, o) {
  Qe(1, arguments);
  var r = Ye(t), s = Ca(r, o).getTime() - pb(r, o).getTime();
  return Math.round(s / mb) + 1;
}
function se(t, o) {
  for (var r = t < 0 ? "-" : "", s = Math.abs(t).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var vb = {
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
const Un = vb;
var Zr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Vb = {
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
    return Un.y(t, o);
  },
  Y: function(t, o, r, s) {
    var a = Ym(t, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var d = u % 100;
      return se(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : se(u, o.length);
  },
  R: function(t, o) {
    var r = _m(t);
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
        return Un.M(t, o);
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
    var a = wb(t, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : se(a, o.length);
  },
  I: function(t, o, r) {
    var s = fb(t);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : se(s, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Un.d(t, o);
  },
  D: function(t, o, r) {
    var s = ub(t);
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
    switch (s === 12 ? a = Zr.noon : s === 0 ? a = Zr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = Zr.evening : s >= 12 ? a = Zr.afternoon : s >= 4 ? a = Zr.morning : a = Zr.night, o) {
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
    return Un.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Un.H(t, o);
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
    }) : Un.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Un.s(t, o);
  },
  S: function(t, o) {
    return Un.S(t, o);
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
        return Ln(u);
      case "XXXXX":
      case "XXX":
      default:
        return Ln(u, ":");
    }
  },
  x: function(t, o, r, s) {
    var a = s._originalDate || t, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Wf(u);
      case "xxxx":
      case "xx":
        return Ln(u);
      case "xxxxx":
      case "xxx":
      default:
        return Ln(u, ":");
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
        return "GMT" + Ln(u, ":");
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
        return "GMT" + Ln(u, ":");
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
  return Ln(t, o);
}
function Ln(t, o) {
  var r = o || "", s = t > 0 ? "-" : "+", a = Math.abs(t), u = se(Math.floor(a / 60), 2), d = se(a % 60, 2);
  return s + u + r + d;
}
const Tb = Vb;
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
}, Hm = function(t, o) {
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
}, gb = function(t, o) {
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
  return u.replace("{{date}}", Cf(s, o)).replace("{{time}}", Hm(a, o));
}, Ub = {
  p: Hm,
  P: gb
};
const Rb = Ub;
var Nb = ["D", "DD"], yb = ["YY", "YYYY"];
function kb(t) {
  return Nb.indexOf(t) !== -1;
}
function Mb(t) {
  return yb.indexOf(t) !== -1;
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
var Zb = {
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
}, bb = function(t, o, r) {
  var s, a = Zb[t];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const Jb = bb;
function Yl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, s = t.formats[r] || t.formats[t.defaultWidth];
    return s;
  };
}
var Eb = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Sb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Fb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ab = {
  date: Yl({
    formats: Eb,
    defaultWidth: "full"
  }),
  time: Yl({
    formats: Sb,
    defaultWidth: "full"
  }),
  dateTime: Yl({
    formats: Fb,
    defaultWidth: "full"
  })
};
const Wb = Ab;
var Cb = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, xb = function(t, o, r, s) {
  return Cb[t];
};
const Bb = xb;
function ko(t) {
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
var Ib = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Db = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ob = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Qb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, zb = {
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
}, Gb = {
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
}, _b = function(t, o) {
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
}, Yb = {
  ordinalNumber: _b,
  era: ko({
    values: Ib,
    defaultWidth: "wide"
  }),
  quarter: ko({
    values: Db,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ko({
    values: Ob,
    defaultWidth: "wide"
  }),
  day: ko({
    values: Qb,
    defaultWidth: "wide"
  }),
  dayPeriod: ko({
    values: zb,
    defaultWidth: "wide",
    formattingValues: Gb,
    defaultFormattingWidth: "wide"
  })
};
const Hb = Yb;
function Mo(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && t.matchPatterns[s] || t.matchPatterns[t.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var d = u[0], h = s && t.parsePatterns[s] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(h) ? jb(h, function(R) {
      return R.test(d);
    }) : Pb(h, function(R) {
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
function Pb(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function jb(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function Xb(t) {
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
var Lb = /^(\d+)(th|st|nd|rd)?/i, $b = /\d+/i, qb = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Kb = {
  any: [/^b/i, /^(a|c)/i]
}, e2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, t2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, n2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, r2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, o2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, i2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, a2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, s2 = {
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
}, l2 = {
  ordinalNumber: Xb({
    matchPattern: Lb,
    parsePattern: $b,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Mo({
    matchPatterns: qb,
    defaultMatchWidth: "wide",
    parsePatterns: Kb,
    defaultParseWidth: "any"
  }),
  quarter: Mo({
    matchPatterns: e2,
    defaultMatchWidth: "wide",
    parsePatterns: t2,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Mo({
    matchPatterns: n2,
    defaultMatchWidth: "wide",
    parsePatterns: r2,
    defaultParseWidth: "any"
  }),
  day: Mo({
    matchPatterns: o2,
    defaultMatchWidth: "wide",
    parsePatterns: i2,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mo({
    matchPatterns: a2,
    defaultMatchWidth: "any",
    parsePatterns: s2,
    defaultParseWidth: "any"
  })
};
const c2 = l2;
var u2 = {
  code: "en-US",
  formatDistance: Jb,
  formatLong: Wb,
  formatRelative: Bb,
  localize: Hb,
  match: c2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Pm = u2;
var d2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, h2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, f2 = /^'([^]*?)'?$/, p2 = /''/g, m2 = /[a-zA-Z]/;
function w2(t, o, r) {
  var s, a, u, d, h, w, U, V, R, N, A, S, x, B, F, W, E, O;
  Qe(2, arguments);
  var b = String(o), z = ai(), Q = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : z.locale) !== null && s !== void 0 ? s : Pm, H = tr((u = (d = (h = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (U = r.locale) === null || U === void 0 || (V = U.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && h !== void 0 ? h : z.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = z.locale) === null || R === void 0 || (N = R.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var me = tr((A = (S = (x = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (F = r.locale) === null || F === void 0 || (W = F.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && x !== void 0 ? x : z.weekStartsOn) !== null && S !== void 0 ? S : (E = z.locale) === null || E === void 0 || (O = E.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && A !== void 0 ? A : 0);
  if (!(me >= 0 && me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = Ye(t);
  if (!sb(de))
    throw new RangeError("Invalid time value");
  var ve = Rc(de), Ve = lb(de, ve), Ue = {
    firstWeekContainsDate: H,
    weekStartsOn: me,
    locale: Q,
    _originalDate: de
  }, ke = b.match(h2).map(function(ce) {
    var We = ce[0];
    if (We === "p" || We === "P") {
      var Ce = Rb[We];
      return Ce(ce, Q.formatLong);
    }
    return ce;
  }).join("").match(d2).map(function(ce) {
    if (ce === "''")
      return "'";
    var We = ce[0];
    if (We === "'")
      return v2(ce);
    var Ce = Tb[We];
    if (Ce)
      return !(r != null && r.useAdditionalWeekYearTokens) && Mb(ce) && xf(ce, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && kb(ce) && xf(ce, o, String(t)), Ce(Ve, ce, Q.localize, Ue);
    if (We.match(m2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + We + "`");
    return ce;
  }).join("");
  return ke;
}
function v2(t) {
  var o = t.match(f2);
  return o ? o[1].replace(p2, "'") : t;
}
function jm(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function V2(t) {
  return jm({}, t);
}
var Bf = 1e3 * 60, xa = 60 * 24, If = xa * 30, Df = xa * 365;
function T2(t, o, r) {
  var s, a, u;
  Qe(2, arguments);
  var d = ai(), h = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : d.locale) !== null && s !== void 0 ? s : Pm;
  if (!h.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = ib(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var U = jm(V2(r), {
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
  if (W ? E = String(W) : x < 1 ? E = "second" : x < 60 ? E = "minute" : x < xa ? E = "hour" : F < If ? E = "day" : F < Df ? E = "month" : E = "year", E === "second") {
    var O = A(S / 1e3);
    return h.formatDistance("xSeconds", O, U);
  } else if (E === "minute") {
    var b = A(x);
    return h.formatDistance("xMinutes", b, U);
  } else if (E === "hour") {
    var z = A(x / 60);
    return h.formatDistance("xHours", z, U);
  } else if (E === "day") {
    var Q = A(F / xa);
    return h.formatDistance("xDays", Q, U);
  } else if (E === "month") {
    var H = A(F / If);
    return H === 12 && W !== "month" ? h.formatDistance("xYears", 1, U) : h.formatDistance("xMonths", H, U);
  } else if (E === "year") {
    var me = A(F / Df);
    return h.formatDistance("xYears", me, U);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const un = (t) => {
  let o = "";
  if (t)
    try {
      o = w2(new Date(t), ft.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
};
var g2 = Object.defineProperty, U2 = Object.defineProperties, R2 = Object.getOwnPropertyDescriptors, Of = Object.getOwnPropertySymbols, N2 = Object.prototype.hasOwnProperty, y2 = Object.prototype.propertyIsEnumerable, Qf = (t, o, r) => o in t ? g2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Zo = (t, o) => {
  for (var r in o || (o = {}))
    N2.call(o, r) && Qf(t, r, o[r]);
  if (Of)
    for (var r of Of(o))
      y2.call(o, r) && Qf(t, r, o[r]);
  return t;
}, zf = (t, o) => U2(t, R2(o));
const k2 = window.Vue.defineComponent, M2 = window.Vue.inject, bo = window.Vue.h;
var Z2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const b2 = {
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
}, J2 = k2({
  inheritAttrs: !1,
  props: b2,
  setup() {
    return { hasTooltip: M2("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let h = "";
      this.primary && (h = "btn-primary"), this.secondary && (h = "btn-secondary"), (this.text || this.icon) && (h = "btn-text");
      const w = ["btn", "hover", "focus", h];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Zo({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (h) => {
        this.disabled ? (this.asAnchor && h.preventDefault(), this.$emit("disabled-click", h)) : this.$emit("click", h);
      }
    };
    const a = t();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = bo(er);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const h = this.icon;
      return r.attrs["aria-label"] = h, this.hasTooltip || (r.attrs.title = h), bo(o, zf(Zo(Zo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : bo(er, { center: !0 })
      ]);
    }
    const d = bo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return bo(o, zf(Zo(Zo({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      u
    ]);
  }
});
var bn = /* @__PURE__ */ Z2(J2, [["__scopeId", "data-v-702d1074"]]);
const E2 = window.Vue.openBlock, S2 = window.Vue.createElementBlock, F2 = window.Vue.createElementVNode;
var A2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const W2 = {}, C2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, x2 = /* @__PURE__ */ F2("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), B2 = [
  x2
];
function I2(t, o) {
  return E2(), S2("svg", C2, B2);
}
var D2 = /* @__PURE__ */ A2(W2, [["render", I2]]);
const O2 = window.Vue.openBlock, Q2 = window.Vue.createElementBlock, z2 = window.Vue.createStaticVNode;
var G2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _2 = {}, Y2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H2 = /* @__PURE__ */ z2('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), P2 = [
  H2
];
function j2(t, o) {
  return O2(), Q2("svg", Y2, P2);
}
var Xm = /* @__PURE__ */ G2(_2, [["render", j2]]);
const X2 = window.Vue.defineComponent, Wt = window.Vue.unref, Hl = window.Vue.createVNode, Xc = window.Vue.createElementVNode, Pl = window.Vue.withCtx, aa = window.Vue.openBlock, jl = window.Vue.createBlock, Xl = window.Vue.createCommentVNode, L2 = window.Vue.normalizeClass, $2 = window.Vue.createElementBlock, q2 = window.Vue.pushScopeId, K2 = window.Vue.popScopeId, Lc = (t) => (q2("data-v-cc0a6466"), t = t(), K2(), t), eJ = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Xc("span", null, "Acknowledge", -1)), tJ = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Xc("span", null, "Escalate", -1)), nJ = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Xc("span", null, "Clear", -1)), rJ = /* @__PURE__ */ X2({
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
    const r = t, s = rr(), a = async (d) => {
      await zN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id)), r.isSituation && await Jm(
        r.situationId,
        ft.ACCEPTED.toLowerCase()
      );
    }, u = async (d) => {
      await GN(r.alarm.id, d) && (s.selectedSituation = r.situationId, o("action-clicked", r.alarm.id), s.getSituation(r.situationId));
    };
    return (d, h) => (aa(), $2("div", {
      class: L2(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? Xl("", !0) : (aa(), jl(Wt(bn), {
        key: 0,
        class: "acction-btn",
        onClick: h[0] || (h[0] = () => a(!0))
      }, {
        default: Pl(() => [
          Hl(Wt(ne), {
            icon: Wt(zc),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          eJ
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (aa(), jl(Wt(bn), {
        key: 1,
        class: "acction-btn",
        onClick: h[1] || (h[1] = () => u(Wt(ft).ESCALATE))
      }, {
        default: Pl(() => [
          Hl(Wt(ne), {
            icon: Wt(D2),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          tJ
        ]),
        _: 1
      })) : Xl("", !0),
      r.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (aa(), jl(Wt(bn), {
        key: 2,
        class: "acction-btn",
        onClick: h[2] || (h[2] = () => u(Wt(ft).CLEAR))
      }, {
        default: Pl(() => [
          Hl(Wt(ne), {
            icon: Wt(Xm),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          nJ
        ]),
        _: 1
      })) : Xl("", !0)
    ], 2));
  }
});
const Lm = /* @__PURE__ */ Ze(rJ, [["__scopeId", "data-v-cc0a6466"]]);
var oJ = Object.defineProperty, iJ = Object.defineProperties, aJ = Object.getOwnPropertyDescriptors, Gf = Object.getOwnPropertySymbols, sJ = Object.prototype.hasOwnProperty, lJ = Object.prototype.propertyIsEnumerable, _f = (t, o, r) => o in t ? oJ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Nc = (t, o) => {
  for (var r in o || (o = {}))
    sJ.call(o, r) && _f(t, r, o[r]);
  if (Gf)
    for (var r of Gf(o))
      lJ.call(o, r) && _f(t, r, o[r]);
  return t;
}, $m = (t, o) => iJ(t, aJ(o));
const qm = window.Vue.defineComponent, cJ = window.Vue.inject, uJ = window.Vue.resolveComponent, Ll = window.Vue.openBlock, Yf = window.Vue.createElementBlock, Dr = window.Vue.createElementVNode, dJ = window.Vue.createBlock, Hf = window.Vue.createCommentVNode, hJ = window.Vue.renderSlot, fJ = window.Vue.pushScopeId, pJ = window.Vue.popScopeId, $l = window.Vue.toRef, sa = window.Vue.computed, mJ = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var wJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const vJ = {
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
}, VJ = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, TJ = qm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: VJ,
  props: vJ,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: cJ("registerCheckbox", (o) => {
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
    FeatherRipple: er
  }
}), gJ = (t) => (fJ("data-v-a7af27e2"), t = t(), pJ(), t), UJ = { class: "layout-container" }, RJ = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], NJ = { class: "checkbox hover focus" }, yJ = /* @__PURE__ */ gJ(() => /* @__PURE__ */ Dr("div", { class: "box" }, [
  /* @__PURE__ */ Dr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Dr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Dr("div", { class: "indeterminate" })
], -1)), kJ = ["id", "for"];
function MJ(t, o, r, s, a, u) {
  const d = uJ("feather-ripple");
  return Ll(), Yf("div", UJ, [
    Dr("div", {
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
      Dr("div", NJ, [
        yJ,
        t.disabled ? Hf("", !0) : (Ll(), dJ(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? Hf("", !0) : (Ll(), Yf("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        hJ(t.$slots, "default", {}, void 0, !0)
      ], 8, kJ))
    ], 40, RJ)
  ]);
}
var $c = /* @__PURE__ */ wJ(TJ, [["render", MJ], ["__scopeId", "data-v-a7af27e2"]]);
const ZJ = $m(Nc({}, ja), {
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
qm({
  props: ZJ,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    Xa(t);
    const r = $l(t, "error"), s = sa(() => le("feather-checkbox-group")), a = sa(() => le("feather-input-description")), u = sa(() => le("feather-input-label")), d = sa(() => {
      const V = JSON.parse(JSON.stringify(o.attrs));
      return V["aria-invalid"] || (V["aria-invalid"] = !!r.value), $m(Nc({}, V), {
        class: "",
        "aria-describedby": a.value
      });
    }), h = mJ(s.value), { validate: w } = Ha(h, $l(t, "modelValue"), t.label, t.schema, $l(t, "error"));
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
    }, Pa(o.attrs));
  },
  components: {
    InputSubText: Ya
  }
});
const bJ = window.Vue.openBlock, JJ = window.Vue.createElementBlock, Km = window.Vue.createElementVNode;
var EJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const SJ = {}, FJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AJ = /* @__PURE__ */ Km("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), WJ = /* @__PURE__ */ Km("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), CJ = [
  AJ,
  WJ
];
function xJ(t, o) {
  return bJ(), JJ("svg", FJ, CJ);
}
var BJ = /* @__PURE__ */ EJ(SJ, [["render", xJ]]);
const Pf = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
};
const $r = window.Vue.defineComponent, Ko = window.Vue.resolveComponent, _t = window.Vue.openBlock, Or = window.Vue.createElementBlock, IJ = window.Vue.createVNode, Ba = window.Vue.createBlock, DJ = window.Vue.withModifiers, jr = window.Vue.inject, ei = window.Vue.computed, OJ = window.Vue.normalizeClass, Mn = window.Vue.createElementVNode, QJ = window.Vue.normalizeStyle, yc = window.Vue.toDisplayString, Na = window.Vue.renderSlot, Ho = window.Vue.createCommentVNode, zJ = window.Vue.pushScopeId, GJ = window.Vue.popScopeId, _J = window.Vue.withDirectives, YJ = window.Vue.vShow, kc = window.Vue.ref, jf = window.Vue.toRef, Xf = window.Vue.nextTick, Mc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const qc = window.Vue.provide, Lf = window.Vue.isRef, HJ = window.Vue.onBeforeUnmount, PJ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, jJ = $r({
  props: PJ,
  components: {
    FeatherIcon: ne
  }
}), si = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, XJ = ["title"];
function LJ(t, o, r, s, a, u) {
  const d = Ko("FeatherIcon");
  return _t(), Or("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    IJ(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, XJ);
}
const $J = /* @__PURE__ */ si(jJ, [["render", LJ], ["__scopeId", "data-v-8bb27a5c"]]), qJ = $r({
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
    ActionIcon: $J
  }
});
function KJ(t, o, r, s, a, u) {
  const d = Ko("ActionIcon");
  return _t(), Ba(d, {
    onClick: o[0] || (o[0] = DJ((h) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
const eE = /* @__PURE__ */ si(qJ, [["render", KJ]]), tE = $r({
  computed: {
    errorIcon() {
      return Wm;
    }
  },
  components: {
    FeatherIcon: ne
  }
});
function nE(t, o, r, s, a, u) {
  const d = Ko("FeatherIcon");
  return _t(), Ba(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
const rE = /* @__PURE__ */ si(tE, [["render", nE], ["__scopeId", "data-v-2b61105f"]]), oE = {
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
}, iE = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, aE = $r({
  emits: iE,
  props: oE,
  data() {
    return {
      labelWidth: "0px",
      labelObserver: void 0
    };
  },
  setup() {
    const t = jr(
      "wrapperOptions",
      {}
    ), o = jr(
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
    ClearIcon: eE,
    ErrorIcon: rE
  }
}), ew = (t) => (zJ("data-v-ab1739ff"), t = t(), GJ(), t), sE = { class: "feather-input-border" }, lE = /* @__PURE__ */ ew(() => /* @__PURE__ */ Mn("div", { class: "pre-border" }, null, -1)), cE = ["for"], uE = /* @__PURE__ */ ew(() => /* @__PURE__ */ Mn("div", { class: "post-border" }, null, -1)), dE = { class: "prefix" }, hE = { class: "post" };
function fE(t, o, r, s, a, u) {
  const d = Ko("ClearIcon"), h = Ko("ErrorIcon");
  return _t(), Or("div", {
    class: OJ(["feather-input-wrapper-container", t.containerCls])
  }, [
    Mn("div", sE, [
      lE,
      Mn("div", {
        class: "label-border",
        style: QJ({ width: t.labelWidth })
      }, [
        Mn("label", {
          class: "feather-input-label",
          for: t.inputId,
          "data-ref-id": "feather-form-element-label"
        }, yc(t.label), 9, cE)
      ], 4),
      uE
    ]),
    Mn("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Mn("div", dE, [
        Na(t.$slots, "pre", {}, void 0, !0)
      ]),
      Na(t.$slots, "default", {}, void 0, !0),
      Mn("div", hE, [
        t.showClear && t.computedClearText ? (_t(), Ba(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Ho("", !0),
        t.error ? (_t(), Ba(h, { key: 1 })) : Ho("", !0),
        Na(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
const pE = /* @__PURE__ */ si(aE, [["render", fE], ["__scopeId", "data-v-ab1739ff"]]), mE = $r({
  setup() {
    const t = jr(
      "subTextOptions",
      {}
    ), o = jr(
      "validationErrorMessage",
      !1
    ), r = ei(() => t.error ? t.error : o && o.value ? o.value : "");
    return { ...t, error: r };
  }
}), wE = { class: "feather-input-sub-text" }, vE = {
  key: 0,
  class: "feather-input-spacer"
}, VE = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, TE = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function gE(t, o, r, s, a, u) {
  return _J((_t(), Or("div", wE, [
    !t.hint && !t.error.length ? (_t(), Or("div", vE, "\xA0")) : Ho("", !0),
    t.hint && !t.error.length ? (_t(), Or("div", VE, yc(t.hint), 1)) : Ho("", !0),
    t.error.length > 0 ? (_t(), Or("div", TE, yc(t.error), 1)) : Ho("", !0),
    Na(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [YJ, !t.inline || t.hint || t.error.length]
  ]);
}
const UE = /* @__PURE__ */ si(mE, [["render", gE], ["__scopeId", "data-v-f0789880"]]), RE = {
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
  props: RE,
  setup(t) {
    const o = jr(
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
const NE = (t, o, r, s, a) => {
  const u = jr("featherForm", !1);
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
    ), HJ(() => {
      u.deregister(t.value, !0);
    }), { validate: h };
  }
  return { validate: () => !0 };
}, yE = (t) => ({
  inherittedAttrs: ei(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), kE = {
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
}, ME = (t) => {
  qc("subTextOptions", t);
}, ZE = {
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
}, bE = (t) => {
  qc("wrapperOptions", t);
}, JE = window.Vue.defineComponent, ql = window.Vue.toRef, EE = window.Vue.computed, $f = window.Vue.resolveComponent, qf = window.Vue.openBlock, Kf = window.Vue.createElementBlock, ep = window.Vue.mergeProps, tp = window.Vue.createVNode, SE = window.Vue.normalizeClass, np = window.Vue.withCtx, FE = window.Vue.createElementVNode, AE = window.Vue.toDisplayString, WE = window.Vue.createCommentVNode, CE = {
  ...ZE,
  ...kE,
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
}, xE = {
  "update:modelValue": (t) => !0
}, BE = JE({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: xE,
  props: CE,
  setup(t, o) {
    ME(t), bE(t);
    const r = ql(t, "id"), s = EE(() => r.value ? r.value : Pf("feather-textarea-label")), { validate: a } = NE(
      s,
      ql(t, "modelValue"),
      t.label,
      t.schema,
      ql(t, "error")
    );
    return {
      inputId: s,
      incomingId: r,
      validate: a,
      ...yE(o.attrs)
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
      return Pf("feather-textarea-description");
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
    InputSubText: UE,
    InputWrapper: pE
  }
}), IE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, DE = ["maxlength"], OE = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function QE(t, o, r, s, a, u) {
  const d = $f("InputWrapper"), h = $f("InputSubText");
  return qf(), Kf("div", ep(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    tp(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: SE(["feather-textarea-content", t.contentCls])
    }, {
      default: np(() => [
        FE("textarea", ep(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, DE)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    tp(h, { id: t.descriptionId }, {
      right: np(() => [
        t.maxlength ? (qf(), Kf("div", OE, AE(t.charCount), 1)) : WE("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
const zE = /* @__PURE__ */ IE(BE, [["render", QE], ["__scopeId", "data-v-eee43a95"]]), GE = window.Pinia.defineStore, tw = GE("appStore", {
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
}), _E = window.Vue.defineComponent, rp = window.Vue.toDisplayString, Jo = window.Vue.createElementVNode, zn = window.Vue.unref, br = window.Vue.openBlock, op = window.Vue.createBlock, Eo = window.Vue.createCommentVNode, ip = window.Vue.createVNode, la = window.Vue.createElementBlock, YE = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const HE = { class: "row" }, PE = { class: "label" }, jE = { class: "action-icons" }, XE = { class: "icon-btn" }, LE = {
  key: 0,
  class: "icon-btn"
}, $E = {
  key: 1,
  class: "icon-btn"
}, qE = {
  key: 0,
  class: "text"
}, KE = window.Vue.watch, ap = window.Vue.ref, eS = /* @__PURE__ */ _E({
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
    const o = t, r = rr(), s = tw(), a = ap(!1), u = ap((U = o.memo) == null ? void 0 : U.body);
    KE(o, () => {
      var V;
      u.value = (V = o.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const d = () => {
      a.value = !a.value;
    }, h = async () => {
      a.value = !1, await $N(o.id, o.type) ? (u.value = "", r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg("Error on removing memo :(");
    }, w = async () => {
      a.value = !1, u.value && u.value !== "" && (await LN(o.id, o.type, u.value) ? (r.selectedSituation = o.situationId, r.getSituation(o.situationId)) : s.showErrorMsg("Error on saving memo :("));
    };
    return (V, R) => (br(), la("div", {
      class: YE([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Jo("div", HE, [
        Jo("div", PE, rp(t.label), 1),
        Jo("div", jE, [
          Jo("div", XE, [
            a.value ? Eo("", !0) : (br(), op(zn(ne), {
              key: 0,
              icon: zn(BJ),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: d
            }, null, 8, ["icon"]))
          ]),
          a.value ? (br(), la("div", LE, [
            ip(zn(ne), {
              icon: zn(zc),
              "aria-hidden": "true",
              class: "icon save",
              onClick: w
            }, null, 8, ["icon"])
          ])) : Eo("", !0),
          u.value && u.value != "" || a.value ? (br(), la("div", $E, [
            ip(zn(ne), {
              icon: zn(ri),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: h
            }, null, 8, ["icon"])
          ])) : Eo("", !0)
        ])
      ]),
      Jo("div", null, [
        !a.value && u.value != null ? (br(), la("div", qE, rp(u.value), 1)) : Eo("", !0),
        a.value ? (br(), op(zn(zE), {
          key: 1,
          class: "textarea",
          modelValue: u.value,
          "onUpdate:modelValue": R[0] || (R[0] = (N) => u.value = N),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Eo("", !0)
      ])
    ], 2));
  }
});
const Ia = /* @__PURE__ */ Ze(eS, [["__scopeId", "data-v-c30021c9"]]), tS = window.Vue.defineComponent, Kl = window.Vue.unref, So = window.Vue.createVNode, ca = window.Vue.toDisplayString, sn = window.Vue.createElementVNode, sp = window.Vue.createTextVNode, nS = window.Vue.openBlock, rS = window.Vue.createElementBlock, oS = window.Vue.createCommentVNode, iS = window.Vue.pushScopeId, aS = window.Vue.popScopeId, nw = (t) => (iS("data-v-3aa991f7"), t = t(), aS(), t), sS = {
  key: 0,
  class: "card"
}, lS = { class: "row" }, cS = { class: "title" }, uS = ["innerHTML"], dS = /* @__PURE__ */ nw(() => /* @__PURE__ */ sn("strong", null, "First Event", -1)), hS = /* @__PURE__ */ nw(() => /* @__PURE__ */ sn("strong", null, "Last Event", -1)), fS = { class: "section memo-boxes" }, lp = window.Vue.ref, pS = window.Vue.watch, mS = /* @__PURE__ */ tS({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, s = lp(!1), a = lp(r.alarm);
    pS(r, () => {
      a.value = r.alarm, s.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const u = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (h) => {
      const w = await Mm(h);
      w && (a.value = w);
    };
    return (h, w) => {
      var U, V, R, N, A;
      return a.value ? (nS(), rS("div", sS, [
        sn("div", null, [
          sn("div", lS, [
            So(Kl($c), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (S) => s.value = S),
                u
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            sn("div", cS, ca(a.value.nodeLabel) + " - " + ca(a.value.id), 1),
            So(Fm, {
              severity: (U = a.value) == null ? void 0 : U.severity
            }, null, 8, ["severity"])
          ]),
          sn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, uS),
          sn("div", null, [
            dS,
            sp(" - " + ca(Kl(un)(a.value.firstEventTime)), 1)
          ]),
          sn("div", null, [
            hS,
            sp(" - " + ca(Kl(un)(a.value.lastEventTime)), 1)
          ]),
          sn("div", fS, [
            So(Ia, {
              id: (V = a.value) == null ? void 0 : V.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = a.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            So(Ia, {
              id: (N = a.value) == null ? void 0 : N.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (A = a.value) == null ? void 0 : A.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        So(Lm, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : oS("", !0);
    };
  }
});
const wS = /* @__PURE__ */ Ze(mS, [["__scopeId", "data-v-3aa991f7"]]), vS = window.Vue.defineComponent, VS = window.Vue.normalizeClass, TS = window.Vue.openBlock, gS = window.Vue.createElementBlock, US = window.Vue.createCommentVNode, RS = /* @__PURE__ */ vS({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, s) => o != null && o.severity ? (TS(), gS("span", {
      key: 0,
      class: VS(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : US("", !0);
  }
});
const NS = /* @__PURE__ */ Ze(RS, [["__scopeId", "data-v-e08880d6"]]), yS = window.Vue.defineComponent, Po = window.Vue.createElementVNode, rn = window.Vue.unref, rw = window.Vue.createTextVNode, cp = window.Vue.normalizeClass, ua = window.Vue.withCtx, Jr = window.Vue.createVNode, up = window.Vue.renderList, dp = window.Vue.Fragment, Gn = window.Vue.openBlock, Fo = window.Vue.createElementBlock, kS = window.Vue.toDisplayString, hp = window.Vue.createBlock, fp = window.Vue.createCommentVNode, MS = window.Vue.pushScopeId, ZS = window.Vue.popScopeId, ow = (t) => (MS("data-v-b7900fa2"), t = t(), ZS(), t), bS = { class: "container" }, JS = { class: "row" }, ES = /* @__PURE__ */ ow(() => /* @__PURE__ */ Po("div", { class: "title" }, "Alarms", -1)), SS = /* @__PURE__ */ rw(" ALL "), FS = { class: "row actions" }, AS = /* @__PURE__ */ ow(() => /* @__PURE__ */ Po("span", null, "Clear", -1)), WS = { class: "section" }, CS = {
  key: 0,
  class: "alarm-list"
}, pp = window.Vue.ref, xS = window.Vue.watch, BS = window.Vue.computed, IS = window.Vue.reactive, DS = /* @__PURE__ */ yS({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = rr(), s = pp(!1), a = BS(() => ge.exports.keys(ge.exports.groupBy(o.alarms, "severity"))), u = pp(["all"]), d = IS({
      selectedAlarms: [],
      alarms: o.alarms
    }), h = (V) => {
      u.value = u.value.filter((R) => R !== "all"), u.value.includes(V) ? u.value = u.value.filter((R) => R !== V) : u.value.push(V), V === "all" || u.value.length === 0 ? (u.value = ["all"], d.alarms = o.alarms) : d.alarms = o.alarms.filter(
        (R) => u.value.includes(R.severity)
      );
    };
    xS(o, () => {
      u.value = ["all"], d.alarms = o.alarms, d.selectedAlarms = [], s.value = !1;
    });
    const w = (V) => {
      d.selectedAlarms.includes(V) ? ge.exports.remove(d.selectedAlarms, (R) => R == V) : d.selectedAlarms.push(V);
    }, U = async () => {
      d.selectedAlarms.length && (await _N(d.selectedAlarms), r.selectedSituation = o.situationId, r.getSituation(o.situationId), d.selectedAlarms = [], s.value = !1);
    };
    return (V, R) => (Gn(), Fo("div", bS, [
      Po("div", JS, [
        ES,
        rn(a).length > 1 ? (Gn(), hp(rn(nb), {
          key: u.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: ua(() => [
            Jr(rn(Ff), {
              class: cp({ clicked: u.value.includes("all") }),
              onClick: R[0] || (R[0] = (N) => h("all"))
            }, {
              default: ua(() => [
                SS
              ]),
              _: 1
            }, 8, ["class"]),
            (Gn(!0), Fo(dp, null, up(rn(a), (N) => (Gn(), hp(rn(Ff), {
              class: cp([
                { clicked: u.value.includes(N) },
                `${N == null ? void 0 : N.toLowerCase()}-bg`
              ]),
              key: N,
              onClick: (A) => h(N)
            }, {
              default: ua(() => [
                Jr(NS, { severity: N }, null, 8, ["severity"]),
                rw(kS(N), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })) : fp("", !0)
      ]),
      Po("div", FS, [
        Jr(rn($c), {
          modelValue: s.value,
          "onUpdate:modelValue": R[1] || (R[1] = (N) => s.value = N),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Jr(rn(bn), {
          class: "acction-btn",
          onClick: R[2] || (R[2] = () => U())
        }, {
          default: ua(() => [
            Jr(rn(ne), {
              icon: rn(Xm),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            AS
          ]),
          _: 1
        })
      ]),
      Po("div", WS, [
        d.alarms.length > 0 ? (Gn(), Fo("div", CS, [
          (Gn(!0), Fo(dp, null, up(d.alarms, (N) => (Gn(), Fo("div", {
            key: N.id
          }, [
            Jr(wS, {
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
const OS = /* @__PURE__ */ Ze(DS, [["__scopeId", "data-v-b7900fa2"]]), QS = "/whoami", zS = async () => {
  try {
    const t = await En.get(QS);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, GS = window.Pinia.defineStore, li = GS("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await zS();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await ty();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await bm(t);
        this.allowSave = o;
      }
    }
  }
}), _S = window.Vue.defineComponent, Ct = window.Vue.createVNode, ht = window.Vue.unref, ec = window.Vue.normalizeClass, da = window.Vue.toDisplayString, _n = window.Vue.openBlock, Yn = window.Vue.createElementBlock, ha = window.Vue.createCommentVNode, YS = window.Vue.withCtx, xt = window.Vue.createElementVNode, HS = window.Vue.createTextVNode, PS = window.Vue.Fragment, jS = window.Vue.pushScopeId, XS = window.Vue.popScopeId, LS = (t) => (jS("data-v-2ac18d30"), t = t(), XS(), t), $S = { class: "section" }, qS = { class: "action-section" }, KS = {
  key: 0,
  class: "btn-row"
}, eF = { key: 0 }, tF = { key: 1 }, nF = {
  key: 0,
  class: "situation-detail"
}, rF = { class: "situation-info" }, oF = { class: "id" }, iF = { key: 0 }, aF = ["innerHTML"], sF = /* @__PURE__ */ LS(() => /* @__PURE__ */ xt("p", null, null, -1)), lF = { class: "boxes" }, cF = { class: "parameters" }, uF = { class: "section memo-boxes" }, dF = { key: 0 }, mp = window.Vue.ref, hF = window.Vue.watch, fF = /* @__PURE__ */ _S({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = rr(), a = ft.REJECTED, u = li(), d = mp(r.situationInfo.status), h = mp(r.situationInfo);
    hF(r, () => {
      d.value = r.situationInfo.status || "", h.value = r.situationInfo;
    });
    const w = (V) => {
      var R, N;
      Jm((R = r.situationInfo) == null ? void 0 : R.id, V.toLowerCase()), d.value = V, o("situation-status-changed", V, (N = r.situationInfo) == null ? void 0 : N.id);
    }, U = () => {
      var V;
      s.selectedSituation = (V = r.situationInfo) == null ? void 0 : V.id, s.getSituations();
    };
    return (V, R) => {
      var N, A, S, x, B, F, W, E, O, b, z, Q;
      return _n(), Yn(PS, null, [
        xt("div", $S, [
          xt("div", qS, [
            Ct(Lm, {
              alarm: h.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id,
              onActionClicked: U
            }, null, 8, ["alarm", "situation-id"]),
            ht(u).allowSave ? (_n(), Yn("div", KS, [
              Ct(ht(bn), {
                class: ec(["btn", { rejected: d.value == ht(a) }]),
                onClick: R[0] || (R[0] = () => w(ht(a)))
              }, {
                default: YS(() => [
                  Ct(ht(ne), {
                    icon: ht(Em),
                    "aria-hidden": "true",
                    class: ec(["icon reject", { rejected: d.value == ht(a) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == ht(a) ? (_n(), Yn("span", eF, da(ht(a)), 1)) : (_n(), Yn("span", tF, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : ha("", !0)
          ]),
          h.value ? (_n(), Yn("div", nF, [
            xt("div", {
              class: ec(["severity-line", [`${(A = (N = h.value) == null ? void 0 : N.severity) == null ? void 0 : A.toLowerCase()}-bg dark`]])
            }, null, 2),
            xt("div", rF, [
              xt("div", oF, [
                xt("div", null, [
                  HS(" Situation - " + da((S = h.value) == null ? void 0 : S.id) + " - affecting " + da(ht(ge.exports.size)(ht(ge.exports.groupBy)((x = h.value) == null ? void 0 : x.alarms, "nodeId"))) + " node ", 1),
                  h.value.alarms ? (_n(), Yn("span", iF, "having " + da(h.value.alarms.length) + " alarms ", 1)) : ha("", !0)
                ]),
                Ct(Fm, {
                  severity: (B = h.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              xt("span", {
                innerHTML: h.value.description
              }, null, 8, aF),
              sF,
              xt("div", lF, [
                Ct(Ql, {
                  label: "First Event",
                  info: ht(un)(h.value.firstEventTime)
                }, null, 8, ["info"]),
                Ct(Ql, {
                  label: "Last Event",
                  info: ht(un)(h.value.lastEventTime)
                }, null, 8, ["info"]),
                Ct(Ql, {
                  label: "Reduction Key",
                  info: h.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            xt("div", cF, [
              Ct(cM, {
                alarms: (F = h.value) == null ? void 0 : F.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : ha("", !0),
          xt("div", uF, [
            Ct(Ia, {
              id: (W = h.value) == null ? void 0 : W.id,
              situationId: (E = h.value) == null ? void 0 : E.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (O = h.value) == null ? void 0 : O.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ct(Ia, {
              id: (b = h.value) == null ? void 0 : b.id,
              situationId: (z = h.value) == null ? void 0 : z.id,
              label: "Journal Memo",
              type: "journal",
              memo: (Q = h.value) == null ? void 0 : Q.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        h.value.alarms && h.value.alarms.length ? (_n(), Yn("div", dF, [
          Ct(OS, {
            alarms: h.value.alarms,
            "situation-id": h.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : ha("", !0)
      ], 64);
    };
  }
});
const pF = /* @__PURE__ */ Ze(fF, [["__scopeId", "data-v-2ac18d30"]]);
const mF = window.Vue.openBlock, wF = window.Vue.createElementBlock, vF = window.Vue.createElementVNode;
var VF = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const TF = {}, gF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UF = /* @__PURE__ */ vF("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), RF = [
  UF
];
function NF(t, o) {
  return mF(), wF("svg", gF, RF);
}
var Kc = /* @__PURE__ */ VF(TF, [["render", NF]]);
const yF = window.Vue.watch, kF = window.Vue.onBeforeUnmount, MF = window.Vue.ref, ZF = window.Vue.onMounted, bF = (t) => {
  const o = MF(!1);
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
  return ZF(() => {
    const d = yF(o, (h) => {
      window && h ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    kF(() => {
      d(), u();
    });
  }), o;
}, JF = window.Vue.watch, EF = window.Vue.onBeforeUnmount, SF = window.Vue.ref, FF = window.Vue.onMounted, AF = (t, o) => {
  const r = SF(!1), s = (d) => {
    d.target === window && o(d);
  }, a = (d) => {
    let h = [];
    Array.isArray(t.value) ? h = t.value : h = [t.value], h.some((U) => U && U.contains(d.target)) || o(d);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return FF(() => {
    const d = JF(r, (h) => {
      document && window && h ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    EF(() => {
      d(), u();
    });
  }), r;
}, WF = window.Vue.watch, CF = window.Vue.onBeforeUnmount, xF = window.Vue.ref, iw = (t, o) => {
  const r = xF(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, h = WF([t, r], ([w, U], V) => {
    V && V.length && V[0] && V[0].removeEventListener("scroll", u, !0), U && w ? w.addEventListener("scroll", u, !0) : d();
  }, {
    immediate: !0
  });
  return CF(() => {
    h(), d();
  }), r;
}, BF = window.Vue.defineComponent, on = window.Vue.ref, wp = window.Vue.toRef, IF = window.Vue.onMounted, DF = window.Vue.watch, vp = window.Vue.computed, OF = window.Vue.nextTick, Vp = window.Vue.openBlock, Tp = window.Vue.createElementBlock, gp = window.Vue.renderSlot, QF = window.Vue.normalizeClass, zF = window.Vue.normalizeStyle, GF = window.Vue.createCommentVNode;
var _F = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const YF = {
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
}, HF = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, PF = BF({
  emits: HF,
  props: YF,
  setup(t, o) {
    const r = on(), s = on(), a = wp(t, "open"), u = wp(t, "noExpand"), d = on("auto"), h = on(), w = on(t.triggerId || le("feather-menu-trigger")), U = on(le("feather-menu-dropdown")), V = on(""), R = on("");
    IF(() => {
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
      N.value = !0, d.value = "auto", OF(() => {
        let { height: z, width: Q } = s.value.getBoundingClientRect();
        const H = A(), me = H.height, de = H.width;
        t.fill && Q < b.width ? (d.value = b.width + "px", Q = b.width) : d.value = Q + "px";
        let ve = 0;
        me - b.bottom < z && b.top >= z ? (ve = b.top - z, t.cover && (ve += b.height)) : (ve = b.bottom, t.cover && (ve -= b.height));
        let Ve = t.right ? b.right - Q : b.left;
        !t.right && b.right >= Q && de - b.left < Q && (Ve = b.right - Q), t.right && b.right <= Q && de - b.left > Q && (Ve = b.left), R.value = `${Ve}px`, V.value = `${ve}px`, N.value = !1;
      });
    }, B = AF(r, (b) => {
      o.emit("outside-click", b);
    }), F = bF(S), W = iw(h, S);
    DF([a, s], ([b, z]) => {
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
}), jF = ["data-ref-id"], XF = ["data-ref-id", "id"];
function LF(t, o, r, s, a, u) {
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
      class: QF(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: zF({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      gp(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, XF)) : GF("", !0)
  ], 8, jF);
}
var aw = /* @__PURE__ */ _F(PF, [["render", LF], ["__scopeId", "data-v-f75af406"]]);
const $F = window.Vue.defineComponent, qF = window.Vue.openBlock, KF = window.Vue.createElementBlock, eA = window.Vue.normalizeClass, tA = window.Vue.pushScopeId, nA = window.Vue.popScopeId, Zc = window.Vue.createElementVNode;
var rA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const oA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, iA = {
  click: (t) => !0
}, aA = $F({
  emits: iA,
  props: oA,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), sw = (t) => (tA("data-v-07e020f5"), t = t(), nA(), t), sA = /* @__PURE__ */ sw(() => /* @__PURE__ */ Zc("div", { class: "track" }, null, -1)), lA = /* @__PURE__ */ sw(() => /* @__PURE__ */ Zc("div", { class: "switcher" }, [
  /* @__PURE__ */ Zc("div", { class: "switch-circle" })
], -1)), cA = [
  sA,
  lA
];
function uA(t, o, r, s, a, u) {
  return qF(), KF("div", {
    class: eA(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, cA, 2);
}
var dA = /* @__PURE__ */ rA(aA, [["render", uA], ["__scopeId", "data-v-07e020f5"]]), hA = Object.defineProperty, fA = Object.defineProperties, pA = Object.getOwnPropertyDescriptors, Up = Object.getOwnPropertySymbols, mA = Object.prototype.hasOwnProperty, wA = Object.prototype.propertyIsEnumerable, Rp = (t, o, r) => o in t ? hA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Np = (t, o) => {
  for (var r in o || (o = {}))
    mA.call(o, r) && Rp(t, r, o[r]);
  if (Up)
    for (var r of Up(o))
      wA.call(o, r) && Rp(t, r, o[r]);
  return t;
}, yp = (t, o) => fA(t, pA(o));
const eu = window.Vue.defineComponent, Hn = window.Vue.h, vA = window.Vue.openBlock, VA = window.Vue.createElementBlock, TA = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var lw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gA = {
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
}, UA = eu({
  inheritAttrs: !1,
  props: gA,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Hn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Hn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Hn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Hn(er);
    if (this.asLi)
      return Hn("li", yp(Np({}, this.$attrs), {
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
    const u = Hn("a", yp(Np({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, s, a]);
    return Hn("li", {}, [u]);
  }
});
var ci = /* @__PURE__ */ lw(UA, [["__scopeId", "data-v-7c46b2b3"]]);
eu({
  components: {
    FeatherListItem: ci
  }
});
const RA = {}, NA = { class: "feather-list" };
function yA(t, o) {
  return vA(), VA("ul", NA, [
    TA(t.$slots, "default", {}, void 0, !0)
  ]);
}
var tu = /* @__PURE__ */ lw(RA, [["render", yA], ["__scopeId", "data-v-941a1d50"]]);
const kA = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, MA = {
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
  emits: kA,
  props: MA,
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
  components: { SwitchRender: dA, FeatherListItem: ci }
});
const ti = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const s = getComputedStyle(t);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
var ZA = Object.defineProperty, bA = Object.defineProperties, JA = Object.getOwnPropertyDescriptors, kp = Object.getOwnPropertySymbols, EA = Object.prototype.hasOwnProperty, SA = Object.prototype.propertyIsEnumerable, Mp = (t, o, r) => o in t ? ZA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, bc = (t, o) => {
  for (var r in o || (o = {}))
    EA.call(o, r) && Mp(t, r, o[r]);
  if (kp)
    for (var r of kp(o))
      SA.call(o, r) && Mp(t, r, o[r]);
  return t;
}, FA = (t, o) => bA(t, JA(o));
const cw = window.Vue.defineComponent, $n = window.Vue.resolveComponent, ya = window.Vue.openBlock, Zp = window.Vue.createBlock, ka = window.Vue.mergeProps, qn = window.Vue.withCtx, uw = window.Vue.createElementBlock, AA = window.Vue.Fragment, WA = window.Vue.renderList, CA = window.Vue.createTextVNode, xA = window.Vue.toDisplayString, BA = window.Vue.computed, bp = window.Vue.toRef, Ao = window.Vue.createVNode, Jp = window.Vue.toHandlers, IA = window.Vue.renderSlot, DA = window.Vue.normalizeClass, OA = window.Vue.createElementVNode;
var dw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QA = cw({
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
function zA(t, o, r, s, a, u) {
  const d = $n("FeatherListItem"), h = $n("FeatherList");
  return ya(), Zp(h, ka(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: qn(() => [
      (ya(!0), uw(AA, null, WA(t.options, (w, U) => (ya(), Zp(d, {
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
        default: qn(() => [
          CA(xA(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var GA = /* @__PURE__ */ dw(QA, [["render", zA], ["__scopeId", "data-v-eae820da"]]);
const _A = FA(bc(bc({}, Im), ja), {
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
}), YA = {
  "update:modelValue": (t) => !0
}, HA = cw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: YA,
  props: _A,
  setup(t, o) {
    Xa(t), Dm(t);
    const r = BA(() => le("feather-select-input")), { validate: s } = Ha(r, bp(t, "modelValue"), t.label, t.schema, bp(t, "error"));
    return bc({
      inputId: r,
      validate: s
    }, Pa(o.attrs));
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
      Hr(this.delayTimeout), this.delayTimeout = Yr(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Bm,
    InputSubText: Ya,
    FeatherMenu: aw,
    List: GA,
    FeatherIcon: ne
  }
});
function PA(t, o, r, s, a, u) {
  const d = $n("FeatherIcon"), h = $n("InputWrapper"), w = $n("List"), U = $n("FeatherMenu"), V = $n("InputSubText");
  return ya(), uw("div", ka(t.inherittedAttrs, { class: "feather-select-container" }), [
    Ao(U, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: qn((R) => [
        Ao(h, ka({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Jp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: qn(() => [
            IA(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: qn(() => [
            Ao(d, {
              class: DA(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: qn(() => [
            OA("input", ka(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: qn(() => [
        Ao(w, {
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
    Ao(V, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var jA = /* @__PURE__ */ dw(HA, [["render", PA], ["__scopeId", "data-v-ecb32d90"]]);
const XA = window.Vue.openBlock, LA = window.Vue.createElementBlock, hw = window.Vue.createElementVNode;
var $A = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qA = {}, KA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eW = /* @__PURE__ */ hw("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), tW = /* @__PURE__ */ hw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), nW = [
  eW,
  tW
];
function rW(t, o) {
  return XA(), LA("svg", KA, nW);
}
var oW = /* @__PURE__ */ $A(qA, [["render", rW]]);
const Ma = window.Vue.openBlock, Jc = window.Vue.createElementBlock, fw = window.Vue.createElementVNode, iW = window.Vue.defineComponent, Pn = window.Vue.ref, aW = window.Vue.provide, Ep = window.Vue.computed, sW = window.Vue.onUnmounted, Sp = window.Vue.toRef, lW = window.Vue.resolveComponent, cW = window.Vue.Fragment, uW = window.Vue.createBlock, dW = window.Vue.Teleport, Fp = window.Vue.createVNode, hW = window.Vue.Transition, fW = window.Vue.withCtx, pW = window.Vue.normalizeClass, mW = window.Vue.normalizeStyle, wW = window.Vue.toDisplayString, vW = window.Vue.createCommentVNode, VW = window.Vue.renderSlot, tc = window.Vue.nextTick;
var pw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const TW = {}, gW = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, UW = /* @__PURE__ */ fw("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), RW = [
  UW
];
function NW(t, o) {
  return Ma(), Jc("svg", gW, RW);
}
var yW = /* @__PURE__ */ pw(TW, [["render", NW]]), De = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(De || {}), ln = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(ln || {});
const kW = (t, o, r, s = 9) => {
  const a = window.innerHeight - t.bottom, u = window.innerWidth - t.right, d = [];
  t.top >= o.height + s && d.push(De.top), a >= o.height + s && d.push(De.bottom);
  const h = [];
  u >= o.width + s && h.push(De.right), t.left >= o.width + s && h.push(De.left);
  let w = [...h, ...d];
  return (r === De.top || r === De.bottom) && (w = [...d, ...h]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, MW = (t, o, r, s, a = 28) => {
  if (t === De.left || t === De.right)
    return ln.center;
  const u = o.left + o.width / 2, d = window.innerWidth - o.right, h = [], w = u, U = d + o.width / 2, V = r.width - a, R = r.width / 2;
  return w >= R && U >= R && h.push(ln.center), U >= V && h.push(ln.left), w >= V && h.push(ln.right), h.indexOf(s) > -1 ? s : h.length ? h[0] : s;
}, ZW = {
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
    default: () => ln.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, bW = iW({
  props: ZW,
  setup(t) {
    const o = Pn(!1), r = Pn(!1), s = le("feather-tooltip-trigger"), a = le("feather-tooltip"), u = "data-feather-tooltip";
    aW("feather-has-tooltip", !0);
    let d = 0;
    const h = () => {
      Hr(d), o.value || (d = Yr(x, t.enterDelay));
    }, w = () => {
      Hr(d), d = Yr(B, t.exitDelay);
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
    }, N = Pn(document), A = iw(N, () => B(!0));
    sW(() => B(!0));
    const S = () => document.getElementById(a), x = () => {
      r.value = !1, o.value = !0, tc(() => {
        const ve = S();
        de(ve), o.value = !1, tc(() => {
          r.value = !0, o.value = !0, A.value = !0;
        });
      });
    }, B = (ve = !1) => {
      z.value = "", b.value = "", Q.value = "", H.value = "", o.value = !1, ve && (r.value = !1), A.value = !1;
    }, F = Sp(t, "placement"), W = Sp(t, "pointerAlignment"), E = 8, O = 24, b = Pn(""), z = Pn(""), Q = Pn(""), H = Pn(""), me = Ep(() => H.value ? "p-" + H.value : !1), de = (ve) => {
      const Ve = document.querySelector(`[${u}=${s}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      tc(() => {
        const Ue = Ve.getBoundingClientRect(), ke = ve.getBoundingClientRect(), ce = kW(Ue, ke, F.value, E), We = MW(ce, Ue, ke, W.value, O);
        Q.value = We.toString(), H.value = ce.toString();
        let Ce = 0, He = 0;
        if ((ce === De.left || ce === De.right) && (Ce = Ue.top + Ue.height / 2 - ke.height / 2, ce === De.left && (He = Ue.left - ke.width - E), ce === De.right && (He = Ue.right)), ce === De.top || ce === De.bottom) {
          Ce = Ue.top - ke.height - E, ce === De.bottom && (Ce = Ue.bottom);
          const Kr = Ue.left + Ue.width / 2;
          switch (We) {
            case ln.center:
              He = Kr - ke.width / 2;
              break;
            case ln.left:
              He = Kr - O;
              break;
            case ln.right:
              He = Kr - ke.width + O;
              break;
          }
        }
        b.value = Ce.toString() + "px", z.value = He.toString() + "px";
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
    Pointer: yW
  }
}), JW = ["id"];
function EW(t, o, r, s, a, u) {
  const d = lW("Pointer");
  return Ma(), Jc(cW, null, [
    (Ma(), uW(dW, { to: "body" }, [
      Fp(hW, { css: t.animate }, {
        default: fW(() => [
          t.show ? (Ma(), Jc("div", {
            key: 0,
            class: pW(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: mW({ left: t.left, top: t.top })
          }, [
            fw("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, wW(t.title), 9, JW),
            Fp(d, { class: "tooltip-pointer" })
          ], 6)) : vW("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    VW(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Ap = /* @__PURE__ */ pw(bW, [["render", EW], ["__scopeId", "data-v-3da6b22e"]]);
const SW = window.Vue.defineComponent, nc = window.Vue.normalizeStyle, rc = window.Vue.createElementVNode, Wo = window.Vue.unref, Wp = window.Vue.toHandlers, Cp = window.Vue.mergeProps, xp = window.Vue.withCtx, Bp = window.Vue.createVNode, FW = window.Vue.renderList, AW = window.Vue.Fragment, Co = window.Vue.openBlock, xo = window.Vue.createElementBlock, Ip = window.Vue.normalizeClass, Dp = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WW = { class: "row" }, CW = /* @__PURE__ */ SW({
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
    return (u, d) => (Co(), xo("div", WW, [
      rc("div", {
        class: "line-gray",
        style: nc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Bp(Wo(Ap), {
        title: Wo(un)(t.alarm.firstEventTime)
      }, {
        default: xp(({ attrs: h, on: w }) => [
          rc("div", Cp({ class: "circle" }, h, Wp(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Co(!0), xo(AW, null, FW(o.events, (h, w) => (Co(), xo("div", {
        class: "event-trim",
        key: h.id
      }, [
        o.events[w + 1] ? (Co(), xo("div", {
          key: 0,
          class: Ip(["line", [`${h.severity.toLowerCase()}-bg dark`]]),
          style: nc({
            width: s(h.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Dp("", !0),
        Bp(Wo(Ap), {
          title: Wo(un)(t.alarm.firstEventTime)
        }, {
          default: xp(({ attrs: U, on: V }) => [
            o.events[w + 1] ? (Co(), xo("div", Cp({ key: 0 }, U, Wp(V), {
              class: ["event", [`${h.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Dp("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      rc("div", {
        class: Ip(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: nc({
          width: s(t.events[t.events.length - 1].createTime, Wo(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const xW = /* @__PURE__ */ Ze(CW, [["__scopeId", "data-v-26ca04d6"]]), BW = window.Vue.openBlock, IW = window.Vue.createElementBlock, mw = window.Vue.createElementVNode;
var DW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OW = {}, QW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zW = /* @__PURE__ */ mw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), GW = /* @__PURE__ */ mw("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), _W = [
  zW,
  GW
];
function YW(t, o) {
  return BW(), IW("svg", QW, _W);
}
var HW = /* @__PURE__ */ DW(OW, [["render", YW]]);
const PW = window.Vue.openBlock, jW = window.Vue.createElementBlock, XW = window.Vue.createElementVNode;
var LW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $W = {}, qW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KW = /* @__PURE__ */ XW("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), eC = [
  KW
];
function tC(t, o) {
  return PW(), jW("svg", qW, eC);
}
var nC = /* @__PURE__ */ LW($W, [["render", tC]]);
const rC = window.Vue.openBlock, oC = window.Vue.createElementBlock, iC = window.Vue.createElementVNode;
var aC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sC = {}, lC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cC = /* @__PURE__ */ iC("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), uC = [
  cC
];
function dC(t, o) {
  return rC(), oC("svg", lC, uC);
}
var ww = /* @__PURE__ */ aC(sC, [["render", dC]]);
const hC = window.Vue.defineComponent, Ec = window.Vue.createElementVNode, fC = window.Vue.renderList, Op = window.Vue.Fragment, oc = window.Vue.openBlock, ic = window.Vue.createElementBlock, pC = window.Vue.normalizeClass, mC = window.Vue.unref, Qp = window.Vue.toDisplayString, wC = window.Vue.pushScopeId, vC = window.Vue.popScopeId, VC = (t) => (wC("data-v-2e087f7b"), t = t(), vC(), t), TC = /* @__PURE__ */ VC(() => /* @__PURE__ */ Ec("strong", null, "Events:", -1)), gC = /* @__PURE__ */ hC({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const o = t;
    return (r, s) => (oc(), ic(Op, null, [
      TC,
      (oc(!0), ic(Op, null, fC(o.events, (a) => (oc(), ic("div", {
        class: "event-description",
        key: a.id
      }, [
        Ec("div", {
          class: pC(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Ec("div", null, Qp(mC(un)(a.createTime)) + " - " + Qp(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const UC = /* @__PURE__ */ Ze(gC, [["__scopeId", "data-v-2e087f7b"]]), RC = window.Vue.defineComponent, NC = window.Vue.normalizeClass, tt = window.Vue.createElementVNode, Er = window.Vue.toDisplayString, Ie = window.Vue.unref, Sr = window.Vue.createVNode, vw = window.Vue.createTextVNode, yC = window.Vue.renderList, zp = window.Vue.Fragment, Rn = window.Vue.openBlock, Fr = window.Vue.createElementBlock, Gp = window.Vue.createBlock, ac = window.Vue.createCommentVNode, kC = window.Vue.pushScopeId, MC = window.Vue.popScopeId, ZC = (t) => (kC("data-v-a3e02225"), t = t(), MC(), t), bC = { class: "section detail" }, JC = { class: "id" }, EC = {
  key: 0,
  class: "section"
}, SC = /* @__PURE__ */ ZC(() => /* @__PURE__ */ tt("div", { class: "id" }, "Alarms", -1)), FC = { class: "action-btns" }, AC = { class: "zoom" }, WC = /* @__PURE__ */ vw(" Zoom "), CC = { class: "alarms" }, xC = { class: "times" }, BC = {
  key: 0,
  class: "timeline-container"
}, IC = { class: "alarm-id" }, DC = {
  key: 0,
  class: "panel"
}, Ar = window.Vue.ref, OC = window.Vue.watch, QC = /* @__PURE__ */ RC({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(t) {
    var O, b;
    const o = t, r = rr(), s = 1250;
    let a = Ar(s);
    const u = Ar(0), d = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], h = Ar(d[0]), w = new Date().getTime(), U = () => {
      var z, Q;
      if (!o.situation.events) {
        const H = (Q = (z = o.situation) == null ? void 0 : z.alarms) == null ? void 0 : Q.map((me) => me.id);
        r.getEvents(o.situation.id, H);
      }
    };
    U();
    const V = () => a.value / (Number(w) - Number(N.value)), R = Ar(o.situation.alarms), N = Ar(
      ((b = ge.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : b.firstEventTime) || new Date().getTime()
    ), A = Ar(V());
    OC(o, () => {
      var z, Q;
      N.value = ((Q = ge.exports.minBy((z = o.situation) == null ? void 0 : z.alarms, "firstEventTime")) == null ? void 0 : Q.firstEventTime) || new Date().getTime(), U(), a.value = s, A.value = V(), R.value = o.situation.alarms, h.value = d[0];
    });
    const S = (z) => {
      if ((z == null ? void 0 : z.id) === 1 && (R.value = o.situation.alarms), (z == null ? void 0 : z.id) === 2) {
        const Q = ge.exports.groupBy(R.value, "severity"), H = [
          ...Q.CRITICAL || [],
          ...Q.MAJOR || [],
          ...Q.MINOR || [],
          ...Q.WARNING || [],
          ...Q.NORMAL || [],
          ...Q.CLEARED || [],
          ...Q.INDETERMINATE || []
        ];
        R.value = H.filter((me) => me);
      }
      if ((z == null ? void 0 : z.id) === 3) {
        const Q = ge.exports.reverse(
          ge.exports.sortBy(
            o.situation.alarms,
            (H) => Number(H.lastEventTime) - Number(H.firstEventTime)
          )
        );
        R.value = Q;
      }
    }, x = () => {
      a.value += 100, A.value = V();
    }, B = () => {
      a.value -= 100, A.value = V();
    }, F = () => {
      a.value = s, A.value = V();
    }, W = (z) => {
      u.value = z;
    }, E = () => {
      u.value = 0;
    };
    return (z, Q) => {
      var H, me;
      return Rn(), Fr(zp, null, [
        tt("div", bC, [
          tt("div", {
            class: NC(["severity-line", [`${(me = (H = o.situation) == null ? void 0 : H.severity) == null ? void 0 : me.toLowerCase()}-bg dark`]])
          }, null, 2),
          tt("div", null, [
            tt("div", JC, "Situation " + Er(o.situation.id), 1),
            tt("div", null, " Duration: " + Er(Ie(T2)(Ie(w), new Date(N.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (Rn(), Fr("div", EC, [
          SC,
          tt("div", FC, [
            Sr(Ie(jA), {
              class: "select",
              label: "Sort by:",
              options: d,
              modelValue: h.value,
              "onUpdate:modelValue": [
                Q[0] || (Q[0] = (de) => h.value = de),
                S
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            tt("div", AC, [
              WC,
              tt("div", null, [
                Sr(Ie(ne), {
                  icon: Ie(oW),
                  class: "zoom-icon",
                  onClick: x
                }, null, 8, ["icon"]),
                Sr(Ie(ne), {
                  icon: Ie(nC),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                Sr(Ie(ne), {
                  icon: Ie(HW),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          tt("div", CC, [
            tt("div", xC, [
              tt("div", null, Er(Ie(un)(N.value)), 1),
              tt("div", null, Er(Ie(un)(Ie(w))), 1)
            ]),
            t.situation.events ? (Rn(), Fr("div", BC, [
              (Rn(!0), Fr(zp, null, yC(R.value, (de) => (Rn(), Fr("div", {
                class: "timeline",
                key: de.id
              }, [
                tt("div", IC, [
                  vw(Er(de.nodeLabel) + " - " + Er(de.id) + " ", 1),
                  u.value === de.id ? (Rn(), Gp(Ie(ne), {
                    key: 0,
                    icon: Ie(Kc),
                    class: "zoom-icon expand",
                    onClick: E
                  }, null, 8, ["icon"])) : (Rn(), Gp(Ie(ne), {
                    key: 1,
                    icon: Ie(ww),
                    class: "zoom-icon expand",
                    onClick: () => W(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Sr(xW, {
                  alarm: de,
                  proportion: A.value,
                  "min-start": N.value,
                  "max-end": Ie(w),
                  events: o.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "max-end", "events"]),
                u.value === de.id ? (Rn(), Fr("div", DC, [
                  Sr(UC, {
                    events: o.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : ac("", !0)
              ]))), 128))
            ])) : ac("", !0)
          ])
        ])) : ac("", !0)
      ], 64);
    };
  }
});
const zC = /* @__PURE__ */ Ze(QC, [["__scopeId", "data-v-a3e02225"]]), GC = window.Vue.defineComponent, Vw = window.Vue.createTextVNode, Bo = window.Vue.unref, Wr = window.Vue.withCtx, jn = window.Vue.createVNode, _C = window.Vue.openBlock, YC = window.Vue.createElementBlock, HC = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const PC = {
  key: 0,
  class: "detail"
}, jC = /* @__PURE__ */ Vw("Details"), XC = /* @__PURE__ */ Vw("Metrics"), LC = window.Vue.ref, $C = window.Vue.watch, qC = /* @__PURE__ */ GC({
  __name: "SituationDetail",
  props: {
    index: null,
    forceUpdate: { type: Boolean }
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: o }) {
    const r = t, s = rr(), a = LC(s.situations[r.index]), u = (d, h) => {
      o("situation-status-changed", d, h);
    };
    return $C(r, () => {
      a.value = s.situations[r.index];
    }), (d, h) => a.value ? (_C(), YC("div", PC, [
      jn(Bo(Bk), null, {
        tabs: Wr(() => [
          jn(Bo(Vf), null, {
            default: Wr(() => [
              jC
            ]),
            _: 1
          }),
          jn(Bo(Vf), null, {
            default: Wr(() => [
              XC
            ]),
            _: 1
          })
        ]),
        default: Wr(() => [
          jn(Bo(Tf), { class: "panel" }, {
            default: Wr(() => [
              jn(pF, {
                "situation-info": a.value,
                onSituationStatusChanged: u
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          jn(Bo(Tf), { class: "panel" }, {
            default: Wr(() => [
              jn(zC, { situation: a.value }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : HC("", !0);
  }
});
const KC = /* @__PURE__ */ Ze(qC, [["__scopeId", "data-v-d7dbeb01"]]), ex = window.Vue.openBlock, tx = window.Vue.createElementBlock, nx = window.Vue.createElementVNode;
var rx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ox = {}, ix = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ax = /* @__PURE__ */ nx("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), sx = [
  ax
];
function lx(t, o) {
  return ex(), tx("svg", ix, sx);
}
var cx = /* @__PURE__ */ rx(ox, [["render", lx]]);
const ux = window.Vue.openBlock, dx = window.Vue.createElementBlock, Tw = window.Vue.createElementVNode;
var hx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fx = {}, px = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mx = /* @__PURE__ */ Tw("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), wx = /* @__PURE__ */ Tw("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), vx = [
  mx,
  wx
];
function Vx(t, o) {
  return ux(), dx("svg", px, vx);
}
var Tx = /* @__PURE__ */ hx(fx, [["render", Vx]]);
const gx = window.Vue.openBlock, Ux = window.Vue.createElementBlock, Rx = window.Vue.createElementVNode;
var Nx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yx = {}, kx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Mx = /* @__PURE__ */ Rx("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Zx = [
  Mx
];
function bx(t, o) {
  return gx(), Ux("svg", kx, Zx);
}
var Jx = /* @__PURE__ */ Nx(yx, [["render", bx]]);
const Ex = window.Vue.defineComponent, Nn = window.Vue.unref, fa = window.Vue.normalizeClass, pa = window.Vue.createVNode, Sx = window.Vue.openBlock, Fx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ax = { class: "paginator" }, Wx = /* @__PURE__ */ Ex({
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
    return (a, u) => (Sx(), Fx("div", Ax, [
      pa(Nn(ne), {
        icon: Nn(cx),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (d) => s(0))
      }, null, 8, ["icon", "class"]),
      pa(Nn(ne), {
        icon: Nn(Jx),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (d) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      pa(Nn(ne), {
        icon: Nn(ww),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (d) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      pa(Nn(ne), {
        icon: Nn(Tx),
        "aria-hidden": "true",
        class: fa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (d) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Cx = /* @__PURE__ */ Ze(Wx, [["__scopeId", "data-v-40758818"]]);
const xx = window.Vue.openBlock, Bx = window.Vue.createElementBlock, Ix = window.Vue.createElementVNode;
var Dx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ox = {}, Qx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zx = /* @__PURE__ */ Ix("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), Gx = [
  zx
];
function _x(t, o) {
  return xx(), Bx("svg", Qx, Gx);
}
var Yx = /* @__PURE__ */ Dx(Ox, [["render", _x]]);
const Hx = window.Vue.openBlock, Px = window.Vue.createElementBlock, nu = window.Vue.createElementVNode;
var jx = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Xx = {}, Lx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $x = /* @__PURE__ */ nu("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), qx = /* @__PURE__ */ nu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Kx = /* @__PURE__ */ nu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), eB = [
  $x,
  qx,
  Kx
];
function tB(t, o) {
  return Hx(), Px("svg", Lx, eB);
}
var nB = /* @__PURE__ */ jx(Xx, [["render", tB]]), rB = Object.defineProperty, oB = Object.defineProperties, iB = Object.getOwnPropertyDescriptors, _p = Object.getOwnPropertySymbols, aB = Object.prototype.hasOwnProperty, sB = Object.prototype.propertyIsEnumerable, Yp = (t, o, r) => o in t ? rB(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, mt = (t, o) => {
  for (var r in o || (o = {}))
    aB.call(o, r) && Yp(t, r, o[r]);
  if (_p)
    for (var r of _p(o))
      sB.call(o, r) && Yp(t, r, o[r]);
  return t;
}, lB = (t, o) => oB(t, iB(o));
const qr = window.Vue.defineComponent, oe = window.Vue.openBlock, Ee = window.Vue.createElementBlock, nt = window.Vue.createElementVNode, Bt = window.Vue.toDisplayString, kt = window.Vue.createCommentVNode, Me = window.Vue.resolveComponent, yt = window.Vue.createBlock, _e = window.Vue.withCtx, zr = window.Vue.Fragment, jo = window.Vue.renderList, rt = window.Vue.createVNode, ru = window.Vue.withModifiers, Kn = window.Vue.normalizeClass, Sc = window.Vue.renderSlot, gw = window.Vue.createTextVNode, cB = window.Vue.pushScopeId, uB = window.Vue.popScopeId, Uw = window.Vue.reactive, Rw = window.Vue.nextTick, sc = window.Vue.markRaw, lc = window.Vue.toRef, Hp = window.Vue.computed, dB = window.Vue.toRefs, Cr = window.Vue.ref, cc = window.Vue.mergeProps, Pp = window.Vue.toHandlers, ma = window.Vue.withDirectives, wa = window.Vue.vShow;
var es = {
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
}, or = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hB = qr({
  mixins: [],
  props: mt(mt({
    text: {
      type: String,
      required: !0
    }
  }, es), ou),
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
}), fB = {
  key: 0,
  class: "highlight"
}, pB = { key: 1 };
function mB(t, o, r, s, a, u) {
  return oe(), Ee("span", null, [
    nt("span", null, Bt(t.beginning), 1),
    t.highlighted ? (oe(), Ee("span", fB, Bt(t.highlighted), 1)) : kt("", !0),
    t.end ? (oe(), Ee("span", pB, Bt(t.end), 1)) : kt("", !0)
  ]);
}
var Nw = /* @__PURE__ */ or(hB, [["render", mB], ["__scopeId", "data-v-8abe2492"]]);
const wB = qr({
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
  }, es), ou),
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
    Highlighter: Nw
  }
}), vB = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function VB(t, o, r, s, a, u) {
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
      (oe(!0), Ee(zr, null, jo(t.items, (U, V) => (oe(), Ee(zr, {
        key: U[t.textProp]
      }, [
        rt(h, {
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
            rt(d, {
              highlight: t.highlight,
              query: t.query,
              text: U[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            U._new ? (oe(), Ee("span", vB, Bt(t.newLabel), 1)) : kt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && U._new ? (oe(), Ee("li", {
          role: "presentation",
          key: U[t.textProp] + "hr",
          class: "hr"
        })) : kt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var TB = /* @__PURE__ */ or(wB, [["render", VB], ["__scopeId", "data-v-f623434a"]]);
const gB = qr({
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
  }, es), ou),
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
    Highlighter: Nw
  }
}), UB = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, RB = ["aria-multiselectable"], NB = { role: "row" }, yB = ["aria-selected", "onClick"], kB = ["id", "aria-selected"], MB = { key: 1 };
function ZB(t, o, r, s, a, u) {
  const d = Me("Highlighter");
  return oe(), Ee("div", UB, [
    nt("table", {
      class: Kn(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      nt("thead", null, [
        nt("tr", NB, [
          (oe(!0), Ee(zr, null, jo(t.config, (h) => (oe(), Ee("th", {
            key: h.title
          }, Bt(h.title), 1))), 128))
        ])
      ]),
      nt("tbody", null, [
        (oe(!0), Ee(zr, null, jo(t.items, (h, w) => (oe(), Ee("tr", {
          role: "row",
          key: h[t.textProp],
          "aria-selected": t.isSelected(h),
          class: Kn({ focus: t.isActive(w), selected: t.isSelected(h) }),
          onClick: ru((U) => t.select(h), ["stop"])
        }, [
          (oe(!0), Ee(zr, null, jo(t.config, (U, V) => (oe(), Ee("td", {
            key: h[t.textProp] + U.prop,
            id: t.getId(w, V),
            "aria-selected": t.isSelected(h),
            class: Kn({ "focus-cell": t.isActiveCell(w, V) })
          }, [
            U.prop === t.textProp ? (oe(), yt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: h[U.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Ee("p", MB, Bt(h[U.prop]), 1))
          ], 10, kB))), 128))
        ], 10, yB))), 128))
      ])
    ], 10, RB)
  ], 512);
}
var bB = /* @__PURE__ */ or(gB, [["render", ZB], ["__scopeId", "data-v-58c88fd1"]]);
const JB = qr({
  components: {
    FeatherList: tu,
    FeatherListItem: ci
  }
});
function EB(t, o, r, s, a, u) {
  const d = Me("FeatherListItem"), h = Me("FeatherList");
  return oe(), yt(h, { class: "result-list" }, {
    default: _e(() => [
      rt(d, { "as-li": "" }, {
        default: _e(() => [
          Sc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var SB = /* @__PURE__ */ or(JB, [["render", EB], ["__scopeId", "data-v-06b752c6"]]);
const FB = qr({
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
    BaseChip: $a,
    BaseChipLabel: qa,
    BaseChipPreIcon: Ka
  }
});
function AB(t, o, r, s, a, u) {
  const d = Me("FeatherIcon"), h = Me("BaseChipPreIcon"), w = Me("BaseChipLabel"), U = Me("Cancel"), V = Me("BaseChip");
  return oe(), yt(V, {
    class: Kn(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: _e(() => [
      t.showPreIcon ? (oe(), yt(h, { key: 0 }, {
        default: _e(() => {
          var R, N;
          return [
            rt(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (N = t.pre) == null ? void 0 : N.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : kt("", !0),
      rt(w, null, {
        default: _e(() => [
          gw(Bt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? kt("", !0) : (oe(), Ee("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = ru((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        rt(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: _e(() => [
            rt(U)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var WB = /* @__PURE__ */ or(FB, [["render", AB], ["__scopeId", "data-v-e0fc6ac0"]]);
const CB = {}, xB = (t) => (cB("data-v-aa720e06"), t = t(), uB(), t), BB = { class: "spinner-container" }, IB = /* @__PURE__ */ xB(() => /* @__PURE__ */ nt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ nt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), DB = [
  IB
];
function OB(t, o) {
  return oe(), Ee("div", BB, DB);
}
var QB = /* @__PURE__ */ or(CB, [["render", OB], ["__scopeId", "data-v-aa720e06"]]), ts = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(ts || {});
const yw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, zB = mt(mt(mt({
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
    validator: (t) => !!ts[t]
  },
  labels: {
    type: Object,
    default: () => yw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, es), ja), Im), GB = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, _B = (t, o, r, s) => {
  if (r.toLowerCase() === ts.multi) {
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
}, YB = () => {
  const t = Uw({
    row: -1
  }), o = (u) => {
    Rw(() => {
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
  const o = Uw({
    row: -1,
    col: -1
  }), r = (d, h) => {
    Rw(() => {
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
}, PB = qr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: GB,
  props: zB,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ts.multi;
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
      return sc(Yx);
    },
    minCharIcon() {
      return sc(nB);
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
      r !== void 0 && (Hr(this.typingTimeout), this.typingTimeout = Yr(() => {
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
    const r = Am(lc(t, "labels"), yw);
    Xa(t), Dm(t);
    let s;
    t.gridConfig ? s = HB(t.gridConfig) : s = YB();
    const a = lc(t, "id"), u = Hp(() => a.value ? a.value : le("feather-autocomplete-input")), { validate: d } = Ha(u, lc(t, "modelValue"), t.label, t.schema), { selectionLimit: h, modelValue: w, textProp: U, allowNew: V, type: R, minChar: N } = dB(t), A = Cr(!1), S = Cr(!1), x = Cr(!1), B = Cr(""), F = Cr([]), W = Cr(), E = Hp(() => W.value), O = () => {
      A.value && !S.value && (B.value && B.value.length >= N.value && o.emit("search", B.value), N.value <= 0 && o.emit("search", B.value || ""), F.value = [], s.reset());
    }, b = _B({
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
    return lB(mt(mt({}, r), Pa(o.attrs)), {
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
    InputWrapper: Bm,
    InputSubText: Ya,
    AutocompleteResults: TB,
    AutocompleteResultsGrid: bB,
    Chip: WB,
    MenuMessage: SB,
    FeatherIcon: ne,
    FeatherMenu: aw,
    Spinner: QB
  }
}), jB = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, XB = ["id"], LB = { "data-ref-id": "feather-autocomplete-no-results" }, $B = { "data-ref-id": "feather-autocomplete-selection-limit" }, qB = { "data-ref-id": "feather-autocomplete-min-char" };
function KB(t, o, r, s, a, u) {
  const d = Me("FeatherIcon"), h = Me("Chip"), w = Me("InputWrapper"), U = Me("AutocompleteResults"), V = Me("AutocompleteResultsGrid"), R = Me("MenuMessage"), N = Me("Spinner"), A = Me("FeatherMenu"), S = Me("InputSubText");
  return oe(), Ee("div", cc(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    rt(A, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: Kn(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: _e(({ attrs: x, on: B }) => [
        rt(w, cc(mt(mt({}, x), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, Pp(B), { ref: "scroll" }), {
          pre: _e(() => [
            Sc(t.$slots, "pre", {}, () => [
              rt(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: _e(() => [
            rt(d, {
              icon: t.dropdownIcon,
              class: Kn(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: _e(() => [
            nt("div", {
              class: Kn(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              nt("div", jB, null, 512),
              nt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Bt(t.selectedDescribedByText), 9, XB),
              (oe(!0), Ee(zr, null, jo(t.modelValueList, (F, W) => ma((oe(), yt(h, {
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
                [wa, !t.singleSelect]
              ])), 128)),
              nt("textarea", cc(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Pp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: _e(() => [
        t.gridConfig ? kt("", !0) : ma((oe(), yt(U, {
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
          [wa, t.showResults]
        ]),
        t.gridConfig ? ma((oe(), yt(V, {
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
          [wa, t.showResults]
        ]) : kt("", !0),
        t.showNoResults ? (oe(), yt(R, { key: 2 }, {
          default: _e(() => [
            nt("span", LB, Bt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : kt("", !0),
        t.showSelectionLimit ? (oe(), yt(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: _e(() => [
            rt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", $B, Bt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : kt("", !0),
        t.minChar ? ma((oe(), yt(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: _e(() => [
            rt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", qB, [
              Sc(t.$slots, "min-char", {}, () => [
                gw(Bt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [wa, t.showMinCharWarning]
        ]) : kt("", !0),
        t.showLoading ? (oe(), yt(N, { key: 5 })) : kt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    rt(S, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var e3 = /* @__PURE__ */ or(PB, [["render", KB], ["__scopeId", "data-v-43a7e951"]]);
const kw = window.Vue.defineComponent, uc = window.Vue.ref, t3 = window.Vue.toRef, dc = window.Vue.inject, jp = window.Vue.watch, n3 = window.Vue.nextTick, Xp = window.Vue.openBlock, Lp = window.Vue.createElementBlock, hc = window.Vue.createElementVNode, r3 = window.Vue.normalizeClass, $p = window.Vue.renderSlot, qp = window.Vue.createCommentVNode, fc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var o3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const i3 = {
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
}, a3 = {
  "update:modelValue": (t) => !0,
  closed: () => !0
}, s3 = kw({
  emits: a3,
  props: i3,
  setup(t, o) {
    const r = uc(), s = uc(!1), a = uc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), d = t3(t, "modelValue"), h = dc("queueSnackbar", !1), w = dc("unqueueSnackbar", !1), U = dc("nextSnackbar", () => {
    }), V = (x, B) => {
      let F, W, E = B;
      const O = () => {
        !F || (Hr(F), F = 0, E -= Date.now() - W);
      }, b = () => {
        F || (W = Date.now(), F = Yr(x, E));
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
    return jp(d, (x) => {
      x ? n3(() => {
        h === !1 ? a.value = x : h(u, a);
      }) : w === !1 ? a.value = x : w(u);
    }, { immediate: !0 }), jp(a, (x) => {
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
}), l3 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, c3 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, u3 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, d3 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function h3(t, o, r, s, a, u) {
  return t.modelValue || t.contentShow ? (Xp(), Lp("div", l3, [
    hc("div", {
      class: r3(["feather-snackbar", {
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
      hc("div", c3, [
        t.contentShow ? (Xp(), Lp("div", u3, [
          $p(t.$slots, "default", {}, void 0, !0)
        ])) : qp("", !0)
      ]),
      hc("div", d3, [
        $p(t.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : qp("", !0);
}
var f3 = /* @__PURE__ */ o3(s3, [["render", h3], ["__scopeId", "data-v-5cf64a62"]]);
const p3 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
kw({
  props: p3,
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
const m3 = window.Vue.defineComponent, Qo = window.Vue.createElementVNode, pc = window.Vue.unref, va = window.Vue.createVNode, Io = window.Vue.toDisplayString, w3 = window.Vue.renderList, Kp = window.Vue.Fragment, Xn = window.Vue.openBlock, xr = window.Vue.createElementBlock, Va = window.Vue.createCommentVNode, v3 = window.Vue.createBlock, V3 = window.Vue.createTextVNode, T3 = window.Vue.withCtx, g3 = window.Vue.pushScopeId, U3 = window.Vue.popScopeId, R3 = (t) => (g3("data-v-3e4a9e95"), t = t(), U3(), t), N3 = { class: "list-main" }, y3 = /* @__PURE__ */ R3(() => /* @__PURE__ */ Qo("h2", null, "Situation List", -1)), k3 = { class: "situation-filters" }, M3 = {
  key: 0,
  class: "container"
}, Z3 = { class: "situation-list" }, b3 = { key: 0 }, J3 = {
  key: 1,
  class: "container"
}, E3 = window.Vue.reactive, Br = window.Vue.ref, S3 = /* @__PURE__ */ m3({
  __name: "SituationList",
  setup(t) {
    const o = rr(), r = tw();
    o.getSituations(), o.getNodes();
    const s = 10, a = E3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), u = Br(!1), d = Br(0), h = Br(1), w = Br(0), U = Br(!1), V = Br(!1), R = (W) => {
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
    return (W, E) => (Xn(), xr(Kp, null, [
      Qo("div", N3, [
        y3,
        Qo("div", k3, [
          va(pc(e3), {
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
        a.situations && a.situations.length > 0 ? (Xn(), xr("div", M3, [
          Qo("div", Z3, [
            Qo("div", null, " Result: " + Io(a.situations.length) + " of " + Io(w.value), 1),
            (Xn(!0), xr(Kp, null, w3(a.situations, (O) => (Xn(), xr("div", {
              key: O.id
            }, [
              va(_y, {
                "situation-info": O,
                onSituationSelected: N,
                selected: a.situationSelected == O.id
              }, null, 8, ["situation-info", "selected"])
            ]))), 128)),
            a.nodeSelectedValue ? Va("", !0) : (Xn(), xr("div", b3, " Page: " + Io(d.value + 1) + " of " + Io(h.value), 1)),
            a.nodeSelectedValue ? Va("", !0) : (Xn(), v3(Cx, {
              key: 1,
              onGoToPage: F,
              currentPage: d.value,
              totalPages: h.value
            }, null, 8, ["currentPage", "totalPages"]))
          ]),
          va(KC, {
            index: a.selectedSituationIndex,
            forceUpdate: U.value,
            onSituationStatusChanged: A
          }, null, 8, ["index", "forceUpdate"])
        ])) : Va("", !0),
        !a.situations || a.situations.length == 0 ? (Xn(), xr("div", J3, " No results found ")) : Va("", !0)
      ]),
      va(pc(f3), {
        modelValue: V.value,
        "onUpdate:modelValue": E[1] || (E[1] = (O) => V.value = O),
        center: "",
        error: ""
      }, {
        default: T3(() => [
          V3(Io(pc(r).errorMessage || "Error has occurred :("), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 64));
  }
});
const F3 = /* @__PURE__ */ Ze(S3, [["__scopeId", "data-v-3e4a9e95"]]);
var A3 = Object.defineProperty, W3 = Object.defineProperties, C3 = Object.getOwnPropertyDescriptors, em = Object.getOwnPropertySymbols, x3 = Object.prototype.hasOwnProperty, B3 = Object.prototype.propertyIsEnumerable, tm = (t, o, r) => o in t ? A3(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Za = (t, o) => {
  for (var r in o || (o = {}))
    x3.call(o, r) && tm(t, r, o[r]);
  if (em)
    for (var r of em(o))
      B3.call(o, r) && tm(t, r, o[r]);
  return t;
}, Mw = (t, o) => W3(t, C3(o));
const Zw = window.Vue.defineComponent, I3 = window.Vue.ref, Xo = window.Vue.computed, D3 = window.Vue.reactive, nm = window.Vue.watch, mc = window.Vue.inject, bw = window.Vue.resolveComponent, Fc = window.Vue.openBlock, Jw = window.Vue.createElementBlock, Jn = window.Vue.createElementVNode, O3 = window.Vue.createBlock, Q3 = window.Vue.createCommentVNode, Ew = window.Vue.renderSlot, z3 = window.Vue.pushScopeId, G3 = window.Vue.popScopeId, wc = window.Vue.toRef, rm = window.Vue.mergeProps, _3 = window.Vue.toDisplayString, Y3 = window.Vue.createVNode;
var Sw = (t, o) => {
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
}, P3 = Zw({
  props: H3,
  setup(t) {
    const o = I3(), r = () => {
      o.value.focus();
    }, s = Xo(() => le("feather-radio-button")), a = D3({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: s.value
    }), u = Xo(() => le("radio-label-id")), d = Xo(() => a.first || a.checked ? 0 : -1);
    nm(() => t.disabled, (R) => {
      a.disabled = R;
    }, { immediate: !0 }), nm(() => t.value, (R) => {
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
    FeatherRipple: er
  }
}), j3 = (t) => (z3("data-v-24790cf0"), t = t(), G3(), t), X3 = { class: "layout-container" }, L3 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], $3 = { class: "radio hover focus" }, q3 = /* @__PURE__ */ j3(() => /* @__PURE__ */ Jn("div", {
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
], -1)), K3 = ["id"];
function eI(t, o, r, s, a, u) {
  const d = bw("feather-ripple");
  return Fc(), Jw("div", X3, [
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
      Jn("div", $3, [
        q3,
        t.vm.disabled ? Q3("", !0) : (Fc(), O3(d, {
          key: 0,
          center: ""
        }))
      ]),
      Jn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Ew(t.$slots, "default", {}, void 0, !0)
      ], 8, K3)
    ], 40, L3)
  ]);
}
var Da = /* @__PURE__ */ Sw(P3, [["render", eI], ["__scopeId", "data-v-24790cf0"]]);
const tI = Mw(Za({}, ja), {
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
}), nI = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, rI = Zw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: tI,
  emits: nI,
  setup(t, o) {
    Xa(t);
    const r = wc(t, "error"), s = wc(t, "modelValue"), a = Xo(() => le("feather-input-description")), u = Xo(() => {
      const d = Mw(Za({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Za(Za({
      descriptionId: a,
      attrs: u
    }, Om(s, o.emit, t.label, t.schema, wc(t, "error"))), Pa(o.attrs));
  },
  components: {
    InputSubText: Ya
  }
}), oI = ["for"], iI = ["id"];
function aI(t, o, r, s, a, u) {
  const d = bw("InputSubText");
  return Fc(), Jw("div", rm(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Jn("label", {
      for: t.groupId,
      class: "group-label"
    }, _3(t.label), 9, oI),
    Jn("div", rm(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...h) => t.keydown && t.keydown(...h))
    }), [
      Ew(t.$slots, "default", {}, void 0, !0)
    ], 16, iI),
    Y3(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Fw = /* @__PURE__ */ Sw(rI, [["render", aI], ["__scopeId", "data-v-6775aeb9"]]);
const sI = window.Vue.openBlock, lI = window.Vue.createElementBlock, cI = window.Vue.createStaticVNode;
var uI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dI = {}, hI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fI = /* @__PURE__ */ cI('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), pI = [
  fI
];
function mI(t, o) {
  return sI(), lI("svg", hI, pI);
}
var wI = /* @__PURE__ */ uI(dI, [["render", mI]]);
const vI = window.Vue.openBlock, VI = window.Vue.createElementBlock, TI = window.Vue.createStaticVNode;
var gI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const UI = {}, RI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NI = /* @__PURE__ */ TI('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), yI = [
  NI
];
function kI(t, o) {
  return vI(), VI("svg", RI, yI);
}
var MI = /* @__PURE__ */ gI(UI, [["render", kI]]);
const ZI = window.Vue.openBlock, bI = window.Vue.createElementBlock, JI = window.Vue.createElementVNode;
var EI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const SI = {}, FI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AI = /* @__PURE__ */ JI("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), WI = [
  AI
];
function CI(t, o) {
  return ZI(), bI("svg", FI, WI);
}
var xI = /* @__PURE__ */ EI(SI, [["render", CI]]);
const BI = window.Vue.openBlock, II = window.Vue.createElementBlock, DI = window.Vue.createStaticVNode;
var OI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QI = {}, zI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GI = /* @__PURE__ */ DI('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), _I = [
  GI
];
function YI(t, o) {
  return BI(), II("svg", zI, _I);
}
var HI = /* @__PURE__ */ OI(QI, [["render", YI]]);
const PI = window.Vue.openBlock, jI = window.Vue.createElementBlock, XI = window.Vue.createElementVNode;
var LI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $I = {}, qI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KI = /* @__PURE__ */ XI("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), eD = [
  KI
];
function tD(t, o) {
  return PI(), jI("svg", qI, eD);
}
var nD = /* @__PURE__ */ LI($I, [["render", tD]]);
const iu = () => window.VRouter || au, rD = window.Vue.defineComponent, ye = window.Vue.createElementVNode, ni = window.Vue.createTextVNode, Le = window.Vue.unref, an = window.Vue.createVNode, Ta = window.Vue.withCtx, om = window.Vue.openBlock, im = window.Vue.createElementBlock, oD = window.Vue.createCommentVNode, iD = window.Vue.pushScopeId, aD = window.Vue.popScopeId, It = (t) => (iD("data-v-b4b3bdcf"), t = t(), aD(), t), sD = { class: "container" }, lD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", { class: "title" }, "ALEC", -1)), cD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", { class: "description" }, [
  /* @__PURE__ */ ni(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ ye("br"),
  /* @__PURE__ */ ye("strong", null, "Our goal"),
  /* @__PURE__ */ ni(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), uD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("h3", null, "Key Benefits:", -1)), dD = { class: "list" }, hD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), fD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, "Assist in root cause analysis.", -1)), pD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), mD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, "Easy configuration.", -1)), wD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), vD = {
  key: 0,
  class: "optin"
}, VD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("h3", null, "Enable ALEC for more precise results:", -1)), TD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), gD = { class: "choices" }, UD = /* @__PURE__ */ It(() => /* @__PURE__ */ ye("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), RD = /* @__PURE__ */ ni("Yes"), ND = /* @__PURE__ */ ni("No"), yD = /* @__PURE__ */ ni(" Continue "), kD = window.Vue.ref, MD = /* @__PURE__ */ rD({
  __name: "WelcomePage",
  setup(t) {
    const o = li(), r = iu(), s = kD(!0), a = () => {
      const u = Boolean(s.value);
      o.savePermission(u), r.push({ name: "configuration" });
    };
    return (u, d) => (om(), im("div", sD, [
      lD,
      cD,
      ye("div", null, [
        uD,
        ye("div", dD, [
          ye("div", null, [
            an(Le(ne), {
              icon: Le(HI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            hD
          ]),
          ye("div", null, [
            an(Le(ne), {
              icon: Le(xI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fD
          ]),
          ye("div", null, [
            an(Le(ne), {
              icon: Le(nD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            pD
          ]),
          ye("div", null, [
            an(Le(ne), {
              icon: Le(wI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            mD
          ]),
          ye("div", null, [
            an(Le(ne), {
              icon: Le(MI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wD
          ])
        ])
      ]),
      Le(o).isAdmin ? (om(), im("div", vD, [
        VD,
        TD,
        ye("div", gD, [
          UD,
          an(Le(Fw), {
            horizontal: "",
            modelValue: s.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => s.value = h),
            label: ""
          }, {
            default: Ta(() => [
              an(Le(Da), { value: !0 }, {
                default: Ta(() => [
                  RD
                ]),
                _: 1
              }),
              an(Le(Da), { value: !1 }, {
                default: Ta(() => [
                  ND
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : oD("", !0),
      an(Le(bn), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: a
      }, {
        default: Ta(() => [
          yD
        ]),
        _: 1
      })
    ]));
  }
});
const ZD = /* @__PURE__ */ Ze(MD, [["__scopeId", "data-v-b4b3bdcf"]]), bD = window.Vue.defineComponent, JD = window.Vue.createElementVNode, ED = window.Vue.createTextVNode, SD = window.Vue.unref, FD = window.Vue.withCtx, AD = window.Vue.createVNode, WD = window.Vue.Fragment, CD = window.Vue.openBlock, xD = window.Vue.createElementBlock, BD = window.Vue.pushScopeId, ID = window.Vue.popScopeId, DD = (t) => (BD("data-v-bcb7dcc6"), t = t(), ID(), t), OD = /* @__PURE__ */ DD(() => /* @__PURE__ */ JD("div", { class: "main" }, "Something bad is happening...", -1)), QD = /* @__PURE__ */ ED(" Reload "), zD = /* @__PURE__ */ bD({
  __name: "ErrorPage",
  setup(t) {
    const o = iu(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (CD(), xD(WD, null, [
      OD,
      AD(SD(bn), {
        primary: "",
        onClick: r
      }, {
        default: FD(() => [
          QD
        ]),
        _: 1
      })
    ], 64));
  }
});
const GD = /* @__PURE__ */ Ze(zD, [["__scopeId", "data-v-bcb7dcc6"]]), _D = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", YD = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", HD = window.Vue.defineComponent, Ae = window.Vue.createElementVNode, Ac = window.Vue.createTextVNode, yn = window.Vue.unref, Do = window.Vue.withCtx, Oo = window.Vue.createVNode, PD = window.Vue.openBlock, jD = window.Vue.createElementBlock, XD = window.Vue.pushScopeId, LD = window.Vue.popScopeId, ir = (t) => (XD("data-v-9a5b5f4e"), t = t(), LD(), t), $D = { class: "container" }, qD = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("h2", null, "Configuration", -1)), KD = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("p", null, [
  /* @__PURE__ */ Ac(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ae("br"),
  /* @__PURE__ */ Ac(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ae("strong", null, [
    /* @__PURE__ */ Ae("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), eO = { class: "radio-content" }, tO = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("strong", { class: "title" }, "Clustering", -1)), nO = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), rO = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("img", {
  class: "img",
  src: _D
}, null, -1)), oO = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ae("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ae("br"),
  /* @__PURE__ */ Ae("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), iO = /* @__PURE__ */ ir(() => /* @__PURE__ */ Ae("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ae("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ae("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ae("img", {
    class: "img img2",
    src: YD
  })
], -1)), aO = /* @__PURE__ */ Ac(" Continue "), am = window.Vue.ref, sO = /* @__PURE__ */ HD({
  __name: "ConfigurationPage",
  setup(t) {
    const o = li(), r = iu(), s = am(!1), a = am(ft.ENGINE_DBSCAN), u = () => {
      bm(o.allowSave), ny(a.value, s.value), r.push({ name: "situations" });
    };
    return (d, h) => (PD(), jD("div", $D, [
      qD,
      KD,
      Ae("div", null, [
        Oo(yn(Fw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: a.value,
          "onUpdate:modelValue": h[1] || (h[1] = (w) => a.value = w)
        }, {
          default: Do(() => [
            Oo(yn(Da), {
              class: "radio",
              value: yn(ft).ENGINE_DBSCAN
            }, {
              default: Do(() => [
                Ae("div", eO, [
                  tO,
                  nO,
                  rO,
                  Oo(yn($c), {
                    modelValue: s.value,
                    "onUpdate:modelValue": h[0] || (h[0] = (w) => s.value = w),
                    disabled: a.value !== yn(ft).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Do(() => [
                      oO
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Oo(yn(Da), {
              class: "radio",
              value: yn(ft).ENGINE_DEEP_LEARNING
            }, {
              default: Do(() => [
                iO
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
          aO
        ]),
        _: 1
      })
    ]));
  }
});
const lO = /* @__PURE__ */ Ze(sO, [["__scopeId", "data-v-9a5b5f4e"]]), cO = window.VueRouter.createRouter, uO = window.VueRouter.createWebHistory, vc = async () => {
  const t = window.VRouter || au, o = li();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, Aw = [
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
    component: ZD
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => vc(),
    component: lO
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => vc(),
    component: F3
  },
  {
    path: "/error",
    name: "error",
    component: GD
  }
], sm = window.VRouter;
if (sm)
  for (const t of Aw) {
    const { path: o, name: r, component: s, beforeEnter: a } = t;
    sm.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: s,
      beforeEnter: a
    });
  }
const au = cO({
  history: uO(),
  routes: Aw
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = AR;
