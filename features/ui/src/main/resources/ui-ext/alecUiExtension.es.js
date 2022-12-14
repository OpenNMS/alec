const re = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
}, JC = {}, e2 = window.Vue.resolveComponent, t2 = window.Vue.createVNode, n2 = window.Vue.openBlock, r2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const o2 = { class: "main" };
function s2(e, o) {
  const r = e2("router-view");
  return n2(), r2("div", o2, [
    t2(r)
  ]);
}
const i2 = /* @__PURE__ */ re(JC, [["render", s2], ["__scopeId", "data-v-5d32d140"]]), a2 = window.Vue.defineComponent, l2 = window.Vue.openBlock, u2 = window.Vue.createBlock, c2 = /* @__PURE__ */ a2({
  __name: "App",
  setup(e) {
    return (o, r) => (l2(), u2(i2));
  }
});
var us = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function d2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var av = { exports: {} }, Hc = { exports: {} }, lv = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, f2 = lv, Gc = Object.prototype.toString, jc = function(e) {
  return function(o) {
    var r = Gc.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Or(e) {
  return e = e.toLowerCase(), function(r) {
    return jc(r) === e;
  };
}
function Kc(e) {
  return Array.isArray(e);
}
function Sa(e) {
  return typeof e > "u";
}
function A2(e) {
  return e !== null && !Sa(e) && e.constructor !== null && !Sa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var uv = Or("ArrayBuffer");
function h2(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && uv(e.buffer), o;
}
function p2(e) {
  return typeof e == "string";
}
function w2(e) {
  return typeof e == "number";
}
function cv(e) {
  return e !== null && typeof e == "object";
}
function ba(e) {
  if (jc(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var v2 = Or("Date"), m2 = Or("File"), g2 = Or("Blob"), _2 = Or("FileList");
function Qc(e) {
  return Gc.call(e) === "[object Function]";
}
function V2(e) {
  return cv(e) && Qc(e.pipe);
}
function y2(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Gc.call(e) === o || Qc(e.toString) && e.toString() === o);
}
var b2 = Or("URLSearchParams");
function C2(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function E2() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Jc(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Kc(e))
      for (var r = 0, i = e.length; r < i; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Tc() {
  var e = {};
  function o(a, u) {
    ba(e[u]) && ba(a) ? e[u] = Tc(e[u], a) : ba(a) ? e[u] = Tc({}, a) : Kc(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, i = arguments.length; r < i; r++)
    Jc(arguments[r], o);
  return e;
}
function M2(e, o, r) {
  return Jc(o, function(a, u) {
    r && typeof a == "function" ? e[u] = f2(a, r) : e[u] = a;
  }), e;
}
function B2(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function $2(e, o, r, i) {
  e.prototype = Object.create(o.prototype, i), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function x2(e, o, r) {
  var i, a, u, c = {};
  o = o || {};
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      u = i[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function I2(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var i = e.indexOf(o, r);
  return i !== -1 && i === r;
}
function S2(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Sa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var T2 = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ze = {
  isArray: Kc,
  isArrayBuffer: uv,
  isBuffer: A2,
  isFormData: y2,
  isArrayBufferView: h2,
  isString: p2,
  isNumber: w2,
  isObject: cv,
  isPlainObject: ba,
  isUndefined: Sa,
  isDate: v2,
  isFile: m2,
  isBlob: g2,
  isFunction: Qc,
  isStream: V2,
  isURLSearchParams: b2,
  isStandardBrowserEnv: E2,
  forEach: Jc,
  merge: Tc,
  extend: M2,
  trim: C2,
  stripBOM: B2,
  inherits: $2,
  toFlatObject: x2,
  kindOf: jc,
  kindOfTest: Or,
  endsWith: I2,
  toArray: S2,
  isTypedArray: T2,
  isFileList: _2
}, no = Ze;
function ih(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var dv = function(o, r, i) {
  if (!r)
    return o;
  var a;
  if (i)
    a = i(r);
  else if (no.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    no.forEach(r, function(p, v) {
      p === null || typeof p > "u" || (no.isArray(p) ? v = v + "[]" : p = [p], no.forEach(p, function(_) {
        no.isDate(_) ? _ = _.toISOString() : no.isObject(_) && (_ = JSON.stringify(_)), u.push(ih(v) + "=" + ih(_));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, P2 = Ze;
function Fa() {
  this.handlers = [];
}
Fa.prototype.use = function(o, r, i) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
Fa.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Fa.prototype.forEach = function(o) {
  P2.forEach(this.handlers, function(i) {
    i !== null && o(i);
  });
};
var k2 = Fa, N2 = Ze, D2 = function(o, r) {
  N2.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, fv = Ze;
function Bo(e, o, r, i, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), i && (this.request = i), a && (this.response = a);
}
fv.inherits(Bo, Error, {
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
var Av = Bo.prototype, hv = {};
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
  hv[e] = { value: e };
});
Object.defineProperties(Bo, hv);
Object.defineProperty(Av, "isAxiosError", { value: !0 });
Bo.from = function(e, o, r, i, a, u) {
  var c = Object.create(Av);
  return fv.toFlatObject(e, c, function(p) {
    return p !== Error.prototype;
  }), Bo.call(c, e.message, o, r, i, a), c.name = e.name, u && Object.assign(c, u), c;
};
var So = Bo, pv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yt = Ze;
function O2(e, o) {
  o = o || new FormData();
  var r = [];
  function i(u) {
    return u === null ? "" : Yt.isDate(u) ? u.toISOString() : Yt.isArrayBuffer(u) || Yt.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (Yt.isPlainObject(u) || Yt.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), Yt.forEach(u, function(p, v) {
        if (!Yt.isUndefined(p)) {
          var m = c ? c + "." + v : v, _;
          if (p && !c && typeof p == "object") {
            if (Yt.endsWith(v, "{}"))
              p = JSON.stringify(p);
            else if (Yt.endsWith(v, "[]") && (_ = Yt.toArray(p))) {
              _.forEach(function(V) {
                !Yt.isUndefined(V) && o.append(m, i(V));
              });
              return;
            }
          }
          a(p, m);
        }
      }), r.pop();
    } else
      o.append(c, i(u));
  }
  return a(e), o;
}
var wv = O2, Iu, ah;
function L2() {
  if (ah)
    return Iu;
  ah = 1;
  var e = So;
  return Iu = function(r, i, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : i(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Iu;
}
var Su, lh;
function z2() {
  if (lh)
    return Su;
  lh = 1;
  var e = Ze;
  return Su = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, a, u, c, f, p) {
        var v = [];
        v.push(i + "=" + encodeURIComponent(a)), e.isNumber(u) && v.push("expires=" + new Date(u).toGMTString()), e.isString(c) && v.push("path=" + c), e.isString(f) && v.push("domain=" + f), p === !0 && v.push("secure"), document.cookie = v.join("; ");
      },
      read: function(i) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
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
  }(), Su;
}
var q2 = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, R2 = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, W2 = q2, F2 = R2, vv = function(o, r) {
  return o && !W2(r) ? F2(o, r) : r;
}, Tu, uh;
function X2() {
  if (uh)
    return Tu;
  uh = 1;
  var e = Ze, o = [
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
  return Tu = function(i) {
    var a = {}, u, c, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Tu;
}
var Pu, ch;
function Z2() {
  if (ch)
    return Pu;
  ch = 1;
  var e = Ze;
  return Pu = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), a;
    function u(c) {
      var f = c;
      return r && (i.setAttribute("href", f), f = i.href), i.setAttribute("href", f), {
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
    return a = u(window.location.href), function(f) {
      var p = e.isString(f) ? u(f) : f;
      return p.protocol === a.protocol && p.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Pu;
}
var ku, dh;
function Xa() {
  if (dh)
    return ku;
  dh = 1;
  var e = So, o = Ze;
  function r(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), ku = r, ku;
}
var Nu, fh;
function U2() {
  return fh || (fh = 1, Nu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Nu;
}
var Du, Ah;
function hh() {
  if (Ah)
    return Du;
  Ah = 1;
  var e = Ze, o = L2(), r = z2(), i = dv, a = vv, u = X2(), c = Z2(), f = pv, p = So, v = Xa(), m = U2();
  return Du = function(V) {
    return new Promise(function(M, T) {
      var D = V.data, N = V.headers, k = V.responseType, S;
      function O() {
        V.cancelToken && V.cancelToken.unsubscribe(S), V.signal && V.signal.removeEventListener("abort", S);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete N["Content-Type"];
      var x = new XMLHttpRequest();
      if (V.auth) {
        var q = V.auth.username || "", L = V.auth.password ? unescape(encodeURIComponent(V.auth.password)) : "";
        N.Authorization = "Basic " + btoa(q + ":" + L);
      }
      var F = a(V.baseURL, V.url);
      x.open(V.method.toUpperCase(), i(F, V.params, V.paramsSerializer), !0), x.timeout = V.timeout;
      function ge() {
        if (!!x) {
          var ye = "getAllResponseHeaders" in x ? u(x.getAllResponseHeaders()) : null, Ce = !k || k === "text" || k === "json" ? x.responseText : x.response, xe = {
            data: Ce,
            status: x.status,
            statusText: x.statusText,
            headers: ye,
            config: V,
            request: x
          };
          o(function(ze) {
            M(ze), O();
          }, function(ze) {
            T(ze), O();
          }, xe), x = null;
        }
      }
      if ("onloadend" in x ? x.onloadend = ge : x.onreadystatechange = function() {
        !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(ge);
      }, x.onabort = function() {
        !x || (T(new p("Request aborted", p.ECONNABORTED, V, x)), x = null);
      }, x.onerror = function() {
        T(new p("Network Error", p.ERR_NETWORK, V, x, x)), x = null;
      }, x.ontimeout = function() {
        var Ce = V.timeout ? "timeout of " + V.timeout + "ms exceeded" : "timeout exceeded", xe = V.transitional || f;
        V.timeoutErrorMessage && (Ce = V.timeoutErrorMessage), T(new p(
          Ce,
          xe.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
          V,
          x
        )), x = null;
      }, e.isStandardBrowserEnv()) {
        var fe = (V.withCredentials || c(F)) && V.xsrfCookieName ? r.read(V.xsrfCookieName) : void 0;
        fe && (N[V.xsrfHeaderName] = fe);
      }
      "setRequestHeader" in x && e.forEach(N, function(Ce, xe) {
        typeof D > "u" && xe.toLowerCase() === "content-type" ? delete N[xe] : x.setRequestHeader(xe, Ce);
      }), e.isUndefined(V.withCredentials) || (x.withCredentials = !!V.withCredentials), k && k !== "json" && (x.responseType = V.responseType), typeof V.onDownloadProgress == "function" && x.addEventListener("progress", V.onDownloadProgress), typeof V.onUploadProgress == "function" && x.upload && x.upload.addEventListener("progress", V.onUploadProgress), (V.cancelToken || V.signal) && (S = function(ye) {
        !x || (T(!ye || ye && ye.type ? new v() : ye), x.abort(), x = null);
      }, V.cancelToken && V.cancelToken.subscribe(S), V.signal && (V.signal.aborted ? S() : V.signal.addEventListener("abort", S))), D || (D = null);
      var ve = m(F);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        T(new p("Unsupported protocol " + ve + ":", p.ERR_BAD_REQUEST, V));
        return;
      }
      x.send(D);
    });
  }, Du;
}
var Ou, ph;
function Y2() {
  return ph || (ph = 1, Ou = null), Ou;
}
var Oe = Ze, wh = D2, vh = So, H2 = pv, G2 = wv, j2 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function mh(e, o) {
  !Oe.isUndefined(e) && Oe.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function K2() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = hh()), e;
}
function Q2(e, o, r) {
  if (Oe.isString(e))
    try {
      return (o || JSON.parse)(e), Oe.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (r || JSON.stringify)(e);
}
var Za = {
  transitional: H2,
  adapter: K2(),
  transformRequest: [function(o, r) {
    if (wh(r, "Accept"), wh(r, "Content-Type"), Oe.isFormData(o) || Oe.isArrayBuffer(o) || Oe.isBuffer(o) || Oe.isStream(o) || Oe.isFile(o) || Oe.isBlob(o))
      return o;
    if (Oe.isArrayBufferView(o))
      return o.buffer;
    if (Oe.isURLSearchParams(o))
      return mh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var i = Oe.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Oe.isFileList(o)) || i && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return G2(u ? { "files[]": o } : o, c && new c());
    } else if (i || a === "application/json")
      return mh(r, "application/json"), Q2(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Za.transitional, i = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !i && this.responseType === "json";
    if (u || a && Oe.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? vh.from(c, vh.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Y2()
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
Oe.forEach(["delete", "get", "head"], function(o) {
  Za.headers[o] = {};
});
Oe.forEach(["post", "put", "patch"], function(o) {
  Za.headers[o] = Oe.merge(j2);
});
var ed = Za, J2 = Ze, e3 = ed, t3 = function(o, r, i) {
  var a = this || e3;
  return J2.forEach(i, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Lu, gh;
function mv() {
  return gh || (gh = 1, Lu = function(o) {
    return !!(o && o.__CANCEL__);
  }), Lu;
}
var _h = Ze, zu = t3, n3 = mv(), r3 = ed, o3 = Xa();
function qu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new o3();
}
var s3 = function(o) {
  qu(o), o.headers = o.headers || {}, o.data = zu.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = _h.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), _h.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || r3.adapter;
  return r(o).then(function(a) {
    return qu(o), a.data = zu.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return n3(a) || (qu(o), a && a.response && (a.response.data = zu.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, _t = Ze, gv = function(o, r) {
  r = r || {};
  var i = {};
  function a(m, _) {
    return _t.isPlainObject(m) && _t.isPlainObject(_) ? _t.merge(m, _) : _t.isPlainObject(_) ? _t.merge({}, _) : _t.isArray(_) ? _.slice() : _;
  }
  function u(m) {
    if (_t.isUndefined(r[m])) {
      if (!_t.isUndefined(o[m]))
        return a(void 0, o[m]);
    } else
      return a(o[m], r[m]);
  }
  function c(m) {
    if (!_t.isUndefined(r[m]))
      return a(void 0, r[m]);
  }
  function f(m) {
    if (_t.isUndefined(r[m])) {
      if (!_t.isUndefined(o[m]))
        return a(void 0, o[m]);
    } else
      return a(void 0, r[m]);
  }
  function p(m) {
    if (m in r)
      return a(o[m], r[m]);
    if (m in o)
      return a(void 0, o[m]);
  }
  var v = {
    url: c,
    method: c,
    data: c,
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
    validateStatus: p
  };
  return _t.forEach(Object.keys(o).concat(Object.keys(r)), function(_) {
    var V = v[_] || u, $ = V(_);
    _t.isUndefined($) && V !== p || (i[_] = $);
  }), i;
}, Ru, Vh;
function _v() {
  return Vh || (Vh = 1, Ru = {
    version: "0.27.2"
  }), Ru;
}
var i3 = _v().version, Jn = So, td = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  td[e] = function(i) {
    return typeof i === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var yh = {};
td.transitional = function(o, r, i) {
  function a(u, c) {
    return "[Axios v" + i3 + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new Jn(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Jn.ERR_DEPRECATED
      );
    return r && !yh[c] && (yh[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function a3(e, o, r) {
  if (typeof e != "object")
    throw new Jn("options must be an object", Jn.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), a = i.length; a-- > 0; ) {
    var u = i[a], c = o[u];
    if (c) {
      var f = e[u], p = f === void 0 || c(f, u, e);
      if (p !== !0)
        throw new Jn("option " + u + " must be " + p, Jn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Jn("Unknown option " + u, Jn.ERR_BAD_OPTION);
  }
}
var l3 = {
  assertOptions: a3,
  validators: td
}, Vv = Ze, u3 = dv, bh = k2, Ch = s3, Ua = gv, c3 = vv, yv = l3, ro = yv.validators;
function $o(e) {
  this.defaults = e, this.interceptors = {
    request: new bh(),
    response: new bh()
  };
}
$o.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ua(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var i = r.transitional;
  i !== void 0 && yv.assertOptions(i, {
    silentJSONParsing: ro.transitional(ro.boolean),
    forcedJSONParsing: ro.transitional(ro.boolean),
    clarifyTimeoutError: ro.transitional(ro.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function($) {
    typeof $.runWhen == "function" && $.runWhen(r) === !1 || (u = u && $.synchronous, a.unshift($.fulfilled, $.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function($) {
    c.push($.fulfilled, $.rejected);
  });
  var f;
  if (!u) {
    var p = [Ch, void 0];
    for (Array.prototype.unshift.apply(p, a), p = p.concat(c), f = Promise.resolve(r); p.length; )
      f = f.then(p.shift(), p.shift());
    return f;
  }
  for (var v = r; a.length; ) {
    var m = a.shift(), _ = a.shift();
    try {
      v = m(v);
    } catch (V) {
      _(V);
      break;
    }
  }
  try {
    f = Ch(v);
  } catch (V) {
    return Promise.reject(V);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
$o.prototype.getUri = function(o) {
  o = Ua(this.defaults, o);
  var r = c3(o.baseURL, o.url);
  return u3(r, o.params, o.paramsSerializer);
};
Vv.forEach(["delete", "get", "head", "options"], function(o) {
  $o.prototype[o] = function(r, i) {
    return this.request(Ua(i || {}, {
      method: o,
      url: r,
      data: (i || {}).data
    }));
  };
});
Vv.forEach(["post", "put", "patch"], function(o) {
  function r(i) {
    return function(u, c, f) {
      return this.request(Ua(f || {}, {
        method: o,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  $o.prototype[o] = r(), $o.prototype[o + "Form"] = r(!0);
});
var d3 = $o, Wu, Eh;
function f3() {
  if (Eh)
    return Wu;
  Eh = 1;
  var e = Xa();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(c) {
      i = c;
    });
    var a = this;
    this.promise.then(function(u) {
      if (!!a._listeners) {
        var c, f = a._listeners.length;
        for (c = 0; c < f; c++)
          a._listeners[c](u);
        a._listeners = null;
      }
    }), this.promise.then = function(u) {
      var c, f = new Promise(function(p) {
        a.subscribe(p), c = p;
      }).then(u);
      return f.cancel = function() {
        a.unsubscribe(c);
      }, f;
    }, r(function(c) {
      a.reason || (a.reason = new e(c), i(a.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, o.prototype.unsubscribe = function(i) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(i);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, o.source = function() {
    var i, a = new o(function(c) {
      i = c;
    });
    return {
      token: a,
      cancel: i
    };
  }, Wu = o, Wu;
}
var Fu, Mh;
function A3() {
  return Mh || (Mh = 1, Fu = function(o) {
    return function(i) {
      return o.apply(null, i);
    };
  }), Fu;
}
var Xu, Bh;
function h3() {
  if (Bh)
    return Xu;
  Bh = 1;
  var e = Ze;
  return Xu = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Xu;
}
var $h = Ze, p3 = lv, Ca = d3, w3 = gv, v3 = ed;
function bv(e) {
  var o = new Ca(e), r = p3(Ca.prototype.request, o);
  return $h.extend(r, Ca.prototype, o), $h.extend(r, o), r.create = function(a) {
    return bv(w3(e, a));
  }, r;
}
var At = bv(v3);
At.Axios = Ca;
At.CanceledError = Xa();
At.CancelToken = f3();
At.isCancel = mv();
At.VERSION = _v().version;
At.toFormData = wv;
At.AxiosError = So;
At.Cancel = At.CanceledError;
At.all = function(o) {
  return Promise.all(o);
};
At.spread = A3();
At.isAxiosError = h3();
Hc.exports = At;
Hc.exports.default = At;
(function(e) {
  e.exports = Hc.exports;
})(av);
const Cv = /* @__PURE__ */ d2(av.exports), Dn = Cv.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), nn = Cv.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var de = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, o) {
  (function() {
    var r, i = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", v = 500, m = "__lodash_placeholder__", _ = 1, V = 2, $ = 4, M = 1, T = 2, D = 1, N = 2, k = 4, S = 8, O = 16, x = 32, q = 64, L = 128, F = 256, ge = 512, fe = 30, ve = "...", ye = 800, Ce = 16, xe = 1, Ae = 2, ze = 3, qe = 1 / 0, je = 9007199254740991, qo = 17976931348623157e292, ri = 0 / 0, sn = 4294967295, d1 = sn - 1, f1 = sn >>> 1, A1 = [
      ["ary", L],
      ["bind", D],
      ["bindKey", N],
      ["curry", S],
      ["curryRight", O],
      ["flip", ge],
      ["partial", x],
      ["partialRight", q],
      ["rearg", F]
    ], qr = "[object Arguments]", oi = "[object Array]", h1 = "[object AsyncFunction]", Ro = "[object Boolean]", Wo = "[object Date]", p1 = "[object DOMException]", si = "[object Error]", ii = "[object Function]", $d = "[object GeneratorFunction]", Rt = "[object Map]", Fo = "[object Number]", w1 = "[object Null]", mn = "[object Object]", xd = "[object Promise]", v1 = "[object Proxy]", Xo = "[object RegExp]", Wt = "[object Set]", Zo = "[object String]", ai = "[object Symbol]", m1 = "[object Undefined]", Uo = "[object WeakMap]", g1 = "[object WeakSet]", Yo = "[object ArrayBuffer]", Rr = "[object DataView]", ul = "[object Float32Array]", cl = "[object Float64Array]", dl = "[object Int8Array]", fl = "[object Int16Array]", Al = "[object Int32Array]", hl = "[object Uint8Array]", pl = "[object Uint8ClampedArray]", wl = "[object Uint16Array]", vl = "[object Uint32Array]", _1 = /\b__p \+= '';/g, V1 = /\b(__p \+=) '' \+/g, y1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Id = /&(?:amp|lt|gt|quot|#39);/g, Sd = /[&<>"']/g, b1 = RegExp(Id.source), C1 = RegExp(Sd.source), E1 = /<%-([\s\S]+?)%>/g, M1 = /<%([\s\S]+?)%>/g, Td = /<%=([\s\S]+?)%>/g, B1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $1 = /^\w*$/, x1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ml = /[\\^$.*+?()[\]{}|]/g, I1 = RegExp(ml.source), gl = /^\s+/, S1 = /\s/, T1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, P1 = /\{\n\/\* \[wrapped with (.+)\] \*/, k1 = /,? & /, N1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, D1 = /[()=,{}\[\]\/\s]/, O1 = /\\(\\)?/g, L1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Pd = /\w*$/, z1 = /^[-+]0x[0-9a-f]+$/i, q1 = /^0b[01]+$/i, R1 = /^\[object .+?Constructor\]$/, W1 = /^0o[0-7]+$/i, F1 = /^(?:0|[1-9]\d*)$/, X1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, li = /($^)/, Z1 = /['\n\r\u2028\u2029\\]/g, ui = "\\ud800-\\udfff", U1 = "\\u0300-\\u036f", Y1 = "\\ufe20-\\ufe2f", H1 = "\\u20d0-\\u20ff", kd = U1 + Y1 + H1, Nd = "\\u2700-\\u27bf", Dd = "a-z\\xdf-\\xf6\\xf8-\\xff", G1 = "\\xac\\xb1\\xd7\\xf7", j1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", K1 = "\\u2000-\\u206f", Q1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Od = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ld = "\\ufe0e\\ufe0f", zd = G1 + j1 + K1 + Q1, _l = "['\u2019]", J1 = "[" + ui + "]", qd = "[" + zd + "]", ci = "[" + kd + "]", Rd = "\\d+", eg = "[" + Nd + "]", Wd = "[" + Dd + "]", Fd = "[^" + ui + zd + Rd + Nd + Dd + Od + "]", Vl = "\\ud83c[\\udffb-\\udfff]", tg = "(?:" + ci + "|" + Vl + ")", Xd = "[^" + ui + "]", yl = "(?:\\ud83c[\\udde6-\\uddff]){2}", bl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wr = "[" + Od + "]", Zd = "\\u200d", Ud = "(?:" + Wd + "|" + Fd + ")", ng = "(?:" + Wr + "|" + Fd + ")", Yd = "(?:" + _l + "(?:d|ll|m|re|s|t|ve))?", Hd = "(?:" + _l + "(?:D|LL|M|RE|S|T|VE))?", Gd = tg + "?", jd = "[" + Ld + "]?", rg = "(?:" + Zd + "(?:" + [Xd, yl, bl].join("|") + ")" + jd + Gd + ")*", og = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", sg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Kd = jd + Gd + rg, ig = "(?:" + [eg, yl, bl].join("|") + ")" + Kd, ag = "(?:" + [Xd + ci + "?", ci, yl, bl, J1].join("|") + ")", lg = RegExp(_l, "g"), ug = RegExp(ci, "g"), Cl = RegExp(Vl + "(?=" + Vl + ")|" + ag + Kd, "g"), cg = RegExp([
      Wr + "?" + Wd + "+" + Yd + "(?=" + [qd, Wr, "$"].join("|") + ")",
      ng + "+" + Hd + "(?=" + [qd, Wr + Ud, "$"].join("|") + ")",
      Wr + "?" + Ud + "+" + Yd,
      Wr + "+" + Hd,
      sg,
      og,
      Rd,
      ig
    ].join("|"), "g"), dg = RegExp("[" + Zd + ui + kd + Ld + "]"), fg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ag = [
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
    ], hg = -1, me = {};
    me[ul] = me[cl] = me[dl] = me[fl] = me[Al] = me[hl] = me[pl] = me[wl] = me[vl] = !0, me[qr] = me[oi] = me[Yo] = me[Ro] = me[Rr] = me[Wo] = me[si] = me[ii] = me[Rt] = me[Fo] = me[mn] = me[Xo] = me[Wt] = me[Zo] = me[Uo] = !1;
    var pe = {};
    pe[qr] = pe[oi] = pe[Yo] = pe[Rr] = pe[Ro] = pe[Wo] = pe[ul] = pe[cl] = pe[dl] = pe[fl] = pe[Al] = pe[Rt] = pe[Fo] = pe[mn] = pe[Xo] = pe[Wt] = pe[Zo] = pe[ai] = pe[hl] = pe[pl] = pe[wl] = pe[vl] = !0, pe[si] = pe[ii] = pe[Uo] = !1;
    var pg = {
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
    }, wg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, vg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, mg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, gg = parseFloat, _g = parseInt, Qd = typeof us == "object" && us && us.Object === Object && us, Vg = typeof self == "object" && self && self.Object === Object && self, Re = Qd || Vg || Function("return this")(), El = o && !o.nodeType && o, ar = El && !0 && e && !e.nodeType && e, Jd = ar && ar.exports === El, Ml = Jd && Qd.process, Bt = function() {
      try {
        var y = ar && ar.require && ar.require("util").types;
        return y || Ml && Ml.binding && Ml.binding("util");
      } catch {
      }
    }(), ef = Bt && Bt.isArrayBuffer, tf = Bt && Bt.isDate, nf = Bt && Bt.isMap, rf = Bt && Bt.isRegExp, of = Bt && Bt.isSet, sf = Bt && Bt.isTypedArray;
    function ht(y, E, C) {
      switch (C.length) {
        case 0:
          return y.call(E);
        case 1:
          return y.call(E, C[0]);
        case 2:
          return y.call(E, C[0], C[1]);
        case 3:
          return y.call(E, C[0], C[1], C[2]);
      }
      return y.apply(E, C);
    }
    function yg(y, E, C, R) {
      for (var H = -1, oe = y == null ? 0 : y.length; ++H < oe; ) {
        var Te = y[H];
        E(R, Te, C(Te), y);
      }
      return R;
    }
    function $t(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R && E(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function bg(y, E) {
      for (var C = y == null ? 0 : y.length; C-- && E(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function af(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R; )
        if (!E(y[C], C, y))
          return !1;
      return !0;
    }
    function On(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length, H = 0, oe = []; ++C < R; ) {
        var Te = y[C];
        E(Te, C, y) && (oe[H++] = Te);
      }
      return oe;
    }
    function di(y, E) {
      var C = y == null ? 0 : y.length;
      return !!C && Fr(y, E, 0) > -1;
    }
    function Bl(y, E, C) {
      for (var R = -1, H = y == null ? 0 : y.length; ++R < H; )
        if (C(E, y[R]))
          return !0;
      return !1;
    }
    function _e(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length, H = Array(R); ++C < R; )
        H[C] = E(y[C], C, y);
      return H;
    }
    function Ln(y, E) {
      for (var C = -1, R = E.length, H = y.length; ++C < R; )
        y[H + C] = E[C];
      return y;
    }
    function $l(y, E, C, R) {
      var H = -1, oe = y == null ? 0 : y.length;
      for (R && oe && (C = y[++H]); ++H < oe; )
        C = E(C, y[H], H, y);
      return C;
    }
    function Cg(y, E, C, R) {
      var H = y == null ? 0 : y.length;
      for (R && H && (C = y[--H]); H--; )
        C = E(C, y[H], H, y);
      return C;
    }
    function xl(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R; )
        if (E(y[C], C, y))
          return !0;
      return !1;
    }
    var Eg = Il("length");
    function Mg(y) {
      return y.split("");
    }
    function Bg(y) {
      return y.match(N1) || [];
    }
    function lf(y, E, C) {
      var R;
      return C(y, function(H, oe, Te) {
        if (E(H, oe, Te))
          return R = oe, !1;
      }), R;
    }
    function fi(y, E, C, R) {
      for (var H = y.length, oe = C + (R ? 1 : -1); R ? oe-- : ++oe < H; )
        if (E(y[oe], oe, y))
          return oe;
      return -1;
    }
    function Fr(y, E, C) {
      return E === E ? zg(y, E, C) : fi(y, uf, C);
    }
    function $g(y, E, C, R) {
      for (var H = C - 1, oe = y.length; ++H < oe; )
        if (R(y[H], E))
          return H;
      return -1;
    }
    function uf(y) {
      return y !== y;
    }
    function cf(y, E) {
      var C = y == null ? 0 : y.length;
      return C ? Tl(y, E) / C : ri;
    }
    function Il(y) {
      return function(E) {
        return E == null ? r : E[y];
      };
    }
    function Sl(y) {
      return function(E) {
        return y == null ? r : y[E];
      };
    }
    function df(y, E, C, R, H) {
      return H(y, function(oe, Te, he) {
        C = R ? (R = !1, oe) : E(C, oe, Te, he);
      }), C;
    }
    function xg(y, E) {
      var C = y.length;
      for (y.sort(E); C--; )
        y[C] = y[C].value;
      return y;
    }
    function Tl(y, E) {
      for (var C, R = -1, H = y.length; ++R < H; ) {
        var oe = E(y[R]);
        oe !== r && (C = C === r ? oe : C + oe);
      }
      return C;
    }
    function Pl(y, E) {
      for (var C = -1, R = Array(y); ++C < y; )
        R[C] = E(C);
      return R;
    }
    function Ig(y, E) {
      return _e(E, function(C) {
        return [C, y[C]];
      });
    }
    function ff(y) {
      return y && y.slice(0, wf(y) + 1).replace(gl, "");
    }
    function pt(y) {
      return function(E) {
        return y(E);
      };
    }
    function kl(y, E) {
      return _e(E, function(C) {
        return y[C];
      });
    }
    function Ho(y, E) {
      return y.has(E);
    }
    function Af(y, E) {
      for (var C = -1, R = y.length; ++C < R && Fr(E, y[C], 0) > -1; )
        ;
      return C;
    }
    function hf(y, E) {
      for (var C = y.length; C-- && Fr(E, y[C], 0) > -1; )
        ;
      return C;
    }
    function Sg(y, E) {
      for (var C = y.length, R = 0; C--; )
        y[C] === E && ++R;
      return R;
    }
    var Tg = Sl(pg), Pg = Sl(wg);
    function kg(y) {
      return "\\" + mg[y];
    }
    function Ng(y, E) {
      return y == null ? r : y[E];
    }
    function Xr(y) {
      return dg.test(y);
    }
    function Dg(y) {
      return fg.test(y);
    }
    function Og(y) {
      for (var E, C = []; !(E = y.next()).done; )
        C.push(E.value);
      return C;
    }
    function Nl(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R, H) {
        C[++E] = [H, R];
      }), C;
    }
    function pf(y, E) {
      return function(C) {
        return y(E(C));
      };
    }
    function zn(y, E) {
      for (var C = -1, R = y.length, H = 0, oe = []; ++C < R; ) {
        var Te = y[C];
        (Te === E || Te === m) && (y[C] = m, oe[H++] = C);
      }
      return oe;
    }
    function Ai(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R) {
        C[++E] = R;
      }), C;
    }
    function Lg(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R) {
        C[++E] = [R, R];
      }), C;
    }
    function zg(y, E, C) {
      for (var R = C - 1, H = y.length; ++R < H; )
        if (y[R] === E)
          return R;
      return -1;
    }
    function qg(y, E, C) {
      for (var R = C + 1; R--; )
        if (y[R] === E)
          return R;
      return R;
    }
    function Zr(y) {
      return Xr(y) ? Wg(y) : Eg(y);
    }
    function Ft(y) {
      return Xr(y) ? Fg(y) : Mg(y);
    }
    function wf(y) {
      for (var E = y.length; E-- && S1.test(y.charAt(E)); )
        ;
      return E;
    }
    var Rg = Sl(vg);
    function Wg(y) {
      for (var E = Cl.lastIndex = 0; Cl.test(y); )
        ++E;
      return E;
    }
    function Fg(y) {
      return y.match(Cl) || [];
    }
    function Xg(y) {
      return y.match(cg) || [];
    }
    var Zg = function y(E) {
      E = E == null ? Re : Ur.defaults(Re.Object(), E, Ur.pick(Re, Ag));
      var C = E.Array, R = E.Date, H = E.Error, oe = E.Function, Te = E.Math, he = E.Object, Dl = E.RegExp, Ug = E.String, xt = E.TypeError, hi = C.prototype, Yg = oe.prototype, Yr = he.prototype, pi = E["__core-js_shared__"], wi = Yg.toString, ue = Yr.hasOwnProperty, Hg = 0, vf = function() {
        var t = /[^.]+$/.exec(pi && pi.keys && pi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), vi = Yr.toString, Gg = wi.call(he), jg = Re._, Kg = Dl(
        "^" + wi.call(ue).replace(ml, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), mi = Jd ? E.Buffer : r, qn = E.Symbol, gi = E.Uint8Array, mf = mi ? mi.allocUnsafe : r, _i = pf(he.getPrototypeOf, he), gf = he.create, _f = Yr.propertyIsEnumerable, Vi = hi.splice, Vf = qn ? qn.isConcatSpreadable : r, Go = qn ? qn.iterator : r, lr = qn ? qn.toStringTag : r, yi = function() {
        try {
          var t = Ar(he, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Qg = E.clearTimeout !== Re.clearTimeout && E.clearTimeout, Jg = R && R.now !== Re.Date.now && R.now, e0 = E.setTimeout !== Re.setTimeout && E.setTimeout, bi = Te.ceil, Ci = Te.floor, Ol = he.getOwnPropertySymbols, t0 = mi ? mi.isBuffer : r, yf = E.isFinite, n0 = hi.join, r0 = pf(he.keys, he), Pe = Te.max, Ue = Te.min, o0 = R.now, s0 = E.parseInt, bf = Te.random, i0 = hi.reverse, Ll = Ar(E, "DataView"), jo = Ar(E, "Map"), zl = Ar(E, "Promise"), Hr = Ar(E, "Set"), Ko = Ar(E, "WeakMap"), Qo = Ar(he, "create"), Ei = Ko && new Ko(), Gr = {}, a0 = hr(Ll), l0 = hr(jo), u0 = hr(zl), c0 = hr(Hr), d0 = hr(Ko), Mi = qn ? qn.prototype : r, Jo = Mi ? Mi.valueOf : r, Cf = Mi ? Mi.toString : r;
      function A(t) {
        if (be(t) && !G(t) && !(t instanceof te)) {
          if (t instanceof It)
            return t;
          if (ue.call(t, "__wrapped__"))
            return EA(t);
        }
        return new It(t);
      }
      var jr = function() {
        function t() {
        }
        return function(n) {
          if (!Ve(n))
            return {};
          if (gf)
            return gf(n);
          t.prototype = n;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function Bi() {
      }
      function It(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      A.templateSettings = {
        escape: E1,
        evaluate: M1,
        interpolate: Td,
        variable: "",
        imports: {
          _: A
        }
      }, A.prototype = Bi.prototype, A.prototype.constructor = A, It.prototype = jr(Bi.prototype), It.prototype.constructor = It;
      function te(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = sn, this.__views__ = [];
      }
      function f0() {
        var t = new te(this.__wrapped__);
        return t.__actions__ = st(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = st(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = st(this.__views__), t;
      }
      function A0() {
        if (this.__filtered__) {
          var t = new te(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function h0() {
        var t = this.__wrapped__.value(), n = this.__dir__, s = G(t), l = n < 0, d = s ? t.length : 0, h = M_(0, d, this.__views__), w = h.start, g = h.end, b = g - w, B = l ? g : w - 1, I = this.__iteratees__, P = I.length, z = 0, W = Ue(b, this.__takeCount__);
        if (!s || !l && d == b && W == b)
          return Hf(t, this.__actions__);
        var U = [];
        e:
          for (; b-- && z < W; ) {
            B += n;
            for (var K = -1, Y = t[B]; ++K < P; ) {
              var ee = I[K], ne = ee.iteratee, mt = ee.type, Je = ne(Y);
              if (mt == Ae)
                Y = Je;
              else if (!Je) {
                if (mt == xe)
                  continue e;
                break e;
              }
            }
            U[z++] = Y;
          }
        return U;
      }
      te.prototype = jr(Bi.prototype), te.prototype.constructor = te;
      function ur(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function p0() {
        this.__data__ = Qo ? Qo(null) : {}, this.size = 0;
      }
      function w0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function v0(t) {
        var n = this.__data__;
        if (Qo) {
          var s = n[t];
          return s === p ? r : s;
        }
        return ue.call(n, t) ? n[t] : r;
      }
      function m0(t) {
        var n = this.__data__;
        return Qo ? n[t] !== r : ue.call(n, t);
      }
      function g0(t, n) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = Qo && n === r ? p : n, this;
      }
      ur.prototype.clear = p0, ur.prototype.delete = w0, ur.prototype.get = v0, ur.prototype.has = m0, ur.prototype.set = g0;
      function gn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function _0() {
        this.__data__ = [], this.size = 0;
      }
      function V0(t) {
        var n = this.__data__, s = $i(n, t);
        if (s < 0)
          return !1;
        var l = n.length - 1;
        return s == l ? n.pop() : Vi.call(n, s, 1), --this.size, !0;
      }
      function y0(t) {
        var n = this.__data__, s = $i(n, t);
        return s < 0 ? r : n[s][1];
      }
      function b0(t) {
        return $i(this.__data__, t) > -1;
      }
      function C0(t, n) {
        var s = this.__data__, l = $i(s, t);
        return l < 0 ? (++this.size, s.push([t, n])) : s[l][1] = n, this;
      }
      gn.prototype.clear = _0, gn.prototype.delete = V0, gn.prototype.get = y0, gn.prototype.has = b0, gn.prototype.set = C0;
      function _n(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function E0() {
        this.size = 0, this.__data__ = {
          hash: new ur(),
          map: new (jo || gn)(),
          string: new ur()
        };
      }
      function M0(t) {
        var n = qi(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function B0(t) {
        return qi(this, t).get(t);
      }
      function $0(t) {
        return qi(this, t).has(t);
      }
      function x0(t, n) {
        var s = qi(this, t), l = s.size;
        return s.set(t, n), this.size += s.size == l ? 0 : 1, this;
      }
      _n.prototype.clear = E0, _n.prototype.delete = M0, _n.prototype.get = B0, _n.prototype.has = $0, _n.prototype.set = x0;
      function cr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new _n(); ++n < s; )
          this.add(t[n]);
      }
      function I0(t) {
        return this.__data__.set(t, p), this;
      }
      function S0(t) {
        return this.__data__.has(t);
      }
      cr.prototype.add = cr.prototype.push = I0, cr.prototype.has = S0;
      function Xt(t) {
        var n = this.__data__ = new gn(t);
        this.size = n.size;
      }
      function T0() {
        this.__data__ = new gn(), this.size = 0;
      }
      function P0(t) {
        var n = this.__data__, s = n.delete(t);
        return this.size = n.size, s;
      }
      function k0(t) {
        return this.__data__.get(t);
      }
      function N0(t) {
        return this.__data__.has(t);
      }
      function D0(t, n) {
        var s = this.__data__;
        if (s instanceof gn) {
          var l = s.__data__;
          if (!jo || l.length < a - 1)
            return l.push([t, n]), this.size = ++s.size, this;
          s = this.__data__ = new _n(l);
        }
        return s.set(t, n), this.size = s.size, this;
      }
      Xt.prototype.clear = T0, Xt.prototype.delete = P0, Xt.prototype.get = k0, Xt.prototype.has = N0, Xt.prototype.set = D0;
      function Ef(t, n) {
        var s = G(t), l = !s && pr(t), d = !s && !l && Zn(t), h = !s && !l && !d && eo(t), w = s || l || d || h, g = w ? Pl(t.length, Ug) : [], b = g.length;
        for (var B in t)
          (n || ue.call(t, B)) && !(w && (B == "length" || d && (B == "offset" || B == "parent") || h && (B == "buffer" || B == "byteLength" || B == "byteOffset") || Cn(B, b))) && g.push(B);
        return g;
      }
      function Mf(t) {
        var n = t.length;
        return n ? t[jl(0, n - 1)] : r;
      }
      function O0(t, n) {
        return Ri(st(t), dr(n, 0, t.length));
      }
      function L0(t) {
        return Ri(st(t));
      }
      function ql(t, n, s) {
        (s !== r && !Zt(t[n], s) || s === r && !(n in t)) && Vn(t, n, s);
      }
      function es(t, n, s) {
        var l = t[n];
        (!(ue.call(t, n) && Zt(l, s)) || s === r && !(n in t)) && Vn(t, n, s);
      }
      function $i(t, n) {
        for (var s = t.length; s--; )
          if (Zt(t[s][0], n))
            return s;
        return -1;
      }
      function z0(t, n, s, l) {
        return Rn(t, function(d, h, w) {
          n(l, d, s(d), w);
        }), l;
      }
      function Bf(t, n) {
        return t && ln(n, De(n), t);
      }
      function q0(t, n) {
        return t && ln(n, at(n), t);
      }
      function Vn(t, n, s) {
        n == "__proto__" && yi ? yi(t, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[n] = s;
      }
      function Rl(t, n) {
        for (var s = -1, l = n.length, d = C(l), h = t == null; ++s < l; )
          d[s] = h ? r : Vu(t, n[s]);
        return d;
      }
      function dr(t, n, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), n !== r && (t = t >= n ? t : n)), t;
      }
      function St(t, n, s, l, d, h) {
        var w, g = n & _, b = n & V, B = n & $;
        if (s && (w = d ? s(t, l, d, h) : s(t)), w !== r)
          return w;
        if (!Ve(t))
          return t;
        var I = G(t);
        if (I) {
          if (w = $_(t), !g)
            return st(t, w);
        } else {
          var P = Ye(t), z = P == ii || P == $d;
          if (Zn(t))
            return Kf(t, g);
          if (P == mn || P == qr || z && !d) {
            if (w = b || z ? {} : wA(t), !g)
              return b ? v_(t, q0(w, t)) : w_(t, Bf(w, t));
          } else {
            if (!pe[P])
              return d ? t : {};
            w = x_(t, P, g);
          }
        }
        h || (h = new Xt());
        var W = h.get(t);
        if (W)
          return W;
        h.set(t, w), ZA(t) ? t.forEach(function(Y) {
          w.add(St(Y, n, s, Y, t, h));
        }) : FA(t) && t.forEach(function(Y, ee) {
          w.set(ee, St(Y, n, s, ee, t, h));
        });
        var U = B ? b ? au : iu : b ? at : De, K = I ? r : U(t);
        return $t(K || t, function(Y, ee) {
          K && (ee = Y, Y = t[ee]), es(w, ee, St(Y, n, s, ee, t, h));
        }), w;
      }
      function R0(t) {
        var n = De(t);
        return function(s) {
          return $f(s, t, n);
        };
      }
      function $f(t, n, s) {
        var l = s.length;
        if (t == null)
          return !l;
        for (t = he(t); l--; ) {
          var d = s[l], h = n[d], w = t[d];
          if (w === r && !(d in t) || !h(w))
            return !1;
        }
        return !0;
      }
      function xf(t, n, s) {
        if (typeof t != "function")
          throw new xt(c);
        return as(function() {
          t.apply(r, s);
        }, n);
      }
      function ts(t, n, s, l) {
        var d = -1, h = di, w = !0, g = t.length, b = [], B = n.length;
        if (!g)
          return b;
        s && (n = _e(n, pt(s))), l ? (h = Bl, w = !1) : n.length >= a && (h = Ho, w = !1, n = new cr(n));
        e:
          for (; ++d < g; ) {
            var I = t[d], P = s == null ? I : s(I);
            if (I = l || I !== 0 ? I : 0, w && P === P) {
              for (var z = B; z--; )
                if (n[z] === P)
                  continue e;
              b.push(I);
            } else
              h(n, P, l) || b.push(I);
          }
        return b;
      }
      var Rn = nA(an), If = nA(Fl, !0);
      function W0(t, n) {
        var s = !0;
        return Rn(t, function(l, d, h) {
          return s = !!n(l, d, h), s;
        }), s;
      }
      function xi(t, n, s) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], w = n(h);
          if (w != null && (g === r ? w === w && !vt(w) : s(w, g)))
            var g = w, b = h;
        }
        return b;
      }
      function F0(t, n, s, l) {
        var d = t.length;
        for (s = j(s), s < 0 && (s = -s > d ? 0 : d + s), l = l === r || l > d ? d : j(l), l < 0 && (l += d), l = s > l ? 0 : YA(l); s < l; )
          t[s++] = n;
        return t;
      }
      function Sf(t, n) {
        var s = [];
        return Rn(t, function(l, d, h) {
          n(l, d, h) && s.push(l);
        }), s;
      }
      function We(t, n, s, l, d) {
        var h = -1, w = t.length;
        for (s || (s = S_), d || (d = []); ++h < w; ) {
          var g = t[h];
          n > 0 && s(g) ? n > 1 ? We(g, n - 1, s, l, d) : Ln(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var Wl = rA(), Tf = rA(!0);
      function an(t, n) {
        return t && Wl(t, n, De);
      }
      function Fl(t, n) {
        return t && Tf(t, n, De);
      }
      function Ii(t, n) {
        return On(n, function(s) {
          return En(t[s]);
        });
      }
      function fr(t, n) {
        n = Fn(n, t);
        for (var s = 0, l = n.length; t != null && s < l; )
          t = t[un(n[s++])];
        return s && s == l ? t : r;
      }
      function Pf(t, n, s) {
        var l = n(t);
        return G(t) ? l : Ln(l, s(t));
      }
      function Ke(t) {
        return t == null ? t === r ? m1 : w1 : lr && lr in he(t) ? E_(t) : L_(t);
      }
      function Xl(t, n) {
        return t > n;
      }
      function X0(t, n) {
        return t != null && ue.call(t, n);
      }
      function Z0(t, n) {
        return t != null && n in he(t);
      }
      function U0(t, n, s) {
        return t >= Ue(n, s) && t < Pe(n, s);
      }
      function Zl(t, n, s) {
        for (var l = s ? Bl : di, d = t[0].length, h = t.length, w = h, g = C(h), b = 1 / 0, B = []; w--; ) {
          var I = t[w];
          w && n && (I = _e(I, pt(n))), b = Ue(I.length, b), g[w] = !s && (n || d >= 120 && I.length >= 120) ? new cr(w && I) : r;
        }
        I = t[0];
        var P = -1, z = g[0];
        e:
          for (; ++P < d && B.length < b; ) {
            var W = I[P], U = n ? n(W) : W;
            if (W = s || W !== 0 ? W : 0, !(z ? Ho(z, U) : l(B, U, s))) {
              for (w = h; --w; ) {
                var K = g[w];
                if (!(K ? Ho(K, U) : l(t[w], U, s)))
                  continue e;
              }
              z && z.push(U), B.push(W);
            }
          }
        return B;
      }
      function Y0(t, n, s, l) {
        return an(t, function(d, h, w) {
          n(l, s(d), h, w);
        }), l;
      }
      function ns(t, n, s) {
        n = Fn(n, t), t = _A(t, n);
        var l = t == null ? t : t[un(Pt(n))];
        return l == null ? r : ht(l, t, s);
      }
      function kf(t) {
        return be(t) && Ke(t) == qr;
      }
      function H0(t) {
        return be(t) && Ke(t) == Yo;
      }
      function G0(t) {
        return be(t) && Ke(t) == Wo;
      }
      function rs(t, n, s, l, d) {
        return t === n ? !0 : t == null || n == null || !be(t) && !be(n) ? t !== t && n !== n : j0(t, n, s, l, rs, d);
      }
      function j0(t, n, s, l, d, h) {
        var w = G(t), g = G(n), b = w ? oi : Ye(t), B = g ? oi : Ye(n);
        b = b == qr ? mn : b, B = B == qr ? mn : B;
        var I = b == mn, P = B == mn, z = b == B;
        if (z && Zn(t)) {
          if (!Zn(n))
            return !1;
          w = !0, I = !1;
        }
        if (z && !I)
          return h || (h = new Xt()), w || eo(t) ? AA(t, n, s, l, d, h) : b_(t, n, b, s, l, d, h);
        if (!(s & M)) {
          var W = I && ue.call(t, "__wrapped__"), U = P && ue.call(n, "__wrapped__");
          if (W || U) {
            var K = W ? t.value() : t, Y = U ? n.value() : n;
            return h || (h = new Xt()), d(K, Y, s, l, h);
          }
        }
        return z ? (h || (h = new Xt()), C_(t, n, s, l, d, h)) : !1;
      }
      function K0(t) {
        return be(t) && Ye(t) == Rt;
      }
      function Ul(t, n, s, l) {
        var d = s.length, h = d, w = !l;
        if (t == null)
          return !h;
        for (t = he(t); d--; ) {
          var g = s[d];
          if (w && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < h; ) {
          g = s[d];
          var b = g[0], B = t[b], I = g[1];
          if (w && g[2]) {
            if (B === r && !(b in t))
              return !1;
          } else {
            var P = new Xt();
            if (l)
              var z = l(B, I, b, t, n, P);
            if (!(z === r ? rs(I, B, M | T, l, P) : z))
              return !1;
          }
        }
        return !0;
      }
      function Nf(t) {
        if (!Ve(t) || P_(t))
          return !1;
        var n = En(t) ? Kg : R1;
        return n.test(hr(t));
      }
      function Q0(t) {
        return be(t) && Ke(t) == Xo;
      }
      function J0(t) {
        return be(t) && Ye(t) == Wt;
      }
      function e_(t) {
        return be(t) && Yi(t.length) && !!me[Ke(t)];
      }
      function Df(t) {
        return typeof t == "function" ? t : t == null ? lt : typeof t == "object" ? G(t) ? zf(t[0], t[1]) : Lf(t) : oh(t);
      }
      function Yl(t) {
        if (!is(t))
          return r0(t);
        var n = [];
        for (var s in he(t))
          ue.call(t, s) && s != "constructor" && n.push(s);
        return n;
      }
      function t_(t) {
        if (!Ve(t))
          return O_(t);
        var n = is(t), s = [];
        for (var l in t)
          l == "constructor" && (n || !ue.call(t, l)) || s.push(l);
        return s;
      }
      function Hl(t, n) {
        return t < n;
      }
      function Of(t, n) {
        var s = -1, l = it(t) ? C(t.length) : [];
        return Rn(t, function(d, h, w) {
          l[++s] = n(d, h, w);
        }), l;
      }
      function Lf(t) {
        var n = uu(t);
        return n.length == 1 && n[0][2] ? mA(n[0][0], n[0][1]) : function(s) {
          return s === t || Ul(s, t, n);
        };
      }
      function zf(t, n) {
        return du(t) && vA(n) ? mA(un(t), n) : function(s) {
          var l = Vu(s, t);
          return l === r && l === n ? yu(s, t) : rs(n, l, M | T);
        };
      }
      function Si(t, n, s, l, d) {
        t !== n && Wl(n, function(h, w) {
          if (d || (d = new Xt()), Ve(h))
            n_(t, n, w, s, Si, l, d);
          else {
            var g = l ? l(Au(t, w), h, w + "", t, n, d) : r;
            g === r && (g = h), ql(t, w, g);
          }
        }, at);
      }
      function n_(t, n, s, l, d, h, w) {
        var g = Au(t, s), b = Au(n, s), B = w.get(b);
        if (B) {
          ql(t, s, B);
          return;
        }
        var I = h ? h(g, b, s + "", t, n, w) : r, P = I === r;
        if (P) {
          var z = G(b), W = !z && Zn(b), U = !z && !W && eo(b);
          I = b, z || W || U ? G(g) ? I = g : Ee(g) ? I = st(g) : W ? (P = !1, I = Kf(b, !0)) : U ? (P = !1, I = Qf(b, !0)) : I = [] : ls(b) || pr(b) ? (I = g, pr(g) ? I = HA(g) : (!Ve(g) || En(g)) && (I = wA(b))) : P = !1;
        }
        P && (w.set(b, I), d(I, b, l, h, w), w.delete(b)), ql(t, s, I);
      }
      function qf(t, n) {
        var s = t.length;
        if (!!s)
          return n += n < 0 ? s : 0, Cn(n, s) ? t[n] : r;
      }
      function Rf(t, n, s) {
        n.length ? n = _e(n, function(h) {
          return G(h) ? function(w) {
            return fr(w, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [lt];
        var l = -1;
        n = _e(n, pt(X()));
        var d = Of(t, function(h, w, g) {
          var b = _e(n, function(B) {
            return B(h);
          });
          return { criteria: b, index: ++l, value: h };
        });
        return xg(d, function(h, w) {
          return p_(h, w, s);
        });
      }
      function r_(t, n) {
        return Wf(t, n, function(s, l) {
          return yu(t, l);
        });
      }
      function Wf(t, n, s) {
        for (var l = -1, d = n.length, h = {}; ++l < d; ) {
          var w = n[l], g = fr(t, w);
          s(g, w) && os(h, Fn(w, t), g);
        }
        return h;
      }
      function o_(t) {
        return function(n) {
          return fr(n, t);
        };
      }
      function Gl(t, n, s, l) {
        var d = l ? $g : Fr, h = -1, w = n.length, g = t;
        for (t === n && (n = st(n)), s && (g = _e(t, pt(s))); ++h < w; )
          for (var b = 0, B = n[h], I = s ? s(B) : B; (b = d(g, I, b, l)) > -1; )
            g !== t && Vi.call(g, b, 1), Vi.call(t, b, 1);
        return t;
      }
      function Ff(t, n) {
        for (var s = t ? n.length : 0, l = s - 1; s--; ) {
          var d = n[s];
          if (s == l || d !== h) {
            var h = d;
            Cn(d) ? Vi.call(t, d, 1) : Jl(t, d);
          }
        }
        return t;
      }
      function jl(t, n) {
        return t + Ci(bf() * (n - t + 1));
      }
      function s_(t, n, s, l) {
        for (var d = -1, h = Pe(bi((n - t) / (s || 1)), 0), w = C(h); h--; )
          w[l ? h : ++d] = t, t += s;
        return w;
      }
      function Kl(t, n) {
        var s = "";
        if (!t || n < 1 || n > je)
          return s;
        do
          n % 2 && (s += t), n = Ci(n / 2), n && (t += t);
        while (n);
        return s;
      }
      function J(t, n) {
        return hu(gA(t, n, lt), t + "");
      }
      function i_(t) {
        return Mf(to(t));
      }
      function a_(t, n) {
        var s = to(t);
        return Ri(s, dr(n, 0, s.length));
      }
      function os(t, n, s, l) {
        if (!Ve(t))
          return t;
        n = Fn(n, t);
        for (var d = -1, h = n.length, w = h - 1, g = t; g != null && ++d < h; ) {
          var b = un(n[d]), B = s;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != w) {
            var I = g[b];
            B = l ? l(I, b, g) : r, B === r && (B = Ve(I) ? I : Cn(n[d + 1]) ? [] : {});
          }
          es(g, b, B), g = g[b];
        }
        return t;
      }
      var Xf = Ei ? function(t, n) {
        return Ei.set(t, n), t;
      } : lt, l_ = yi ? function(t, n) {
        return yi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Cu(n),
          writable: !0
        });
      } : lt;
      function u_(t) {
        return Ri(to(t));
      }
      function Tt(t, n, s) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), s = s > d ? d : s, s < 0 && (s += d), d = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var h = C(d); ++l < d; )
          h[l] = t[l + n];
        return h;
      }
      function c_(t, n) {
        var s;
        return Rn(t, function(l, d, h) {
          return s = n(l, d, h), !s;
        }), !!s;
      }
      function Ti(t, n, s) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= f1) {
          for (; l < d; ) {
            var h = l + d >>> 1, w = t[h];
            w !== null && !vt(w) && (s ? w <= n : w < n) ? l = h + 1 : d = h;
          }
          return d;
        }
        return Ql(t, n, lt, s);
      }
      function Ql(t, n, s, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        n = s(n);
        for (var w = n !== n, g = n === null, b = vt(n), B = n === r; d < h; ) {
          var I = Ci((d + h) / 2), P = s(t[I]), z = P !== r, W = P === null, U = P === P, K = vt(P);
          if (w)
            var Y = l || U;
          else
            B ? Y = U && (l || z) : g ? Y = U && z && (l || !W) : b ? Y = U && z && !W && (l || !K) : W || K ? Y = !1 : Y = l ? P <= n : P < n;
          Y ? d = I + 1 : h = I;
        }
        return Ue(h, d1);
      }
      function Zf(t, n) {
        for (var s = -1, l = t.length, d = 0, h = []; ++s < l; ) {
          var w = t[s], g = n ? n(w) : w;
          if (!s || !Zt(g, b)) {
            var b = g;
            h[d++] = w === 0 ? 0 : w;
          }
        }
        return h;
      }
      function Uf(t) {
        return typeof t == "number" ? t : vt(t) ? ri : +t;
      }
      function wt(t) {
        if (typeof t == "string")
          return t;
        if (G(t))
          return _e(t, wt) + "";
        if (vt(t))
          return Cf ? Cf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -qe ? "-0" : n;
      }
      function Wn(t, n, s) {
        var l = -1, d = di, h = t.length, w = !0, g = [], b = g;
        if (s)
          w = !1, d = Bl;
        else if (h >= a) {
          var B = n ? null : V_(t);
          if (B)
            return Ai(B);
          w = !1, d = Ho, b = new cr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < h; ) {
            var I = t[l], P = n ? n(I) : I;
            if (I = s || I !== 0 ? I : 0, w && P === P) {
              for (var z = b.length; z--; )
                if (b[z] === P)
                  continue e;
              n && b.push(P), g.push(I);
            } else
              d(b, P, s) || (b !== g && b.push(P), g.push(I));
          }
        return g;
      }
      function Jl(t, n) {
        return n = Fn(n, t), t = _A(t, n), t == null || delete t[un(Pt(n))];
      }
      function Yf(t, n, s, l) {
        return os(t, n, s(fr(t, n)), l);
      }
      function Pi(t, n, s, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && n(t[h], h, t); )
          ;
        return s ? Tt(t, l ? 0 : h, l ? h + 1 : d) : Tt(t, l ? h + 1 : 0, l ? d : h);
      }
      function Hf(t, n) {
        var s = t;
        return s instanceof te && (s = s.value()), $l(n, function(l, d) {
          return d.func.apply(d.thisArg, Ln([l], d.args));
        }, s);
      }
      function eu(t, n, s) {
        var l = t.length;
        if (l < 2)
          return l ? Wn(t[0]) : [];
        for (var d = -1, h = C(l); ++d < l; )
          for (var w = t[d], g = -1; ++g < l; )
            g != d && (h[d] = ts(h[d] || w, t[g], n, s));
        return Wn(We(h, 1), n, s);
      }
      function Gf(t, n, s) {
        for (var l = -1, d = t.length, h = n.length, w = {}; ++l < d; ) {
          var g = l < h ? n[l] : r;
          s(w, t[l], g);
        }
        return w;
      }
      function tu(t) {
        return Ee(t) ? t : [];
      }
      function nu(t) {
        return typeof t == "function" ? t : lt;
      }
      function Fn(t, n) {
        return G(t) ? t : du(t, n) ? [t] : CA(ae(t));
      }
      var d_ = J;
      function Xn(t, n, s) {
        var l = t.length;
        return s = s === r ? l : s, !n && s >= l ? t : Tt(t, n, s);
      }
      var jf = Qg || function(t) {
        return Re.clearTimeout(t);
      };
      function Kf(t, n) {
        if (n)
          return t.slice();
        var s = t.length, l = mf ? mf(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function ru(t) {
        var n = new t.constructor(t.byteLength);
        return new gi(n).set(new gi(t)), n;
      }
      function f_(t, n) {
        var s = n ? ru(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function A_(t) {
        var n = new t.constructor(t.source, Pd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function h_(t) {
        return Jo ? he(Jo.call(t)) : {};
      }
      function Qf(t, n) {
        var s = n ? ru(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function Jf(t, n) {
        if (t !== n) {
          var s = t !== r, l = t === null, d = t === t, h = vt(t), w = n !== r, g = n === null, b = n === n, B = vt(n);
          if (!g && !B && !h && t > n || h && w && b && !g && !B || l && w && b || !s && b || !d)
            return 1;
          if (!l && !h && !B && t < n || B && s && d && !l && !h || g && s && d || !w && d || !b)
            return -1;
        }
        return 0;
      }
      function p_(t, n, s) {
        for (var l = -1, d = t.criteria, h = n.criteria, w = d.length, g = s.length; ++l < w; ) {
          var b = Jf(d[l], h[l]);
          if (b) {
            if (l >= g)
              return b;
            var B = s[l];
            return b * (B == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function eA(t, n, s, l) {
        for (var d = -1, h = t.length, w = s.length, g = -1, b = n.length, B = Pe(h - w, 0), I = C(b + B), P = !l; ++g < b; )
          I[g] = n[g];
        for (; ++d < w; )
          (P || d < h) && (I[s[d]] = t[d]);
        for (; B--; )
          I[g++] = t[d++];
        return I;
      }
      function tA(t, n, s, l) {
        for (var d = -1, h = t.length, w = -1, g = s.length, b = -1, B = n.length, I = Pe(h - g, 0), P = C(I + B), z = !l; ++d < I; )
          P[d] = t[d];
        for (var W = d; ++b < B; )
          P[W + b] = n[b];
        for (; ++w < g; )
          (z || d < h) && (P[W + s[w]] = t[d++]);
        return P;
      }
      function st(t, n) {
        var s = -1, l = t.length;
        for (n || (n = C(l)); ++s < l; )
          n[s] = t[s];
        return n;
      }
      function ln(t, n, s, l) {
        var d = !s;
        s || (s = {});
        for (var h = -1, w = n.length; ++h < w; ) {
          var g = n[h], b = l ? l(s[g], t[g], g, s, t) : r;
          b === r && (b = t[g]), d ? Vn(s, g, b) : es(s, g, b);
        }
        return s;
      }
      function w_(t, n) {
        return ln(t, cu(t), n);
      }
      function v_(t, n) {
        return ln(t, hA(t), n);
      }
      function ki(t, n) {
        return function(s, l) {
          var d = G(s) ? yg : z0, h = n ? n() : {};
          return d(s, t, X(l, 2), h);
        };
      }
      function Kr(t) {
        return J(function(n, s) {
          var l = -1, d = s.length, h = d > 1 ? s[d - 1] : r, w = d > 2 ? s[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, w && Qe(s[0], s[1], w) && (h = d < 3 ? r : h, d = 1), n = he(n); ++l < d; ) {
            var g = s[l];
            g && t(n, g, l, h);
          }
          return n;
        });
      }
      function nA(t, n) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!it(s))
            return t(s, l);
          for (var d = s.length, h = n ? d : -1, w = he(s); (n ? h-- : ++h < d) && l(w[h], h, w) !== !1; )
            ;
          return s;
        };
      }
      function rA(t) {
        return function(n, s, l) {
          for (var d = -1, h = he(n), w = l(n), g = w.length; g--; ) {
            var b = w[t ? g : ++d];
            if (s(h[b], b, h) === !1)
              break;
          }
          return n;
        };
      }
      function m_(t, n, s) {
        var l = n & D, d = ss(t);
        function h() {
          var w = this && this !== Re && this instanceof h ? d : t;
          return w.apply(l ? s : this, arguments);
        }
        return h;
      }
      function oA(t) {
        return function(n) {
          n = ae(n);
          var s = Xr(n) ? Ft(n) : r, l = s ? s[0] : n.charAt(0), d = s ? Xn(s, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Qr(t) {
        return function(n) {
          return $l(nh(th(n).replace(lg, "")), t, "");
        };
      }
      function ss(t) {
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
          var s = jr(t.prototype), l = t.apply(s, n);
          return Ve(l) ? l : s;
        };
      }
      function g_(t, n, s) {
        var l = ss(t);
        function d() {
          for (var h = arguments.length, w = C(h), g = h, b = Jr(d); g--; )
            w[g] = arguments[g];
          var B = h < 3 && w[0] !== b && w[h - 1] !== b ? [] : zn(w, b);
          if (h -= B.length, h < s)
            return uA(
              t,
              n,
              Ni,
              d.placeholder,
              r,
              w,
              B,
              r,
              r,
              s - h
            );
          var I = this && this !== Re && this instanceof d ? l : t;
          return ht(I, this, w);
        }
        return d;
      }
      function sA(t) {
        return function(n, s, l) {
          var d = he(n);
          if (!it(n)) {
            var h = X(s, 3);
            n = De(n), s = function(g) {
              return h(d[g], g, d);
            };
          }
          var w = t(n, s, l);
          return w > -1 ? d[h ? n[w] : w] : r;
        };
      }
      function iA(t) {
        return bn(function(n) {
          var s = n.length, l = s, d = It.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var h = n[l];
            if (typeof h != "function")
              throw new xt(c);
            if (d && !w && zi(h) == "wrapper")
              var w = new It([], !0);
          }
          for (l = w ? l : s; ++l < s; ) {
            h = n[l];
            var g = zi(h), b = g == "wrapper" ? lu(h) : r;
            b && fu(b[0]) && b[1] == (L | S | x | F) && !b[4].length && b[9] == 1 ? w = w[zi(b[0])].apply(w, b[3]) : w = h.length == 1 && fu(h) ? w[g]() : w.thru(h);
          }
          return function() {
            var B = arguments, I = B[0];
            if (w && B.length == 1 && G(I))
              return w.plant(I).value();
            for (var P = 0, z = s ? n[P].apply(this, B) : I; ++P < s; )
              z = n[P].call(this, z);
            return z;
          };
        });
      }
      function Ni(t, n, s, l, d, h, w, g, b, B) {
        var I = n & L, P = n & D, z = n & N, W = n & (S | O), U = n & ge, K = z ? r : ss(t);
        function Y() {
          for (var ee = arguments.length, ne = C(ee), mt = ee; mt--; )
            ne[mt] = arguments[mt];
          if (W)
            var Je = Jr(Y), gt = Sg(ne, Je);
          if (l && (ne = eA(ne, l, d, W)), h && (ne = tA(ne, h, w, W)), ee -= gt, W && ee < B) {
            var Me = zn(ne, Je);
            return uA(
              t,
              n,
              Ni,
              Y.placeholder,
              s,
              ne,
              Me,
              g,
              b,
              B - ee
            );
          }
          var Ut = P ? s : this, Bn = z ? Ut[t] : t;
          return ee = ne.length, g ? ne = z_(ne, g) : U && ee > 1 && ne.reverse(), I && b < ee && (ne.length = b), this && this !== Re && this instanceof Y && (Bn = K || ss(Bn)), Bn.apply(Ut, ne);
        }
        return Y;
      }
      function aA(t, n) {
        return function(s, l) {
          return Y0(s, t, n(l), {});
        };
      }
      function Di(t, n) {
        return function(s, l) {
          var d;
          if (s === r && l === r)
            return n;
          if (s !== r && (d = s), l !== r) {
            if (d === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = wt(s), l = wt(l)) : (s = Uf(s), l = Uf(l)), d = t(s, l);
          }
          return d;
        };
      }
      function ou(t) {
        return bn(function(n) {
          return n = _e(n, pt(X())), J(function(s) {
            var l = this;
            return t(n, function(d) {
              return ht(d, l, s);
            });
          });
        });
      }
      function Oi(t, n) {
        n = n === r ? " " : wt(n);
        var s = n.length;
        if (s < 2)
          return s ? Kl(n, t) : n;
        var l = Kl(n, bi(t / Zr(n)));
        return Xr(n) ? Xn(Ft(l), 0, t).join("") : l.slice(0, t);
      }
      function __(t, n, s, l) {
        var d = n & D, h = ss(t);
        function w() {
          for (var g = -1, b = arguments.length, B = -1, I = l.length, P = C(I + b), z = this && this !== Re && this instanceof w ? h : t; ++B < I; )
            P[B] = l[B];
          for (; b--; )
            P[B++] = arguments[++g];
          return ht(z, d ? s : this, P);
        }
        return w;
      }
      function lA(t) {
        return function(n, s, l) {
          return l && typeof l != "number" && Qe(n, s, l) && (s = l = r), n = Mn(n), s === r ? (s = n, n = 0) : s = Mn(s), l = l === r ? n < s ? 1 : -1 : Mn(l), s_(n, s, l, t);
        };
      }
      function Li(t) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = kt(n), s = kt(s)), t(n, s);
        };
      }
      function uA(t, n, s, l, d, h, w, g, b, B) {
        var I = n & S, P = I ? w : r, z = I ? r : w, W = I ? h : r, U = I ? r : h;
        n |= I ? x : q, n &= ~(I ? q : x), n & k || (n &= ~(D | N));
        var K = [
          t,
          n,
          d,
          W,
          P,
          U,
          z,
          g,
          b,
          B
        ], Y = s.apply(r, K);
        return fu(t) && VA(Y, K), Y.placeholder = l, yA(Y, t, n);
      }
      function su(t) {
        var n = Te[t];
        return function(s, l) {
          if (s = kt(s), l = l == null ? 0 : Ue(j(l), 292), l && yf(s)) {
            var d = (ae(s) + "e").split("e"), h = n(d[0] + "e" + (+d[1] + l));
            return d = (ae(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(s);
        };
      }
      var V_ = Hr && 1 / Ai(new Hr([, -0]))[1] == qe ? function(t) {
        return new Hr(t);
      } : Bu;
      function cA(t) {
        return function(n) {
          var s = Ye(n);
          return s == Rt ? Nl(n) : s == Wt ? Lg(n) : Ig(n, t(n));
        };
      }
      function yn(t, n, s, l, d, h, w, g) {
        var b = n & N;
        if (!b && typeof t != "function")
          throw new xt(c);
        var B = l ? l.length : 0;
        if (B || (n &= ~(x | q), l = d = r), w = w === r ? w : Pe(j(w), 0), g = g === r ? g : j(g), B -= d ? d.length : 0, n & q) {
          var I = l, P = d;
          l = d = r;
        }
        var z = b ? r : lu(t), W = [
          t,
          n,
          s,
          l,
          d,
          I,
          P,
          h,
          w,
          g
        ];
        if (z && D_(W, z), t = W[0], n = W[1], s = W[2], l = W[3], d = W[4], g = W[9] = W[9] === r ? b ? 0 : t.length : Pe(W[9] - B, 0), !g && n & (S | O) && (n &= ~(S | O)), !n || n == D)
          var U = m_(t, n, s);
        else
          n == S || n == O ? U = g_(t, n, g) : (n == x || n == (D | x)) && !d.length ? U = __(t, n, s, l) : U = Ni.apply(r, W);
        var K = z ? Xf : VA;
        return yA(K(U, W), t, n);
      }
      function dA(t, n, s, l) {
        return t === r || Zt(t, Yr[s]) && !ue.call(l, s) ? n : t;
      }
      function fA(t, n, s, l, d, h) {
        return Ve(t) && Ve(n) && (h.set(n, t), Si(t, n, r, fA, h), h.delete(n)), t;
      }
      function y_(t) {
        return ls(t) ? r : t;
      }
      function AA(t, n, s, l, d, h) {
        var w = s & M, g = t.length, b = n.length;
        if (g != b && !(w && b > g))
          return !1;
        var B = h.get(t), I = h.get(n);
        if (B && I)
          return B == n && I == t;
        var P = -1, z = !0, W = s & T ? new cr() : r;
        for (h.set(t, n), h.set(n, t); ++P < g; ) {
          var U = t[P], K = n[P];
          if (l)
            var Y = w ? l(K, U, P, n, t, h) : l(U, K, P, t, n, h);
          if (Y !== r) {
            if (Y)
              continue;
            z = !1;
            break;
          }
          if (W) {
            if (!xl(n, function(ee, ne) {
              if (!Ho(W, ne) && (U === ee || d(U, ee, s, l, h)))
                return W.push(ne);
            })) {
              z = !1;
              break;
            }
          } else if (!(U === K || d(U, K, s, l, h))) {
            z = !1;
            break;
          }
        }
        return h.delete(t), h.delete(n), z;
      }
      function b_(t, n, s, l, d, h, w) {
        switch (s) {
          case Rr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Yo:
            return !(t.byteLength != n.byteLength || !h(new gi(t), new gi(n)));
          case Ro:
          case Wo:
          case Fo:
            return Zt(+t, +n);
          case si:
            return t.name == n.name && t.message == n.message;
          case Xo:
          case Zo:
            return t == n + "";
          case Rt:
            var g = Nl;
          case Wt:
            var b = l & M;
            if (g || (g = Ai), t.size != n.size && !b)
              return !1;
            var B = w.get(t);
            if (B)
              return B == n;
            l |= T, w.set(t, n);
            var I = AA(g(t), g(n), l, d, h, w);
            return w.delete(t), I;
          case ai:
            if (Jo)
              return Jo.call(t) == Jo.call(n);
        }
        return !1;
      }
      function C_(t, n, s, l, d, h) {
        var w = s & M, g = iu(t), b = g.length, B = iu(n), I = B.length;
        if (b != I && !w)
          return !1;
        for (var P = b; P--; ) {
          var z = g[P];
          if (!(w ? z in n : ue.call(n, z)))
            return !1;
        }
        var W = h.get(t), U = h.get(n);
        if (W && U)
          return W == n && U == t;
        var K = !0;
        h.set(t, n), h.set(n, t);
        for (var Y = w; ++P < b; ) {
          z = g[P];
          var ee = t[z], ne = n[z];
          if (l)
            var mt = w ? l(ne, ee, z, n, t, h) : l(ee, ne, z, t, n, h);
          if (!(mt === r ? ee === ne || d(ee, ne, s, l, h) : mt)) {
            K = !1;
            break;
          }
          Y || (Y = z == "constructor");
        }
        if (K && !Y) {
          var Je = t.constructor, gt = n.constructor;
          Je != gt && "constructor" in t && "constructor" in n && !(typeof Je == "function" && Je instanceof Je && typeof gt == "function" && gt instanceof gt) && (K = !1);
        }
        return h.delete(t), h.delete(n), K;
      }
      function bn(t) {
        return hu(gA(t, r, $A), t + "");
      }
      function iu(t) {
        return Pf(t, De, cu);
      }
      function au(t) {
        return Pf(t, at, hA);
      }
      var lu = Ei ? function(t) {
        return Ei.get(t);
      } : Bu;
      function zi(t) {
        for (var n = t.name + "", s = Gr[n], l = ue.call(Gr, n) ? s.length : 0; l--; ) {
          var d = s[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return n;
      }
      function Jr(t) {
        var n = ue.call(A, "placeholder") ? A : t;
        return n.placeholder;
      }
      function X() {
        var t = A.iteratee || Eu;
        return t = t === Eu ? Df : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function qi(t, n) {
        var s = t.__data__;
        return T_(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function uu(t) {
        for (var n = De(t), s = n.length; s--; ) {
          var l = n[s], d = t[l];
          n[s] = [l, d, vA(d)];
        }
        return n;
      }
      function Ar(t, n) {
        var s = Ng(t, n);
        return Nf(s) ? s : r;
      }
      function E_(t) {
        var n = ue.call(t, lr), s = t[lr];
        try {
          t[lr] = r;
          var l = !0;
        } catch {
        }
        var d = vi.call(t);
        return l && (n ? t[lr] = s : delete t[lr]), d;
      }
      var cu = Ol ? function(t) {
        return t == null ? [] : (t = he(t), On(Ol(t), function(n) {
          return _f.call(t, n);
        }));
      } : $u, hA = Ol ? function(t) {
        for (var n = []; t; )
          Ln(n, cu(t)), t = _i(t);
        return n;
      } : $u, Ye = Ke;
      (Ll && Ye(new Ll(new ArrayBuffer(1))) != Rr || jo && Ye(new jo()) != Rt || zl && Ye(zl.resolve()) != xd || Hr && Ye(new Hr()) != Wt || Ko && Ye(new Ko()) != Uo) && (Ye = function(t) {
        var n = Ke(t), s = n == mn ? t.constructor : r, l = s ? hr(s) : "";
        if (l)
          switch (l) {
            case a0:
              return Rr;
            case l0:
              return Rt;
            case u0:
              return xd;
            case c0:
              return Wt;
            case d0:
              return Uo;
          }
        return n;
      });
      function M_(t, n, s) {
        for (var l = -1, d = s.length; ++l < d; ) {
          var h = s[l], w = h.size;
          switch (h.type) {
            case "drop":
              t += w;
              break;
            case "dropRight":
              n -= w;
              break;
            case "take":
              n = Ue(n, t + w);
              break;
            case "takeRight":
              t = Pe(t, n - w);
              break;
          }
        }
        return { start: t, end: n };
      }
      function B_(t) {
        var n = t.match(P1);
        return n ? n[1].split(k1) : [];
      }
      function pA(t, n, s) {
        n = Fn(n, t);
        for (var l = -1, d = n.length, h = !1; ++l < d; ) {
          var w = un(n[l]);
          if (!(h = t != null && s(t, w)))
            break;
          t = t[w];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && Yi(d) && Cn(w, d) && (G(t) || pr(t)));
      }
      function $_(t) {
        var n = t.length, s = new t.constructor(n);
        return n && typeof t[0] == "string" && ue.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function wA(t) {
        return typeof t.constructor == "function" && !is(t) ? jr(_i(t)) : {};
      }
      function x_(t, n, s) {
        var l = t.constructor;
        switch (n) {
          case Yo:
            return ru(t);
          case Ro:
          case Wo:
            return new l(+t);
          case Rr:
            return f_(t, s);
          case ul:
          case cl:
          case dl:
          case fl:
          case Al:
          case hl:
          case pl:
          case wl:
          case vl:
            return Qf(t, s);
          case Rt:
            return new l();
          case Fo:
          case Zo:
            return new l(t);
          case Xo:
            return A_(t);
          case Wt:
            return new l();
          case ai:
            return h_(t);
        }
      }
      function I_(t, n) {
        var s = n.length;
        if (!s)
          return t;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), t.replace(T1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function S_(t) {
        return G(t) || pr(t) || !!(Vf && t && t[Vf]);
      }
      function Cn(t, n) {
        var s = typeof t;
        return n = n == null ? je : n, !!n && (s == "number" || s != "symbol" && F1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Qe(t, n, s) {
        if (!Ve(s))
          return !1;
        var l = typeof n;
        return (l == "number" ? it(s) && Cn(n, s.length) : l == "string" && n in s) ? Zt(s[n], t) : !1;
      }
      function du(t, n) {
        if (G(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || vt(t) ? !0 : $1.test(t) || !B1.test(t) || n != null && t in he(n);
      }
      function T_(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function fu(t) {
        var n = zi(t), s = A[n];
        if (typeof s != "function" || !(n in te.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = lu(s);
        return !!l && t === l[0];
      }
      function P_(t) {
        return !!vf && vf in t;
      }
      var k_ = pi ? En : xu;
      function is(t) {
        var n = t && t.constructor, s = typeof n == "function" && n.prototype || Yr;
        return t === s;
      }
      function vA(t) {
        return t === t && !Ve(t);
      }
      function mA(t, n) {
        return function(s) {
          return s == null ? !1 : s[t] === n && (n !== r || t in he(s));
        };
      }
      function N_(t) {
        var n = Zi(t, function(l) {
          return s.size === v && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function D_(t, n) {
        var s = t[1], l = n[1], d = s | l, h = d < (D | N | L), w = l == L && s == S || l == L && s == F && t[7].length <= n[8] || l == (L | F) && n[7].length <= n[8] && s == S;
        if (!(h || w))
          return t;
        l & D && (t[2] = n[2], d |= s & D ? 0 : k);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? eA(b, g, n[4]) : g, t[4] = b ? zn(t[3], m) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? tA(b, g, n[6]) : g, t[6] = b ? zn(t[5], m) : n[6]), g = n[7], g && (t[7] = g), l & L && (t[8] = t[8] == null ? n[8] : Ue(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function O_(t) {
        var n = [];
        if (t != null)
          for (var s in he(t))
            n.push(s);
        return n;
      }
      function L_(t) {
        return vi.call(t);
      }
      function gA(t, n, s) {
        return n = Pe(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, h = Pe(l.length - n, 0), w = C(h); ++d < h; )
            w[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = s(w), ht(t, this, g);
        };
      }
      function _A(t, n) {
        return n.length < 2 ? t : fr(t, Tt(n, 0, -1));
      }
      function z_(t, n) {
        for (var s = t.length, l = Ue(n.length, s), d = st(t); l--; ) {
          var h = n[l];
          t[l] = Cn(h, s) ? d[h] : r;
        }
        return t;
      }
      function Au(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var VA = bA(Xf), as = e0 || function(t, n) {
        return Re.setTimeout(t, n);
      }, hu = bA(l_);
      function yA(t, n, s) {
        var l = n + "";
        return hu(t, I_(l, q_(B_(l), s)));
      }
      function bA(t) {
        var n = 0, s = 0;
        return function() {
          var l = o0(), d = Ce - (l - s);
          if (s = l, d > 0) {
            if (++n >= ye)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Ri(t, n) {
        var s = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++s < n; ) {
          var h = jl(s, d), w = t[h];
          t[h] = t[s], t[s] = w;
        }
        return t.length = n, t;
      }
      var CA = N_(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(x1, function(s, l, d, h) {
          n.push(d ? h.replace(O1, "$1") : l || s);
        }), n;
      });
      function un(t) {
        if (typeof t == "string" || vt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -qe ? "-0" : n;
      }
      function hr(t) {
        if (t != null) {
          try {
            return wi.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function q_(t, n) {
        return $t(A1, function(s) {
          var l = "_." + s[0];
          n & s[1] && !di(t, l) && t.push(l);
        }), t.sort();
      }
      function EA(t) {
        if (t instanceof te)
          return t.clone();
        var n = new It(t.__wrapped__, t.__chain__);
        return n.__actions__ = st(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function R_(t, n, s) {
        (s ? Qe(t, n, s) : n === r) ? n = 1 : n = Pe(j(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, h = 0, w = C(bi(l / n)); d < l; )
          w[h++] = Tt(t, d, d += n);
        return w;
      }
      function W_(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = 0, d = []; ++n < s; ) {
          var h = t[n];
          h && (d[l++] = h);
        }
        return d;
      }
      function F_() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), s = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Ln(G(s) ? st(s) : [s], We(n, 1));
      }
      var X_ = J(function(t, n) {
        return Ee(t) ? ts(t, We(n, 1, Ee, !0)) : [];
      }), Z_ = J(function(t, n) {
        var s = Pt(n);
        return Ee(s) && (s = r), Ee(t) ? ts(t, We(n, 1, Ee, !0), X(s, 2)) : [];
      }), U_ = J(function(t, n) {
        var s = Pt(n);
        return Ee(s) && (s = r), Ee(t) ? ts(t, We(n, 1, Ee, !0), r, s) : [];
      });
      function Y_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), Tt(t, n < 0 ? 0 : n, l)) : [];
      }
      function H_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), n = l - n, Tt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function G_(t, n) {
        return t && t.length ? Pi(t, X(n, 3), !0, !0) : [];
      }
      function j_(t, n) {
        return t && t.length ? Pi(t, X(n, 3), !0) : [];
      }
      function K_(t, n, s, l) {
        var d = t == null ? 0 : t.length;
        return d ? (s && typeof s != "number" && Qe(t, n, s) && (s = 0, l = d), F0(t, n, s, l)) : [];
      }
      function MA(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : j(s);
        return d < 0 && (d = Pe(l + d, 0)), fi(t, X(n, 3), d);
      }
      function BA(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return s !== r && (d = j(s), d = s < 0 ? Pe(l + d, 0) : Ue(d, l - 1)), fi(t, X(n, 3), d, !0);
      }
      function $A(t) {
        var n = t == null ? 0 : t.length;
        return n ? We(t, 1) : [];
      }
      function Q_(t) {
        var n = t == null ? 0 : t.length;
        return n ? We(t, qe) : [];
      }
      function J_(t, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n = n === r ? 1 : j(n), We(t, n)) : [];
      }
      function eV(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = {}; ++n < s; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function xA(t) {
        return t && t.length ? t[0] : r;
      }
      function tV(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : j(s);
        return d < 0 && (d = Pe(l + d, 0)), Fr(t, n, d);
      }
      function nV(t) {
        var n = t == null ? 0 : t.length;
        return n ? Tt(t, 0, -1) : [];
      }
      var rV = J(function(t) {
        var n = _e(t, tu);
        return n.length && n[0] === t[0] ? Zl(n) : [];
      }), oV = J(function(t) {
        var n = Pt(t), s = _e(t, tu);
        return n === Pt(s) ? n = r : s.pop(), s.length && s[0] === t[0] ? Zl(s, X(n, 2)) : [];
      }), sV = J(function(t) {
        var n = Pt(t), s = _e(t, tu);
        return n = typeof n == "function" ? n : r, n && s.pop(), s.length && s[0] === t[0] ? Zl(s, r, n) : [];
      });
      function iV(t, n) {
        return t == null ? "" : n0.call(t, n);
      }
      function Pt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function aV(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return s !== r && (d = j(s), d = d < 0 ? Pe(l + d, 0) : Ue(d, l - 1)), n === n ? qg(t, n, d) : fi(t, uf, d, !0);
      }
      function lV(t, n) {
        return t && t.length ? qf(t, j(n)) : r;
      }
      var uV = J(IA);
      function IA(t, n) {
        return t && t.length && n && n.length ? Gl(t, n) : t;
      }
      function cV(t, n, s) {
        return t && t.length && n && n.length ? Gl(t, n, X(s, 2)) : t;
      }
      function dV(t, n, s) {
        return t && t.length && n && n.length ? Gl(t, n, r, s) : t;
      }
      var fV = bn(function(t, n) {
        var s = t == null ? 0 : t.length, l = Rl(t, n);
        return Ff(t, _e(n, function(d) {
          return Cn(d, s) ? +d : d;
        }).sort(Jf)), l;
      });
      function AV(t, n) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, d = [], h = t.length;
        for (n = X(n, 3); ++l < h; ) {
          var w = t[l];
          n(w, l, t) && (s.push(w), d.push(l));
        }
        return Ff(t, d), s;
      }
      function pu(t) {
        return t == null ? t : i0.call(t);
      }
      function hV(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && Qe(t, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : j(n), s = s === r ? l : j(s)), Tt(t, n, s)) : [];
      }
      function pV(t, n) {
        return Ti(t, n);
      }
      function wV(t, n, s) {
        return Ql(t, n, X(s, 2));
      }
      function vV(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Ti(t, n);
          if (l < s && Zt(t[l], n))
            return l;
        }
        return -1;
      }
      function mV(t, n) {
        return Ti(t, n, !0);
      }
      function gV(t, n, s) {
        return Ql(t, n, X(s, 2), !0);
      }
      function _V(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Ti(t, n, !0) - 1;
          if (Zt(t[l], n))
            return l;
        }
        return -1;
      }
      function VV(t) {
        return t && t.length ? Zf(t) : [];
      }
      function yV(t, n) {
        return t && t.length ? Zf(t, X(n, 2)) : [];
      }
      function bV(t) {
        var n = t == null ? 0 : t.length;
        return n ? Tt(t, 1, n) : [];
      }
      function CV(t, n, s) {
        return t && t.length ? (n = s || n === r ? 1 : j(n), Tt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function EV(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), n = l - n, Tt(t, n < 0 ? 0 : n, l)) : [];
      }
      function MV(t, n) {
        return t && t.length ? Pi(t, X(n, 3), !1, !0) : [];
      }
      function BV(t, n) {
        return t && t.length ? Pi(t, X(n, 3)) : [];
      }
      var $V = J(function(t) {
        return Wn(We(t, 1, Ee, !0));
      }), xV = J(function(t) {
        var n = Pt(t);
        return Ee(n) && (n = r), Wn(We(t, 1, Ee, !0), X(n, 2));
      }), IV = J(function(t) {
        var n = Pt(t);
        return n = typeof n == "function" ? n : r, Wn(We(t, 1, Ee, !0), r, n);
      });
      function SV(t) {
        return t && t.length ? Wn(t) : [];
      }
      function TV(t, n) {
        return t && t.length ? Wn(t, X(n, 2)) : [];
      }
      function PV(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Wn(t, r, n) : [];
      }
      function wu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = On(t, function(s) {
          if (Ee(s))
            return n = Pe(s.length, n), !0;
        }), Pl(n, function(s) {
          return _e(t, Il(s));
        });
      }
      function SA(t, n) {
        if (!(t && t.length))
          return [];
        var s = wu(t);
        return n == null ? s : _e(s, function(l) {
          return ht(n, r, l);
        });
      }
      var kV = J(function(t, n) {
        return Ee(t) ? ts(t, n) : [];
      }), NV = J(function(t) {
        return eu(On(t, Ee));
      }), DV = J(function(t) {
        var n = Pt(t);
        return Ee(n) && (n = r), eu(On(t, Ee), X(n, 2));
      }), OV = J(function(t) {
        var n = Pt(t);
        return n = typeof n == "function" ? n : r, eu(On(t, Ee), r, n);
      }), LV = J(wu);
      function zV(t, n) {
        return Gf(t || [], n || [], es);
      }
      function qV(t, n) {
        return Gf(t || [], n || [], os);
      }
      var RV = J(function(t) {
        var n = t.length, s = n > 1 ? t[n - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, SA(t, s);
      });
      function TA(t) {
        var n = A(t);
        return n.__chain__ = !0, n;
      }
      function WV(t, n) {
        return n(t), t;
      }
      function Wi(t, n) {
        return n(t);
      }
      var FV = bn(function(t) {
        var n = t.length, s = n ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Rl(h, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof te) || !Cn(s) ? this.thru(d) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Wi,
          args: [d],
          thisArg: r
        }), new It(l, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function XV() {
        return TA(this);
      }
      function ZV() {
        return new It(this.value(), this.__chain__);
      }
      function UV() {
        this.__values__ === r && (this.__values__ = UA(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function YV() {
        return this;
      }
      function HV(t) {
        for (var n, s = this; s instanceof Bi; ) {
          var l = EA(s);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          s = s.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function GV() {
        var t = this.__wrapped__;
        if (t instanceof te) {
          var n = t;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: Wi,
            args: [pu],
            thisArg: r
          }), new It(n, this.__chain__);
        }
        return this.thru(pu);
      }
      function jV() {
        return Hf(this.__wrapped__, this.__actions__);
      }
      var KV = ki(function(t, n, s) {
        ue.call(t, s) ? ++t[s] : Vn(t, s, 1);
      });
      function QV(t, n, s) {
        var l = G(t) ? af : W0;
        return s && Qe(t, n, s) && (n = r), l(t, X(n, 3));
      }
      function JV(t, n) {
        var s = G(t) ? On : Sf;
        return s(t, X(n, 3));
      }
      var ey = sA(MA), ty = sA(BA);
      function ny(t, n) {
        return We(Fi(t, n), 1);
      }
      function ry(t, n) {
        return We(Fi(t, n), qe);
      }
      function oy(t, n, s) {
        return s = s === r ? 1 : j(s), We(Fi(t, n), s);
      }
      function PA(t, n) {
        var s = G(t) ? $t : Rn;
        return s(t, X(n, 3));
      }
      function kA(t, n) {
        var s = G(t) ? bg : If;
        return s(t, X(n, 3));
      }
      var sy = ki(function(t, n, s) {
        ue.call(t, s) ? t[s].push(n) : Vn(t, s, [n]);
      });
      function iy(t, n, s, l) {
        t = it(t) ? t : to(t), s = s && !l ? j(s) : 0;
        var d = t.length;
        return s < 0 && (s = Pe(d + s, 0)), Hi(t) ? s <= d && t.indexOf(n, s) > -1 : !!d && Fr(t, n, s) > -1;
      }
      var ay = J(function(t, n, s) {
        var l = -1, d = typeof n == "function", h = it(t) ? C(t.length) : [];
        return Rn(t, function(w) {
          h[++l] = d ? ht(n, w, s) : ns(w, n, s);
        }), h;
      }), ly = ki(function(t, n, s) {
        Vn(t, s, n);
      });
      function Fi(t, n) {
        var s = G(t) ? _e : Of;
        return s(t, X(n, 3));
      }
      function uy(t, n, s, l) {
        return t == null ? [] : (G(n) || (n = n == null ? [] : [n]), s = l ? r : s, G(s) || (s = s == null ? [] : [s]), Rf(t, n, s));
      }
      var cy = ki(function(t, n, s) {
        t[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function dy(t, n, s) {
        var l = G(t) ? $l : df, d = arguments.length < 3;
        return l(t, X(n, 4), s, d, Rn);
      }
      function fy(t, n, s) {
        var l = G(t) ? Cg : df, d = arguments.length < 3;
        return l(t, X(n, 4), s, d, If);
      }
      function Ay(t, n) {
        var s = G(t) ? On : Sf;
        return s(t, Ui(X(n, 3)));
      }
      function hy(t) {
        var n = G(t) ? Mf : i_;
        return n(t);
      }
      function py(t, n, s) {
        (s ? Qe(t, n, s) : n === r) ? n = 1 : n = j(n);
        var l = G(t) ? O0 : a_;
        return l(t, n);
      }
      function wy(t) {
        var n = G(t) ? L0 : u_;
        return n(t);
      }
      function vy(t) {
        if (t == null)
          return 0;
        if (it(t))
          return Hi(t) ? Zr(t) : t.length;
        var n = Ye(t);
        return n == Rt || n == Wt ? t.size : Yl(t).length;
      }
      function my(t, n, s) {
        var l = G(t) ? xl : c_;
        return s && Qe(t, n, s) && (n = r), l(t, X(n, 3));
      }
      var gy = J(function(t, n) {
        if (t == null)
          return [];
        var s = n.length;
        return s > 1 && Qe(t, n[0], n[1]) ? n = [] : s > 2 && Qe(n[0], n[1], n[2]) && (n = [n[0]]), Rf(t, We(n, 1), []);
      }), Xi = Jg || function() {
        return Re.Date.now();
      };
      function _y(t, n) {
        if (typeof n != "function")
          throw new xt(c);
        return t = j(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function NA(t, n, s) {
        return n = s ? r : n, n = t && n == null ? t.length : n, yn(t, L, r, r, r, r, n);
      }
      function DA(t, n) {
        var s;
        if (typeof n != "function")
          throw new xt(c);
        return t = j(t), function() {
          return --t > 0 && (s = n.apply(this, arguments)), t <= 1 && (n = r), s;
        };
      }
      var vu = J(function(t, n, s) {
        var l = D;
        if (s.length) {
          var d = zn(s, Jr(vu));
          l |= x;
        }
        return yn(t, l, n, s, d);
      }), OA = J(function(t, n, s) {
        var l = D | N;
        if (s.length) {
          var d = zn(s, Jr(OA));
          l |= x;
        }
        return yn(n, l, t, s, d);
      });
      function LA(t, n, s) {
        n = s ? r : n;
        var l = yn(t, S, r, r, r, r, r, n);
        return l.placeholder = LA.placeholder, l;
      }
      function zA(t, n, s) {
        n = s ? r : n;
        var l = yn(t, O, r, r, r, r, r, n);
        return l.placeholder = zA.placeholder, l;
      }
      function qA(t, n, s) {
        var l, d, h, w, g, b, B = 0, I = !1, P = !1, z = !0;
        if (typeof t != "function")
          throw new xt(c);
        n = kt(n) || 0, Ve(s) && (I = !!s.leading, P = "maxWait" in s, h = P ? Pe(kt(s.maxWait) || 0, n) : h, z = "trailing" in s ? !!s.trailing : z);
        function W(Me) {
          var Ut = l, Bn = d;
          return l = d = r, B = Me, w = t.apply(Bn, Ut), w;
        }
        function U(Me) {
          return B = Me, g = as(ee, n), I ? W(Me) : w;
        }
        function K(Me) {
          var Ut = Me - b, Bn = Me - B, sh = n - Ut;
          return P ? Ue(sh, h - Bn) : sh;
        }
        function Y(Me) {
          var Ut = Me - b, Bn = Me - B;
          return b === r || Ut >= n || Ut < 0 || P && Bn >= h;
        }
        function ee() {
          var Me = Xi();
          if (Y(Me))
            return ne(Me);
          g = as(ee, K(Me));
        }
        function ne(Me) {
          return g = r, z && l ? W(Me) : (l = d = r, w);
        }
        function mt() {
          g !== r && jf(g), B = 0, l = b = d = g = r;
        }
        function Je() {
          return g === r ? w : ne(Xi());
        }
        function gt() {
          var Me = Xi(), Ut = Y(Me);
          if (l = arguments, d = this, b = Me, Ut) {
            if (g === r)
              return U(b);
            if (P)
              return jf(g), g = as(ee, n), W(b);
          }
          return g === r && (g = as(ee, n)), w;
        }
        return gt.cancel = mt, gt.flush = Je, gt;
      }
      var Vy = J(function(t, n) {
        return xf(t, 1, n);
      }), yy = J(function(t, n, s) {
        return xf(t, kt(n) || 0, s);
      });
      function by(t) {
        return yn(t, ge);
      }
      function Zi(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new xt(c);
        var s = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], h = s.cache;
          if (h.has(d))
            return h.get(d);
          var w = t.apply(this, l);
          return s.cache = h.set(d, w) || h, w;
        };
        return s.cache = new (Zi.Cache || _n)(), s;
      }
      Zi.Cache = _n;
      function Ui(t) {
        if (typeof t != "function")
          throw new xt(c);
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
      function Cy(t) {
        return DA(2, t);
      }
      var Ey = d_(function(t, n) {
        n = n.length == 1 && G(n[0]) ? _e(n[0], pt(X())) : _e(We(n, 1), pt(X()));
        var s = n.length;
        return J(function(l) {
          for (var d = -1, h = Ue(l.length, s); ++d < h; )
            l[d] = n[d].call(this, l[d]);
          return ht(t, this, l);
        });
      }), mu = J(function(t, n) {
        var s = zn(n, Jr(mu));
        return yn(t, x, r, n, s);
      }), RA = J(function(t, n) {
        var s = zn(n, Jr(RA));
        return yn(t, q, r, n, s);
      }), My = bn(function(t, n) {
        return yn(t, F, r, r, r, n);
      });
      function By(t, n) {
        if (typeof t != "function")
          throw new xt(c);
        return n = n === r ? n : j(n), J(t, n);
      }
      function $y(t, n) {
        if (typeof t != "function")
          throw new xt(c);
        return n = n == null ? 0 : Pe(j(n), 0), J(function(s) {
          var l = s[n], d = Xn(s, 0, n);
          return l && Ln(d, l), ht(t, this, d);
        });
      }
      function xy(t, n, s) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new xt(c);
        return Ve(s) && (l = "leading" in s ? !!s.leading : l, d = "trailing" in s ? !!s.trailing : d), qA(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function Iy(t) {
        return NA(t, 1);
      }
      function Sy(t, n) {
        return mu(nu(n), t);
      }
      function Ty() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return G(t) ? t : [t];
      }
      function Py(t) {
        return St(t, $);
      }
      function ky(t, n) {
        return n = typeof n == "function" ? n : r, St(t, $, n);
      }
      function Ny(t) {
        return St(t, _ | $);
      }
      function Dy(t, n) {
        return n = typeof n == "function" ? n : r, St(t, _ | $, n);
      }
      function Oy(t, n) {
        return n == null || $f(t, n, De(n));
      }
      function Zt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var Ly = Li(Xl), zy = Li(function(t, n) {
        return t >= n;
      }), pr = kf(function() {
        return arguments;
      }()) ? kf : function(t) {
        return be(t) && ue.call(t, "callee") && !_f.call(t, "callee");
      }, G = C.isArray, qy = ef ? pt(ef) : H0;
      function it(t) {
        return t != null && Yi(t.length) && !En(t);
      }
      function Ee(t) {
        return be(t) && it(t);
      }
      function Ry(t) {
        return t === !0 || t === !1 || be(t) && Ke(t) == Ro;
      }
      var Zn = t0 || xu, Wy = tf ? pt(tf) : G0;
      function Fy(t) {
        return be(t) && t.nodeType === 1 && !ls(t);
      }
      function Xy(t) {
        if (t == null)
          return !0;
        if (it(t) && (G(t) || typeof t == "string" || typeof t.splice == "function" || Zn(t) || eo(t) || pr(t)))
          return !t.length;
        var n = Ye(t);
        if (n == Rt || n == Wt)
          return !t.size;
        if (is(t))
          return !Yl(t).length;
        for (var s in t)
          if (ue.call(t, s))
            return !1;
        return !0;
      }
      function Zy(t, n) {
        return rs(t, n);
      }
      function Uy(t, n, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(t, n) : r;
        return l === r ? rs(t, n, r, s) : !!l;
      }
      function gu(t) {
        if (!be(t))
          return !1;
        var n = Ke(t);
        return n == si || n == p1 || typeof t.message == "string" && typeof t.name == "string" && !ls(t);
      }
      function Yy(t) {
        return typeof t == "number" && yf(t);
      }
      function En(t) {
        if (!Ve(t))
          return !1;
        var n = Ke(t);
        return n == ii || n == $d || n == h1 || n == v1;
      }
      function WA(t) {
        return typeof t == "number" && t == j(t);
      }
      function Yi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= je;
      }
      function Ve(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function be(t) {
        return t != null && typeof t == "object";
      }
      var FA = nf ? pt(nf) : K0;
      function Hy(t, n) {
        return t === n || Ul(t, n, uu(n));
      }
      function Gy(t, n, s) {
        return s = typeof s == "function" ? s : r, Ul(t, n, uu(n), s);
      }
      function jy(t) {
        return XA(t) && t != +t;
      }
      function Ky(t) {
        if (k_(t))
          throw new H(u);
        return Nf(t);
      }
      function Qy(t) {
        return t === null;
      }
      function Jy(t) {
        return t == null;
      }
      function XA(t) {
        return typeof t == "number" || be(t) && Ke(t) == Fo;
      }
      function ls(t) {
        if (!be(t) || Ke(t) != mn)
          return !1;
        var n = _i(t);
        if (n === null)
          return !0;
        var s = ue.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && wi.call(s) == Gg;
      }
      var _u = rf ? pt(rf) : Q0;
      function eb(t) {
        return WA(t) && t >= -je && t <= je;
      }
      var ZA = of ? pt(of) : J0;
      function Hi(t) {
        return typeof t == "string" || !G(t) && be(t) && Ke(t) == Zo;
      }
      function vt(t) {
        return typeof t == "symbol" || be(t) && Ke(t) == ai;
      }
      var eo = sf ? pt(sf) : e_;
      function tb(t) {
        return t === r;
      }
      function nb(t) {
        return be(t) && Ye(t) == Uo;
      }
      function rb(t) {
        return be(t) && Ke(t) == g1;
      }
      var ob = Li(Hl), sb = Li(function(t, n) {
        return t <= n;
      });
      function UA(t) {
        if (!t)
          return [];
        if (it(t))
          return Hi(t) ? Ft(t) : st(t);
        if (Go && t[Go])
          return Og(t[Go]());
        var n = Ye(t), s = n == Rt ? Nl : n == Wt ? Ai : to;
        return s(t);
      }
      function Mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = kt(t), t === qe || t === -qe) {
          var n = t < 0 ? -1 : 1;
          return n * qo;
        }
        return t === t ? t : 0;
      }
      function j(t) {
        var n = Mn(t), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function YA(t) {
        return t ? dr(j(t), 0, sn) : 0;
      }
      function kt(t) {
        if (typeof t == "number")
          return t;
        if (vt(t))
          return ri;
        if (Ve(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ve(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = ff(t);
        var s = q1.test(t);
        return s || W1.test(t) ? _g(t.slice(2), s ? 2 : 8) : z1.test(t) ? ri : +t;
      }
      function HA(t) {
        return ln(t, at(t));
      }
      function ib(t) {
        return t ? dr(j(t), -je, je) : t === 0 ? t : 0;
      }
      function ae(t) {
        return t == null ? "" : wt(t);
      }
      var ab = Kr(function(t, n) {
        if (is(n) || it(n)) {
          ln(n, De(n), t);
          return;
        }
        for (var s in n)
          ue.call(n, s) && es(t, s, n[s]);
      }), GA = Kr(function(t, n) {
        ln(n, at(n), t);
      }), Gi = Kr(function(t, n, s, l) {
        ln(n, at(n), t, l);
      }), lb = Kr(function(t, n, s, l) {
        ln(n, De(n), t, l);
      }), ub = bn(Rl);
      function cb(t, n) {
        var s = jr(t);
        return n == null ? s : Bf(s, n);
      }
      var db = J(function(t, n) {
        t = he(t);
        var s = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Qe(n[0], n[1], d) && (l = 1); ++s < l; )
          for (var h = n[s], w = at(h), g = -1, b = w.length; ++g < b; ) {
            var B = w[g], I = t[B];
            (I === r || Zt(I, Yr[B]) && !ue.call(t, B)) && (t[B] = h[B]);
          }
        return t;
      }), fb = J(function(t) {
        return t.push(r, fA), ht(jA, r, t);
      });
      function Ab(t, n) {
        return lf(t, X(n, 3), an);
      }
      function hb(t, n) {
        return lf(t, X(n, 3), Fl);
      }
      function pb(t, n) {
        return t == null ? t : Wl(t, X(n, 3), at);
      }
      function wb(t, n) {
        return t == null ? t : Tf(t, X(n, 3), at);
      }
      function vb(t, n) {
        return t && an(t, X(n, 3));
      }
      function mb(t, n) {
        return t && Fl(t, X(n, 3));
      }
      function gb(t) {
        return t == null ? [] : Ii(t, De(t));
      }
      function _b(t) {
        return t == null ? [] : Ii(t, at(t));
      }
      function Vu(t, n, s) {
        var l = t == null ? r : fr(t, n);
        return l === r ? s : l;
      }
      function Vb(t, n) {
        return t != null && pA(t, n, X0);
      }
      function yu(t, n) {
        return t != null && pA(t, n, Z0);
      }
      var yb = aA(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = vi.call(n)), t[n] = s;
      }, Cu(lt)), bb = aA(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = vi.call(n)), ue.call(t, n) ? t[n].push(s) : t[n] = [s];
      }, X), Cb = J(ns);
      function De(t) {
        return it(t) ? Ef(t) : Yl(t);
      }
      function at(t) {
        return it(t) ? Ef(t, !0) : t_(t);
      }
      function Eb(t, n) {
        var s = {};
        return n = X(n, 3), an(t, function(l, d, h) {
          Vn(s, n(l, d, h), l);
        }), s;
      }
      function Mb(t, n) {
        var s = {};
        return n = X(n, 3), an(t, function(l, d, h) {
          Vn(s, d, n(l, d, h));
        }), s;
      }
      var Bb = Kr(function(t, n, s) {
        Si(t, n, s);
      }), jA = Kr(function(t, n, s, l) {
        Si(t, n, s, l);
      }), $b = bn(function(t, n) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        n = _e(n, function(h) {
          return h = Fn(h, t), l || (l = h.length > 1), h;
        }), ln(t, au(t), s), l && (s = St(s, _ | V | $, y_));
        for (var d = n.length; d--; )
          Jl(s, n[d]);
        return s;
      });
      function xb(t, n) {
        return KA(t, Ui(X(n)));
      }
      var Ib = bn(function(t, n) {
        return t == null ? {} : r_(t, n);
      });
      function KA(t, n) {
        if (t == null)
          return {};
        var s = _e(au(t), function(l) {
          return [l];
        });
        return n = X(n), Wf(t, s, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Sb(t, n, s) {
        n = Fn(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[un(n[l])];
          h === r && (l = d, h = s), t = En(h) ? h.call(t) : h;
        }
        return t;
      }
      function Tb(t, n, s) {
        return t == null ? t : os(t, n, s);
      }
      function Pb(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : os(t, n, s, l);
      }
      var QA = cA(De), JA = cA(at);
      function kb(t, n, s) {
        var l = G(t), d = l || Zn(t) || eo(t);
        if (n = X(n, 4), s == null) {
          var h = t && t.constructor;
          d ? s = l ? new h() : [] : Ve(t) ? s = En(h) ? jr(_i(t)) : {} : s = {};
        }
        return (d ? $t : an)(t, function(w, g, b) {
          return n(s, w, g, b);
        }), s;
      }
      function Nb(t, n) {
        return t == null ? !0 : Jl(t, n);
      }
      function Db(t, n, s) {
        return t == null ? t : Yf(t, n, nu(s));
      }
      function Ob(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Yf(t, n, nu(s), l);
      }
      function to(t) {
        return t == null ? [] : kl(t, De(t));
      }
      function Lb(t) {
        return t == null ? [] : kl(t, at(t));
      }
      function zb(t, n, s) {
        return s === r && (s = n, n = r), s !== r && (s = kt(s), s = s === s ? s : 0), n !== r && (n = kt(n), n = n === n ? n : 0), dr(kt(t), n, s);
      }
      function qb(t, n, s) {
        return n = Mn(n), s === r ? (s = n, n = 0) : s = Mn(s), t = kt(t), U0(t, n, s);
      }
      function Rb(t, n, s) {
        if (s && typeof s != "boolean" && Qe(t, n, s) && (n = s = r), s === r && (typeof n == "boolean" ? (s = n, n = r) : typeof t == "boolean" && (s = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Mn(t), n === r ? (n = t, t = 0) : n = Mn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (s || t % 1 || n % 1) {
          var d = bf();
          return Ue(t + d * (n - t + gg("1e-" + ((d + "").length - 1))), n);
        }
        return jl(t, n);
      }
      var Wb = Qr(function(t, n, s) {
        return n = n.toLowerCase(), t + (s ? eh(n) : n);
      });
      function eh(t) {
        return bu(ae(t).toLowerCase());
      }
      function th(t) {
        return t = ae(t), t && t.replace(X1, Tg).replace(ug, "");
      }
      function Fb(t, n, s) {
        t = ae(t), n = wt(n);
        var l = t.length;
        s = s === r ? l : dr(j(s), 0, l);
        var d = s;
        return s -= n.length, s >= 0 && t.slice(s, d) == n;
      }
      function Xb(t) {
        return t = ae(t), t && C1.test(t) ? t.replace(Sd, Pg) : t;
      }
      function Zb(t) {
        return t = ae(t), t && I1.test(t) ? t.replace(ml, "\\$&") : t;
      }
      var Ub = Qr(function(t, n, s) {
        return t + (s ? "-" : "") + n.toLowerCase();
      }), Yb = Qr(function(t, n, s) {
        return t + (s ? " " : "") + n.toLowerCase();
      }), Hb = oA("toLowerCase");
      function Gb(t, n, s) {
        t = ae(t), n = j(n);
        var l = n ? Zr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Oi(Ci(d), s) + t + Oi(bi(d), s);
      }
      function jb(t, n, s) {
        t = ae(t), n = j(n);
        var l = n ? Zr(t) : 0;
        return n && l < n ? t + Oi(n - l, s) : t;
      }
      function Kb(t, n, s) {
        t = ae(t), n = j(n);
        var l = n ? Zr(t) : 0;
        return n && l < n ? Oi(n - l, s) + t : t;
      }
      function Qb(t, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), s0(ae(t).replace(gl, ""), n || 0);
      }
      function Jb(t, n, s) {
        return (s ? Qe(t, n, s) : n === r) ? n = 1 : n = j(n), Kl(ae(t), n);
      }
      function eC() {
        var t = arguments, n = ae(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var tC = Qr(function(t, n, s) {
        return t + (s ? "_" : "") + n.toLowerCase();
      });
      function nC(t, n, s) {
        return s && typeof s != "number" && Qe(t, n, s) && (n = s = r), s = s === r ? sn : s >>> 0, s ? (t = ae(t), t && (typeof n == "string" || n != null && !_u(n)) && (n = wt(n), !n && Xr(t)) ? Xn(Ft(t), 0, s) : t.split(n, s)) : [];
      }
      var rC = Qr(function(t, n, s) {
        return t + (s ? " " : "") + bu(n);
      });
      function oC(t, n, s) {
        return t = ae(t), s = s == null ? 0 : dr(j(s), 0, t.length), n = wt(n), t.slice(s, s + n.length) == n;
      }
      function sC(t, n, s) {
        var l = A.templateSettings;
        s && Qe(t, n, s) && (n = r), t = ae(t), n = Gi({}, n, l, dA);
        var d = Gi({}, n.imports, l.imports, dA), h = De(d), w = kl(d, h), g, b, B = 0, I = n.interpolate || li, P = "__p += '", z = Dl(
          (n.escape || li).source + "|" + I.source + "|" + (I === Td ? L1 : li).source + "|" + (n.evaluate || li).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (ue.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++hg + "]") + `
`;
        t.replace(z, function(Y, ee, ne, mt, Je, gt) {
          return ne || (ne = mt), P += t.slice(B, gt).replace(Z1, kg), ee && (g = !0, P += `' +
__e(` + ee + `) +
'`), Je && (b = !0, P += `';
` + Je + `;
__p += '`), ne && (P += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), B = gt + Y.length, Y;
        }), P += `';
`;
        var U = ue.call(n, "variable") && n.variable;
        if (!U)
          P = `with (obj) {
` + P + `
}
`;
        else if (D1.test(U))
          throw new H(f);
        P = (b ? P.replace(_1, "") : P).replace(V1, "$1").replace(y1, "$1;"), P = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var K = rh(function() {
          return oe(h, W + "return " + P).apply(r, w);
        });
        if (K.source = P, gu(K))
          throw K;
        return K;
      }
      function iC(t) {
        return ae(t).toLowerCase();
      }
      function aC(t) {
        return ae(t).toUpperCase();
      }
      function lC(t, n, s) {
        if (t = ae(t), t && (s || n === r))
          return ff(t);
        if (!t || !(n = wt(n)))
          return t;
        var l = Ft(t), d = Ft(n), h = Af(l, d), w = hf(l, d) + 1;
        return Xn(l, h, w).join("");
      }
      function uC(t, n, s) {
        if (t = ae(t), t && (s || n === r))
          return t.slice(0, wf(t) + 1);
        if (!t || !(n = wt(n)))
          return t;
        var l = Ft(t), d = hf(l, Ft(n)) + 1;
        return Xn(l, 0, d).join("");
      }
      function cC(t, n, s) {
        if (t = ae(t), t && (s || n === r))
          return t.replace(gl, "");
        if (!t || !(n = wt(n)))
          return t;
        var l = Ft(t), d = Af(l, Ft(n));
        return Xn(l, d).join("");
      }
      function dC(t, n) {
        var s = fe, l = ve;
        if (Ve(n)) {
          var d = "separator" in n ? n.separator : d;
          s = "length" in n ? j(n.length) : s, l = "omission" in n ? wt(n.omission) : l;
        }
        t = ae(t);
        var h = t.length;
        if (Xr(t)) {
          var w = Ft(t);
          h = w.length;
        }
        if (s >= h)
          return t;
        var g = s - Zr(l);
        if (g < 1)
          return l;
        var b = w ? Xn(w, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (w && (g += b.length - g), _u(d)) {
          if (t.slice(g).search(d)) {
            var B, I = b;
            for (d.global || (d = Dl(d.source, ae(Pd.exec(d)) + "g")), d.lastIndex = 0; B = d.exec(I); )
              var P = B.index;
            b = b.slice(0, P === r ? g : P);
          }
        } else if (t.indexOf(wt(d), g) != g) {
          var z = b.lastIndexOf(d);
          z > -1 && (b = b.slice(0, z));
        }
        return b + l;
      }
      function fC(t) {
        return t = ae(t), t && b1.test(t) ? t.replace(Id, Rg) : t;
      }
      var AC = Qr(function(t, n, s) {
        return t + (s ? " " : "") + n.toUpperCase();
      }), bu = oA("toUpperCase");
      function nh(t, n, s) {
        return t = ae(t), n = s ? r : n, n === r ? Dg(t) ? Xg(t) : Bg(t) : t.match(n) || [];
      }
      var rh = J(function(t, n) {
        try {
          return ht(t, r, n);
        } catch (s) {
          return gu(s) ? s : new H(s);
        }
      }), hC = bn(function(t, n) {
        return $t(n, function(s) {
          s = un(s), Vn(t, s, vu(t[s], t));
        }), t;
      });
      function pC(t) {
        var n = t == null ? 0 : t.length, s = X();
        return t = n ? _e(t, function(l) {
          if (typeof l[1] != "function")
            throw new xt(c);
          return [s(l[0]), l[1]];
        }) : [], J(function(l) {
          for (var d = -1; ++d < n; ) {
            var h = t[d];
            if (ht(h[0], this, l))
              return ht(h[1], this, l);
          }
        });
      }
      function wC(t) {
        return R0(St(t, _));
      }
      function Cu(t) {
        return function() {
          return t;
        };
      }
      function vC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var mC = iA(), gC = iA(!0);
      function lt(t) {
        return t;
      }
      function Eu(t) {
        return Df(typeof t == "function" ? t : St(t, _));
      }
      function _C(t) {
        return Lf(St(t, _));
      }
      function VC(t, n) {
        return zf(t, St(n, _));
      }
      var yC = J(function(t, n) {
        return function(s) {
          return ns(s, t, n);
        };
      }), bC = J(function(t, n) {
        return function(s) {
          return ns(t, s, n);
        };
      });
      function Mu(t, n, s) {
        var l = De(n), d = Ii(n, l);
        s == null && !(Ve(n) && (d.length || !l.length)) && (s = n, n = t, t = this, d = Ii(n, De(n)));
        var h = !(Ve(s) && "chain" in s) || !!s.chain, w = En(t);
        return $t(d, function(g) {
          var b = n[g];
          t[g] = b, w && (t.prototype[g] = function() {
            var B = this.__chain__;
            if (h || B) {
              var I = t(this.__wrapped__), P = I.__actions__ = st(this.__actions__);
              return P.push({ func: b, args: arguments, thisArg: t }), I.__chain__ = B, I;
            }
            return b.apply(t, Ln([this.value()], arguments));
          });
        }), t;
      }
      function CC() {
        return Re._ === this && (Re._ = jg), this;
      }
      function Bu() {
      }
      function EC(t) {
        return t = j(t), J(function(n) {
          return qf(n, t);
        });
      }
      var MC = ou(_e), BC = ou(af), $C = ou(xl);
      function oh(t) {
        return du(t) ? Il(un(t)) : o_(t);
      }
      function xC(t) {
        return function(n) {
          return t == null ? r : fr(t, n);
        };
      }
      var IC = lA(), SC = lA(!0);
      function $u() {
        return [];
      }
      function xu() {
        return !1;
      }
      function TC() {
        return {};
      }
      function PC() {
        return "";
      }
      function kC() {
        return !0;
      }
      function NC(t, n) {
        if (t = j(t), t < 1 || t > je)
          return [];
        var s = sn, l = Ue(t, sn);
        n = X(n), t -= sn;
        for (var d = Pl(l, n); ++s < t; )
          n(s);
        return d;
      }
      function DC(t) {
        return G(t) ? _e(t, un) : vt(t) ? [t] : st(CA(ae(t)));
      }
      function OC(t) {
        var n = ++Hg;
        return ae(t) + n;
      }
      var LC = Di(function(t, n) {
        return t + n;
      }, 0), zC = su("ceil"), qC = Di(function(t, n) {
        return t / n;
      }, 1), RC = su("floor");
      function WC(t) {
        return t && t.length ? xi(t, lt, Xl) : r;
      }
      function FC(t, n) {
        return t && t.length ? xi(t, X(n, 2), Xl) : r;
      }
      function XC(t) {
        return cf(t, lt);
      }
      function ZC(t, n) {
        return cf(t, X(n, 2));
      }
      function UC(t) {
        return t && t.length ? xi(t, lt, Hl) : r;
      }
      function YC(t, n) {
        return t && t.length ? xi(t, X(n, 2), Hl) : r;
      }
      var HC = Di(function(t, n) {
        return t * n;
      }, 1), GC = su("round"), jC = Di(function(t, n) {
        return t - n;
      }, 0);
      function KC(t) {
        return t && t.length ? Tl(t, lt) : 0;
      }
      function QC(t, n) {
        return t && t.length ? Tl(t, X(n, 2)) : 0;
      }
      return A.after = _y, A.ary = NA, A.assign = ab, A.assignIn = GA, A.assignInWith = Gi, A.assignWith = lb, A.at = ub, A.before = DA, A.bind = vu, A.bindAll = hC, A.bindKey = OA, A.castArray = Ty, A.chain = TA, A.chunk = R_, A.compact = W_, A.concat = F_, A.cond = pC, A.conforms = wC, A.constant = Cu, A.countBy = KV, A.create = cb, A.curry = LA, A.curryRight = zA, A.debounce = qA, A.defaults = db, A.defaultsDeep = fb, A.defer = Vy, A.delay = yy, A.difference = X_, A.differenceBy = Z_, A.differenceWith = U_, A.drop = Y_, A.dropRight = H_, A.dropRightWhile = G_, A.dropWhile = j_, A.fill = K_, A.filter = JV, A.flatMap = ny, A.flatMapDeep = ry, A.flatMapDepth = oy, A.flatten = $A, A.flattenDeep = Q_, A.flattenDepth = J_, A.flip = by, A.flow = mC, A.flowRight = gC, A.fromPairs = eV, A.functions = gb, A.functionsIn = _b, A.groupBy = sy, A.initial = nV, A.intersection = rV, A.intersectionBy = oV, A.intersectionWith = sV, A.invert = yb, A.invertBy = bb, A.invokeMap = ay, A.iteratee = Eu, A.keyBy = ly, A.keys = De, A.keysIn = at, A.map = Fi, A.mapKeys = Eb, A.mapValues = Mb, A.matches = _C, A.matchesProperty = VC, A.memoize = Zi, A.merge = Bb, A.mergeWith = jA, A.method = yC, A.methodOf = bC, A.mixin = Mu, A.negate = Ui, A.nthArg = EC, A.omit = $b, A.omitBy = xb, A.once = Cy, A.orderBy = uy, A.over = MC, A.overArgs = Ey, A.overEvery = BC, A.overSome = $C, A.partial = mu, A.partialRight = RA, A.partition = cy, A.pick = Ib, A.pickBy = KA, A.property = oh, A.propertyOf = xC, A.pull = uV, A.pullAll = IA, A.pullAllBy = cV, A.pullAllWith = dV, A.pullAt = fV, A.range = IC, A.rangeRight = SC, A.rearg = My, A.reject = Ay, A.remove = AV, A.rest = By, A.reverse = pu, A.sampleSize = py, A.set = Tb, A.setWith = Pb, A.shuffle = wy, A.slice = hV, A.sortBy = gy, A.sortedUniq = VV, A.sortedUniqBy = yV, A.split = nC, A.spread = $y, A.tail = bV, A.take = CV, A.takeRight = EV, A.takeRightWhile = MV, A.takeWhile = BV, A.tap = WV, A.throttle = xy, A.thru = Wi, A.toArray = UA, A.toPairs = QA, A.toPairsIn = JA, A.toPath = DC, A.toPlainObject = HA, A.transform = kb, A.unary = Iy, A.union = $V, A.unionBy = xV, A.unionWith = IV, A.uniq = SV, A.uniqBy = TV, A.uniqWith = PV, A.unset = Nb, A.unzip = wu, A.unzipWith = SA, A.update = Db, A.updateWith = Ob, A.values = to, A.valuesIn = Lb, A.without = kV, A.words = nh, A.wrap = Sy, A.xor = NV, A.xorBy = DV, A.xorWith = OV, A.zip = LV, A.zipObject = zV, A.zipObjectDeep = qV, A.zipWith = RV, A.entries = QA, A.entriesIn = JA, A.extend = GA, A.extendWith = Gi, Mu(A, A), A.add = LC, A.attempt = rh, A.camelCase = Wb, A.capitalize = eh, A.ceil = zC, A.clamp = zb, A.clone = Py, A.cloneDeep = Ny, A.cloneDeepWith = Dy, A.cloneWith = ky, A.conformsTo = Oy, A.deburr = th, A.defaultTo = vC, A.divide = qC, A.endsWith = Fb, A.eq = Zt, A.escape = Xb, A.escapeRegExp = Zb, A.every = QV, A.find = ey, A.findIndex = MA, A.findKey = Ab, A.findLast = ty, A.findLastIndex = BA, A.findLastKey = hb, A.floor = RC, A.forEach = PA, A.forEachRight = kA, A.forIn = pb, A.forInRight = wb, A.forOwn = vb, A.forOwnRight = mb, A.get = Vu, A.gt = Ly, A.gte = zy, A.has = Vb, A.hasIn = yu, A.head = xA, A.identity = lt, A.includes = iy, A.indexOf = tV, A.inRange = qb, A.invoke = Cb, A.isArguments = pr, A.isArray = G, A.isArrayBuffer = qy, A.isArrayLike = it, A.isArrayLikeObject = Ee, A.isBoolean = Ry, A.isBuffer = Zn, A.isDate = Wy, A.isElement = Fy, A.isEmpty = Xy, A.isEqual = Zy, A.isEqualWith = Uy, A.isError = gu, A.isFinite = Yy, A.isFunction = En, A.isInteger = WA, A.isLength = Yi, A.isMap = FA, A.isMatch = Hy, A.isMatchWith = Gy, A.isNaN = jy, A.isNative = Ky, A.isNil = Jy, A.isNull = Qy, A.isNumber = XA, A.isObject = Ve, A.isObjectLike = be, A.isPlainObject = ls, A.isRegExp = _u, A.isSafeInteger = eb, A.isSet = ZA, A.isString = Hi, A.isSymbol = vt, A.isTypedArray = eo, A.isUndefined = tb, A.isWeakMap = nb, A.isWeakSet = rb, A.join = iV, A.kebabCase = Ub, A.last = Pt, A.lastIndexOf = aV, A.lowerCase = Yb, A.lowerFirst = Hb, A.lt = ob, A.lte = sb, A.max = WC, A.maxBy = FC, A.mean = XC, A.meanBy = ZC, A.min = UC, A.minBy = YC, A.stubArray = $u, A.stubFalse = xu, A.stubObject = TC, A.stubString = PC, A.stubTrue = kC, A.multiply = HC, A.nth = lV, A.noConflict = CC, A.noop = Bu, A.now = Xi, A.pad = Gb, A.padEnd = jb, A.padStart = Kb, A.parseInt = Qb, A.random = Rb, A.reduce = dy, A.reduceRight = fy, A.repeat = Jb, A.replace = eC, A.result = Sb, A.round = GC, A.runInContext = y, A.sample = hy, A.size = vy, A.snakeCase = tC, A.some = my, A.sortedIndex = pV, A.sortedIndexBy = wV, A.sortedIndexOf = vV, A.sortedLastIndex = mV, A.sortedLastIndexBy = gV, A.sortedLastIndexOf = _V, A.startCase = rC, A.startsWith = oC, A.subtract = jC, A.sum = KC, A.sumBy = QC, A.template = sC, A.times = NC, A.toFinite = Mn, A.toInteger = j, A.toLength = YA, A.toLower = iC, A.toNumber = kt, A.toSafeInteger = ib, A.toString = ae, A.toUpper = aC, A.trim = lC, A.trimEnd = uC, A.trimStart = cC, A.truncate = dC, A.unescape = fC, A.uniqueId = OC, A.upperCase = AC, A.upperFirst = bu, A.each = PA, A.eachRight = kA, A.first = xA, Mu(A, function() {
        var t = {};
        return an(A, function(n, s) {
          ue.call(A.prototype, s) || (t[s] = n);
        }), t;
      }(), { chain: !1 }), A.VERSION = i, $t(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        A[t].placeholder = A;
      }), $t(["drop", "take"], function(t, n) {
        te.prototype[t] = function(s) {
          s = s === r ? 1 : Pe(j(s), 0);
          var l = this.__filtered__ && !n ? new te(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ue(s, l.__takeCount__) : l.__views__.push({
            size: Ue(s, sn),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, te.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), $t(["filter", "map", "takeWhile"], function(t, n) {
        var s = n + 1, l = s == xe || s == ze;
        te.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: X(d, 3),
            type: s
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), $t(["head", "last"], function(t, n) {
        var s = "take" + (n ? "Right" : "");
        te.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), $t(["initial", "tail"], function(t, n) {
        var s = "drop" + (n ? "" : "Right");
        te.prototype[t] = function() {
          return this.__filtered__ ? new te(this) : this[s](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(lt);
      }, te.prototype.find = function(t) {
        return this.filter(t).head();
      }, te.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, te.prototype.invokeMap = J(function(t, n) {
        return typeof t == "function" ? new te(this) : this.map(function(s) {
          return ns(s, t, n);
        });
      }), te.prototype.reject = function(t) {
        return this.filter(Ui(X(t)));
      }, te.prototype.slice = function(t, n) {
        t = j(t);
        var s = this;
        return s.__filtered__ && (t > 0 || n < 0) ? new te(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), n !== r && (n = j(n), s = n < 0 ? s.dropRight(-n) : s.take(n - t)), s);
      }, te.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, te.prototype.toArray = function() {
        return this.take(sn);
      }, an(te.prototype, function(t, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = A[l ? "take" + (n == "last" ? "Right" : "") : n], h = l || /^find/.test(n);
        !d || (A.prototype[n] = function() {
          var w = this.__wrapped__, g = l ? [1] : arguments, b = w instanceof te, B = g[0], I = b || G(w), P = function(ee) {
            var ne = d.apply(A, Ln([ee], g));
            return l && z ? ne[0] : ne;
          };
          I && s && typeof B == "function" && B.length != 1 && (b = I = !1);
          var z = this.__chain__, W = !!this.__actions__.length, U = h && !z, K = b && !W;
          if (!h && I) {
            w = K ? w : new te(this);
            var Y = t.apply(w, g);
            return Y.__actions__.push({ func: Wi, args: [P], thisArg: r }), new It(Y, z);
          }
          return U && K ? t.apply(this, g) : (Y = this.thru(P), U ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), $t(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = hi[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        A.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var h = this.value();
            return n.apply(G(h) ? h : [], d);
          }
          return this[s](function(w) {
            return n.apply(G(w) ? w : [], d);
          });
        };
      }), an(te.prototype, function(t, n) {
        var s = A[n];
        if (s) {
          var l = s.name + "";
          ue.call(Gr, l) || (Gr[l] = []), Gr[l].push({ name: n, func: s });
        }
      }), Gr[Ni(r, N).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = f0, te.prototype.reverse = A0, te.prototype.value = h0, A.prototype.at = FV, A.prototype.chain = XV, A.prototype.commit = ZV, A.prototype.next = UV, A.prototype.plant = HV, A.prototype.reverse = GV, A.prototype.toJSON = A.prototype.valueOf = A.prototype.value = jV, A.prototype.first = A.prototype.head, Go && (A.prototype[Go] = YV), A;
    }, Ur = Zg();
    ar ? ((ar.exports = Ur)._ = Ur, El._ = Ur) : Re._ = Ur;
  }).call(us);
})(de, de.exports);
const m3 = "/alarms?_s=", Ya = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, g3 = async (e, o) => {
  try {
    return (await nn.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ya
    )).status === 204;
  } catch {
    return !1;
  }
}, _3 = async (e, o) => {
  try {
    return (await nn.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ya
    )).status === 204;
  } catch {
    return !1;
  }
}, V3 = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Dn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ya
    )).status == 204;
  } catch {
    return !1;
  }
}, y3 = async () => {
  try {
    const e = `${m3}isSituation==true&limit=0`, o = await Dn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, b3 = async (e) => {
  try {
    const o = e.join(",id=="), r = await Dn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Ev = async (e) => {
  try {
    const o = await Dn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, C3 = async (e) => {
  try {
    const o = await Dn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, E3 = async () => {
  try {
    const e = await Dn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => de.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, M3 = async (e, o, r) => {
  try {
    return (await Dn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ya
    )).status == 204;
  } catch {
    return !1;
  }
}, B3 = async (e, o) => {
  try {
    return (await Dn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, $3 = async () => {
  try {
    const e = await Dn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, x3 = window.Pinia.defineStore, rn = x3("situationsStore", {
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
      const e = await E3();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await y3();
      if (e) {
        const o = e.alarm.map((a) => {
          var u;
          return a.status = (u = a.parameters.filter(
            (c) => c.name == "situationStatus"
          )[0]) == null ? void 0 : u.value, a;
        });
        this.filteredSituations = o.map((a) => a.id);
        const r = de.exports.groupBy(o, "status"), i = [
          ...r.CREATED || [],
          ...r.ACCEPTED || [],
          ...r.REJECTED || []
        ];
        this.situations = i;
      }
    },
    async getSituation(e) {
      var o, r;
      if (e) {
        const i = await Ev(e);
        if (i) {
          const a = (o = i.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await b3(a);
          i.status = (r = i.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, i.alarms = de.exports.sortBy(c, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (i) => {
          const a = await C3(i);
          a && (r[i] = de.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await $3();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), I3 = window.Vue.openBlock, S3 = window.Vue.createElementBlock, T3 = window.Vue.createElementVNode;
var P3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const k3 = {}, N3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D3 = /* @__PURE__ */ T3("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), O3 = [
  D3
];
function L3(e, o) {
  return I3(), S3("svg", N3, O3);
}
var xo = /* @__PURE__ */ P3(k3, [["render", L3]]);
var z3 = Object.defineProperty, xh = Object.getOwnPropertySymbols, q3 = Object.prototype.hasOwnProperty, R3 = Object.prototype.propertyIsEnumerable, Ih = (e, o, r) => o in e ? z3(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Sh = (e, o) => {
  for (var r in o || (o = {}))
    q3.call(o, r) && Ih(e, r, o[r]);
  if (xh)
    for (var r of xh(o))
      R3.call(o, r) && Ih(e, r, o[r]);
  return e;
};
const W3 = window.Vue.defineComponent, F3 = window.Vue.toRaw, Zu = window.Vue.h;
var X3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Z3 = {
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
}, U3 = W3({
  props: Z3,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let i = F3(this.icon);
    return this.$slots.default ? Zu("span", { class: "feather-icon-container" }, [
      Zu(this.$slots.default()[0], Sh({
        class: o
      }, r))
    ]) : Zu(i, Sh({
      class: o
    }, r));
  }
});
var Z = /* @__PURE__ */ X3(U3, [["__scopeId", "data-v-52cbf270"]]);
const Y3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock, G3 = window.Vue.createElementVNode;
var j3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const K3 = {}, Q3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, J3 = /* @__PURE__ */ G3("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), eE = [
  J3
];
function tE(e, o) {
  return Y3(), H3("svg", Q3, eE);
}
var Mv = /* @__PURE__ */ j3(K3, [["render", tE]]);
const Se = {
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
function hn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function we(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Ne(e) {
  we(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function nE(e, o) {
  we(2, arguments);
  var r = Ne(e), i = hn(o);
  return isNaN(i) ? new Date(NaN) : (i && r.setDate(r.getDate() + i), r);
}
function rE(e, o) {
  we(2, arguments);
  var r = Ne(e).getTime(), i = hn(o);
  return new Date(r + i);
}
var oE = {};
function To() {
  return oE;
}
function Th(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = To(), _ = hn((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(_ >= 0 && _ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var V = Ne(e), $ = V.getDay(), M = ($ < _ ? 7 : 0) + $ - _;
  return V.setDate(V.getDate() - M), V.setHours(0, 0, 0, 0), V;
}
function Pc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Ph(e) {
  we(1, arguments);
  var o = Ne(e);
  return o.setHours(0, 0, 0, 0), o;
}
function sE(e, o) {
  we(2, arguments);
  var r = Ne(e), i = Ne(o), a = r.getTime() - i.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Bv(e, o) {
  we(2, arguments);
  var r = Ph(e), i = Ph(o);
  return r.getTime() === i.getTime();
}
function iE(e) {
  return we(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function aE(e) {
  if (we(1, arguments), !iE(e) && typeof e != "number")
    return !1;
  var o = Ne(e);
  return !isNaN(Number(o));
}
function lE(e, o) {
  we(2, arguments);
  var r = hn(o);
  return rE(e, -r);
}
var uE = 864e5;
function cE(e) {
  we(1, arguments);
  var o = Ne(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var i = o.getTime(), a = r - i;
  return Math.floor(a / uE) + 1;
}
function Ta(e) {
  we(1, arguments);
  var o = 1, r = Ne(e), i = r.getUTCDay(), a = (i < o ? 7 : 0) + i - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function $v(e) {
  we(1, arguments);
  var o = Ne(e), r = o.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = Ta(i), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ta(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function dE(e) {
  we(1, arguments);
  var o = $v(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = Ta(r);
  return i;
}
var fE = 6048e5;
function AE(e) {
  we(1, arguments);
  var o = Ne(e), r = Ta(o).getTime() - dE(o).getTime();
  return Math.round(r / fE) + 1;
}
function Pa(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = To(), _ = hn((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(_ >= 0 && _ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var V = Ne(e), $ = V.getUTCDay(), M = ($ < _ ? 7 : 0) + $ - _;
  return V.setUTCDate(V.getUTCDate() - M), V.setUTCHours(0, 0, 0, 0), V;
}
function xv(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = Ne(e), _ = m.getUTCFullYear(), V = To(), $ = hn((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : V.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = V.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var M = new Date(0);
  M.setUTCFullYear(_ + 1, 0, $), M.setUTCHours(0, 0, 0, 0);
  var T = Pa(M, o), D = new Date(0);
  D.setUTCFullYear(_, 0, $), D.setUTCHours(0, 0, 0, 0);
  var N = Pa(D, o);
  return m.getTime() >= T.getTime() ? _ + 1 : m.getTime() >= N.getTime() ? _ : _ - 1;
}
function hE(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = To(), _ = hn((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : m.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), V = xv(e, o), $ = new Date(0);
  $.setUTCFullYear(V, 0, _), $.setUTCHours(0, 0, 0, 0);
  var M = Pa($, o);
  return M;
}
var pE = 6048e5;
function wE(e, o) {
  we(1, arguments);
  var r = Ne(e), i = Pa(r, o).getTime() - hE(r, o).getTime();
  return Math.round(i / pE) + 1;
}
function ce(e, o) {
  for (var r = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < o; )
    i = "0" + i;
  return r + i;
}
var vE = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), i = r > 0 ? r : 1 - r;
    return ce(o === "yy" ? i % 100 : i, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : ce(r + 1, 2);
  },
  d: function(e, o) {
    return ce(e.getUTCDate(), o.length);
  },
  a: function(e, o) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
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
  h: function(e, o) {
    return ce(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return ce(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return ce(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return ce(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, i = e.getUTCMilliseconds(), a = Math.floor(i * Math.pow(10, r - 3));
    return ce(a, o.length);
  }
};
const Un = vE;
var oo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, mE = {
  G: function(e, o, r) {
    var i = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(i, {
          width: "wide"
        });
    }
  },
  y: function(e, o, r) {
    if (o === "yo") {
      var i = e.getUTCFullYear(), a = i > 0 ? i : 1 - i;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return Un.y(e, o);
  },
  Y: function(e, o, r, i) {
    var a = xv(e, i), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return ce(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ce(u, o.length);
  },
  R: function(e, o) {
    var r = $v(e);
    return ce(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return ce(r, o.length);
  },
  Q: function(e, o, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(i);
      case "QQ":
        return ce(i, 2);
      case "Qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, o, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(i);
      case "qq":
        return ce(i, 2);
      case "qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, o, r) {
    var i = e.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return Un.M(e, o);
      case "Mo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, o, r) {
    var i = e.getUTCMonth();
    switch (o) {
      case "L":
        return String(i + 1);
      case "LL":
        return ce(i + 1, 2);
      case "Lo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, o, r, i) {
    var a = wE(e, i);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ce(a, o.length);
  },
  I: function(e, o, r) {
    var i = AE(e);
    return o === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : ce(i, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Un.d(e, o);
  },
  D: function(e, o, r) {
    var i = cE(e);
    return o === "Do" ? r.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : ce(i, o.length);
  },
  E: function(e, o, r) {
    var i = e.getUTCDay();
    switch (o) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, o, r, i) {
    var a = e.getUTCDay(), u = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(u);
      case "ee":
        return ce(u, 2);
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
  c: function(e, o, r, i) {
    var a = e.getUTCDay(), u = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(u);
      case "cc":
        return ce(u, o.length);
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
  i: function(e, o, r) {
    var i = e.getUTCDay(), a = i === 0 ? 7 : i;
    switch (o) {
      case "i":
        return String(a);
      case "ii":
        return ce(a, o.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, o, r) {
    var i = e.getUTCHours(), a = i / 12 >= 1 ? "pm" : "am";
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
  b: function(e, o, r) {
    var i = e.getUTCHours(), a;
    switch (i === 12 ? a = oo.noon : i === 0 ? a = oo.midnight : a = i / 12 >= 1 ? "pm" : "am", o) {
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
  B: function(e, o, r) {
    var i = e.getUTCHours(), a;
    switch (i >= 17 ? a = oo.evening : i >= 12 ? a = oo.afternoon : i >= 4 ? a = oo.morning : a = oo.night, o) {
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
  h: function(e, o, r) {
    if (o === "ho") {
      var i = e.getUTCHours() % 12;
      return i === 0 && (i = 12), r.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return Un.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Un.H(e, o);
  },
  K: function(e, o, r) {
    var i = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : ce(i, o.length);
  },
  k: function(e, o, r) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), o === "ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : ce(i, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Un.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Un.s(e, o);
  },
  S: function(e, o) {
    return Un.S(e, o);
  },
  X: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Nh(u);
      case "XXXX":
      case "XX":
        return Sr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Sr(u, ":");
    }
  },
  x: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Nh(u);
      case "xxxx":
      case "xx":
        return Sr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Sr(u, ":");
    }
  },
  O: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + kh(u, ":");
      case "OOOO":
      default:
        return "GMT" + Sr(u, ":");
    }
  },
  z: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + kh(u, ":");
      case "zzzz":
      default:
        return "GMT" + Sr(u, ":");
    }
  },
  t: function(e, o, r, i) {
    var a = i._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return ce(u, o.length);
  },
  T: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTime();
    return ce(u, o.length);
  }
};
function kh(e, o) {
  var r = e > 0 ? "-" : "+", i = Math.abs(e), a = Math.floor(i / 60), u = i % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + ce(u, 2);
}
function Nh(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ce(Math.abs(e) / 60, 2);
  }
  return Sr(e, o);
}
function Sr(e, o) {
  var r = o || "", i = e > 0 ? "-" : "+", a = Math.abs(e), u = ce(Math.floor(a / 60), 2), c = ce(a % 60, 2);
  return i + u + r + c;
}
const gE = mE;
var Dh = function(e, o) {
  switch (e) {
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
}, Iv = function(e, o) {
  switch (e) {
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
}, _E = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], i = r[1], a = r[2];
  if (!a)
    return Dh(e, o);
  var u;
  switch (i) {
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
  return u.replace("{{date}}", Dh(i, o)).replace("{{time}}", Iv(a, o));
}, VE = {
  p: Iv,
  P: _E
};
const yE = VE;
var bE = ["D", "DD"], CE = ["YY", "YYYY"];
function EE(e) {
  return bE.indexOf(e) !== -1;
}
function ME(e) {
  return CE.indexOf(e) !== -1;
}
function Oh(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var BE = {
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
}, $E = function(e, o, r) {
  var i, a = BE[e];
  return typeof a == "string" ? i = a : o === 1 ? i = a.one : i = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const xE = $E;
function Uu(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, i = e.formats[r] || e.formats[e.defaultWidth];
    return i;
  };
}
var IE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, SE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, TE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, PE = {
  date: Uu({
    formats: IE,
    defaultWidth: "full"
  }),
  time: Uu({
    formats: SE,
    defaultWidth: "full"
  }),
  dateTime: Uu({
    formats: TE,
    defaultWidth: "full"
  })
};
const kE = PE;
var NE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, DE = function(e, o, r, i) {
  return NE[e];
};
const OE = DE;
function cs(e) {
  return function(o, r) {
    var i = r != null && r.context ? String(r.context) : "standalone", a;
    if (i === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, p = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[p] || e.values[f];
    }
    var v = e.argumentCallback ? e.argumentCallback(o) : o;
    return a[v];
  };
}
var LE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, RE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, WE = {
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
}, FE = {
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
}, XE = function(e, o) {
  var r = Number(e), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, ZE = {
  ordinalNumber: XE,
  era: cs({
    values: LE,
    defaultWidth: "wide"
  }),
  quarter: cs({
    values: zE,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: cs({
    values: qE,
    defaultWidth: "wide"
  }),
  day: cs({
    values: RE,
    defaultWidth: "wide"
  }),
  dayPeriod: cs({
    values: WE,
    defaultWidth: "wide",
    formattingValues: FE,
    defaultFormattingWidth: "wide"
  })
};
const UE = ZE;
function ds(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.width, a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(f) ? HE(f, function(_) {
      return _.test(c);
    }) : YE(f, function(_) {
      return _.test(c);
    }), v;
    v = e.valueCallback ? e.valueCallback(p) : p, v = r.valueCallback ? r.valueCallback(v) : v;
    var m = o.slice(c.length);
    return {
      value: v,
      rest: m
    };
  };
}
function YE(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function HE(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function GE(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.match(e.matchPattern);
    if (!i)
      return null;
    var a = i[0], u = o.match(e.parsePattern);
    if (!u)
      return null;
    var c = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var f = o.slice(a.length);
    return {
      value: c,
      rest: f
    };
  };
}
var jE = /^(\d+)(th|st|nd|rd)?/i, KE = /\d+/i, QE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, JE = {
  any: [/^b/i, /^(a|c)/i]
}, eM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, tM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, nM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, rM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, oM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, sM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, iM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, aM = {
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
}, lM = {
  ordinalNumber: GE({
    matchPattern: jE,
    parsePattern: KE,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ds({
    matchPatterns: QE,
    defaultMatchWidth: "wide",
    parsePatterns: JE,
    defaultParseWidth: "any"
  }),
  quarter: ds({
    matchPatterns: eM,
    defaultMatchWidth: "wide",
    parsePatterns: tM,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ds({
    matchPatterns: nM,
    defaultMatchWidth: "wide",
    parsePatterns: rM,
    defaultParseWidth: "any"
  }),
  day: ds({
    matchPatterns: oM,
    defaultMatchWidth: "wide",
    parsePatterns: sM,
    defaultParseWidth: "any"
  }),
  dayPeriod: ds({
    matchPatterns: iM,
    defaultMatchWidth: "any",
    parsePatterns: aM,
    defaultParseWidth: "any"
  })
};
const uM = lM;
var cM = {
  code: "en-US",
  formatDistance: xE,
  formatLong: kE,
  formatRelative: OE,
  localize: UE,
  match: uM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Sv = cM;
var dM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, fM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, AM = /^'([^]*?)'?$/, hM = /''/g, pM = /[a-zA-Z]/;
function wM(e, o, r) {
  var i, a, u, c, f, p, v, m, _, V, $, M, T, D, N, k, S, O;
  we(2, arguments);
  var x = String(o), q = To(), L = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : q.locale) !== null && i !== void 0 ? i : Sv, F = hn((u = (c = (f = (p = r == null ? void 0 : r.firstWeekContainsDate) !== null && p !== void 0 ? p : r == null || (v = r.locale) === null || v === void 0 || (m = v.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && f !== void 0 ? f : q.firstWeekContainsDate) !== null && c !== void 0 ? c : (_ = q.locale) === null || _ === void 0 || (V = _.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ge = hn(($ = (M = (T = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (N = r.locale) === null || N === void 0 || (k = N.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && T !== void 0 ? T : q.weekStartsOn) !== null && M !== void 0 ? M : (S = q.locale) === null || S === void 0 || (O = S.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && $ !== void 0 ? $ : 0);
  if (!(ge >= 0 && ge <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!L.localize)
    throw new RangeError("locale must contain localize property");
  if (!L.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var fe = Ne(e);
  if (!aE(fe))
    throw new RangeError("Invalid time value");
  var ve = Pc(fe), ye = lE(fe, ve), Ce = {
    firstWeekContainsDate: F,
    weekStartsOn: ge,
    locale: L,
    _originalDate: fe
  }, xe = x.match(fM).map(function(Ae) {
    var ze = Ae[0];
    if (ze === "p" || ze === "P") {
      var qe = yE[ze];
      return qe(Ae, L.formatLong);
    }
    return Ae;
  }).join("").match(dM).map(function(Ae) {
    if (Ae === "''")
      return "'";
    var ze = Ae[0];
    if (ze === "'")
      return vM(Ae);
    var qe = gE[ze];
    if (qe)
      return !(r != null && r.useAdditionalWeekYearTokens) && ME(Ae) && Oh(Ae, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && EE(Ae) && Oh(Ae, o, String(e)), qe(ye, Ae, L.localize, Ce);
    if (ze.match(pM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ze + "`");
    return Ae;
  }).join("");
  return xe;
}
function vM(e) {
  var o = e.match(AM);
  return o ? o[1].replace(hM, "'") : e;
}
function Tv(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function mM(e) {
  return Tv({}, e);
}
var Lh = 1e3 * 60, ka = 60 * 24, zh = ka * 30, qh = ka * 365;
function Ha(e, o, r) {
  var i, a, u;
  we(2, arguments);
  var c = To(), f = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && i !== void 0 ? i : Sv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var p = sE(e, o);
  if (isNaN(p))
    throw new RangeError("Invalid time value");
  var v = Tv(mM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: p
  }), m, _;
  p > 0 ? (m = Ne(o), _ = Ne(e)) : (m = Ne(e), _ = Ne(o));
  var V = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), $;
  if (V === "floor")
    $ = Math.floor;
  else if (V === "ceil")
    $ = Math.ceil;
  else if (V === "round")
    $ = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var M = _.getTime() - m.getTime(), T = M / Lh, D = Pc(_) - Pc(m), N = (M - D) / Lh, k = r == null ? void 0 : r.unit, S;
  if (k ? S = String(k) : T < 1 ? S = "second" : T < 60 ? S = "minute" : T < ka ? S = "hour" : N < zh ? S = "day" : N < qh ? S = "month" : S = "year", S === "second") {
    var O = $(M / 1e3);
    return f.formatDistance("xSeconds", O, v);
  } else if (S === "minute") {
    var x = $(T);
    return f.formatDistance("xMinutes", x, v);
  } else if (S === "hour") {
    var q = $(T / 60);
    return f.formatDistance("xHours", q, v);
  } else if (S === "day") {
    var L = $(N / ka);
    return f.formatDistance("xDays", L, v);
  } else if (S === "month") {
    var F = $(N / zh);
    return F === 12 && k !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", F, v);
  } else if (S === "year") {
    var ge = $(N / qh);
    return f.formatDistance("xYears", ge, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function gM(e, o, r) {
  we(2, arguments);
  var i = Th(e, r), a = Th(o, r);
  return i.getTime() === a.getTime();
}
function _M(e, o) {
  return we(1, arguments), gM(e, Date.now(), o);
}
function VM(e) {
  return we(1, arguments), Bv(e, Date.now());
}
function yM(e, o) {
  we(2, arguments);
  var r = hn(o);
  return nE(e, -r);
}
function bM(e) {
  return we(1, arguments), Bv(e, yM(Date.now(), 1));
}
const pn = (e) => {
  let o = "";
  if (e)
    try {
      o = wM(new Date(e), Se.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Pv = (e, o) => {
  const r = e.length > o ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, CM = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (i) => VM(i.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (i) => bM(i.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (i) => _M(i.firstEventTime)
      );
      break;
  }
  return r;
}, EM = window.Vue.defineComponent, Vt = window.Vue.unref, Rh = window.Vue.normalizeClass, fn = window.Vue.createElementVNode, so = window.Vue.toDisplayString, Wh = window.Vue.createVNode, wr = window.Vue.openBlock, vr = window.Vue.createElementBlock, ji = window.Vue.createCommentVNode, kc = window.Vue.createTextVNode, MM = window.Vue.renderList, BM = window.Vue.Fragment, $M = window.Vue.pushScopeId, xM = window.Vue.popScopeId, nd = (e) => ($M("data-v-fb22b492"), e = e(), xM(), e), IM = { class: "content" }, SM = { class: "title-row" }, TM = { class: "title" }, PM = {
  key: 0,
  class: "accepted"
}, kM = {
  key: 1,
  class: "rejected"
}, NM = /* @__PURE__ */ nd(() => /* @__PURE__ */ fn("span", { class: "info-title" }, " Duration: ", -1)), DM = { key: 0 }, OM = /* @__PURE__ */ nd(() => /* @__PURE__ */ fn("span", { class: "info-title" }, " First Event: ", -1)), LM = { class: "description" }, zM = /* @__PURE__ */ nd(() => /* @__PURE__ */ fn("hr", null, null, -1)), qM = {
  key: 1,
  class: "count-info"
}, RM = /* @__PURE__ */ kc(" Alarms: "), WM = { class: "info-title" }, FM = /* @__PURE__ */ EM({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, i = Se.ACCEPTED, a = Se.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, p) => {
      var v, m, _;
      return wr(), vr("div", {
        onClick: c,
        class: Rh(["card", {
          rejected: r.situationInfo.status == Vt(a)
        }])
      }, [
        fn("div", {
          class: Rh(["severity-line", [`${(m = (v = r.situationInfo) == null ? void 0 : v.severity) == null ? void 0 : m.toLowerCase()}-bg dark`]])
        }, null, 2),
        fn("div", IM, [
          fn("div", SM, [
            fn("div", TM, "Situation " + so((_ = r.situationInfo) == null ? void 0 : _.id), 1),
            r.situationInfo.status == Vt(i) ? (wr(), vr("div", PM, [
              Wh(Vt(Z), {
                icon: Vt(xo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : ji("", !0),
            r.situationInfo.status == Vt(a) ? (wr(), vr("div", kM, [
              Wh(Vt(Z), {
                icon: Vt(Mv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : ji("", !0)
          ]),
          fn("div", null, [
            NM,
            kc(" " + so(Vt(Ha)(
              Vt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? ji("", !0) : (wr(), vr("div", DM, [
            OM,
            kc(so(Vt(pn)(r.situationInfo.firstEventTime)), 1)
          ])),
          fn("div", LM, so(Vt(Pv)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          zM,
          r.situationInfo.relatedAlarms ? (wr(), vr("div", qM, [
            RM,
            fn("span", WM, so(r.situationInfo.relatedAlarms.length), 1)
          ])) : ji("", !0),
          (wr(!0), vr(BM, null, MM(Vt(de.exports.keys)(
            Vt(de.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (V) => (wr(), vr("div", {
            class: "info-title",
            key: V
          }, " - " + so(V), 1))), 128))
        ])
      ], 2);
    };
  }
});
const kv = /* @__PURE__ */ re(FM, [["__scopeId", "data-v-fb22b492"]]), XM = window.Vue.openBlock, ZM = window.Vue.createElementBlock, UM = window.Vue.createElementVNode;
var YM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const HM = {}, GM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jM = /* @__PURE__ */ UM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), KM = [
  jM
];
function QM(e, o) {
  return XM(), ZM("svg", GM, KM);
}
var JM = /* @__PURE__ */ YM(HM, [["render", QM]]);
const eB = window.Vue.openBlock, tB = window.Vue.createElementBlock, Nv = window.Vue.createElementVNode;
var nB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const rB = {}, oB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sB = /* @__PURE__ */ Nv("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), iB = /* @__PURE__ */ Nv("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), aB = [
  sB,
  iB
];
function lB(e, o) {
  return eB(), tB("svg", oB, aB);
}
var uB = /* @__PURE__ */ nB(rB, [["render", lB]]);
const cB = window.Vue.openBlock, dB = window.Vue.createElementBlock, fB = window.Vue.createElementVNode;
var AB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const hB = {}, pB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wB = /* @__PURE__ */ fB("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), vB = [
  wB
];
function mB(e, o) {
  return cB(), dB("svg", pB, vB);
}
var gB = /* @__PURE__ */ AB(hB, [["render", mB]]);
const _B = window.Vue.openBlock, VB = window.Vue.createElementBlock, yB = window.Vue.createElementVNode;
var bB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const CB = {}, EB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MB = /* @__PURE__ */ yB("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), BB = [
  MB
];
function $B(e, o) {
  return _B(), VB("svg", EB, BB);
}
var Dv = /* @__PURE__ */ bB(CB, [["render", $B]]);
const xB = window.Vue.defineComponent, Yn = window.Vue.unref, Ki = window.Vue.normalizeClass, Qi = window.Vue.createVNode, IB = window.Vue.openBlock, SB = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TB = { class: "paginator" }, PB = /* @__PURE__ */ xB({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: o }) {
    const r = e, i = (a) => {
      a >= 0 && a <= r.totalPages - 1 && o("go-to-page", a);
    };
    return (a, u) => (IB(), SB("div", TB, [
      Qi(Yn(Z), {
        icon: Yn(JM),
        "aria-hidden": "true",
        class: Ki(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => i(0))
      }, null, 8, ["icon", "class"]),
      Qi(Yn(Z), {
        icon: Yn(gB),
        "aria-hidden": "true",
        class: Ki(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => i(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Qi(Yn(Z), {
        icon: Yn(Dv),
        "aria-hidden": "true",
        class: Ki(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => i(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Qi(Yn(Z), {
        icon: Yn(uB),
        "aria-hidden": "true",
        class: Ki(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => i(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const kB = /* @__PURE__ */ re(PB, [["__scopeId", "data-v-40758818"]]);
const ie = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, NB = window.Vue.computed, Ga = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((i) => {
    r[`${i}Label`] = NB(() => e.value[i] ? e.value[i] : o[i]);
  }), r;
};
const Nr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Dr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var DB = Object.defineProperty, OB = Object.defineProperties, LB = Object.getOwnPropertyDescriptors, Fh = Object.getOwnPropertySymbols, zB = Object.prototype.hasOwnProperty, qB = Object.prototype.propertyIsEnumerable, Xh = (e, o, r) => o in e ? DB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Zh = (e, o) => {
  for (var r in o || (o = {}))
    zB.call(o, r) && Xh(e, r, o[r]);
  if (Fh)
    for (var r of Fh(o))
      qB.call(o, r) && Xh(e, r, o[r]);
  return e;
}, RB = (e, o) => OB(e, LB(o));
const WB = window.Vue.defineComponent, FB = window.Vue.h;
var XB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ZB = {
  center: {
    type: Boolean,
    default: !1
  }
}, UB = WB({
  props: ZB,
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
        const { clientWidth: o, clientHeight: r } = this.parent, i = Math.round(Math.max(o, r));
        let a = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), c = e.pageY, f = e.pageX;
          a = {
            top: `${c - u.top - i / 2 - document.documentElement.scrollTop}px`,
            left: `${f - u.left - i / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = RB(Zh({}, a), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Dr(this.failsafe), this.failsafe = Nr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return FB("div", {
        style: Zh({}, this.styles),
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
var rr = /* @__PURE__ */ XB(UB, [["__scopeId", "data-v-18e2a5db"]]);
const YB = window.Vue.openBlock, HB = window.Vue.createElementBlock, GB = window.Vue.createElementVNode;
var jB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const KB = {}, QB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JB = /* @__PURE__ */ GB("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), e$ = [
  JB
];
function t$(e, o) {
  return YB(), HB("svg", QB, e$);
}
var Po = /* @__PURE__ */ jB(KB, [["render", t$]]);
const Uh = window.Vue.computed, n$ = (e, o, r) => {
  const i = Uh(() => o.value.filter((u) => !u.disabled)), a = Uh(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(i.value[i.value.length - 1]) : r(i.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === i.value.length - 1 ? r(i.value[0]) : r(i.value[a.value + 1]));
    }
  };
};
const r$ = window.Vue.openBlock, o$ = window.Vue.createElementBlock, rd = window.Vue.createElementVNode;
var s$ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const i$ = {}, a$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, l$ = /* @__PURE__ */ rd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), u$ = /* @__PURE__ */ rd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), c$ = /* @__PURE__ */ rd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), d$ = [
  l$,
  u$,
  c$
];
function f$(e, o) {
  return r$(), o$("svg", a$, d$);
}
var A$ = /* @__PURE__ */ s$(i$, [["render", f$]]), h$ = Object.defineProperty, p$ = Object.defineProperties, w$ = Object.getOwnPropertyDescriptors, Yh = Object.getOwnPropertySymbols, v$ = Object.prototype.hasOwnProperty, m$ = Object.prototype.propertyIsEnumerable, Hh = (e, o, r) => o in e ? h$(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ov = (e, o) => {
  for (var r in o || (o = {}))
    v$.call(o, r) && Hh(e, r, o[r]);
  if (Yh)
    for (var r of Yh(o))
      m$.call(o, r) && Hh(e, r, o[r]);
  return e;
}, Lv = (e, o) => p$(e, w$(o));
const ko = window.Vue.defineComponent, Rs = window.Vue.resolveComponent, An = window.Vue.openBlock, Vo = window.Vue.createElementBlock, g$ = window.Vue.createVNode, Na = window.Vue.createBlock, _$ = window.Vue.withModifiers, Io = window.Vue.inject, Ws = window.Vue.computed, V$ = window.Vue.normalizeClass, io = window.Vue.createElementVNode, Da = window.Vue.toDisplayString, Ea = window.Vue.renderSlot, ks = window.Vue.createCommentVNode, y$ = window.Vue.withDirectives, b$ = window.Vue.vShow, Nc = window.Vue.ref, Gh = window.Vue.toRef, jh = window.Vue.nextTick, Dc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const od = window.Vue.provide, Kh = window.Vue.isRef, C$ = window.Vue.onBeforeUnmount;
var Hs = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const E$ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, M$ = ko({
  props: E$,
  components: {
    FeatherIcon: Z
  }
}), B$ = ["title"];
function $$(e, o, r, i, a, u) {
  const c = Rs("FeatherIcon");
  return An(), Vo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    g$(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, B$);
}
var x$ = /* @__PURE__ */ Hs(M$, [["render", $$], ["__scopeId", "data-v-4265058e"]]);
const I$ = ko({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Po;
    }
  },
  components: {
    ActionIcon: x$
  }
});
function S$(e, o, r, i, a, u) {
  const c = Rs("ActionIcon");
  return An(), Na(c, {
    onClick: o[0] || (o[0] = _$((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var T$ = /* @__PURE__ */ Hs(I$, [["render", S$]]);
const P$ = ko({
  computed: {
    errorIcon() {
      return A$;
    }
  },
  components: {
    FeatherIcon: Z
  }
});
function k$(e, o, r, i, a, u) {
  const c = Rs("FeatherIcon");
  return An(), Na(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var N$ = /* @__PURE__ */ Hs(P$, [["render", k$], ["__scopeId", "data-v-0b8faef3"]]);
const D$ = {
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
}, O$ = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, L$ = ko({
  emits: O$,
  props: D$,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Io("wrapperOptions", {}), o = Io("validationErrorMessage", !1), r = Ws(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Lv(Ov({}, e), { error: r });
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
      const o = { childList: !0, subtree: !0 }, r = () => {
        const i = this.$el.querySelector(".prefix");
        this.prefixWidth = i ? i.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(e, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: T$,
    ErrorIcon: N$
  }
}), z$ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, q$ = ["for"], R$ = { class: "prefix" }, W$ = { class: "post" };
function F$(e, o, r, i, a, u) {
  const c = Rs("ClearIcon"), f = Rs("ErrorIcon");
  return An(), Vo("div", {
    class: V$(["feather-input-wrapper-container", e.containerCls])
  }, [
    io("fieldset", z$, [
      io("legend", null, Da(e.label), 1)
    ]),
    io("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Da(e.label), 9, q$),
    io("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...p) => e.handleWrapperClick && e.handleWrapperClick(...p))
    }, [
      io("div", R$, [
        Ea(e.$slots, "pre", {}, void 0, !0)
      ]),
      Ea(e.$slots, "default", {}, void 0, !0),
      io("div", W$, [
        e.showClear && e.computedClearText ? (An(), Na(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (p) => e.$emit("clear"))
        }, null, 8, ["clear"])) : ks("", !0),
        e.error ? (An(), Na(f, { key: 1 })) : ks("", !0),
        Ea(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var sd = /* @__PURE__ */ Hs(L$, [["render", F$], ["__scopeId", "data-v-4db296db"]]);
const X$ = ko({
  setup() {
    const e = Io("subTextOptions", {}), o = Io("validationErrorMessage", !1), r = Ws(() => e.error ? e.error : o && o.value ? o.value : "");
    return Lv(Ov({}, e), { error: r });
  }
}), Z$ = { class: "feather-input-sub-text" }, U$ = {
  key: 0,
  class: "feather-input-spacer"
}, Y$ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, H$ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function G$(e, o, r, i, a, u) {
  return y$((An(), Vo("div", Z$, [
    !e.hint && !e.error.length ? (An(), Vo("div", U$, "\xA0")) : ks("", !0),
    e.hint && !e.error.length ? (An(), Vo("div", Y$, Da(e.hint), 1)) : ks("", !0),
    e.error.length > 0 ? (An(), Vo("div", H$, Da(e.error), 1)) : ks("", !0),
    Ea(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [b$, !e.inline || e.hint || e.error.length]
  ]);
}
var Gs = /* @__PURE__ */ Hs(X$, [["render", G$], ["__scopeId", "data-v-8e0ac99e"]]);
const j$ = {
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
ko({
  props: j$,
  setup(e) {
    const o = Io("featherFormErrors", Nc([])), r = Gh(e, "errorList"), i = Ws(() => {
      var m;
      return (m = r.value) != null && m.length ? r.value : o.value;
    }), a = Gh(e, "generalError"), u = (m) => {
      document.getElementById(m).focus();
    }, c = (m) => m.replace(/ \*$/, ""), f = Nc(), p = (m) => `${c(m.label)} - ${m.message}`, v = Ws(() => (i.value.length && jh(() => f.value.focus()), e.headingText(i.value)));
    return Dc(a, (m) => {
      m.length && jh(() => f.value.focus());
    }), {
      errors: i,
      errorsHeading: v,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: p
    };
  }
});
const js = (e, o, r, i, a) => {
  const u = Io("featherForm", !1);
  if (i && u && e.value) {
    const c = Nc("");
    od("validationErrorMessage", c);
    const f = () => {
      if (a && Kh(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return i.validateSync(o.value), c.value = "", { success: !0 };
      } catch (m) {
        const _ = m;
        return c.value = _.errors[0], {
          success: !1,
          message: _.errors[0],
          inputId: e.value,
          label: r
        };
      }
    }, v = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && Kh(a) && Dc(a, () => {
      u.runValidation();
    }), Dc(e, (m, _) => {
      m && u && u.register(m, v), _ && u && u.deregister(_);
    }, { immediate: !0 }), C$(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Ks = (e) => ({
  inherittedAttrs: Ws(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Qs = {
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
}, Js = (e) => {
  od("subTextOptions", e);
}, id = {
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
}, ad = (e) => {
  od("wrapperOptions", e);
}, Ji = window.Vue.ref, K$ = window.Vue.watch, Q$ = window.Vue.watchEffect, Qh = window.Vue.computed, Yu = window.Vue.provide, zv = (e, o, r, i, a) => {
  const u = Ji([]), c = Ji(), f = Ji(), p = Ji();
  Q$(() => {
    if (!u.value.length)
      return;
    const N = u.value.map((k) => k.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[N.indexOf(e.value)]), !c.value && u.value.length) {
      let k = u.value.filter((S) => !S.disabled);
      k = k.length ? k : u.value, f.value = k[0], f.value.first = !0;
    }
  }), K$(c, (N, k) => {
    k && (k.checked = !1), N && (N.checked = !0);
  });
  const v = (N) => {
    N && N.disabled || (f.value && (f.value.first = !1), c.value !== N && (o("update:modelValue", N.value), c.value = N, N.focus()));
  }, m = Qh(() => c.value || f.value), _ = n$(m, u, v), V = Qh(() => ie("feather-radio-group"));
  p.value = V.value;
  const { validate: $ } = js(p, e, r, i, a);
  return Yu("register", (N) => {
    u.value = [...u.value, N], p.value === V.value && (p.value = N.id);
  }), Yu("select", v), Yu("blur", (N) => {
    o("blur", N);
  }), {
    keydown: (N) => {
      switch (N.keyCode) {
        case 13:
        case 32:
          c.value ? v(c.value) : f.value && v(f.value);
          break;
        case 40:
        case 39:
          _.selectNext();
          break;
        case 37:
        case 38:
          _.selectPrevious();
          break;
      }
    },
    ..._,
    focus: () => {
      c.value && c.value.focus();
    },
    validate: $,
    firstElementId: p,
    groupId: V
  };
};
var J$ = Object.defineProperty, ex = Object.defineProperties, tx = Object.getOwnPropertyDescriptors, Jh = Object.getOwnPropertySymbols, nx = Object.prototype.hasOwnProperty, rx = Object.prototype.propertyIsEnumerable, ep = (e, o, r) => o in e ? J$(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Co = (e, o) => {
  for (var r in o || (o = {}))
    nx.call(o, r) && ep(e, r, o[r]);
  if (Jh)
    for (var r of Jh(o))
      rx.call(o, r) && ep(e, r, o[r]);
  return e;
}, qv = (e, o) => ex(e, tx(o));
const sr = window.Vue.defineComponent, Ns = window.Vue.inject, Oa = window.Vue.computed, Ds = window.Vue.ref, qt = window.Vue.resolveComponent, Et = window.Vue.openBlock, ei = window.Vue.createElementBlock, Rv = window.Vue.normalizeClass, wn = window.Vue.renderSlot, tr = window.Vue.createBlock, Fs = window.Vue.createCommentVNode, La = window.Vue.createElementVNode, ox = window.Vue.withModifiers, ja = window.Vue.createVNode, Wv = window.Vue.toRef, Oc = window.Vue.mergeProps, kn = window.Vue.withCtx, sx = window.Vue.h, ix = window.Vue.provide;
var ir = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ax = {
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
}, lx = sr({
  props: ax,
  setup(e) {
    const o = Ns("isCondensed", null), r = Oa(() => o || e.condensed), i = Ds(!1);
    return {
      focused: i,
      handleFocus: () => {
        i.value = !0;
      },
      handleBlur: () => {
        i.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: rr
  }
}), ux = ["aria-disabled"];
function cx(e, o, r, i, a, u) {
  const c = qt("FeatherRipple");
  return Et(), ei("div", {
    class: Rv(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    wn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Et(), tr(c, { key: 0 })) : Fs("", !0)
  ], 42, ux);
}
var Ka = /* @__PURE__ */ ir(lx, [["render", cx], ["__scopeId", "data-v-44d413dc"]]);
const dx = {
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
}, fx = sr({
  emits: ["delete"],
  props: dx,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: Po
    };
  },
  components: {
    FeatherIcon: Z
  }
}), Ax = { class: "chip-delete" }, hx = ["aria-label", "aria-describedby"];
function px(e, o, r, i, a, u) {
  const c = qt("FeatherIcon");
  return Et(), ei("span", Ax, [
    La("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = ox((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      ja(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, hx)
  ]);
}
var wx = /* @__PURE__ */ ir(fx, [["render", px], ["__scopeId", "data-v-4bae6cb4"]]);
const vx = sr({
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
}), mx = ["title"];
function gx(e, o, r, i, a, u) {
  return Et(), ei("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    wn(e.$slots, "default", {}, void 0, !0)
  ], 8, mx);
}
var Qa = /* @__PURE__ */ ir(vx, [["render", gx], ["__scopeId", "data-v-1a0445b2"]]);
const _x = {}, Vx = {
  class: "chip-icon",
  role: "presentation"
};
function yx(e, o) {
  return Et(), ei("span", Vx, [
    wn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ja = /* @__PURE__ */ ir(_x, [["render", yx], ["__scopeId", "data-v-2230176f"]]);
const tp = {
  delete: "Remove"
}, bx = sr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => tp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Ga(Wv(e, "labels"), tp), i = Oa(() => ie("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Co({}, o.attrs);
    return e.disabled && delete u.onClick, qv(Co({}, r), {
      chipTextId: i,
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
    Chip: Ka,
    DeleteIcon: wx,
    Label: Qa,
    PreIcon: Ja
  }
}), Cx = ["aria-disabled"];
function Ex(e, o, r, i, a, u) {
  const c = qt("PreIcon"), f = qt("Label"), p = qt("DeleteIcon"), v = qt("Chip");
  return Et(), tr(v, Oc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: kn(() => [
      La("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        La("span", Oc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Et(), tr(c, { key: 0 }, {
            default: kn(() => [
              wn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Fs("", !0),
          ja(f, { id: e.chipTextId }, {
            default: kn(() => [
              wn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, Cx),
      e.canDelete ? (Et(), tr(p, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (m) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Fs("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var Mx = /* @__PURE__ */ ir(bx, [["render", Ex], ["__scopeId", "data-v-48b2704a"]]);
const Bx = sr({
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
    Chip: Ka,
    Label: Qa,
    PreIcon: Ja
  }
}), $x = ["aria-disabled"];
function xx(e, o, r, i, a, u) {
  const c = qt("PreIcon"), f = qt("Label"), p = qt("Chip");
  return Et(), tr(p, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: kn(() => [
      La("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Et(), tr(c, { key: 0 }, {
          default: kn(() => [
            wn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Fs("", !0),
        ja(f, null, {
          default: kn(() => [
            wn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, $x)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var Ix = /* @__PURE__ */ ir(Bx, [["render", xx], ["__scopeId", "data-v-3e0c4eba"]]);
const Sx = sr({
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
    const o = Ds(!1), r = Ds(!1), i = Oa(() => ie("chip-label-id")), a = Oa(() => o.value || r.value ? 0 : -1), u = Ds(), c = () => {
      u.value.$el.focus();
    }, f = Ns("register", (V) => {
    }), p = Ns("blur", (V) => {
    }), v = Ns("select", (V) => {
    }), m = {
      first: o,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(m), {
      labelId: i,
      tabindex: a,
      first: o,
      blur: p,
      click: () => {
        v(m);
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
    Chip: Ka,
    Label: Qa,
    PreIcon: Ja
  }
});
function Tx(e, o, r, i, a, u) {
  const c = qt("PreIcon"), f = qt("Label"), p = qt("Chip");
  return Et(), tr(p, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: Rv(["focus hover", { selected: e.checked }]),
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
    default: kn(() => [
      e.hasIcon ? (Et(), tr(c, { key: 0 }, {
        default: kn(() => [
          wn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Fs("", !0),
      ja(f, { id: e.labelId }, {
        default: kn(() => [
          wn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var Px = /* @__PURE__ */ ir(Sx, [["render", Tx], ["__scopeId", "data-v-bbcc2f70"]]);
const kx = {
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
}, np = sr({
  props: kx,
  setup() {
    return { format: Ns("chipListFormat", "") };
  },
  render() {
    const e = (o) => sx(o, Co(Co({}, this.$props), this.$attrs), Co({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(Mx) : this.format === "radio" ? e(Px) : e(Ix);
  }
}), Nx = {
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
}, Dx = sr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Nx,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    ix("chipListFormat", r);
    const i = r === "single";
    if (r === "radio") {
      const c = Wv(e, "modelValue");
      return qv(Co({
        attrs: {
          role: "radiogroup"
        }
      }, zv(c, o.emit, e.label, {}, Ds(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), Ox = ["aria-label"];
function Lx(e, o, r, i, a, u) {
  return Et(), ei("div", Oc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    wn(e.$slots, "default", {}, void 0, !0)
  ], 16, Ox);
}
var zx = /* @__PURE__ */ ir(Dx, [["render", Lx], ["__scopeId", "data-v-1e06f41d"]]);
const qx = window.Vue.defineComponent, Rx = window.Vue.normalizeClass, Wx = window.Vue.openBlock, Fx = window.Vue.createElementBlock, Xx = window.Vue.createCommentVNode, Zx = /* @__PURE__ */ qx({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (Wx(), Fx("span", {
      key: 0,
      class: Rx(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : Xx("", !0);
  }
});
const Ux = /* @__PURE__ */ re(Zx, [["__scopeId", "data-v-e08880d6"]]), Yx = window.Vue.defineComponent, fs = window.Vue.unref, Fv = window.Vue.createTextVNode, Hu = window.Vue.normalizeClass, Gu = window.Vue.withCtx, Hx = window.Vue.createVNode, Gx = window.Vue.renderList, jx = window.Vue.Fragment, ea = window.Vue.openBlock, Kx = window.Vue.createElementBlock, ju = window.Vue.createBlock, rp = window.Vue.createCommentVNode, Qx = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Jx = /* @__PURE__ */ Fv(" ALL "), op = window.Vue.ref, eI = window.Vue.watch, tI = window.Vue.computed, nI = window.Vue.reactive, rI = /* @__PURE__ */ Yx({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: o }) {
    var p;
    const r = e, i = op(!1), a = tI(() => de.exports.keys(de.exports.groupBy(r.alarms, r.property))), u = op(
      (p = r.preSelected) != null && p.length ? r.preSelected : ["all"]
    ), c = nI({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((m) => m !== "all"), u.value.includes(v) ? u.value = u.value.filter((m) => m !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return eI(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, i.value = !1;
    }), (v, m) => fs(a).length > 0 ? (ea(), ju(fs(zx), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Hu({ vertical: r.isVertical })
    }, {
      default: Gu(() => [
        Hx(fs(np), {
          class: Hu({ clicked: u.value.includes("all") }),
          onClick: m[0] || (m[0] = (_) => f("all"))
        }, {
          default: Gu(() => [
            Jx
          ]),
          _: 1
        }, 8, ["class"]),
        (ea(!0), Kx(jx, null, Gx(fs(a), (_) => (ea(), ju(fs(np), {
          class: Hu([
            { clicked: u.value.includes(_) },
            `${_ == null ? void 0 : _.toLowerCase()}-bg`
          ]),
          key: _,
          onClick: (V) => f(_)
        }, {
          default: Gu(() => [
            e.property == "severity" ? (ea(), ju(Ux, {
              key: 0,
              severity: _
            }, null, 8, ["severity"])) : rp("", !0),
            Fv(Qx(_), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : rp("", !0);
  }
});
const oI = /* @__PURE__ */ re(rI, [["__scopeId", "data-v-d83b0f85"]]);
const sI = window.Vue.watch, iI = window.Vue.onBeforeUnmount, aI = window.Vue.ref, lI = window.Vue.onMounted, uI = (e) => {
  const o = aI(!1);
  let r = !1;
  const i = (c) => {
    e(c), r = !1;
  };
  function a(c) {
    r || (requestAnimationFrame(() => i(c)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", a);
  };
  return lI(() => {
    const c = sI(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    iI(() => {
      c(), u();
    });
  }), o;
}, cI = window.Vue.watch, dI = window.Vue.onBeforeUnmount, fI = window.Vue.ref, AI = window.Vue.onMounted, hI = (e, o) => {
  const r = fI(!1), i = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", i));
  };
  return AI(() => {
    const c = cI(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", i)) : u();
    }, {
      immediate: !0
    });
    dI(() => {
      c(), u();
    });
  }), r;
}, pI = window.Vue.watch, wI = window.Vue.onBeforeUnmount, vI = window.Vue.ref, Xv = (e, o) => {
  const r = vI(!1);
  let i = !1;
  const a = (p) => {
    o(p), i = !1;
  };
  function u(p) {
    i || (requestAnimationFrame(() => a(p)), i = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = pI([e, r], ([p, v], m) => {
    m && m.length && m[0] && m[0].removeEventListener("scroll", u, !0), v && p ? p.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return wI(() => {
    f(), c();
  }), r;
}, mI = window.Vue.defineComponent, $n = window.Vue.ref, sp = window.Vue.toRef, gI = window.Vue.onMounted, _I = window.Vue.watch, ip = window.Vue.computed, VI = window.Vue.nextTick, ap = window.Vue.openBlock, lp = window.Vue.createElementBlock, up = window.Vue.renderSlot, yI = window.Vue.normalizeClass, bI = window.Vue.normalizeStyle, CI = window.Vue.createCommentVNode;
var EI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const MI = {
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
}, BI = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, $I = mI({
  emits: BI,
  props: MI,
  setup(e, o) {
    const r = $n(), i = $n(), a = sp(e, "open"), u = sp(e, "noExpand"), c = $n("auto"), f = $n(), p = $n(e.triggerId || ie("feather-menu-trigger")), v = $n(ie("feather-menu-dropdown")), m = $n(""), _ = $n("");
    gI(() => {
      f.value = window;
    });
    const V = $n(!1), $ = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), M = () => {
      if (!i.value)
        return;
      const x = r.value.getBoundingClientRect();
      V.value = !0, c.value = "auto", VI(() => {
        let { height: q, width: L } = i.value.getBoundingClientRect();
        const F = $(), ge = F.height, fe = F.width;
        e.fill && L < x.width ? (c.value = x.width + "px", L = x.width) : c.value = L + "px";
        let ve = 0;
        ge - x.bottom < q && x.top >= q ? (ve = x.top - q, e.cover && (ve += x.height)) : (ve = x.bottom, e.cover && (ve -= x.height));
        let ye = e.right ? x.right - L : x.left;
        !e.right && x.right >= L && fe - x.left < L && (ye = x.right - L), e.right && x.right <= L && fe - x.left > L && (ye = x.left), _.value = `${ye}px`, m.value = `${ve}px`, V.value = !1;
      });
    }, D = hI(r, (x) => {
      o.emit("outside-click", x);
    }), N = uI(M), k = Xv(f, M);
    _I([a, i], ([x, q]) => {
      x && q && M(), D.value = x, N.value = x, k.value = x;
    });
    const S = ip(() => {
      const x = {
        id: p.value,
        "aria-haspopup": "true"
      };
      return a.value && (x["aria-controls"] = v.value), u.value || (x["aria-expanded"] = a.value ? "true" : "false"), x;
    }), O = ip(() => ({
      click: (x) => {
        o.emit("trigger-click", x);
      }
    }));
    return {
      positionTop: m,
      positionLeft: _,
      triggerId: p,
      triggerAttrs: S,
      triggerListeners: O,
      menuId: v,
      menu: i,
      menuWidth: c,
      root: r,
      calculatePosition: M,
      calculating: V
    };
  }
}), xI = ["data-ref-id"], II = ["data-ref-id", "id"];
function SI(e, o, r, i, a, u) {
  return ap(), lp("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    up(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (ap(), lp("div", {
      key: 0,
      class: yI(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: bI({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      up(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, II)) : CI("", !0)
  ], 8, xI);
}
var Zv = /* @__PURE__ */ EI($I, [["render", SI], ["__scopeId", "data-v-f75af406"]]), TI = {
  mounted(e, o) {
    e.addEventListener("keydown", o.dir.contentKeyPressed);
  },
  unmounted(e, o) {
    e.removeEventListener("keydown", o.dir.contentKeyPressed);
  },
  contentKeyPressed(e) {
    const o = e.currentTarget.querySelectorAll("li a");
    let r = [].indexOf.call(o, e.target);
    if (!(r < 0)) {
      switch (e.keyCode) {
        case 40:
          r++, r === o.length && (r = 0);
          break;
        case 38:
          r--, r === -1 && (r = o.length - 1);
          break;
        default:
          return;
      }
      e.preventDefault(), o[r].focus();
    }
  }
};
const PI = window.Vue.openBlock, kI = window.Vue.createElementBlock, NI = window.Vue.createElementVNode;
var DI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const OI = {}, LI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zI = /* @__PURE__ */ NI("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), qI = [
  zI
];
function RI(e, o) {
  return PI(), kI("svg", LI, qI);
}
var WI = /* @__PURE__ */ DI(OI, [["render", RI]]);
const FI = window.Vue.openBlock, XI = window.Vue.createElementBlock, ld = window.Vue.createElementVNode;
var ZI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const UI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HI = /* @__PURE__ */ ld("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), GI = /* @__PURE__ */ ld("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), jI = /* @__PURE__ */ ld("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), KI = [
  HI,
  GI,
  jI
];
function QI(e, o) {
  return FI(), XI("svg", YI, KI);
}
var JI = /* @__PURE__ */ ZI(UI, [["render", QI]]);
const eS = window.Vue.openBlock, tS = window.Vue.createElementBlock, nS = window.Vue.createElementVNode;
var rS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const oS = {}, sS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iS = /* @__PURE__ */ nS("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), aS = [
  iS
];
function lS(e, o) {
  return eS(), tS("svg", sS, aS);
}
var el = /* @__PURE__ */ rS(oS, [["render", lS]]);
const Xs = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const i = getComputedStyle(e);
  r += parseInt(i.getPropertyValue("margin-top"), 10), r += parseInt(i.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
};
const Q = {
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
const uS = window.Vue.defineComponent, cS = window.Vue.openBlock, dS = window.Vue.createElementBlock, fS = window.Vue.normalizeClass, AS = window.Vue.pushScopeId, hS = window.Vue.popScopeId, Lc = window.Vue.createElementVNode;
var pS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const wS = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, vS = {
  click: (e) => !0
}, mS = uS({
  emits: vS,
  props: wS,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Uv = (e) => (AS("data-v-07e020f5"), e = e(), hS(), e), gS = /* @__PURE__ */ Uv(() => /* @__PURE__ */ Lc("div", { class: "track" }, null, -1)), _S = /* @__PURE__ */ Uv(() => /* @__PURE__ */ Lc("div", { class: "switcher" }, [
  /* @__PURE__ */ Lc("div", { class: "switch-circle" })
], -1)), VS = [
  gS,
  _S
];
function yS(e, o, r, i, a, u) {
  return cS(), dS("div", {
    class: fS(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, VS, 2);
}
var bS = /* @__PURE__ */ pS(mS, [["render", yS], ["__scopeId", "data-v-07e020f5"]]), CS = Object.defineProperty, ES = Object.defineProperties, MS = Object.getOwnPropertyDescriptors, cp = Object.getOwnPropertySymbols, BS = Object.prototype.hasOwnProperty, $S = Object.prototype.propertyIsEnumerable, dp = (e, o, r) => o in e ? CS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, fp = (e, o) => {
  for (var r in o || (o = {}))
    BS.call(o, r) && dp(e, r, o[r]);
  if (cp)
    for (var r of cp(o))
      $S.call(o, r) && dp(e, r, o[r]);
  return e;
}, Ap = (e, o) => ES(e, MS(o));
const ud = window.Vue.defineComponent, mr = window.Vue.h, xS = window.Vue.openBlock, IS = window.Vue.createElementBlock, SS = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Yv = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const TS = {
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
}, PS = ud({
  inheritAttrs: !1,
  props: TS,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = mr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = mr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = mr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : mr(rr);
    if (this.asLi)
      return mr("li", Ap(fp({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, r, i, a]);
    const u = mr("a", Ap(fp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, i, a]);
    return mr("li", {}, [u]);
  }
});
var ti = /* @__PURE__ */ Yv(PS, [["__scopeId", "data-v-7c46b2b3"]]);
ud({
  components: {
    FeatherListItem: ti
  }
});
const kS = {}, NS = { class: "feather-list" };
function DS(e, o) {
  return xS(), IS("ul", NS, [
    SS(e.$slots, "default", {}, void 0, !0)
  ]);
}
var cd = /* @__PURE__ */ Yv(kS, [["render", DS], ["__scopeId", "data-v-941a1d50"]]);
const OS = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, LS = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
ud({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: OS,
  props: LS,
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
      (e.keyCode === Q.SPACE || e.keyCode === Q.ENTER) && this.updateValue(), e.keyCode === Q.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: bS, FeatherListItem: ti }
});
var zS = Object.defineProperty, qS = Object.defineProperties, RS = Object.getOwnPropertyDescriptors, hp = Object.getOwnPropertySymbols, WS = Object.prototype.hasOwnProperty, FS = Object.prototype.propertyIsEnumerable, pp = (e, o, r) => o in e ? zS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Mt = (e, o) => {
  for (var r in o || (o = {}))
    WS.call(o, r) && pp(e, r, o[r]);
  if (hp)
    for (var r of hp(o))
      FS.call(o, r) && pp(e, r, o[r]);
  return e;
}, XS = (e, o) => qS(e, RS(o));
const No = window.Vue.defineComponent, se = window.Vue.openBlock, ke = window.Vue.createElementBlock, dt = window.Vue.createElementVNode, en = window.Vue.toDisplayString, zt = window.Vue.createCommentVNode, Ie = window.Vue.resolveComponent, Lt = window.Vue.createBlock, Ge = window.Vue.withCtx, Eo = window.Vue.Fragment, Os = window.Vue.renderList, ft = window.Vue.createVNode, dd = window.Vue.withModifiers, kr = window.Vue.normalizeClass, zc = window.Vue.renderSlot, Hv = window.Vue.createTextVNode, ZS = window.Vue.pushScopeId, US = window.Vue.popScopeId, Gv = window.Vue.reactive, jv = window.Vue.nextTick, Ku = window.Vue.markRaw, Qu = window.Vue.toRef, wp = window.Vue.computed, YS = window.Vue.toRefs, ao = window.Vue.ref, Ju = window.Vue.mergeProps, vp = window.Vue.toHandlers, ta = window.Vue.withDirectives, na = window.Vue.vShow;
var tl = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, fd = {
  query: {
    type: String
  }
}, Lr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const HS = No({
  mixins: [],
  props: Mt(Mt({
    text: {
      type: String,
      required: !0
    }
  }, tl), fd),
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
}), GS = {
  key: 0,
  class: "highlight"
}, jS = { key: 1 };
function KS(e, o, r, i, a, u) {
  return se(), ke("span", null, [
    dt("span", null, en(e.beginning), 1),
    e.highlighted ? (se(), ke("span", GS, en(e.highlighted), 1)) : zt("", !0),
    e.end ? (se(), ke("span", jS, en(e.end), 1)) : zt("", !0)
  ]);
}
var Kv = /* @__PURE__ */ Lr(HS, [["render", KS], ["__scopeId", "data-v-8abe2492"]]);
const QS = No({
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
  }, tl), fd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        Xs(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const o = this.value;
      return o && o.length ? o.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    FeatherList: cd,
    FeatherListItem: ti,
    Highlighter: Kv
  }
}), JS = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function e7(e, o, r, i, a, u) {
  const c = Ie("Highlighter"), f = Ie("FeatherListItem"), p = Ie("FeatherList");
  return se(), Lt(p, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (se(!0), ke(Eo, null, Os(e.items, (v, m) => (se(), ke(Eo, {
        key: v[e.textProp]
      }, [
        ft(f, {
          "as-li": "",
          id: e.getId(m),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(m),
          selected: e.isSelected(v),
          onClick: dd((_) => e.select(v), ["stop"])
        }, {
          default: Ge(() => [
            ft(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (se(), ke("span", JS, en(e.newLabel), 1)) : zt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (se(), ke("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : zt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var t7 = /* @__PURE__ */ Lr(QS, [["render", e7], ["__scopeId", "data-v-f623434a"]]);
const n7 = No({
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
  }, tl), fd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        Xs(o, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((e, o) => e.align && e.align.toLowerCase() === "right" ? `tr${o + 1}` : e.align && e.align.toLowerCase() === "center" ? `tc${o + 1}` : `tl${o + 1}`);
    }
  },
  methods: {
    isSelected(e) {
      const o = this.value;
      return this.value && this.value.length ? o.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeRow === e;
    },
    isActiveCell(e, o) {
      return this.activeRow === e && this.activeCol === o;
    },
    getId(e, o) {
      return e === this.activeRow && this.activeCol === o ? this.activeId : "";
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    Highlighter: Kv
  }
}), r7 = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, o7 = ["aria-multiselectable"], s7 = { role: "row" }, i7 = ["aria-selected", "onClick"], a7 = ["id", "aria-selected"], l7 = { key: 1 };
function u7(e, o, r, i, a, u) {
  const c = Ie("Highlighter");
  return se(), ke("div", r7, [
    dt("table", {
      class: kr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      dt("thead", null, [
        dt("tr", s7, [
          (se(!0), ke(Eo, null, Os(e.config, (f) => (se(), ke("th", {
            key: f.title
          }, en(f.title), 1))), 128))
        ])
      ]),
      dt("tbody", null, [
        (se(!0), ke(Eo, null, Os(e.items, (f, p) => (se(), ke("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: kr({ focus: e.isActive(p), selected: e.isSelected(f) }),
          onClick: dd((v) => e.select(f), ["stop"])
        }, [
          (se(!0), ke(Eo, null, Os(e.config, (v, m) => (se(), ke("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(p, m),
            "aria-selected": e.isSelected(f),
            class: kr({ "focus-cell": e.isActiveCell(p, m) })
          }, [
            v.prop === e.textProp ? (se(), Lt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (se(), ke("p", l7, en(f[v.prop]), 1))
          ], 10, a7))), 128))
        ], 10, i7))), 128))
      ])
    ], 10, o7)
  ], 512);
}
var c7 = /* @__PURE__ */ Lr(n7, [["render", u7], ["__scopeId", "data-v-58c88fd1"]]);
const d7 = No({
  components: {
    FeatherList: cd,
    FeatherListItem: ti
  }
});
function f7(e, o, r, i, a, u) {
  const c = Ie("FeatherListItem"), f = Ie("FeatherList");
  return se(), Lt(f, { class: "result-list" }, {
    default: Ge(() => [
      ft(c, { "as-li": "" }, {
        default: Ge(() => [
          zc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var A7 = /* @__PURE__ */ Lr(d7, [["render", f7], ["__scopeId", "data-v-06b752c6"]]);
const h7 = No({
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
    FeatherIcon: Z,
    Cancel: Po,
    BaseChip: Ka,
    BaseChipLabel: Qa,
    BaseChipPreIcon: Ja
  }
});
function p7(e, o, r, i, a, u) {
  const c = Ie("FeatherIcon"), f = Ie("BaseChipPreIcon"), p = Ie("BaseChipLabel"), v = Ie("Cancel"), m = Ie("BaseChip");
  return se(), Lt(m, {
    class: kr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Ge(() => [
      e.showPreIcon ? (se(), Lt(f, { key: 0 }, {
        default: Ge(() => {
          var _, V;
          return [
            ft(c, {
              icon: (_ = e.pre) == null ? void 0 : _.icon,
              title: (V = e.pre) == null ? void 0 : V.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : zt("", !0),
      ft(p, null, {
        default: Ge(() => [
          Hv(en(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? zt("", !0) : (se(), ke("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = dd((..._) => e.handleClick && e.handleClick(..._), ["stop"]))
      }, [
        ft(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Ge(() => [
            ft(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var w7 = /* @__PURE__ */ Lr(h7, [["render", p7], ["__scopeId", "data-v-e0fc6ac0"]]);
const v7 = {}, m7 = (e) => (ZS("data-v-aa720e06"), e = e(), US(), e), g7 = { class: "spinner-container" }, _7 = /* @__PURE__ */ m7(() => /* @__PURE__ */ dt("svg", {
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
], -1)), V7 = [
  _7
];
function y7(e, o) {
  return se(), ke("div", g7, V7);
}
var b7 = /* @__PURE__ */ Lr(v7, [["render", y7], ["__scopeId", "data-v-aa720e06"]]), nl = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(nl || {});
const Qv = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, C7 = Mt(Mt(Mt({
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
    default: (e, o, r) => e[r.textProp].toString().toLowerCase() === o.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (e) => !!nl[e]
  },
  labels: {
    type: Object,
    default: () => Qv
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, tl), Qs), id), E7 = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, M7 = (e, o, r, i) => {
  if (r.toLowerCase() === nl.multi) {
    const u = e.modelValue, c = (f) => {
      e.selectionLimit.value && f.length >= e.selectionLimit.value ? e.selectionLimitReached.value = !0 : e.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(f) {
        f && f.length && c(f);
      },
      hasValue() {
        return !!(u.value && u.value.length);
      },
      selectItem(f) {
        if (u.value && u.value.filter((v) => v[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const p = u.value ? [...u.value, f] : [f];
        i("update:modelValue", p), c(p);
      },
      removeItem(f) {
        const p = u.value.findIndex((v) => {
          if (f[e.textProp.value] === v[e.textProp.value])
            return !0;
        });
        debugger;
        if (p > -1) {
          const v = u.value.slice(0);
          v.splice(p, 1), i("update:modelValue", v), c(v), e.input.value.focus();
        }
      },
      clickedItem() {
        e.query.value = "", e.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const a = e.modelValue;
  return {
    getInitialText() {
      return a.value ? a.value[e.textProp.value] : "";
    },
    handleModelValueChange() {
      e.query.value = this.getInitialText();
    },
    hasValue() {
      return !!a.value;
    },
    selectItem(u) {
      o.active.row = -1, e.forceCloseResults.value = !0, u && u._new && e.allowNew ? i("new", u._new) : i("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const u = e.internalResults.value[o.active.row];
        u && u._new && e.allowNew ? i("new", u._new) : i("update:modelValue", u);
      }
    }
  };
}, B7 = () => {
  const e = Gv({
    row: -1
  }), o = (u) => {
    jv(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === Q.DOWN) {
      if (u.preventDefault(), e.row === -1)
        i(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        i(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === Q.UP) {
      if (u.preventDefault(), e.row === 0)
        i();
      else if (e.row > 0) {
        const f = e.row;
        i(), o(f - 1);
      }
      return !0;
    }
    return !1;
  }, i = () => {
    e.row = -1;
  };
  return { reset: i, handleKeyPress: r, active: e, first: () => {
    e.row = 0;
  } };
}, $7 = (e) => {
  const o = Gv({
    row: -1,
    col: -1
  }), r = (c, f) => {
    jv(() => {
      o.col = f, o.row = c;
    });
  }, i = (c, f) => {
    if (c.keyCode === Q.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const p = o.row, v = o.col;
        a(), r(p + 1, v);
      }
      return !0;
    }
    if (c.keyCode === Q.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const p = o.row, v = o.col;
        a(), r(p - 1, v);
      }
      return !0;
    }
    if (c.keyCode === Q.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const p = o.col, v = o.row;
        a(), r(v, p + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const p = o.row;
        a(), r(p + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === Q.LEFT && o.row !== -1) {
      if (c.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const p = o.row;
        a(), r(p - 1, e.length - 1);
      } else if (o.col > 0) {
        const p = o.col, v = o.row;
        a(), r(v, p - 1);
      }
      return !0;
    }
    if (c.keyCode === Q.END && o.row !== -1) {
      c.preventDefault();
      const p = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : p, e.length - 1), !0;
    }
    if (c.keyCode === Q.HOME && o.row !== -1) {
      c.preventDefault();
      const p = o.row;
      return a(), r(c.ctrlKey ? 0 : p, 0), !0;
    }
    return !1;
  }, a = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: a, handleKeyPress: i, active: o, first: () => {
    a(), r(0, 0);
  } };
}, x7 = No({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: E7,
  props: C7,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== nl.multi;
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
      return Ku(WI);
    },
    minCharIcon() {
      return Ku(JI);
    },
    dropdownIcon() {
      return Ku(el);
    },
    inputAttrs() {
      const e = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let o = "";
      return this.activeChipIndex > -1 && (o = this.activeChipId), this.active.row > -1 && this.showResults && (o = this.resultItemId), this.minChar && e.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": e.join(" "),
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
    activeChipIndex(e) {
      e && this.genActiveChipId(), e > -1 && this.scrollContainer && this.$nextTick(() => {
        Xs(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Xs(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(e), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(e) {
      e && e.length > 0 && this.selectFirst(), this.forceCloseResults = !1, e && e.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (e.some((r) => this.newMatcher(r, this.query, this)) || (e = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...e
      ])), this.internalResults = e;
    },
    showResults(e) {
      const o = this.$refs.menu;
      e && o.calculatePosition && o.calculatePosition();
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
      const o = this.$refs.alert;
      o.textContent = e, setTimeout(() => {
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
    handleTextInput(e) {
      this.adjustTextArea();
      const r = e.target.value;
      r !== void 0 && (Dr(this.typingTimeout), this.typingTimeout = Nr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === Q.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === Q.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const i = this.modelValue;
        this.removeFromValue(i[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === Q.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === Q.ENTER || e.keyCode === Q.SPACE || e.keyCode === Q.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === Q.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const i = this.modelValue;
        e.keyCode === Q.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = i.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === Q.RIGHT && (e.preventDefault(), this.activeChipIndex === i.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < i.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === Q.DELETE || e.keyCode === Q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(i[this.activeChipIndex]), r(), o());
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
        const o = e.getBoundingClientRect().width, r = e.parentElement;
        e.scrollWidth <= e.clientWidth && r && o < r.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, o) {
    const r = Ga(Qu(e, "labels"), Qv);
    Js(e), ad(e);
    let i;
    e.gridConfig ? i = $7(e.gridConfig) : i = B7();
    const a = Qu(e, "id"), u = wp(() => a.value ? a.value : ie("feather-autocomplete-input")), { validate: c } = js(u, Qu(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: p, textProp: v, allowNew: m, type: _, minChar: V } = YS(e), $ = ao(!1), M = ao(!1), T = ao(!1), D = ao(""), N = ao([]), k = ao(), S = wp(() => k.value), O = () => {
      $.value && !M.value && (D.value && D.value.length >= V.value && o.emit("search", D.value), V.value <= 0 && o.emit("search", D.value || ""), N.value = [], i.reset());
    }, x = M7({
      selectionLimit: f,
      selectionLimitReached: M,
      modelValue: p,
      textProp: v,
      allowNew: m,
      forceCloseResults: T,
      query: D,
      internalResults: N,
      input: S,
      emitSearch: O
    }, i, _.value, o.emit);
    return XS(Mt(Mt({}, r), Ks(o.attrs)), {
      query: D,
      internalResults: N,
      selectionLimitReached: M,
      forceCloseResults: T,
      hasFocus: $,
      strategy: x,
      emitSearch: O,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: u,
      input: k,
      incomingId: a,
      inputRef: S,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: sd,
    InputSubText: Gs,
    AutocompleteResults: t7,
    AutocompleteResultsGrid: c7,
    Chip: w7,
    MenuMessage: A7,
    FeatherIcon: Z,
    FeatherMenu: Zv,
    Spinner: b7
  }
}), I7 = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, S7 = ["id"], T7 = { "data-ref-id": "feather-autocomplete-no-results" }, P7 = { "data-ref-id": "feather-autocomplete-selection-limit" }, k7 = { "data-ref-id": "feather-autocomplete-min-char" };
function N7(e, o, r, i, a, u) {
  const c = Ie("FeatherIcon"), f = Ie("Chip"), p = Ie("InputWrapper"), v = Ie("AutocompleteResults"), m = Ie("AutocompleteResultsGrid"), _ = Ie("MenuMessage"), V = Ie("Spinner"), $ = Ie("FeatherMenu"), M = Ie("InputSubText");
  return se(), ke("div", Ju(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    ft($, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: kr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: T, on: D }) => [
        ft(p, Ju(Mt(Mt({}, T), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, vp(D), { ref: "scroll" }), {
          pre: Ge(() => [
            zc(e.$slots, "pre", {}, () => [
              ft(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            ft(c, {
              icon: e.dropdownIcon,
              class: kr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            dt("div", {
              class: kr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              dt("div", I7, null, 512),
              dt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, en(e.selectedDescribedByText), 9, S7),
              (se(!0), ke(Eo, null, Os(e.modelValueList, (N, k) => ta((se(), Lt(f, {
                key: N[e.textProp],
                role: "button",
                id: k === e.activeChipIndex ? e.activeChipId : null,
                focused: k === e.activeChipIndex,
                disabled: e.disabled,
                text: N[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(N),
                onDelete: (S) => e.removeFromValue(N)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [na, !e.singleSelect]
              ])), 128)),
              dt("textarea", Ju(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, vp(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        e.gridConfig ? zt("", !0) : ta((se(), Lt(v, {
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
          [na, e.showResults]
        ]),
        e.gridConfig ? ta((se(), Lt(m, {
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
          [na, e.showResults]
        ]) : zt("", !0),
        e.showNoResults ? (se(), Lt(_, { key: 2 }, {
          default: Ge(() => [
            dt("span", T7, en(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : zt("", !0),
        e.showSelectionLimit ? (se(), Lt(_, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            ft(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            dt("span", P7, en(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : zt("", !0),
        e.minChar ? ta((se(), Lt(_, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Ge(() => [
            ft(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            dt("span", k7, [
              zc(e.$slots, "min-char", {}, () => [
                Hv(en(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [na, e.showMinCharWarning]
        ]) : zt("", !0),
        e.showLoading ? (se(), Lt(V, { key: 5 })) : zt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    ft(M, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var D7 = /* @__PURE__ */ Lr(x7, [["render", N7], ["__scopeId", "data-v-43a7e951"]]);
var O7 = Object.defineProperty, L7 = Object.defineProperties, z7 = Object.getOwnPropertyDescriptors, mp = Object.getOwnPropertySymbols, q7 = Object.prototype.hasOwnProperty, R7 = Object.prototype.propertyIsEnumerable, gp = (e, o, r) => o in e ? O7(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ma = (e, o) => {
  for (var r in o || (o = {}))
    q7.call(o, r) && gp(e, r, o[r]);
  if (mp)
    for (var r of mp(o))
      R7.call(o, r) && gp(e, r, o[r]);
  return e;
}, Jv = (e, o) => L7(e, z7(o));
const em = window.Vue.defineComponent, W7 = window.Vue.ref, Ls = window.Vue.computed, F7 = window.Vue.reactive, _p = window.Vue.watch, ec = window.Vue.inject, tm = window.Vue.resolveComponent, qc = window.Vue.openBlock, nm = window.Vue.createElementBlock, nr = window.Vue.createElementVNode, X7 = window.Vue.createBlock, Z7 = window.Vue.createCommentVNode, rm = window.Vue.renderSlot, U7 = window.Vue.pushScopeId, Y7 = window.Vue.popScopeId, tc = window.Vue.toRef, Vp = window.Vue.mergeProps, H7 = window.Vue.toDisplayString, G7 = window.Vue.createVNode;
var om = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const j7 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, K7 = em({
  props: j7,
  setup(e) {
    const o = W7(), r = () => {
      o.value.focus();
    }, i = Ls(() => ie("feather-radio-button")), a = F7({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), u = Ls(() => ie("radio-label-id")), c = Ls(() => a.first || a.checked ? 0 : -1);
    _p(() => e.disabled, (_) => {
      a.disabled = _;
    }, { immediate: !0 }), _p(() => e.value, (_) => {
      a.value = _;
    }, { immediate: !0 });
    const f = ec("register", (_) => {
    }), p = ec("blur", (_) => {
    }), v = ec("select", (_) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: p,
      click: () => {
        v(a);
      },
      input: o,
      id: i
    };
  },
  components: {
    FeatherRipple: rr
  }
}), Q7 = (e) => (U7("data-v-24790cf0"), e = e(), Y7(), e), J7 = { class: "layout-container" }, eT = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], tT = { class: "radio hover focus" }, nT = /* @__PURE__ */ Q7(() => /* @__PURE__ */ nr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ nr("svg", { class: "dot" }, [
    /* @__PURE__ */ nr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), rT = ["id"];
function oT(e, o, r, i, a, u) {
  const c = tm("feather-ripple");
  return qc(), nm("div", J7, [
    nr("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: e.id,
      "aria-checked": e.vm.checked ? "true" : "false",
      "aria-disabled": e.vm.disabled ? "true" : "false",
      "aria-labelledby": e.labelId,
      tabindex: e.tabindex,
      onClick: o[0] || (o[0] = (...f) => e.click && e.click(...f)),
      onBlur: o[1] || (o[1] = (...f) => e.blur && e.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      nr("div", tT, [
        nT,
        e.vm.disabled ? Z7("", !0) : (qc(), X7(c, {
          key: 0,
          center: ""
        }))
      ]),
      nr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        rm(e.$slots, "default", {}, void 0, !0)
      ], 8, rT)
    ], 40, eT)
  ]);
}
var Tn = /* @__PURE__ */ om(K7, [["render", oT], ["__scopeId", "data-v-24790cf0"]]);
const sT = Jv(Ma({}, Qs), {
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
}), iT = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, aT = em({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: sT,
  emits: iT,
  setup(e, o) {
    Js(e);
    const r = tc(e, "error"), i = tc(e, "modelValue"), a = Ls(() => ie("feather-input-description")), u = Ls(() => {
      const c = Jv(Ma({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Ma(Ma({
      descriptionId: a,
      attrs: u
    }, zv(i, o.emit, e.label, e.schema, tc(e, "error"))), Ks(o.attrs));
  },
  components: {
    InputSubText: Gs
  }
}), lT = ["for"], uT = ["id"];
function cT(e, o, r, i, a, u) {
  const c = tm("InputSubText");
  return qc(), nm("div", Vp(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    nr("label", {
      for: e.groupId,
      class: "group-label"
    }, H7(e.label), 9, lT),
    nr("div", Vp(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      rm(e.$slots, "default", {}, void 0, !0)
    ], 16, uT),
    G7(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Zs = /* @__PURE__ */ om(aT, [["render", cT], ["__scopeId", "data-v-6775aeb9"]]);
const dT = window.Vue.defineComponent, fT = window.Vue.renderList, AT = window.Vue.Fragment, yp = window.Vue.openBlock, hT = window.Vue.createElementBlock, pT = window.Vue.toDisplayString, wT = window.Vue.createTextVNode, bp = window.Vue.unref, Cp = window.Vue.withCtx, vT = window.Vue.createVNode, mT = window.Vue.createBlock, gT = window.Vue.watch, _T = window.Vue.ref, VT = /* @__PURE__ */ dT({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: o }) {
    const r = e, i = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], a = _T(r.preSelected || i[0].id);
    return gT(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (yp(), mT(bp(Zs), {
      label: "",
      modelValue: a.value,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (f) => a.value = f),
        c[1] || (c[1] = (f) => o("filter-date-selected", a.value))
      ],
      vertical: "",
      hodeLabel: "",
      class: "radio-dates"
    }, {
      default: Cp(() => [
        (yp(), hT(AT, null, fT(i, (f) => vT(bp(Tn), {
          value: f.id,
          key: f.id
        }, {
          default: Cp(() => [
            wT(pT(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const yT = /* @__PURE__ */ re(VT, [["__scopeId", "data-v-0363302c"]]);
var bT = Object.defineProperty, CT = Object.defineProperties, ET = Object.getOwnPropertyDescriptors, Ep = Object.getOwnPropertySymbols, MT = Object.prototype.hasOwnProperty, BT = Object.prototype.propertyIsEnumerable, Mp = (e, o, r) => o in e ? bT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, As = (e, o) => {
  for (var r in o || (o = {}))
    MT.call(o, r) && Mp(e, r, o[r]);
  if (Ep)
    for (var r of Ep(o))
      BT.call(o, r) && Mp(e, r, o[r]);
  return e;
}, Bp = (e, o) => CT(e, ET(o));
const $T = window.Vue.defineComponent, xT = window.Vue.inject, hs = window.Vue.h;
var IT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ST = {
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
}, TT = $T({
  inheritAttrs: !1,
  props: ST,
  setup() {
    return { hasTooltip: xT("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const p = ["btn", "hover", "focus", f];
      return this.icon && (p.push("btn-icon"), p.push("btn-icon-table")), this.onColor && p.push("on-color"), p;
    }, o = this.asAnchor ? "a" : "button", r = {}, i = As({}, this.$attrs);
    r.attrs = i || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = hs(rr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), hs(o, Bp(As(As({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : hs(rr, { center: !0 })
      ]);
    }
    const c = hs("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return hs(o, Bp(As(As({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var le = /* @__PURE__ */ IT(TT, [["__scopeId", "data-v-702d1074"]]);
const PT = window.Vue.openBlock, kT = window.Vue.createElementBlock, NT = window.Vue.createElementVNode;
var DT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const OT = {}, LT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zT = /* @__PURE__ */ NT("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), qT = [
  zT
];
function RT(e, o) {
  return PT(), kT("svg", LT, qT);
}
var WT = /* @__PURE__ */ DT(OT, [["render", RT]]);
const FT = window.Vue.openBlock, XT = window.Vue.createElementBlock, ZT = window.Vue.createElementVNode;
var UT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const YT = {}, HT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GT = /* @__PURE__ */ ZT("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), jT = [
  GT
];
function KT(e, o) {
  return FT(), XT("svg", HT, jT);
}
var QT = /* @__PURE__ */ UT(YT, [["render", KT]]);
const JT = window.Vue.openBlock, eP = window.Vue.createElementBlock, tP = window.Vue.createElementVNode;
var nP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const rP = {}, oP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sP = /* @__PURE__ */ tP("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), iP = [
  sP
];
function aP(e, o) {
  return JT(), eP("svg", oP, iP);
}
var sm = /* @__PURE__ */ nP(rP, [["render", aP]]);
const lP = window.Vue.defineComponent, cn = window.Vue.unref, gr = window.Vue.createVNode, $p = window.Vue.toDisplayString, Sn = window.Vue.createElementVNode, im = window.Vue.createTextVNode, xp = window.Vue.openBlock, Ip = window.Vue.createElementBlock, uP = window.Vue.createCommentVNode, cP = window.Vue.withCtx, dP = window.Vue.vShow, fP = window.Vue.normalizeClass, AP = window.Vue.withDirectives, hP = window.Vue.Fragment, pP = window.Vue.pushScopeId, wP = window.Vue.popScopeId, am = (e) => (pP("data-v-6c389100"), e = e(), wP(), e), vP = /* @__PURE__ */ im(" Filters "), mP = { class: "count" }, gP = { class: "results" }, _P = { class: "total" }, VP = /* @__PURE__ */ im(" Reset "), yP = /* @__PURE__ */ am(() => /* @__PURE__ */ Sn("div", { class: "title" }, "By Severities:", -1)), bP = /* @__PURE__ */ am(() => /* @__PURE__ */ Sn("div", { class: "title" }, "By Start Date:", -1)), _r = window.Vue.ref, CP = window.Vue.reactive, EP = window.Vue.markRaw, Sp = window.Vue.watch, MP = /* @__PURE__ */ lP({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, i = EP({
      FilterAlt: WT,
      ExpandLess: QT,
      ExpandMore: el,
      Refresh: sm
    }), a = rn(), u = _r(r.isOpen), c = _r(["all"]), f = _r(1), p = _r(r.list), v = _r(!1), m = _r(0), _ = _r(null), V = CP({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), $ = () => {
      var q, L;
      r.saveFilters && a.filters && (a.filters.node && (V.nodeSelectedValue = a.filters.node), ((q = a.filters) == null ? void 0 : q.severities) && !((L = a.filters) != null && L.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, S());
    }, M = () => {
      V.nodes = a.nodes, V.results = a.nodes;
    };
    Sp(
      () => a.nodes,
      () => {
        M();
      }
    ), Sp(r, () => {
      p.value = r.list, $();
    });
    const T = (q) => {
      c.value = q, S();
    }, D = (q) => {
      f.value = q, S();
    }, N = (q) => {
      if (!q)
        return V.nodeSelectedValue = void 0, [];
      v.value = !0, V.results = V.nodes.filter((L) => L.label.toLowerCase().indexOf(q) > -1).map((L) => ({
        _text: L.label,
        id: L.id
      })), v.value = !1;
    }, k = () => {
      c.value = ["all"], f.value = 1, V.nodeSelectedValue = void 0, m.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), p.value = r.list;
    }, S = () => {
      m.value = 0;
      let q = r.list;
      V.nodeSelectedValue && V.nodeSelectedValue._text && (m.value++, r.isSituation ? q = q.map((L) => {
        if (L.relatedAlarms.filter(
          (fe) => {
            var ve;
            return fe.nodeLabel === ((ve = V.nodeSelectedValue) == null ? void 0 : ve._text);
          }
        ).length > 0)
          return L;
      }).filter((L) => L) : q = q.filter(
        (L) => {
          var F;
          return L.nodeLabel === ((F = V.nodeSelectedValue) == null ? void 0 : F._text);
        }
      )), c.value.includes("all") || (m.value++, q = q.filter(
        (L) => c.value.includes(L.severity)
      )), f.value !== 1 && (m.value++, q = CM(
        f.value,
        q
      )), p.value = q, r.saveFilters && O(), o("filtered-list", q);
    }, O = () => {
      a.filters = {
        node: V.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, x = () => {
      u.value = !u.value;
    };
    return (q, L) => (xp(), Ip(hP, null, [
      r.isOpen ? uP("", !0) : (xp(), Ip("div", {
        key: 0,
        class: "btn-filter",
        onClick: x
      }, [
        Sn("div", null, [
          gr(cn(Z), {
            icon: cn(i).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          vP,
          Sn("span", mP, $p(m.value), 1)
        ]),
        gr(cn(Z), {
          icon: u.value ? cn(i).ExpandLess : cn(i).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      AP(Sn("div", {
        class: fP(["filters", { collapsed: !r.isOpen }])
      }, [
        Sn("div", gP, [
          Sn("div", _P, "Results: " + $p(cn(p).length), 1),
          gr(cn(le), {
            class: "btn-reset",
            onClick: k
          }, {
            default: cP(() => [
              gr(cn(Z), {
                icon: cn(i).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              VP
            ]),
            _: 1
          })
        ]),
        Sn("div", null, [
          gr(cn(D7), {
            ref_key: "autocomplete",
            ref: _,
            label: "Find by node",
            loading: v.value,
            modelValue: V.nodeSelectedValue,
            "onUpdate:modelValue": [
              L[0] || (L[0] = (F) => V.nodeSelectedValue = F),
              S
            ],
            results: V.results,
            type: "single",
            onSearch: N
          }, null, 8, ["loading", "modelValue", "results"]),
          yP,
          gr(oI, {
            alarms: r.list,
            onSelectedOption: T,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Sn("div", null, [
            bP,
            gr(yT, {
              onFilterDateSelected: D,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [dP, u.value]
      ])
    ], 64));
  }
});
const Do = /* @__PURE__ */ re(MP, [["__scopeId", "data-v-6c389100"]]), BP = window.Vue.openBlock, $P = window.Vue.createElementBlock, xP = window.Vue.createElementVNode;
var IP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const SP = {}, TP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PP = /* @__PURE__ */ xP("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), kP = [
  PP
];
function NP(e, o) {
  return BP(), $P("svg", TP, kP);
}
var rl = /* @__PURE__ */ IP(SP, [["render", NP]]);
const DP = window.Vue.openBlock, OP = window.Vue.createElementBlock, lm = window.Vue.createElementVNode;
var LP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const zP = {}, qP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RP = /* @__PURE__ */ lm("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), WP = /* @__PURE__ */ lm("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), FP = [
  RP,
  WP
];
function XP(e, o) {
  return DP(), OP("svg", qP, FP);
}
var ZP = /* @__PURE__ */ LP(zP, [["render", XP]]);
const UP = window.Vue.openBlock, YP = window.Vue.createElementBlock, HP = window.Vue.createElementVNode;
var GP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jP = {}, KP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QP = /* @__PURE__ */ HP("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), JP = [
  QP
];
function ek(e, o) {
  return UP(), YP("svg", KP, JP);
}
var tk = /* @__PURE__ */ GP(jP, [["render", ek]]);
const vn = () => window.VRouter || c1;
const nk = window.Vue.openBlock, rk = window.Vue.createElementBlock, ok = window.Vue.pushScopeId, sk = window.Vue.popScopeId, Tp = window.Vue.createElementVNode;
var ik = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ak = {}, lk = (e) => (ok("data-v-2263be39"), e = e(), sk(), e), uk = { class: "spinner-container" }, ck = /* @__PURE__ */ lk(() => /* @__PURE__ */ Tp("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Tp("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), dk = [
  ck
];
function fk(e, o) {
  return nk(), rk("div", uk, dk);
}
var Ad = /* @__PURE__ */ ik(ak, [["render", fk], ["__scopeId", "data-v-2263be39"]]);
const Ak = window.Vue.defineComponent, nc = window.Vue.unref, hk = window.Vue.createVNode, pk = window.Vue.createElementVNode, wk = window.Vue.withCtx, vk = window.Vue.openBlock, mk = window.Vue.createBlock, gk = window.Vue.pushScopeId, _k = window.Vue.popScopeId, Vk = (e) => (gk("data-v-54165b25"), e = e(), _k(), e), yk = /* @__PURE__ */ Vk(() => /* @__PURE__ */ pk("span", null, "New Situation", -1)), bk = window.Vue.markRaw, Ck = /* @__PURE__ */ Ak({
  __name: "NewSituationBtn",
  setup(e) {
    const o = vn(), r = bk({
      Add: rl
    }), i = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (vk(), mk(nc(le), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: wk(() => [
        hk(nc(Z), {
          icon: nc(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        yk
      ]),
      _: 1
    }));
  }
});
const um = /* @__PURE__ */ re(Ck, [["__scopeId", "data-v-54165b25"]]), Ek = "/whoami", Mk = async () => {
  try {
    const e = await nn.get(Ek);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, hd = "/alec", cm = "/alec/engine/configuration", dm = "/alec/agreement/configuration", Bk = "/alec/situation", fm = async (e) => {
  try {
    return (await nn.post(`${dm}`, {
      agreed: e
    })).status === 201;
  } catch {
    return !1;
  }
}, $k = async () => {
  try {
    const e = await nn.get(`${dm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, xk = async () => {
  try {
    const e = await nn.get(`${cm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Am = async (e, o) => {
  try {
    return (await nn.post(cm, {
      distanceMeasureName: o ? Se.HELLINGER_OPTION : Se.SPACE_DISTANCE_OPTION,
      engineName: e,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, hm = async (e, o) => {
  try {
    return (await nn.post(`${hd}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Pp = async (e, o) => {
  try {
    return (await nn.delete(`${hd}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, pm = async (e, o) => {
  try {
    return (await nn.put(`${hd}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, Ik = async (e) => {
  try {
    return (await nn.post(Bk, e)).status === 200;
  } catch {
    return !1;
  }
}, Sk = window.Pinia.defineStore, Nn = Sk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await Mk();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await $k();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async getEngineInfo() {
      const e = await xk();
      e && (this.engineInfo = e);
    },
    async savePermission(e) {
      await fm(e) && (this.allowSave = e);
    }
  }
}), Tk = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", Pk = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", kk = window.Vue.defineComponent, Vr = window.Vue.unref, ra = window.Vue.createElementVNode, ps = window.Vue.openBlock, ws = window.Vue.createElementBlock, wm = window.Vue.createTextVNode, Nk = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Dk = { class: "info-engine" }, Ok = ["src"], Lk = /* @__PURE__ */ wm(" ENGINE "), zk = {
  key: 0,
  class: "type"
}, qk = {
  key: 1,
  class: "type"
}, Rk = /* @__PURE__ */ wm(" OPT-IN "), Wk = {
  key: 0,
  class: "optin-on"
}, Fk = {
  key: 1,
  class: "optin-off"
}, Xk = /* @__PURE__ */ kk({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = vn(), r = Nn(), i = () => {
      o.push({
        name: "settings"
      });
    };
    return (a, u) => {
      var c, f;
      return ps(), ws(Nk, null, [
        ra("div", Dk, [
          ra("img", {
            src: ((c = Vr(r).engineInfo) == null ? void 0 : c.engineName) == Vr(Se).ENGINE_DBSCAN ? Vr(Pk) : Vr(Tk),
            class: "icon-type"
          }, null, 8, Ok),
          ra("div", {
            class: "engine",
            onClick: i
          }, [
            Lk,
            ((f = Vr(r).engineInfo) == null ? void 0 : f.engineName) == Vr(Se).ENGINE_DBSCAN ? (ps(), ws("div", zk, " CLUSTERING ")) : (ps(), ws("div", qk, "DEEP LEARNING"))
          ])
        ]),
        ra("div", {
          class: "optin",
          onClick: i
        }, [
          Rk,
          Vr(r).allowSave ? (ps(), ws("div", Wk, "ON")) : (ps(), ws("div", Fk, "OFF"))
        ])
      ], 64);
    };
  }
});
const Zk = /* @__PURE__ */ re(Xk, [["__scopeId", "data-v-0ab92dc3"]]), Uk = window.Vue.defineComponent, dn = window.Vue.createElementVNode, vs = window.Vue.unref, yr = window.Vue.createVNode, Yk = window.Vue.withCtx, oa = window.Vue.toDisplayString, Hn = window.Vue.openBlock, Hk = window.Vue.createBlock, rc = window.Vue.createCommentVNode, Gk = window.Vue.renderList, jk = window.Vue.Fragment, br = window.Vue.createElementBlock, Kk = window.Vue.pushScopeId, Qk = window.Vue.popScopeId, vm = (e) => (Kk("data-v-350397cb"), e = e(), Qk(), e), Jk = { class: "list-main" }, eN = { class: "header" }, tN = /* @__PURE__ */ vm(() => /* @__PURE__ */ dn("h2", null, "Situation List", -1)), nN = { class: "link-btns" }, rN = /* @__PURE__ */ vm(() => /* @__PURE__ */ dn("span", null, "View Unassociated Alarms", -1)), oN = { class: "content" }, sN = { class: "left-filters" }, iN = { class: "container" }, aN = { class: "autocomplete" }, lN = { key: 1 }, uN = {
  key: 0,
  class: "situation-list"
}, cN = {
  key: 1,
  class: "container empty"
}, dN = {
  key: 2,
  class: "footer-pager"
}, fN = window.Vue.reactive, ms = window.Vue.ref, AN = window.Vue.watch, hN = window.Vue.markRaw, pN = /* @__PURE__ */ Uk({
  __name: "SituationList",
  setup(e) {
    const o = hN({
      Add: rl,
      View: ZP,
      Settings: tk
    }), r = vn(), i = rn(), a = Nn();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = fN({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = ms(!0), p = ms(0), v = ms(1), m = ms(0), _ = ms(!1), V = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    AN(
      () => i.situations,
      () => {
        f.value = !1, V(), D(i.situations);
      }
    );
    const $ = (k) => {
      p.value = k, c.situations = c.allSituations[p.value];
    }, M = (k) => {
      r.push({
        name: "situationDetail",
        params: {
          id: k
        }
      });
    }, T = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, D = (k) => {
      m.value = k.length, c.allSituations = de.exports.chunk(k, u);
      const S = k.map((O) => O.id);
      i.filteredSituations = S, p.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, N = (k) => {
      k.length ? D(k) : c.situations = [];
    };
    return (k, S) => (Hn(), br("div", Jk, [
      dn("div", eN, [
        tN,
        dn("div", nN, [
          yr(vs(le), {
            class: "view-situation-btn",
            onClick: S[0] || (S[0] = () => T())
          }, {
            default: Yk(() => [
              yr(vs(Z), {
                icon: vs(o).View,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              rN
            ]),
            _: 1
          }),
          yr(um),
          yr(Zk)
        ])
      ]),
      dn("div", oN, [
        dn("div", sN, [
          yr(Do, {
            list: vs(i).situations,
            onFilteredList: N,
            isOpen: "",
            isSituation: "",
            saveFilters: ""
          }, null, 8, ["list"])
        ]),
        dn("div", iN, [
          dn("div", aN, [
            dn("div", null, " Result: " + oa(c.situations.length) + " of " + oa(m.value), 1)
          ]),
          f.value ? (Hn(), Hk(vs(Ad), {
            key: 0,
            class: "spinner"
          })) : (Hn(), br("div", lN, [
            c.situations && c.situations.length > 0 ? (Hn(), br("div", uN, [
              (Hn(!0), br(jk, null, Gk(c.situations, (O) => (Hn(), br("div", {
                class: "card",
                key: O.id
              }, [
                yr(kv, {
                  onClick: () => M(O.id),
                  "situation-info": O
                }, null, 8, ["onClick", "situation-info"])
              ]))), 128))
            ])) : rc("", !0),
            !c.situations || c.situations.length == 0 ? (Hn(), br("div", cN, " No results found ")) : rc("", !0),
            !_.value && m.value > u ? (Hn(), br("div", dN, [
              dn("div", null, "Page: " + oa(p.value + 1) + " of " + oa(v.value), 1),
              yr(kB, {
                onGoToPage: $,
                currentPage: p.value,
                totalPages: v.value
              }, null, 8, ["currentPage", "totalPages"])
            ])) : rc("", !0)
          ]))
        ])
      ])
    ]));
  }
});
const wN = /* @__PURE__ */ re(pN, [["__scopeId", "data-v-350397cb"]]);
const sa = window.Vue.ref, vN = window.Vue.inject, mN = window.Vue.computed, gN = window.Vue.onMounted, mm = {
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
}, gm = (e) => {
  const o = sa(!1), r = sa(), i = sa(e.controls), a = sa(e.id), u = () => {
    r.value && r.value.focus();
  }, c = vN("registerTab");
  gN(() => {
    if (r.value && c) {
      const p = r.value.parentElement, v = p && p.parentElement ? p.parentElement : void 0, m = Array.from(v ? v.children : []).filter((V) => V.querySelectorAll("[role=tab]").length), _ = p ? m.indexOf(p) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: o,
        id: a,
        controls: i,
        index: _
      });
    }
  });
  const f = mN(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: a.value,
    "aria-selected": o.value,
    "aria-controls": i.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: f,
    tab: r
  };
}, kp = window.Vue.ref, _N = window.Vue.toRef, VN = window.Vue.watch, Np = window.Vue.provide, _m = {
  prop: "modelValue",
  event: "update:modelValue"
}, Vm = {
  "update:modelValue": (e) => !0
}, ym = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, bm = (e, o) => {
  const r = _N(e, "modelValue"), i = kp(e.modelValue), a = kp([]);
  VN(r, (M) => {
    p(M);
  });
  const u = (M) => {
    M.preventDefault(), a.value.some((T, D) => T.tab && T.tab.el.contains(M.target) ? (f(D), p(D), !0) : !1);
  }, c = (M) => {
    if (((F) => F.shiftKey || F.ctrlKey || F.metaKey || F.altKey)(M))
      return;
    const D = M.keyCode, N = (F) => {
      F.stopPropagation(), F.preventDefault();
    }, k = a.value.filter((F) => F.tab && !F.tab.disabled), S = a.value.findIndex((F) => F.tab && F.tab.el.contains(document.activeElement));
    let O = S !== -1 ? S : i.value;
    const x = [Q.RIGHT], q = [Q.LEFT], L = [Q.ENTER, Q.SPACE];
    e.vertical && (x.push(Q.DOWN), q.push(Q.UP)), x.indexOf(D) > -1 ? (O++, O >= k.length && (O = 0), N(M), f(a.value.indexOf(k[O]))) : q.indexOf(D) > -1 && (O--, O < 0 && (O = k.length - 1), N(M), f(a.value.indexOf(k[O]))), L.indexOf(D) > -1 && p(O);
  }, f = (M) => {
    a.value.forEach(function(T, D) {
      M === D && T.tab && T.tab.focus();
    });
  }, p = (M) => {
    const T = a.value[M];
    !T || T.tab && T.tab.disabled || (a.value.forEach((D, N) => {
      D.tab && (D.tab.selected = M === N), D.panel && (D.panel.selected = M === N);
    }), i.value = M, o.emit("update:modelValue", M));
  };
  Np("registerTab", (M) => {
    const T = M.index;
    T > -1 && (a.value[T] = { ...a.value[T], tab: M }, a.value = [...a.value], _());
  }), Np("registerPanel", (M) => {
    const T = M.index;
    T > -1 && (a.value[T] = {
      ...a.value[T],
      panel: M
    }, a.value = [...a.value], _());
  });
  const _ = () => {
    a.value.forEach(({ tab: M, panel: T }, D) => {
      if (T && M) {
        const N = M.id || ie("tab"), k = M.controls || ie("panel");
        M.controls = k, M.id = N, T.tab = N, T.id = k;
      }
      D === i.value && (T && (T.selected = !0), M && (M.selected = !0));
    });
  };
  return {
    listeners: {
      click: u,
      keydown: c
    },
    attrs: {
      role: "tablist"
    },
    selected: i,
    pairs: a
  };
}, ia = window.Vue.ref, yN = window.Vue.inject, bN = window.Vue.computed, CN = window.Vue.onMounted, Cm = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, Em = (e) => {
  const o = ia(!1), r = ia(), i = ia(e.tab), a = ia(e.id), u = yN("registerPanel");
  CN(() => {
    if (u) {
      const f = r.value, p = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(p ? p.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: i,
        el: r.value,
        index: v
      });
    }
  });
  const c = bN(() => ({
    role: "tabpanel",
    id: a.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": i.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: c,
    panel: r
  };
}, pd = window.Vue.defineComponent, EN = window.Vue.resolveComponent, wd = window.Vue.openBlock, vd = window.Vue.createElementBlock, zs = window.Vue.createElementVNode, Mm = window.Vue.mergeProps, za = window.Vue.renderSlot, MN = window.Vue.createVNode, BN = window.Vue.normalizeStyle, $N = window.Vue.toHandlers, xN = window.Vue.withDirectives, IN = window.Vue.normalizeProps, SN = window.Vue.guardReactiveProps, TN = window.Vue.vShow;
var md = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const PN = mm, kN = pd({
  props: PN,
  setup(e) {
    return gm(e);
  },
  components: {
    FeatherRipple: rr
  }
}), NN = { role: "presentation" }, DN = { class: "tab-text" };
function ON(e, o, r, i, a, u) {
  const c = EN("FeatherRipple");
  return wd(), vd("li", NN, [
    zs("button", Mm(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      zs("span", DN, [
        za(e.$slots, "default", {}, void 0, !0)
      ]),
      MN(c)
    ], 16)
  ]);
}
var Dp = /* @__PURE__ */ md(kN, [["render", ON], ["__scopeId", "data-v-e6bb52b6"]]);
const LN = ym, zN = Vm, qN = pd({
  model: _m,
  emits: zN,
  props: LN,
  setup(e, o) {
    return bm(e, o);
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
        e && e.length && this.ro && e.forEach((o) => {
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
        const e = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - e.left, i = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${i}px)`;
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
}), RN = { class: "feather-tab-container" }, WN = { class: "tab-panels" };
function FN(e, o, r, i, a, u) {
  return wd(), vd("div", RN, [
    zs("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: BN({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    zs("ul", Mm(e.attrs, $N(e.listeners)), [
      za(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    zs("div", WN, [
      za(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var XN = /* @__PURE__ */ md(qN, [["render", FN], ["__scopeId", "data-v-27adffb9"]]);
const ZN = Cm, UN = pd({
  props: ZN,
  setup(e) {
    return Em(e);
  }
});
function YN(e, o, r, i, a, u) {
  return xN((wd(), vd("div", IN(SN(e.attrs)), [
    za(e.$slots, "default")
  ], 16)), [
    [TN, e.selected]
  ]);
}
var Op = /* @__PURE__ */ md(UN, [["render", YN]]);
const HN = window.Vue.defineComponent, GN = window.Vue.toDisplayString, jN = window.Vue.normalizeClass, KN = window.Vue.openBlock, QN = window.Vue.createElementBlock, JN = window.Vue.createCommentVNode, eD = /* @__PURE__ */ HN({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (KN(), QN("span", {
      key: 0,
      class: jN(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, GN(o.severity), 3)) : JN("", !0);
  }
});
const Bm = /* @__PURE__ */ re(eD, [["__scopeId", "data-v-83c2cdce"]]), tD = window.Vue.defineComponent, Lp = window.Vue.toDisplayString, zp = window.Vue.createElementVNode, nD = window.Vue.openBlock, rD = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oD = { class: "box" }, sD = { class: "label" }, iD = { class: "date" }, aD = /* @__PURE__ */ tD({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (nD(), rD("div", oD, [
      zp("div", sD, Lp(o.label), 1),
      zp("div", iD, Lp(o.info), 1)
    ]));
  }
});
const oc = /* @__PURE__ */ re(aD, [["__scopeId", "data-v-b4afa751"]]), lD = window.Vue.defineComponent, uD = window.Vue.unref, cD = window.Vue.renderList, dD = window.Vue.Fragment, sc = window.Vue.openBlock, ic = window.Vue.createElementBlock, fD = window.Vue.toDisplayString, AD = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const hD = { class: "alarms-list" }, pD = /* @__PURE__ */ lD({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (sc(), ic("div", hD, [
      (sc(!0), ic(dD, null, cD(uD(de.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (sc(), ic("div", {
        class: AD(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, fD(a.length), 3))), 128))
    ]));
  }
});
const wD = /* @__PURE__ */ re(pD, [["__scopeId", "data-v-52d63440"]]), vD = window.Vue.openBlock, mD = window.Vue.createElementBlock, gD = window.Vue.createElementVNode;
var _D = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const VD = {}, yD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bD = /* @__PURE__ */ gD("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), CD = [
  bD
];
function ED(e, o) {
  return vD(), mD("svg", yD, CD);
}
var MD = /* @__PURE__ */ _D(VD, [["render", ED]]);
const BD = window.Vue.openBlock, $D = window.Vue.createElementBlock, xD = window.Vue.createStaticVNode;
var ID = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const SD = {}, TD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PD = /* @__PURE__ */ xD('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), kD = [
  PD
];
function ND(e, o) {
  return BD(), $D("svg", TD, kD);
}
var qa = /* @__PURE__ */ ID(SD, [["render", ND]]);
const DD = window.Vue.defineComponent, Ht = window.Vue.unref, ac = window.Vue.createVNode, gd = window.Vue.createElementVNode, lc = window.Vue.withCtx, aa = window.Vue.openBlock, uc = window.Vue.createBlock, cc = window.Vue.createCommentVNode, OD = window.Vue.normalizeClass, LD = window.Vue.createElementBlock, zD = window.Vue.pushScopeId, qD = window.Vue.popScopeId, _d = (e) => (zD("data-v-e073070b"), e = e(), qD(), e), RD = /* @__PURE__ */ _d(() => /* @__PURE__ */ gd("span", null, "Acknowledge", -1)), WD = /* @__PURE__ */ _d(() => /* @__PURE__ */ gd("span", null, "Escalate", -1)), FD = /* @__PURE__ */ _d(() => /* @__PURE__ */ gd("span", null, "Clear", -1)), XD = /* @__PURE__ */ DD({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = rn(), i = async (u) => {
      await g3(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await hm(
        o.situationId,
        Se.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await _3(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (aa(), LD("div", {
      class: OD(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? cc("", !0) : (aa(), uc(Ht(le), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => i(!0))
      }, {
        default: lc(() => [
          ac(Ht(Z), {
            icon: Ht(xo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          RD
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (aa(), uc(Ht(le), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(Ht(Se).ESCALATE))
      }, {
        default: lc(() => [
          ac(Ht(Z), {
            icon: Ht(MD),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          WD
        ]),
        _: 1
      })) : cc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (aa(), uc(Ht(le), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(Ht(Se).CLEAR))
      }, {
        default: lc(() => [
          ac(Ht(Z), {
            icon: Ht(qa),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          FD
        ]),
        _: 1
      })) : cc("", !0)
    ], 2));
  }
});
const $m = /* @__PURE__ */ re(XD, [["__scopeId", "data-v-e073070b"]]);
var ZD = Object.defineProperty, UD = Object.defineProperties, YD = Object.getOwnPropertyDescriptors, qp = Object.getOwnPropertySymbols, HD = Object.prototype.hasOwnProperty, GD = Object.prototype.propertyIsEnumerable, Rp = (e, o, r) => o in e ? ZD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Rc = (e, o) => {
  for (var r in o || (o = {}))
    HD.call(o, r) && Rp(e, r, o[r]);
  if (qp)
    for (var r of qp(o))
      GD.call(o, r) && Rp(e, r, o[r]);
  return e;
}, xm = (e, o) => UD(e, YD(o));
const Im = window.Vue.defineComponent, jD = window.Vue.inject, KD = window.Vue.resolveComponent, dc = window.Vue.openBlock, Wp = window.Vue.createElementBlock, yo = window.Vue.createElementVNode, QD = window.Vue.createBlock, Fp = window.Vue.createCommentVNode, JD = window.Vue.renderSlot, eO = window.Vue.pushScopeId, tO = window.Vue.popScopeId, fc = window.Vue.toRef, la = window.Vue.computed, nO = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var rO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const oO = {
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
}, sO = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, iO = Im({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: sO,
  props: oO,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: jD("registerCheckbox", (o) => {
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
      (e.keyCode === Q.SPACE || e.keyCode === Q.ENTER) && this.updateValue(), e.keyCode === Q.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: rr
  }
}), aO = (e) => (eO("data-v-a7af27e2"), e = e(), tO(), e), lO = { class: "layout-container" }, uO = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], cO = { class: "checkbox hover focus" }, dO = /* @__PURE__ */ aO(() => /* @__PURE__ */ yo("div", { class: "box" }, [
  /* @__PURE__ */ yo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ yo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ yo("div", { class: "indeterminate" })
], -1)), fO = ["id", "for"];
function AO(e, o, r, i, a, u) {
  const c = KD("feather-ripple");
  return dc(), Wp("div", lO, [
    yo("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...f) => e.click && e.click(...f)),
      onKeydown: o[1] || (o[1] = (...f) => e.keydown && e.keydown(...f)),
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
      yo("div", cO, [
        dO,
        e.disabled ? Fp("", !0) : (dc(), QD(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Fp("", !0) : (dc(), Wp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        JD(e.$slots, "default", {}, void 0, !0)
      ], 8, fO))
    ], 40, uO)
  ]);
}
var Oo = /* @__PURE__ */ rO(iO, [["render", AO], ["__scopeId", "data-v-a7af27e2"]]);
const hO = xm(Rc({}, Qs), {
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
  props: hO,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Js(e);
    const r = fc(e, "error"), i = la(() => ie("feather-checkbox-group")), a = la(() => ie("feather-input-description")), u = la(() => ie("feather-input-label")), c = la(() => {
      const m = JSON.parse(JSON.stringify(o.attrs));
      return m["aria-invalid"] || (m["aria-invalid"] = !!r.value), xm(Rc({}, m), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = nO(i.value), { validate: p } = js(f, fc(e, "modelValue"), e.label, e.schema, fc(e, "error"));
    return Rc({
      groupId: i,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: p,
      registerCheckbox: (m) => {
        m && f.value === i.value && (f.value = m);
      }
    }, Ks(o.attrs));
  },
  components: {
    InputSubText: Gs
  }
});
const pO = window.Vue.openBlock, wO = window.Vue.createElementBlock, Sm = window.Vue.createElementVNode;
var vO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const mO = {}, gO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _O = /* @__PURE__ */ Sm("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), VO = /* @__PURE__ */ Sm("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), yO = [
  _O,
  VO
];
function bO(e, o) {
  return pO(), wO("svg", gO, yO);
}
var CO = /* @__PURE__ */ vO(mO, [["render", bO]]);
var EO = Object.defineProperty, MO = Object.defineProperties, BO = Object.getOwnPropertyDescriptors, Xp = Object.getOwnPropertySymbols, $O = Object.prototype.hasOwnProperty, xO = Object.prototype.propertyIsEnumerable, Zp = (e, o, r) => o in e ? EO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, bo = (e, o) => {
  for (var r in o || (o = {}))
    $O.call(o, r) && Zp(e, r, o[r]);
  if (Xp)
    for (var r of Xp(o))
      xO.call(o, r) && Zp(e, r, o[r]);
  return e;
}, Tm = (e, o) => MO(e, BO(o));
const IO = window.Vue.defineComponent, Ac = window.Vue.toRef, SO = window.Vue.computed, Up = window.Vue.resolveComponent, Yp = window.Vue.openBlock, Hp = window.Vue.createElementBlock, Gp = window.Vue.mergeProps, jp = window.Vue.createVNode, TO = window.Vue.normalizeClass, Kp = window.Vue.withCtx, PO = window.Vue.createElementVNode, kO = window.Vue.toDisplayString, NO = window.Vue.createCommentVNode;
var DO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const OO = Tm(bo(bo({}, id), Qs), {
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
}), LO = {
  "update:modelValue": (e) => !0
}, zO = IO({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: LO,
  props: OO,
  setup(e, o) {
    Js(e), ad(e);
    const r = Ac(e, "id"), i = SO(() => r.value ? r.value : ie("feather-textarea-label")), { validate: a } = js(i, Ac(e, "modelValue"), e.label, e.schema, Ac(e, "error"));
    return bo({
      inputId: i,
      incomingId: r,
      validate: a
    }, Ks(o.attrs));
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
      const e = bo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Tm(bo(bo({}, e), this.listeners), {
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
        const o = e.getBoundingClientRect().width;
        e.scrollWidth <= e.clientWidth && o < e.parentElement.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
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
    InputSubText: Gs,
    InputWrapper: sd
  }
}), qO = ["maxlength"], RO = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function WO(e, o, r, i, a, u) {
  const c = Up("InputWrapper"), f = Up("InputSubText");
  return Yp(), Hp("div", Gp(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    jp(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: TO(["feather-textarea-content", e.contentCls])
    }, {
      default: Kp(() => [
        PO("textarea", Gp(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, qO)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    jp(f, { id: e.descriptionId }, {
      right: Kp(() => [
        e.maxlength ? (Yp(), Hp("div", RO, kO(e.charCount), 1)) : NO("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Wc = /* @__PURE__ */ DO(zO, [["render", WO], ["__scopeId", "data-v-0648df5c"]]);
const FO = window.Pinia.defineStore, ol = FO("appStore", {
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
}), XO = window.Vue.defineComponent, Qp = window.Vue.toDisplayString, gs = window.Vue.createElementVNode, Cr = window.Vue.unref, lo = window.Vue.openBlock, Jp = window.Vue.createBlock, _s = window.Vue.createCommentVNode, ew = window.Vue.createVNode, ua = window.Vue.createElementBlock, ZO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UO = { class: "row" }, YO = { class: "label" }, HO = { class: "action-icons" }, GO = { class: "icon-btn" }, jO = {
  key: 0,
  class: "icon-btn"
}, KO = {
  key: 1,
  class: "icon-btn"
}, QO = {
  key: 0,
  class: "text"
}, JO = window.Vue.watch, tw = window.Vue.ref, e5 = /* @__PURE__ */ XO({
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
    var p;
    const o = e, r = ol(), i = tw(!1), a = tw((p = o.memo) == null ? void 0 : p.body);
    JO(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const u = () => {
      i.value = !i.value;
    }, c = async () => {
      i.value = !1, await B3(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, a.value && a.value !== "" && (await M3(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, m) => (lo(), ua("div", {
      class: ZO([o.boxType === "small" ? "box-small" : "box"])
    }, [
      gs("div", UO, [
        gs("div", YO, Qp(e.label), 1),
        gs("div", HO, [
          gs("div", GO, [
            i.value ? _s("", !0) : (lo(), Jp(Cr(Z), {
              key: 0,
              icon: Cr(CO),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          i.value ? (lo(), ua("div", jO, [
            ew(Cr(Z), {
              icon: Cr(xo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : _s("", !0),
          a.value && a.value != "" || i.value ? (lo(), ua("div", KO, [
            ew(Cr(Z), {
              icon: Cr(Po),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : _s("", !0)
        ])
      ]),
      gs("div", null, [
        !i.value && a.value != null ? (lo(), ua("div", QO, Qp(a.value), 1)) : _s("", !0),
        i.value ? (lo(), Jp(Cr(Wc), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (_) => a.value = _),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : _s("", !0)
      ])
    ], 2));
  }
});
const Ra = /* @__PURE__ */ re(e5, [["__scopeId", "data-v-3f44e250"]]), t5 = window.Vue.defineComponent, Er = window.Vue.unref, uo = window.Vue.createVNode, Vs = window.Vue.toDisplayString, Jt = window.Vue.createElementVNode, nw = window.Vue.openBlock, rw = window.Vue.createElementBlock, ow = window.Vue.createCommentVNode, hc = window.Vue.createTextVNode, n5 = window.Vue.pushScopeId, r5 = window.Vue.popScopeId, Vd = (e) => (n5("data-v-02d1e7f0"), e = e(), r5(), e), o5 = {
  key: 0,
  class: "card"
}, s5 = { class: "row" }, i5 = {
  key: 0,
  class: "ack"
}, a5 = /* @__PURE__ */ Vd(() => /* @__PURE__ */ Jt("strong", null, " Duration: ", -1)), l5 = ["innerHTML"], u5 = /* @__PURE__ */ Vd(() => /* @__PURE__ */ Jt("strong", null, "First Event", -1)), c5 = /* @__PURE__ */ Vd(() => /* @__PURE__ */ Jt("strong", null, "Last Event", -1)), d5 = { class: "section memo-boxes" }, sw = window.Vue.ref, f5 = window.Vue.watch, A5 = /* @__PURE__ */ t5({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, i = sw(!1), a = sw(r.alarm), u = new Date().getTime();
    f5(r, () => {
      a.value = r.alarm, i.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (p) => {
      const v = await Ev(p);
      v && (a.value = v);
    };
    return (p, v) => {
      var m, _, V, $, M;
      return a.value ? (nw(), rw("div", o5, [
        Jt("div", null, [
          Jt("div", s5, [
            uo(Er(Oo), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (T) => i.value = T),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Jt("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                i.value = !i.value, c();
              })
            }, Vs(a.value.nodeLabel) + " - " + Vs(a.value.id), 1),
            uo(Bm, {
              severity: (m = a.value) == null ? void 0 : m.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (nw(), rw("div", i5, [
              uo(Er(Z), {
                icon: Er(xo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : ow("", !0)
          ]),
          Jt("div", null, [
            a5,
            hc(" " + Vs(Er(Ha)(Er(u), new Date(a.value.firstEventTime))), 1)
          ]),
          Jt("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, l5),
          Jt("div", null, [
            u5,
            hc(" - " + Vs(Er(pn)(a.value.firstEventTime)), 1)
          ]),
          Jt("div", null, [
            c5,
            hc(" - " + Vs(Er(pn)(a.value.lastEventTime)), 1)
          ]),
          Jt("div", d5, [
            uo(Ra, {
              id: (_ = a.value) == null ? void 0 : _.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (V = a.value) == null ? void 0 : V.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            uo(Ra, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (M = a.value) == null ? void 0 : M.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        uo($m, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : ow("", !0);
    };
  }
});
const h5 = /* @__PURE__ */ re(A5, [["__scopeId", "data-v-02d1e7f0"]]), p5 = window.Vue.openBlock, w5 = window.Vue.createElementBlock, Pm = window.Vue.createElementVNode;
var v5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const m5 = {}, g5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _5 = /* @__PURE__ */ Pm("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), V5 = /* @__PURE__ */ Pm("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), y5 = [
  _5,
  V5
];
function b5(e, o) {
  return p5(), w5("svg", g5, y5);
}
var Fc = /* @__PURE__ */ v5(m5, [["render", b5]]);
const C5 = window.Vue.watch, E5 = window.Vue.ref, M5 = window.Vue.onBeforeUnmount, km = (e) => {
  const o = E5(!1), r = (i) => {
    i.keyCode === Q.ESCAPE && (i.preventDefault(), o.value = !o.value);
  };
  return C5(e, (i) => {
    i ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), M5(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, B5 = window.Vue.watch, Nm = (e) => {
  let o;
  B5(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, Dm = window.Vue.watch, Om = window.Vue.onBeforeUnmount, Lm = window.Vue.nextTick, $5 = window.Vue.onMounted, zm = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Wa = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, qm = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Om(() => Wa(o, r)), $5(() => Dm(e, (i) => {
    i ? Lm(() => {
      o = zm(r);
    }) : Wa(o, r);
  }, { immediate: !0 }));
}, x5 = (e, o) => {
  let r;
  Om(() => Wa(r, o.value ? o.value.offsetParent : !1)), Dm([e, o], ([i, a]) => {
    i && a ? Lm(() => {
      r = zm(a.offsetParent);
    }) : a && Wa(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var I5 = Object.defineProperty, iw = Object.getOwnPropertySymbols, S5 = Object.prototype.hasOwnProperty, T5 = Object.prototype.propertyIsEnumerable, aw = (e, o, r) => o in e ? I5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, P5 = (e, o) => {
  for (var r in o || (o = {}))
    S5.call(o, r) && aw(e, r, o[r]);
  if (iw)
    for (var r of iw(o))
      T5.call(o, r) && aw(e, r, o[r]);
  return e;
};
const yd = window.Vue.defineComponent, qs = window.Vue.ref, k5 = window.Vue.nextTick, Rm = window.Vue.openBlock, Wm = window.Vue.createElementBlock, bd = window.Vue.createElementVNode, N5 = window.Vue.renderSlot, D5 = window.Vue.resolveComponent, O5 = window.Vue.normalizeClass, L5 = window.Vue.withModifiers, z5 = window.Vue.createVNode, lw = window.Vue.toRef, uw = window.Vue.computed, cw = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Fm = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const q5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, R5 = yd({
  props: q5,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = qs(), o = qs(!1), r = (m, _) => {
      let V = m.compareDocumentPosition(_);
      if (V === 2)
        return "before";
      if (V === 4)
        return "after";
      if (V === 10 || V === 12)
        return "parent";
    }, i = (m) => {
      for (var _ = 0; _ < m.childNodes.length; _++) {
        var V = m.childNodes[_];
        if (u(V) || i(V))
          return !0;
      }
      return !1;
    }, a = (m) => {
      for (var _ = m.childNodes.length - 1; _ >= 0; _--) {
        var V = m.childNodes[_];
        if (u(V) || a(V))
          return !0;
      }
      return !1;
    }, u = (m) => c(m) ? (o.value = !0, m.focus && m.focus(), o.value = !1, document.activeElement === m) : !1, c = (m) => {
      if (m.tabIndex > 0 || m.tabIndex === 0 && m.getAttribute("tabIndex") !== null)
        return !0;
      const _ = m;
      if (_.disabled || _.tabIndex === -1)
        return !1;
      switch (m.nodeName) {
        case "A":
          const V = m;
          return !!V.href && V.rel !== "ignore";
        case "INPUT":
          const $ = m;
          return $.type !== "hidden" && $.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (m) => {
      const _ = m.querySelector("[first-focus]");
      _ && _.focus ? k5(() => {
        _.focus();
      }) : i(m);
    }, p = qs();
    return {
      trapFocus: () => {
        o.value || setTimeout(() => {
          var m = document.activeElement;
          if (e.value.contains(m)) {
            p.value = m;
            return;
          } else {
            switch (r(e.value, m)) {
              case "before":
                a(e.value);
                break;
              case "after":
                i(e.value);
                break;
              case "parent":
                f(e.value);
                break;
            }
            p.value = document.activeElement;
          }
        }, 0);
      },
      content: e,
      ignoreUtilFocusChanges: o,
      attemptToFocusFirst: f,
      focusLastDescendant: a,
      focusFirstDescendant: i,
      isFocusable: c,
      lastFocus: p
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
}), W5 = /* @__PURE__ */ bd("div", { tabindex: "0" }, null, -1), F5 = {
  class: "focus-trap-content",
  ref: "content"
}, X5 = /* @__PURE__ */ bd("div", { tabindex: "0" }, null, -1);
function Z5(e, o, r, i, a, u) {
  return Rm(), Wm("div", null, [
    W5,
    bd("div", F5, [
      N5(e.$slots, "default")
    ], 512),
    X5
  ]);
}
var Xm = /* @__PURE__ */ Fm(R5, [["render", Z5]]);
const U5 = yd({
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
    icon: () => Po
  },
  components: {
    FeatherIcon: Z
  }
}), Y5 = ["aria-label"];
function H5(e, o, r, i, a, u) {
  const c = D5("FeatherIcon");
  return Rm(), Wm("a", {
    href: "#",
    class: O5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = L5((f) => e.$emit("close"), ["prevent"]))
  }, [
    z5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, Y5);
}
var Zm = /* @__PURE__ */ Fm(U5, [["render", H5], ["__scopeId", "data-v-fc0f3f00"]]);
const Um = {
  title: "REQUIRED",
  close: "Close Dialog"
}, G5 = {
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
    default: () => Um,
    validator: (e) => !!e.title
  }
}, j5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
yd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: j5,
  props: G5,
  setup(e, o) {
    const r = Ga(lw(e, "labels"), Um), i = lw(e, "modelValue"), a = qs(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = uw(() => !!o.slots.footer), f = uw(() => ie("dialog-header"));
    e.relative ? x5(i, a) : qm(i), Nm(i), cw(km(i), () => {
      u();
    });
    const p = qs(e.modelValue);
    return cw(p, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), P5({ close: u, hasFooter: c, headerId: f, element: a, shown: p }, r);
  },
  components: {
    FocusTrap: Xm,
    DialogClose: Zm
  }
});
var K5 = Object.defineProperty, dw = Object.getOwnPropertySymbols, Q5 = Object.prototype.hasOwnProperty, J5 = Object.prototype.propertyIsEnumerable, fw = (e, o, r) => o in e ? K5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, sl = (e, o) => {
  for (var r in o || (o = {}))
    Q5.call(o, r) && fw(e, r, o[r]);
  if (dw)
    for (var r of dw(o))
      J5.call(o, r) && fw(e, r, o[r]);
  return e;
};
const il = window.Vue.defineComponent, Aw = window.Vue.toRef, hw = window.Vue.watch, pw = window.Vue.ref, ww = window.Vue.resolveComponent, ca = window.Vue.openBlock, vw = window.Vue.createBlock, e9 = window.Vue.Teleport, mw = window.Vue.createElementBlock, pc = window.Vue.createVNode, gw = window.Vue.Transition, wc = window.Vue.withCtx, _w = window.Vue.createCommentVNode, t9 = window.Vue.withDirectives, n9 = window.Vue.normalizeStyle, r9 = window.Vue.normalizeClass, Vw = window.Vue.createElementVNode, o9 = window.Vue.renderSlot, s9 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var i9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Ym = {
  title: "REQUIRED",
  close: "Close Dialog"
}, a9 = {
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
    default: () => Ym,
    validator: (e) => !!e.title
  }
}, l9 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, u9 = il({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: l9,
  props: a9,
  setup(e, o) {
    const r = Ga(Aw(e, "labels"), Ym), i = Aw(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    qm(i), Nm(i), hw(km(i), () => {
      a();
    });
    const u = pw(), c = pw(!1);
    return hw(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), sl({ close: a, shown: c, isShown: i, element: u }, r);
  },
  components: {
    DialogClose: Zm,
    FocusTrap: Xm
  }
}), c9 = {
  key: 0,
  class: "drawer-container feather-styles"
}, d9 = {
  key: 0,
  class: "greyedOut"
}, f9 = ["aria-label"], A9 = { class: "slot" };
function h9(e, o, r, i, a, u) {
  const c = ww("dialog-close"), f = ww("focus-trap");
  return ca(), vw(e9, { to: "body" }, [
    e.modelValue ? (ca(), mw("div", c9, [
      pc(gw, { name: "greyOutShim" }, {
        default: wc(() => [
          e.modelValue ? (ca(), mw("div", d9)) : _w("", !0)
        ]),
        _: 1
      }),
      pc(gw, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (p) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (p) => e.shown = !1)
      }, {
        default: wc(() => [
          t9((ca(), vw(f, {
            enable: e.modelValue,
            style: n9({ width: e.width }),
            key: "sect",
            class: r9(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: wc(() => [
              Vw("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Vw("div", A9, [
                  o9(e.$slots, "default", {}, void 0, !0)
                ]),
                pc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, f9)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [s9, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : _w("", !0)
  ]);
}
var Hm = /* @__PURE__ */ i9(u9, [["render", h9], ["__scopeId", "data-v-0a36e1dc"]]);
const p9 = sl({
  label: {
    type: String,
    required: !0
  }
}, mm);
il({
  name: "DrawerTab",
  props: p9,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Nr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Dr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return gm(e);
  },
  components: {
    FeatherRipple: rr
  }
});
const w9 = sl({}, ym), v9 = Vm;
il({
  emits: v9,
  model: _m,
  props: w9,
  setup(e, o) {
    return bm(e, o);
  }
});
const m9 = sl({
  header: {
    type: String
  }
}, Cm);
il({
  name: "DrawerTabContent",
  props: m9,
  setup(e) {
    return Em(e);
  },
  directives: {
    MenuFocusLoop: TI
  }
});
const g9 = window.Vue.defineComponent, Gm = window.Vue.createElementVNode, yw = window.Vue.createVNode, _9 = window.Vue.renderList, V9 = window.Vue.Fragment, ys = window.Vue.openBlock, da = window.Vue.createElementBlock, y9 = window.Vue.unref, b9 = window.Vue.withCtx, C9 = window.Vue.createBlock, E9 = window.Vue.pushScopeId, M9 = window.Vue.popScopeId, B9 = (e) => (E9("data-v-3b3dcbc3"), e = e(), M9(), e), $9 = { class: "content" }, x9 = /* @__PURE__ */ B9(() => /* @__PURE__ */ Gm("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), I9 = {
  key: 0,
  class: "situation-list"
}, S9 = {
  key: 1,
  class: "empty"
}, vc = window.Vue.ref, bw = window.Vue.watch, T9 = /* @__PURE__ */ g9({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, i = rn(), a = vc(r.visible), u = () => {
      let v = i.situations;
      r.situationId !== 0 && (v = i.situations.filter(
        (m) => m.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = vc(i.situations), f = vc(i.situations);
    bw(r, () => {
      a.value = r.visible, u();
    }), bw(
      () => i.situations,
      () => {
        u();
      }
    );
    const p = (v) => {
      f.value = v;
    };
    return (v, m) => (ys(), C9(y9(Hm), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (_) => a.value = _),
        m[1] || (m[1] = (_) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: b9(() => [
        Gm("div", $9, [
          x9,
          yw(Do, {
            list: c.value,
            isSituation: "",
            onFilteredList: p
          }, null, 8, ["list"]),
          f.value.length ? (ys(), da("div", I9, [
            (ys(!0), da(V9, null, _9(f.value, (_) => (ys(), da("div", {
              class: "card",
              key: _.id
            }, [
              yw(kv, {
                onClick: (V) => o("situation-selected", _.id),
                "situation-info": _,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (ys(), da("div", S9, "No results found"))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const jm = /* @__PURE__ */ re(T9, [["__scopeId", "data-v-3b3dcbc3"]]), P9 = window.Vue.defineComponent, Cw = window.Vue.normalizeClass, _o = window.Vue.createElementVNode, fa = window.Vue.unref, k9 = window.Vue.createVNode, Aa = window.Vue.toDisplayString, N9 = window.Vue.createTextVNode, D9 = window.Vue.openBlock, O9 = window.Vue.createElementBlock, L9 = window.Vue.pushScopeId, z9 = window.Vue.popScopeId, q9 = (e) => (L9("data-v-64d0a9ea"), e = e(), z9(), e), R9 = { class: "alarmInfo" }, W9 = { class: "alarm-title" }, F9 = /* @__PURE__ */ q9(() => /* @__PURE__ */ _o("strong", null, " Duration: ", -1)), X9 = { class: "description" }, Z9 = /* @__PURE__ */ P9({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, i = new Date().getTime();
    return (a, u) => (D9(), O9("div", {
      class: Cw(["alarm", { selected: r.selected }])
    }, [
      _o("div", R9, [
        _o("div", {
          class: Cw(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        k9(fa(Oo), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        _o("div", W9, Aa(e.alarm.nodeLabel) + " - " + Aa(e.alarm.id), 1)
      ]),
      _o("div", null, [
        F9,
        N9(" " + Aa(fa(Ha)(fa(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      _o("div", X9, Aa(fa(Pv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Cd = /* @__PURE__ */ re(Z9, [["__scopeId", "data-v-64d0a9ea"]]), U9 = window.Vue.defineComponent, Ba = window.Vue.createElementVNode, co = window.Vue.unref, Y9 = window.Vue.toDisplayString, Ew = window.Vue.withCtx, mc = window.Vue.createVNode, H9 = window.Vue.renderList, G9 = window.Vue.Fragment, bs = window.Vue.openBlock, ha = window.Vue.createElementBlock, j9 = window.Vue.createBlock, K9 = window.Vue.pushScopeId, Q9 = window.Vue.popScopeId, J9 = (e) => (K9("data-v-5e910091"), e = e(), Q9(), e), eL = { class: "content" }, tL = { class: "header" }, nL = /* @__PURE__ */ J9(() => /* @__PURE__ */ Ba("h4", null, "ADD ALARMS", -1)), rL = {
  key: 0,
  class: "alarms-list"
}, oL = {
  key: 1,
  class: "empty"
}, pa = window.Vue.ref, Mw = window.Vue.watch, sL = /* @__PURE__ */ U9({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, i = rn(), a = pa(r.visible), u = pa([]), c = pa(["all"]), f = pa(i.unassignedAlarms);
    Mw(r, () => {
      a.value = r.visible, u.value = [], f.value = i.unassignedAlarms;
    }), Mw(
      () => i.unassignedAlarms,
      () => {
        m();
      }
    );
    const p = (V) => {
      de.exports.includes(u.value, V) ? de.exports.remove(u.value, ($) => $ === V) : u.value.push(V);
    }, v = () => {
      o("alarms-selected", u.value);
    }, m = () => {
      let V = i.unassignedAlarms;
      c.value.includes("all") || (V = V.filter(
        ($) => c.value.includes($.severity)
      )), f.value = V;
    }, _ = (V) => {
      f.value = V;
    };
    return (V, $) => (bs(), j9(co(Hm), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        $[0] || ($[0] = (M) => a.value = M),
        $[1] || ($[1] = (M) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Ew(() => [
        Ba("div", eL, [
          Ba("div", tL, [
            nL,
            mc(co(le), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Ew(() => [
                Ba("span", null, "Add " + Y9(co(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          mc(Do, {
            list: co(i).unassignedAlarms,
            onFilteredList: _
          }, null, 8, ["list"]),
          f.value.length ? (bs(), ha("div", rL, [
            (bs(!0), ha(G9, null, H9(f.value, (M) => (bs(), ha("div", {
              class: "card",
              key: M.id
            }, [
              mc(Cd, {
                selected: co(de.exports.includes)(co(u), M.id),
                alarm: M,
                onSelectedAlarm: p
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (bs(), ha("div", oL, "Results not found"))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const iL = /* @__PURE__ */ re(sL, [["__scopeId", "data-v-5e910091"]]), aL = window.Vue.openBlock, lL = window.Vue.createElementBlock, Km = window.Vue.createElementVNode;
var uL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const cL = {}, dL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fL = /* @__PURE__ */ Km("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), AL = /* @__PURE__ */ Km("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), hL = [
  fL,
  AL
];
function pL(e, o) {
  return aL(), lL("svg", dL, hL);
}
var Bw = /* @__PURE__ */ uL(cL, [["render", pL]]);
const wL = {}, vL = window.Vue.openBlock, mL = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const gL = { class: "empty" };
function _L(e, o) {
  return vL(), mL("div", gL, "No results found");
}
const Qm = /* @__PURE__ */ re(wL, [["render", _L], ["__scopeId", "data-v-42fb3f5a"]]), VL = window.Vue.defineComponent, Ct = window.Vue.createElementVNode, He = window.Vue.unref, et = window.Vue.createVNode, Cs = window.Vue.withCtx, yL = window.Vue.renderList, $w = window.Vue.Fragment, Es = window.Vue.openBlock, wa = window.Vue.createElementBlock, bL = window.Vue.createBlock, CL = window.Vue.pushScopeId, EL = window.Vue.popScopeId, Lo = (e) => (CL("data-v-66e61d7a"), e = e(), EL(), e), ML = { class: "container" }, BL = { class: "header" }, $L = /* @__PURE__ */ Lo(() => /* @__PURE__ */ Ct("div", { class: "title" }, "Alarms", -1)), xL = /* @__PURE__ */ Lo(() => /* @__PURE__ */ Ct("span", null, "Add Alarms", -1)), IL = { class: "alarms-container" }, SL = { class: "filters" }, TL = { class: "list" }, PL = { class: "row actions" }, kL = /* @__PURE__ */ Lo(() => /* @__PURE__ */ Ct("span", null, "Clear", -1)), NL = /* @__PURE__ */ Lo(() => /* @__PURE__ */ Ct("span", null, "Acknowledge", -1)), DL = /* @__PURE__ */ Lo(() => /* @__PURE__ */ Ct("span", null, "Move", -1)), OL = /* @__PURE__ */ Lo(() => /* @__PURE__ */ Ct("span", null, "Remove", -1)), LL = { class: "section" }, zL = {
  key: 0,
  class: "alarm-list"
}, va = window.Vue.ref, qL = window.Vue.watch, RL = window.Vue.reactive, WL = window.Vue.markRaw, FL = /* @__PURE__ */ VL({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = WL({
      Add: rl,
      Delete: Bw,
      MarkComplete: qa,
      CheckCircle: xo,
      ExitToApp: Fc
    }), i = ol(), a = rn(), u = va(!1), c = va(["all"]), f = va(!1), p = va(!1), v = RL({
      selectedAlarms: [],
      alarms: o.alarms
    });
    qL(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const m = (S) => {
      v.selectedAlarms.includes(S) ? de.exports.remove(v.selectedAlarms, (O) => O == S) : v.selectedAlarms.push(S);
    }, _ = async (S) => {
      v.selectedAlarms.length ? (await V3(v.selectedAlarms, S), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, V = () => v.selectedAlarms.length === o.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), $ = async () => {
      V() && (await Pp(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, M = async (S) => {
      V() && (await Pp(
        o.situationId,
        v.selectedAlarms
      ) ? await T(S, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, T = async (S, O) => {
      O.length ? await pm(S, O) ? a.getSituation(S) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, D = async (S) => {
      await T(o.situationId, S), p.value = !1;
    }, N = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    }, k = (S) => {
      v.alarms = S;
    };
    return (S, O) => (Es(), wa($w, null, [
      Ct("div", ML, [
        Ct("div", BL, [
          $L,
          et(He(le), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (x) => p.value = !0)
          }, {
            default: Cs(() => [
              et(He(Z), {
                icon: He(r).Add,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              xL
            ]),
            _: 1
          })
        ]),
        Ct("div", IL, [
          Ct("div", SL, [
            et(Do, {
              list: o.alarms,
              onFilteredList: k,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Ct("div", TL, [
            Ct("div", PL, [
              et(He(Oo), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (x) => u.value = x),
                label: "selected"
              }, null, 8, ["modelValue"]),
              et(He(le), {
                onClick: O[2] || (O[2] = () => _("clear"))
              }, {
                default: Cs(() => [
                  et(He(Z), {
                    icon: He(qa),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  kL
                ]),
                _: 1
              }),
              et(He(le), {
                onClick: O[3] || (O[3] = () => _("ack"))
              }, {
                default: Cs(() => [
                  et(He(Z), {
                    icon: He(xo),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  NL
                ]),
                _: 1
              }),
              et(He(le), { onClick: N }, {
                default: Cs(() => [
                  et(He(Z), {
                    icon: He(Fc),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  DL
                ]),
                _: 1
              }),
              et(He(le), { onClick: $ }, {
                default: Cs(() => [
                  et(He(Z), {
                    icon: He(Bw),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  OL
                ]),
                _: 1
              })
            ]),
            Ct("div", LL, [
              v.alarms.length > 0 ? (Es(), wa("div", zL, [
                (Es(!0), wa($w, null, yL(v.alarms, (x) => (Es(), wa("div", {
                  key: x.id
                }, [
                  et(h5, {
                    alarm: x,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: m
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Es(), bL(Qm, { key: 1 }))
            ])
          ])
        ])
      ]),
      et(jm, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: M,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      et(iL, {
        visible: p.value,
        onAlarmsSelected: D,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => p.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const XL = /* @__PURE__ */ re(FL, [["__scopeId", "data-v-66e61d7a"]]), ZL = window.Vue.defineComponent, Gt = window.Vue.createVNode, yt = window.Vue.unref, gc = window.Vue.normalizeClass, ma = window.Vue.toDisplayString, Mr = window.Vue.openBlock, Br = window.Vue.createElementBlock, ga = window.Vue.createCommentVNode, UL = window.Vue.withCtx, Qt = window.Vue.createElementVNode, YL = window.Vue.createTextVNode, HL = window.Vue.Fragment, GL = window.Vue.pushScopeId, jL = window.Vue.popScopeId, KL = (e) => (GL("data-v-8932e86b"), e = e(), jL(), e), QL = { class: "section" }, JL = { class: "action-section" }, ez = {
  key: 0,
  class: "btn-row"
}, tz = { key: 0 }, nz = { key: 1 }, rz = {
  key: 0,
  class: "situation-detail"
}, oz = { class: "situation-info" }, sz = { class: "id" }, iz = { key: 0 }, az = ["innerHTML"], lz = /* @__PURE__ */ KL(() => /* @__PURE__ */ Qt("p", null, null, -1)), uz = { class: "boxes" }, cz = { class: "parameters" }, dz = { class: "section memo-boxes" }, fz = { key: 0 }, xw = window.Vue.ref, Az = window.Vue.watch, hz = /* @__PURE__ */ ZL({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = ol(), i = rn(), a = Se.REJECTED, u = Nn(), c = xw(o.situationInfo.status), f = xw(o.situationInfo);
    Az(o, () => {
      c.value = o.situationInfo.status || "", f.value = o.situationInfo;
    });
    const p = async (v) => {
      var _;
      await hm(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        v.toLowerCase()
      ) ? (c.value = v, i.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, m) => {
      var _, V, $, M, T, D, N, k, S, O, x, q;
      return Mr(), Br(HL, null, [
        Qt("div", QL, [
          Qt("div", JL, [
            Gt($m, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            yt(u).allowSave ? (Mr(), Br("div", ez, [
              Gt(yt(le), {
                class: gc(["btn", { rejected: c.value == yt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (L) => p(yt(a)))
              }, {
                default: UL(() => [
                  Gt(yt(Z), {
                    icon: yt(Mv),
                    "aria-hidden": "true",
                    class: gc(["icon reject", { rejected: c.value == yt(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == yt(a) ? (Mr(), Br("span", tz, ma(yt(a)), 1)) : (Mr(), Br("span", nz, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : ga("", !0)
          ]),
          f.value ? (Mr(), Br("div", rz, [
            Qt("div", {
              class: gc(["severity-line", [`${(V = (_ = f.value) == null ? void 0 : _.severity) == null ? void 0 : V.toLowerCase()}-bg dark`]])
            }, null, 2),
            Qt("div", oz, [
              Qt("div", sz, [
                Qt("div", null, [
                  YL(" Situation - " + ma(($ = f.value) == null ? void 0 : $.id) + " - affecting " + ma(yt(de.exports.size)(yt(de.exports.groupBy)((M = f.value) == null ? void 0 : M.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (Mr(), Br("span", iz, "having " + ma(f.value.alarms.length) + " alarms ", 1)) : ga("", !0)
                ]),
                Gt(Bm, {
                  severity: (T = f.value) == null ? void 0 : T.severity
                }, null, 8, ["severity"])
              ]),
              Qt("span", {
                innerHTML: f.value.description
              }, null, 8, az),
              lz,
              Qt("div", uz, [
                Gt(oc, {
                  label: "First Event",
                  info: yt(pn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                Gt(oc, {
                  label: "Last Event",
                  info: yt(pn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                Gt(oc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Qt("div", cz, [
              Gt(wD, {
                alarms: (D = f.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : ga("", !0),
          Qt("div", dz, [
            Gt(Ra, {
              id: (N = f.value) == null ? void 0 : N.id,
              situationId: (k = f.value) == null ? void 0 : k.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (S = f.value) == null ? void 0 : S.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Gt(Ra, {
              id: (O = f.value) == null ? void 0 : O.id,
              situationId: (x = f.value) == null ? void 0 : x.id,
              label: "Journal Memo",
              type: "journal",
              memo: (q = f.value) == null ? void 0 : q.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (Mr(), Br("div", fz, [
          Gt(XL, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : ga("", !0)
      ], 64);
    };
  }
});
const pz = /* @__PURE__ */ re(hz, [["__scopeId", "data-v-8932e86b"]]);
var wz = Object.defineProperty, vz = Object.defineProperties, mz = Object.getOwnPropertyDescriptors, Iw = Object.getOwnPropertySymbols, gz = Object.prototype.hasOwnProperty, _z = Object.prototype.propertyIsEnumerable, Sw = (e, o, r) => o in e ? wz(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xc = (e, o) => {
  for (var r in o || (o = {}))
    gz.call(o, r) && Sw(e, r, o[r]);
  if (Iw)
    for (var r of Iw(o))
      _z.call(o, r) && Sw(e, r, o[r]);
  return e;
}, Vz = (e, o) => vz(e, mz(o));
const Jm = window.Vue.defineComponent, Tr = window.Vue.resolveComponent, $a = window.Vue.openBlock, Tw = window.Vue.createBlock, xa = window.Vue.mergeProps, Pr = window.Vue.withCtx, e1 = window.Vue.createElementBlock, yz = window.Vue.Fragment, bz = window.Vue.renderList, Cz = window.Vue.createTextVNode, Ez = window.Vue.toDisplayString, Mz = window.Vue.computed, Pw = window.Vue.toRef, Ms = window.Vue.createVNode, kw = window.Vue.toHandlers, Bz = window.Vue.renderSlot, $z = window.Vue.normalizeClass, xz = window.Vue.createElementVNode;
var t1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Iz = Jm({
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
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        Xs(o, this.$refs.list.$el);
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
    FeatherList: cd,
    FeatherListItem: ti
  }
});
function Sz(e, o, r, i, a, u) {
  const c = Tr("FeatherListItem"), f = Tr("FeatherList");
  return $a(), Tw(f, xa(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Pr(() => [
      ($a(!0), e1(yz, null, bz(e.options, (p, v) => ($a(), Tw(c, {
        key: p[e.textProp],
        "as-li": "",
        id: e.getId(v),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(v),
        selected: e.isSelected(v),
        onClick: (m) => e.select(p)
      }, {
        default: Pr(() => [
          Cz(Ez(p[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var Tz = /* @__PURE__ */ t1(Iz, [["render", Sz], ["__scopeId", "data-v-eae820da"]]);
const Pz = Vz(Xc(Xc({}, id), Qs), {
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
}), kz = {
  "update:modelValue": (e) => !0
}, Nz = Jm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: kz,
  props: Pz,
  setup(e, o) {
    Js(e), ad(e);
    const r = Mz(() => ie("feather-select-input")), { validate: i } = js(r, Pw(e, "modelValue"), e.label, e.schema, Pw(e, "error"));
    return Xc({
      inputId: r,
      validate: i
    }, Ks(o.attrs));
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
        const e = this.internalValue, o = this.options.filter((r) => r[this.textProp] === e[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => el
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
      if (e.keyCode === Q.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === Q.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === Q.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === Q.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === Q.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === Q.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Dr(this.delayTimeout), this.delayTimeout = Nr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: sd,
    InputSubText: Gs,
    FeatherMenu: Zv,
    List: Tz,
    FeatherIcon: Z
  }
});
function Dz(e, o, r, i, a, u) {
  const c = Tr("FeatherIcon"), f = Tr("InputWrapper"), p = Tr("List"), v = Tr("FeatherMenu"), m = Tr("InputSubText");
  return $a(), e1("div", xa(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ms(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Pr((_) => [
        Ms(f, xa({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, _.attrs, kw(_.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Pr(() => [
            Bz(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Pr(() => [
            Ms(c, {
              class: $z(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Pr(() => [
            xz("input", xa(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, kw(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Pr(() => [
        Ms(p, {
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
    Ms(m, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var Oz = /* @__PURE__ */ t1(Nz, [["render", Dz], ["__scopeId", "data-v-ecb32d90"]]);
const Lz = window.Vue.openBlock, zz = window.Vue.createElementBlock, n1 = window.Vue.createElementVNode;
var qz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Rz = {}, Wz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Fz = /* @__PURE__ */ n1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), Xz = /* @__PURE__ */ n1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Zz = [
  Fz,
  Xz
];
function Uz(e, o) {
  return Lz(), zz("svg", Wz, Zz);
}
var Yz = /* @__PURE__ */ qz(Rz, [["render", Uz]]);
const Ia = window.Vue.openBlock, Zc = window.Vue.createElementBlock, r1 = window.Vue.createElementVNode, Hz = window.Vue.defineComponent, $r = window.Vue.ref, Gz = window.Vue.provide, Nw = window.Vue.computed, jz = window.Vue.onUnmounted, Dw = window.Vue.toRef, Kz = window.Vue.resolveComponent, Qz = window.Vue.Fragment, Jz = window.Vue.createBlock, e8 = window.Vue.Teleport, Ow = window.Vue.createVNode, t8 = window.Vue.Transition, n8 = window.Vue.withCtx, r8 = window.Vue.normalizeClass, o8 = window.Vue.normalizeStyle, s8 = window.Vue.toDisplayString, i8 = window.Vue.createCommentVNode, a8 = window.Vue.renderSlot, _c = window.Vue.nextTick;
var o1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const l8 = {}, u8 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, c8 = /* @__PURE__ */ r1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), d8 = [
  c8
];
function f8(e, o) {
  return Ia(), Zc("svg", u8, d8);
}
var A8 = /* @__PURE__ */ o1(l8, [["render", f8]]), Xe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Xe || {}), Pn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Pn || {});
const h8 = (e, o, r, i = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + i && c.push(Xe.top), a >= o.height + i && c.push(Xe.bottom);
  const f = [];
  u >= o.width + i && f.push(Xe.right), e.left >= o.width + i && f.push(Xe.left);
  let p = [...f, ...c];
  return (r === Xe.top || r === Xe.bottom) && (p = [...c, ...f]), p.indexOf(r) > -1 ? r : p.length ? p[0] : r;
}, p8 = (e, o, r, i, a = 28) => {
  if (e === Xe.left || e === Xe.right)
    return Pn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], p = u, v = c + o.width / 2, m = r.width - a, _ = r.width / 2;
  return p >= _ && v >= _ && f.push(Pn.center), v >= m && f.push(Pn.left), p >= m && f.push(Pn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, w8 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Xe.top
  },
  pointerAlignment: {
    type: String,
    default: () => Pn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, v8 = Hz({
  props: w8,
  setup(e) {
    const o = $r(!1), r = $r(!1), i = ie("feather-tooltip-trigger"), a = ie("feather-tooltip"), u = "data-feather-tooltip";
    Gz("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Dr(c), o.value || (c = Nr(T, e.enterDelay));
    }, p = () => {
      Dr(c), c = Nr(D, e.exitDelay);
    }, v = (ve) => {
      ve.keyCode === Q.ESCAPE && (ve.preventDefault(), D(!0));
    }, m = Nw(() => ({
      [u]: i,
      "aria-describedby": a
    })), _ = {
      mouseenter: f,
      mouseleave: p,
      focus: f,
      blur: p,
      keydown: v
    }, V = $r(document), $ = Xv(V, () => D(!0));
    jz(() => D(!0));
    const M = () => document.getElementById(a), T = () => {
      r.value = !1, o.value = !0, _c(() => {
        const ve = M();
        fe(ve), o.value = !1, _c(() => {
          r.value = !0, o.value = !0, $.value = !0;
        });
      });
    }, D = (ve = !1) => {
      q.value = "", x.value = "", L.value = "", F.value = "", o.value = !1, ve && (r.value = !1), $.value = !1;
    }, N = Dw(e, "placement"), k = Dw(e, "pointerAlignment"), S = 8, O = 24, x = $r(""), q = $r(""), L = $r(""), F = $r(""), ge = Nw(() => F.value ? "p-" + F.value : !1), fe = (ve) => {
      const ye = document.querySelector(`[${u}=${i}]`);
      if (!ye) {
        console.log("trigger not found");
        return;
      }
      _c(() => {
        const Ce = ye.getBoundingClientRect(), xe = ve.getBoundingClientRect(), Ae = h8(Ce, xe, N.value, S), ze = p8(Ae, Ce, xe, k.value, O);
        L.value = ze.toString(), F.value = Ae.toString();
        let qe = 0, je = 0;
        if ((Ae === Xe.left || Ae === Xe.right) && (qe = Ce.top + Ce.height / 2 - xe.height / 2, Ae === Xe.left && (je = Ce.left - xe.width - S), Ae === Xe.right && (je = Ce.right)), Ae === Xe.top || Ae === Xe.bottom) {
          qe = Ce.top - xe.height - S, Ae === Xe.bottom && (qe = Ce.bottom);
          const qo = Ce.left + Ce.width / 2;
          switch (ze) {
            case Pn.center:
              je = qo - xe.width / 2;
              break;
            case Pn.left:
              je = qo - O;
              break;
            case Pn.right:
              je = qo - xe.width + O;
              break;
          }
        }
        x.value = qe.toString() + "px", q.value = je.toString() + "px";
      });
    };
    return {
      attrs: m,
      listeners: _,
      show: o,
      animate: r,
      alignmentClass: L,
      placementClass: ge,
      top: x,
      left: q,
      tooltipID: a
    };
  },
  components: {
    Pointer: A8
  }
}), m8 = ["id"];
function g8(e, o, r, i, a, u) {
  const c = Kz("Pointer");
  return Ia(), Zc(Qz, null, [
    (Ia(), Jz(e8, { to: "body" }, [
      Ow(t8, { css: e.animate }, {
        default: n8(() => [
          e.show ? (Ia(), Zc("div", {
            key: 0,
            class: r8(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: o8({ left: e.left, top: e.top })
          }, [
            r1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, s8(e.title), 9, m8),
            Ow(c, { class: "tooltip-pointer" })
          ], 6)) : i8("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    a8(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Lw = /* @__PURE__ */ o1(v8, [["render", g8], ["__scopeId", "data-v-3da6b22e"]]);
const _8 = window.Vue.defineComponent, Vc = window.Vue.normalizeStyle, yc = window.Vue.createElementVNode, Bs = window.Vue.unref, zw = window.Vue.toHandlers, qw = window.Vue.mergeProps, Rw = window.Vue.withCtx, Ww = window.Vue.createVNode, V8 = window.Vue.renderList, y8 = window.Vue.Fragment, $s = window.Vue.openBlock, xs = window.Vue.createElementBlock, Fw = window.Vue.normalizeClass, Xw = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const b8 = { class: "row" }, C8 = /* @__PURE__ */ _8({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), i = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => ($s(), xs("div", b8, [
      yc("div", {
        class: "line-gray",
        style: Vc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Ww(Bs(Lw), {
        title: Bs(pn)(e.alarm.firstEventTime)
      }, {
        default: Rw(({ attrs: f, on: p }) => [
          yc("div", qw({ class: "circle" }, f, zw(p), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      ($s(!0), xs(y8, null, V8(o.events, (f, p) => ($s(), xs("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[p + 1] ? ($s(), xs("div", {
          key: 0,
          class: Fw(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Vc({
            width: i(f.createTime, o.events[p + 1].createTime) + "px"
          })
        }, null, 6)) : Xw("", !0),
        Ww(Bs(Lw), {
          title: Bs(pn)(e.alarm.firstEventTime)
        }, {
          default: Rw(({ attrs: v, on: m }) => [
            o.events[p + 1] ? ($s(), xs("div", qw({ key: 0 }, v, zw(m), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Xw("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      yc("div", {
        class: Fw(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Vc({
          width: i(e.events[e.events.length - 1].createTime, Bs(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const E8 = /* @__PURE__ */ re(C8, [["__scopeId", "data-v-3341d12d"]]), M8 = window.Vue.openBlock, B8 = window.Vue.createElementBlock, s1 = window.Vue.createElementVNode;
var $8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const x8 = {}, I8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S8 = /* @__PURE__ */ s1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), T8 = /* @__PURE__ */ s1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), P8 = [
  S8,
  T8
];
function k8(e, o) {
  return M8(), B8("svg", I8, P8);
}
var N8 = /* @__PURE__ */ $8(x8, [["render", k8]]);
const D8 = window.Vue.defineComponent, Uc = window.Vue.createElementVNode, O8 = window.Vue.renderList, Zw = window.Vue.Fragment, bc = window.Vue.openBlock, Cc = window.Vue.createElementBlock, L8 = window.Vue.normalizeClass, z8 = window.Vue.unref, Uw = window.Vue.toDisplayString, q8 = window.Vue.pushScopeId, R8 = window.Vue.popScopeId, W8 = (e) => (q8("data-v-2e087f7b"), e = e(), R8(), e), F8 = /* @__PURE__ */ W8(() => /* @__PURE__ */ Uc("strong", null, "Events:", -1)), X8 = /* @__PURE__ */ D8({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (bc(), Cc(Zw, null, [
      F8,
      (bc(!0), Cc(Zw, null, O8(o.events, (a) => (bc(), Cc("div", {
        class: "event-description",
        key: a.id
      }, [
        Uc("div", {
          class: L8(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Uc("div", null, Uw(z8(pn)(a.createTime)) + " - " + Uw(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const Z8 = /* @__PURE__ */ re(X8, [["__scopeId", "data-v-2e087f7b"]]), U8 = window.Vue.defineComponent, Y8 = window.Vue.normalizeClass, bt = window.Vue.createElementVNode, fo = window.Vue.toDisplayString, ut = window.Vue.unref, Ao = window.Vue.createVNode, i1 = window.Vue.createTextVNode, H8 = window.Vue.renderList, Yw = window.Vue.Fragment, xn = window.Vue.openBlock, xr = window.Vue.createElementBlock, Hw = window.Vue.createBlock, _a = window.Vue.createCommentVNode, G8 = window.Vue.normalizeStyle, j8 = window.Vue.pushScopeId, K8 = window.Vue.popScopeId, Q8 = (e) => (j8("data-v-01717d0d"), e = e(), K8(), e), J8 = { class: "section detail" }, e6 = { class: "id" }, t6 = {
  key: 0,
  class: "section"
}, n6 = /* @__PURE__ */ Q8(() => /* @__PURE__ */ bt("div", { class: "id" }, "Alarms", -1)), r6 = { class: "action-btns" }, o6 = { class: "zoom" }, s6 = /* @__PURE__ */ i1(" Zoom "), i6 = { class: "times" }, a6 = {
  key: 0,
  class: "timeline-container"
}, l6 = { class: "alarm-id" }, u6 = {
  key: 0,
  class: "panel"
}, Gn = window.Vue.ref, c6 = window.Vue.watch, d6 = /* @__PURE__ */ U8({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, x;
    const o = e, r = rn(), i = Gn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Gn(a[0]), c = Gn(o.width), f = Gn(o.width), p = Gn(new Date().getTime()), v = () => {
      var q, L;
      if (!o.situation.events) {
        const F = (L = (q = o.situation) == null ? void 0 : q.alarms) == null ? void 0 : L.map((ge) => ge.id);
        r.getEvents(o.situation.id, F);
      }
    };
    v();
    const m = () => (p.value = new Date().getTime(), c.value / (Number(p.value) - Number(V.value))), _ = Gn(o.situation.alarms), V = Gn(
      ((x = de.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : x.firstEventTime) || new Date().getTime()
    ), $ = Gn(m());
    c6(o, () => {
      var q, L;
      V.value = ((L = de.exports.minBy((q = o.situation) == null ? void 0 : q.alarms, "firstEventTime")) == null ? void 0 : L.firstEventTime) || new Date().getTime(), v(), c.value = f.value, $.value = m(), _.value = o.situation.alarms, u.value = a[0];
    });
    const M = (q) => {
      if ((q == null ? void 0 : q.id) === 1 && (_.value = o.situation.alarms), (q == null ? void 0 : q.id) === 2) {
        const L = de.exports.groupBy(_.value, "severity"), F = [
          ...L.CRITICAL || [],
          ...L.MAJOR || [],
          ...L.MINOR || [],
          ...L.WARNING || [],
          ...L.NORMAL || [],
          ...L.CLEARED || [],
          ...L.INDETERMINATE || []
        ];
        _.value = F.filter((ge) => ge);
      }
      if ((q == null ? void 0 : q.id) === 3) {
        const L = de.exports.reverse(
          de.exports.sortBy(
            o.situation.alarms,
            (F) => Number(F.lastEventTime) - Number(F.firstEventTime)
          )
        );
        _.value = L;
      }
    }, T = () => {
      c.value += 100, $.value = m();
    }, D = () => {
      c.value -= 100, $.value = m();
    }, N = () => {
      c.value = f.value, $.value = m();
    }, k = (q) => {
      i.value = q;
    }, S = () => {
      i.value = 0;
    };
    return (q, L) => {
      var F, ge;
      return xn(), xr(Yw, null, [
        bt("div", J8, [
          bt("div", {
            class: Y8(["severity-line", [`${(ge = (F = o.situation) == null ? void 0 : F.severity) == null ? void 0 : ge.toLowerCase()}-bg dark`]])
          }, null, 2),
          bt("div", null, [
            bt("div", e6, "Situation " + fo(o.situation.id), 1),
            bt("div", null, " Duration: " + fo(ut(Ha)(p.value, new Date(V.value))), 1)
          ])
        ]),
        _.value && _.value.length > 0 ? (xn(), xr("div", t6, [
          n6,
          bt("div", r6, [
            Ao(ut(Oz), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                L[0] || (L[0] = (fe) => u.value = fe),
                M
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            bt("div", o6, [
              s6,
              bt("div", null, [
                Ao(ut(Z), {
                  icon: ut(Yz),
                  class: "zoom-icon",
                  onClick: T
                }, null, 8, ["icon"]),
                Ao(ut(Z), {
                  icon: ut(sm),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"]),
                Ao(ut(Z), {
                  icon: ut(N8),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (xn(), xr("div", {
            key: 0,
            class: "alarms",
            style: G8({
              width: f.value + 50 + "px"
            })
          }, [
            bt("div", i6, [
              bt("div", null, fo(ut(pn)(V.value)), 1),
              bt("div", null, fo(ut(pn)(p.value)), 1)
            ]),
            e.situation.events ? (xn(), xr("div", a6, [
              (xn(!0), xr(Yw, null, H8(_.value, (fe) => (xn(), xr("div", {
                class: "timeline",
                key: fe.id
              }, [
                bt("div", l6, [
                  i1(fo(fe.nodeLabel) + " - " + fo(fe.id) + " ", 1),
                  i.value === fe.id ? (xn(), Hw(ut(Z), {
                    key: 0,
                    icon: ut(el),
                    class: "zoom-icon expand",
                    onClick: S
                  }, null, 8, ["icon"])) : (xn(), Hw(ut(Z), {
                    key: 1,
                    icon: ut(Dv),
                    class: "zoom-icon expand",
                    onClick: () => k(fe.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Ao(E8, {
                  alarm: fe,
                  proportion: $.value,
                  "min-start": V.value,
                  events: o.situation.events[fe.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === fe.id ? (xn(), xr("div", u6, [
                  Ao(Z8, {
                    events: o.situation.events[fe.id]
                  }, null, 8, ["events"])
                ])) : _a("", !0)
              ]))), 128))
            ])) : _a("", !0)
          ], 4)) : _a("", !0)
        ])) : _a("", !0)
      ], 64);
    };
  }
});
const f6 = /* @__PURE__ */ re(d6, [["__scopeId", "data-v-01717d0d"]]), A6 = window.Vue.openBlock, h6 = window.Vue.createElementBlock, p6 = window.Vue.createElementVNode;
var w6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const v6 = {}, m6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, g6 = /* @__PURE__ */ p6("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), _6 = [
  g6
];
function V6(e, o) {
  return A6(), h6("svg", m6, _6);
}
var Mo = /* @__PURE__ */ w6(v6, [["render", V6]]);
const a1 = window.Vue.defineComponent, Ec = window.Vue.ref, y6 = window.Vue.toRef, Mc = window.Vue.inject, Gw = window.Vue.watch, b6 = window.Vue.nextTick, jw = window.Vue.openBlock, Kw = window.Vue.createElementBlock, Bc = window.Vue.createElementVNode, C6 = window.Vue.normalizeClass, Qw = window.Vue.renderSlot, Jw = window.Vue.createCommentVNode, $c = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var E6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const M6 = {
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
}, B6 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, $6 = a1({
  emits: B6,
  props: M6,
  setup(e, o) {
    const r = Ec(), i = Ec(!1), a = Ec(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = y6(e, "modelValue"), f = Mc("queueSnackbar", !1), p = Mc("unqueueSnackbar", !1), v = Mc("nextSnackbar", () => {
    }), m = (T, D) => {
      let N, k, S = D;
      const O = () => {
        !N || (Dr(N), N = 0, S -= Date.now() - k);
      }, x = () => {
        N || (k = Date.now(), N = Nr(T, S));
      };
      return x(), { pause: O, resume: x };
    }, _ = () => {
      i.value = !1, o.emit("closed"), v && v();
    }, V = (T) => {
      T.keyCode === Q.ESCAPE && (a.value = !1);
    }, $ = () => {
      r.value.pause();
    }, M = () => {
      a.value && r.value.resume();
    };
    return Gw(c, (T) => {
      T ? b6(() => {
        f === !1 ? a.value = T : f(u, a);
      }) : p === !1 ? a.value = T : p(u);
    }, { immediate: !0 }), Gw(a, (T) => {
      T ? (i.value = !0, r.value = m(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), $());
    }), {
      hideTimeout: r,
      contentShow: i,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: _,
      keyPressed: V,
      stopTimer: $,
      resumeTimer: M
    };
  }
}), x6 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, I6 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, S6 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, T6 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function P6(e, o, r, i, a, u) {
  return e.modelValue || e.contentShow ? (jw(), Kw("div", x6, [
    Bc("div", {
      class: C6(["feather-snackbar", {
        "fade-in": e.internalValue,
        "fade-out": e.contentShow && !e.internalValue,
        center: e.center,
        error: e.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: o[0] || (o[0] = (...c) => e.closed && e.closed(...c)),
      onKeydown: o[1] || (o[1] = (...c) => e.keyPressed && e.keyPressed(...c)),
      onMouseover: o[2] || (o[2] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onMouseleave: o[3] || (o[3] = (...c) => e.resumeTimer && e.resumeTimer(...c)),
      onFocusin: o[4] || (o[4] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onFocusout: o[5] || (o[5] = (...c) => e.resumeTimer && e.resumeTimer(...c))
    }, [
      Bc("div", I6, [
        e.contentShow ? (jw(), Kw("div", S6, [
          Qw(e.$slots, "default", {}, void 0, !0)
        ])) : Jw("", !0)
      ]),
      Bc("div", T6, [
        Qw(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Jw("", !0);
}
var al = /* @__PURE__ */ E6($6, [["render", P6], ["__scopeId", "data-v-5cf64a62"]]);
const k6 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
a1({
  props: k6,
  setup() {
    let e, o = [];
    const r = () => {
      e && (e.val.value = !0);
    }, i = (c, f) => {
      const p = { id: c, val: f };
      e ? o.push(p) : (e = p, r());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : o = o.filter((f) => f.id != c);
    }, u = () => {
      o.length ? (e = o.shift(), r()) : e = void 0;
    };
    return $c("queueSnackbar", i), $c("unqueueSnackbar", a), $c("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: i,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const N6 = window.Vue.defineComponent, Be = window.Vue.unref, ct = window.Vue.createVNode, Us = window.Vue.createElementVNode, Nt = window.Vue.withCtx, ho = window.Vue.openBlock, ev = window.Vue.createBlock, D6 = window.Vue.createCommentVNode, ll = window.Vue.createTextVNode, Va = window.Vue.createElementBlock, tv = window.Vue.toDisplayString, O6 = window.Vue.pushScopeId, L6 = window.Vue.popScopeId, Ed = (e) => (O6("data-v-9a7d0795"), e = e(), L6(), e), z6 = { id: "cont" }, q6 = { class: "btns-navigation" }, R6 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ Us("span", null, "Situation List", -1)), W6 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ Us("span", null, "Show Previous Situation ", -1)), F6 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ Us("span", null, "Show Next Situation", -1)), X6 = { key: 1 }, Z6 = {
  key: 0,
  class: "detail"
}, U6 = /* @__PURE__ */ ll("Details"), Y6 = /* @__PURE__ */ ll("Metrics"), H6 = {
  key: 1,
  class: "noSituation"
}, G6 = /* @__PURE__ */ ll("dismiss"), po = window.Vue.ref, nv = window.Vue.watch, j6 = window.Vue.onMounted, K6 = window.VueRouter.useRoute, Q6 = /* @__PURE__ */ N6({
  __name: "SituationDetail",
  setup(e) {
    const o = vn(), r = K6(), i = parseInt(r.params.id), a = po(i), u = rn(), c = ol();
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const f = po(), p = po(), v = po(!0), m = po(
      u.filteredSituations.findIndex((M) => M === a.value)
    ), _ = po(!1);
    nv(
      () => u.situationDetail,
      () => {
        f.value = u.situationDetail, v.value = !1, u.getUnassignedAlarms();
      }
    ), j6(() => {
      var T;
      const M = ((T = document.getElementById("cont")) == null ? void 0 : T.getBoundingClientRect().width) || 1200;
      p.value = M - 90;
    });
    const V = () => {
      o.push({
        name: "situations"
      });
    }, $ = (M) => {
      const T = m.value, D = u.filteredSituations[T + M];
      o.push({
        name: "situationDetail",
        params: {
          id: D
        }
      });
    };
    return nv(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), m.value = u.filteredSituations.findIndex((M) => M == a.value);
    }), c.$subscribe((M, T) => {
      _.value = T.showError;
    }), (M, T) => (ho(), Va("div", z6, [
      Us("div", q6, [
        ct(Be(le), {
          primary: "",
          onClick: T[0] || (T[0] = () => V())
        }, {
          default: Nt(() => [
            ct(Be(Z), {
              icon: Be(Mo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            R6
          ]),
          _: 1
        }),
        Us("div", null, [
          ct(Be(le), {
            disabled: !Be(u).filteredSituations[m.value - 1],
            primary: "",
            onClick: T[1] || (T[1] = () => $(-1))
          }, {
            default: Nt(() => [
              ct(Be(Z), {
                icon: Be(Mo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              W6
            ]),
            _: 1
          }, 8, ["disabled"]),
          ct(Be(le), {
            disabled: !Be(u).filteredSituations[m.value + 1],
            primary: "",
            onClick: T[2] || (T[2] = () => $(1))
          }, {
            default: Nt(() => [
              F6,
              ct(Be(Z), {
                icon: Be(Mo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      v.value ? (ho(), ev(Be(Ad), {
        key: 0,
        class: "spinner"
      })) : (ho(), Va("div", X6, [
        f.value ? (ho(), Va("div", Z6, [
          ct(Be(XN), null, {
            tabs: Nt(() => [
              ct(Be(Dp), null, {
                default: Nt(() => [
                  U6
                ]),
                _: 1
              }),
              ct(Be(Dp), null, {
                default: Nt(() => [
                  Y6
                ]),
                _: 1
              })
            ]),
            default: Nt(() => [
              ct(Be(Op), { class: "panel" }, {
                default: Nt(() => [
                  ct(pz, { "situation-info": f.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ct(Be(Op), { class: "panel" }, {
                default: Nt(() => [
                  p.value ? (ho(), ev(f6, {
                    key: 0,
                    situation: f.value,
                    width: p.value
                  }, null, 8, ["situation", "width"])) : D6("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (ho(), Va("div", H6, " Error. The situation " + tv(Be(i)) + " does not exist. ", 1))
      ])),
      ct(Be(al), {
        modelValue: _.value,
        "onUpdate:modelValue": T[4] || (T[4] = (D) => _.value = D),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Nt(() => [
          ct(Be(le), {
            onClick: T[3] || (T[3] = (D) => _.value = !1),
            text: ""
          }, {
            default: Nt(() => [
              G6
            ]),
            _: 1
          })
        ]),
        default: Nt(() => [
          ll(tv(Be(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const J6 = /* @__PURE__ */ re(Q6, [["__scopeId", "data-v-9a7d0795"]]), e4 = window.Vue.defineComponent, Fe = window.Vue.unref, Dt = window.Vue.createVNode, ot = window.Vue.createElementVNode, wo = window.Vue.withCtx, vo = window.Vue.openBlock, mo = window.Vue.createElementBlock, t4 = window.Vue.createCommentVNode, n4 = window.Vue.toDisplayString, Md = window.Vue.createTextVNode, r4 = window.Vue.normalizeClass, o4 = window.Vue.renderList, s4 = window.Vue.Fragment, i4 = window.Vue.pushScopeId, a4 = window.Vue.popScopeId, ni = (e) => (i4("data-v-efbc508c"), e = e(), a4(), e), l4 = { class: "container" }, u4 = /* @__PURE__ */ ni(() => /* @__PURE__ */ ot("span", null, "Situation List", -1)), c4 = /* @__PURE__ */ ni(() => /* @__PURE__ */ ot("h2", null, "New Situation", -1)), d4 = { class: "form" }, f4 = { class: "fields" }, A4 = {
  key: 0,
  class: "errorList"
}, h4 = { class: "footer" }, p4 = /* @__PURE__ */ ni(() => /* @__PURE__ */ ot("span", null, "Clear", -1)), w4 = /* @__PURE__ */ ni(() => /* @__PURE__ */ ot("span", null, "Add Situation", -1)), v4 = { class: "alarm-column" }, m4 = { class: "header-alarms" }, g4 = /* @__PURE__ */ ni(() => /* @__PURE__ */ ot("h3", null, "Add Unassociated Alarms", -1)), _4 = /* @__PURE__ */ Md(" Total alarms added: "), V4 = { class: "total" }, y4 = { class: "list" }, b4 = { class: "filters" }, C4 = {
  key: 0,
  class: "alarms"
}, E4 = { key: 1 }, M4 = /* @__PURE__ */ Md(" Error on creating new situation :( "), B4 = /* @__PURE__ */ Md("dismiss"), jn = window.Vue.ref, $4 = window.Vue.watch, x4 = /* @__PURE__ */ e4({
  __name: "AddSituation",
  setup(e) {
    const o = vn(), r = rn(), i = jn(), a = jn(""), u = jn(), c = jn(""), f = jn([]), p = jn(!1), v = jn(), m = jn(r.unassignedAlarms);
    m.value.length || r.getUnassignedAlarms(), $4(
      () => r.unassignedAlarms,
      () => {
        m.value = r.unassignedAlarms;
      }
    );
    const _ = () => {
      o.push({
        name: "situations"
      });
    }, V = (N) => {
      p.value = !1, de.exports.includes(f.value, N) ? de.exports.remove(f.value, (k) => k === N) : f.value.push(N);
    }, $ = () => {
      const N = "This field should not be empty";
      let k = !0;
      return i.value || (a.value = N, k = !1), u.value || (c.value = N, k = !1), f.value.length < 2 && (p.value = !0, k = !1), k;
    }, M = async () => {
      if ($()) {
        const N = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: i.value
        };
        await Ik(N) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, T = () => {
      i.value = "", u.value = "", f.value = [], m.value = r.unassignedAlarms;
    }, D = (N) => {
      m.value = N;
    };
    return (N, k) => (vo(), mo("div", l4, [
      Dt(Fe(le), {
        primary: "",
        onClick: k[0] || (k[0] = () => _()),
        class: "back-btn"
      }, {
        default: wo(() => [
          Dt(Fe(Z), {
            icon: Fe(Mo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          u4
        ]),
        _: 1
      }),
      c4,
      ot("div", d4, [
        ot("div", f4, [
          Dt(Fe(Wc), {
            modelValue: i.value,
            "onUpdate:modelValue": k[1] || (k[1] = (S) => i.value = S),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Dt(Fe(Wc), {
            modelValue: u.value,
            "onUpdate:modelValue": k[2] || (k[2] = (S) => u.value = S),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          p.value ? (vo(), mo("div", A4, " It is required to add at least 2 alarms ")) : t4("", !0),
          ot("div", h4, [
            Dt(Fe(le), {
              class: "btn",
              onClick: T
            }, {
              default: wo(() => [
                Dt(Fe(Z), {
                  icon: Fe(Po),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                p4
              ]),
              _: 1
            }),
            Dt(Fe(le), {
              class: "btn-add",
              onClick: M
            }, {
              default: wo(() => [
                Dt(Fe(Z), {
                  icon: Fe(rl),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                w4
              ]),
              _: 1
            })
          ])
        ]),
        ot("div", v4, [
          ot("div", m4, [
            g4,
            ot("div", null, [
              ot("div", {
                class: r4(["totalAlarms", { errorList: p.value }])
              }, [
                _4,
                ot("span", V4, n4(Fe(f).length), 1)
              ], 2)
            ])
          ]),
          ot("div", y4, [
            ot("div", b4, [
              Dt(Do, {
                list: Fe(r).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            m.value.length ? (vo(), mo("div", C4, [
              (vo(!0), mo(s4, null, o4(m.value, (S) => (vo(), mo("div", {
                key: S.id,
                class: "alarm-card"
              }, [
                Dt(Cd, {
                  selected: Fe(de.exports.includes)(Fe(f), S.id),
                  alarm: S,
                  onSelectedAlarm: V
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (vo(), mo("div", E4, "There is no unassigned alarms"))
          ])
        ])
      ]),
      Dt(Fe(al), {
        modelValue: v.value,
        "onUpdate:modelValue": k[4] || (k[4] = (S) => v.value = S),
        right: "",
        error: ""
      }, {
        button: wo(() => [
          Dt(Fe(le), {
            onClick: k[3] || (k[3] = (S) => v.value = !1),
            text: ""
          }, {
            default: wo(() => [
              B4
            ]),
            _: 1
          })
        ]),
        default: wo(() => [
          M4
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const I4 = /* @__PURE__ */ re(x4, [["__scopeId", "data-v-efbc508c"]]), S4 = window.Vue.openBlock, T4 = window.Vue.createElementBlock, P4 = window.Vue.createStaticVNode;
var k4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const N4 = {}, D4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, O4 = /* @__PURE__ */ P4('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), L4 = [
  O4
];
function z4(e, o) {
  return S4(), T4("svg", D4, L4);
}
var q4 = /* @__PURE__ */ k4(N4, [["render", z4]]);
const R4 = window.Vue.openBlock, W4 = window.Vue.createElementBlock, F4 = window.Vue.createStaticVNode;
var X4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Z4 = {}, U4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Y4 = /* @__PURE__ */ F4('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), H4 = [
  Y4
];
function G4(e, o) {
  return R4(), W4("svg", U4, H4);
}
var j4 = /* @__PURE__ */ X4(Z4, [["render", G4]]);
const K4 = window.Vue.openBlock, Q4 = window.Vue.createElementBlock, J4 = window.Vue.createElementVNode;
var eq = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const tq = {}, nq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rq = /* @__PURE__ */ J4("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), oq = [
  rq
];
function sq(e, o) {
  return K4(), Q4("svg", nq, oq);
}
var iq = /* @__PURE__ */ eq(tq, [["render", sq]]);
const aq = window.Vue.openBlock, lq = window.Vue.createElementBlock, uq = window.Vue.createStaticVNode;
var cq = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const dq = {}, fq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Aq = /* @__PURE__ */ uq('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), hq = [
  Aq
];
function pq(e, o) {
  return aq(), lq("svg", fq, hq);
}
var wq = /* @__PURE__ */ cq(dq, [["render", pq]]);
const vq = window.Vue.openBlock, mq = window.Vue.createElementBlock, gq = window.Vue.createElementVNode;
var _q = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Vq = {}, yq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bq = /* @__PURE__ */ gq("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), Cq = [
  bq
];
function Eq(e, o) {
  return vq(), mq("svg", yq, Cq);
}
var Mq = /* @__PURE__ */ _q(Vq, [["render", Eq]]);
const Bq = window.Vue.defineComponent, $e = window.Vue.createElementVNode, Ys = window.Vue.createTextVNode, tt = window.Vue.unref, In = window.Vue.createVNode, ya = window.Vue.withCtx, rv = window.Vue.openBlock, ov = window.Vue.createElementBlock, $q = window.Vue.createCommentVNode, xq = window.Vue.pushScopeId, Iq = window.Vue.popScopeId, on = (e) => (xq("data-v-ec3cadfe"), e = e(), Iq(), e), Sq = { class: "container" }, Tq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("div", { class: "title" }, "ALEC", -1)), Pq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("div", { class: "description" }, [
  /* @__PURE__ */ Ys(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ $e("br"),
  /* @__PURE__ */ $e("strong", null, "Our goal"),
  /* @__PURE__ */ Ys(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), kq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("h3", null, "Key Benefits:", -1)), Nq = { class: "list" }, Dq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), Oq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("span", null, "Assist in root cause analysis.", -1)), Lq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), zq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("span", null, "Easy configuration.", -1)), qq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), Rq = {
  key: 0,
  class: "optin"
}, Wq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("h3", null, "Enable ALEC for more precise results:", -1)), Fq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), Xq = { class: "choices" }, Zq = /* @__PURE__ */ on(() => /* @__PURE__ */ $e("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), Uq = /* @__PURE__ */ Ys("Yes"), Yq = /* @__PURE__ */ Ys("No"), Hq = /* @__PURE__ */ Ys(" Continue "), Gq = window.Vue.ref, jq = /* @__PURE__ */ Bq({
  __name: "WelcomePage",
  setup(e) {
    const o = Nn(), r = vn(), i = Gq(!0), a = () => {
      const u = Boolean(i.value);
      o.savePermission(u), r.push({ name: "configuration" });
    };
    return (u, c) => (rv(), ov("div", Sq, [
      Tq,
      Pq,
      $e("div", null, [
        kq,
        $e("div", Nq, [
          $e("div", null, [
            In(tt(Z), {
              icon: tt(wq),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Dq
          ]),
          $e("div", null, [
            In(tt(Z), {
              icon: tt(iq),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Oq
          ]),
          $e("div", null, [
            In(tt(Z), {
              icon: tt(Mq),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Lq
          ]),
          $e("div", null, [
            In(tt(Z), {
              icon: tt(q4),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            zq
          ]),
          $e("div", null, [
            In(tt(Z), {
              icon: tt(j4),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            qq
          ])
        ])
      ]),
      tt(o).isAdmin ? (rv(), ov("div", Rq, [
        Wq,
        Fq,
        $e("div", Xq, [
          Zq,
          In(tt(Zs), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": c[0] || (c[0] = (f) => i.value = f),
            label: ""
          }, {
            default: ya(() => [
              In(tt(Tn), { value: !0 }, {
                default: ya(() => [
                  Uq
                ]),
                _: 1
              }),
              In(tt(Tn), { value: !1 }, {
                default: ya(() => [
                  Yq
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : $q("", !0),
      In(tt(le), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: a
      }, {
        default: ya(() => [
          Hq
        ]),
        _: 1
      })
    ]));
  }
});
const Kq = /* @__PURE__ */ re(jq, [["__scopeId", "data-v-ec3cadfe"]]), Qq = window.Vue.defineComponent, Jq = window.Vue.createElementVNode, eR = window.Vue.createTextVNode, tR = window.Vue.unref, nR = window.Vue.withCtx, rR = window.Vue.createVNode, oR = window.Vue.Fragment, sR = window.Vue.openBlock, iR = window.Vue.createElementBlock, aR = window.Vue.pushScopeId, lR = window.Vue.popScopeId, uR = (e) => (aR("data-v-bcb7dcc6"), e = e(), lR(), e), cR = /* @__PURE__ */ uR(() => /* @__PURE__ */ Jq("div", { class: "main" }, "Something bad is happening...", -1)), dR = /* @__PURE__ */ eR(" Reload "), fR = /* @__PURE__ */ Qq({
  __name: "ErrorPage",
  setup(e) {
    const o = vn(), r = () => {
      o.push({ name: "situations" });
    };
    return (i, a) => (sR(), iR(oR, null, [
      cR,
      rR(tR(le), {
        primary: "",
        onClick: r
      }, {
        default: nR(() => [
          dR
        ]),
        _: 1
      })
    ], 64));
  }
});
const AR = /* @__PURE__ */ re(fR, [["__scopeId", "data-v-bcb7dcc6"]]), hR = window.Vue.defineComponent, nt = window.Vue.unref, jt = window.Vue.createVNode, er = window.Vue.createElementVNode, Is = window.Vue.withCtx, Ir = window.Vue.openBlock, sv = window.Vue.createBlock, pR = window.Vue.renderList, wR = window.Vue.Fragment, Ss = window.Vue.createElementBlock, vR = window.Vue.toDisplayString, l1 = window.Vue.createTextVNode, mR = window.Vue.pushScopeId, gR = window.Vue.popScopeId, Bd = (e) => (mR("data-v-5dda4d5e"), e = e(), gR(), e), _R = { class: "container" }, VR = { class: "nav-btns" }, yR = /* @__PURE__ */ Bd(() => /* @__PURE__ */ er("span", null, "Situation List", -1)), bR = /* @__PURE__ */ Bd(() => /* @__PURE__ */ er("h2", null, "List Unassociated Alarms", -1)), CR = { class: "content" }, ER = { class: "filters" }, MR = { class: "list" }, BR = { class: "action-btns" }, $R = /* @__PURE__ */ Bd(() => /* @__PURE__ */ er("span", null, "Move", -1)), xR = { key: 1 }, IR = {
  key: 0,
  class: "alarms"
}, SR = /* @__PURE__ */ l1("dismiss"), Kn = window.Vue.ref, TR = window.Vue.watch, PR = window.Vue.markRaw, kR = /* @__PURE__ */ hR({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = PR({
      ArrowBack: Mo,
      ExitToApp: Fc
    }), r = vn(), i = rn();
    i.getUnassignedAlarms(), i.getSituations(), i.nodes.length || i.getNodes();
    const a = Kn([]), u = Kn([]), c = Kn(!1), f = Kn(!1), p = Kn(""), v = Kn(!1), m = Kn(!1), _ = Kn(!0);
    TR(
      () => i.unassignedAlarms,
      () => {
        a.value = i.unassignedAlarms, _.value = !1;
      }
    );
    const V = (k) => {
      de.exports.includes(u.value, k) ? de.exports.remove(u.value, (S) => S === k) : u.value.push(k);
    }, $ = () => {
      c.value ? u.value = a.value.map((k) => k.id) : u.value = [];
    }, M = async (k) => {
      await pm(k, u.value) ? i.getUnassignedAlarms() : (v.value = !0, m.value = !0, p.value = "Error on moving the alarms :("), f.value = !1;
    }, T = () => {
      r.push({
        name: "situations"
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (v.value = !0, m.value = !1, p.value = "You need to choose at least one alarm!");
    }, N = (k) => {
      a.value = k;
    };
    return (k, S) => (Ir(), Ss("div", _R, [
      er("div", VR, [
        jt(nt(le), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: Is(() => [
            jt(nt(Z), {
              icon: nt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            yR
          ]),
          _: 1
        }),
        jt(um)
      ]),
      bR,
      er("div", CR, [
        er("div", ER, [
          jt(Do, {
            list: nt(i).unassignedAlarms,
            onFilteredList: N,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        er("div", MR, [
          er("div", BR, [
            jt(nt(Oo), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                S[1] || (S[1] = (O) => c.value = O),
                $
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            jt(nt(le), { onClick: D }, {
              default: Is(() => [
                jt(nt(Z), {
                  icon: nt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                $R
              ]),
              _: 1
            })
          ]),
          _.value ? (Ir(), sv(nt(Ad), {
            key: 0,
            class: "spinner"
          })) : (Ir(), Ss("div", xR, [
            nt(a).length ? (Ir(), Ss("div", IR, [
              (Ir(!0), Ss(wR, null, pR(nt(a), (O) => (Ir(), Ss("div", {
                key: O.id,
                class: "card"
              }, [
                jt(Cd, {
                  selected: nt(de.exports.includes)(nt(u), O.id),
                  alarm: O,
                  onSelectedAlarm: V
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ir(), sv(Qm, { key: 1 }))
          ]))
        ])
      ]),
      jt(jm, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: M,
        onDrawerClosed: S[2] || (S[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      jt(nt(al), {
        modelValue: v.value,
        "onUpdate:modelValue": S[4] || (S[4] = (O) => v.value = O),
        right: "",
        error: m.value
      }, {
        button: Is(() => [
          jt(nt(le), {
            onClick: S[3] || (S[3] = (O) => v.value = !1),
            text: ""
          }, {
            default: Is(() => [
              SR
            ]),
            _: 1
          })
        ]),
        default: Is(() => [
          l1(vR(p.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const NR = /* @__PURE__ */ re(kR, [["__scopeId", "data-v-5dda4d5e"]]), DR = "data:image/png;base64,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", OR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8wAAAJMCAYAAAAv7y8CAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAHC1SURBVHgB7d0JkNzned/5t+fCHABmMAcBEOQMARAgwAMESNEiY5EiFR9rURuFFUtrl53EctaOI25tvJVIWWlrs1JcJTmSs7GzIZPYm8gpS6Uqybu0NyJjWZHIEl0mJUoECBAHCZAghgJxDjADDGYwZ+//93a/jXd63p4+/z19fD9VzRkQc/T0NID5/Z/nfZ6EyXL16tyjptX87UQi8dHol7cZAAAAAAAaVSJxwCTNgTnT8vkNXYl3lvyWe+VyMtnXPrP4f5hk8rcNAAAAAADNJpn413NdLf9iQyIxrl/awJwOy89HYXmvAQAAAACgWSUS++fWtHxIoblFv05XlgnLAAAAAIDmlkzua59e/Od6NXF5evq2dtN+0gAAAAAAAEkm55MfamldbP2cAQAAAAAATsK0mo+2tCRa7zUAAAAAACBDm6MSk9PzSQMAAAAAAHzJFgMAAAAAAJYhMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAENBmAKAJTVyZNifevmDOnJ0wc/MLBgBQu9rbWs3mTb3m9m1Dpnd9lwGAaklMTs8nDQA0EQXlQ0dOGwBA/dm1c5PZHd0AoAqStGQDaCqqKBOWAaB+HXvzrDlx8oIBgGqgJRtAUzl4+EZYVlvfnru2mMGBtQYAULt0jOboG2fNmXMT9tcKzSO39Jv29lYDAHGiwgygaVwYmzRT07P29e6uDvPg+7YSlgGgDugC5/17h+1ZZpmbW7AhGgDiRmAG0DSm02FZenu7THd3hwEA1AdVk4dv7c/8epzADKAKCMwAmpKrUgAA6offgq0qMwDEjcAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAQJsBAAAN4/qMMdOzqde7OozpXGMAAECJCMwAANQxBeSjo8YcO9Vizl4yZvxqYsnvd0ahedNA0uzdkTRbNyVN3zoDAAAKRGAGAKAOKSi/dCRhXn69xVyfXeHtot9750zC3uTBu5LmobsWCc4AABSAwAwAQJ05O2bM1/9bqxmfNEV7+XAiqka3miceWTS3bU4aAACQG0O/AACoI/uPJ8xXnistLDt6368812Ke358wAAAgNwIzAAB14uQZY/7s+yu3YBfjhVdbbAAHAABhBGYAAOrA+FWF5VZTaX/xcos5O0ZoBgAghMAMAEAdeH5/S1lt2LmoWv3MiwRmAABCCMwAANQ4tWIfiLF1WhVmWrMBAFiOwAwAQI17YX/8/1wfIDADALAMgRkAgBp2+arJ7FCOk7+rGQAApBCYAQCoYWcvVS/EnhkzAADAQ2AGAKCGvXPGVE01wzkAAPWAwAwAQA27Plu9EKvVVQAA4AYCMwAANSyOVVK5PxcVZgAAfG0GAADUrL61pmr61iYNADSaubkFMxvd7OvzC/bXvvb2VtPe1mpf7+nuMICv6QOz/sCceveSmbgybaamZw1QKd1dHWZwYK0Zim7d/OULoESdHQqx1an8dq4xAFB39PP8ePpn+YmJaftr/WyvcDw1VfzP9wrP+tlNQVo/z+n13vVd9td96ZdoHk0bmPUH6eibZ81bJy8YIC6jP7lkX27fOmT23LXFAEA+8/OL5trUvLk2PR/94DdrrlzRBbd1pho29VNhBlDb9DP8hbFJczG6KSBfvDhpg3FFP8d8KnDnovCsED3Yv9b09nbZ4ggaV1MGZv1Be/GlEyv+QQAqSRdm9Bf7ww/dzlVJAEtcuzZnJibnzOS1KCBfnTUzM4tLfr+/Wz8IVicwb91sAKCmuOrxmbMT9mepUn9+97v9VDXO/hy2VXt2oaDwrfswkb5Pooq0gvPmjb1mcHCtrUKjcTRlYD54+PSSP2xqmx25tX/ZHx6gHOMT0V+k51J/uYuec3ru3b932ABoTqoeT1yNAvKV2XQVecH+P19ba8L09LSZnq42+7J3XYf5yZWkeedMvG3Zne0LZnb6irk+02M613BhD8DqUYB9L/oZalTHJiem84ZY10LtKr89roU6+v/2fHKRxQp9flWv3ctrU6lWb9vyHQjsun8X01VvccfyhqN8QfW5/jVdYFYLh2uTld07N5ld0Q2oNP1Fefu2IXPszbO2/V/03NPFmUH+8gQant9anat6LGvWtNhQvLY7Csfr9YPe8n+a9+2IPzBv6Z8y5y9et7ebBjvNxuim+wMA1eAqyfq5KV9I1s9RCsR9UVVXbdGVnhWjgN3bnrtKrGCswojCs2sN9+nX+plPNxeet0c/E1J5rk9NF5h1pcoZvqWfsIzY6TmmK5PuQo2GzBGYgcZzfWbBhuJrNhzPmZnZxRWrxwqjvevaTVtb/g2P90aB+TuvJM3kdDyhWZO4f+6hTnNlYj4TmnVTeN+yqdsGaACIg2u3fuvtCzlDsgKx2p1v3tSbGb61mvRznP+znAaLKTj7Z6szv+eFZ913zbXR18ERvfrRdIHZnTUQVf+AalBV2QVm164DoH5lD+aamJxfFo5FgbPHVo7bbRW5lFZnBfHjb18xuzYnzI/eHjBxePS+RbNpoCW6rTfDW3rMe+emzdil6/ZrfDP63KdOXzMj0f9fHwV82rUBVILCparJuX4uUiB1IbnWt43o/g1399sWbNHXpAJJdnhWRfrV10ajrztVdVanK5tUal/TBWb/ylUvbRGoEv+5xvoyoP646vHElblUUI5u2VQ9dlVjF5QLqR6vZDQKqgqvCuObNrSYx/bNmef3t5tK2r7xqulpVeBfa++vAvG24bX2du7CtL0PM9HXr+AsqjYrVBOcAZRipaCsM8cqaKkLtJ6DpF+BduHZPxLqV531tRKca1vT72EGqoG2G6B+FDqYa00UGG04Tg/mqmSAdJVdF8xv3thlQ6q8d+6aeeO9HlMJ92xbNCMbdHY5VTHfvaN3ydexcajL3vRY2Krz5ZlMu/ZAX0dU+enmnDOAgqwUlF21tRGPrLnwrK9PX7vm2vjFE4Jz7SMwAwCaWr61TuIP5qpU9ThEwVzBVFVd+3k7WszObeszoXT/69EPVQPzUWBfNIffLW/V1GP7kubR+5JR9XyDOXT0sg3Mh46Nm3t29S0L/7ZyHt1Uadd9U2AeG5+1N104ULs255wBhOQKyo1STS6U37btgrP/mBCcaxeBGQDQNPzBXIWsdSpmMFe5VMV98+RV2/4srqrsPrerOCtE/60PrjE/N7dgnn+1xRw4XtwgsNs2Jc1jUVC+bXPS/lrh+J7dqdCsz63QfOft66PHYHnrt95WAV73S/fXb9fWOWdXdaZdG4AGYf34tdGcQVnDr5q1A08V54cfut0+RgrOfru2XtdjpmC9m+HENYHADABN5FQUuCbmUkFpuLvV9LXHHwRXS6GDuQpZ6xT3/Rx9b8q8d3YqdX+yqsriqrr6PYVbBdLONcY88ciieeiuhHnpcMKunRrPMVOwM/pQu4aTZt/OG0F5ye9HH2/fPQN2uJjarhWadYb5pqHwrA/7+dPt2jrnrKq4Hmu91I1zzkBzUwjMnnpNUF5OVeT79w7bYHzw8Glz5lxqOLFatlWV13Yf/T7bVVYXgRkAGtjBKCh+68z16DYdvT637Pd72xPm4SjcfGRzp/nV4cqci10t2WudqjWYqxzZVWWFTFWW/fuksKyb7vudO5e3S28aSEbBORWCz44lzPVZkwnOCsqb+o3pW5fMe1/08XWG+e3RSRvedb+uzy5mzk7n4p9zPuetpNJNj7N+j3ZtoDmo/fpQFPw0DdpHm/HK9Lg8+MBWu81HwdmdcdbLF186weO3ygjMANCAVEn+rVcvmxcvzqz4dqo2K0zr9oVjV8xnd62vi+BcyGAusSudYhrMVY7sqrLav3duX7+suu3CsuzYuj5v9VvhuVyqLCs8+587X2gWd85Zb6v30/fGfo+im1tL1d/XsaoXKADER0HvrZMXlvy/Rh7mFYfNm3rtTdX5E9Fj6YKza9Pec9cW+/uoLgJzidxicl1Bm5tbMEAxdLUwF7UpDfavrYu9g6hNT7111YZf13pdqNGpBRuyvxi973MfGDIj3bXzT0QtDeYql19VVjDVmd9QID1/4XomsCrEDvSvMdViz05H903VZt0HVe/VJl4Id85ZFwXU3u2fc3aTxWnXBhqHzuG+/KOTS6rKar/efccm236N4m3fNmSDsX++WeFZj/Ou6AIEZ5uri8BcJIXjHx8YzZwxAEoRWqngU0vOoSOn7T80+kuRsz4olIKybuU4FQXnD//VBfP19w+aPb2V3flbiFIGcykc13oA09egAKpWZeld326rxqH7bddKnUx9H22bdhSqq82tjDp0dNze59DaqZXoYsVG75yzPoaqzeej769eV5v2xujGWiqgfp2IKqE6a+ufVVY1+f57h7noXyZ3vnkoejz9VVTubLOGhvEYVweBuQi6gqbKoL87DYiTWpsUrvWXIqEZ+VQiLDsuNKvSHGdozh7MNRm9zFc9Xo3BXOVSpfV4VFXW16uwv1IIvp6eVC16u0LaoeOix3nv3fnXTuXjgrO/lsrd9Dm2RI8F55yB+pLdgk1VOR6alj2YDs1+tfl7L75hL0zQoh0/AnMRNBrfD8t68o5ET+LuLq7uoHJ0YeZU+qyKqMVJ/yjpKiOQy1dHr1UsLDvjc4vml39w0fz1YxtNb4WmaRc6mMudOXZnkOv13Ku+3pNRVVmBWVaqKru3VyhVsHZrpVZbMWunCvlYbi2VpmmPXUpVrt1aKp1zXh99v2nXBmpXqAVbPwtraFXv+i6DynPV5r7o8T145LT9f+p6pUW7OgjMBVLrg99Gqys6uuIDVNxA6mqiWm50NVF0RXEkfYURyKYBX5UOyzc+9oL92P/ynj5TLFc9tsHYnkGer6vBXOXSQC8N9iqkqiwuLCuUDmxYY7aNrDO1IrR2akcUfHU/S/14Opetm9q1/XPOwloqoDaFui3188k9d26hE64K3Nlm/3ugnxf1fdFAML4H8SAwF+iUt1BcV3EIy4ibrhhei/4CdO03752dIDAjSIFWA7vi8vRbk+aT29fmHQJWyGCuWlvrFAcFXwVLXSiQfFVlUah2YVnnsndsrZ2w7GSvnTp6fKIiLeP+Wio7XVvnnNPt2gN9HZmz1ABWlwbe/uCVk0vOKyuk0YJdXao266iev7dZPyuq4v/g+7ZyrjkGBOYCTUzcaDvRLjSgGnTV1gVmDQLTP0yAb2Ju0XxtdMrESbO2/10Umn/XqzIXstbJH8zVaNXjXIqtKjsuLK/paIkuyvbW9EWEUtdO5aNQfE908885j43P2puma6tdm3POwOo49e4l8+pro5lf67yyWrC5kL863N5mvxtRgVmVZ4aBVR6BuUD+1TSehKgW/yyQ/xwEnP9yZtpUw1ejUP4/39RR8FqnehzMVY7sqrJalVUlLiT4qg1ZFx0UlnVWuB4uKpSzdiof/5yzqzq7dm2dc3ZVZ9q1gepQIDuWDmWi88qEstqwK3122YVmtWkTmiuPwAzUMP8sCvu+EfKtKgVmVbK/89YVsz0dALPXOtXzYK5y+VVlhd5tw+sK3pnsKqn1FJadctdO5aOP0+mtpdKQMH0OvdSNc85A/AjLtU+hWd8XtWiruEJorjwCMwDUsTjPLmeb6OkwO7Z0NUVrdSEU3t4+dTVTVXZTrQu9cOBamnXx4c6dfXX5mFZq7VQ+/jnnc95KKt10sUa/R7s2UFnZYVldb6y5rE2ardTb22Ve/OsThOYYNGc5AAAaxKnAWqY46Bzz5Jo2s3Gwi7BsUmF3/+uXbFi21eEoJGqqdbFhWTQQrJ7b193aKT0Obu2UWrTjoIq22rXfd++ADcj6nPoeqF37ldfGbIAOTWIHUBzCcv2x36O/cbs9Xy4uNGuCNspDYAaAOjYxlzSoHlU4FZRd2FVVed/d/UVNcT5/4Xrm/TVAq9D27Vrm1k6p2qvQfCB6jNzu6bg+n4KzgrrOiruwruC8//Bl+zKu0A40Og34IizXJ0JzPAjMAFDHetsTBvFT1VIDrlQ9zQzoKrKqLHrfN0+mdg0XOkG7Xqi1XAFWX9P8QtKunXIXBuKi4Kx27Af2Dtrg7AK7Ks0/iirOCs66yAGgMJq07E/DJizXn1BofvlHJ5mFUwYCMwDUsb5q/hAzPd+U4cNWlaOqpYZ7SSlVZXFnfKUS+4trlarm7mvzW8/jpuCswO7atUXBWY+5zljrdQC5qQr58isnM7/WICnt9SUs1x+F5vv3Dmd+rQshP/YuhKA4DP2qstF3L5n3zk3YJy5QrG9/70jO39OVRP0FqcEPQ+xFbBofGFxjTo3Gf45Zdey+ydlM4FMlrye9Pqozqrb29LSbRqOqsqZfu6CsqrLagIsNyqL24CNRxVUf0w0Ha2TZa6fmFxbt9PBq8NdS6XPrgofdGR7dtJZK+5zXR89fzuIDNygs29bd6dRFUaZh17/Nm3rNnju3mINHTttfnzk7YSdp77lri0FxCMxVooCsq3buLyKgFPnOoOh5NvqTS2b4ln6zW2sG+Ieu4e3pbTNfM/HrbW8xP7Ol21ZJdXMBROt9RG3JPV2tmRVTCtP1vGZKIevNk1dte6+UUxG+nh6EpY+l/cxq424Gas3W8+Do8SvRRYfp6DGdq+jaqXxccBatpfL3OQtrqYAbFKTcz6i6AE9Ybgzbtw3ZqdluT/NbJy/Y7+vtW4cMCkdgrgKFGDfmHagGheaLY5PmQ4/cQStVg/vV4R7zzw5NmLh9ZHNnJnyoSuoH58lrc2ZmdjF6fTGzYkkUlnTri0K0wnQ9VKGzq8q969ttZbTUKdb6eC4sa2e1ztk2E11AqcbaqXz8tVS26hw9T91aqoG+jsxOaaAZKUydOXfj3xG18hKWG4f2NOtiiIa5iQa6qRNRXYkoDIE5Zu48iAvLump3e3S1RxVAoJLcX4YKy+7XOq+i80doXKr8/spwt/na6JSJi9qxP7NrfebXqhzbSvJ6BY3U/1MV1QboKJC4IO1CtTs76qrQrpVblehaqkL7VWW1E5c7lMsPy2rn3r2zt66r7qVya6cUmt3aqdUIzaLn3T3RTc9XBWc9N8fGZ+1tTXR/1K7NPmc0E7Xp+hOx1Z2mVl40lnvu3GIuXJy0Pxtq+JeyCUWVwhGYY6a/iDgPgmrQ82owumLYF10x9M+rqNI8yJnmhvbZKMx+68x0bCum/rt1bWZj68rTuBV+dFPLseOH50ygTlehXSu3QspatXL3dtgK7GpU+RRsj0dB2a1BUlVZu5HLDXQ6v5uZqB0FxmZu/XVrp1ylWWundmxbv+T5Uu374845X4q+76fPTmXatXXOeWMUmhWcaddGI1NRR63YzuaNvbYaicajYKwM8r3vv2GLeMom+t77g8GQG4E5ZidOXsi8voszpagCnVcZT59llvei0ExgbmwjUcVWoTmO1uxNUV74pe6EXdFT7Dne7Cq0gqk9+5wO0roppOimCl/m/byBYnoZZ2hRSFZY1n2rRFXZUVhW9ZKwfIMeX00X12OjlnetndJE7dVcraXviz6/bv45Zzfdm3POaGRqxfaLOgyDamzKIPoeu2nZ+jlRPx+O3ErXaz4E5hip5SEzQCG6ssMTEtWidioXmFVhRuN7cvs6c2hi3nx1tHIrfFRT/n8fucn0Tc5lAsS5KASW2k6rdmRVFP2qokKzzkD7LdyhgWK9a9syVehKDBRTxfu4dvSmz1xXqqosepwUCBUQ79zZR9jKopCsx0aPk8KzdjbXwtRw/5zzufT5ZnfTRRz9Hu3aaBQn3r6Q+TlBOLfcHLRJRUWVt9IFvUNHTtvzzHzvV0ZgjpG/INwtDweqoc8b5MCi+ubx7+/bYF9WIjT3RHn0yQ3tZntbwvSkz3W6M6ilVJtzfp70YDCFEXEDxfxKtP6fO2ea/X6lDBRTmNVgr0pXlcXfO6wAXuqwsEa3mmun8nGdESutperv62jK8+hoDGrFzj63TCda89D32x0Z1c+IqjirXRu58S85ADQQhebh7lbzhWNXTKlGovf/VyPdZu3EjDly4kqmovzA3sFMICy32pyLP1DMpAO5QrMqwoUMFFtprVWcVWU5f+F6JiyrijrQvzrnc+uFLlLoDPvxt69m1k7p+VQrQdSdc3bPPX8tle63nme0a6MeqRXbDaNVKzbnlpuLul7VUaC926JORAVohr3lRmAGgAaj88xaA/VLPxgzo1OFdxj0tidsa/cnt681fe0tNhgokPpTjYcD1eabN3WZ4Zt7Ygs6rpqca6DYSmutOjtabCv3/HzStni7qrKCciUDbWrCduoiRSUr1qW4fNWY8fRJjM7ousPmAVOz9D3tubstMwxs/+HLqzZBOxc70C7drq1zzvozYddSRc9/va4/DxoSxloq1INRb5uGUFlsTuoo2L51KNOarSrzzw/cydTsHAjMANCA9kQh8cjPbTYvXpyxLdp6mSs8Pzy4xt5cUHa2jazLVHIVmvfdtcGG4uxqs6qDY5dnzc6t66oWGvKttbpxM0tauaVfwTuRep9KBDN9nqMnboTlap/HvT5jzEtHEuadM6lbyKaBpLkteqweumvR9NXYKuhaWjuVjzvnrO+5JmtX+5xzy9FjpmX0XdM6OqonnklMTZlkd7dJDg2axeFhs7DrDvs6EKL226NeK/btUWDi7Grzym7N1nODwW9hBGYAaGAuDMvBiVm7empibtH+Wq3bwzoH3B6uDKsSqyCz/9DYkiDjKsnZ1Wb9ftzV5lxCa61chdx9LRouJS7gSLlrrRS6jxyfsJXrmzd2VTUsu6D88ust5vrsym97diwR3Yx5+XCr2bsjaR7bV1vBudbWTuWj7gW3lirXOef1UYCuROhPRMG47S+/Y9pf/CuTuDiW9+0Vmucf/kB0+2kD+LS5xZ+KrQojmld2a7aqzRpQ3OvNwUEKgRkAmoSqzsVyodkFGZ0B3r2zL/P7tVBtzqb7+fapq5n2bD/IZg8UC621siutorCj+6+W7lwDxa6nLxLo/RXsVJGvlpNnjPmz77dmWq+LceC4KtGt5tH7Fs2+HfHs7i5FLa6dysedcxZ/LZUu1uiikYaDlXPOWRXlzj/6jwUFZaf12Bup249fNbO/8stUnGFlD/pi1SlErdm6uY0q2s1Mm/5yBGYAwIr8llkFS4UBFxKcWqk2+1OqtQNZ99MP7qGBYjoDnT1MTDd/rVX2QDFxYVmV6R1bqxeWXzqcMH/xcnmPqYL2n32/JXq5GFWbayc0S62uncrHtWtrt7cCvz3nnO5mKOWcc/szf246olup2l7db1pH3zUzv/HrZmH3LoPm5rdiq7rMqlM49987bL79vSP2dQVn3ZiavhSBGQCQl0KzdgofOjpuA4AbAJb9NqtVbVbFWOFKQVdcVTlfWHcDxRy31irfQDF93Mxaqluqd1Fg//Hyw7LvhVf1sWovNLvnlnsu1dLaqXzcrnF1IOi+++ecdQRgJH1xaSXlhmUncfGi6fzil6LQ/A9o0W5iqi5n71wGHHUa+APAdHGFKvNSBGYAQEEULHfvWG8rq66KG6r8VbParNCqncqq6EmoqlwMf61VroFiCs76vPbzR9VPtQ67KrRt59ZuaE3orvDQKk2/rmRYdhSat25aNLdtrr3QrMfRrZ26dm0+ev711s3+Y9eura/jUlR11pAw166tc86qOOvPSfbzpFJh2dfxta+bxeFbzeIIQakZ+dXl4Vv6qR5iGQ0A0wR1rRujyrxcffyrAwCoCQqDrv3YVs8uTAffzlWbXaBW4NHKIDdsqxIUYPUxXVhWVVlnYCtdzXbDxHRG2Z1nVjC3u5a1FikKdQrQCtJq41aA1rqtV6Lb0TfHo/83Ze9ruf74uda8w71K9cz3W2L72OXQ47v37g328dbjq++3LmDUEz1/dA5bfx70Z0dfy0y6+qzniQK0+5oS5y9UPCzbjzs1ZTr/4N/aAWJoLtnV5d3sXEaABoBt33ZjCJx/kQVUmAEARdI5TbUp6wf+N09eNa1RxS/XNOPsarPCwXgUHssZhJRdVdYZ4m0ja2Nv+061mU/ZNmy1pysouyq0a+XON1DMnYHON1AsmwZ1lTLgq1D62C+9njCP3VdbVWapp7VT+bhzznqOnPNatVNrqdrM+//oSyYuas/WtO25Jz5q0Dyyq8sM+kIuWjP21tsXqDIHEJgBAEXzz5hqcnZnFGByhb/ss80KBwqWhZzlzKagoZA+k67IVWvvsT9MbMfW9UvOPYvfyp09UMwfJuZWD/kDxXrXttnHzoXpUMuxzi7H7eXDLVFgrs3qrQvNqt67tVNqz16tSezlcs8Vt5ZKLdstx94oahp2Kdq//R0z/3M/a5I9tTt5HJWTXV1m0BdW4qrMbpo6Z5lvIDADAEqiH/Z1hldVV1X99t7dv2LVr5xqc3ZVuXd9ux0ClR1c43D+wvVMWLZt2P2F7QZ2A8VUUZTsgWIK//p/qkBnr7XSrU9nobtazexiu3nnTPyBWS3Z+jy1dpbZsbuavbVTes7V+tqpfNw5Z7Vkr3npdRM3tWa3HDtmFu6/z6DxnUgPcRK3PghYycgt/ZnArArzxJVp9jIbAjMAoAwKLAp9qhoX0ipbSrVZa3oUkhSy7VTq6G2rFZJSFe0r9vVyP29ooJjCs8KSP1DMhWp33vvSNf2w0meq4UxU4Lxts6lp9bp2aiVqz+9+/TVTDVo3RWBuDmfOTmReVzs2kI9a9v29zKfevWT23LXFNDsCMwCgLBqG5UJeoedLC6k2K4gfP3nVBmZRVVnt0NU6u6qv5+iJG2E5jlDmqsn+GXA/PKul+8J7hZ1zroSzl1TJrs0Ks6+e106FtJwatdXfamg9+oZB49PE46npVOcKe5dRDA2Ge/GlE/Z1tfTr12rXbmZMyQYAlEXVPp0vddN/dc7UrV1aSfYkbVel1ku13P7o4CUblvXxVVW8Z9eGqoVlVX2PpL8Ot9O5WlIV6G57RlePT/fa6rUcj181dUPfE7tmqrXFTmHXxZdCnne1qCXms8s+Df9C4zvlnV0eJiyjCKowuzbsubmFJc+lZkWFGQBQNheaFVpsZTYKm/p1IVy1WcPDVFVVtdmpdlVZrqcnMSv8u3VSq6ma654ujs+bv/phfQYqPXdefrU+7/vNR8+Ze0z1KDQnBwcNGpOGfbmWWhmhHRtF2ryp155fFrX2a4J2M6PCDACoCDfJ2O3M9YNvIe+bvZpKIXzjYNeqhWWtq3I7p1dTXxXn9LS31meFFsANflhWtZBVUiiWH5D1fFKluZlRYQYAVIzCrXYUHzqaaq3Wr/O1MyukuuqyKDirtdaF7nL3NhdKn1OVcYVlhf7dO3uDK56qrbNDZ4rjn5ItGwc7zAd+6iZTj66njwOow8F2PKyw6qzWtM1EV0W+a6qG6nJj86djM+wLpdCZ5SXDv35yqamrzFSYAQAVpSFWu3est6/7+4tDdFb5wOHLNhwr5Oy+vdeeS1WlOjUNuWXJ2eY4acCYwpbCsj5/NSvbPgW/cxenzdunrpr9r18yVycKr9SXa1N/7Q/8ysWtnVJ7vyZn74+eV24NWa1bvHXYVMvi8K0GjUvt2K6VVm7e1GuAUmzeeOO5409cb0ZUmAEAFafBVWpnVghVYFYY9lcyZVeVFXJsQPYqunr7/qja7J9tjqvarPVEGjBW7bCc2c08PW8mJqIfdCfnlw2uumn9ojlsqmNrja+UKoT2Guv7V09rpxZHhk2yu7sqk7IXh6guNzK/HVvnUJt9ujFKp8nqh46ctq+7tuxmfT4RmAEAsdg41GVmZhczwUWh+abo/+nX752btsFQAVUBRwE7xJ2LVqVw9PRUQXubi2XvT/Txdf/UTh5nWL52bS4KxVoXpbVRs2ZmZvmZYd0Pu695XXtm7dTJy0nzzpl427I72xfM7HR0ceJKZ87vR72ot7VT8/NJM7Vpi+l5+7iJ28J97GBuZP5EY79CCBQruy37vajK3KzryQjMAIDY+MFFofl0FJRVURW3rqmQc8Ku2qyPo9BcqWqz3zKuadwKp5XizmG7vcrXpheWVY8Vjnt62uyAMb3sXdcR/Hoe25c0X4k5MG/feNU+troprOuCR6UuSqwGPTf0/Tz+9lW7dmrm+oLZEV2cqYVz6Y46LewatejPxfp7HzUPxByYdXZ5/uGfNmhMqgD6FeahgSpODERD0kUX95zSSwIzAAAxUDBWu7NC43z6jPBKVeVcFCTt+0VhzgXncqrNqap1KiyrHXygf40pld9avVL1eM2aFhuK10ZBTl9/oQH9lqEFs7k/ac5ciqf6rUncf+vR7ujxSNqAb4N+dDsVPT56fNdHj/lqnekuhwbIde5uNUfeHDdj47Nm8vBlOwxstb8WPcZ67rkjCbKwe5eZeX2HWXM8vtBMWG5sF7ywrD26TMdGuXQG3rVlnznXvOeYCcwAgNgoGLx58qqdPJ2RSETBsfTAosqnwmY51WYFeFW8Re/nn68uhCqDCsXXbDies63nK1WPXYt1KdVN9xiODLSYCxMDZn6h8pXmX3hwMXNBQs5dmLaPr75venx1v/v7OqoyrbzSdFHC7QifSa8NW63QfE4V/OixdUFZzxF1TmwcTLXBJ3/xbxvzxS+bOKi6PPvERw0aV/Y6KaBcuujS3tZq5uYXbAeDBsrpYkyzITADACpO4XH0vanMlGJXVVZIVSW23NBSTrVZn1/DyEQBMN9AqEIGc4k7b9y7vj1na3Uxsh/DwfVJ8/CeefP8/squSlK7966RpdOxdVFCN11Y0OfXY+vatfX4uoBXL9xZeLd26sDrl6q2dkrfR7Vcu3P74obgqfvCv4gys+MOc+6hnzUjL33HVNr0Zz9t0NiYjo04aHjcaPpsvLoYCMwAAJQpu6psK7jpYOAqfQotCi8KLeWcKS222qzK8JHo8yq4uDPUobdR9XjiylxRg7kqeTY2+zFcet47GYXmylSZFZYfvW8x5++rpVk3PSbuMXY3dQlUcvha3NzaKT1HdP+1dkqt+MV2FxRK30NdcDg/NpMJyrqYMtC3xj5m2c+X6+nq98z9f9O0Xb5kthz7samUmd/4B+xebgIXs1qygUrwn0sTE9OmGRGYAQAVkV0RVSvyzu1LB2nZXcs7epeG5ihEl6PQanMmkEQvFQK3jawreDCXwqENxysM5qqEXJV5v5qrgLtpIGH+68stZnzSlKSzIxWWH7x7sbC3Tz/GCu2XohB4Orp/rl1b55xVcdZjXQ/t2nGvnQqdT1ZQHr65J2dVXs89XcjRY6o/N53/5LfM3HPfMu3P/Lkph1ZVzf7Gr5v5+5mM3eiyzy+zTgqV4g+P8y/KNBMCMwCgbH5F1LWb5gohrj1WodntV3ZnZ8uxUrVZXFh2XnntYt7BXHFUj3NZuaq8lFqoNw0smOdfbTEHjhdXbb5tU9I88cFFO+irWPre2Vbi6Oafc3bTxhWa6+Gcc/baKf//lUIXOs6PXY8ek+uZKfB2jVr0eOixWunxOB+9z9vvTtqPoWC9+/Ze+z3XeePFwQHTEYXmxMUxU6yFXXeYmd+kstws/Mof1WVUUm9vV+Yc89T0bFPuYyYwA0CTOBX9ID86dSMw9ra3mOHuVtPXXnoYzK6I6gd+rWfKF5j0+9p5fOjouA23+nUlqnx+tfnk6I1qs8KLH5bVKiuVGsxVjlBlftvI2rxnhBV4n3hk0TwWFQ9fer3FvHPGmLOXEjneNmn27YjC8uakvVWCO+esoH/Oa9V2a6kUFFXJr1V6vqmCr+eJQrN2ZBe7dqqY88kh+p674XN6e3U9LPn4D3/ATs9u+/F+0/7tvywoOCsoz0VhW++H5rGkHbuXwIzK0vAvd0ZeL5ttqByBGQAa2IsXZ8x/OTNtvhaFgom5cFB6eHCN+ZXhbvtypIg9xAqdGp6loKCQUOy06dT04j6z//VLZVf5goO5FlIBRkF5Jv12bipxsWud4hI6713sY6DgrCnXcn3WmPGrCftS1Hrdty5pX8bFXmhYn5qgre+jWrZTa6kmav6cswL/2p72otdO6fumkOwuvEi+tuts2dXtXN93VYjnfv5n7a312DHTcvQN0zI6ahJTU0veZmF42Czcv4+KcpNS9c/po8KMClPXggvM4wRmAEAjUFD+wrEr9mUhb+ve7pPb15r/bdd6W33OReFUQdmFhUKryiEKrDu2rrMfT+HBVefyyV7r5NpgffpYxiQywdlRWI5r0FOhCjnvXQoF400DlakgF/2509V9+71Jn+P1zzmr6lyL7drFrJ0KnU8e2NARVYe7Cw7K+t6rqqxKvOyM/uzcNFTYBYWFXbvsDchGSzbi1OyDvwjMANBg/tmhcfPUW6UN5ng6er9no4r0cx8YClabFfAU9EqtKoeoyrewkLQhQjd79nPoxj/OhQzmErvSyRvMpUDiQrhabe3E4uj/6XPo9R3b1q9KeKtEVbmW6THtTLdr65yza4s/H329bi3Vlo1dVVnpVKjstVMKzXfevt7ex3Lbrn16f31sfQ43AK+e1nOhNulMqasw62wpA79QaWrJdvxuhmZBYAaABvJbr142Xx29ZspxamrB/PTz583v3tNrfnU4FeRUNTweVQpdZa2cqnKIwoemFbvJxddnFzNV5FIGc/ntrrqfbj2Sm6Str0O7eCsR+AsVV1W5lrlzzgqImqydfc5Zv1cr7douNL996mpm7ZTu26Xx2UxQ1pnnLdHzJbQWKh9/Srs+jj5XPUwVR+0bv0J1GfHqo8IMAKvPXiGPbv5VTBRHleVyw7IzPrdo/lEUvvf0dpjB6bmKV5Udv7XatVW74OwUO5jLVsHT7689uwP9NwZPZU/Srla1udGryvnoooBbS2UvWESPR+qc85xt19Y55/XR93W1A6Sea1qRdenyrG3ld23TxZ5Pzpa9Nmr3zl7CcpPR2qehmM596t9OZzWry9euTZkLF8ail6lAddttt0R/dy//t+L8+THzn//zn9q3++Qn/6656aYBUw/09T399J/U3f2uBP95pUnZzYbADKAm6B/8b3/viNm1c5MZuaWf4FwknVcutQ07F52E/dhfXzD/ZkOr6WlJ2AqtzhuXOkU6ezDXZPQyVD1WaFFoFq3Y8QNvPgq/bupwrmCfvbc5zmpzM1aVV+Iee/HXUumcs55X/X0dq3LOWd8nDf06H90n10XhPw/VzVBqWM61NgrN5dibZ82x6OX99w5X/N+3Ca/C3N1V/X87FSSfe+55861vvWCmvGF08uijD5qPfezDS8LlK68cND/84UH7+gsvvGw+/vHHM7+nMC09PV3BsB03fS0u8GcH4sOHT2Tu9ze/+ax58sm/Z5qFArOet1NTqbB8LXrZ00Q/pxGYAdQU/VAx+u6lVHC+td8gP62LUmCOw+ko0P6r8aT5+k8NFhVcpdDBXG5atT1/nG6tdjuaFTRUXS4kQOnja3iYFFLBjbva3OxV5Xxcu7Yec11QsOec0+3aanlWpTfu8735zifrvpWzdirf2ig0F61+0oXh4eii8O7o37hKBefVrjB/7nN/YN555yfB31MgPnz4ePQ2/zgTQH/qp/aYZ5/9ng2mjz324LKPpSr1o4++f1UC6bPPPh+F4efs60899S+WhOatW7eYoaF+e79/6qfuNc1Gu5id+SY7x0xgBlBz1O7z6mujNjw/+MBWzmTlEVdYdl66njRHoizx8Apv46rHNhhHwcKudSpgMFeuYLrb7mi+bD+mBjFpavFKQUXhXC2v+pwKJoUG01C1+UevjZUVbkO7qbcNr2vaqnI+7ny5vofu4oW7xbWWShcz7BC4sZnM81Tfp40DnXbtmHuuZa+dun5s3A7qKuSCSqFro9B8Rn9yyYbn7duGzO1bh0y5/MBc7QqzArELy6om/9qv/R1bGVal9tlnX7CVWAVgVaB/7dd+0b7d0NCAefrp3zH1pl7vd6X4F2P851wz4F9vADVLwfl733+j4lfjG4mqy18bnTJxUlOqJmdrT7OTCsVzZtJWj3MP5lrb3Z6pHGcP5lqJmyC8JDTv3hB8W3+YkoJVKVW87GqzXp6LXhayk9fnV5Urfd670bmLF3rMtMtZQ8L8tVSarK0wW071P7QWKt/5ZH/tlJugvdLzopy1UWge+vft0OHT5q23L5TdUeWfKa12m+wPf/ha5vWPf/zDmTZqvdSv33nn3eh22pw8eaMCrbZrBW1RpVZnnVWFPnz4TRu0Re/zjW88ayu8CuKpz3XQfjy1az/++IeW3A99PH3c0O+JPrY+h7tvt922xdx1184lb6PPd+TI8cyvFfK7u7tsFVxhOXS/fbrvajfXBQS9ftttt5oHHtgTPOuszyW6D7ovL7zwA3thQZ/vrrt2LLtv/tehxyb1OHTb+3DnnTuqcp7avxijluzB5jnCTWAGUPt0NV43/VChq/GszLihkD3LlfDVKJT/5vrWnGud/MFc+arHhXJTi117toKTO//q+GFZn1tDvsr5fH61WR+z0GpzqKpcySnizUSPmW2Jjm7+OWe3dkwXRYo556zvzfmx69HHup45FmBXl0UfR5+jkI+z0tqp7M/F2igUw3VUqeJcjxeGFVAdhUQFS9+nP/0Pl73PhQuXMm3PevtUYH4z8/9EoVM3hUEXmF955YANlnqfUGBWIM7+PYVc1+ad7fHHH8tUvcX//KL2bFGA1ccN3W///n7pS3+Y9Xl+YP74j//UXjj42MceX/Kx3ceZmpq2b+O3tH/zmybn+7ig7dN9+fSnf3NZgEflEJgB1A3ONy/3rTPVWe8wMbdoXoyCy/Z0hdhf6+TOIMfBBZUDr1+2FTv92oVXhZOj6cnDqTU9fRUZplRstZmqcnzcOWc9xue8Vm23lkqPs9q5Qyq5P1ncc1Hr1dTOrbVTO7euy+wMZ20UyuEuDNdbR5UqoQqx8qUv/ZENeqqYqrpa7McRhVSFSIW/XNXZYriwrMqtgvRNN/XbYK2Arc+l/++Gjmk4mSrMrhKtQK3fz3cfFMpdWHYVab3U51DI/sY3nrMXFj784eWVb1XNdaHhgx98v/26VaEWvY8uFrjHRR/LhWX9f30OnaXWWXB93i9/+Q/tmes4LWnJ5gwzANQu/3zzww/d3vRt2qNT1ftHa6Knw+we7sm71qnSUkFFZ5rHl5wJ1YAvVfJcOKnkfSqk2kxVuXrsOrH1HZm1VGrZTq2lmlh2zlnhWiFZofbG+5e3FspxVWN3PlkXSrQzXKGdtVGoBHe+uZgLw35LdleVzzCr+nvy5Gnz3HOp4PbUU39i/7+qnqrManhXrvZiX6oNeYcN36nAvGXJ9OxSKMhqwJheKizr49+4zz8xp06lbo4+n0KpC8wf/vBjBQV2VX5dZfn3fu8zmSq7PuenPvWFTGj+4AcfWlKRT0kueR+FeFWcRVVn99i5lvZEImE+//nfzry3Liw8//xL9n4qQC//+JXDGWYADUv/kD7zrQOm0ejrimPaaL05FZg8HQedY55c05azmhc3VbC3DqdCsoKKwpAfluMKJ7mqzWr9VnswVeXqchcy7AT29Hlk/5yzvhf+NPaBDR1RNbm74m3R7qKJC86uis3aqOqyq5qiW6PxLwzfc9eW6O+WXlPLPvGJv5MOuy/ZsKnAqwD5wgupM7+pYWC/GGuYC1GI9FuuHbV/6z7K5GT5XVouYKvy67eku/PUCsAKszp3nH3xQGeh/ffRY+UCs1tvlfpYqX9fksmk/X1diFAV311oQLwIzADqmrsa36zTtCfmkqZZKLwuLCRtUHVnRO/c2Rd7Jc+FNF0sePtUqvVareBCVXl16PHujJ4P+p64M8P6vriacqoS3Ge/P3FRaNbKtLHx1KRt+zkJy6ggBecf/Oik7aYaHCh9PkM1qJKrmyhAvvLKa3YgmKqrCs0Kj6HwGje3I1r3SffF7XmuJFdd3rp1+RliPwyfP38pCrdLf1+t275cFxUee+z99oKEvgZVoVPt5N121ZVCtjvnjXjwtzqAuqbq8oceuaNpV0/1tidMM5lfSC59PVm9CwYKRCax9PG+HpgOjvi5FVQ/OngpU1FWF4Jry9Zz49Cxy3ZgnJtWXWm202E8FdH13Eh9znF734BKUEiuh7CcTRVPheMvf/mzmUFUCs1+xbQaFI4/9anfte3QCsz650LnonU2OXs4WVwqVVXX/VUrtoLxyEjqMZ2amrJfl9rgP/WpL1b98W0mVJiBBqc1AD//N+80tW5qKtViXSj9AHH/vcNNf4a5r701qjLH35atmNgbVdHUBrtaU391VtidYVZlUW3ZbsVP9rTiSgqdVb5poLPoSdooXyFrodw5Z71t6pzznG3X1jnn9evay+4GCK2NWh/dh0LXTqFydM5XF03rwYsvnbDdUIXQv9t77tpiNtd4K7Y8+eQ/ty/VIpw91VlhUW3KqTVL07baW4kAqaBYCA3QctXfz33ut5e0Lus+hSZnl0JVYrV4+5Ou/c/jaOBYORSan3zy79rX9VhqvZSGfrlVVqroaxgYKo/ADKCu6AeJ+/cO190V97h8YHCNOTVanXPMicvXzaGp1HAZt1vZTciOOxwoHCukiAunOreq0HLkxJXYAoo+r85Nu5Zb/6zyQH8qNLsgX8reZuSnx35sfNacvzCdCcpuLZQunGRfwHEt9OKvpdLzRe3S/X0dRa2lyr4vudZGFbJ2ClhJe1uruX3bkNle5PpEvZ8zX+XpxUNDqanTahH+4AcfXDIkSxVeN/VZb1fMxGt3xtinFmRR+NY5ZHceWO3f7hyxT2eGU597YElY1v3y90L73FnhYqjq69q+9bH9r9OtptLXX8jws1z0cfT16GPrwoTup74mVc3dY1zohYRS+YO+mm29J4EZQF1wP0jsqpNqQrU8EgXmr41eM3Eb7m41P7OlO7WHObq5yp2GHYkmFa/tajW9vR2md217RYOCPp9Cq70fXiVXoUhBSPej0lU9BSN9TjdpOXRWWYFJw78GogCmMEa1ubIqsRbKraXS91EXNvRccWupFLg3RrdCOybyrY3KXjult9Xzw62dAlZSzgDL1ZxerLCooKgQq2pzamdxvz1rq+nZLsQVesZWVVhVfrVuSa3GqUnbqffVgCwFU9G6KBeC9fldldeXWm31A/vxvvnNZ207tptYHQrk4lfA9Tl0LjsVUHP/Of7IRx6zLef6mHofVdsVaFNrpcaK+vpzURB367v0WOtr0efT1yI6LaTHJ05LAnMbgRkAasrtW1NBudmuaBbiI5s77TnmuId/PRwFc1e1U3jJhOYrszcGLkU3VQJFYaZHAVrrgNLV6FKGISmkaF2PPqdCUnYQ3b2zL9MKq+qeQnO5Q5dWqiqH6Gvcd88A1eYK0XNK34PzYzOZoKwLFhsHOk1/VFEu5furSrRu7uyzv885ey1ViJ5fR5bs/A5PZs+1dooLKMhF3VIKyuV0TfnhZXYVArOGWSmQSqjSqzPDha6I0q5i9zEUONVq7MKmC8/6//7n0sdXi7ILlP59S+0pToVkFy4V6BU4XWXW98ADmlr9rH0fhV1VdvW2K1WH3fniL33pP6TD+XNLfl/7nctdkaX3VyXdH/rl+/t//xdjP5dNhRkogP4iOHXqtH1d+/E+9al/mPNt3ZkW/SWzGlMR0Rgq8YNEo+ttbzFPbl9nvnDsiomLzi9/Ztf6zK8VWNxeXJMOAgoUk9fmzKUoMCuUpAL14pKzpgrNuvWpjTsK0/mq0H5FT2Fm28i6ZW/jAop/fnTf3aWdEyukqpwL1ebyFXI+uVyuXVvfE4VltWz7a6m2RBdlFMr977l/AaXQtVHZa6f8/weIQq5WRhW6a3nFj7XK+3E//vEP2ynOCrAKuJOTqary1q23ZqqtPgVWhcjU2yydLK2K7tNP/wsbCPVx9DF8OsOrUHvkyJv213pdQVoVaQVGvxKs159++ndswH799dTb33TTYBSwH43u6wk7kCy7TTz7fdau7c68zUr3Wx9LoVmPgftcel93/7K5jxMK4qHf8++XHmO1lKfa3AftY1+NIWZzXrt/R5MF5sTk9Hzz7CSJ+Pton/jI3ljfzx9iVC+Dl3JRK4gLwc7nPvePc15x+9jHnrQv9Rflk0/+PYPqqsfnXvZ9juOcslZQ/fjAqH1d7W/6HI1gYm7R3PmXZ2KrMv/Cujbzfz/QX1RoUbjwK9B+CHJs8F7bZtu4e7rallSh/bCs37tn98qVY/v2UWieiap5CteuGl6oYqvK+fhBSRVMqs1herzPj103p8+mgqu4tmt9H6vxmGXOOc/emHiuz63nwCXv7Lw6HEIXbVaijgP3/vaiT3RRhbVT5Tnq7V6ux6FfpZ5TXsnBw6fNWycv2NcVwtWVBVTa977/RvRveqqVvcm2kySpMKMgR44sb7HRVbRyBhgA2eL4QaIZqMr82agC/M8OTZhK2xR9G36pO2HD682bumy1r5Af+PU2rg3W8cOzqtEKKGrhdm3c9mtJt2/rbW60v+Zvs3bnRw+8nloj1Namim/+cFNOVXklw+kWXxviqTYvU4nzyZXizjnr+XnOa9X211GV+r3T16MLTUfeHLcfT89/dURw8aQ5xbXdQReZnampWQPEwX9u+c+5ZkBgRkHceRE35VBhWWdFSj2ToYq1QrhaTDSoIRS89TZuWIJ+X+dTdN7EnzSoKYmp+zWQvl9v2vMd2dMINVlQ4/fzTSl0n0N037TrrpipjiidArIq4QTl0qgte3RqwTz1VmFrSwrR154w331so0lEYTJ1Pnc6CpazZufWdSW1yLo27pvTBaFM63Z6/Y8/TCwjkbBDlFwVeqXPmwrNOtM8bu9rW2vLiiGn0lXl0P15YO9gptrM2ebURROFZHeBQirddl0q9/zU8+DA4cuZIC/6vul7ttI551x0AUgXc1g71dziXIPY0bG6LdloDn5LNmeYgSwKrm6wgibwKZzq1wqz/lj/Qj/W00//ybKhEKndcr+65GMppLvBCZ/+9G+af/tvv2qnLWqn3+c/v9N+fk0jFJ2Tzl4roCEQ+v/6fM8///KSz6WPp/MmjoKyPlf2EAXR2Zzs3YKoPIJy+f7lPX32ZSVCs8Lycx8YMiPRD/smuvnV0mKrzbkoMOjmqtAKKBrcpcCsACvZw8TEX2ml1/37oP+/dbjHBuFcZ0cV1E+OTla8qpwL1ebw+eSBDdHFk43dqx6Ufe456F9EOX12ask5Zz3nil1L5Tog/D9DrJ1qLnGFZeldd6M11rXMApU0MXHjedVErdgZBGbk5U8R1JnkoaFB88d//KeZ3ys0MCssK+Aq6Kqq7Ebiu+XxX/7yH5qnnvqd4Oj+r3zl/7FhWWF37drlv69wrY+v33dV6dTOup/YEK3/r1Csz6ff16qCL3/5M5n398OyArkGNOj9VAXXVEXdJ01uBGqdQrNatMsZArant918/f0DqbCcll0tLbfaHKLKowvLChcKv26YmKtAh1ZaZQ8TU3vtwkLSnh3Vfe3saMms9rFTrN+biq2qnEszVptrqe26ELnWRun+6pyzWqrtWqro991aKg0JKzT06mNpmjprp1BpfhifmqYlG5U328TVZSEwIy9/6Xpqp53JBEoF1UKnYLuWaAXX3/u9z2Qm+unjfO5zv2/3yr3wwktRZXh5MO3p6YwC7pdzLpT3P6YC8T/9p1+04Tj1sX87M6FQn8dNcfSXy7sKtKYz+tO/NRlc6xImJ7lii/qh88y/MtxtQ/PXRqcKfj+tp1Jr92d35R6YlV0trVS12R+SpTOePemw7sLwxnSoCK20cjd35tSttFLo0TlprfZRa7dCj6twxl1VzqUZqs0Knrow4a+Fst/D6OvW116LQ6/yrY1a6ZyzKs76vULatVk7hTgowGgGiFpm1ZJ9bWo2+jPXXGdMES8qzMAKNLbeVWz9hegak+8W1Rfalq0wqls2hWhHHy9EawRyhWXRrj0XwPVS4/51/9R27Y/z19u5tm19Xdnnk0+ePL0kSH/607lXZwG1TNXh/3Bfvw2/atH+q4sz5uDE8knVCsl7ejvsPudfGe4xfe35w0ylq81ud7HsjELsSh8j10ordw7aDRPTSiuf2mmdUqZoV1Kc1ebL0bWB8cnUrbPjxm1zFUYxVGMtVByKWRvln3O2X2v6eaeb2rW1z3l9FKDzfR9LWTuViC4MJ0ZHTdur+03iwkXTOpqa+L84OGiS3d1mYfcus7DrDpMcaYzp/yiOqsyuHXt6msCMytKEd6e7CZ9bBGasyA37Ep0JdhQ8XVu23qbQtmw3VMsN59JNATWf7u7SWibV+l0IVbW/+c1nbYjW+qzUbr5+e2FALdoM/kK9UnD+UvpssxycmLXrpxSU1brtt10XqxLV5jFvbY/9eEOlDVXSLXuYmKp//nApR/9f+6L9lVarEehC1eZSqvUnzxhz7FSLORblp/GrieDb9K015rbNSbN3x6LZutlUjEKmzpef96r3qqLq69LZ9FoOyuKvfSpmbZTb52y//vRQPHfOWWvECjnnrN/XY+WODuh5G7qQo6Dc9pffMe3f/o5JTC3vGGm9mPo3VEFaklGAnn3io2b+4Z82aB6q+rnAPB69rPRaRjQ3v9W/jwozsJR/fvmTn/znOd9GleHQ2WOff4bZUTVYZ5n9z7MaNNhLAfkb33jWhni1bOv2wx8etF+X2s51kQCod6omV1I51WaFWlX2pJJtybpP2p/rB7jW6Obv2XVBL9cwMb2sRrt2OY/fePTQPfNii3nnTCLv51HF+cDxRHRrtcH5iYcXTV9xK4WXqLfzySHZ1d1Snn/6Ol27dq5zzmpFz/W9dGunNNk9tHaqLQrJHc/8eTAo55K4eNGs+aP/aN9v+jOfNsmhQYPG57fJ+u2zQCX4w+RoyQY8bhJ2PgrLR468aauxK1FFWh9PLdhPPvn3oirulkyb9cc+9qRZbQrEuuk+qjVbU7dVPdfXp/tOYAZyK7barGrakfQ04kqGZX1cDVXKPqus++DW+qgCqEA6v5C01cFcw8T0dmu7Wm0Vundte6wTjYt9/PZH4fcvXm4x10uY76OA/a+/0WoevW/RPLYvWdT7qgVZj5l/PlmP8caBTtMfVZTrISiLKsHuzLsGb1Vi8JsLznoOKoj755z1XBpJf4+z6eLM3ruXr51a/6ffsFXlUik4d/+TT5uZ3/gHVJubwJBXUfbbZ4FyXfCeTwrLDP0CPH47tiZKZ7c3a6jWpz71Rfu6BoPlC8wa+iU6U+yfK9Y56dXk2sQVjHW/1I6tyrfOW+trfu655+3vFVJFB5pZodVSfxqxAkSlwnK+Cdiq3LlAqjZYhRJ/pVX2MLHslVZumJhbZ6WgU8mAWOjj9/z+hHnh1fI/b+pjFBaa6/V8cjZ9n/Xc0/fXDeCq9P137dp6/iksq/Lsr6XSZG1dXPA7GLLXTs3/wR+a9tdfMZWgarMQmhubzpW6wV9qn9XwL9Y1ohL8joVmPL8sBGbk5IZjKUD6O4t9blq22pfzBUq1PKd2N5/IDNbSWeannvqqWV0J85Wv/Km9AKCvU/ugNQ1c9821iqsqTlgGCrNStVRVXReWdXa4EsO3sqvKCsE7opCZHWb9UKLApNDsPn+uYWLLV1otLgmN2SutKlGFXunxe/FQa0XCsrNSaFa4PD923Zw+mwp84tqudf/qbR1WrrVRcdHHdt0TCs3unLOed7q5i0XuPri1U1f/0zfMxgqFZUehOTk4YAeDoTEpHPf2dmWqy6oK3ryp1wDl8jsWNm9szucUgRlBOrvr2rG1ezkXf1p2rpVQzsc+9nj0tr+fGazlaKhWIa3fcVEQ/vjHH7dt1wr+n/rU7y75fVWZP/GJwlZnAUjJVS1V4LoRWPpMubKrymq/Huhfs+L9UlA68PplW/1ra0uYbcPhw7yhlVZ+BdoP0tkrrcqtQocev9PnFswLBys/gFCheXP/otk1kgrNjXA+OVu+tVFx89dS6XG1be3eWioFZz1nOt44Zm558dsmDmv+6D+Z6d/5nEn2xL93HKtD7bIu3FwkMKNC/PPLfb3NWTwiMCMokUiaD34wFZT9dVLZdK735Ml33Xtl/r97X396tqrR2onsBmu593/88UdthVe0DsrR6+7j5FoppbAt2VOsR0ZuMcnk0o8nmrbt3sf/mJoArvun1nK1iKvanPra99jfcyurABQnu1qqmdUKX3fu6C0reBVaVQ5JheY+O2hJQbSttaWgtnB9bH0e18Ytfnj2V1plV6EVikoZJuY/ft89VP4Fhlye+X6L+fVfmDbnL9R/23W2YtZGxc11MfjnnPV4q/K9Zk2L+eB//k8mLjrTrGnbc0981KAxKSC/dfKCff3M2Qmz564tBiiH2rHdhOzuro6mHPglicnp+eImftS5Z751IPP6Ex/ZG+v7TU3Nmm9/74h9XU+yn/+bdxqgGnjuhY3+5JL58YHU7tLhW/rN/XvZV1otakFVNdhxg7dK3ttcRFU5FwWpo1HVUSo1eMyttPKDdDZ/mFihK6004VqhNk7bbrpqtm9MVafyTXeuF6WujaoWPV/c+fCB114x93z3myZO2tc8/a++VNdV5qNvnjXHopvs2rnJ7N65ySBF55a//d0j9hyzfOTn7+EcM8py4u0L5tCR1AyiJv65KUmFGQAQq1RL8VRmyJKGH5Wyt7mcqnKIe39VH3UfOztazE1D5V09V/VYt+xhYv5AsexhYuKvtNLr2V/TS6/nXx1VrtGxHvPYfcm6bbvOVom1UXGzz5d0u3brd4+buGk9Veur+xkA1qCyzzGfii4S3751yAClOnNuIvN6M+/2JjADAGLjhxadG1UoLGXvcKWqytkUVNRGrfvyZhScVf2tZFXVHyZ2c7oQFh4mtnSllW3djgL8QH+nWUy0m7OX4q8SzS+0mMWWtdF9rv/GszjWRsUqmTSdrx0w1dB67BiBuYFpKJMLzGrLJjCjVOpW9Ad+DRGYAQCoLBty02F5ZxRwFQKdQvcOV7qqHOIqj7qvatHWuqk4dy6Hhollr7RK3YytQr93WW9Xndbok2eMuW2zqVvVWBsVh5YoxFZL69E3DBrXyK39mRZahR3WS6FUflhWdblZV0oJgRkAUHE6H+zOjtpwPNS57G3y7R32q8qabKxp1pWoKofoPiqcqyp55MQVG5qrNUU510orhWeF6HfGOk21/OR80j4O9WhhIZmZhJ0Ky312kFY9fD1rrlwz1aLhX2hcCscKN7Rlo1x67jg6v9zMCMwAgIpS2NO5YCnk7Gio2qwKrD6O6Eyt3ibuc7XayazQpbCv+1DN0JzNVaHVxn3gVPXOE4+Nz5sfvXbJ1LvUvu/Lpl7cfOyCucdUj0JzcnDQoDHRlo1y0Y69FIEZAFAxquapyqeqcDGDlly1WaHZne2Vag9r2hGF5uvRfdDnV2jed9eGVR+AdX3WVE+izVZl68nMzGLm9Xq77057a/xD3dA8aMtGud47u3TYVzO3YwuBGQBQEdfT1WFViVUxLiboZp9VVkutqoRq1Z5fWCx4kna59Hk1nGz/obFMtVuV5tUMzX1VvLDfu7bFPHBv/VQea31tVKHarlR3gjfV5caW3ZZ94uQF1m+hKG6ftzR7O7bU/94IAMCq88OydgurvblQCj0HDqcqyzqrrID64P1DmcCts8379ftXqlNqdaFZ90WVZhfIVktba/WmVnfGc0Q8FrqY4p+Tr9ewLIu3Vm+36eLwrQaNzw/IfvgB8lF1eWo69e9td1eH7VhodlSYAQBlUfv10fSwJRt4d/cV9H7ZVeXss8qFTtKOg1rEFZr1uTUIrK0tYYeOxS2zt3l63kxMzJqJyXkzPakUW9hjWq7bNtXHSqm6WxuVx+LIsEl2d9s9ydX4XGh8qjC3t7WaufkF25KtEHTzpl4D5ONfYGnm3cs+AjMAoCwa8KWQlwrLhZ35zZ6ArYp0aP1PvknacdLnvnNnXxSax+3nbWttqfh5al00mLgaBeMrN3YyZ9u8YcYc/ompiq0313Zgrte1Ufno+MG1u/eYtT982cRt/r59Bs1h+7Yhc+zNs/Z1hSACM/LJHvZFK38KgRkAUDK1xGqqtAvL+aZK56sq57Ja1WZNqt69Y739fG6ndKmhWWFvya7l6QX7/3wKgWuix7B3Xbvp6WmLXnbYx/TExaR550y8g6F0VnpTDXfe+W3/hT7fap2eC++dm7Z/hvq33GMeMPEGZp1dXrj/PoPmoOnYb719wVaZFYJ0o2KIlRxNX2ARnV1u9mFfDoEZAFCSVMV3KnPmN194KbSqnMtqVZv1sXdEn0OVdH3ezui+3zTUlff9rl2LwvHknJm8Nm+ryP40Z0dTnRWK16bXSOkWugDw2L6k+UrMgfnR+xZNrdIFhiNL2v7rOywrKOu55C4cSeLu3Wbm9R1mzfHjJi6zT3zUoHlo+JdfZVYYevih2w0QouryqLd7mbPLNxCYAQBFc6FV8oUXOzjr1NWiq8q5rEa1eWMUkGdmF+3X/GYUnG0V2AvprrX62rX5FavHqhprKJreV1XkQu/vbZuT9hZXlVnV5X07arMdW+Hy6Ikr9vHsXd9udt/eu+qrvkqh+69qsm7uuaHnhM5f68+EvqaF3/ofTfJ//3wsZ5lVXZ5/+KcNmstIVCV0gZkqM1biV5f1HOF5cgOBGQBQFFspToflnVvX26poLn6wLqWqnMtqVJtdK7Y+n4acKeikqsjzy8Kx+NVj3aeVHqdC/O1HFs2/f6Y1lr3Mn3h8wdQif22ULpIUM329VuhiigaU+UFZz4WN0dejr8kP/8mhITMXVYE7vvZ1U0kaKDb92U8bNB+11Kq11lUOqTIjJLu6zNnlpQjMAICC6aylv8rnpqHO4NupyqpJxm6IVblV5VyqUW32q8euSu52RDuqFLqq8Uqt1eXYEF3sfyIKzV//b5X9uL/w/mRVdz0Xyr/You9zpQeuxS3Udq0KuZ6bK13Umfv5n7UV5vZn/txUgsLy9Sgss3u5eSn8uDBElRkhVJdXRmAGABRE4VfneGWlABNXVTmXSlabCxnMJfq61KIt2htdrUnNu0aSNjQ/8/3KhGadjX7w7to7u1yva6P0XBkbnzXnL0xngrIupuiizsCGNQU/T9xZ43JDs0Ly9d/+n8ziMKukmpmqzNs1ACy9Lujg4dPmQ4/cYQDJri7vuWuLwVIEZgBAXqqyauiSAkGusFytqnIupVSbSx3MZRIJ+3ns1xxdRNh314aqfZ17d+g884L5yrOtZnzSlKQzym2//DOL9lx0LXE7vRU262ltVCHnk4ul0Dx//z7T+fv/l0lcHDPFmr//PjP7G79uK8yArTK/e8lOzJ64Mm1OROFZU7SBl390MvO62vd71+cfatlsCMwAgBX563wUSENhudpV5VxWqjZrUFclB3Np2Nn+Q2OZcK5Kc7VCs1qo/9ETC+bl11vM/uOJgoOzgvJDd6Wqyp01lkOz10ZpB3a5577jpk4EHVM4PzaTeS6p7XrjQKfpjyrK5T4fVBme+j+/bNpe/CvT/u3vmJbRd1d8e4XjxeFb7Tnohd27DOBkT8zWSw0E0/9H89JFFF1AcTi7HEZgBoAmMD63aEanokAyceM85XB3q+ltbzF7ettzvp8fYhQis4curXZVORfdDwVk7Xx2gTaknMFcbp2WqzTrc+2OQl61KPBqFdTencZOz97/ZsKcvZRYNhRMb7epP2l23Za0k7BrLShLva2NKvV8cqnmH/6AvSUuXjStR4/Z4OxP0l4cHDTJKCgrJFNRRi6qKCsgTU3Pmrm5BXtulfbb5qVWbP/sssIye5fDCMwA0MC+dWbaPPXWpDk4MWsm5sLttwrODw+uMZ/dtd6MeIHRtcfeCDFLw2CtVJUlezCXC/AhA30dtlW2EoO5FOpcaNbZVV08qPYkZ1Wb1aa9N70WSoH5+syN9VN962pzXZRTL2ujdP/Oj103p89O2z8T4tqu1XlRjYCfWg31AQOUQtXk+/cOmxdfOmF/rTPNN2/qZcBTk1JY1sUT6e5KnXNHGIEZABrQixdnzD989ZKtKuejt/na6JS9/cpwdyY4KywreLqKnwsxCjg6t+tCQ7Wrygouul82GK+w1kmB2E6t7mmLKsjt5sib43ZQl4Ltms7WirX7KiipffjQ0XE7qEq/Xs2Jzqogd3bUdkh26mFtVBznk4HVonC8eWOvOXNuwv76xwdG7QAwWrObizoN/EFfu6LqMs+B3AjMANBA1Hr9xWNXbFW5FArNCtv/ZHOnuWN6bkl7rMLC6HtTNuRItarKhQ7mUiheaa1TnHub9fl271hvW7/9VUjIrdbXRunCkEKyzig7cbZdA9WiKvO3v3vEDgBThZHW7OaS3YqtQV8jt/Yb5NZ0gbm9rdX+BSHXoidMD736ABqEwvIv/NWFJeeUS6GK8z9+65p5sr/NfP7eARuWq1VVLmStkz+YSy91BrnQdtg49zYrRO2IArhWbykIdkYXFG4aYtpoSC2vjQqdTx7Y0BE957sJymgIrjXbTUemNbu5ZLdiM+grv6YLzL29XXZhu6gVgScJgEbxyz8YKzss+56+NG92n542j7SZWKrKrrX62vR8wWudih3MFVLJvc3ZNkYBWW3f+ri6wNAahXDt30VKra6Nou0azWZzFJD91myF5w89fAdDnxrcibcvLGvF5nueX9MFZk0IdIFZI/V1RY19YwDq3ReOXbGt1JWkU7D/6+vj5qmhdrNR4aHMqnIhg7mKWetUrriqza61WKFZk7M7d/VFX1O7aXa1uDZK90kXg/y1ULpPG6PnhZ4bBGU0MlWZv/f9NzJTs3/82qh5+KHbDRqTWrEPHTmd+bUyEa3YhWm6wLw53XLiQrP+olDv/nD0hFFbAgDUm1NR8FRgjsNklCH+zdVF8/89OFBUJdCvHk9oQncBg7mKaa2ulLiqzQrN8wtJG8YUEvfe3V/Ta5LiVmtro6q9FgqoRdlTs/Wz8cHDpznP3IAUlt33WZR57uH7XLCmHPp1/72pvxxc/75aE/z2BACoJ3GFZefVqQVzcDZpHl7hbQoZzKXqsasa5xrMtVriqDbrbK5dRXTxuv1490SV5mYMzbWyNkqfXxPSz1+YzgRlPSf1fVfbPEEZzUhFpD13bjEH05VHnWdWi+7trBhqKOoecLlH85zoJChOUwZm/UWgJ4quormzGwBQj1Rd1mTrOKk1++m3Ju2uZol7MNdqiaPavG1kXeoxim7NGJprYW0U55OBlW3fNhT9nT5tTr2bKh4din4+HoqCNEcWG4OGfLnOWlFXAeeWi9O0a6X0RHnwga32CaS/IHTVxV15CVErAwDUmkqfW17p8+w/MWHmo0pyIYO51HZbr0GkktVmBTO1H+8/NGY/lgZeKTQ3Q0hb7bVRuqCjlVD++WRVuDcOdJr+qKJMUAZuuCeqMo9PTEd/bqbtr9WJyRCw+qewfMxbIaVhxzqeiuI0/R5mtaIUMkb/mW8dMABQa751ZtpUw8Tconkp+lx7omBczcFcq6WS1WYXmhXAVWm2oTn6dSNbzbVRnE8GiqfzzA++b2vmyKKGgOl1dWQSmuuTCoJ+WFab/S62A5Wk6QMzANQz7UyuBrVlj6/tMO+7s7epWoorVW3WY+ZCs4KcAuVqtCfHbbXWRtmz4mPXzenowobbFe7arvX9a+aBa0ChXPfli399wszNL9jgTGiuTwrLr742mvm12usZ8lU6+pEAoI4drODe5byiinIzBg9XbXYtxao27z982VYyi/04WqXU1tpiq6+uXblRaEWTfVyisOwmYccdlhWU9Tj+6OAl8/apSRuWFZT1vXrfvQP2JWEZKJyClUKz40IzRxPrh9rq/bCsidgM+SoPgRkAgAK4EKYw6KrNb49eDa7LykWTwXfvSFWW/TO+9c4NNfPXRsW5Y1kXK1Stf/nVi/YxdBO4dT78wfuHytoXDjQ7HVXURhmH0Fw/LoxN2g4Bx4VltdyjdLRkA0Ad621PmIm5pEF1VOJss95uR/T2x09etR/DtQ7Xq2qujdIQL03e9s8nq+V6Y3TjfDJQOcO39tuXP05XKmnPrn3ZbdguLPP9Kh+BGQDq2EhUxatGW3Yium2cW7DhqJb2J6+Wcs82bxzqMjOzqXZirV2y+4CH6m+FSzXWRrEWClgdhOb6ceLtC+ZQepe2EJYri8AMAHXsnt6Oqp1jbrs6EwXD1OdSaNatL6rq9XS1mp6edtNsyq02uzPRLjTbx7SOHse410bpTLQCub8WSo+RqskK5wRlIH65QrPOObOnuTZkr44iLFcegblA7W2tdmKgaNQ+ZwEA1IJHBteYr43Gfw52uLvVPBwFIp1VVTusXurmVgcpvNjgnN7DrJfNMmypnGqz3nd+IWmDod5v7939dfG4xbk2irVQQG1RaNbPvT8+MLpkerZWFGlVEVbPwcOnzVsnL2R+bYe2vW8rYbnCCMwF6u3tMhfHUm1nJ6In5m72mAGoAR/Z3FmVc8wPR8F828i6zK8Valx4ViUw9fqi/bVaZ2VNFPzWRiG6t7cjs7O5UZVTbVbgtGuRogCq0KzBVbUamuNaG+XWQo1dmskEZdumHl2IGNiwhqAMrLLNm3rNw3/jdvPyKycze5oPRWFNL/mZuPo0gO3lH520E7EdDWtTWKaoV3kE5gKN3NKfCcxqe7h5Uy+tKABWXW97i3ly+zrzhWNXTFx0fvkzu5aeTVWA0e3m9M9JCjwuQLswrWqrbmPjNyar2gr0unb7vp0dLQ3Xyl1qtVlnf13VvlZD8/X01+MmYWtFVrmTsDmfDNQP/dyrVl87MXs69fe6fiZWaNtz5xaqmlWiSdivRtV+9z0QVfrZsxwfAnOB1I5y6ieXMqH5e99/wwxHIdq1qahlO5v/RAaAuDy5fa156q2rsVWZFZZH8gQjBRsXok36LKvC3+S1uSUt3O7mqtCuldu+bxSkG2GgWKnVZq1iUtDW46MqrkJzrTwWuk9Hovvkr40qJ9Drosq5qKJ+KbqY4oKy2q43DnTW5fAzoFkoFH/okTtse/aZcxP2/505O2EmJqY511wF2cO9ZE8UlLfTGh8rAnMRtJPOv6o2GgVo3QBgNanK/B/u6ze/9IMxU2kj3a3ms7tKm3zsBoNtTAcgV4V2lWiFaU2Kdq3c/vup+qxW7t617XVbhS622uxanJeE5iiYrrZKro3ifDJQ/1QoUjhWdfloetiUfjZWMUnnmmnRrjy1YGvwmivciYZ73b932LZiI14E5iLoqppaUXTA3l1VA4Ba8JHNXTbYVrI1W2H5uQ9U7qq1X4V2rdyZ88/emehUqDZLWrld9bneBooVW23W27tKsx4LDdeKY1VToSqxNsq1XauirAsHQts1UP8UjlVR1s/Ffov26LuXmNJcQaoq63F1w4dFIVmFPB7j6iAwF0lPTF1V0xWe99SCcmXaDjzwn8Q+XRECgGpwleBKhGYXlke64/1nQgFRNw12clyAnvRauO3Z6BUGitV6K3cx1WY9HjoffOjouB0Epl9XemVTIcpdGxU6n6x2bnUcEJSBxrA5PdPHr34qPH/7e0eoNpcpVFUWWrCrj8BcIl3ZydcCoSe6/sIAgGpRaNYKKIXm0amFkj6GVlX9u/s2xB6Wc3Gt3E4xA8VqeTd0MdVmfR337O4z+1+/tCS0VouqyqouS7Fro2i7BpqL68D0W7TFVZsVnEfS+5yRnwpx2sjzVlRZ9gtyasHmnPjqIDADQIP51eEeuwZKoflro1MFv99w+ryy3r+W5Boopnbu5a3cy3dDuzZutXXXQlWz0Gqz7vOOKEwfP3nVBlDXxrySM2PGnE2P1rg+mzCdHUnTF13b3brZFKSctVFjl2dsyPaDsr7OjdGNoAw0PgVjDcTNrja/mv61qs20EK9MFxh00SF7cLAeO1WVWRm1OgjMANCAVB3WIDAF4BcvztjgfHBidtkkbb3d45s7zX+/ucuG7Hrhqsl+K7cfngsZKLaau6ELrTarfXlhIWkrvrrZ3cRZU6RPnjHmhf0t5uxYIgrJuT/nrpGkve3bEZ6mXsraKNZCAfC5anN28HODchWoCc7LaVWUKvLZ7dfqZlULNlXl1UVgBoAGpkA8MtyWqRqPz0UBcm4x83uNJN9AsRu33APFqr0bupBqs8LnfBSaFawVmu3Fgug+no2qyf/1By3mnTOJgj7XsVMJe3vhVWOeeGTR3Lb5RnDODsv51kbpcTx3YdqcH5tZshZqoG+N/XoIykBz09pVhT2FZn+jDMF5qVxBWetqtVeZVvbaQGAGgCbS195ib80g10Cx7N3Q2QPFqr0bupBqszu/rN9XsJ1vHzLfeaW01rzx6OeyrzzXYh69b9E8ti+5ZG2Uqu46O53r6+V8MoBCKQxr7ZGCMcF5KVXgT0Vffygo375tiPbrGkNgBgA0jXy7oRUI9f9CrdxxDxTLV23W76sS/NLhdvP2+fJ/kHrh1RZz7uKCuaV33P4619ooPR7nx66bsUszmcfEtoanzyfX655sANXhgrOqpUezqqkuOKsarfDcyBXVXMO8hKBc2wjMQAPSX8oOf/ECuRW3G3r5QLFK74bOV20+PdEbheXKVbuPjraaa4Przc++b2HZFG7OJwOoJIVinW9WYM4Oznr9Yro92YbnKDgP5dlGUw/089h75yZsRTm7miwE5fpAYI6R/8TX0AP9oeEPA6pB+8EdnnNAcUKt3H54zgTqdBU6127oclqUQ9XmRPu6qCpc+R8gRy/2mNPji9HnTJ1p1td6LrowcGl8dsn55I0DncsGjgFAsVxw1vrV7FZt/bzsqs5ao6Q9z7rVU3jWz/s6m3zm7IS9ZVeThaBcXwjMMdIfAP2l4K4oqQ2DBe6oBj3XHP1DA6A82VXoYnZD6xz02p72olu5s6vNL74eX1hVe/a2jdPm/AXOJwOoDv+Ms6s6++uU9PpbamGObgrP+plaN4XnWjvzPB4VKi5ejEJyVE2emJgOhmTR/dfXO9gA1fNmQmCO2cgt/ZnArDYThejbo6tJQFwOHj69pMJ880YCM1BpuXZDa6BYdhu3bsaUPlBM1ebzV3rM9Gx8VQito/qLl+bN9o1ztF0DqCqF3+HuftuGrZ+ZT6Xbl7PDs6s8i9Ys6f0G+9ea3t4u0xf9ulqV2mtRZVw/Z6lCni8gu/t6c1S8oJpcvwjMMdMffn8K3qEozOh1/QFv7+APDSpnbnbBXoX1/4FhZQNQPW4wmJM9UKyc3dAvHoz/34vRsR7z0N1Js+1WgjKA1eGqyKJ25veiW3Z4FgVW3fQ2Tm86NNswHVWk9fOPfq3Xe4r4WUgt1bPRTZ/T3qZSNxeSVwrH/tcxlP5aqCbXPwJzFdx/77B58aUTmT/s7kwDECdNmtzFEQBg1RQyUKyQ3dBXr7eZ8cn4A/P8Qovp6Fwb3e+kAYDV5s4vi8LqhXTLc2h4lnsbyfX7orPDuQpWKjwUEoZzfVx71npwrdm8sZdKcoMhMFeBrnBpuEH2YAMgDvpLe/cdm2zrD4Dakms3tAL0pBeg/d3QGsplTHU6RY6eMua2zQYAaoqqxrppUJYoFI9PTGeqz/5RtJUoEJcaih39nKU2cN2fvuilukbp5mtsBOYq8QcbqL2k0D/YQKF0NVN/cXNlE6gvuVq53UCxufPV+6d6fDIR/ZcKM4Da5lqdXYAW1zKtAVxqq3Y/a7u26kK5KrRt6+5a2tbtzk6juRCYq0x/yPw/3AAA+LIHir1+unrnicevJgwA1CNXhV5pO4iCtG4hCsYUHBBCYAYAAADQ8AjFKAVjMAEAqGGdVez+6+ygHRsAAB+BGQCAGlbNENu5xgAAAA+BGQCAGrZ5wFTNbZuoMAMA4CMwAwBQw+4YqV6I3XozgRkAAB+BGQCAGtbVod3I8QfZTf2pGwAAuIHADABAjXtsX/yB+cG7Fw0AAFiKwAwAQI1ThTnOKnPfWmP27aAdGwCAbARmAADqwBOPLNpgW2laW/WJxxcMAABYjsAMAEAdUFj+5Z9ZrPhe5riCOAAAjYDADABAndg0kDSf+HBlQrM+xhMPJ82uEVqxAQDIhcAMAEAdUWj+R08slFUV1vuqDXvvTgZ9AQCwkjYDAADqigLv//I/LJgDxxPm+VdbzPhkYe+nqvJDdyXtROxKt3YDANCICMwAANSpvTuS0W3BHDuVMEej29kxY85eSix5m761SXPbJmO23pxqvyYoAwBQOAIzAAB1TkHYP4t8fTa6zSRM3zrOJwMAUA4CMwAADUZV5M4OwjIAAOVi6BcAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAADUhbm5BQMA1URgBtA0etd1ZV4/c27CTE3NGgBAfVBYPnN2IvProYG1BgDi1mYAoEn09naZwegHrItjk/YHrxdfOmHu2ztsurs6DACgdk1Nz5pDh0/bl6K/twcJzACqIDE5PZ80ANAkFJYVlAEA9eu+e4fNyK39BgBilqQlG0BTUUXi/ugHrfa2VgMAqD977tpCWAZQNVSYATQlnV8++uZZM3Fl2r4+N88gGQCoRbrA2d7RajZv7DW3bx0y3d0cowFQNUkCMwAAAAAAy9GSDQAAAABACIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABBCYAQAAAAAIIDADAAAAABBAYAYAAAAAIIDADAAAAABAAIEZAAAAAIAAAjMAAAAAAAEEZgAAAAAAAgjMAAAAAAAEEJgBAAAAAAggMAMAAAAAEEBgBgAAAAAggMAMAAAAAEAAgRkAAAAAgAACMwAAAAAAAQRmAAAAAAACCMwAAAAAAAQQmAEAAAAACCAwAwAAAAAQQGAGAAAAACCAwAwAAAAAQACBGQAAAACAAAIzAAAAAAABBGYAAAAAAAIIzAAAAAAABCgwv2MAAAAAAMANycSBlmQy+ecGAAAAAADckDAHElen5x5NmMTzBgAAAAAASHLOtG5rWdfV/kJUZf4DAwAAAAAAjDLyhq7EOwn94vLlZF/7msXnTSK51wAAAAAA0KwSif1za1o+tCGRGLdTsjdsSIzPzbQ8RqUZAAAAANCsokz8+y4s69eJ7De4PD19W+ti6+daEq33UnEGAAAAADS4d+ww7IT5Mx1Z9n/j/wd5fw4uk1mDMwAAAABJRU5ErkJggg==", LR = window.Vue.defineComponent, Le = window.Vue.createElementVNode, Yc = window.Vue.createTextVNode, Qn = window.Vue.unref, Ts = window.Vue.withCtx, Ps = window.Vue.createVNode, zR = window.Vue.openBlock, qR = window.Vue.createElementBlock, RR = window.Vue.pushScopeId, WR = window.Vue.popScopeId, zr = (e) => (RR("data-v-926d7aed"), e = e(), WR(), e), FR = { class: "container" }, XR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("h2", null, "Configuration", -1)), ZR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("p", null, [
  /* @__PURE__ */ Yc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Le("br"),
  /* @__PURE__ */ Yc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Le("strong", null, [
    /* @__PURE__ */ Le("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/latest/engines/cluster.html"
    }, " here ")
  ])
], -1)), UR = { class: "radio-content" }, YR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("strong", { class: "title" }, "Clustering", -1)), HR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), GR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("img", {
  class: "img2",
  src: DR
}, null, -1)), jR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("div", { class: "hellinger" }, [
  /* @__PURE__ */ Le("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Le("br"),
  /* @__PURE__ */ Le("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), KR = /* @__PURE__ */ zr(() => /* @__PURE__ */ Le("div", { class: "radio-content" }, [
  /* @__PURE__ */ Le("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Le("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Le("img", {
    class: "img2",
    src: OR
  })
], -1)), QR = /* @__PURE__ */ Yc(" Continue "), iv = window.Vue.ref, JR = /* @__PURE__ */ LR({
  __name: "ConfigurationPage",
  setup(e) {
    const o = Nn(), r = vn(), i = iv(!1), a = iv(Se.ENGINE_DBSCAN), u = () => {
      fm(o.allowSave), Am(a.value, i.value), r.push({ name: "situations" });
    };
    return (c, f) => (zR(), qR("div", FR, [
      XR,
      ZR,
      Le("div", null, [
        Ps(Qn(Zs), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: a.value,
          "onUpdate:modelValue": f[1] || (f[1] = (p) => a.value = p)
        }, {
          default: Ts(() => [
            Ps(Qn(Tn), {
              class: "radio",
              value: Qn(Se).ENGINE_DBSCAN
            }, {
              default: Ts(() => [
                Le("div", UR, [
                  YR,
                  HR,
                  GR,
                  Ps(Qn(Oo), {
                    modelValue: i.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (p) => i.value = p),
                    disabled: a.value !== Qn(Se).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ts(() => [
                      jR
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Ps(Qn(Tn), {
              class: "radio",
              value: Qn(Se).ENGINE_DEEP_LEARNING
            }, {
              default: Ts(() => [
                KR
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Ps(Qn(le), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => u())
      }, {
        default: Ts(() => [
          QR
        ]),
        _: 1
      })
    ]));
  }
});
const eW = /* @__PURE__ */ re(JR, [["__scopeId", "data-v-926d7aed"]]), tW = window.Vue.defineComponent, xc = window.Vue.unref, nW = window.Vue.createVNode, rW = window.Vue.createElementVNode, oW = window.Vue.withCtx, sW = window.Vue.openBlock, iW = window.Vue.createBlock, aW = window.Vue.pushScopeId, lW = window.Vue.popScopeId, uW = (e) => (aW("data-v-17251e76"), e = e(), lW(), e), cW = /* @__PURE__ */ uW(() => /* @__PURE__ */ rW("span", null, "Situation List", -1)), dW = window.Vue.markRaw, fW = /* @__PURE__ */ tW({
  __name: "SituationListBtn",
  setup(e) {
    const o = vn(), r = dW({
      ArrowBack: Mo
    }), i = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (sW(), iW(xc(le), {
      primary: "",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: oW(() => [
        nW(xc(Z), {
          icon: xc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        cW
      ]),
      _: 1
    }));
  }
});
const AW = /* @__PURE__ */ re(fW, [["__scopeId", "data-v-17251e76"]]), hW = window.Vue.defineComponent, Ot = window.Vue.createVNode, tn = window.Vue.createElementVNode, or = window.Vue.createTextVNode, rt = window.Vue.unref, Kt = window.Vue.withCtx, pW = window.Vue.toDisplayString, wW = window.Vue.Fragment, vW = window.Vue.openBlock, mW = window.Vue.createElementBlock, gW = window.Vue.pushScopeId, _W = window.Vue.popScopeId, zo = (e) => (gW("data-v-552a39da"), e = e(), _W(), e), VW = { class: "container" }, yW = /* @__PURE__ */ zo(() => /* @__PURE__ */ tn("h3", null, "Configuration Page", -1)), bW = { class: "section" }, CW = /* @__PURE__ */ zo(() => /* @__PURE__ */ tn("div", { class: "title" }, "OpenNMS can store anonymously the information:", -1)), EW = /* @__PURE__ */ or("Yes"), MW = /* @__PURE__ */ or("No"), BW = { class: "section" }, $W = /* @__PURE__ */ zo(() => /* @__PURE__ */ tn("div", { class: "title" }, "Engine:", -1)), xW = /* @__PURE__ */ zo(() => /* @__PURE__ */ tn("div", null, [
  /* @__PURE__ */ or(" (Detail information about engines "),
  /* @__PURE__ */ tn("a", {
    target: "_blank",
    href: "https://docs.opennms.com/alec/latest/engines/cluster.html"
  }, "here"),
  /* @__PURE__ */ or(") ")
], -1)), IW = /* @__PURE__ */ or("Clustering"), SW = /* @__PURE__ */ zo(() => /* @__PURE__ */ tn("div", { class: "hellinger" }, [
  /* @__PURE__ */ tn("strong", null, "With Hellinger distance")
], -1)), TW = /* @__PURE__ */ or("Deep Learning"), PW = /* @__PURE__ */ zo(() => /* @__PURE__ */ tn("span", null, "Save Changes", -1)), kW = /* @__PURE__ */ or("dismiss"), NW = window.Vue.markRaw, go = window.Vue.ref, DW = /* @__PURE__ */ hW({
  __name: "AccountSettings",
  setup(e) {
    var m, _;
    const o = NW({
      MarkComplete: qa
    }), r = Nn(), i = go(r.allowSave), a = go(((m = r.engineInfo) == null ? void 0 : m.engineName) || Se.ENGINE_DBSCAN), u = go(
      ((_ = r.engineInfo) == null ? void 0 : _.distanceMeasureName) === Se.HELLINGER_OPTION
    ), c = go(!1), f = go(!1), p = go(""), v = async () => {
      const V = Boolean(i.value);
      r.savePermission(V);
      const $ = await Am(
        a.value,
        u.value
      );
      c.value = !0, $ ? (r.getAlecInfo(), r.getEngineInfo(), p.value = "The settings were saved!", f.value = !1) : (p.value = "Error on saving the settings", f.value = !0);
    };
    return (V, $) => (vW(), mW(wW, null, [
      Ot(AW),
      tn("div", VW, [
        yW,
        tn("div", bW, [
          CW,
          Ot(rt(Zs), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": $[0] || ($[0] = (M) => i.value = M),
            label: "",
            hideLabel: ""
          }, {
            default: Kt(() => [
              Ot(rt(Tn), { value: !0 }, {
                default: Kt(() => [
                  EW
                ]),
                _: 1
              }),
              Ot(rt(Tn), { value: !1 }, {
                default: Kt(() => [
                  MW
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        tn("div", BW, [
          $W,
          xW,
          Ot(rt(Zs), {
            vertical: "",
            modelValue: a.value,
            "onUpdate:modelValue": $[2] || ($[2] = (M) => a.value = M),
            label: "",
            hideLabel: ""
          }, {
            default: Kt(() => [
              Ot(rt(Tn), {
                class: "radio-item",
                value: rt(Se).ENGINE_DBSCAN
              }, {
                default: Kt(() => [
                  IW
                ]),
                _: 1
              }, 8, ["value"]),
              Ot(rt(Oo), {
                modelValue: u.value,
                "onUpdate:modelValue": $[1] || ($[1] = (M) => u.value = M),
                disabled: a.value !== rt(Se).ENGINE_DBSCAN,
                class: "checkbox"
              }, {
                default: Kt(() => [
                  SW
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Ot(rt(Tn), {
                class: "radio-item",
                value: rt(Se).ENGINE_DEEP_LEARNING
              }, {
                default: Kt(() => [
                  TW
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Ot(rt(le), {
          primary: "",
          class: "save-btn",
          onClick: v
        }, {
          default: Kt(() => [
            Ot(rt(Z), {
              icon: rt(o).MarkComplete,
              class: "icon"
            }, null, 8, ["icon"]),
            PW
          ]),
          _: 1
        }),
        Ot(rt(al), {
          modelValue: c.value,
          "onUpdate:modelValue": $[4] || ($[4] = (M) => c.value = M),
          right: "",
          error: f.value
        }, {
          button: Kt(() => [
            Ot(rt(le), {
              onClick: $[3] || ($[3] = (M) => c.value = !1),
              text: ""
            }, {
              default: Kt(() => [
                kW
              ]),
              _: 1
            })
          ]),
          default: Kt(() => [
            or(pW(p.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const OW = /* @__PURE__ */ re(DW, [["__scopeId", "data-v-552a39da"]]), LW = window.VueRouter.createRouter, zW = window.VueRouter.createWebHistory, Ic = async () => {
  const e = Nn();
  e.userId || (await e.getUserRole(), await e.getAlecInfo());
}, u1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || c1, r = Nn();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: e.params }) : o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Ic(),
    component: Kq
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Ic(),
    component: eW
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Ic(),
    component: wN
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: J6
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: I4
  },
  {
    path: "/error",
    name: "error",
    component: AR
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: NR
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      const e = Nn();
      await e.getAlecInfo(), await e.getEngineInfo();
    },
    component: OW
  }
], Sc = window.VRouter;
if (Sc) {
  const e = "Plugin-alecUiExtension", o = Sc.hasRoute(e) ? e : "Plugin";
  for (const r of u1) {
    const { path: i, name: a, component: u, beforeEnter: c } = r;
    Sc.addRoute(o, {
      path: i.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const c1 = LW({
  history: zW(),
  routes: u1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = c2;
