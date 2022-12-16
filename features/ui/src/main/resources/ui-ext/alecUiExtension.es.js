const re = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
}, t2 = {}, n2 = window.Vue.resolveComponent, r2 = window.Vue.createVNode, o2 = window.Vue.openBlock, s2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const i2 = { class: "main" };
function a2(e, o) {
  const r = n2("router-view");
  return o2(), s2("div", i2, [
    r2(r)
  ]);
}
const l2 = /* @__PURE__ */ re(t2, [["render", a2], ["__scopeId", "data-v-5d32d140"]]), u2 = window.Vue.defineComponent, c2 = window.Vue.openBlock, d2 = window.Vue.createBlock, f2 = /* @__PURE__ */ u2({
  __name: "App",
  setup(e) {
    return (o, r) => (c2(), d2(l2));
  }
});
var cs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function A2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fv = { exports: {} }, Hc = { exports: {} }, Av = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, h2 = Av, Gc = Object.prototype.toString, jc = function(e) {
  return function(o) {
    var r = Gc.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function kr(e) {
  return e = e.toLowerCase(), function(r) {
    return jc(r) === e;
  };
}
function Kc(e) {
  return Array.isArray(e);
}
function Ba(e) {
  return typeof e > "u";
}
function p2(e) {
  return e !== null && !Ba(e) && e.constructor !== null && !Ba(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var hv = kr("ArrayBuffer");
function w2(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && hv(e.buffer), o;
}
function v2(e) {
  return typeof e == "string";
}
function m2(e) {
  return typeof e == "number";
}
function pv(e) {
  return e !== null && typeof e == "object";
}
function ga(e) {
  if (jc(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var g2 = kr("Date"), _2 = kr("File"), V2 = kr("Blob"), y2 = kr("FileList");
function Qc(e) {
  return Gc.call(e) === "[object Function]";
}
function b2(e) {
  return pv(e) && Qc(e.pipe);
}
function C2(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Gc.call(e) === o || Qc(e.toString) && e.toString() === o);
}
var E2 = kr("URLSearchParams");
function M2(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function B2() {
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
function Pc() {
  var e = {};
  function o(a, u) {
    ga(e[u]) && ga(a) ? e[u] = Pc(e[u], a) : ga(a) ? e[u] = Pc({}, a) : Kc(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, i = arguments.length; r < i; r++)
    Jc(arguments[r], o);
  return e;
}
function $2(e, o, r) {
  return Jc(o, function(a, u) {
    r && typeof a == "function" ? e[u] = h2(a, r) : e[u] = a;
  }), e;
}
function I2(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function x2(e, o, r, i) {
  e.prototype = Object.create(o.prototype, i), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function S2(e, o, r) {
  var i, a, u, c = {};
  o = o || {};
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      u = i[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function T2(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var i = e.indexOf(o, r);
  return i !== -1 && i === r;
}
function P2(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Ba(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var k2 = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ze = {
  isArray: Kc,
  isArrayBuffer: hv,
  isBuffer: p2,
  isFormData: C2,
  isArrayBufferView: w2,
  isString: v2,
  isNumber: m2,
  isObject: pv,
  isPlainObject: ga,
  isUndefined: Ba,
  isDate: g2,
  isFile: _2,
  isBlob: V2,
  isFunction: Qc,
  isStream: b2,
  isURLSearchParams: E2,
  isStandardBrowserEnv: B2,
  forEach: Jc,
  merge: Pc,
  extend: $2,
  trim: M2,
  stripBOM: I2,
  inherits: x2,
  toFlatObject: S2,
  kindOf: jc,
  kindOfTest: kr,
  endsWith: T2,
  toArray: P2,
  isTypedArray: k2,
  isFileList: y2
}, Qr = Ze;
function lh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var wv = function(o, r, i) {
  if (!r)
    return o;
  var a;
  if (i)
    a = i(r);
  else if (Qr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    Qr.forEach(r, function(p, v) {
      p === null || typeof p > "u" || (Qr.isArray(p) ? v = v + "[]" : p = [p], Qr.forEach(p, function(_) {
        Qr.isDate(_) ? _ = _.toISOString() : Qr.isObject(_) && (_ = JSON.stringify(_)), u.push(lh(v) + "=" + lh(_));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, N2 = Ze;
function za() {
  this.handlers = [];
}
za.prototype.use = function(o, r, i) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
za.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
za.prototype.forEach = function(o) {
  N2.forEach(this.handlers, function(i) {
    i !== null && o(i);
  });
};
var D2 = za, O2 = Ze, L2 = function(o, r) {
  O2.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, vv = Ze;
function Bo(e, o, r, i, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), i && (this.request = i), a && (this.response = a);
}
vv.inherits(Bo, Error, {
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
var mv = Bo.prototype, gv = {};
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
  gv[e] = { value: e };
});
Object.defineProperties(Bo, gv);
Object.defineProperty(mv, "isAxiosError", { value: !0 });
Bo.from = function(e, o, r, i, a, u) {
  var c = Object.create(mv);
  return vv.toFlatObject(e, c, function(p) {
    return p !== Error.prototype;
  }), Bo.call(c, e.message, o, r, i, a), c.name = e.name, u && Object.assign(c, u), c;
};
var So = Bo, _v = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ut = Ze;
function z2(e, o) {
  o = o || new FormData();
  var r = [];
  function i(u) {
    return u === null ? "" : Ut.isDate(u) ? u.toISOString() : Ut.isArrayBuffer(u) || Ut.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (Ut.isPlainObject(u) || Ut.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), Ut.forEach(u, function(p, v) {
        if (!Ut.isUndefined(p)) {
          var m = c ? c + "." + v : v, _;
          if (p && !c && typeof p == "object") {
            if (Ut.endsWith(v, "{}"))
              p = JSON.stringify(p);
            else if (Ut.endsWith(v, "[]") && (_ = Ut.toArray(p))) {
              _.forEach(function(V) {
                !Ut.isUndefined(V) && o.append(m, i(V));
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
var Vv = z2, $u, uh;
function q2() {
  if (uh)
    return $u;
  uh = 1;
  var e = So;
  return $u = function(r, i, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : i(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, $u;
}
var Iu, ch;
function R2() {
  if (ch)
    return Iu;
  ch = 1;
  var e = Ze;
  return Iu = e.isStandardBrowserEnv() ? function() {
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
  }(), Iu;
}
var W2 = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, F2 = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, X2 = W2, Z2 = F2, yv = function(o, r) {
  return o && !X2(r) ? Z2(o, r) : r;
}, xu, dh;
function U2() {
  if (dh)
    return xu;
  dh = 1;
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
  return xu = function(i) {
    var a = {}, u, c, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, xu;
}
var Su, fh;
function Y2() {
  if (fh)
    return Su;
  fh = 1;
  var e = Ze;
  return Su = e.isStandardBrowserEnv() ? function() {
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
  }(), Su;
}
var Tu, Ah;
function qa() {
  if (Ah)
    return Tu;
  Ah = 1;
  var e = So, o = Ze;
  function r(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Tu = r, Tu;
}
var Pu, hh;
function H2() {
  return hh || (hh = 1, Pu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Pu;
}
var ku, ph;
function wh() {
  if (ph)
    return ku;
  ph = 1;
  var e = Ze, o = q2(), r = R2(), i = wv, a = yv, u = U2(), c = Y2(), f = _v, p = So, v = qa(), m = H2();
  return ku = function(V) {
    return new Promise(function(M, P) {
      var D = V.data, T = V.headers, N = V.responseType, S;
      function q() {
        V.cancelToken && V.cancelToken.unsubscribe(S), V.signal && V.signal.removeEventListener("abort", S);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete T["Content-Type"];
      var I = new XMLHttpRequest();
      if (V.auth) {
        var z = V.auth.username || "", O = V.auth.password ? unescape(encodeURIComponent(V.auth.password)) : "";
        T.Authorization = "Basic " + btoa(z + ":" + O);
      }
      var F = a(V.baseURL, V.url);
      I.open(V.method.toUpperCase(), i(F, V.params, V.paramsSerializer), !0), I.timeout = V.timeout;
      function ge() {
        if (!!I) {
          var ye = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, Ee = !N || N === "text" || N === "json" ? I.responseText : I.response, Ie = {
            data: Ee,
            status: I.status,
            statusText: I.statusText,
            headers: ye,
            config: V,
            request: I
          };
          o(function(Le) {
            M(Le), q();
          }, function(Le) {
            P(Le), q();
          }, Ie), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = ge : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(ge);
      }, I.onabort = function() {
        !I || (P(new p("Request aborted", p.ECONNABORTED, V, I)), I = null);
      }, I.onerror = function() {
        P(new p("Network Error", p.ERR_NETWORK, V, I, I)), I = null;
      }, I.ontimeout = function() {
        var Ee = V.timeout ? "timeout of " + V.timeout + "ms exceeded" : "timeout exceeded", Ie = V.transitional || f;
        V.timeoutErrorMessage && (Ee = V.timeoutErrorMessage), P(new p(
          Ee,
          Ie.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
          V,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var fe = (V.withCredentials || c(F)) && V.xsrfCookieName ? r.read(V.xsrfCookieName) : void 0;
        fe && (T[V.xsrfHeaderName] = fe);
      }
      "setRequestHeader" in I && e.forEach(T, function(Ee, Ie) {
        typeof D > "u" && Ie.toLowerCase() === "content-type" ? delete T[Ie] : I.setRequestHeader(Ie, Ee);
      }), e.isUndefined(V.withCredentials) || (I.withCredentials = !!V.withCredentials), N && N !== "json" && (I.responseType = V.responseType), typeof V.onDownloadProgress == "function" && I.addEventListener("progress", V.onDownloadProgress), typeof V.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", V.onUploadProgress), (V.cancelToken || V.signal) && (S = function(ye) {
        !I || (P(!ye || ye && ye.type ? new v() : ye), I.abort(), I = null);
      }, V.cancelToken && V.cancelToken.subscribe(S), V.signal && (V.signal.aborted ? S() : V.signal.addEventListener("abort", S))), D || (D = null);
      var ve = m(F);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        P(new p("Unsupported protocol " + ve + ":", p.ERR_BAD_REQUEST, V));
        return;
      }
      I.send(D);
    });
  }, ku;
}
var Nu, vh;
function G2() {
  return vh || (vh = 1, Nu = null), Nu;
}
var Oe = Ze, mh = L2, gh = So, j2 = _v, K2 = Vv, Q2 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function _h(e, o) {
  !Oe.isUndefined(e) && Oe.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function J2() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = wh()), e;
}
function e3(e, o, r) {
  if (Oe.isString(e))
    try {
      return (o || JSON.parse)(e), Oe.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (r || JSON.stringify)(e);
}
var Ra = {
  transitional: j2,
  adapter: J2(),
  transformRequest: [function(o, r) {
    if (mh(r, "Accept"), mh(r, "Content-Type"), Oe.isFormData(o) || Oe.isArrayBuffer(o) || Oe.isBuffer(o) || Oe.isStream(o) || Oe.isFile(o) || Oe.isBlob(o))
      return o;
    if (Oe.isArrayBufferView(o))
      return o.buffer;
    if (Oe.isURLSearchParams(o))
      return _h(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var i = Oe.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Oe.isFileList(o)) || i && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return K2(u ? { "files[]": o } : o, c && new c());
    } else if (i || a === "application/json")
      return _h(r, "application/json"), e3(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ra.transitional, i = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !i && this.responseType === "json";
    if (u || a && Oe.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? gh.from(c, gh.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: G2()
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
  Ra.headers[o] = {};
});
Oe.forEach(["post", "put", "patch"], function(o) {
  Ra.headers[o] = Oe.merge(Q2);
});
var ed = Ra, t3 = Ze, n3 = ed, r3 = function(o, r, i) {
  var a = this || n3;
  return t3.forEach(i, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Du, Vh;
function bv() {
  return Vh || (Vh = 1, Du = function(o) {
    return !!(o && o.__CANCEL__);
  }), Du;
}
var yh = Ze, Ou = r3, o3 = bv(), s3 = ed, i3 = qa();
function Lu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new i3();
}
var a3 = function(o) {
  Lu(o), o.headers = o.headers || {}, o.data = Ou.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = yh.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), yh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || s3.adapter;
  return r(o).then(function(a) {
    return Lu(o), a.data = Ou.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return o3(a) || (Lu(o), a && a.response && (a.response.data = Ou.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, gt = Ze, Cv = function(o, r) {
  r = r || {};
  var i = {};
  function a(m, _) {
    return gt.isPlainObject(m) && gt.isPlainObject(_) ? gt.merge(m, _) : gt.isPlainObject(_) ? gt.merge({}, _) : gt.isArray(_) ? _.slice() : _;
  }
  function u(m) {
    if (gt.isUndefined(r[m])) {
      if (!gt.isUndefined(o[m]))
        return a(void 0, o[m]);
    } else
      return a(o[m], r[m]);
  }
  function c(m) {
    if (!gt.isUndefined(r[m]))
      return a(void 0, r[m]);
  }
  function f(m) {
    if (gt.isUndefined(r[m])) {
      if (!gt.isUndefined(o[m]))
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
  return gt.forEach(Object.keys(o).concat(Object.keys(r)), function(_) {
    var V = v[_] || u, $ = V(_);
    gt.isUndefined($) && V !== p || (i[_] = $);
  }), i;
}, zu, bh;
function Ev() {
  return bh || (bh = 1, zu = {
    version: "0.27.2"
  }), zu;
}
var l3 = Ev().version, Qn = So, td = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  td[e] = function(i) {
    return typeof i === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Ch = {};
td.transitional = function(o, r, i) {
  function a(u, c) {
    return "[Axios v" + l3 + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new Qn(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Qn.ERR_DEPRECATED
      );
    return r && !Ch[c] && (Ch[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function u3(e, o, r) {
  if (typeof e != "object")
    throw new Qn("options must be an object", Qn.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), a = i.length; a-- > 0; ) {
    var u = i[a], c = o[u];
    if (c) {
      var f = e[u], p = f === void 0 || c(f, u, e);
      if (p !== !0)
        throw new Qn("option " + u + " must be " + p, Qn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Qn("Unknown option " + u, Qn.ERR_BAD_OPTION);
  }
}
var c3 = {
  assertOptions: u3,
  validators: td
}, Mv = Ze, d3 = wv, Eh = D2, Mh = a3, Wa = Cv, f3 = yv, Bv = c3, Jr = Bv.validators;
function $o(e) {
  this.defaults = e, this.interceptors = {
    request: new Eh(),
    response: new Eh()
  };
}
$o.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Wa(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var i = r.transitional;
  i !== void 0 && Bv.assertOptions(i, {
    silentJSONParsing: Jr.transitional(Jr.boolean),
    forcedJSONParsing: Jr.transitional(Jr.boolean),
    clarifyTimeoutError: Jr.transitional(Jr.boolean)
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
    var p = [Mh, void 0];
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
    f = Mh(v);
  } catch (V) {
    return Promise.reject(V);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
$o.prototype.getUri = function(o) {
  o = Wa(this.defaults, o);
  var r = f3(o.baseURL, o.url);
  return d3(r, o.params, o.paramsSerializer);
};
Mv.forEach(["delete", "get", "head", "options"], function(o) {
  $o.prototype[o] = function(r, i) {
    return this.request(Wa(i || {}, {
      method: o,
      url: r,
      data: (i || {}).data
    }));
  };
});
Mv.forEach(["post", "put", "patch"], function(o) {
  function r(i) {
    return function(u, c, f) {
      return this.request(Wa(f || {}, {
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
var A3 = $o, qu, Bh;
function h3() {
  if (Bh)
    return qu;
  Bh = 1;
  var e = qa();
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
  }, qu = o, qu;
}
var Ru, $h;
function p3() {
  return $h || ($h = 1, Ru = function(o) {
    return function(i) {
      return o.apply(null, i);
    };
  }), Ru;
}
var Wu, Ih;
function w3() {
  if (Ih)
    return Wu;
  Ih = 1;
  var e = Ze;
  return Wu = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Wu;
}
var xh = Ze, v3 = Av, _a = A3, m3 = Cv, g3 = ed;
function $v(e) {
  var o = new _a(e), r = v3(_a.prototype.request, o);
  return xh.extend(r, _a.prototype, o), xh.extend(r, o), r.create = function(a) {
    return $v(m3(e, a));
  }, r;
}
var ft = $v(g3);
ft.Axios = _a;
ft.CanceledError = qa();
ft.CancelToken = h3();
ft.isCancel = bv();
ft.VERSION = Ev().version;
ft.toFormData = Vv;
ft.AxiosError = So;
ft.Cancel = ft.CanceledError;
ft.all = function(o) {
  return Promise.all(o);
};
ft.spread = p3();
ft.isAxiosError = w3();
Hc.exports = ft;
Hc.exports.default = ft;
(function(e) {
  e.exports = Hc.exports;
})(fv);
const Iv = /* @__PURE__ */ A2(fv.exports), Dn = Iv.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), nn = Iv.create({
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
    var r, i = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", v = 500, m = "__lodash_placeholder__", _ = 1, V = 2, $ = 4, M = 1, P = 2, D = 1, T = 2, N = 4, S = 8, q = 16, I = 32, z = 64, O = 128, F = 256, ge = 512, fe = 30, ve = "...", ye = 800, Ee = 16, Ie = 1, Ae = 2, Le = 3, ze = 1 / 0, Ke = 9007199254740991, Ro = 17976931348623157e292, ni = 0 / 0, sn = 4294967295, A1 = sn - 1, h1 = sn >>> 1, p1 = [
      ["ary", O],
      ["bind", D],
      ["bindKey", T],
      ["curry", S],
      ["curryRight", q],
      ["flip", ge],
      ["partial", I],
      ["partialRight", z],
      ["rearg", F]
    ], Dr = "[object Arguments]", ri = "[object Array]", w1 = "[object AsyncFunction]", Wo = "[object Boolean]", Fo = "[object Date]", v1 = "[object DOMException]", oi = "[object Error]", si = "[object Function]", xd = "[object GeneratorFunction]", qt = "[object Map]", Xo = "[object Number]", m1 = "[object Null]", mn = "[object Object]", Sd = "[object Promise]", g1 = "[object Proxy]", Zo = "[object RegExp]", Rt = "[object Set]", Uo = "[object String]", ii = "[object Symbol]", _1 = "[object Undefined]", Yo = "[object WeakMap]", V1 = "[object WeakSet]", Ho = "[object ArrayBuffer]", Or = "[object DataView]", al = "[object Float32Array]", ll = "[object Float64Array]", ul = "[object Int8Array]", cl = "[object Int16Array]", dl = "[object Int32Array]", fl = "[object Uint8Array]", Al = "[object Uint8ClampedArray]", hl = "[object Uint16Array]", pl = "[object Uint32Array]", y1 = /\b__p \+= '';/g, b1 = /\b(__p \+=) '' \+/g, C1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Td = /&(?:amp|lt|gt|quot|#39);/g, Pd = /[&<>"']/g, E1 = RegExp(Td.source), M1 = RegExp(Pd.source), B1 = /<%-([\s\S]+?)%>/g, $1 = /<%([\s\S]+?)%>/g, kd = /<%=([\s\S]+?)%>/g, I1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, x1 = /^\w*$/, S1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wl = /[\\^$.*+?()[\]{}|]/g, T1 = RegExp(wl.source), vl = /^\s+/, P1 = /\s/, k1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, N1 = /\{\n\/\* \[wrapped with (.+)\] \*/, D1 = /,? & /, O1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, L1 = /[()=,{}\[\]\/\s]/, z1 = /\\(\\)?/g, q1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Nd = /\w*$/, R1 = /^[-+]0x[0-9a-f]+$/i, W1 = /^0b[01]+$/i, F1 = /^\[object .+?Constructor\]$/, X1 = /^0o[0-7]+$/i, Z1 = /^(?:0|[1-9]\d*)$/, U1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ai = /($^)/, Y1 = /['\n\r\u2028\u2029\\]/g, li = "\\ud800-\\udfff", H1 = "\\u0300-\\u036f", G1 = "\\ufe20-\\ufe2f", j1 = "\\u20d0-\\u20ff", Dd = H1 + G1 + j1, Od = "\\u2700-\\u27bf", Ld = "a-z\\xdf-\\xf6\\xf8-\\xff", K1 = "\\xac\\xb1\\xd7\\xf7", Q1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", J1 = "\\u2000-\\u206f", eg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", zd = "A-Z\\xc0-\\xd6\\xd8-\\xde", qd = "\\ufe0e\\ufe0f", Rd = K1 + Q1 + J1 + eg, ml = "['\u2019]", tg = "[" + li + "]", Wd = "[" + Rd + "]", ui = "[" + Dd + "]", Fd = "\\d+", ng = "[" + Od + "]", Xd = "[" + Ld + "]", Zd = "[^" + li + Rd + Fd + Od + Ld + zd + "]", gl = "\\ud83c[\\udffb-\\udfff]", rg = "(?:" + ui + "|" + gl + ")", Ud = "[^" + li + "]", _l = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Lr = "[" + zd + "]", Yd = "\\u200d", Hd = "(?:" + Xd + "|" + Zd + ")", og = "(?:" + Lr + "|" + Zd + ")", Gd = "(?:" + ml + "(?:d|ll|m|re|s|t|ve))?", jd = "(?:" + ml + "(?:D|LL|M|RE|S|T|VE))?", Kd = rg + "?", Qd = "[" + qd + "]?", sg = "(?:" + Yd + "(?:" + [Ud, _l, Vl].join("|") + ")" + Qd + Kd + ")*", ig = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ag = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Jd = Qd + Kd + sg, lg = "(?:" + [ng, _l, Vl].join("|") + ")" + Jd, ug = "(?:" + [Ud + ui + "?", ui, _l, Vl, tg].join("|") + ")", cg = RegExp(ml, "g"), dg = RegExp(ui, "g"), yl = RegExp(gl + "(?=" + gl + ")|" + ug + Jd, "g"), fg = RegExp([
      Lr + "?" + Xd + "+" + Gd + "(?=" + [Wd, Lr, "$"].join("|") + ")",
      og + "+" + jd + "(?=" + [Wd, Lr + Hd, "$"].join("|") + ")",
      Lr + "?" + Hd + "+" + Gd,
      Lr + "+" + jd,
      ag,
      ig,
      Fd,
      lg
    ].join("|"), "g"), Ag = RegExp("[" + Yd + li + Dd + qd + "]"), hg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, pg = [
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
    ], wg = -1, me = {};
    me[al] = me[ll] = me[ul] = me[cl] = me[dl] = me[fl] = me[Al] = me[hl] = me[pl] = !0, me[Dr] = me[ri] = me[Ho] = me[Wo] = me[Or] = me[Fo] = me[oi] = me[si] = me[qt] = me[Xo] = me[mn] = me[Zo] = me[Rt] = me[Uo] = me[Yo] = !1;
    var pe = {};
    pe[Dr] = pe[ri] = pe[Ho] = pe[Or] = pe[Wo] = pe[Fo] = pe[al] = pe[ll] = pe[ul] = pe[cl] = pe[dl] = pe[qt] = pe[Xo] = pe[mn] = pe[Zo] = pe[Rt] = pe[Uo] = pe[ii] = pe[fl] = pe[Al] = pe[hl] = pe[pl] = !0, pe[oi] = pe[si] = pe[Yo] = !1;
    var vg = {
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
    }, mg = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, gg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, _g = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Vg = parseFloat, yg = parseInt, ef = typeof cs == "object" && cs && cs.Object === Object && cs, bg = typeof self == "object" && self && self.Object === Object && self, qe = ef || bg || Function("return this")(), bl = o && !o.nodeType && o, ir = bl && !0 && e && !e.nodeType && e, tf = ir && ir.exports === bl, Cl = tf && ef.process, Mt = function() {
      try {
        var y = ir && ir.require && ir.require("util").types;
        return y || Cl && Cl.binding && Cl.binding("util");
      } catch {
      }
    }(), nf = Mt && Mt.isArrayBuffer, rf = Mt && Mt.isDate, of = Mt && Mt.isMap, sf = Mt && Mt.isRegExp, af = Mt && Mt.isSet, lf = Mt && Mt.isTypedArray;
    function At(y, E, C) {
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
    function Cg(y, E, C, R) {
      for (var H = -1, oe = y == null ? 0 : y.length; ++H < oe; ) {
        var Te = y[H];
        E(R, Te, C(Te), y);
      }
      return R;
    }
    function Bt(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R && E(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function Eg(y, E) {
      for (var C = y == null ? 0 : y.length; C-- && E(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function uf(y, E) {
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
    function ci(y, E) {
      var C = y == null ? 0 : y.length;
      return !!C && zr(y, E, 0) > -1;
    }
    function El(y, E, C) {
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
    function Ml(y, E, C, R) {
      var H = -1, oe = y == null ? 0 : y.length;
      for (R && oe && (C = y[++H]); ++H < oe; )
        C = E(C, y[H], H, y);
      return C;
    }
    function Mg(y, E, C, R) {
      var H = y == null ? 0 : y.length;
      for (R && H && (C = y[--H]); H--; )
        C = E(C, y[H], H, y);
      return C;
    }
    function Bl(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R; )
        if (E(y[C], C, y))
          return !0;
      return !1;
    }
    var Bg = $l("length");
    function $g(y) {
      return y.split("");
    }
    function Ig(y) {
      return y.match(O1) || [];
    }
    function cf(y, E, C) {
      var R;
      return C(y, function(H, oe, Te) {
        if (E(H, oe, Te))
          return R = oe, !1;
      }), R;
    }
    function di(y, E, C, R) {
      for (var H = y.length, oe = C + (R ? 1 : -1); R ? oe-- : ++oe < H; )
        if (E(y[oe], oe, y))
          return oe;
      return -1;
    }
    function zr(y, E, C) {
      return E === E ? Rg(y, E, C) : di(y, df, C);
    }
    function xg(y, E, C, R) {
      for (var H = C - 1, oe = y.length; ++H < oe; )
        if (R(y[H], E))
          return H;
      return -1;
    }
    function df(y) {
      return y !== y;
    }
    function ff(y, E) {
      var C = y == null ? 0 : y.length;
      return C ? xl(y, E) / C : ni;
    }
    function $l(y) {
      return function(E) {
        return E == null ? r : E[y];
      };
    }
    function Il(y) {
      return function(E) {
        return y == null ? r : y[E];
      };
    }
    function Af(y, E, C, R, H) {
      return H(y, function(oe, Te, he) {
        C = R ? (R = !1, oe) : E(C, oe, Te, he);
      }), C;
    }
    function Sg(y, E) {
      var C = y.length;
      for (y.sort(E); C--; )
        y[C] = y[C].value;
      return y;
    }
    function xl(y, E) {
      for (var C, R = -1, H = y.length; ++R < H; ) {
        var oe = E(y[R]);
        oe !== r && (C = C === r ? oe : C + oe);
      }
      return C;
    }
    function Sl(y, E) {
      for (var C = -1, R = Array(y); ++C < y; )
        R[C] = E(C);
      return R;
    }
    function Tg(y, E) {
      return _e(E, function(C) {
        return [C, y[C]];
      });
    }
    function hf(y) {
      return y && y.slice(0, mf(y) + 1).replace(vl, "");
    }
    function ht(y) {
      return function(E) {
        return y(E);
      };
    }
    function Tl(y, E) {
      return _e(E, function(C) {
        return y[C];
      });
    }
    function Go(y, E) {
      return y.has(E);
    }
    function pf(y, E) {
      for (var C = -1, R = y.length; ++C < R && zr(E, y[C], 0) > -1; )
        ;
      return C;
    }
    function wf(y, E) {
      for (var C = y.length; C-- && zr(E, y[C], 0) > -1; )
        ;
      return C;
    }
    function Pg(y, E) {
      for (var C = y.length, R = 0; C--; )
        y[C] === E && ++R;
      return R;
    }
    var kg = Il(vg), Ng = Il(mg);
    function Dg(y) {
      return "\\" + _g[y];
    }
    function Og(y, E) {
      return y == null ? r : y[E];
    }
    function qr(y) {
      return Ag.test(y);
    }
    function Lg(y) {
      return hg.test(y);
    }
    function zg(y) {
      for (var E, C = []; !(E = y.next()).done; )
        C.push(E.value);
      return C;
    }
    function Pl(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R, H) {
        C[++E] = [H, R];
      }), C;
    }
    function vf(y, E) {
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
    function fi(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R) {
        C[++E] = R;
      }), C;
    }
    function qg(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R) {
        C[++E] = [R, R];
      }), C;
    }
    function Rg(y, E, C) {
      for (var R = C - 1, H = y.length; ++R < H; )
        if (y[R] === E)
          return R;
      return -1;
    }
    function Wg(y, E, C) {
      for (var R = C + 1; R--; )
        if (y[R] === E)
          return R;
      return R;
    }
    function Rr(y) {
      return qr(y) ? Xg(y) : Bg(y);
    }
    function Wt(y) {
      return qr(y) ? Zg(y) : $g(y);
    }
    function mf(y) {
      for (var E = y.length; E-- && P1.test(y.charAt(E)); )
        ;
      return E;
    }
    var Fg = Il(gg);
    function Xg(y) {
      for (var E = yl.lastIndex = 0; yl.test(y); )
        ++E;
      return E;
    }
    function Zg(y) {
      return y.match(yl) || [];
    }
    function Ug(y) {
      return y.match(fg) || [];
    }
    var Yg = function y(E) {
      E = E == null ? qe : Wr.defaults(qe.Object(), E, Wr.pick(qe, pg));
      var C = E.Array, R = E.Date, H = E.Error, oe = E.Function, Te = E.Math, he = E.Object, kl = E.RegExp, Hg = E.String, $t = E.TypeError, Ai = C.prototype, Gg = oe.prototype, Fr = he.prototype, hi = E["__core-js_shared__"], pi = Gg.toString, ue = Fr.hasOwnProperty, jg = 0, gf = function() {
        var t = /[^.]+$/.exec(hi && hi.keys && hi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), wi = Fr.toString, Kg = pi.call(he), Qg = qe._, Jg = kl(
        "^" + pi.call(ue).replace(wl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), vi = tf ? E.Buffer : r, qn = E.Symbol, mi = E.Uint8Array, _f = vi ? vi.allocUnsafe : r, gi = vf(he.getPrototypeOf, he), Vf = he.create, yf = Fr.propertyIsEnumerable, _i = Ai.splice, bf = qn ? qn.isConcatSpreadable : r, jo = qn ? qn.iterator : r, ar = qn ? qn.toStringTag : r, Vi = function() {
        try {
          var t = fr(he, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), e0 = E.clearTimeout !== qe.clearTimeout && E.clearTimeout, t0 = R && R.now !== qe.Date.now && R.now, n0 = E.setTimeout !== qe.setTimeout && E.setTimeout, yi = Te.ceil, bi = Te.floor, Nl = he.getOwnPropertySymbols, r0 = vi ? vi.isBuffer : r, Cf = E.isFinite, o0 = Ai.join, s0 = vf(he.keys, he), Pe = Te.max, Ue = Te.min, i0 = R.now, a0 = E.parseInt, Ef = Te.random, l0 = Ai.reverse, Dl = fr(E, "DataView"), Ko = fr(E, "Map"), Ol = fr(E, "Promise"), Xr = fr(E, "Set"), Qo = fr(E, "WeakMap"), Jo = fr(he, "create"), Ci = Qo && new Qo(), Zr = {}, u0 = Ar(Dl), c0 = Ar(Ko), d0 = Ar(Ol), f0 = Ar(Xr), A0 = Ar(Qo), Ei = qn ? qn.prototype : r, es = Ei ? Ei.valueOf : r, Mf = Ei ? Ei.toString : r;
      function A(t) {
        if (be(t) && !G(t) && !(t instanceof te)) {
          if (t instanceof It)
            return t;
          if (ue.call(t, "__wrapped__"))
            return BA(t);
        }
        return new It(t);
      }
      var Ur = function() {
        function t() {
        }
        return function(n) {
          if (!Ve(n))
            return {};
          if (Vf)
            return Vf(n);
          t.prototype = n;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function Mi() {
      }
      function It(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      A.templateSettings = {
        escape: B1,
        evaluate: $1,
        interpolate: kd,
        variable: "",
        imports: {
          _: A
        }
      }, A.prototype = Mi.prototype, A.prototype.constructor = A, It.prototype = Ur(Mi.prototype), It.prototype.constructor = It;
      function te(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = sn, this.__views__ = [];
      }
      function h0() {
        var t = new te(this.__wrapped__);
        return t.__actions__ = ot(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ot(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ot(this.__views__), t;
      }
      function p0() {
        if (this.__filtered__) {
          var t = new te(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function w0() {
        var t = this.__wrapped__.value(), n = this.__dir__, s = G(t), l = n < 0, d = s ? t.length : 0, h = $_(0, d, this.__views__), w = h.start, g = h.end, b = g - w, B = l ? g : w - 1, x = this.__iteratees__, k = x.length, L = 0, W = Ue(b, this.__takeCount__);
        if (!s || !l && d == b && W == b)
          return jf(t, this.__actions__);
        var Z = [];
        e:
          for (; b-- && L < W; ) {
            B += n;
            for (var K = -1, U = t[B]; ++K < k; ) {
              var ee = x[K], ne = ee.iteratee, vt = ee.type, et = ne(U);
              if (vt == Ae)
                U = et;
              else if (!et) {
                if (vt == Ie)
                  continue e;
                break e;
              }
            }
            Z[L++] = U;
          }
        return Z;
      }
      te.prototype = Ur(Mi.prototype), te.prototype.constructor = te;
      function lr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function v0() {
        this.__data__ = Jo ? Jo(null) : {}, this.size = 0;
      }
      function m0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function g0(t) {
        var n = this.__data__;
        if (Jo) {
          var s = n[t];
          return s === p ? r : s;
        }
        return ue.call(n, t) ? n[t] : r;
      }
      function _0(t) {
        var n = this.__data__;
        return Jo ? n[t] !== r : ue.call(n, t);
      }
      function V0(t, n) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = Jo && n === r ? p : n, this;
      }
      lr.prototype.clear = v0, lr.prototype.delete = m0, lr.prototype.get = g0, lr.prototype.has = _0, lr.prototype.set = V0;
      function gn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function y0() {
        this.__data__ = [], this.size = 0;
      }
      function b0(t) {
        var n = this.__data__, s = Bi(n, t);
        if (s < 0)
          return !1;
        var l = n.length - 1;
        return s == l ? n.pop() : _i.call(n, s, 1), --this.size, !0;
      }
      function C0(t) {
        var n = this.__data__, s = Bi(n, t);
        return s < 0 ? r : n[s][1];
      }
      function E0(t) {
        return Bi(this.__data__, t) > -1;
      }
      function M0(t, n) {
        var s = this.__data__, l = Bi(s, t);
        return l < 0 ? (++this.size, s.push([t, n])) : s[l][1] = n, this;
      }
      gn.prototype.clear = y0, gn.prototype.delete = b0, gn.prototype.get = C0, gn.prototype.has = E0, gn.prototype.set = M0;
      function _n(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function B0() {
        this.size = 0, this.__data__ = {
          hash: new lr(),
          map: new (Ko || gn)(),
          string: new lr()
        };
      }
      function $0(t) {
        var n = zi(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function I0(t) {
        return zi(this, t).get(t);
      }
      function x0(t) {
        return zi(this, t).has(t);
      }
      function S0(t, n) {
        var s = zi(this, t), l = s.size;
        return s.set(t, n), this.size += s.size == l ? 0 : 1, this;
      }
      _n.prototype.clear = B0, _n.prototype.delete = $0, _n.prototype.get = I0, _n.prototype.has = x0, _n.prototype.set = S0;
      function ur(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new _n(); ++n < s; )
          this.add(t[n]);
      }
      function T0(t) {
        return this.__data__.set(t, p), this;
      }
      function P0(t) {
        return this.__data__.has(t);
      }
      ur.prototype.add = ur.prototype.push = T0, ur.prototype.has = P0;
      function Ft(t) {
        var n = this.__data__ = new gn(t);
        this.size = n.size;
      }
      function k0() {
        this.__data__ = new gn(), this.size = 0;
      }
      function N0(t) {
        var n = this.__data__, s = n.delete(t);
        return this.size = n.size, s;
      }
      function D0(t) {
        return this.__data__.get(t);
      }
      function O0(t) {
        return this.__data__.has(t);
      }
      function L0(t, n) {
        var s = this.__data__;
        if (s instanceof gn) {
          var l = s.__data__;
          if (!Ko || l.length < a - 1)
            return l.push([t, n]), this.size = ++s.size, this;
          s = this.__data__ = new _n(l);
        }
        return s.set(t, n), this.size = s.size, this;
      }
      Ft.prototype.clear = k0, Ft.prototype.delete = N0, Ft.prototype.get = D0, Ft.prototype.has = O0, Ft.prototype.set = L0;
      function Bf(t, n) {
        var s = G(t), l = !s && hr(t), d = !s && !l && Zn(t), h = !s && !l && !d && jr(t), w = s || l || d || h, g = w ? Sl(t.length, Hg) : [], b = g.length;
        for (var B in t)
          (n || ue.call(t, B)) && !(w && (B == "length" || d && (B == "offset" || B == "parent") || h && (B == "buffer" || B == "byteLength" || B == "byteOffset") || Cn(B, b))) && g.push(B);
        return g;
      }
      function $f(t) {
        var n = t.length;
        return n ? t[Hl(0, n - 1)] : r;
      }
      function z0(t, n) {
        return qi(ot(t), cr(n, 0, t.length));
      }
      function q0(t) {
        return qi(ot(t));
      }
      function Ll(t, n, s) {
        (s !== r && !Xt(t[n], s) || s === r && !(n in t)) && Vn(t, n, s);
      }
      function ts(t, n, s) {
        var l = t[n];
        (!(ue.call(t, n) && Xt(l, s)) || s === r && !(n in t)) && Vn(t, n, s);
      }
      function Bi(t, n) {
        for (var s = t.length; s--; )
          if (Xt(t[s][0], n))
            return s;
        return -1;
      }
      function R0(t, n, s, l) {
        return Rn(t, function(d, h, w) {
          n(l, d, s(d), w);
        }), l;
      }
      function If(t, n) {
        return t && ln(n, De(n), t);
      }
      function W0(t, n) {
        return t && ln(n, it(n), t);
      }
      function Vn(t, n, s) {
        n == "__proto__" && Vi ? Vi(t, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[n] = s;
      }
      function zl(t, n) {
        for (var s = -1, l = n.length, d = C(l), h = t == null; ++s < l; )
          d[s] = h ? r : gu(t, n[s]);
        return d;
      }
      function cr(t, n, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), n !== r && (t = t >= n ? t : n)), t;
      }
      function xt(t, n, s, l, d, h) {
        var w, g = n & _, b = n & V, B = n & $;
        if (s && (w = d ? s(t, l, d, h) : s(t)), w !== r)
          return w;
        if (!Ve(t))
          return t;
        var x = G(t);
        if (x) {
          if (w = x_(t), !g)
            return ot(t, w);
        } else {
          var k = Ye(t), L = k == si || k == xd;
          if (Zn(t))
            return Jf(t, g);
          if (k == mn || k == Dr || L && !d) {
            if (w = b || L ? {} : mA(t), !g)
              return b ? g_(t, W0(w, t)) : m_(t, If(w, t));
          } else {
            if (!pe[k])
              return d ? t : {};
            w = S_(t, k, g);
          }
        }
        h || (h = new Ft());
        var W = h.get(t);
        if (W)
          return W;
        h.set(t, w), YA(t) ? t.forEach(function(U) {
          w.add(xt(U, n, s, U, t, h));
        }) : ZA(t) && t.forEach(function(U, ee) {
          w.set(ee, xt(U, n, s, ee, t, h));
        });
        var Z = B ? b ? su : ou : b ? it : De, K = x ? r : Z(t);
        return Bt(K || t, function(U, ee) {
          K && (ee = U, U = t[ee]), ts(w, ee, xt(U, n, s, ee, t, h));
        }), w;
      }
      function F0(t) {
        var n = De(t);
        return function(s) {
          return xf(s, t, n);
        };
      }
      function xf(t, n, s) {
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
      function Sf(t, n, s) {
        if (typeof t != "function")
          throw new $t(c);
        return ls(function() {
          t.apply(r, s);
        }, n);
      }
      function ns(t, n, s, l) {
        var d = -1, h = ci, w = !0, g = t.length, b = [], B = n.length;
        if (!g)
          return b;
        s && (n = _e(n, ht(s))), l ? (h = El, w = !1) : n.length >= a && (h = Go, w = !1, n = new ur(n));
        e:
          for (; ++d < g; ) {
            var x = t[d], k = s == null ? x : s(x);
            if (x = l || x !== 0 ? x : 0, w && k === k) {
              for (var L = B; L--; )
                if (n[L] === k)
                  continue e;
              b.push(x);
            } else
              h(n, k, l) || b.push(x);
          }
        return b;
      }
      var Rn = oA(an), Tf = oA(Rl, !0);
      function X0(t, n) {
        var s = !0;
        return Rn(t, function(l, d, h) {
          return s = !!n(l, d, h), s;
        }), s;
      }
      function $i(t, n, s) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], w = n(h);
          if (w != null && (g === r ? w === w && !wt(w) : s(w, g)))
            var g = w, b = h;
        }
        return b;
      }
      function Z0(t, n, s, l) {
        var d = t.length;
        for (s = j(s), s < 0 && (s = -s > d ? 0 : d + s), l = l === r || l > d ? d : j(l), l < 0 && (l += d), l = s > l ? 0 : GA(l); s < l; )
          t[s++] = n;
        return t;
      }
      function Pf(t, n) {
        var s = [];
        return Rn(t, function(l, d, h) {
          n(l, d, h) && s.push(l);
        }), s;
      }
      function Re(t, n, s, l, d) {
        var h = -1, w = t.length;
        for (s || (s = P_), d || (d = []); ++h < w; ) {
          var g = t[h];
          n > 0 && s(g) ? n > 1 ? Re(g, n - 1, s, l, d) : Ln(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var ql = sA(), kf = sA(!0);
      function an(t, n) {
        return t && ql(t, n, De);
      }
      function Rl(t, n) {
        return t && kf(t, n, De);
      }
      function Ii(t, n) {
        return On(n, function(s) {
          return En(t[s]);
        });
      }
      function dr(t, n) {
        n = Fn(n, t);
        for (var s = 0, l = n.length; t != null && s < l; )
          t = t[un(n[s++])];
        return s && s == l ? t : r;
      }
      function Nf(t, n, s) {
        var l = n(t);
        return G(t) ? l : Ln(l, s(t));
      }
      function Qe(t) {
        return t == null ? t === r ? _1 : m1 : ar && ar in he(t) ? B_(t) : q_(t);
      }
      function Wl(t, n) {
        return t > n;
      }
      function U0(t, n) {
        return t != null && ue.call(t, n);
      }
      function Y0(t, n) {
        return t != null && n in he(t);
      }
      function H0(t, n, s) {
        return t >= Ue(n, s) && t < Pe(n, s);
      }
      function Fl(t, n, s) {
        for (var l = s ? El : ci, d = t[0].length, h = t.length, w = h, g = C(h), b = 1 / 0, B = []; w--; ) {
          var x = t[w];
          w && n && (x = _e(x, ht(n))), b = Ue(x.length, b), g[w] = !s && (n || d >= 120 && x.length >= 120) ? new ur(w && x) : r;
        }
        x = t[0];
        var k = -1, L = g[0];
        e:
          for (; ++k < d && B.length < b; ) {
            var W = x[k], Z = n ? n(W) : W;
            if (W = s || W !== 0 ? W : 0, !(L ? Go(L, Z) : l(B, Z, s))) {
              for (w = h; --w; ) {
                var K = g[w];
                if (!(K ? Go(K, Z) : l(t[w], Z, s)))
                  continue e;
              }
              L && L.push(Z), B.push(W);
            }
          }
        return B;
      }
      function G0(t, n, s, l) {
        return an(t, function(d, h, w) {
          n(l, s(d), h, w);
        }), l;
      }
      function rs(t, n, s) {
        n = Fn(n, t), t = yA(t, n);
        var l = t == null ? t : t[un(Tt(n))];
        return l == null ? r : At(l, t, s);
      }
      function Df(t) {
        return be(t) && Qe(t) == Dr;
      }
      function j0(t) {
        return be(t) && Qe(t) == Ho;
      }
      function K0(t) {
        return be(t) && Qe(t) == Fo;
      }
      function os(t, n, s, l, d) {
        return t === n ? !0 : t == null || n == null || !be(t) && !be(n) ? t !== t && n !== n : Q0(t, n, s, l, os, d);
      }
      function Q0(t, n, s, l, d, h) {
        var w = G(t), g = G(n), b = w ? ri : Ye(t), B = g ? ri : Ye(n);
        b = b == Dr ? mn : b, B = B == Dr ? mn : B;
        var x = b == mn, k = B == mn, L = b == B;
        if (L && Zn(t)) {
          if (!Zn(n))
            return !1;
          w = !0, x = !1;
        }
        if (L && !x)
          return h || (h = new Ft()), w || jr(t) ? pA(t, n, s, l, d, h) : E_(t, n, b, s, l, d, h);
        if (!(s & M)) {
          var W = x && ue.call(t, "__wrapped__"), Z = k && ue.call(n, "__wrapped__");
          if (W || Z) {
            var K = W ? t.value() : t, U = Z ? n.value() : n;
            return h || (h = new Ft()), d(K, U, s, l, h);
          }
        }
        return L ? (h || (h = new Ft()), M_(t, n, s, l, d, h)) : !1;
      }
      function J0(t) {
        return be(t) && Ye(t) == qt;
      }
      function Xl(t, n, s, l) {
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
          var b = g[0], B = t[b], x = g[1];
          if (w && g[2]) {
            if (B === r && !(b in t))
              return !1;
          } else {
            var k = new Ft();
            if (l)
              var L = l(B, x, b, t, n, k);
            if (!(L === r ? os(x, B, M | P, l, k) : L))
              return !1;
          }
        }
        return !0;
      }
      function Of(t) {
        if (!Ve(t) || N_(t))
          return !1;
        var n = En(t) ? Jg : F1;
        return n.test(Ar(t));
      }
      function e_(t) {
        return be(t) && Qe(t) == Zo;
      }
      function t_(t) {
        return be(t) && Ye(t) == Rt;
      }
      function n_(t) {
        return be(t) && Ui(t.length) && !!me[Qe(t)];
      }
      function Lf(t) {
        return typeof t == "function" ? t : t == null ? at : typeof t == "object" ? G(t) ? Rf(t[0], t[1]) : qf(t) : ih(t);
      }
      function Zl(t) {
        if (!as(t))
          return s0(t);
        var n = [];
        for (var s in he(t))
          ue.call(t, s) && s != "constructor" && n.push(s);
        return n;
      }
      function r_(t) {
        if (!Ve(t))
          return z_(t);
        var n = as(t), s = [];
        for (var l in t)
          l == "constructor" && (n || !ue.call(t, l)) || s.push(l);
        return s;
      }
      function Ul(t, n) {
        return t < n;
      }
      function zf(t, n) {
        var s = -1, l = st(t) ? C(t.length) : [];
        return Rn(t, function(d, h, w) {
          l[++s] = n(d, h, w);
        }), l;
      }
      function qf(t) {
        var n = au(t);
        return n.length == 1 && n[0][2] ? _A(n[0][0], n[0][1]) : function(s) {
          return s === t || Xl(s, t, n);
        };
      }
      function Rf(t, n) {
        return uu(t) && gA(n) ? _A(un(t), n) : function(s) {
          var l = gu(s, t);
          return l === r && l === n ? _u(s, t) : os(n, l, M | P);
        };
      }
      function xi(t, n, s, l, d) {
        t !== n && ql(n, function(h, w) {
          if (d || (d = new Ft()), Ve(h))
            o_(t, n, w, s, xi, l, d);
          else {
            var g = l ? l(du(t, w), h, w + "", t, n, d) : r;
            g === r && (g = h), Ll(t, w, g);
          }
        }, it);
      }
      function o_(t, n, s, l, d, h, w) {
        var g = du(t, s), b = du(n, s), B = w.get(b);
        if (B) {
          Ll(t, s, B);
          return;
        }
        var x = h ? h(g, b, s + "", t, n, w) : r, k = x === r;
        if (k) {
          var L = G(b), W = !L && Zn(b), Z = !L && !W && jr(b);
          x = b, L || W || Z ? G(g) ? x = g : Me(g) ? x = ot(g) : W ? (k = !1, x = Jf(b, !0)) : Z ? (k = !1, x = eA(b, !0)) : x = [] : us(b) || hr(b) ? (x = g, hr(g) ? x = jA(g) : (!Ve(g) || En(g)) && (x = mA(b))) : k = !1;
        }
        k && (w.set(b, x), d(x, b, l, h, w), w.delete(b)), Ll(t, s, x);
      }
      function Wf(t, n) {
        var s = t.length;
        if (!!s)
          return n += n < 0 ? s : 0, Cn(n, s) ? t[n] : r;
      }
      function Ff(t, n, s) {
        n.length ? n = _e(n, function(h) {
          return G(h) ? function(w) {
            return dr(w, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [at];
        var l = -1;
        n = _e(n, ht(X()));
        var d = zf(t, function(h, w, g) {
          var b = _e(n, function(B) {
            return B(h);
          });
          return { criteria: b, index: ++l, value: h };
        });
        return Sg(d, function(h, w) {
          return v_(h, w, s);
        });
      }
      function s_(t, n) {
        return Xf(t, n, function(s, l) {
          return _u(t, l);
        });
      }
      function Xf(t, n, s) {
        for (var l = -1, d = n.length, h = {}; ++l < d; ) {
          var w = n[l], g = dr(t, w);
          s(g, w) && ss(h, Fn(w, t), g);
        }
        return h;
      }
      function i_(t) {
        return function(n) {
          return dr(n, t);
        };
      }
      function Yl(t, n, s, l) {
        var d = l ? xg : zr, h = -1, w = n.length, g = t;
        for (t === n && (n = ot(n)), s && (g = _e(t, ht(s))); ++h < w; )
          for (var b = 0, B = n[h], x = s ? s(B) : B; (b = d(g, x, b, l)) > -1; )
            g !== t && _i.call(g, b, 1), _i.call(t, b, 1);
        return t;
      }
      function Zf(t, n) {
        for (var s = t ? n.length : 0, l = s - 1; s--; ) {
          var d = n[s];
          if (s == l || d !== h) {
            var h = d;
            Cn(d) ? _i.call(t, d, 1) : Kl(t, d);
          }
        }
        return t;
      }
      function Hl(t, n) {
        return t + bi(Ef() * (n - t + 1));
      }
      function a_(t, n, s, l) {
        for (var d = -1, h = Pe(yi((n - t) / (s || 1)), 0), w = C(h); h--; )
          w[l ? h : ++d] = t, t += s;
        return w;
      }
      function Gl(t, n) {
        var s = "";
        if (!t || n < 1 || n > Ke)
          return s;
        do
          n % 2 && (s += t), n = bi(n / 2), n && (t += t);
        while (n);
        return s;
      }
      function J(t, n) {
        return fu(VA(t, n, at), t + "");
      }
      function l_(t) {
        return $f(Kr(t));
      }
      function u_(t, n) {
        var s = Kr(t);
        return qi(s, cr(n, 0, s.length));
      }
      function ss(t, n, s, l) {
        if (!Ve(t))
          return t;
        n = Fn(n, t);
        for (var d = -1, h = n.length, w = h - 1, g = t; g != null && ++d < h; ) {
          var b = un(n[d]), B = s;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != w) {
            var x = g[b];
            B = l ? l(x, b, g) : r, B === r && (B = Ve(x) ? x : Cn(n[d + 1]) ? [] : {});
          }
          ts(g, b, B), g = g[b];
        }
        return t;
      }
      var Uf = Ci ? function(t, n) {
        return Ci.set(t, n), t;
      } : at, c_ = Vi ? function(t, n) {
        return Vi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: yu(n),
          writable: !0
        });
      } : at;
      function d_(t) {
        return qi(Kr(t));
      }
      function St(t, n, s) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), s = s > d ? d : s, s < 0 && (s += d), d = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var h = C(d); ++l < d; )
          h[l] = t[l + n];
        return h;
      }
      function f_(t, n) {
        var s;
        return Rn(t, function(l, d, h) {
          return s = n(l, d, h), !s;
        }), !!s;
      }
      function Si(t, n, s) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= h1) {
          for (; l < d; ) {
            var h = l + d >>> 1, w = t[h];
            w !== null && !wt(w) && (s ? w <= n : w < n) ? l = h + 1 : d = h;
          }
          return d;
        }
        return jl(t, n, at, s);
      }
      function jl(t, n, s, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        n = s(n);
        for (var w = n !== n, g = n === null, b = wt(n), B = n === r; d < h; ) {
          var x = bi((d + h) / 2), k = s(t[x]), L = k !== r, W = k === null, Z = k === k, K = wt(k);
          if (w)
            var U = l || Z;
          else
            B ? U = Z && (l || L) : g ? U = Z && L && (l || !W) : b ? U = Z && L && !W && (l || !K) : W || K ? U = !1 : U = l ? k <= n : k < n;
          U ? d = x + 1 : h = x;
        }
        return Ue(h, A1);
      }
      function Yf(t, n) {
        for (var s = -1, l = t.length, d = 0, h = []; ++s < l; ) {
          var w = t[s], g = n ? n(w) : w;
          if (!s || !Xt(g, b)) {
            var b = g;
            h[d++] = w === 0 ? 0 : w;
          }
        }
        return h;
      }
      function Hf(t) {
        return typeof t == "number" ? t : wt(t) ? ni : +t;
      }
      function pt(t) {
        if (typeof t == "string")
          return t;
        if (G(t))
          return _e(t, pt) + "";
        if (wt(t))
          return Mf ? Mf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -ze ? "-0" : n;
      }
      function Wn(t, n, s) {
        var l = -1, d = ci, h = t.length, w = !0, g = [], b = g;
        if (s)
          w = !1, d = El;
        else if (h >= a) {
          var B = n ? null : b_(t);
          if (B)
            return fi(B);
          w = !1, d = Go, b = new ur();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < h; ) {
            var x = t[l], k = n ? n(x) : x;
            if (x = s || x !== 0 ? x : 0, w && k === k) {
              for (var L = b.length; L--; )
                if (b[L] === k)
                  continue e;
              n && b.push(k), g.push(x);
            } else
              d(b, k, s) || (b !== g && b.push(k), g.push(x));
          }
        return g;
      }
      function Kl(t, n) {
        return n = Fn(n, t), t = yA(t, n), t == null || delete t[un(Tt(n))];
      }
      function Gf(t, n, s, l) {
        return ss(t, n, s(dr(t, n)), l);
      }
      function Ti(t, n, s, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && n(t[h], h, t); )
          ;
        return s ? St(t, l ? 0 : h, l ? h + 1 : d) : St(t, l ? h + 1 : 0, l ? d : h);
      }
      function jf(t, n) {
        var s = t;
        return s instanceof te && (s = s.value()), Ml(n, function(l, d) {
          return d.func.apply(d.thisArg, Ln([l], d.args));
        }, s);
      }
      function Ql(t, n, s) {
        var l = t.length;
        if (l < 2)
          return l ? Wn(t[0]) : [];
        for (var d = -1, h = C(l); ++d < l; )
          for (var w = t[d], g = -1; ++g < l; )
            g != d && (h[d] = ns(h[d] || w, t[g], n, s));
        return Wn(Re(h, 1), n, s);
      }
      function Kf(t, n, s) {
        for (var l = -1, d = t.length, h = n.length, w = {}; ++l < d; ) {
          var g = l < h ? n[l] : r;
          s(w, t[l], g);
        }
        return w;
      }
      function Jl(t) {
        return Me(t) ? t : [];
      }
      function eu(t) {
        return typeof t == "function" ? t : at;
      }
      function Fn(t, n) {
        return G(t) ? t : uu(t, n) ? [t] : MA(ae(t));
      }
      var A_ = J;
      function Xn(t, n, s) {
        var l = t.length;
        return s = s === r ? l : s, !n && s >= l ? t : St(t, n, s);
      }
      var Qf = e0 || function(t) {
        return qe.clearTimeout(t);
      };
      function Jf(t, n) {
        if (n)
          return t.slice();
        var s = t.length, l = _f ? _f(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function tu(t) {
        var n = new t.constructor(t.byteLength);
        return new mi(n).set(new mi(t)), n;
      }
      function h_(t, n) {
        var s = n ? tu(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function p_(t) {
        var n = new t.constructor(t.source, Nd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function w_(t) {
        return es ? he(es.call(t)) : {};
      }
      function eA(t, n) {
        var s = n ? tu(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function tA(t, n) {
        if (t !== n) {
          var s = t !== r, l = t === null, d = t === t, h = wt(t), w = n !== r, g = n === null, b = n === n, B = wt(n);
          if (!g && !B && !h && t > n || h && w && b && !g && !B || l && w && b || !s && b || !d)
            return 1;
          if (!l && !h && !B && t < n || B && s && d && !l && !h || g && s && d || !w && d || !b)
            return -1;
        }
        return 0;
      }
      function v_(t, n, s) {
        for (var l = -1, d = t.criteria, h = n.criteria, w = d.length, g = s.length; ++l < w; ) {
          var b = tA(d[l], h[l]);
          if (b) {
            if (l >= g)
              return b;
            var B = s[l];
            return b * (B == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function nA(t, n, s, l) {
        for (var d = -1, h = t.length, w = s.length, g = -1, b = n.length, B = Pe(h - w, 0), x = C(b + B), k = !l; ++g < b; )
          x[g] = n[g];
        for (; ++d < w; )
          (k || d < h) && (x[s[d]] = t[d]);
        for (; B--; )
          x[g++] = t[d++];
        return x;
      }
      function rA(t, n, s, l) {
        for (var d = -1, h = t.length, w = -1, g = s.length, b = -1, B = n.length, x = Pe(h - g, 0), k = C(x + B), L = !l; ++d < x; )
          k[d] = t[d];
        for (var W = d; ++b < B; )
          k[W + b] = n[b];
        for (; ++w < g; )
          (L || d < h) && (k[W + s[w]] = t[d++]);
        return k;
      }
      function ot(t, n) {
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
          b === r && (b = t[g]), d ? Vn(s, g, b) : ts(s, g, b);
        }
        return s;
      }
      function m_(t, n) {
        return ln(t, lu(t), n);
      }
      function g_(t, n) {
        return ln(t, wA(t), n);
      }
      function Pi(t, n) {
        return function(s, l) {
          var d = G(s) ? Cg : R0, h = n ? n() : {};
          return d(s, t, X(l, 2), h);
        };
      }
      function Yr(t) {
        return J(function(n, s) {
          var l = -1, d = s.length, h = d > 1 ? s[d - 1] : r, w = d > 2 ? s[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, w && Je(s[0], s[1], w) && (h = d < 3 ? r : h, d = 1), n = he(n); ++l < d; ) {
            var g = s[l];
            g && t(n, g, l, h);
          }
          return n;
        });
      }
      function oA(t, n) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!st(s))
            return t(s, l);
          for (var d = s.length, h = n ? d : -1, w = he(s); (n ? h-- : ++h < d) && l(w[h], h, w) !== !1; )
            ;
          return s;
        };
      }
      function sA(t) {
        return function(n, s, l) {
          for (var d = -1, h = he(n), w = l(n), g = w.length; g--; ) {
            var b = w[t ? g : ++d];
            if (s(h[b], b, h) === !1)
              break;
          }
          return n;
        };
      }
      function __(t, n, s) {
        var l = n & D, d = is(t);
        function h() {
          var w = this && this !== qe && this instanceof h ? d : t;
          return w.apply(l ? s : this, arguments);
        }
        return h;
      }
      function iA(t) {
        return function(n) {
          n = ae(n);
          var s = qr(n) ? Wt(n) : r, l = s ? s[0] : n.charAt(0), d = s ? Xn(s, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Hr(t) {
        return function(n) {
          return Ml(oh(rh(n).replace(cg, "")), t, "");
        };
      }
      function is(t) {
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
          var s = Ur(t.prototype), l = t.apply(s, n);
          return Ve(l) ? l : s;
        };
      }
      function V_(t, n, s) {
        var l = is(t);
        function d() {
          for (var h = arguments.length, w = C(h), g = h, b = Gr(d); g--; )
            w[g] = arguments[g];
          var B = h < 3 && w[0] !== b && w[h - 1] !== b ? [] : zn(w, b);
          if (h -= B.length, h < s)
            return dA(
              t,
              n,
              ki,
              d.placeholder,
              r,
              w,
              B,
              r,
              r,
              s - h
            );
          var x = this && this !== qe && this instanceof d ? l : t;
          return At(x, this, w);
        }
        return d;
      }
      function aA(t) {
        return function(n, s, l) {
          var d = he(n);
          if (!st(n)) {
            var h = X(s, 3);
            n = De(n), s = function(g) {
              return h(d[g], g, d);
            };
          }
          var w = t(n, s, l);
          return w > -1 ? d[h ? n[w] : w] : r;
        };
      }
      function lA(t) {
        return bn(function(n) {
          var s = n.length, l = s, d = It.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var h = n[l];
            if (typeof h != "function")
              throw new $t(c);
            if (d && !w && Li(h) == "wrapper")
              var w = new It([], !0);
          }
          for (l = w ? l : s; ++l < s; ) {
            h = n[l];
            var g = Li(h), b = g == "wrapper" ? iu(h) : r;
            b && cu(b[0]) && b[1] == (O | S | I | F) && !b[4].length && b[9] == 1 ? w = w[Li(b[0])].apply(w, b[3]) : w = h.length == 1 && cu(h) ? w[g]() : w.thru(h);
          }
          return function() {
            var B = arguments, x = B[0];
            if (w && B.length == 1 && G(x))
              return w.plant(x).value();
            for (var k = 0, L = s ? n[k].apply(this, B) : x; ++k < s; )
              L = n[k].call(this, L);
            return L;
          };
        });
      }
      function ki(t, n, s, l, d, h, w, g, b, B) {
        var x = n & O, k = n & D, L = n & T, W = n & (S | q), Z = n & ge, K = L ? r : is(t);
        function U() {
          for (var ee = arguments.length, ne = C(ee), vt = ee; vt--; )
            ne[vt] = arguments[vt];
          if (W)
            var et = Gr(U), mt = Pg(ne, et);
          if (l && (ne = nA(ne, l, d, W)), h && (ne = rA(ne, h, w, W)), ee -= mt, W && ee < B) {
            var Be = zn(ne, et);
            return dA(
              t,
              n,
              ki,
              U.placeholder,
              s,
              ne,
              Be,
              g,
              b,
              B - ee
            );
          }
          var Zt = k ? s : this, Bn = L ? Zt[t] : t;
          return ee = ne.length, g ? ne = R_(ne, g) : Z && ee > 1 && ne.reverse(), x && b < ee && (ne.length = b), this && this !== qe && this instanceof U && (Bn = K || is(Bn)), Bn.apply(Zt, ne);
        }
        return U;
      }
      function uA(t, n) {
        return function(s, l) {
          return G0(s, t, n(l), {});
        };
      }
      function Ni(t, n) {
        return function(s, l) {
          var d;
          if (s === r && l === r)
            return n;
          if (s !== r && (d = s), l !== r) {
            if (d === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = pt(s), l = pt(l)) : (s = Hf(s), l = Hf(l)), d = t(s, l);
          }
          return d;
        };
      }
      function nu(t) {
        return bn(function(n) {
          return n = _e(n, ht(X())), J(function(s) {
            var l = this;
            return t(n, function(d) {
              return At(d, l, s);
            });
          });
        });
      }
      function Di(t, n) {
        n = n === r ? " " : pt(n);
        var s = n.length;
        if (s < 2)
          return s ? Gl(n, t) : n;
        var l = Gl(n, yi(t / Rr(n)));
        return qr(n) ? Xn(Wt(l), 0, t).join("") : l.slice(0, t);
      }
      function y_(t, n, s, l) {
        var d = n & D, h = is(t);
        function w() {
          for (var g = -1, b = arguments.length, B = -1, x = l.length, k = C(x + b), L = this && this !== qe && this instanceof w ? h : t; ++B < x; )
            k[B] = l[B];
          for (; b--; )
            k[B++] = arguments[++g];
          return At(L, d ? s : this, k);
        }
        return w;
      }
      function cA(t) {
        return function(n, s, l) {
          return l && typeof l != "number" && Je(n, s, l) && (s = l = r), n = Mn(n), s === r ? (s = n, n = 0) : s = Mn(s), l = l === r ? n < s ? 1 : -1 : Mn(l), a_(n, s, l, t);
        };
      }
      function Oi(t) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = Pt(n), s = Pt(s)), t(n, s);
        };
      }
      function dA(t, n, s, l, d, h, w, g, b, B) {
        var x = n & S, k = x ? w : r, L = x ? r : w, W = x ? h : r, Z = x ? r : h;
        n |= x ? I : z, n &= ~(x ? z : I), n & N || (n &= ~(D | T));
        var K = [
          t,
          n,
          d,
          W,
          k,
          Z,
          L,
          g,
          b,
          B
        ], U = s.apply(r, K);
        return cu(t) && bA(U, K), U.placeholder = l, CA(U, t, n);
      }
      function ru(t) {
        var n = Te[t];
        return function(s, l) {
          if (s = Pt(s), l = l == null ? 0 : Ue(j(l), 292), l && Cf(s)) {
            var d = (ae(s) + "e").split("e"), h = n(d[0] + "e" + (+d[1] + l));
            return d = (ae(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(s);
        };
      }
      var b_ = Xr && 1 / fi(new Xr([, -0]))[1] == ze ? function(t) {
        return new Xr(t);
      } : Eu;
      function fA(t) {
        return function(n) {
          var s = Ye(n);
          return s == qt ? Pl(n) : s == Rt ? qg(n) : Tg(n, t(n));
        };
      }
      function yn(t, n, s, l, d, h, w, g) {
        var b = n & T;
        if (!b && typeof t != "function")
          throw new $t(c);
        var B = l ? l.length : 0;
        if (B || (n &= ~(I | z), l = d = r), w = w === r ? w : Pe(j(w), 0), g = g === r ? g : j(g), B -= d ? d.length : 0, n & z) {
          var x = l, k = d;
          l = d = r;
        }
        var L = b ? r : iu(t), W = [
          t,
          n,
          s,
          l,
          d,
          x,
          k,
          h,
          w,
          g
        ];
        if (L && L_(W, L), t = W[0], n = W[1], s = W[2], l = W[3], d = W[4], g = W[9] = W[9] === r ? b ? 0 : t.length : Pe(W[9] - B, 0), !g && n & (S | q) && (n &= ~(S | q)), !n || n == D)
          var Z = __(t, n, s);
        else
          n == S || n == q ? Z = V_(t, n, g) : (n == I || n == (D | I)) && !d.length ? Z = y_(t, n, s, l) : Z = ki.apply(r, W);
        var K = L ? Uf : bA;
        return CA(K(Z, W), t, n);
      }
      function AA(t, n, s, l) {
        return t === r || Xt(t, Fr[s]) && !ue.call(l, s) ? n : t;
      }
      function hA(t, n, s, l, d, h) {
        return Ve(t) && Ve(n) && (h.set(n, t), xi(t, n, r, hA, h), h.delete(n)), t;
      }
      function C_(t) {
        return us(t) ? r : t;
      }
      function pA(t, n, s, l, d, h) {
        var w = s & M, g = t.length, b = n.length;
        if (g != b && !(w && b > g))
          return !1;
        var B = h.get(t), x = h.get(n);
        if (B && x)
          return B == n && x == t;
        var k = -1, L = !0, W = s & P ? new ur() : r;
        for (h.set(t, n), h.set(n, t); ++k < g; ) {
          var Z = t[k], K = n[k];
          if (l)
            var U = w ? l(K, Z, k, n, t, h) : l(Z, K, k, t, n, h);
          if (U !== r) {
            if (U)
              continue;
            L = !1;
            break;
          }
          if (W) {
            if (!Bl(n, function(ee, ne) {
              if (!Go(W, ne) && (Z === ee || d(Z, ee, s, l, h)))
                return W.push(ne);
            })) {
              L = !1;
              break;
            }
          } else if (!(Z === K || d(Z, K, s, l, h))) {
            L = !1;
            break;
          }
        }
        return h.delete(t), h.delete(n), L;
      }
      function E_(t, n, s, l, d, h, w) {
        switch (s) {
          case Or:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Ho:
            return !(t.byteLength != n.byteLength || !h(new mi(t), new mi(n)));
          case Wo:
          case Fo:
          case Xo:
            return Xt(+t, +n);
          case oi:
            return t.name == n.name && t.message == n.message;
          case Zo:
          case Uo:
            return t == n + "";
          case qt:
            var g = Pl;
          case Rt:
            var b = l & M;
            if (g || (g = fi), t.size != n.size && !b)
              return !1;
            var B = w.get(t);
            if (B)
              return B == n;
            l |= P, w.set(t, n);
            var x = pA(g(t), g(n), l, d, h, w);
            return w.delete(t), x;
          case ii:
            if (es)
              return es.call(t) == es.call(n);
        }
        return !1;
      }
      function M_(t, n, s, l, d, h) {
        var w = s & M, g = ou(t), b = g.length, B = ou(n), x = B.length;
        if (b != x && !w)
          return !1;
        for (var k = b; k--; ) {
          var L = g[k];
          if (!(w ? L in n : ue.call(n, L)))
            return !1;
        }
        var W = h.get(t), Z = h.get(n);
        if (W && Z)
          return W == n && Z == t;
        var K = !0;
        h.set(t, n), h.set(n, t);
        for (var U = w; ++k < b; ) {
          L = g[k];
          var ee = t[L], ne = n[L];
          if (l)
            var vt = w ? l(ne, ee, L, n, t, h) : l(ee, ne, L, t, n, h);
          if (!(vt === r ? ee === ne || d(ee, ne, s, l, h) : vt)) {
            K = !1;
            break;
          }
          U || (U = L == "constructor");
        }
        if (K && !U) {
          var et = t.constructor, mt = n.constructor;
          et != mt && "constructor" in t && "constructor" in n && !(typeof et == "function" && et instanceof et && typeof mt == "function" && mt instanceof mt) && (K = !1);
        }
        return h.delete(t), h.delete(n), K;
      }
      function bn(t) {
        return fu(VA(t, r, xA), t + "");
      }
      function ou(t) {
        return Nf(t, De, lu);
      }
      function su(t) {
        return Nf(t, it, wA);
      }
      var iu = Ci ? function(t) {
        return Ci.get(t);
      } : Eu;
      function Li(t) {
        for (var n = t.name + "", s = Zr[n], l = ue.call(Zr, n) ? s.length : 0; l--; ) {
          var d = s[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return n;
      }
      function Gr(t) {
        var n = ue.call(A, "placeholder") ? A : t;
        return n.placeholder;
      }
      function X() {
        var t = A.iteratee || bu;
        return t = t === bu ? Lf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function zi(t, n) {
        var s = t.__data__;
        return k_(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function au(t) {
        for (var n = De(t), s = n.length; s--; ) {
          var l = n[s], d = t[l];
          n[s] = [l, d, gA(d)];
        }
        return n;
      }
      function fr(t, n) {
        var s = Og(t, n);
        return Of(s) ? s : r;
      }
      function B_(t) {
        var n = ue.call(t, ar), s = t[ar];
        try {
          t[ar] = r;
          var l = !0;
        } catch {
        }
        var d = wi.call(t);
        return l && (n ? t[ar] = s : delete t[ar]), d;
      }
      var lu = Nl ? function(t) {
        return t == null ? [] : (t = he(t), On(Nl(t), function(n) {
          return yf.call(t, n);
        }));
      } : Mu, wA = Nl ? function(t) {
        for (var n = []; t; )
          Ln(n, lu(t)), t = gi(t);
        return n;
      } : Mu, Ye = Qe;
      (Dl && Ye(new Dl(new ArrayBuffer(1))) != Or || Ko && Ye(new Ko()) != qt || Ol && Ye(Ol.resolve()) != Sd || Xr && Ye(new Xr()) != Rt || Qo && Ye(new Qo()) != Yo) && (Ye = function(t) {
        var n = Qe(t), s = n == mn ? t.constructor : r, l = s ? Ar(s) : "";
        if (l)
          switch (l) {
            case u0:
              return Or;
            case c0:
              return qt;
            case d0:
              return Sd;
            case f0:
              return Rt;
            case A0:
              return Yo;
          }
        return n;
      });
      function $_(t, n, s) {
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
      function I_(t) {
        var n = t.match(N1);
        return n ? n[1].split(D1) : [];
      }
      function vA(t, n, s) {
        n = Fn(n, t);
        for (var l = -1, d = n.length, h = !1; ++l < d; ) {
          var w = un(n[l]);
          if (!(h = t != null && s(t, w)))
            break;
          t = t[w];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && Ui(d) && Cn(w, d) && (G(t) || hr(t)));
      }
      function x_(t) {
        var n = t.length, s = new t.constructor(n);
        return n && typeof t[0] == "string" && ue.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function mA(t) {
        return typeof t.constructor == "function" && !as(t) ? Ur(gi(t)) : {};
      }
      function S_(t, n, s) {
        var l = t.constructor;
        switch (n) {
          case Ho:
            return tu(t);
          case Wo:
          case Fo:
            return new l(+t);
          case Or:
            return h_(t, s);
          case al:
          case ll:
          case ul:
          case cl:
          case dl:
          case fl:
          case Al:
          case hl:
          case pl:
            return eA(t, s);
          case qt:
            return new l();
          case Xo:
          case Uo:
            return new l(t);
          case Zo:
            return p_(t);
          case Rt:
            return new l();
          case ii:
            return w_(t);
        }
      }
      function T_(t, n) {
        var s = n.length;
        if (!s)
          return t;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), t.replace(k1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function P_(t) {
        return G(t) || hr(t) || !!(bf && t && t[bf]);
      }
      function Cn(t, n) {
        var s = typeof t;
        return n = n == null ? Ke : n, !!n && (s == "number" || s != "symbol" && Z1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Je(t, n, s) {
        if (!Ve(s))
          return !1;
        var l = typeof n;
        return (l == "number" ? st(s) && Cn(n, s.length) : l == "string" && n in s) ? Xt(s[n], t) : !1;
      }
      function uu(t, n) {
        if (G(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || wt(t) ? !0 : x1.test(t) || !I1.test(t) || n != null && t in he(n);
      }
      function k_(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function cu(t) {
        var n = Li(t), s = A[n];
        if (typeof s != "function" || !(n in te.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = iu(s);
        return !!l && t === l[0];
      }
      function N_(t) {
        return !!gf && gf in t;
      }
      var D_ = hi ? En : Bu;
      function as(t) {
        var n = t && t.constructor, s = typeof n == "function" && n.prototype || Fr;
        return t === s;
      }
      function gA(t) {
        return t === t && !Ve(t);
      }
      function _A(t, n) {
        return function(s) {
          return s == null ? !1 : s[t] === n && (n !== r || t in he(s));
        };
      }
      function O_(t) {
        var n = Xi(t, function(l) {
          return s.size === v && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function L_(t, n) {
        var s = t[1], l = n[1], d = s | l, h = d < (D | T | O), w = l == O && s == S || l == O && s == F && t[7].length <= n[8] || l == (O | F) && n[7].length <= n[8] && s == S;
        if (!(h || w))
          return t;
        l & D && (t[2] = n[2], d |= s & D ? 0 : N);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? nA(b, g, n[4]) : g, t[4] = b ? zn(t[3], m) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? rA(b, g, n[6]) : g, t[6] = b ? zn(t[5], m) : n[6]), g = n[7], g && (t[7] = g), l & O && (t[8] = t[8] == null ? n[8] : Ue(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function z_(t) {
        var n = [];
        if (t != null)
          for (var s in he(t))
            n.push(s);
        return n;
      }
      function q_(t) {
        return wi.call(t);
      }
      function VA(t, n, s) {
        return n = Pe(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, h = Pe(l.length - n, 0), w = C(h); ++d < h; )
            w[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = s(w), At(t, this, g);
        };
      }
      function yA(t, n) {
        return n.length < 2 ? t : dr(t, St(n, 0, -1));
      }
      function R_(t, n) {
        for (var s = t.length, l = Ue(n.length, s), d = ot(t); l--; ) {
          var h = n[l];
          t[l] = Cn(h, s) ? d[h] : r;
        }
        return t;
      }
      function du(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var bA = EA(Uf), ls = n0 || function(t, n) {
        return qe.setTimeout(t, n);
      }, fu = EA(c_);
      function CA(t, n, s) {
        var l = n + "";
        return fu(t, T_(l, W_(I_(l), s)));
      }
      function EA(t) {
        var n = 0, s = 0;
        return function() {
          var l = i0(), d = Ee - (l - s);
          if (s = l, d > 0) {
            if (++n >= ye)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function qi(t, n) {
        var s = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++s < n; ) {
          var h = Hl(s, d), w = t[h];
          t[h] = t[s], t[s] = w;
        }
        return t.length = n, t;
      }
      var MA = O_(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(S1, function(s, l, d, h) {
          n.push(d ? h.replace(z1, "$1") : l || s);
        }), n;
      });
      function un(t) {
        if (typeof t == "string" || wt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -ze ? "-0" : n;
      }
      function Ar(t) {
        if (t != null) {
          try {
            return pi.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function W_(t, n) {
        return Bt(p1, function(s) {
          var l = "_." + s[0];
          n & s[1] && !ci(t, l) && t.push(l);
        }), t.sort();
      }
      function BA(t) {
        if (t instanceof te)
          return t.clone();
        var n = new It(t.__wrapped__, t.__chain__);
        return n.__actions__ = ot(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function F_(t, n, s) {
        (s ? Je(t, n, s) : n === r) ? n = 1 : n = Pe(j(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, h = 0, w = C(yi(l / n)); d < l; )
          w[h++] = St(t, d, d += n);
        return w;
      }
      function X_(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = 0, d = []; ++n < s; ) {
          var h = t[n];
          h && (d[l++] = h);
        }
        return d;
      }
      function Z_() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), s = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Ln(G(s) ? ot(s) : [s], Re(n, 1));
      }
      var U_ = J(function(t, n) {
        return Me(t) ? ns(t, Re(n, 1, Me, !0)) : [];
      }), Y_ = J(function(t, n) {
        var s = Tt(n);
        return Me(s) && (s = r), Me(t) ? ns(t, Re(n, 1, Me, !0), X(s, 2)) : [];
      }), H_ = J(function(t, n) {
        var s = Tt(n);
        return Me(s) && (s = r), Me(t) ? ns(t, Re(n, 1, Me, !0), r, s) : [];
      });
      function G_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), St(t, n < 0 ? 0 : n, l)) : [];
      }
      function j_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), n = l - n, St(t, 0, n < 0 ? 0 : n)) : [];
      }
      function K_(t, n) {
        return t && t.length ? Ti(t, X(n, 3), !0, !0) : [];
      }
      function Q_(t, n) {
        return t && t.length ? Ti(t, X(n, 3), !0) : [];
      }
      function J_(t, n, s, l) {
        var d = t == null ? 0 : t.length;
        return d ? (s && typeof s != "number" && Je(t, n, s) && (s = 0, l = d), Z0(t, n, s, l)) : [];
      }
      function $A(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : j(s);
        return d < 0 && (d = Pe(l + d, 0)), di(t, X(n, 3), d);
      }
      function IA(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return s !== r && (d = j(s), d = s < 0 ? Pe(l + d, 0) : Ue(d, l - 1)), di(t, X(n, 3), d, !0);
      }
      function xA(t) {
        var n = t == null ? 0 : t.length;
        return n ? Re(t, 1) : [];
      }
      function eV(t) {
        var n = t == null ? 0 : t.length;
        return n ? Re(t, ze) : [];
      }
      function tV(t, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n = n === r ? 1 : j(n), Re(t, n)) : [];
      }
      function nV(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = {}; ++n < s; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function SA(t) {
        return t && t.length ? t[0] : r;
      }
      function rV(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : j(s);
        return d < 0 && (d = Pe(l + d, 0)), zr(t, n, d);
      }
      function oV(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 0, -1) : [];
      }
      var sV = J(function(t) {
        var n = _e(t, Jl);
        return n.length && n[0] === t[0] ? Fl(n) : [];
      }), iV = J(function(t) {
        var n = Tt(t), s = _e(t, Jl);
        return n === Tt(s) ? n = r : s.pop(), s.length && s[0] === t[0] ? Fl(s, X(n, 2)) : [];
      }), aV = J(function(t) {
        var n = Tt(t), s = _e(t, Jl);
        return n = typeof n == "function" ? n : r, n && s.pop(), s.length && s[0] === t[0] ? Fl(s, r, n) : [];
      });
      function lV(t, n) {
        return t == null ? "" : o0.call(t, n);
      }
      function Tt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function uV(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return s !== r && (d = j(s), d = d < 0 ? Pe(l + d, 0) : Ue(d, l - 1)), n === n ? Wg(t, n, d) : di(t, df, d, !0);
      }
      function cV(t, n) {
        return t && t.length ? Wf(t, j(n)) : r;
      }
      var dV = J(TA);
      function TA(t, n) {
        return t && t.length && n && n.length ? Yl(t, n) : t;
      }
      function fV(t, n, s) {
        return t && t.length && n && n.length ? Yl(t, n, X(s, 2)) : t;
      }
      function AV(t, n, s) {
        return t && t.length && n && n.length ? Yl(t, n, r, s) : t;
      }
      var hV = bn(function(t, n) {
        var s = t == null ? 0 : t.length, l = zl(t, n);
        return Zf(t, _e(n, function(d) {
          return Cn(d, s) ? +d : d;
        }).sort(tA)), l;
      });
      function pV(t, n) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, d = [], h = t.length;
        for (n = X(n, 3); ++l < h; ) {
          var w = t[l];
          n(w, l, t) && (s.push(w), d.push(l));
        }
        return Zf(t, d), s;
      }
      function Au(t) {
        return t == null ? t : l0.call(t);
      }
      function wV(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && Je(t, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : j(n), s = s === r ? l : j(s)), St(t, n, s)) : [];
      }
      function vV(t, n) {
        return Si(t, n);
      }
      function mV(t, n, s) {
        return jl(t, n, X(s, 2));
      }
      function gV(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Si(t, n);
          if (l < s && Xt(t[l], n))
            return l;
        }
        return -1;
      }
      function _V(t, n) {
        return Si(t, n, !0);
      }
      function VV(t, n, s) {
        return jl(t, n, X(s, 2), !0);
      }
      function yV(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Si(t, n, !0) - 1;
          if (Xt(t[l], n))
            return l;
        }
        return -1;
      }
      function bV(t) {
        return t && t.length ? Yf(t) : [];
      }
      function CV(t, n) {
        return t && t.length ? Yf(t, X(n, 2)) : [];
      }
      function EV(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 1, n) : [];
      }
      function MV(t, n, s) {
        return t && t.length ? (n = s || n === r ? 1 : j(n), St(t, 0, n < 0 ? 0 : n)) : [];
      }
      function BV(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), n = l - n, St(t, n < 0 ? 0 : n, l)) : [];
      }
      function $V(t, n) {
        return t && t.length ? Ti(t, X(n, 3), !1, !0) : [];
      }
      function IV(t, n) {
        return t && t.length ? Ti(t, X(n, 3)) : [];
      }
      var xV = J(function(t) {
        return Wn(Re(t, 1, Me, !0));
      }), SV = J(function(t) {
        var n = Tt(t);
        return Me(n) && (n = r), Wn(Re(t, 1, Me, !0), X(n, 2));
      }), TV = J(function(t) {
        var n = Tt(t);
        return n = typeof n == "function" ? n : r, Wn(Re(t, 1, Me, !0), r, n);
      });
      function PV(t) {
        return t && t.length ? Wn(t) : [];
      }
      function kV(t, n) {
        return t && t.length ? Wn(t, X(n, 2)) : [];
      }
      function NV(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Wn(t, r, n) : [];
      }
      function hu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = On(t, function(s) {
          if (Me(s))
            return n = Pe(s.length, n), !0;
        }), Sl(n, function(s) {
          return _e(t, $l(s));
        });
      }
      function PA(t, n) {
        if (!(t && t.length))
          return [];
        var s = hu(t);
        return n == null ? s : _e(s, function(l) {
          return At(n, r, l);
        });
      }
      var DV = J(function(t, n) {
        return Me(t) ? ns(t, n) : [];
      }), OV = J(function(t) {
        return Ql(On(t, Me));
      }), LV = J(function(t) {
        var n = Tt(t);
        return Me(n) && (n = r), Ql(On(t, Me), X(n, 2));
      }), zV = J(function(t) {
        var n = Tt(t);
        return n = typeof n == "function" ? n : r, Ql(On(t, Me), r, n);
      }), qV = J(hu);
      function RV(t, n) {
        return Kf(t || [], n || [], ts);
      }
      function WV(t, n) {
        return Kf(t || [], n || [], ss);
      }
      var FV = J(function(t) {
        var n = t.length, s = n > 1 ? t[n - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, PA(t, s);
      });
      function kA(t) {
        var n = A(t);
        return n.__chain__ = !0, n;
      }
      function XV(t, n) {
        return n(t), t;
      }
      function Ri(t, n) {
        return n(t);
      }
      var ZV = bn(function(t) {
        var n = t.length, s = n ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return zl(h, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof te) || !Cn(s) ? this.thru(d) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Ri,
          args: [d],
          thisArg: r
        }), new It(l, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function UV() {
        return kA(this);
      }
      function YV() {
        return new It(this.value(), this.__chain__);
      }
      function HV() {
        this.__values__ === r && (this.__values__ = HA(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function GV() {
        return this;
      }
      function jV(t) {
        for (var n, s = this; s instanceof Mi; ) {
          var l = BA(s);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          s = s.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function KV() {
        var t = this.__wrapped__;
        if (t instanceof te) {
          var n = t;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: Ri,
            args: [Au],
            thisArg: r
          }), new It(n, this.__chain__);
        }
        return this.thru(Au);
      }
      function QV() {
        return jf(this.__wrapped__, this.__actions__);
      }
      var JV = Pi(function(t, n, s) {
        ue.call(t, s) ? ++t[s] : Vn(t, s, 1);
      });
      function ey(t, n, s) {
        var l = G(t) ? uf : X0;
        return s && Je(t, n, s) && (n = r), l(t, X(n, 3));
      }
      function ty(t, n) {
        var s = G(t) ? On : Pf;
        return s(t, X(n, 3));
      }
      var ny = aA($A), ry = aA(IA);
      function oy(t, n) {
        return Re(Wi(t, n), 1);
      }
      function sy(t, n) {
        return Re(Wi(t, n), ze);
      }
      function iy(t, n, s) {
        return s = s === r ? 1 : j(s), Re(Wi(t, n), s);
      }
      function NA(t, n) {
        var s = G(t) ? Bt : Rn;
        return s(t, X(n, 3));
      }
      function DA(t, n) {
        var s = G(t) ? Eg : Tf;
        return s(t, X(n, 3));
      }
      var ay = Pi(function(t, n, s) {
        ue.call(t, s) ? t[s].push(n) : Vn(t, s, [n]);
      });
      function ly(t, n, s, l) {
        t = st(t) ? t : Kr(t), s = s && !l ? j(s) : 0;
        var d = t.length;
        return s < 0 && (s = Pe(d + s, 0)), Yi(t) ? s <= d && t.indexOf(n, s) > -1 : !!d && zr(t, n, s) > -1;
      }
      var uy = J(function(t, n, s) {
        var l = -1, d = typeof n == "function", h = st(t) ? C(t.length) : [];
        return Rn(t, function(w) {
          h[++l] = d ? At(n, w, s) : rs(w, n, s);
        }), h;
      }), cy = Pi(function(t, n, s) {
        Vn(t, s, n);
      });
      function Wi(t, n) {
        var s = G(t) ? _e : zf;
        return s(t, X(n, 3));
      }
      function dy(t, n, s, l) {
        return t == null ? [] : (G(n) || (n = n == null ? [] : [n]), s = l ? r : s, G(s) || (s = s == null ? [] : [s]), Ff(t, n, s));
      }
      var fy = Pi(function(t, n, s) {
        t[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Ay(t, n, s) {
        var l = G(t) ? Ml : Af, d = arguments.length < 3;
        return l(t, X(n, 4), s, d, Rn);
      }
      function hy(t, n, s) {
        var l = G(t) ? Mg : Af, d = arguments.length < 3;
        return l(t, X(n, 4), s, d, Tf);
      }
      function py(t, n) {
        var s = G(t) ? On : Pf;
        return s(t, Zi(X(n, 3)));
      }
      function wy(t) {
        var n = G(t) ? $f : l_;
        return n(t);
      }
      function vy(t, n, s) {
        (s ? Je(t, n, s) : n === r) ? n = 1 : n = j(n);
        var l = G(t) ? z0 : u_;
        return l(t, n);
      }
      function my(t) {
        var n = G(t) ? q0 : d_;
        return n(t);
      }
      function gy(t) {
        if (t == null)
          return 0;
        if (st(t))
          return Yi(t) ? Rr(t) : t.length;
        var n = Ye(t);
        return n == qt || n == Rt ? t.size : Zl(t).length;
      }
      function _y(t, n, s) {
        var l = G(t) ? Bl : f_;
        return s && Je(t, n, s) && (n = r), l(t, X(n, 3));
      }
      var Vy = J(function(t, n) {
        if (t == null)
          return [];
        var s = n.length;
        return s > 1 && Je(t, n[0], n[1]) ? n = [] : s > 2 && Je(n[0], n[1], n[2]) && (n = [n[0]]), Ff(t, Re(n, 1), []);
      }), Fi = t0 || function() {
        return qe.Date.now();
      };
      function yy(t, n) {
        if (typeof n != "function")
          throw new $t(c);
        return t = j(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function OA(t, n, s) {
        return n = s ? r : n, n = t && n == null ? t.length : n, yn(t, O, r, r, r, r, n);
      }
      function LA(t, n) {
        var s;
        if (typeof n != "function")
          throw new $t(c);
        return t = j(t), function() {
          return --t > 0 && (s = n.apply(this, arguments)), t <= 1 && (n = r), s;
        };
      }
      var pu = J(function(t, n, s) {
        var l = D;
        if (s.length) {
          var d = zn(s, Gr(pu));
          l |= I;
        }
        return yn(t, l, n, s, d);
      }), zA = J(function(t, n, s) {
        var l = D | T;
        if (s.length) {
          var d = zn(s, Gr(zA));
          l |= I;
        }
        return yn(n, l, t, s, d);
      });
      function qA(t, n, s) {
        n = s ? r : n;
        var l = yn(t, S, r, r, r, r, r, n);
        return l.placeholder = qA.placeholder, l;
      }
      function RA(t, n, s) {
        n = s ? r : n;
        var l = yn(t, q, r, r, r, r, r, n);
        return l.placeholder = RA.placeholder, l;
      }
      function WA(t, n, s) {
        var l, d, h, w, g, b, B = 0, x = !1, k = !1, L = !0;
        if (typeof t != "function")
          throw new $t(c);
        n = Pt(n) || 0, Ve(s) && (x = !!s.leading, k = "maxWait" in s, h = k ? Pe(Pt(s.maxWait) || 0, n) : h, L = "trailing" in s ? !!s.trailing : L);
        function W(Be) {
          var Zt = l, Bn = d;
          return l = d = r, B = Be, w = t.apply(Bn, Zt), w;
        }
        function Z(Be) {
          return B = Be, g = ls(ee, n), x ? W(Be) : w;
        }
        function K(Be) {
          var Zt = Be - b, Bn = Be - B, ah = n - Zt;
          return k ? Ue(ah, h - Bn) : ah;
        }
        function U(Be) {
          var Zt = Be - b, Bn = Be - B;
          return b === r || Zt >= n || Zt < 0 || k && Bn >= h;
        }
        function ee() {
          var Be = Fi();
          if (U(Be))
            return ne(Be);
          g = ls(ee, K(Be));
        }
        function ne(Be) {
          return g = r, L && l ? W(Be) : (l = d = r, w);
        }
        function vt() {
          g !== r && Qf(g), B = 0, l = b = d = g = r;
        }
        function et() {
          return g === r ? w : ne(Fi());
        }
        function mt() {
          var Be = Fi(), Zt = U(Be);
          if (l = arguments, d = this, b = Be, Zt) {
            if (g === r)
              return Z(b);
            if (k)
              return Qf(g), g = ls(ee, n), W(b);
          }
          return g === r && (g = ls(ee, n)), w;
        }
        return mt.cancel = vt, mt.flush = et, mt;
      }
      var by = J(function(t, n) {
        return Sf(t, 1, n);
      }), Cy = J(function(t, n, s) {
        return Sf(t, Pt(n) || 0, s);
      });
      function Ey(t) {
        return yn(t, ge);
      }
      function Xi(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new $t(c);
        var s = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], h = s.cache;
          if (h.has(d))
            return h.get(d);
          var w = t.apply(this, l);
          return s.cache = h.set(d, w) || h, w;
        };
        return s.cache = new (Xi.Cache || _n)(), s;
      }
      Xi.Cache = _n;
      function Zi(t) {
        if (typeof t != "function")
          throw new $t(c);
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
      function My(t) {
        return LA(2, t);
      }
      var By = A_(function(t, n) {
        n = n.length == 1 && G(n[0]) ? _e(n[0], ht(X())) : _e(Re(n, 1), ht(X()));
        var s = n.length;
        return J(function(l) {
          for (var d = -1, h = Ue(l.length, s); ++d < h; )
            l[d] = n[d].call(this, l[d]);
          return At(t, this, l);
        });
      }), wu = J(function(t, n) {
        var s = zn(n, Gr(wu));
        return yn(t, I, r, n, s);
      }), FA = J(function(t, n) {
        var s = zn(n, Gr(FA));
        return yn(t, z, r, n, s);
      }), $y = bn(function(t, n) {
        return yn(t, F, r, r, r, n);
      });
      function Iy(t, n) {
        if (typeof t != "function")
          throw new $t(c);
        return n = n === r ? n : j(n), J(t, n);
      }
      function xy(t, n) {
        if (typeof t != "function")
          throw new $t(c);
        return n = n == null ? 0 : Pe(j(n), 0), J(function(s) {
          var l = s[n], d = Xn(s, 0, n);
          return l && Ln(d, l), At(t, this, d);
        });
      }
      function Sy(t, n, s) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new $t(c);
        return Ve(s) && (l = "leading" in s ? !!s.leading : l, d = "trailing" in s ? !!s.trailing : d), WA(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function Ty(t) {
        return OA(t, 1);
      }
      function Py(t, n) {
        return wu(eu(n), t);
      }
      function ky() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return G(t) ? t : [t];
      }
      function Ny(t) {
        return xt(t, $);
      }
      function Dy(t, n) {
        return n = typeof n == "function" ? n : r, xt(t, $, n);
      }
      function Oy(t) {
        return xt(t, _ | $);
      }
      function Ly(t, n) {
        return n = typeof n == "function" ? n : r, xt(t, _ | $, n);
      }
      function zy(t, n) {
        return n == null || xf(t, n, De(n));
      }
      function Xt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var qy = Oi(Wl), Ry = Oi(function(t, n) {
        return t >= n;
      }), hr = Df(function() {
        return arguments;
      }()) ? Df : function(t) {
        return be(t) && ue.call(t, "callee") && !yf.call(t, "callee");
      }, G = C.isArray, Wy = nf ? ht(nf) : j0;
      function st(t) {
        return t != null && Ui(t.length) && !En(t);
      }
      function Me(t) {
        return be(t) && st(t);
      }
      function Fy(t) {
        return t === !0 || t === !1 || be(t) && Qe(t) == Wo;
      }
      var Zn = r0 || Bu, Xy = rf ? ht(rf) : K0;
      function Zy(t) {
        return be(t) && t.nodeType === 1 && !us(t);
      }
      function Uy(t) {
        if (t == null)
          return !0;
        if (st(t) && (G(t) || typeof t == "string" || typeof t.splice == "function" || Zn(t) || jr(t) || hr(t)))
          return !t.length;
        var n = Ye(t);
        if (n == qt || n == Rt)
          return !t.size;
        if (as(t))
          return !Zl(t).length;
        for (var s in t)
          if (ue.call(t, s))
            return !1;
        return !0;
      }
      function Yy(t, n) {
        return os(t, n);
      }
      function Hy(t, n, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(t, n) : r;
        return l === r ? os(t, n, r, s) : !!l;
      }
      function vu(t) {
        if (!be(t))
          return !1;
        var n = Qe(t);
        return n == oi || n == v1 || typeof t.message == "string" && typeof t.name == "string" && !us(t);
      }
      function Gy(t) {
        return typeof t == "number" && Cf(t);
      }
      function En(t) {
        if (!Ve(t))
          return !1;
        var n = Qe(t);
        return n == si || n == xd || n == w1 || n == g1;
      }
      function XA(t) {
        return typeof t == "number" && t == j(t);
      }
      function Ui(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ke;
      }
      function Ve(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function be(t) {
        return t != null && typeof t == "object";
      }
      var ZA = of ? ht(of) : J0;
      function jy(t, n) {
        return t === n || Xl(t, n, au(n));
      }
      function Ky(t, n, s) {
        return s = typeof s == "function" ? s : r, Xl(t, n, au(n), s);
      }
      function Qy(t) {
        return UA(t) && t != +t;
      }
      function Jy(t) {
        if (D_(t))
          throw new H(u);
        return Of(t);
      }
      function eb(t) {
        return t === null;
      }
      function tb(t) {
        return t == null;
      }
      function UA(t) {
        return typeof t == "number" || be(t) && Qe(t) == Xo;
      }
      function us(t) {
        if (!be(t) || Qe(t) != mn)
          return !1;
        var n = gi(t);
        if (n === null)
          return !0;
        var s = ue.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && pi.call(s) == Kg;
      }
      var mu = sf ? ht(sf) : e_;
      function nb(t) {
        return XA(t) && t >= -Ke && t <= Ke;
      }
      var YA = af ? ht(af) : t_;
      function Yi(t) {
        return typeof t == "string" || !G(t) && be(t) && Qe(t) == Uo;
      }
      function wt(t) {
        return typeof t == "symbol" || be(t) && Qe(t) == ii;
      }
      var jr = lf ? ht(lf) : n_;
      function rb(t) {
        return t === r;
      }
      function ob(t) {
        return be(t) && Ye(t) == Yo;
      }
      function sb(t) {
        return be(t) && Qe(t) == V1;
      }
      var ib = Oi(Ul), ab = Oi(function(t, n) {
        return t <= n;
      });
      function HA(t) {
        if (!t)
          return [];
        if (st(t))
          return Yi(t) ? Wt(t) : ot(t);
        if (jo && t[jo])
          return zg(t[jo]());
        var n = Ye(t), s = n == qt ? Pl : n == Rt ? fi : Kr;
        return s(t);
      }
      function Mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Pt(t), t === ze || t === -ze) {
          var n = t < 0 ? -1 : 1;
          return n * Ro;
        }
        return t === t ? t : 0;
      }
      function j(t) {
        var n = Mn(t), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function GA(t) {
        return t ? cr(j(t), 0, sn) : 0;
      }
      function Pt(t) {
        if (typeof t == "number")
          return t;
        if (wt(t))
          return ni;
        if (Ve(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ve(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = hf(t);
        var s = W1.test(t);
        return s || X1.test(t) ? yg(t.slice(2), s ? 2 : 8) : R1.test(t) ? ni : +t;
      }
      function jA(t) {
        return ln(t, it(t));
      }
      function lb(t) {
        return t ? cr(j(t), -Ke, Ke) : t === 0 ? t : 0;
      }
      function ae(t) {
        return t == null ? "" : pt(t);
      }
      var ub = Yr(function(t, n) {
        if (as(n) || st(n)) {
          ln(n, De(n), t);
          return;
        }
        for (var s in n)
          ue.call(n, s) && ts(t, s, n[s]);
      }), KA = Yr(function(t, n) {
        ln(n, it(n), t);
      }), Hi = Yr(function(t, n, s, l) {
        ln(n, it(n), t, l);
      }), cb = Yr(function(t, n, s, l) {
        ln(n, De(n), t, l);
      }), db = bn(zl);
      function fb(t, n) {
        var s = Ur(t);
        return n == null ? s : If(s, n);
      }
      var Ab = J(function(t, n) {
        t = he(t);
        var s = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Je(n[0], n[1], d) && (l = 1); ++s < l; )
          for (var h = n[s], w = it(h), g = -1, b = w.length; ++g < b; ) {
            var B = w[g], x = t[B];
            (x === r || Xt(x, Fr[B]) && !ue.call(t, B)) && (t[B] = h[B]);
          }
        return t;
      }), hb = J(function(t) {
        return t.push(r, hA), At(QA, r, t);
      });
      function pb(t, n) {
        return cf(t, X(n, 3), an);
      }
      function wb(t, n) {
        return cf(t, X(n, 3), Rl);
      }
      function vb(t, n) {
        return t == null ? t : ql(t, X(n, 3), it);
      }
      function mb(t, n) {
        return t == null ? t : kf(t, X(n, 3), it);
      }
      function gb(t, n) {
        return t && an(t, X(n, 3));
      }
      function _b(t, n) {
        return t && Rl(t, X(n, 3));
      }
      function Vb(t) {
        return t == null ? [] : Ii(t, De(t));
      }
      function yb(t) {
        return t == null ? [] : Ii(t, it(t));
      }
      function gu(t, n, s) {
        var l = t == null ? r : dr(t, n);
        return l === r ? s : l;
      }
      function bb(t, n) {
        return t != null && vA(t, n, U0);
      }
      function _u(t, n) {
        return t != null && vA(t, n, Y0);
      }
      var Cb = uA(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = wi.call(n)), t[n] = s;
      }, yu(at)), Eb = uA(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = wi.call(n)), ue.call(t, n) ? t[n].push(s) : t[n] = [s];
      }, X), Mb = J(rs);
      function De(t) {
        return st(t) ? Bf(t) : Zl(t);
      }
      function it(t) {
        return st(t) ? Bf(t, !0) : r_(t);
      }
      function Bb(t, n) {
        var s = {};
        return n = X(n, 3), an(t, function(l, d, h) {
          Vn(s, n(l, d, h), l);
        }), s;
      }
      function $b(t, n) {
        var s = {};
        return n = X(n, 3), an(t, function(l, d, h) {
          Vn(s, d, n(l, d, h));
        }), s;
      }
      var Ib = Yr(function(t, n, s) {
        xi(t, n, s);
      }), QA = Yr(function(t, n, s, l) {
        xi(t, n, s, l);
      }), xb = bn(function(t, n) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        n = _e(n, function(h) {
          return h = Fn(h, t), l || (l = h.length > 1), h;
        }), ln(t, su(t), s), l && (s = xt(s, _ | V | $, C_));
        for (var d = n.length; d--; )
          Kl(s, n[d]);
        return s;
      });
      function Sb(t, n) {
        return JA(t, Zi(X(n)));
      }
      var Tb = bn(function(t, n) {
        return t == null ? {} : s_(t, n);
      });
      function JA(t, n) {
        if (t == null)
          return {};
        var s = _e(su(t), function(l) {
          return [l];
        });
        return n = X(n), Xf(t, s, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Pb(t, n, s) {
        n = Fn(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[un(n[l])];
          h === r && (l = d, h = s), t = En(h) ? h.call(t) : h;
        }
        return t;
      }
      function kb(t, n, s) {
        return t == null ? t : ss(t, n, s);
      }
      function Nb(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : ss(t, n, s, l);
      }
      var eh = fA(De), th = fA(it);
      function Db(t, n, s) {
        var l = G(t), d = l || Zn(t) || jr(t);
        if (n = X(n, 4), s == null) {
          var h = t && t.constructor;
          d ? s = l ? new h() : [] : Ve(t) ? s = En(h) ? Ur(gi(t)) : {} : s = {};
        }
        return (d ? Bt : an)(t, function(w, g, b) {
          return n(s, w, g, b);
        }), s;
      }
      function Ob(t, n) {
        return t == null ? !0 : Kl(t, n);
      }
      function Lb(t, n, s) {
        return t == null ? t : Gf(t, n, eu(s));
      }
      function zb(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Gf(t, n, eu(s), l);
      }
      function Kr(t) {
        return t == null ? [] : Tl(t, De(t));
      }
      function qb(t) {
        return t == null ? [] : Tl(t, it(t));
      }
      function Rb(t, n, s) {
        return s === r && (s = n, n = r), s !== r && (s = Pt(s), s = s === s ? s : 0), n !== r && (n = Pt(n), n = n === n ? n : 0), cr(Pt(t), n, s);
      }
      function Wb(t, n, s) {
        return n = Mn(n), s === r ? (s = n, n = 0) : s = Mn(s), t = Pt(t), H0(t, n, s);
      }
      function Fb(t, n, s) {
        if (s && typeof s != "boolean" && Je(t, n, s) && (n = s = r), s === r && (typeof n == "boolean" ? (s = n, n = r) : typeof t == "boolean" && (s = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Mn(t), n === r ? (n = t, t = 0) : n = Mn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (s || t % 1 || n % 1) {
          var d = Ef();
          return Ue(t + d * (n - t + Vg("1e-" + ((d + "").length - 1))), n);
        }
        return Hl(t, n);
      }
      var Xb = Hr(function(t, n, s) {
        return n = n.toLowerCase(), t + (s ? nh(n) : n);
      });
      function nh(t) {
        return Vu(ae(t).toLowerCase());
      }
      function rh(t) {
        return t = ae(t), t && t.replace(U1, kg).replace(dg, "");
      }
      function Zb(t, n, s) {
        t = ae(t), n = pt(n);
        var l = t.length;
        s = s === r ? l : cr(j(s), 0, l);
        var d = s;
        return s -= n.length, s >= 0 && t.slice(s, d) == n;
      }
      function Ub(t) {
        return t = ae(t), t && M1.test(t) ? t.replace(Pd, Ng) : t;
      }
      function Yb(t) {
        return t = ae(t), t && T1.test(t) ? t.replace(wl, "\\$&") : t;
      }
      var Hb = Hr(function(t, n, s) {
        return t + (s ? "-" : "") + n.toLowerCase();
      }), Gb = Hr(function(t, n, s) {
        return t + (s ? " " : "") + n.toLowerCase();
      }), jb = iA("toLowerCase");
      function Kb(t, n, s) {
        t = ae(t), n = j(n);
        var l = n ? Rr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Di(bi(d), s) + t + Di(yi(d), s);
      }
      function Qb(t, n, s) {
        t = ae(t), n = j(n);
        var l = n ? Rr(t) : 0;
        return n && l < n ? t + Di(n - l, s) : t;
      }
      function Jb(t, n, s) {
        t = ae(t), n = j(n);
        var l = n ? Rr(t) : 0;
        return n && l < n ? Di(n - l, s) + t : t;
      }
      function eC(t, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), a0(ae(t).replace(vl, ""), n || 0);
      }
      function tC(t, n, s) {
        return (s ? Je(t, n, s) : n === r) ? n = 1 : n = j(n), Gl(ae(t), n);
      }
      function nC() {
        var t = arguments, n = ae(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var rC = Hr(function(t, n, s) {
        return t + (s ? "_" : "") + n.toLowerCase();
      });
      function oC(t, n, s) {
        return s && typeof s != "number" && Je(t, n, s) && (n = s = r), s = s === r ? sn : s >>> 0, s ? (t = ae(t), t && (typeof n == "string" || n != null && !mu(n)) && (n = pt(n), !n && qr(t)) ? Xn(Wt(t), 0, s) : t.split(n, s)) : [];
      }
      var sC = Hr(function(t, n, s) {
        return t + (s ? " " : "") + Vu(n);
      });
      function iC(t, n, s) {
        return t = ae(t), s = s == null ? 0 : cr(j(s), 0, t.length), n = pt(n), t.slice(s, s + n.length) == n;
      }
      function aC(t, n, s) {
        var l = A.templateSettings;
        s && Je(t, n, s) && (n = r), t = ae(t), n = Hi({}, n, l, AA);
        var d = Hi({}, n.imports, l.imports, AA), h = De(d), w = Tl(d, h), g, b, B = 0, x = n.interpolate || ai, k = "__p += '", L = kl(
          (n.escape || ai).source + "|" + x.source + "|" + (x === kd ? q1 : ai).source + "|" + (n.evaluate || ai).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (ue.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++wg + "]") + `
`;
        t.replace(L, function(U, ee, ne, vt, et, mt) {
          return ne || (ne = vt), k += t.slice(B, mt).replace(Y1, Dg), ee && (g = !0, k += `' +
__e(` + ee + `) +
'`), et && (b = !0, k += `';
` + et + `;
__p += '`), ne && (k += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), B = mt + U.length, U;
        }), k += `';
`;
        var Z = ue.call(n, "variable") && n.variable;
        if (!Z)
          k = `with (obj) {
` + k + `
}
`;
        else if (L1.test(Z))
          throw new H(f);
        k = (b ? k.replace(y1, "") : k).replace(b1, "$1").replace(C1, "$1;"), k = "function(" + (Z || "obj") + `) {
` + (Z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + k + `return __p
}`;
        var K = sh(function() {
          return oe(h, W + "return " + k).apply(r, w);
        });
        if (K.source = k, vu(K))
          throw K;
        return K;
      }
      function lC(t) {
        return ae(t).toLowerCase();
      }
      function uC(t) {
        return ae(t).toUpperCase();
      }
      function cC(t, n, s) {
        if (t = ae(t), t && (s || n === r))
          return hf(t);
        if (!t || !(n = pt(n)))
          return t;
        var l = Wt(t), d = Wt(n), h = pf(l, d), w = wf(l, d) + 1;
        return Xn(l, h, w).join("");
      }
      function dC(t, n, s) {
        if (t = ae(t), t && (s || n === r))
          return t.slice(0, mf(t) + 1);
        if (!t || !(n = pt(n)))
          return t;
        var l = Wt(t), d = wf(l, Wt(n)) + 1;
        return Xn(l, 0, d).join("");
      }
      function fC(t, n, s) {
        if (t = ae(t), t && (s || n === r))
          return t.replace(vl, "");
        if (!t || !(n = pt(n)))
          return t;
        var l = Wt(t), d = pf(l, Wt(n));
        return Xn(l, d).join("");
      }
      function AC(t, n) {
        var s = fe, l = ve;
        if (Ve(n)) {
          var d = "separator" in n ? n.separator : d;
          s = "length" in n ? j(n.length) : s, l = "omission" in n ? pt(n.omission) : l;
        }
        t = ae(t);
        var h = t.length;
        if (qr(t)) {
          var w = Wt(t);
          h = w.length;
        }
        if (s >= h)
          return t;
        var g = s - Rr(l);
        if (g < 1)
          return l;
        var b = w ? Xn(w, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (w && (g += b.length - g), mu(d)) {
          if (t.slice(g).search(d)) {
            var B, x = b;
            for (d.global || (d = kl(d.source, ae(Nd.exec(d)) + "g")), d.lastIndex = 0; B = d.exec(x); )
              var k = B.index;
            b = b.slice(0, k === r ? g : k);
          }
        } else if (t.indexOf(pt(d), g) != g) {
          var L = b.lastIndexOf(d);
          L > -1 && (b = b.slice(0, L));
        }
        return b + l;
      }
      function hC(t) {
        return t = ae(t), t && E1.test(t) ? t.replace(Td, Fg) : t;
      }
      var pC = Hr(function(t, n, s) {
        return t + (s ? " " : "") + n.toUpperCase();
      }), Vu = iA("toUpperCase");
      function oh(t, n, s) {
        return t = ae(t), n = s ? r : n, n === r ? Lg(t) ? Ug(t) : Ig(t) : t.match(n) || [];
      }
      var sh = J(function(t, n) {
        try {
          return At(t, r, n);
        } catch (s) {
          return vu(s) ? s : new H(s);
        }
      }), wC = bn(function(t, n) {
        return Bt(n, function(s) {
          s = un(s), Vn(t, s, pu(t[s], t));
        }), t;
      });
      function vC(t) {
        var n = t == null ? 0 : t.length, s = X();
        return t = n ? _e(t, function(l) {
          if (typeof l[1] != "function")
            throw new $t(c);
          return [s(l[0]), l[1]];
        }) : [], J(function(l) {
          for (var d = -1; ++d < n; ) {
            var h = t[d];
            if (At(h[0], this, l))
              return At(h[1], this, l);
          }
        });
      }
      function mC(t) {
        return F0(xt(t, _));
      }
      function yu(t) {
        return function() {
          return t;
        };
      }
      function gC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var _C = lA(), VC = lA(!0);
      function at(t) {
        return t;
      }
      function bu(t) {
        return Lf(typeof t == "function" ? t : xt(t, _));
      }
      function yC(t) {
        return qf(xt(t, _));
      }
      function bC(t, n) {
        return Rf(t, xt(n, _));
      }
      var CC = J(function(t, n) {
        return function(s) {
          return rs(s, t, n);
        };
      }), EC = J(function(t, n) {
        return function(s) {
          return rs(t, s, n);
        };
      });
      function Cu(t, n, s) {
        var l = De(n), d = Ii(n, l);
        s == null && !(Ve(n) && (d.length || !l.length)) && (s = n, n = t, t = this, d = Ii(n, De(n)));
        var h = !(Ve(s) && "chain" in s) || !!s.chain, w = En(t);
        return Bt(d, function(g) {
          var b = n[g];
          t[g] = b, w && (t.prototype[g] = function() {
            var B = this.__chain__;
            if (h || B) {
              var x = t(this.__wrapped__), k = x.__actions__ = ot(this.__actions__);
              return k.push({ func: b, args: arguments, thisArg: t }), x.__chain__ = B, x;
            }
            return b.apply(t, Ln([this.value()], arguments));
          });
        }), t;
      }
      function MC() {
        return qe._ === this && (qe._ = Qg), this;
      }
      function Eu() {
      }
      function BC(t) {
        return t = j(t), J(function(n) {
          return Wf(n, t);
        });
      }
      var $C = nu(_e), IC = nu(uf), xC = nu(Bl);
      function ih(t) {
        return uu(t) ? $l(un(t)) : i_(t);
      }
      function SC(t) {
        return function(n) {
          return t == null ? r : dr(t, n);
        };
      }
      var TC = cA(), PC = cA(!0);
      function Mu() {
        return [];
      }
      function Bu() {
        return !1;
      }
      function kC() {
        return {};
      }
      function NC() {
        return "";
      }
      function DC() {
        return !0;
      }
      function OC(t, n) {
        if (t = j(t), t < 1 || t > Ke)
          return [];
        var s = sn, l = Ue(t, sn);
        n = X(n), t -= sn;
        for (var d = Sl(l, n); ++s < t; )
          n(s);
        return d;
      }
      function LC(t) {
        return G(t) ? _e(t, un) : wt(t) ? [t] : ot(MA(ae(t)));
      }
      function zC(t) {
        var n = ++jg;
        return ae(t) + n;
      }
      var qC = Ni(function(t, n) {
        return t + n;
      }, 0), RC = ru("ceil"), WC = Ni(function(t, n) {
        return t / n;
      }, 1), FC = ru("floor");
      function XC(t) {
        return t && t.length ? $i(t, at, Wl) : r;
      }
      function ZC(t, n) {
        return t && t.length ? $i(t, X(n, 2), Wl) : r;
      }
      function UC(t) {
        return ff(t, at);
      }
      function YC(t, n) {
        return ff(t, X(n, 2));
      }
      function HC(t) {
        return t && t.length ? $i(t, at, Ul) : r;
      }
      function GC(t, n) {
        return t && t.length ? $i(t, X(n, 2), Ul) : r;
      }
      var jC = Ni(function(t, n) {
        return t * n;
      }, 1), KC = ru("round"), QC = Ni(function(t, n) {
        return t - n;
      }, 0);
      function JC(t) {
        return t && t.length ? xl(t, at) : 0;
      }
      function e2(t, n) {
        return t && t.length ? xl(t, X(n, 2)) : 0;
      }
      return A.after = yy, A.ary = OA, A.assign = ub, A.assignIn = KA, A.assignInWith = Hi, A.assignWith = cb, A.at = db, A.before = LA, A.bind = pu, A.bindAll = wC, A.bindKey = zA, A.castArray = ky, A.chain = kA, A.chunk = F_, A.compact = X_, A.concat = Z_, A.cond = vC, A.conforms = mC, A.constant = yu, A.countBy = JV, A.create = fb, A.curry = qA, A.curryRight = RA, A.debounce = WA, A.defaults = Ab, A.defaultsDeep = hb, A.defer = by, A.delay = Cy, A.difference = U_, A.differenceBy = Y_, A.differenceWith = H_, A.drop = G_, A.dropRight = j_, A.dropRightWhile = K_, A.dropWhile = Q_, A.fill = J_, A.filter = ty, A.flatMap = oy, A.flatMapDeep = sy, A.flatMapDepth = iy, A.flatten = xA, A.flattenDeep = eV, A.flattenDepth = tV, A.flip = Ey, A.flow = _C, A.flowRight = VC, A.fromPairs = nV, A.functions = Vb, A.functionsIn = yb, A.groupBy = ay, A.initial = oV, A.intersection = sV, A.intersectionBy = iV, A.intersectionWith = aV, A.invert = Cb, A.invertBy = Eb, A.invokeMap = uy, A.iteratee = bu, A.keyBy = cy, A.keys = De, A.keysIn = it, A.map = Wi, A.mapKeys = Bb, A.mapValues = $b, A.matches = yC, A.matchesProperty = bC, A.memoize = Xi, A.merge = Ib, A.mergeWith = QA, A.method = CC, A.methodOf = EC, A.mixin = Cu, A.negate = Zi, A.nthArg = BC, A.omit = xb, A.omitBy = Sb, A.once = My, A.orderBy = dy, A.over = $C, A.overArgs = By, A.overEvery = IC, A.overSome = xC, A.partial = wu, A.partialRight = FA, A.partition = fy, A.pick = Tb, A.pickBy = JA, A.property = ih, A.propertyOf = SC, A.pull = dV, A.pullAll = TA, A.pullAllBy = fV, A.pullAllWith = AV, A.pullAt = hV, A.range = TC, A.rangeRight = PC, A.rearg = $y, A.reject = py, A.remove = pV, A.rest = Iy, A.reverse = Au, A.sampleSize = vy, A.set = kb, A.setWith = Nb, A.shuffle = my, A.slice = wV, A.sortBy = Vy, A.sortedUniq = bV, A.sortedUniqBy = CV, A.split = oC, A.spread = xy, A.tail = EV, A.take = MV, A.takeRight = BV, A.takeRightWhile = $V, A.takeWhile = IV, A.tap = XV, A.throttle = Sy, A.thru = Ri, A.toArray = HA, A.toPairs = eh, A.toPairsIn = th, A.toPath = LC, A.toPlainObject = jA, A.transform = Db, A.unary = Ty, A.union = xV, A.unionBy = SV, A.unionWith = TV, A.uniq = PV, A.uniqBy = kV, A.uniqWith = NV, A.unset = Ob, A.unzip = hu, A.unzipWith = PA, A.update = Lb, A.updateWith = zb, A.values = Kr, A.valuesIn = qb, A.without = DV, A.words = oh, A.wrap = Py, A.xor = OV, A.xorBy = LV, A.xorWith = zV, A.zip = qV, A.zipObject = RV, A.zipObjectDeep = WV, A.zipWith = FV, A.entries = eh, A.entriesIn = th, A.extend = KA, A.extendWith = Hi, Cu(A, A), A.add = qC, A.attempt = sh, A.camelCase = Xb, A.capitalize = nh, A.ceil = RC, A.clamp = Rb, A.clone = Ny, A.cloneDeep = Oy, A.cloneDeepWith = Ly, A.cloneWith = Dy, A.conformsTo = zy, A.deburr = rh, A.defaultTo = gC, A.divide = WC, A.endsWith = Zb, A.eq = Xt, A.escape = Ub, A.escapeRegExp = Yb, A.every = ey, A.find = ny, A.findIndex = $A, A.findKey = pb, A.findLast = ry, A.findLastIndex = IA, A.findLastKey = wb, A.floor = FC, A.forEach = NA, A.forEachRight = DA, A.forIn = vb, A.forInRight = mb, A.forOwn = gb, A.forOwnRight = _b, A.get = gu, A.gt = qy, A.gte = Ry, A.has = bb, A.hasIn = _u, A.head = SA, A.identity = at, A.includes = ly, A.indexOf = rV, A.inRange = Wb, A.invoke = Mb, A.isArguments = hr, A.isArray = G, A.isArrayBuffer = Wy, A.isArrayLike = st, A.isArrayLikeObject = Me, A.isBoolean = Fy, A.isBuffer = Zn, A.isDate = Xy, A.isElement = Zy, A.isEmpty = Uy, A.isEqual = Yy, A.isEqualWith = Hy, A.isError = vu, A.isFinite = Gy, A.isFunction = En, A.isInteger = XA, A.isLength = Ui, A.isMap = ZA, A.isMatch = jy, A.isMatchWith = Ky, A.isNaN = Qy, A.isNative = Jy, A.isNil = tb, A.isNull = eb, A.isNumber = UA, A.isObject = Ve, A.isObjectLike = be, A.isPlainObject = us, A.isRegExp = mu, A.isSafeInteger = nb, A.isSet = YA, A.isString = Yi, A.isSymbol = wt, A.isTypedArray = jr, A.isUndefined = rb, A.isWeakMap = ob, A.isWeakSet = sb, A.join = lV, A.kebabCase = Hb, A.last = Tt, A.lastIndexOf = uV, A.lowerCase = Gb, A.lowerFirst = jb, A.lt = ib, A.lte = ab, A.max = XC, A.maxBy = ZC, A.mean = UC, A.meanBy = YC, A.min = HC, A.minBy = GC, A.stubArray = Mu, A.stubFalse = Bu, A.stubObject = kC, A.stubString = NC, A.stubTrue = DC, A.multiply = jC, A.nth = cV, A.noConflict = MC, A.noop = Eu, A.now = Fi, A.pad = Kb, A.padEnd = Qb, A.padStart = Jb, A.parseInt = eC, A.random = Fb, A.reduce = Ay, A.reduceRight = hy, A.repeat = tC, A.replace = nC, A.result = Pb, A.round = KC, A.runInContext = y, A.sample = wy, A.size = gy, A.snakeCase = rC, A.some = _y, A.sortedIndex = vV, A.sortedIndexBy = mV, A.sortedIndexOf = gV, A.sortedLastIndex = _V, A.sortedLastIndexBy = VV, A.sortedLastIndexOf = yV, A.startCase = sC, A.startsWith = iC, A.subtract = QC, A.sum = JC, A.sumBy = e2, A.template = aC, A.times = OC, A.toFinite = Mn, A.toInteger = j, A.toLength = GA, A.toLower = lC, A.toNumber = Pt, A.toSafeInteger = lb, A.toString = ae, A.toUpper = uC, A.trim = cC, A.trimEnd = dC, A.trimStart = fC, A.truncate = AC, A.unescape = hC, A.uniqueId = zC, A.upperCase = pC, A.upperFirst = Vu, A.each = NA, A.eachRight = DA, A.first = SA, Cu(A, function() {
        var t = {};
        return an(A, function(n, s) {
          ue.call(A.prototype, s) || (t[s] = n);
        }), t;
      }(), { chain: !1 }), A.VERSION = i, Bt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        A[t].placeholder = A;
      }), Bt(["drop", "take"], function(t, n) {
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
      }), Bt(["filter", "map", "takeWhile"], function(t, n) {
        var s = n + 1, l = s == Ie || s == Le;
        te.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: X(d, 3),
            type: s
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), Bt(["head", "last"], function(t, n) {
        var s = "take" + (n ? "Right" : "");
        te.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), Bt(["initial", "tail"], function(t, n) {
        var s = "drop" + (n ? "" : "Right");
        te.prototype[t] = function() {
          return this.__filtered__ ? new te(this) : this[s](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(at);
      }, te.prototype.find = function(t) {
        return this.filter(t).head();
      }, te.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, te.prototype.invokeMap = J(function(t, n) {
        return typeof t == "function" ? new te(this) : this.map(function(s) {
          return rs(s, t, n);
        });
      }), te.prototype.reject = function(t) {
        return this.filter(Zi(X(t)));
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
          var w = this.__wrapped__, g = l ? [1] : arguments, b = w instanceof te, B = g[0], x = b || G(w), k = function(ee) {
            var ne = d.apply(A, Ln([ee], g));
            return l && L ? ne[0] : ne;
          };
          x && s && typeof B == "function" && B.length != 1 && (b = x = !1);
          var L = this.__chain__, W = !!this.__actions__.length, Z = h && !L, K = b && !W;
          if (!h && x) {
            w = K ? w : new te(this);
            var U = t.apply(w, g);
            return U.__actions__.push({ func: Ri, args: [k], thisArg: r }), new It(U, L);
          }
          return Z && K ? t.apply(this, g) : (U = this.thru(k), Z ? l ? U.value()[0] : U.value() : U);
        });
      }), Bt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Ai[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
          ue.call(Zr, l) || (Zr[l] = []), Zr[l].push({ name: n, func: s });
        }
      }), Zr[ki(r, T).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = h0, te.prototype.reverse = p0, te.prototype.value = w0, A.prototype.at = ZV, A.prototype.chain = UV, A.prototype.commit = YV, A.prototype.next = HV, A.prototype.plant = jV, A.prototype.reverse = KV, A.prototype.toJSON = A.prototype.valueOf = A.prototype.value = QV, A.prototype.first = A.prototype.head, jo && (A.prototype[jo] = GV), A;
    }, Wr = Yg();
    ir ? ((ir.exports = Wr)._ = Wr, bl._ = Wr) : qe._ = Wr;
  }).call(cs);
})(de, de.exports);
const _3 = "/alarms?_s=", Fa = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, V3 = async (e, o) => {
  try {
    return (await nn.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Fa
    )).status === 204;
  } catch {
    return !1;
  }
}, y3 = async (e, o) => {
  try {
    return (await nn.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Fa
    )).status === 204;
  } catch {
    return !1;
  }
}, b3 = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Dn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Fa
    )).status == 204;
  } catch {
    return !1;
  }
}, C3 = async () => {
  try {
    const e = `${_3}isSituation==true&limit=0`, o = await Dn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, E3 = async (e) => {
  try {
    const o = e.join(",id=="), r = await Dn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, xv = async (e) => {
  try {
    const o = await Dn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, M3 = async (e) => {
  try {
    const o = await Dn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, B3 = async () => {
  try {
    const e = await Dn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => de.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, $3 = async (e, o, r) => {
  try {
    return (await Dn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Fa
    )).status == 204;
  } catch {
    return !1;
  }
}, I3 = async (e, o) => {
  try {
    return (await Dn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, x3 = async () => {
  try {
    const e = await Dn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, S3 = window.Pinia.defineStore, rn = S3("situationsStore", {
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
      const e = await B3();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await C3();
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
        const i = await xv(e);
        if (i) {
          const a = (o = i.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await E3(a);
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
          const a = await M3(i);
          a && (r[i] = de.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await x3();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), T3 = window.Vue.openBlock, P3 = window.Vue.createElementBlock, k3 = window.Vue.createElementVNode;
var N3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const D3 = {}, O3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L3 = /* @__PURE__ */ k3("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), z3 = [
  L3
];
function q3(e, o) {
  return T3(), P3("svg", O3, z3);
}
var Io = /* @__PURE__ */ N3(D3, [["render", q3]]);
var R3 = Object.defineProperty, Sh = Object.getOwnPropertySymbols, W3 = Object.prototype.hasOwnProperty, F3 = Object.prototype.propertyIsEnumerable, Th = (e, o, r) => o in e ? R3(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ph = (e, o) => {
  for (var r in o || (o = {}))
    W3.call(o, r) && Th(e, r, o[r]);
  if (Sh)
    for (var r of Sh(o))
      F3.call(o, r) && Th(e, r, o[r]);
  return e;
};
const X3 = window.Vue.defineComponent, Z3 = window.Vue.toRaw, Fu = window.Vue.h;
var U3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Y3 = {
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
}, H3 = X3({
  props: Y3,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let i = Z3(this.icon);
    return this.$slots.default ? Fu("span", { class: "feather-icon-container" }, [
      Fu(this.$slots.default()[0], Ph({
        class: o
      }, r))
    ]) : Fu(i, Ph({
      class: o
    }, r));
  }
});
var Y = /* @__PURE__ */ U3(H3, [["__scopeId", "data-v-52cbf270"]]);
const G3 = window.Vue.openBlock, j3 = window.Vue.createElementBlock, K3 = window.Vue.createElementVNode;
var Q3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const J3 = {}, eE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tE = /* @__PURE__ */ K3("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), nE = [
  tE
];
function rE(e, o) {
  return G3(), j3("svg", eE, nE);
}
var Sv = /* @__PURE__ */ Q3(J3, [["render", rE]]);
const Ce = {
  URL_DOCUMENTATION: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/introduction.html",
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
function oE(e, o) {
  we(2, arguments);
  var r = Ne(e), i = hn(o);
  return isNaN(i) ? new Date(NaN) : (i && r.setDate(r.getDate() + i), r);
}
function sE(e, o) {
  we(2, arguments);
  var r = Ne(e).getTime(), i = hn(o);
  return new Date(r + i);
}
var iE = {};
function To() {
  return iE;
}
function kh(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = To(), _ = hn((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(_ >= 0 && _ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var V = Ne(e), $ = V.getDay(), M = ($ < _ ? 7 : 0) + $ - _;
  return V.setDate(V.getDate() - M), V.setHours(0, 0, 0, 0), V;
}
function kc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Nh(e) {
  we(1, arguments);
  var o = Ne(e);
  return o.setHours(0, 0, 0, 0), o;
}
function aE(e, o) {
  we(2, arguments);
  var r = Ne(e), i = Ne(o), a = r.getTime() - i.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Tv(e, o) {
  we(2, arguments);
  var r = Nh(e), i = Nh(o);
  return r.getTime() === i.getTime();
}
function lE(e) {
  return we(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function uE(e) {
  if (we(1, arguments), !lE(e) && typeof e != "number")
    return !1;
  var o = Ne(e);
  return !isNaN(Number(o));
}
function cE(e, o) {
  we(2, arguments);
  var r = hn(o);
  return sE(e, -r);
}
var dE = 864e5;
function fE(e) {
  we(1, arguments);
  var o = Ne(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var i = o.getTime(), a = r - i;
  return Math.floor(a / dE) + 1;
}
function $a(e) {
  we(1, arguments);
  var o = 1, r = Ne(e), i = r.getUTCDay(), a = (i < o ? 7 : 0) + i - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Pv(e) {
  we(1, arguments);
  var o = Ne(e), r = o.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = $a(i), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = $a(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function AE(e) {
  we(1, arguments);
  var o = Pv(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = $a(r);
  return i;
}
var hE = 6048e5;
function pE(e) {
  we(1, arguments);
  var o = Ne(e), r = $a(o).getTime() - AE(o).getTime();
  return Math.round(r / hE) + 1;
}
function Ia(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = To(), _ = hn((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(_ >= 0 && _ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var V = Ne(e), $ = V.getUTCDay(), M = ($ < _ ? 7 : 0) + $ - _;
  return V.setUTCDate(V.getUTCDate() - M), V.setUTCHours(0, 0, 0, 0), V;
}
function kv(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = Ne(e), _ = m.getUTCFullYear(), V = To(), $ = hn((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : V.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = V.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!($ >= 1 && $ <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var M = new Date(0);
  M.setUTCFullYear(_ + 1, 0, $), M.setUTCHours(0, 0, 0, 0);
  var P = Ia(M, o), D = new Date(0);
  D.setUTCFullYear(_, 0, $), D.setUTCHours(0, 0, 0, 0);
  var T = Ia(D, o);
  return m.getTime() >= P.getTime() ? _ + 1 : m.getTime() >= T.getTime() ? _ : _ - 1;
}
function wE(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = To(), _ = hn((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : m.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), V = kv(e, o), $ = new Date(0);
  $.setUTCFullYear(V, 0, _), $.setUTCHours(0, 0, 0, 0);
  var M = Ia($, o);
  return M;
}
var vE = 6048e5;
function mE(e, o) {
  we(1, arguments);
  var r = Ne(e), i = Ia(r, o).getTime() - wE(r, o).getTime();
  return Math.round(i / vE) + 1;
}
function ce(e, o) {
  for (var r = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < o; )
    i = "0" + i;
  return r + i;
}
var gE = {
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
const Un = gE;
var eo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _E = {
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
    var a = kv(e, i), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return ce(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ce(u, o.length);
  },
  R: function(e, o) {
    var r = Pv(e);
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
    var a = mE(e, i);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ce(a, o.length);
  },
  I: function(e, o, r) {
    var i = pE(e);
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
    var i = fE(e);
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
    switch (i === 12 ? a = eo.noon : i === 0 ? a = eo.midnight : a = i / 12 >= 1 ? "pm" : "am", o) {
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
    switch (i >= 17 ? a = eo.evening : i >= 12 ? a = eo.afternoon : i >= 4 ? a = eo.morning : a = eo.night, o) {
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
        return Oh(u);
      case "XXXX":
      case "XX":
        return Br(u);
      case "XXXXX":
      case "XXX":
      default:
        return Br(u, ":");
    }
  },
  x: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Oh(u);
      case "xxxx":
      case "xx":
        return Br(u);
      case "xxxxx":
      case "xxx":
      default:
        return Br(u, ":");
    }
  },
  O: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Dh(u, ":");
      case "OOOO":
      default:
        return "GMT" + Br(u, ":");
    }
  },
  z: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Dh(u, ":");
      case "zzzz":
      default:
        return "GMT" + Br(u, ":");
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
function Dh(e, o) {
  var r = e > 0 ? "-" : "+", i = Math.abs(e), a = Math.floor(i / 60), u = i % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + ce(u, 2);
}
function Oh(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ce(Math.abs(e) / 60, 2);
  }
  return Br(e, o);
}
function Br(e, o) {
  var r = o || "", i = e > 0 ? "-" : "+", a = Math.abs(e), u = ce(Math.floor(a / 60), 2), c = ce(a % 60, 2);
  return i + u + r + c;
}
const VE = _E;
var Lh = function(e, o) {
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
}, Nv = function(e, o) {
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
}, yE = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], i = r[1], a = r[2];
  if (!a)
    return Lh(e, o);
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
  return u.replace("{{date}}", Lh(i, o)).replace("{{time}}", Nv(a, o));
}, bE = {
  p: Nv,
  P: yE
};
const CE = bE;
var EE = ["D", "DD"], ME = ["YY", "YYYY"];
function BE(e) {
  return EE.indexOf(e) !== -1;
}
function $E(e) {
  return ME.indexOf(e) !== -1;
}
function zh(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var IE = {
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
}, xE = function(e, o, r) {
  var i, a = IE[e];
  return typeof a == "string" ? i = a : o === 1 ? i = a.one : i = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const SE = xE;
function Xu(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, i = e.formats[r] || e.formats[e.defaultWidth];
    return i;
  };
}
var TE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, PE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, kE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, NE = {
  date: Xu({
    formats: TE,
    defaultWidth: "full"
  }),
  time: Xu({
    formats: PE,
    defaultWidth: "full"
  }),
  dateTime: Xu({
    formats: kE,
    defaultWidth: "full"
  })
};
const DE = NE;
var OE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, LE = function(e, o, r, i) {
  return OE[e];
};
const zE = LE;
function ds(e) {
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
var qE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, RE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, WE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, FE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, XE = {
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
}, ZE = {
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
}, UE = function(e, o) {
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
}, YE = {
  ordinalNumber: UE,
  era: ds({
    values: qE,
    defaultWidth: "wide"
  }),
  quarter: ds({
    values: RE,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ds({
    values: WE,
    defaultWidth: "wide"
  }),
  day: ds({
    values: FE,
    defaultWidth: "wide"
  }),
  dayPeriod: ds({
    values: XE,
    defaultWidth: "wide",
    formattingValues: ZE,
    defaultFormattingWidth: "wide"
  })
};
const HE = YE;
function fs(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.width, a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(f) ? jE(f, function(_) {
      return _.test(c);
    }) : GE(f, function(_) {
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
function GE(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function jE(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function KE(e) {
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
var QE = /^(\d+)(th|st|nd|rd)?/i, JE = /\d+/i, eM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, tM = {
  any: [/^b/i, /^(a|c)/i]
}, nM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, oM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, sM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, iM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, aM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, lM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, uM = {
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
}, cM = {
  ordinalNumber: KE({
    matchPattern: QE,
    parsePattern: JE,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: fs({
    matchPatterns: eM,
    defaultMatchWidth: "wide",
    parsePatterns: tM,
    defaultParseWidth: "any"
  }),
  quarter: fs({
    matchPatterns: nM,
    defaultMatchWidth: "wide",
    parsePatterns: rM,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: fs({
    matchPatterns: oM,
    defaultMatchWidth: "wide",
    parsePatterns: sM,
    defaultParseWidth: "any"
  }),
  day: fs({
    matchPatterns: iM,
    defaultMatchWidth: "wide",
    parsePatterns: aM,
    defaultParseWidth: "any"
  }),
  dayPeriod: fs({
    matchPatterns: lM,
    defaultMatchWidth: "any",
    parsePatterns: uM,
    defaultParseWidth: "any"
  })
};
const dM = cM;
var fM = {
  code: "en-US",
  formatDistance: SE,
  formatLong: DE,
  formatRelative: zE,
  localize: HE,
  match: dM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Dv = fM;
var AM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, hM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, pM = /^'([^]*?)'?$/, wM = /''/g, vM = /[a-zA-Z]/;
function mM(e, o, r) {
  var i, a, u, c, f, p, v, m, _, V, $, M, P, D, T, N, S, q;
  we(2, arguments);
  var I = String(o), z = To(), O = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : z.locale) !== null && i !== void 0 ? i : Dv, F = hn((u = (c = (f = (p = r == null ? void 0 : r.firstWeekContainsDate) !== null && p !== void 0 ? p : r == null || (v = r.locale) === null || v === void 0 || (m = v.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && f !== void 0 ? f : z.firstWeekContainsDate) !== null && c !== void 0 ? c : (_ = z.locale) === null || _ === void 0 || (V = _.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ge = hn(($ = (M = (P = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (T = r.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && P !== void 0 ? P : z.weekStartsOn) !== null && M !== void 0 ? M : (S = z.locale) === null || S === void 0 || (q = S.options) === null || q === void 0 ? void 0 : q.weekStartsOn) !== null && $ !== void 0 ? $ : 0);
  if (!(ge >= 0 && ge <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var fe = Ne(e);
  if (!uE(fe))
    throw new RangeError("Invalid time value");
  var ve = kc(fe), ye = cE(fe, ve), Ee = {
    firstWeekContainsDate: F,
    weekStartsOn: ge,
    locale: O,
    _originalDate: fe
  }, Ie = I.match(hM).map(function(Ae) {
    var Le = Ae[0];
    if (Le === "p" || Le === "P") {
      var ze = CE[Le];
      return ze(Ae, O.formatLong);
    }
    return Ae;
  }).join("").match(AM).map(function(Ae) {
    if (Ae === "''")
      return "'";
    var Le = Ae[0];
    if (Le === "'")
      return gM(Ae);
    var ze = VE[Le];
    if (ze)
      return !(r != null && r.useAdditionalWeekYearTokens) && $E(Ae) && zh(Ae, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && BE(Ae) && zh(Ae, o, String(e)), ze(ye, Ae, O.localize, Ee);
    if (Le.match(vM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Le + "`");
    return Ae;
  }).join("");
  return Ie;
}
function gM(e) {
  var o = e.match(pM);
  return o ? o[1].replace(wM, "'") : e;
}
function Ov(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function _M(e) {
  return Ov({}, e);
}
var qh = 1e3 * 60, xa = 60 * 24, Rh = xa * 30, Wh = xa * 365;
function Xa(e, o, r) {
  var i, a, u;
  we(2, arguments);
  var c = To(), f = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && i !== void 0 ? i : Dv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var p = aE(e, o);
  if (isNaN(p))
    throw new RangeError("Invalid time value");
  var v = Ov(_M(r), {
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
  var M = _.getTime() - m.getTime(), P = M / qh, D = kc(_) - kc(m), T = (M - D) / qh, N = r == null ? void 0 : r.unit, S;
  if (N ? S = String(N) : P < 1 ? S = "second" : P < 60 ? S = "minute" : P < xa ? S = "hour" : T < Rh ? S = "day" : T < Wh ? S = "month" : S = "year", S === "second") {
    var q = $(M / 1e3);
    return f.formatDistance("xSeconds", q, v);
  } else if (S === "minute") {
    var I = $(P);
    return f.formatDistance("xMinutes", I, v);
  } else if (S === "hour") {
    var z = $(P / 60);
    return f.formatDistance("xHours", z, v);
  } else if (S === "day") {
    var O = $(T / xa);
    return f.formatDistance("xDays", O, v);
  } else if (S === "month") {
    var F = $(T / Rh);
    return F === 12 && N !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", F, v);
  } else if (S === "year") {
    var ge = $(T / Wh);
    return f.formatDistance("xYears", ge, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function VM(e, o, r) {
  we(2, arguments);
  var i = kh(e, r), a = kh(o, r);
  return i.getTime() === a.getTime();
}
function yM(e, o) {
  return we(1, arguments), VM(e, Date.now(), o);
}
function bM(e) {
  return we(1, arguments), Tv(e, Date.now());
}
function CM(e, o) {
  we(2, arguments);
  var r = hn(o);
  return oE(e, -r);
}
function EM(e) {
  return we(1, arguments), Tv(e, CM(Date.now(), 1));
}
const pn = (e) => {
  let o = "";
  if (e)
    try {
      o = mM(new Date(e), Ce.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Lv = (e, o) => {
  const r = e.length > o ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, MM = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (i) => bM(i.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (i) => EM(i.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (i) => yM(i.firstEventTime)
      );
      break;
  }
  return r;
}, BM = window.Vue.defineComponent, _t = window.Vue.unref, Fh = window.Vue.normalizeClass, dn = window.Vue.createElementVNode, to = window.Vue.toDisplayString, Xh = window.Vue.createVNode, pr = window.Vue.openBlock, wr = window.Vue.createElementBlock, Gi = window.Vue.createCommentVNode, Nc = window.Vue.createTextVNode, $M = window.Vue.renderList, IM = window.Vue.Fragment, xM = window.Vue.pushScopeId, SM = window.Vue.popScopeId, nd = (e) => (xM("data-v-fb22b492"), e = e(), SM(), e), TM = { class: "content" }, PM = { class: "title-row" }, kM = { class: "title" }, NM = {
  key: 0,
  class: "accepted"
}, DM = {
  key: 1,
  class: "rejected"
}, OM = /* @__PURE__ */ nd(() => /* @__PURE__ */ dn("span", { class: "info-title" }, " Duration: ", -1)), LM = { key: 0 }, zM = /* @__PURE__ */ nd(() => /* @__PURE__ */ dn("span", { class: "info-title" }, " First Event: ", -1)), qM = { class: "description" }, RM = /* @__PURE__ */ nd(() => /* @__PURE__ */ dn("hr", null, null, -1)), WM = {
  key: 1,
  class: "count-info"
}, FM = /* @__PURE__ */ Nc(" Alarms: "), XM = { class: "info-title" }, ZM = /* @__PURE__ */ BM({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, i = Ce.ACCEPTED, a = Ce.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, p) => {
      var v, m, _;
      return pr(), wr("div", {
        onClick: c,
        class: Fh(["card", {
          rejected: r.situationInfo.status == _t(a)
        }])
      }, [
        dn("div", {
          class: Fh(["severity-line", [`${(m = (v = r.situationInfo) == null ? void 0 : v.severity) == null ? void 0 : m.toLowerCase()}-bg dark`]])
        }, null, 2),
        dn("div", TM, [
          dn("div", PM, [
            dn("div", kM, "Situation " + to((_ = r.situationInfo) == null ? void 0 : _.id), 1),
            r.situationInfo.status == _t(i) ? (pr(), wr("div", NM, [
              Xh(_t(Y), {
                icon: _t(Io),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Gi("", !0),
            r.situationInfo.status == _t(a) ? (pr(), wr("div", DM, [
              Xh(_t(Y), {
                icon: _t(Sv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Gi("", !0)
          ]),
          dn("div", null, [
            OM,
            Nc(" " + to(_t(Xa)(
              _t(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Gi("", !0) : (pr(), wr("div", LM, [
            zM,
            Nc(to(_t(pn)(r.situationInfo.firstEventTime)), 1)
          ])),
          dn("div", qM, to(_t(Lv)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          RM,
          r.situationInfo.relatedAlarms ? (pr(), wr("div", WM, [
            FM,
            dn("span", XM, to(r.situationInfo.relatedAlarms.length), 1)
          ])) : Gi("", !0),
          (pr(!0), wr(IM, null, $M(_t(de.exports.keys)(
            _t(de.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (V) => (pr(), wr("div", {
            class: "info-title",
            key: V
          }, " - " + to(V), 1))), 128))
        ])
      ], 2);
    };
  }
});
const zv = /* @__PURE__ */ re(ZM, [["__scopeId", "data-v-fb22b492"]]), UM = window.Vue.openBlock, YM = window.Vue.createElementBlock, HM = window.Vue.createElementVNode;
var GM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jM = {}, KM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QM = /* @__PURE__ */ HM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), JM = [
  QM
];
function eB(e, o) {
  return UM(), YM("svg", KM, JM);
}
var tB = /* @__PURE__ */ GM(jM, [["render", eB]]);
const nB = window.Vue.openBlock, rB = window.Vue.createElementBlock, qv = window.Vue.createElementVNode;
var oB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const sB = {}, iB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aB = /* @__PURE__ */ qv("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), lB = /* @__PURE__ */ qv("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), uB = [
  aB,
  lB
];
function cB(e, o) {
  return nB(), rB("svg", iB, uB);
}
var dB = /* @__PURE__ */ oB(sB, [["render", cB]]);
const fB = window.Vue.openBlock, AB = window.Vue.createElementBlock, hB = window.Vue.createElementVNode;
var pB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const wB = {}, vB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mB = /* @__PURE__ */ hB("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), gB = [
  mB
];
function _B(e, o) {
  return fB(), AB("svg", vB, gB);
}
var VB = /* @__PURE__ */ pB(wB, [["render", _B]]);
const yB = window.Vue.openBlock, bB = window.Vue.createElementBlock, CB = window.Vue.createElementVNode;
var EB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const MB = {}, BB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $B = /* @__PURE__ */ CB("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), IB = [
  $B
];
function xB(e, o) {
  return yB(), bB("svg", BB, IB);
}
var Rv = /* @__PURE__ */ EB(MB, [["render", xB]]);
const SB = window.Vue.defineComponent, Yn = window.Vue.unref, ji = window.Vue.normalizeClass, Ki = window.Vue.createVNode, TB = window.Vue.openBlock, PB = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kB = { class: "paginator" }, NB = /* @__PURE__ */ SB({
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
    return (a, u) => (TB(), PB("div", kB, [
      Ki(Yn(Y), {
        icon: Yn(tB),
        "aria-hidden": "true",
        class: ji(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => i(0))
      }, null, 8, ["icon", "class"]),
      Ki(Yn(Y), {
        icon: Yn(VB),
        "aria-hidden": "true",
        class: ji(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => i(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Ki(Yn(Y), {
        icon: Yn(Rv),
        "aria-hidden": "true",
        class: ji(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => i(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Ki(Yn(Y), {
        icon: Yn(dB),
        "aria-hidden": "true",
        class: ji(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => i(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const DB = /* @__PURE__ */ re(NB, [["__scopeId", "data-v-40758818"]]);
const ie = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, OB = window.Vue.computed, Za = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((i) => {
    r[`${i}Label`] = OB(() => e.value[i] ? e.value[i] : o[i]);
  }), r;
};
const Sr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Tr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var LB = Object.defineProperty, zB = Object.defineProperties, qB = Object.getOwnPropertyDescriptors, Zh = Object.getOwnPropertySymbols, RB = Object.prototype.hasOwnProperty, WB = Object.prototype.propertyIsEnumerable, Uh = (e, o, r) => o in e ? LB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Yh = (e, o) => {
  for (var r in o || (o = {}))
    RB.call(o, r) && Uh(e, r, o[r]);
  if (Zh)
    for (var r of Zh(o))
      WB.call(o, r) && Uh(e, r, o[r]);
  return e;
}, FB = (e, o) => zB(e, qB(o));
const XB = window.Vue.defineComponent, ZB = window.Vue.h;
var UB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const YB = {
  center: {
    type: Boolean,
    default: !1
  }
}, HB = XB({
  props: YB,
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
        this.styles = FB(Yh({}, a), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Tr(this.failsafe), this.failsafe = Sr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return ZB("div", {
        style: Yh({}, this.styles),
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
var nr = /* @__PURE__ */ UB(HB, [["__scopeId", "data-v-18e2a5db"]]);
const GB = window.Vue.openBlock, jB = window.Vue.createElementBlock, KB = window.Vue.createElementVNode;
var QB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const JB = {}, e$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, t$ = /* @__PURE__ */ KB("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), n$ = [
  t$
];
function r$(e, o) {
  return GB(), jB("svg", e$, n$);
}
var Po = /* @__PURE__ */ QB(JB, [["render", r$]]);
const Hh = window.Vue.computed, o$ = (e, o, r) => {
  const i = Hh(() => o.value.filter((u) => !u.disabled)), a = Hh(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(i.value[i.value.length - 1]) : r(i.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === i.value.length - 1 ? r(i.value[0]) : r(i.value[a.value + 1]));
    }
  };
};
const s$ = window.Vue.openBlock, i$ = window.Vue.createElementBlock, rd = window.Vue.createElementVNode;
var a$ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const l$ = {}, u$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, c$ = /* @__PURE__ */ rd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), d$ = /* @__PURE__ */ rd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), f$ = /* @__PURE__ */ rd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), A$ = [
  c$,
  d$,
  f$
];
function h$(e, o) {
  return s$(), i$("svg", u$, A$);
}
var p$ = /* @__PURE__ */ a$(l$, [["render", h$]]), w$ = Object.defineProperty, v$ = Object.defineProperties, m$ = Object.getOwnPropertyDescriptors, Gh = Object.getOwnPropertySymbols, g$ = Object.prototype.hasOwnProperty, _$ = Object.prototype.propertyIsEnumerable, jh = (e, o, r) => o in e ? w$(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Wv = (e, o) => {
  for (var r in o || (o = {}))
    g$.call(o, r) && jh(e, r, o[r]);
  if (Gh)
    for (var r of Gh(o))
      _$.call(o, r) && jh(e, r, o[r]);
  return e;
}, Fv = (e, o) => v$(e, m$(o));
const ko = window.Vue.defineComponent, Rs = window.Vue.resolveComponent, An = window.Vue.openBlock, Vo = window.Vue.createElementBlock, V$ = window.Vue.createVNode, Sa = window.Vue.createBlock, y$ = window.Vue.withModifiers, xo = window.Vue.inject, Ws = window.Vue.computed, b$ = window.Vue.normalizeClass, no = window.Vue.createElementVNode, Ta = window.Vue.toDisplayString, Va = window.Vue.renderSlot, ks = window.Vue.createCommentVNode, C$ = window.Vue.withDirectives, E$ = window.Vue.vShow, Dc = window.Vue.ref, Kh = window.Vue.toRef, Qh = window.Vue.nextTick, Oc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const od = window.Vue.provide, Jh = window.Vue.isRef, M$ = window.Vue.onBeforeUnmount;
var Ys = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const B$ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, $$ = ko({
  props: B$,
  components: {
    FeatherIcon: Y
  }
}), I$ = ["title"];
function x$(e, o, r, i, a, u) {
  const c = Rs("FeatherIcon");
  return An(), Vo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    V$(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, I$);
}
var S$ = /* @__PURE__ */ Ys($$, [["render", x$], ["__scopeId", "data-v-4265058e"]]);
const T$ = ko({
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
    ActionIcon: S$
  }
});
function P$(e, o, r, i, a, u) {
  const c = Rs("ActionIcon");
  return An(), Sa(c, {
    onClick: o[0] || (o[0] = y$((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var k$ = /* @__PURE__ */ Ys(T$, [["render", P$]]);
const N$ = ko({
  computed: {
    errorIcon() {
      return p$;
    }
  },
  components: {
    FeatherIcon: Y
  }
});
function D$(e, o, r, i, a, u) {
  const c = Rs("FeatherIcon");
  return An(), Sa(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var O$ = /* @__PURE__ */ Ys(N$, [["render", D$], ["__scopeId", "data-v-0b8faef3"]]);
const L$ = {
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
}, z$ = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, q$ = ko({
  emits: z$,
  props: L$,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = xo("wrapperOptions", {}), o = xo("validationErrorMessage", !1), r = Ws(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Fv(Wv({}, e), { error: r });
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
    ClearIcon: k$,
    ErrorIcon: O$
  }
}), R$ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, W$ = ["for"], F$ = { class: "prefix" }, X$ = { class: "post" };
function Z$(e, o, r, i, a, u) {
  const c = Rs("ClearIcon"), f = Rs("ErrorIcon");
  return An(), Vo("div", {
    class: b$(["feather-input-wrapper-container", e.containerCls])
  }, [
    no("fieldset", R$, [
      no("legend", null, Ta(e.label), 1)
    ]),
    no("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ta(e.label), 9, W$),
    no("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...p) => e.handleWrapperClick && e.handleWrapperClick(...p))
    }, [
      no("div", F$, [
        Va(e.$slots, "pre", {}, void 0, !0)
      ]),
      Va(e.$slots, "default", {}, void 0, !0),
      no("div", X$, [
        e.showClear && e.computedClearText ? (An(), Sa(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (p) => e.$emit("clear"))
        }, null, 8, ["clear"])) : ks("", !0),
        e.error ? (An(), Sa(f, { key: 1 })) : ks("", !0),
        Va(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var sd = /* @__PURE__ */ Ys(q$, [["render", Z$], ["__scopeId", "data-v-4db296db"]]);
const U$ = ko({
  setup() {
    const e = xo("subTextOptions", {}), o = xo("validationErrorMessage", !1), r = Ws(() => e.error ? e.error : o && o.value ? o.value : "");
    return Fv(Wv({}, e), { error: r });
  }
}), Y$ = { class: "feather-input-sub-text" }, H$ = {
  key: 0,
  class: "feather-input-spacer"
}, G$ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, j$ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function K$(e, o, r, i, a, u) {
  return C$((An(), Vo("div", Y$, [
    !e.hint && !e.error.length ? (An(), Vo("div", H$, "\xA0")) : ks("", !0),
    e.hint && !e.error.length ? (An(), Vo("div", G$, Ta(e.hint), 1)) : ks("", !0),
    e.error.length > 0 ? (An(), Vo("div", j$, Ta(e.error), 1)) : ks("", !0),
    Va(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [E$, !e.inline || e.hint || e.error.length]
  ]);
}
var Hs = /* @__PURE__ */ Ys(U$, [["render", K$], ["__scopeId", "data-v-8e0ac99e"]]);
const Q$ = {
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
  props: Q$,
  setup(e) {
    const o = xo("featherFormErrors", Dc([])), r = Kh(e, "errorList"), i = Ws(() => {
      var m;
      return (m = r.value) != null && m.length ? r.value : o.value;
    }), a = Kh(e, "generalError"), u = (m) => {
      document.getElementById(m).focus();
    }, c = (m) => m.replace(/ \*$/, ""), f = Dc(), p = (m) => `${c(m.label)} - ${m.message}`, v = Ws(() => (i.value.length && Qh(() => f.value.focus()), e.headingText(i.value)));
    return Oc(a, (m) => {
      m.length && Qh(() => f.value.focus());
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
const Gs = (e, o, r, i, a) => {
  const u = xo("featherForm", !1);
  if (i && u && e.value) {
    const c = Dc("");
    od("validationErrorMessage", c);
    const f = () => {
      if (a && Jh(a) && a.value)
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
    return a && Jh(a) && Oc(a, () => {
      u.runValidation();
    }), Oc(e, (m, _) => {
      m && u && u.register(m, v), _ && u && u.deregister(_);
    }, { immediate: !0 }), M$(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, js = (e) => ({
  inherittedAttrs: Ws(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Ks = {
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
}, Qs = (e) => {
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
}, Qi = window.Vue.ref, J$ = window.Vue.watch, eI = window.Vue.watchEffect, ep = window.Vue.computed, Zu = window.Vue.provide, Xv = (e, o, r, i, a) => {
  const u = Qi([]), c = Qi(), f = Qi(), p = Qi();
  eI(() => {
    if (!u.value.length)
      return;
    const T = u.value.map((N) => N.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[T.indexOf(e.value)]), !c.value && u.value.length) {
      let N = u.value.filter((S) => !S.disabled);
      N = N.length ? N : u.value, f.value = N[0], f.value.first = !0;
    }
  }), J$(c, (T, N) => {
    N && (N.checked = !1), T && (T.checked = !0);
  });
  const v = (T) => {
    T && T.disabled || (f.value && (f.value.first = !1), c.value !== T && (o("update:modelValue", T.value), c.value = T, T.focus()));
  }, m = ep(() => c.value || f.value), _ = o$(m, u, v), V = ep(() => ie("feather-radio-group"));
  p.value = V.value;
  const { validate: $ } = Gs(p, e, r, i, a);
  return Zu("register", (T) => {
    u.value = [...u.value, T], p.value === V.value && (p.value = T.id);
  }), Zu("select", v), Zu("blur", (T) => {
    o("blur", T);
  }), {
    keydown: (T) => {
      switch (T.keyCode) {
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
var tI = Object.defineProperty, nI = Object.defineProperties, rI = Object.getOwnPropertyDescriptors, tp = Object.getOwnPropertySymbols, oI = Object.prototype.hasOwnProperty, sI = Object.prototype.propertyIsEnumerable, np = (e, o, r) => o in e ? tI(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Co = (e, o) => {
  for (var r in o || (o = {}))
    oI.call(o, r) && np(e, r, o[r]);
  if (tp)
    for (var r of tp(o))
      sI.call(o, r) && np(e, r, o[r]);
  return e;
}, Zv = (e, o) => nI(e, rI(o));
const rr = window.Vue.defineComponent, Ns = window.Vue.inject, Pa = window.Vue.computed, Ds = window.Vue.ref, zt = window.Vue.resolveComponent, Ct = window.Vue.openBlock, Js = window.Vue.createElementBlock, Uv = window.Vue.normalizeClass, wn = window.Vue.renderSlot, er = window.Vue.createBlock, Fs = window.Vue.createCommentVNode, ka = window.Vue.createElementVNode, iI = window.Vue.withModifiers, Ua = window.Vue.createVNode, Yv = window.Vue.toRef, Lc = window.Vue.mergeProps, kn = window.Vue.withCtx, aI = window.Vue.h, lI = window.Vue.provide;
var or = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const uI = {
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
}, cI = rr({
  props: uI,
  setup(e) {
    const o = Ns("isCondensed", null), r = Pa(() => o || e.condensed), i = Ds(!1);
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
    FeatherRipple: nr
  }
}), dI = ["aria-disabled"];
function fI(e, o, r, i, a, u) {
  const c = zt("FeatherRipple");
  return Ct(), Js("div", {
    class: Uv(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    wn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Ct(), er(c, { key: 0 })) : Fs("", !0)
  ], 42, dI);
}
var Ya = /* @__PURE__ */ or(cI, [["render", fI], ["__scopeId", "data-v-44d413dc"]]);
const AI = {
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
}, hI = rr({
  emits: ["delete"],
  props: AI,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: Po
    };
  },
  components: {
    FeatherIcon: Y
  }
}), pI = { class: "chip-delete" }, wI = ["aria-label", "aria-describedby"];
function vI(e, o, r, i, a, u) {
  const c = zt("FeatherIcon");
  return Ct(), Js("span", pI, [
    ka("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = iI((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Ua(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, wI)
  ]);
}
var mI = /* @__PURE__ */ or(hI, [["render", vI], ["__scopeId", "data-v-4bae6cb4"]]);
const gI = rr({
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
}), _I = ["title"];
function VI(e, o, r, i, a, u) {
  return Ct(), Js("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    wn(e.$slots, "default", {}, void 0, !0)
  ], 8, _I);
}
var Ha = /* @__PURE__ */ or(gI, [["render", VI], ["__scopeId", "data-v-1a0445b2"]]);
const yI = {}, bI = {
  class: "chip-icon",
  role: "presentation"
};
function CI(e, o) {
  return Ct(), Js("span", bI, [
    wn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ga = /* @__PURE__ */ or(yI, [["render", CI], ["__scopeId", "data-v-2230176f"]]);
const rp = {
  delete: "Remove"
}, EI = rr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => rp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Za(Yv(e, "labels"), rp), i = Pa(() => ie("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Co({}, o.attrs);
    return e.disabled && delete u.onClick, Zv(Co({}, r), {
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
    Chip: Ya,
    DeleteIcon: mI,
    Label: Ha,
    PreIcon: Ga
  }
}), MI = ["aria-disabled"];
function BI(e, o, r, i, a, u) {
  const c = zt("PreIcon"), f = zt("Label"), p = zt("DeleteIcon"), v = zt("Chip");
  return Ct(), er(v, Lc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: kn(() => [
      ka("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        ka("span", Lc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Ct(), er(c, { key: 0 }, {
            default: kn(() => [
              wn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Fs("", !0),
          Ua(f, { id: e.chipTextId }, {
            default: kn(() => [
              wn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, MI),
      e.canDelete ? (Ct(), er(p, {
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
var $I = /* @__PURE__ */ or(EI, [["render", BI], ["__scopeId", "data-v-48b2704a"]]);
const II = rr({
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
    Chip: Ya,
    Label: Ha,
    PreIcon: Ga
  }
}), xI = ["aria-disabled"];
function SI(e, o, r, i, a, u) {
  const c = zt("PreIcon"), f = zt("Label"), p = zt("Chip");
  return Ct(), er(p, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: kn(() => [
      ka("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Ct(), er(c, { key: 0 }, {
          default: kn(() => [
            wn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Fs("", !0),
        Ua(f, null, {
          default: kn(() => [
            wn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, xI)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var TI = /* @__PURE__ */ or(II, [["render", SI], ["__scopeId", "data-v-3e0c4eba"]]);
const PI = rr({
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
    const o = Ds(!1), r = Ds(!1), i = Pa(() => ie("chip-label-id")), a = Pa(() => o.value || r.value ? 0 : -1), u = Ds(), c = () => {
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
    Chip: Ya,
    Label: Ha,
    PreIcon: Ga
  }
});
function kI(e, o, r, i, a, u) {
  const c = zt("PreIcon"), f = zt("Label"), p = zt("Chip");
  return Ct(), er(p, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: Uv(["focus hover", { selected: e.checked }]),
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
      e.hasIcon ? (Ct(), er(c, { key: 0 }, {
        default: kn(() => [
          wn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Fs("", !0),
      Ua(f, { id: e.labelId }, {
        default: kn(() => [
          wn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var NI = /* @__PURE__ */ or(PI, [["render", kI], ["__scopeId", "data-v-bbcc2f70"]]);
const DI = {
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
}, op = rr({
  props: DI,
  setup() {
    return { format: Ns("chipListFormat", "") };
  },
  render() {
    const e = (o) => aI(o, Co(Co({}, this.$props), this.$attrs), Co({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e($I) : this.format === "radio" ? e(NI) : e(TI);
  }
}), OI = {
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
}, LI = rr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: OI,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    lI("chipListFormat", r);
    const i = r === "single";
    if (r === "radio") {
      const c = Yv(e, "modelValue");
      return Zv(Co({
        attrs: {
          role: "radiogroup"
        }
      }, Xv(c, o.emit, e.label, {}, Ds(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), zI = ["aria-label"];
function qI(e, o, r, i, a, u) {
  return Ct(), Js("div", Lc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    wn(e.$slots, "default", {}, void 0, !0)
  ], 16, zI);
}
var RI = /* @__PURE__ */ or(LI, [["render", qI], ["__scopeId", "data-v-1e06f41d"]]);
const WI = window.Vue.defineComponent, FI = window.Vue.normalizeClass, XI = window.Vue.openBlock, ZI = window.Vue.createElementBlock, UI = window.Vue.createCommentVNode, YI = /* @__PURE__ */ WI({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (XI(), ZI("span", {
      key: 0,
      class: FI(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : UI("", !0);
  }
});
const HI = /* @__PURE__ */ re(YI, [["__scopeId", "data-v-e08880d6"]]), GI = window.Vue.defineComponent, As = window.Vue.unref, Hv = window.Vue.createTextVNode, Uu = window.Vue.normalizeClass, Yu = window.Vue.withCtx, jI = window.Vue.createVNode, KI = window.Vue.renderList, QI = window.Vue.Fragment, Ji = window.Vue.openBlock, JI = window.Vue.createElementBlock, Hu = window.Vue.createBlock, sp = window.Vue.createCommentVNode, ex = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const tx = /* @__PURE__ */ Hv(" ALL "), ip = window.Vue.ref, nx = window.Vue.watch, rx = window.Vue.computed, ox = window.Vue.reactive, sx = /* @__PURE__ */ GI({
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
    const r = e, i = ip(!1), a = rx(() => de.exports.keys(de.exports.groupBy(r.alarms, r.property))), u = ip(
      (p = r.preSelected) != null && p.length ? r.preSelected : ["all"]
    ), c = ox({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((m) => m !== "all"), u.value.includes(v) ? u.value = u.value.filter((m) => m !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return nx(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, i.value = !1;
    }), (v, m) => As(a).length > 0 ? (Ji(), Hu(As(RI), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Uu({ vertical: r.isVertical })
    }, {
      default: Yu(() => [
        jI(As(op), {
          class: Uu({ clicked: u.value.includes("all") }),
          onClick: m[0] || (m[0] = (_) => f("all"))
        }, {
          default: Yu(() => [
            tx
          ]),
          _: 1
        }, 8, ["class"]),
        (Ji(!0), JI(QI, null, KI(As(a), (_) => (Ji(), Hu(As(op), {
          class: Uu([
            { clicked: u.value.includes(_) },
            `${_ == null ? void 0 : _.toLowerCase()}-bg`
          ]),
          key: _,
          onClick: (V) => f(_)
        }, {
          default: Yu(() => [
            e.property == "severity" ? (Ji(), Hu(HI, {
              key: 0,
              severity: _
            }, null, 8, ["severity"])) : sp("", !0),
            Hv(ex(_), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : sp("", !0);
  }
});
const ix = /* @__PURE__ */ re(sx, [["__scopeId", "data-v-d83b0f85"]]);
const ax = window.Vue.watch, lx = window.Vue.onBeforeUnmount, ux = window.Vue.ref, cx = window.Vue.onMounted, dx = (e) => {
  const o = ux(!1);
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
  return cx(() => {
    const c = ax(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    lx(() => {
      c(), u();
    });
  }), o;
}, fx = window.Vue.watch, Ax = window.Vue.onBeforeUnmount, hx = window.Vue.ref, px = window.Vue.onMounted, wx = (e, o) => {
  const r = hx(!1), i = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", i));
  };
  return px(() => {
    const c = fx(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", i)) : u();
    }, {
      immediate: !0
    });
    Ax(() => {
      c(), u();
    });
  }), r;
}, vx = window.Vue.watch, mx = window.Vue.onBeforeUnmount, gx = window.Vue.ref, Gv = (e, o) => {
  const r = gx(!1);
  let i = !1;
  const a = (p) => {
    o(p), i = !1;
  };
  function u(p) {
    i || (requestAnimationFrame(() => a(p)), i = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = vx([e, r], ([p, v], m) => {
    m && m.length && m[0] && m[0].removeEventListener("scroll", u, !0), v && p ? p.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return mx(() => {
    f(), c();
  }), r;
}, _x = window.Vue.defineComponent, $n = window.Vue.ref, ap = window.Vue.toRef, Vx = window.Vue.onMounted, yx = window.Vue.watch, lp = window.Vue.computed, bx = window.Vue.nextTick, up = window.Vue.openBlock, cp = window.Vue.createElementBlock, dp = window.Vue.renderSlot, Cx = window.Vue.normalizeClass, Ex = window.Vue.normalizeStyle, Mx = window.Vue.createCommentVNode;
var Bx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const $x = {
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
}, Ix = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, xx = _x({
  emits: Ix,
  props: $x,
  setup(e, o) {
    const r = $n(), i = $n(), a = ap(e, "open"), u = ap(e, "noExpand"), c = $n("auto"), f = $n(), p = $n(e.triggerId || ie("feather-menu-trigger")), v = $n(ie("feather-menu-dropdown")), m = $n(""), _ = $n("");
    Vx(() => {
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
      const I = r.value.getBoundingClientRect();
      V.value = !0, c.value = "auto", bx(() => {
        let { height: z, width: O } = i.value.getBoundingClientRect();
        const F = $(), ge = F.height, fe = F.width;
        e.fill && O < I.width ? (c.value = I.width + "px", O = I.width) : c.value = O + "px";
        let ve = 0;
        ge - I.bottom < z && I.top >= z ? (ve = I.top - z, e.cover && (ve += I.height)) : (ve = I.bottom, e.cover && (ve -= I.height));
        let ye = e.right ? I.right - O : I.left;
        !e.right && I.right >= O && fe - I.left < O && (ye = I.right - O), e.right && I.right <= O && fe - I.left > O && (ye = I.left), _.value = `${ye}px`, m.value = `${ve}px`, V.value = !1;
      });
    }, D = wx(r, (I) => {
      o.emit("outside-click", I);
    }), T = dx(M), N = Gv(f, M);
    yx([a, i], ([I, z]) => {
      I && z && M(), D.value = I, T.value = I, N.value = I;
    });
    const S = lp(() => {
      const I = {
        id: p.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = v.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), q = lp(() => ({
      click: (I) => {
        o.emit("trigger-click", I);
      }
    }));
    return {
      positionTop: m,
      positionLeft: _,
      triggerId: p,
      triggerAttrs: S,
      triggerListeners: q,
      menuId: v,
      menu: i,
      menuWidth: c,
      root: r,
      calculatePosition: M,
      calculating: V
    };
  }
}), Sx = ["data-ref-id"], Tx = ["data-ref-id", "id"];
function Px(e, o, r, i, a, u) {
  return up(), cp("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    dp(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (up(), cp("div", {
      key: 0,
      class: Cx(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: Ex({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      dp(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, Tx)) : Mx("", !0)
  ], 8, Sx);
}
var jv = /* @__PURE__ */ Bx(xx, [["render", Px], ["__scopeId", "data-v-f75af406"]]), kx = {
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
const Nx = window.Vue.openBlock, Dx = window.Vue.createElementBlock, Ox = window.Vue.createElementVNode;
var Lx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const zx = {}, qx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Rx = /* @__PURE__ */ Ox("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), Wx = [
  Rx
];
function Fx(e, o) {
  return Nx(), Dx("svg", qx, Wx);
}
var Xx = /* @__PURE__ */ Lx(zx, [["render", Fx]]);
const Zx = window.Vue.openBlock, Ux = window.Vue.createElementBlock, ld = window.Vue.createElementVNode;
var Yx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Hx = {}, Gx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jx = /* @__PURE__ */ ld("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), Kx = /* @__PURE__ */ ld("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Qx = /* @__PURE__ */ ld("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Jx = [
  jx,
  Kx,
  Qx
];
function eS(e, o) {
  return Zx(), Ux("svg", Gx, Jx);
}
var tS = /* @__PURE__ */ Yx(Hx, [["render", eS]]);
const nS = window.Vue.openBlock, rS = window.Vue.createElementBlock, oS = window.Vue.createElementVNode;
var sS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const iS = {}, aS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lS = /* @__PURE__ */ oS("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), uS = [
  lS
];
function cS(e, o) {
  return nS(), rS("svg", aS, uS);
}
var ja = /* @__PURE__ */ sS(iS, [["render", cS]]);
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
const dS = window.Vue.defineComponent, fS = window.Vue.openBlock, AS = window.Vue.createElementBlock, hS = window.Vue.normalizeClass, pS = window.Vue.pushScopeId, wS = window.Vue.popScopeId, zc = window.Vue.createElementVNode;
var vS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const mS = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, gS = {
  click: (e) => !0
}, _S = dS({
  emits: gS,
  props: mS,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Kv = (e) => (pS("data-v-07e020f5"), e = e(), wS(), e), VS = /* @__PURE__ */ Kv(() => /* @__PURE__ */ zc("div", { class: "track" }, null, -1)), yS = /* @__PURE__ */ Kv(() => /* @__PURE__ */ zc("div", { class: "switcher" }, [
  /* @__PURE__ */ zc("div", { class: "switch-circle" })
], -1)), bS = [
  VS,
  yS
];
function CS(e, o, r, i, a, u) {
  return fS(), AS("div", {
    class: hS(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, bS, 2);
}
var ES = /* @__PURE__ */ vS(_S, [["render", CS], ["__scopeId", "data-v-07e020f5"]]), MS = Object.defineProperty, BS = Object.defineProperties, $S = Object.getOwnPropertyDescriptors, fp = Object.getOwnPropertySymbols, IS = Object.prototype.hasOwnProperty, xS = Object.prototype.propertyIsEnumerable, Ap = (e, o, r) => o in e ? MS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, hp = (e, o) => {
  for (var r in o || (o = {}))
    IS.call(o, r) && Ap(e, r, o[r]);
  if (fp)
    for (var r of fp(o))
      xS.call(o, r) && Ap(e, r, o[r]);
  return e;
}, pp = (e, o) => BS(e, $S(o));
const ud = window.Vue.defineComponent, vr = window.Vue.h, SS = window.Vue.openBlock, TS = window.Vue.createElementBlock, PS = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Qv = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const kS = {
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
}, NS = ud({
  inheritAttrs: !1,
  props: kS,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = vr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = vr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = vr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : vr(nr);
    if (this.asLi)
      return vr("li", pp(hp({}, this.$attrs), {
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
    const u = vr("a", pp(hp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, i, a]);
    return vr("li", {}, [u]);
  }
});
var ei = /* @__PURE__ */ Qv(NS, [["__scopeId", "data-v-7c46b2b3"]]);
ud({
  components: {
    FeatherListItem: ei
  }
});
const DS = {}, OS = { class: "feather-list" };
function LS(e, o) {
  return SS(), TS("ul", OS, [
    PS(e.$slots, "default", {}, void 0, !0)
  ]);
}
var cd = /* @__PURE__ */ Qv(DS, [["render", LS], ["__scopeId", "data-v-941a1d50"]]);
const zS = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, qS = {
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
  emits: zS,
  props: qS,
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
  components: { SwitchRender: ES, FeatherListItem: ei }
});
var RS = Object.defineProperty, WS = Object.defineProperties, FS = Object.getOwnPropertyDescriptors, wp = Object.getOwnPropertySymbols, XS = Object.prototype.hasOwnProperty, ZS = Object.prototype.propertyIsEnumerable, vp = (e, o, r) => o in e ? RS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Et = (e, o) => {
  for (var r in o || (o = {}))
    XS.call(o, r) && vp(e, r, o[r]);
  if (wp)
    for (var r of wp(o))
      ZS.call(o, r) && vp(e, r, o[r]);
  return e;
}, US = (e, o) => WS(e, FS(o));
const No = window.Vue.defineComponent, se = window.Vue.openBlock, ke = window.Vue.createElementBlock, ct = window.Vue.createElementVNode, tn = window.Vue.toDisplayString, Lt = window.Vue.createCommentVNode, xe = window.Vue.resolveComponent, Ot = window.Vue.createBlock, je = window.Vue.withCtx, Eo = window.Vue.Fragment, Os = window.Vue.renderList, dt = window.Vue.createVNode, dd = window.Vue.withModifiers, xr = window.Vue.normalizeClass, qc = window.Vue.renderSlot, Jv = window.Vue.createTextVNode, YS = window.Vue.pushScopeId, HS = window.Vue.popScopeId, em = window.Vue.reactive, tm = window.Vue.nextTick, Gu = window.Vue.markRaw, ju = window.Vue.toRef, mp = window.Vue.computed, GS = window.Vue.toRefs, ro = window.Vue.ref, Ku = window.Vue.mergeProps, gp = window.Vue.toHandlers, ea = window.Vue.withDirectives, ta = window.Vue.vShow;
var Ka = {
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
}, Nr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jS = No({
  mixins: [],
  props: Et(Et({
    text: {
      type: String,
      required: !0
    }
  }, Ka), fd),
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
}), KS = {
  key: 0,
  class: "highlight"
}, QS = { key: 1 };
function JS(e, o, r, i, a, u) {
  return se(), ke("span", null, [
    ct("span", null, tn(e.beginning), 1),
    e.highlighted ? (se(), ke("span", KS, tn(e.highlighted), 1)) : Lt("", !0),
    e.end ? (se(), ke("span", QS, tn(e.end), 1)) : Lt("", !0)
  ]);
}
var nm = /* @__PURE__ */ Nr(jS, [["render", JS], ["__scopeId", "data-v-8abe2492"]]);
const e7 = No({
  emits: ["select", "deselect"],
  props: Et(Et({
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
  }, Ka), fd),
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
    FeatherListItem: ei,
    Highlighter: nm
  }
}), t7 = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function n7(e, o, r, i, a, u) {
  const c = xe("Highlighter"), f = xe("FeatherListItem"), p = xe("FeatherList");
  return se(), Ot(p, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: je(() => [
      (se(!0), ke(Eo, null, Os(e.items, (v, m) => (se(), ke(Eo, {
        key: v[e.textProp]
      }, [
        dt(f, {
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
          default: je(() => [
            dt(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (se(), ke("span", t7, tn(e.newLabel), 1)) : Lt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (se(), ke("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Lt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var r7 = /* @__PURE__ */ Nr(e7, [["render", n7], ["__scopeId", "data-v-f623434a"]]);
const o7 = No({
  emits: ["select"],
  props: Et(Et({
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
  }, Ka), fd),
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
    Highlighter: nm
  }
}), s7 = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, i7 = ["aria-multiselectable"], a7 = { role: "row" }, l7 = ["aria-selected", "onClick"], u7 = ["id", "aria-selected"], c7 = { key: 1 };
function d7(e, o, r, i, a, u) {
  const c = xe("Highlighter");
  return se(), ke("div", s7, [
    ct("table", {
      class: xr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      ct("thead", null, [
        ct("tr", a7, [
          (se(!0), ke(Eo, null, Os(e.config, (f) => (se(), ke("th", {
            key: f.title
          }, tn(f.title), 1))), 128))
        ])
      ]),
      ct("tbody", null, [
        (se(!0), ke(Eo, null, Os(e.items, (f, p) => (se(), ke("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: xr({ focus: e.isActive(p), selected: e.isSelected(f) }),
          onClick: dd((v) => e.select(f), ["stop"])
        }, [
          (se(!0), ke(Eo, null, Os(e.config, (v, m) => (se(), ke("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(p, m),
            "aria-selected": e.isSelected(f),
            class: xr({ "focus-cell": e.isActiveCell(p, m) })
          }, [
            v.prop === e.textProp ? (se(), Ot(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (se(), ke("p", c7, tn(f[v.prop]), 1))
          ], 10, u7))), 128))
        ], 10, l7))), 128))
      ])
    ], 10, i7)
  ], 512);
}
var f7 = /* @__PURE__ */ Nr(o7, [["render", d7], ["__scopeId", "data-v-58c88fd1"]]);
const A7 = No({
  components: {
    FeatherList: cd,
    FeatherListItem: ei
  }
});
function h7(e, o, r, i, a, u) {
  const c = xe("FeatherListItem"), f = xe("FeatherList");
  return se(), Ot(f, { class: "result-list" }, {
    default: je(() => [
      dt(c, { "as-li": "" }, {
        default: je(() => [
          qc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var p7 = /* @__PURE__ */ Nr(A7, [["render", h7], ["__scopeId", "data-v-06b752c6"]]);
const w7 = No({
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
    FeatherIcon: Y,
    Cancel: Po,
    BaseChip: Ya,
    BaseChipLabel: Ha,
    BaseChipPreIcon: Ga
  }
});
function v7(e, o, r, i, a, u) {
  const c = xe("FeatherIcon"), f = xe("BaseChipPreIcon"), p = xe("BaseChipLabel"), v = xe("Cancel"), m = xe("BaseChip");
  return se(), Ot(m, {
    class: xr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: je(() => [
      e.showPreIcon ? (se(), Ot(f, { key: 0 }, {
        default: je(() => {
          var _, V;
          return [
            dt(c, {
              icon: (_ = e.pre) == null ? void 0 : _.icon,
              title: (V = e.pre) == null ? void 0 : V.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Lt("", !0),
      dt(p, null, {
        default: je(() => [
          Jv(tn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Lt("", !0) : (se(), ke("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = dd((..._) => e.handleClick && e.handleClick(..._), ["stop"]))
      }, [
        dt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: je(() => [
            dt(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var m7 = /* @__PURE__ */ Nr(w7, [["render", v7], ["__scopeId", "data-v-e0fc6ac0"]]);
const g7 = {}, _7 = (e) => (YS("data-v-aa720e06"), e = e(), HS(), e), V7 = { class: "spinner-container" }, y7 = /* @__PURE__ */ _7(() => /* @__PURE__ */ ct("svg", {
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
], -1)), b7 = [
  y7
];
function C7(e, o) {
  return se(), ke("div", V7, b7);
}
var E7 = /* @__PURE__ */ Nr(g7, [["render", C7], ["__scopeId", "data-v-aa720e06"]]), Qa = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Qa || {});
const rm = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, M7 = Et(Et(Et({
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
    validator: (e) => !!Qa[e]
  },
  labels: {
    type: Object,
    default: () => rm
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Ka), Ks), id), B7 = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, $7 = (e, o, r, i) => {
  if (r.toLowerCase() === Qa.multi) {
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
}, I7 = () => {
  const e = em({
    row: -1
  }), o = (u) => {
    tm(() => {
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
}, x7 = (e) => {
  const o = em({
    row: -1,
    col: -1
  }), r = (c, f) => {
    tm(() => {
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
}, S7 = No({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: B7,
  props: M7,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Qa.multi;
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
      return Gu(Xx);
    },
    minCharIcon() {
      return Gu(tS);
    },
    dropdownIcon() {
      return Gu(ja);
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
      r !== void 0 && (Tr(this.typingTimeout), this.typingTimeout = Sr(() => {
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
    const r = Za(ju(e, "labels"), rm);
    Qs(e), ad(e);
    let i;
    e.gridConfig ? i = x7(e.gridConfig) : i = I7();
    const a = ju(e, "id"), u = mp(() => a.value ? a.value : ie("feather-autocomplete-input")), { validate: c } = Gs(u, ju(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: p, textProp: v, allowNew: m, type: _, minChar: V } = GS(e), $ = ro(!1), M = ro(!1), P = ro(!1), D = ro(""), T = ro([]), N = ro(), S = mp(() => N.value), q = () => {
      $.value && !M.value && (D.value && D.value.length >= V.value && o.emit("search", D.value), V.value <= 0 && o.emit("search", D.value || ""), T.value = [], i.reset());
    }, I = $7({
      selectionLimit: f,
      selectionLimitReached: M,
      modelValue: p,
      textProp: v,
      allowNew: m,
      forceCloseResults: P,
      query: D,
      internalResults: T,
      input: S,
      emitSearch: q
    }, i, _.value, o.emit);
    return US(Et(Et({}, r), js(o.attrs)), {
      query: D,
      internalResults: T,
      selectionLimitReached: M,
      forceCloseResults: P,
      hasFocus: $,
      strategy: I,
      emitSearch: q,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: u,
      input: N,
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
    InputSubText: Hs,
    AutocompleteResults: r7,
    AutocompleteResultsGrid: f7,
    Chip: m7,
    MenuMessage: p7,
    FeatherIcon: Y,
    FeatherMenu: jv,
    Spinner: E7
  }
}), T7 = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, P7 = ["id"], k7 = { "data-ref-id": "feather-autocomplete-no-results" }, N7 = { "data-ref-id": "feather-autocomplete-selection-limit" }, D7 = { "data-ref-id": "feather-autocomplete-min-char" };
function O7(e, o, r, i, a, u) {
  const c = xe("FeatherIcon"), f = xe("Chip"), p = xe("InputWrapper"), v = xe("AutocompleteResults"), m = xe("AutocompleteResultsGrid"), _ = xe("MenuMessage"), V = xe("Spinner"), $ = xe("FeatherMenu"), M = xe("InputSubText");
  return se(), ke("div", Ku(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    dt($, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: xr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: je(({ attrs: P, on: D }) => [
        dt(p, Ku(Et(Et({}, P), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, gp(D), { ref: "scroll" }), {
          pre: je(() => [
            qc(e.$slots, "pre", {}, () => [
              dt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: je(() => [
            dt(c, {
              icon: e.dropdownIcon,
              class: xr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: je(() => [
            ct("div", {
              class: xr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              ct("div", T7, null, 512),
              ct("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, tn(e.selectedDescribedByText), 9, P7),
              (se(!0), ke(Eo, null, Os(e.modelValueList, (T, N) => ea((se(), Ot(f, {
                key: T[e.textProp],
                role: "button",
                id: N === e.activeChipIndex ? e.activeChipId : null,
                focused: N === e.activeChipIndex,
                disabled: e.disabled,
                text: T[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(T),
                onDelete: (S) => e.removeFromValue(T)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [ta, !e.singleSelect]
              ])), 128)),
              ct("textarea", Ku(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, gp(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: je(() => [
        e.gridConfig ? Lt("", !0) : ea((se(), Ot(v, {
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
          [ta, e.showResults]
        ]),
        e.gridConfig ? ea((se(), Ot(m, {
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
          [ta, e.showResults]
        ]) : Lt("", !0),
        e.showNoResults ? (se(), Ot(_, { key: 2 }, {
          default: je(() => [
            ct("span", k7, tn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Lt("", !0),
        e.showSelectionLimit ? (se(), Ot(_, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: je(() => [
            dt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", N7, tn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Lt("", !0),
        e.minChar ? ea((se(), Ot(_, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: je(() => [
            dt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", D7, [
              qc(e.$slots, "min-char", {}, () => [
                Jv(tn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [ta, e.showMinCharWarning]
        ]) : Lt("", !0),
        e.showLoading ? (se(), Ot(V, { key: 5 })) : Lt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    dt(M, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var L7 = /* @__PURE__ */ Nr(S7, [["render", O7], ["__scopeId", "data-v-43a7e951"]]);
var z7 = Object.defineProperty, q7 = Object.defineProperties, R7 = Object.getOwnPropertyDescriptors, _p = Object.getOwnPropertySymbols, W7 = Object.prototype.hasOwnProperty, F7 = Object.prototype.propertyIsEnumerable, Vp = (e, o, r) => o in e ? z7(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ya = (e, o) => {
  for (var r in o || (o = {}))
    W7.call(o, r) && Vp(e, r, o[r]);
  if (_p)
    for (var r of _p(o))
      F7.call(o, r) && Vp(e, r, o[r]);
  return e;
}, om = (e, o) => q7(e, R7(o));
const sm = window.Vue.defineComponent, X7 = window.Vue.ref, Ls = window.Vue.computed, Z7 = window.Vue.reactive, yp = window.Vue.watch, Qu = window.Vue.inject, im = window.Vue.resolveComponent, Rc = window.Vue.openBlock, am = window.Vue.createElementBlock, tr = window.Vue.createElementVNode, U7 = window.Vue.createBlock, Y7 = window.Vue.createCommentVNode, lm = window.Vue.renderSlot, H7 = window.Vue.pushScopeId, G7 = window.Vue.popScopeId, Ju = window.Vue.toRef, bp = window.Vue.mergeProps, j7 = window.Vue.toDisplayString, K7 = window.Vue.createVNode;
var um = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Q7 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, J7 = sm({
  props: Q7,
  setup(e) {
    const o = X7(), r = () => {
      o.value.focus();
    }, i = Ls(() => ie("feather-radio-button")), a = Z7({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), u = Ls(() => ie("radio-label-id")), c = Ls(() => a.first || a.checked ? 0 : -1);
    yp(() => e.disabled, (_) => {
      a.disabled = _;
    }, { immediate: !0 }), yp(() => e.value, (_) => {
      a.value = _;
    }, { immediate: !0 });
    const f = Qu("register", (_) => {
    }), p = Qu("blur", (_) => {
    }), v = Qu("select", (_) => {
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
    FeatherRipple: nr
  }
}), eT = (e) => (H7("data-v-24790cf0"), e = e(), G7(), e), tT = { class: "layout-container" }, nT = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], rT = { class: "radio hover focus" }, oT = /* @__PURE__ */ eT(() => /* @__PURE__ */ tr("div", {
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
], -1)), sT = ["id"];
function iT(e, o, r, i, a, u) {
  const c = im("feather-ripple");
  return Rc(), am("div", tT, [
    tr("div", {
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
      tr("div", rT, [
        oT,
        e.vm.disabled ? Y7("", !0) : (Rc(), U7(c, {
          key: 0,
          center: ""
        }))
      ]),
      tr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        lm(e.$slots, "default", {}, void 0, !0)
      ], 8, sT)
    ], 40, nT)
  ]);
}
var Tn = /* @__PURE__ */ um(J7, [["render", iT], ["__scopeId", "data-v-24790cf0"]]);
const aT = om(ya({}, Ks), {
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
}), lT = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, uT = sm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: aT,
  emits: lT,
  setup(e, o) {
    Qs(e);
    const r = Ju(e, "error"), i = Ju(e, "modelValue"), a = Ls(() => ie("feather-input-description")), u = Ls(() => {
      const c = om(ya({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return ya(ya({
      descriptionId: a,
      attrs: u
    }, Xv(i, o.emit, e.label, e.schema, Ju(e, "error"))), js(o.attrs));
  },
  components: {
    InputSubText: Hs
  }
}), cT = ["for"], dT = ["id"];
function fT(e, o, r, i, a, u) {
  const c = im("InputSubText");
  return Rc(), am("div", bp(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    tr("label", {
      for: e.groupId,
      class: "group-label"
    }, j7(e.label), 9, cT),
    tr("div", bp(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      lm(e.$slots, "default", {}, void 0, !0)
    ], 16, dT),
    K7(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Zs = /* @__PURE__ */ um(uT, [["render", fT], ["__scopeId", "data-v-6775aeb9"]]);
const AT = window.Vue.defineComponent, hT = window.Vue.renderList, pT = window.Vue.Fragment, Cp = window.Vue.openBlock, wT = window.Vue.createElementBlock, vT = window.Vue.toDisplayString, mT = window.Vue.createTextVNode, Ep = window.Vue.unref, Mp = window.Vue.withCtx, gT = window.Vue.createVNode, _T = window.Vue.createBlock, VT = window.Vue.watch, yT = window.Vue.ref, bT = /* @__PURE__ */ AT({
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
    ], a = yT(r.preSelected || i[0].id);
    return VT(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Cp(), _T(Ep(Zs), {
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
      default: Mp(() => [
        (Cp(), wT(pT, null, hT(i, (f) => gT(Ep(Tn), {
          value: f.id,
          key: f.id
        }, {
          default: Mp(() => [
            mT(vT(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const CT = /* @__PURE__ */ re(bT, [["__scopeId", "data-v-0363302c"]]);
var ET = Object.defineProperty, MT = Object.defineProperties, BT = Object.getOwnPropertyDescriptors, Bp = Object.getOwnPropertySymbols, $T = Object.prototype.hasOwnProperty, IT = Object.prototype.propertyIsEnumerable, $p = (e, o, r) => o in e ? ET(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, hs = (e, o) => {
  for (var r in o || (o = {}))
    $T.call(o, r) && $p(e, r, o[r]);
  if (Bp)
    for (var r of Bp(o))
      IT.call(o, r) && $p(e, r, o[r]);
  return e;
}, Ip = (e, o) => MT(e, BT(o));
const xT = window.Vue.defineComponent, ST = window.Vue.inject, ps = window.Vue.h;
var TT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const PT = {
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
}, kT = xT({
  inheritAttrs: !1,
  props: PT,
  setup() {
    return { hasTooltip: ST("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const p = ["btn", "hover", "focus", f];
      return this.icon && (p.push("btn-icon"), p.push("btn-icon-table")), this.onColor && p.push("on-color"), p;
    }, o = this.asAnchor ? "a" : "button", r = {}, i = hs({}, this.$attrs);
    r.attrs = i || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = ps(nr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), ps(o, Ip(hs(hs({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ps(nr, { center: !0 })
      ]);
    }
    const c = ps("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ps(o, Ip(hs(hs({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var le = /* @__PURE__ */ TT(kT, [["__scopeId", "data-v-702d1074"]]);
const NT = window.Vue.openBlock, DT = window.Vue.createElementBlock, OT = window.Vue.createElementVNode;
var LT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const zT = {}, qT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RT = /* @__PURE__ */ OT("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), WT = [
  RT
];
function FT(e, o) {
  return NT(), DT("svg", qT, WT);
}
var XT = /* @__PURE__ */ LT(zT, [["render", FT]]);
const ZT = window.Vue.openBlock, UT = window.Vue.createElementBlock, YT = window.Vue.createElementVNode;
var HT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const GT = {}, jT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KT = /* @__PURE__ */ YT("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), QT = [
  KT
];
function JT(e, o) {
  return ZT(), UT("svg", jT, QT);
}
var eP = /* @__PURE__ */ HT(GT, [["render", JT]]);
const tP = window.Vue.openBlock, nP = window.Vue.createElementBlock, rP = window.Vue.createElementVNode;
var oP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const sP = {}, iP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aP = /* @__PURE__ */ rP("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), lP = [
  aP
];
function uP(e, o) {
  return tP(), nP("svg", iP, lP);
}
var cm = /* @__PURE__ */ oP(sP, [["render", uP]]);
const cP = window.Vue.defineComponent, cn = window.Vue.unref, mr = window.Vue.createVNode, xp = window.Vue.toDisplayString, Sn = window.Vue.createElementVNode, dm = window.Vue.createTextVNode, Sp = window.Vue.openBlock, Tp = window.Vue.createElementBlock, dP = window.Vue.createCommentVNode, fP = window.Vue.withCtx, AP = window.Vue.vShow, hP = window.Vue.normalizeClass, pP = window.Vue.withDirectives, wP = window.Vue.Fragment, vP = window.Vue.pushScopeId, mP = window.Vue.popScopeId, fm = (e) => (vP("data-v-b1dc2670"), e = e(), mP(), e), gP = /* @__PURE__ */ dm(" Filters "), _P = { class: "count" }, VP = { class: "results" }, yP = { class: "total" }, bP = /* @__PURE__ */ dm(" Reset "), CP = /* @__PURE__ */ fm(() => /* @__PURE__ */ Sn("div", { class: "title" }, "By Severities:", -1)), EP = /* @__PURE__ */ fm(() => /* @__PURE__ */ Sn("div", { class: "title" }, "By Start Date:", -1)), gr = window.Vue.ref, MP = window.Vue.reactive, BP = window.Vue.markRaw, Pp = window.Vue.watch, $P = /* @__PURE__ */ cP({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, i = BP({
      FilterAlt: XT,
      ExpandLess: eP,
      ExpandMore: ja,
      Refresh: cm
    }), a = rn(), u = gr(r.isOpen), c = gr(["all"]), f = gr(1), p = gr(r.list), v = gr(!1), m = gr(0), _ = gr(null), V = MP({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), $ = () => {
      var z, O;
      r.saveFilters && a.filters && (a.filters.node && (V.nodeSelectedValue = a.filters.node), ((z = a.filters) == null ? void 0 : z.severities) && !((O = a.filters) != null && O.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, S());
    }, M = () => {
      V.nodes = a.nodes, V.results = a.nodes;
    };
    Pp(
      () => a.nodes,
      () => {
        M();
      }
    ), Pp(r, () => {
      p.value = r.list, $();
    });
    const P = (z) => {
      c.value = z, S();
    }, D = (z) => {
      f.value = z, S();
    }, T = (z) => {
      if (!z)
        return V.nodeSelectedValue = void 0, [];
      v.value = !0, V.results = V.nodes.filter((O) => O.label.toLowerCase().indexOf(z) > -1).map((O) => ({
        _text: O.label,
        id: O.id
      })), v.value = !1;
    }, N = () => {
      c.value = ["all"], f.value = 1, V.nodeSelectedValue = void 0, m.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), p.value = r.list;
    }, S = () => {
      m.value = 0;
      let z = r.list;
      V.nodeSelectedValue && V.nodeSelectedValue._text && (m.value++, r.isSituation ? z = z.map((O) => {
        if (O.relatedAlarms.filter(
          (fe) => {
            var ve;
            return fe.nodeLabel === ((ve = V.nodeSelectedValue) == null ? void 0 : ve._text);
          }
        ).length > 0)
          return O;
      }).filter((O) => O) : z = z.filter(
        (O) => {
          var F;
          return O.nodeLabel === ((F = V.nodeSelectedValue) == null ? void 0 : F._text);
        }
      )), c.value.includes("all") || (m.value++, z = z.filter(
        (O) => c.value.includes(O.severity)
      )), f.value !== 1 && (m.value++, z = MM(
        f.value,
        z
      )), p.value = z, r.saveFilters && q(), o("filtered-list", z);
    }, q = () => {
      a.filters = {
        node: V.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, I = () => {
      u.value = !u.value;
    };
    return (z, O) => (Sp(), Tp(wP, null, [
      r.isOpen ? dP("", !0) : (Sp(), Tp("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        Sn("div", null, [
          mr(cn(Y), {
            icon: cn(i).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          gP,
          Sn("span", _P, xp(m.value), 1)
        ]),
        mr(cn(Y), {
          icon: u.value ? cn(i).ExpandLess : cn(i).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      pP(Sn("div", {
        class: hP(["filters", { collapsed: !r.isOpen }])
      }, [
        Sn("div", VP, [
          Sn("div", yP, "Results: " + xp(cn(p).length), 1),
          mr(cn(le), {
            class: "btn-reset",
            onClick: N
          }, {
            default: fP(() => [
              mr(cn(Y), {
                icon: cn(i).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              bP
            ]),
            _: 1
          })
        ]),
        Sn("div", null, [
          mr(cn(L7), {
            ref_key: "autocomplete",
            ref: _,
            label: "Search by node",
            loading: v.value,
            modelValue: V.nodeSelectedValue,
            "onUpdate:modelValue": [
              O[0] || (O[0] = (F) => V.nodeSelectedValue = F),
              S
            ],
            results: V.results,
            type: "single",
            onSearch: T
          }, null, 8, ["loading", "modelValue", "results"]),
          CP,
          mr(ix, {
            alarms: r.list,
            onSelectedOption: P,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Sn("div", null, [
            EP,
            mr(CT, {
              onFilterDateSelected: D,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [AP, u.value]
      ])
    ], 64));
  }
});
const Do = /* @__PURE__ */ re($P, [["__scopeId", "data-v-b1dc2670"]]), IP = window.Vue.openBlock, xP = window.Vue.createElementBlock, SP = window.Vue.createElementVNode;
var TP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const PP = {}, kP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NP = /* @__PURE__ */ SP("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), DP = [
  NP
];
function OP(e, o) {
  return IP(), xP("svg", kP, DP);
}
var Ja = /* @__PURE__ */ TP(PP, [["render", OP]]);
const LP = window.Vue.openBlock, zP = window.Vue.createElementBlock, Am = window.Vue.createElementVNode;
var qP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const RP = {}, WP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FP = /* @__PURE__ */ Am("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), XP = /* @__PURE__ */ Am("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), ZP = [
  FP,
  XP
];
function UP(e, o) {
  return LP(), zP("svg", WP, ZP);
}
var YP = /* @__PURE__ */ qP(RP, [["render", UP]]);
const HP = window.Vue.openBlock, GP = window.Vue.createElementBlock, jP = window.Vue.createElementVNode;
var KP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const QP = {}, JP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ek = /* @__PURE__ */ jP("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), tk = [
  ek
];
function nk(e, o) {
  return HP(), GP("svg", JP, tk);
}
var rk = /* @__PURE__ */ KP(QP, [["render", nk]]);
const vn = () => window.VRouter || f1;
const ok = window.Vue.openBlock, sk = window.Vue.createElementBlock, ik = window.Vue.pushScopeId, ak = window.Vue.popScopeId, kp = window.Vue.createElementVNode;
var lk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const uk = {}, ck = (e) => (ik("data-v-2263be39"), e = e(), ak(), e), dk = { class: "spinner-container" }, fk = /* @__PURE__ */ ck(() => /* @__PURE__ */ kp("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ kp("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), Ak = [
  fk
];
function hk(e, o) {
  return ok(), sk("div", dk, Ak);
}
var Ad = /* @__PURE__ */ lk(uk, [["render", hk], ["__scopeId", "data-v-2263be39"]]);
const pk = window.Vue.defineComponent, ec = window.Vue.unref, wk = window.Vue.createVNode, vk = window.Vue.createElementVNode, mk = window.Vue.withCtx, gk = window.Vue.openBlock, _k = window.Vue.createBlock, Vk = window.Vue.pushScopeId, yk = window.Vue.popScopeId, bk = (e) => (Vk("data-v-fba500de"), e = e(), yk(), e), Ck = /* @__PURE__ */ bk(() => /* @__PURE__ */ vk("span", null, "New Situation", -1)), Ek = window.Vue.markRaw, Mk = /* @__PURE__ */ pk({
  __name: "NewSituationBtn",
  setup(e) {
    const o = vn(), r = Ek({
      Add: Ja
    }), i = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (gk(), _k(ec(le), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: mk(() => [
        wk(ec(Y), {
          icon: ec(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        Ck
      ]),
      _: 1
    }));
  }
});
const hm = /* @__PURE__ */ re(Mk, [["__scopeId", "data-v-fba500de"]]), Bk = "/whoami", $k = async () => {
  try {
    const e = await nn.get(Bk);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, hd = "/alec", pm = "/alec/engine/configuration", wm = "/alec/agreement/configuration", Ik = "/alec/situation", xk = async (e) => {
  try {
    return (await nn.post(`${wm}`, {
      agreed: e
    })).status === 200;
  } catch {
    return !1;
  }
}, Sk = async () => {
  try {
    const e = await nn.get(`${wm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Tk = async () => {
  try {
    const e = await nn.get(`${pm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Pk = async (e) => {
  try {
    return (await nn.post(pm, e)).status === 200;
  } catch {
    return !1;
  }
}, vm = async (e, o) => {
  try {
    return (await nn.post(`${hd}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Np = async (e, o) => {
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
}, mm = async (e, o) => {
  try {
    return (await nn.put(`${hd}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, kk = async (e) => {
  try {
    return (await nn.post(Ik, e)).status === 200;
  } catch {
    return !1;
  }
}, Nk = window.Pinia.defineStore, Dk = {
  alpha: 144.47117699,
  beta: 0.55257784,
  epsilon: 100
}, Nn = Nk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await $k();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await Sk();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async getEngineInfo() {
      const e = await Tk();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o) {
      const r = {
        ...Dk,
        distanceMeasureName: o ? Ce.HELLINGER_OPTION : Ce.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return await Pk(r) ? (this.engineInfo = r, !0) : !1;
    },
    async savePermission(e) {
      await xk(e) && (this.allowSave = e);
    }
  }
}), Ok = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", Lk = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", zk = window.Vue.defineComponent, ws = window.Vue.unref, tc = window.Vue.createElementVNode, oo = window.Vue.openBlock, so = window.Vue.createElementBlock, qk = window.Vue.createCommentVNode, gm = window.Vue.createTextVNode, Rk = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Wk = {
  key: 0,
  class: "info-engine"
}, Fk = ["src"], Xk = /* @__PURE__ */ gm(" ENGINE "), Zk = {
  key: 0,
  class: "type"
}, Uk = {
  key: 1,
  class: "type"
}, Yk = /* @__PURE__ */ gm(" OPT-IN "), Hk = {
  key: 0,
  class: "optin-on"
}, Gk = {
  key: 1,
  class: "optin-off"
}, jk = window.Vue.watch, Kk = window.Vue.ref, Qk = /* @__PURE__ */ zk({
  __name: "ConfigurationInfo",
  setup(e) {
    var u;
    const o = vn(), r = Nn(), i = () => {
      o.push({
        name: "settings"
      });
    }, a = Kk(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == Ce.ENGINE_DBSCAN
    );
    return jk(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == Ce.ENGINE_DBSCAN;
      }
    ), (c, f) => (oo(), so(Rk, null, [
      ws(r).engineInfo && ws(r).engineInfo.engineName ? (oo(), so("div", Wk, [
        tc("img", {
          src: a.value ? ws(Lk) : ws(Ok),
          class: "icon-type"
        }, null, 8, Fk),
        tc("div", {
          class: "engine",
          onClick: i
        }, [
          Xk,
          a.value ? (oo(), so("div", Zk, "CLUSTERING")) : (oo(), so("div", Uk, "DEEP LEARNING"))
        ])
      ])) : qk("", !0),
      tc("div", {
        class: "optin",
        onClick: i
      }, [
        Yk,
        ws(r).allowSave ? (oo(), so("div", Hk, "ON")) : (oo(), so("div", Gk, "OFF"))
      ])
    ], 64));
  }
});
const Jk = /* @__PURE__ */ re(Qk, [["__scopeId", "data-v-28fe775c"]]);
const eN = {}, tN = window.Vue.openBlock, nN = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const rN = { class: "empty" };
function oN(e, o) {
  return tN(), nN("div", rN, "No results found.");
}
const Oo = /* @__PURE__ */ re(eN, [["render", oN], ["__scopeId", "data-v-725433ac"]]), sN = window.Vue.defineComponent, Jt = window.Vue.createElementVNode, vs = window.Vue.unref, _r = window.Vue.createVNode, iN = window.Vue.withCtx, na = window.Vue.toDisplayString, Hn = window.Vue.openBlock, Dp = window.Vue.createBlock, aN = window.Vue.createCommentVNode, lN = window.Vue.renderList, uN = window.Vue.Fragment, io = window.Vue.createElementBlock, cN = window.Vue.pushScopeId, dN = window.Vue.popScopeId, _m = (e) => (cN("data-v-5af90527"), e = e(), dN(), e), fN = { class: "list-main" }, AN = { class: "header" }, hN = /* @__PURE__ */ _m(() => /* @__PURE__ */ Jt("h2", null, "Situation List", -1)), pN = { class: "link-btns" }, wN = /* @__PURE__ */ _m(() => /* @__PURE__ */ Jt("span", null, "View Unassociated Alarms", -1)), vN = { class: "content" }, mN = { class: "left-filters" }, gN = { class: "container" }, _N = { class: "autocomplete" }, VN = { key: 1 }, yN = { key: 0 }, bN = { class: "situation-list" }, CN = {
  key: 0,
  class: "footer-pager"
}, EN = window.Vue.reactive, ra = window.Vue.ref, MN = window.Vue.watch, BN = window.Vue.markRaw, $N = /* @__PURE__ */ sN({
  __name: "SituationList",
  setup(e) {
    const o = BN({
      Add: Ja,
      View: YP,
      Settings: rk
    }), r = vn(), i = rn(), a = Nn();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = EN({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = ra(!0), p = ra(0), v = ra(1), m = ra(0), _ = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    MN(
      () => i.situations,
      () => {
        f.value = !1, _(), P(i.situations);
      }
    );
    const V = (T) => {
      p.value = T, c.situations = c.allSituations[p.value];
    }, $ = (T) => {
      r.push({
        name: "situationDetail",
        params: {
          id: T
        }
      });
    }, M = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, P = (T) => {
      m.value = T.length, c.allSituations = de.exports.chunk(T, u);
      const N = T.map((S) => S.id);
      i.filteredSituations = N, p.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, D = (T) => {
      T.length ? P(T) : c.situations = [];
    };
    return (T, N) => (Hn(), io("div", fN, [
      Jt("div", AN, [
        hN,
        Jt("div", pN, [
          _r(vs(le), {
            class: "view-situation-btn",
            onClick: N[0] || (N[0] = () => M())
          }, {
            default: iN(() => [
              _r(vs(Y), {
                icon: vs(o).View,
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              wN
            ]),
            _: 1
          }),
          _r(hm),
          _r(Jk)
        ])
      ]),
      Jt("div", vN, [
        Jt("div", mN, [
          _r(Do, {
            list: vs(i).situations,
            onFilteredList: D,
            isOpen: "",
            isSituation: "",
            saveFilters: ""
          }, null, 8, ["list"])
        ]),
        Jt("div", gN, [
          Jt("div", _N, [
            Jt("div", null, " Result: " + na(c.situations.length) + " of " + na(m.value), 1)
          ]),
          f.value ? (Hn(), Dp(vs(Ad), {
            key: 0,
            class: "spinner"
          })) : (Hn(), io("div", VN, [
            c.situations && c.situations.length ? (Hn(), io("div", yN, [
              Jt("div", bN, [
                (Hn(!0), io(uN, null, lN(c.situations, (S) => (Hn(), io("div", {
                  class: "card",
                  key: S.id
                }, [
                  _r(zv, {
                    onClick: () => $(S.id),
                    "situation-info": S
                  }, null, 8, ["onClick", "situation-info"])
                ]))), 128))
              ]),
              m.value > u ? (Hn(), io("div", CN, [
                Jt("div", null, "Page: " + na(p.value + 1) + " of " + na(v.value), 1),
                _r(DB, {
                  onGoToPage: V,
                  currentPage: p.value,
                  totalPages: v.value
                }, null, 8, ["currentPage", "totalPages"])
              ])) : aN("", !0)
            ])) : (Hn(), Dp(Oo, { key: 1 }))
          ]))
        ])
      ])
    ]));
  }
});
const IN = /* @__PURE__ */ re($N, [["__scopeId", "data-v-5af90527"]]);
const oa = window.Vue.ref, xN = window.Vue.inject, SN = window.Vue.computed, TN = window.Vue.onMounted, Vm = {
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
}, ym = (e) => {
  const o = oa(!1), r = oa(), i = oa(e.controls), a = oa(e.id), u = () => {
    r.value && r.value.focus();
  }, c = xN("registerTab");
  TN(() => {
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
  const f = SN(() => ({
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
}, Op = window.Vue.ref, PN = window.Vue.toRef, kN = window.Vue.watch, Lp = window.Vue.provide, bm = {
  prop: "modelValue",
  event: "update:modelValue"
}, Cm = {
  "update:modelValue": (e) => !0
}, Em = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, Mm = (e, o) => {
  const r = PN(e, "modelValue"), i = Op(e.modelValue), a = Op([]);
  kN(r, (M) => {
    p(M);
  });
  const u = (M) => {
    M.preventDefault(), a.value.some((P, D) => P.tab && P.tab.el.contains(M.target) ? (f(D), p(D), !0) : !1);
  }, c = (M) => {
    if (((F) => F.shiftKey || F.ctrlKey || F.metaKey || F.altKey)(M))
      return;
    const D = M.keyCode, T = (F) => {
      F.stopPropagation(), F.preventDefault();
    }, N = a.value.filter((F) => F.tab && !F.tab.disabled), S = a.value.findIndex((F) => F.tab && F.tab.el.contains(document.activeElement));
    let q = S !== -1 ? S : i.value;
    const I = [Q.RIGHT], z = [Q.LEFT], O = [Q.ENTER, Q.SPACE];
    e.vertical && (I.push(Q.DOWN), z.push(Q.UP)), I.indexOf(D) > -1 ? (q++, q >= N.length && (q = 0), T(M), f(a.value.indexOf(N[q]))) : z.indexOf(D) > -1 && (q--, q < 0 && (q = N.length - 1), T(M), f(a.value.indexOf(N[q]))), O.indexOf(D) > -1 && p(q);
  }, f = (M) => {
    a.value.forEach(function(P, D) {
      M === D && P.tab && P.tab.focus();
    });
  }, p = (M) => {
    const P = a.value[M];
    !P || P.tab && P.tab.disabled || (a.value.forEach((D, T) => {
      D.tab && (D.tab.selected = M === T), D.panel && (D.panel.selected = M === T);
    }), i.value = M, o.emit("update:modelValue", M));
  };
  Lp("registerTab", (M) => {
    const P = M.index;
    P > -1 && (a.value[P] = { ...a.value[P], tab: M }, a.value = [...a.value], _());
  }), Lp("registerPanel", (M) => {
    const P = M.index;
    P > -1 && (a.value[P] = {
      ...a.value[P],
      panel: M
    }, a.value = [...a.value], _());
  });
  const _ = () => {
    a.value.forEach(({ tab: M, panel: P }, D) => {
      if (P && M) {
        const T = M.id || ie("tab"), N = M.controls || ie("panel");
        M.controls = N, M.id = T, P.tab = T, P.id = N;
      }
      D === i.value && (P && (P.selected = !0), M && (M.selected = !0));
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
}, sa = window.Vue.ref, NN = window.Vue.inject, DN = window.Vue.computed, ON = window.Vue.onMounted, Bm = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, $m = (e) => {
  const o = sa(!1), r = sa(), i = sa(e.tab), a = sa(e.id), u = NN("registerPanel");
  ON(() => {
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
  const c = DN(() => ({
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
}, pd = window.Vue.defineComponent, LN = window.Vue.resolveComponent, wd = window.Vue.openBlock, vd = window.Vue.createElementBlock, zs = window.Vue.createElementVNode, Im = window.Vue.mergeProps, Na = window.Vue.renderSlot, zN = window.Vue.createVNode, qN = window.Vue.normalizeStyle, RN = window.Vue.toHandlers, WN = window.Vue.withDirectives, FN = window.Vue.normalizeProps, XN = window.Vue.guardReactiveProps, ZN = window.Vue.vShow;
var md = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const UN = Vm, YN = pd({
  props: UN,
  setup(e) {
    return ym(e);
  },
  components: {
    FeatherRipple: nr
  }
}), HN = { role: "presentation" }, GN = { class: "tab-text" };
function jN(e, o, r, i, a, u) {
  const c = LN("FeatherRipple");
  return wd(), vd("li", HN, [
    zs("button", Im(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      zs("span", GN, [
        Na(e.$slots, "default", {}, void 0, !0)
      ]),
      zN(c)
    ], 16)
  ]);
}
var zp = /* @__PURE__ */ md(YN, [["render", jN], ["__scopeId", "data-v-e6bb52b6"]]);
const KN = Em, QN = Cm, JN = pd({
  model: bm,
  emits: QN,
  props: KN,
  setup(e, o) {
    return Mm(e, o);
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
}), eD = { class: "feather-tab-container" }, tD = { class: "tab-panels" };
function nD(e, o, r, i, a, u) {
  return wd(), vd("div", eD, [
    zs("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: qN({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    zs("ul", Im(e.attrs, RN(e.listeners)), [
      Na(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    zs("div", tD, [
      Na(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var rD = /* @__PURE__ */ md(JN, [["render", nD], ["__scopeId", "data-v-27adffb9"]]);
const oD = Bm, sD = pd({
  props: oD,
  setup(e) {
    return $m(e);
  }
});
function iD(e, o, r, i, a, u) {
  return WN((wd(), vd("div", FN(XN(e.attrs)), [
    Na(e.$slots, "default")
  ], 16)), [
    [ZN, e.selected]
  ]);
}
var qp = /* @__PURE__ */ md(sD, [["render", iD]]);
const aD = window.Vue.defineComponent, lD = window.Vue.toDisplayString, uD = window.Vue.normalizeClass, cD = window.Vue.openBlock, dD = window.Vue.createElementBlock, fD = window.Vue.createCommentVNode, AD = /* @__PURE__ */ aD({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (cD(), dD("span", {
      key: 0,
      class: uD(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, lD(o.severity), 3)) : fD("", !0);
  }
});
const xm = /* @__PURE__ */ re(AD, [["__scopeId", "data-v-83c2cdce"]]), hD = window.Vue.defineComponent, Rp = window.Vue.toDisplayString, Wp = window.Vue.createElementVNode, pD = window.Vue.openBlock, wD = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const vD = { class: "box" }, mD = { class: "label" }, gD = { class: "date" }, _D = /* @__PURE__ */ hD({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (pD(), wD("div", vD, [
      Wp("div", mD, Rp(o.label), 1),
      Wp("div", gD, Rp(o.info), 1)
    ]));
  }
});
const nc = /* @__PURE__ */ re(_D, [["__scopeId", "data-v-b4afa751"]]), VD = window.Vue.defineComponent, yD = window.Vue.unref, bD = window.Vue.renderList, CD = window.Vue.Fragment, rc = window.Vue.openBlock, oc = window.Vue.createElementBlock, ED = window.Vue.toDisplayString, MD = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const BD = { class: "alarms-list" }, $D = /* @__PURE__ */ VD({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (rc(), oc("div", BD, [
      (rc(!0), oc(CD, null, bD(yD(de.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (rc(), oc("div", {
        class: MD(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, ED(a.length), 3))), 128))
    ]));
  }
});
const ID = /* @__PURE__ */ re($D, [["__scopeId", "data-v-52d63440"]]), xD = window.Vue.openBlock, SD = window.Vue.createElementBlock, TD = window.Vue.createElementVNode;
var PD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const kD = {}, ND = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DD = /* @__PURE__ */ TD("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), OD = [
  DD
];
function LD(e, o) {
  return xD(), SD("svg", ND, OD);
}
var zD = /* @__PURE__ */ PD(kD, [["render", LD]]);
const qD = window.Vue.openBlock, RD = window.Vue.createElementBlock, WD = window.Vue.createStaticVNode;
var FD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const XD = {}, ZD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UD = /* @__PURE__ */ WD('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), YD = [
  UD
];
function HD(e, o) {
  return qD(), RD("svg", ZD, YD);
}
var Da = /* @__PURE__ */ FD(XD, [["render", HD]]);
const GD = window.Vue.defineComponent, Yt = window.Vue.unref, sc = window.Vue.createVNode, gd = window.Vue.createElementVNode, ic = window.Vue.withCtx, ia = window.Vue.openBlock, ac = window.Vue.createBlock, lc = window.Vue.createCommentVNode, jD = window.Vue.normalizeClass, KD = window.Vue.createElementBlock, QD = window.Vue.pushScopeId, JD = window.Vue.popScopeId, _d = (e) => (QD("data-v-e073070b"), e = e(), JD(), e), eO = /* @__PURE__ */ _d(() => /* @__PURE__ */ gd("span", null, "Acknowledge", -1)), tO = /* @__PURE__ */ _d(() => /* @__PURE__ */ gd("span", null, "Escalate", -1)), nO = /* @__PURE__ */ _d(() => /* @__PURE__ */ gd("span", null, "Clear", -1)), rO = /* @__PURE__ */ GD({
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
      await V3(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await vm(
        o.situationId,
        Ce.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await y3(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (ia(), KD("div", {
      class: jD(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? lc("", !0) : (ia(), ac(Yt(le), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => i(!0))
      }, {
        default: ic(() => [
          sc(Yt(Y), {
            icon: Yt(Io),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          eO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (ia(), ac(Yt(le), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(Yt(Ce).ESCALATE))
      }, {
        default: ic(() => [
          sc(Yt(Y), {
            icon: Yt(zD),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          tO
        ]),
        _: 1
      })) : lc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (ia(), ac(Yt(le), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(Yt(Ce).CLEAR))
      }, {
        default: ic(() => [
          sc(Yt(Y), {
            icon: Yt(Da),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          nO
        ]),
        _: 1
      })) : lc("", !0)
    ], 2));
  }
});
const Sm = /* @__PURE__ */ re(rO, [["__scopeId", "data-v-e073070b"]]);
var oO = Object.defineProperty, sO = Object.defineProperties, iO = Object.getOwnPropertyDescriptors, Fp = Object.getOwnPropertySymbols, aO = Object.prototype.hasOwnProperty, lO = Object.prototype.propertyIsEnumerable, Xp = (e, o, r) => o in e ? oO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Wc = (e, o) => {
  for (var r in o || (o = {}))
    aO.call(o, r) && Xp(e, r, o[r]);
  if (Fp)
    for (var r of Fp(o))
      lO.call(o, r) && Xp(e, r, o[r]);
  return e;
}, Tm = (e, o) => sO(e, iO(o));
const Pm = window.Vue.defineComponent, uO = window.Vue.inject, cO = window.Vue.resolveComponent, uc = window.Vue.openBlock, Zp = window.Vue.createElementBlock, yo = window.Vue.createElementVNode, dO = window.Vue.createBlock, Up = window.Vue.createCommentVNode, fO = window.Vue.renderSlot, AO = window.Vue.pushScopeId, hO = window.Vue.popScopeId, cc = window.Vue.toRef, aa = window.Vue.computed, pO = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var wO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const vO = {
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
}, mO = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, gO = Pm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: mO,
  props: vO,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: uO("registerCheckbox", (o) => {
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
    FeatherRipple: nr
  }
}), _O = (e) => (AO("data-v-a7af27e2"), e = e(), hO(), e), VO = { class: "layout-container" }, yO = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], bO = { class: "checkbox hover focus" }, CO = /* @__PURE__ */ _O(() => /* @__PURE__ */ yo("div", { class: "box" }, [
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
], -1)), EO = ["id", "for"];
function MO(e, o, r, i, a, u) {
  const c = cO("feather-ripple");
  return uc(), Zp("div", VO, [
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
      yo("div", bO, [
        CO,
        e.disabled ? Up("", !0) : (uc(), dO(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Up("", !0) : (uc(), Zp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        fO(e.$slots, "default", {}, void 0, !0)
      ], 8, EO))
    ], 40, yO)
  ]);
}
var Lo = /* @__PURE__ */ wO(gO, [["render", MO], ["__scopeId", "data-v-a7af27e2"]]);
const BO = Tm(Wc({}, Ks), {
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
Pm({
  props: BO,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Qs(e);
    const r = cc(e, "error"), i = aa(() => ie("feather-checkbox-group")), a = aa(() => ie("feather-input-description")), u = aa(() => ie("feather-input-label")), c = aa(() => {
      const m = JSON.parse(JSON.stringify(o.attrs));
      return m["aria-invalid"] || (m["aria-invalid"] = !!r.value), Tm(Wc({}, m), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = pO(i.value), { validate: p } = Gs(f, cc(e, "modelValue"), e.label, e.schema, cc(e, "error"));
    return Wc({
      groupId: i,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: p,
      registerCheckbox: (m) => {
        m && f.value === i.value && (f.value = m);
      }
    }, js(o.attrs));
  },
  components: {
    InputSubText: Hs
  }
});
const $O = window.Vue.openBlock, IO = window.Vue.createElementBlock, km = window.Vue.createElementVNode;
var xO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const SO = {}, TO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PO = /* @__PURE__ */ km("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), kO = /* @__PURE__ */ km("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), NO = [
  PO,
  kO
];
function DO(e, o) {
  return $O(), IO("svg", TO, NO);
}
var OO = /* @__PURE__ */ xO(SO, [["render", DO]]);
var LO = Object.defineProperty, zO = Object.defineProperties, qO = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, RO = Object.prototype.hasOwnProperty, WO = Object.prototype.propertyIsEnumerable, Hp = (e, o, r) => o in e ? LO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, bo = (e, o) => {
  for (var r in o || (o = {}))
    RO.call(o, r) && Hp(e, r, o[r]);
  if (Yp)
    for (var r of Yp(o))
      WO.call(o, r) && Hp(e, r, o[r]);
  return e;
}, Nm = (e, o) => zO(e, qO(o));
const FO = window.Vue.defineComponent, dc = window.Vue.toRef, XO = window.Vue.computed, Gp = window.Vue.resolveComponent, jp = window.Vue.openBlock, Kp = window.Vue.createElementBlock, Qp = window.Vue.mergeProps, Jp = window.Vue.createVNode, ZO = window.Vue.normalizeClass, ew = window.Vue.withCtx, UO = window.Vue.createElementVNode, YO = window.Vue.toDisplayString, HO = window.Vue.createCommentVNode;
var GO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jO = Nm(bo(bo({}, id), Ks), {
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
}), KO = {
  "update:modelValue": (e) => !0
}, QO = FO({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: KO,
  props: jO,
  setup(e, o) {
    Qs(e), ad(e);
    const r = dc(e, "id"), i = XO(() => r.value ? r.value : ie("feather-textarea-label")), { validate: a } = Gs(i, dc(e, "modelValue"), e.label, e.schema, dc(e, "error"));
    return bo({
      inputId: i,
      incomingId: r,
      validate: a
    }, js(o.attrs));
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Nm(bo(bo({}, e), this.listeners), {
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
    InputSubText: Hs,
    InputWrapper: sd
  }
}), JO = ["maxlength"], e5 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function t5(e, o, r, i, a, u) {
  const c = Gp("InputWrapper"), f = Gp("InputSubText");
  return jp(), Kp("div", Qp(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Jp(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: ZO(["feather-textarea-content", e.contentCls])
    }, {
      default: ew(() => [
        UO("textarea", Qp(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, JO)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Jp(f, { id: e.descriptionId }, {
      right: ew(() => [
        e.maxlength ? (jp(), Kp("div", e5, YO(e.charCount), 1)) : HO("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Fc = /* @__PURE__ */ GO(QO, [["render", t5], ["__scopeId", "data-v-0648df5c"]]);
const n5 = window.Pinia.defineStore, el = n5("appStore", {
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
}), r5 = window.Vue.defineComponent, tw = window.Vue.toDisplayString, ms = window.Vue.createElementVNode, Vr = window.Vue.unref, ao = window.Vue.openBlock, nw = window.Vue.createBlock, gs = window.Vue.createCommentVNode, rw = window.Vue.createVNode, la = window.Vue.createElementBlock, o5 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const s5 = { class: "row" }, i5 = { class: "label" }, a5 = { class: "action-icons" }, l5 = { class: "icon-btn" }, u5 = {
  key: 0,
  class: "icon-btn"
}, c5 = {
  key: 1,
  class: "icon-btn"
}, d5 = {
  key: 0,
  class: "text"
}, f5 = window.Vue.watch, ow = window.Vue.ref, A5 = /* @__PURE__ */ r5({
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
    const o = e, r = el(), i = ow(!1), a = ow((p = o.memo) == null ? void 0 : p.body);
    f5(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const u = () => {
      i.value = !i.value;
    }, c = async () => {
      i.value = !1, await I3(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, a.value && a.value !== "" && (await $3(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, m) => (ao(), la("div", {
      class: o5([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ms("div", s5, [
        ms("div", i5, tw(e.label), 1),
        ms("div", a5, [
          ms("div", l5, [
            i.value ? gs("", !0) : (ao(), nw(Vr(Y), {
              key: 0,
              icon: Vr(OO),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          i.value ? (ao(), la("div", u5, [
            rw(Vr(Y), {
              icon: Vr(Io),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : gs("", !0),
          a.value && a.value != "" || i.value ? (ao(), la("div", c5, [
            rw(Vr(Y), {
              icon: Vr(Po),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : gs("", !0)
        ])
      ]),
      ms("div", null, [
        !i.value && a.value != null ? (ao(), la("div", d5, tw(a.value), 1)) : gs("", !0),
        i.value ? (ao(), nw(Vr(Fc), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (_) => a.value = _),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : gs("", !0)
      ])
    ], 2));
  }
});
const Oa = /* @__PURE__ */ re(A5, [["__scopeId", "data-v-3f44e250"]]), h5 = window.Vue.defineComponent, yr = window.Vue.unref, lo = window.Vue.createVNode, _s = window.Vue.toDisplayString, en = window.Vue.createElementVNode, sw = window.Vue.openBlock, iw = window.Vue.createElementBlock, aw = window.Vue.createCommentVNode, fc = window.Vue.createTextVNode, p5 = window.Vue.pushScopeId, w5 = window.Vue.popScopeId, Vd = (e) => (p5("data-v-02d1e7f0"), e = e(), w5(), e), v5 = {
  key: 0,
  class: "card"
}, m5 = { class: "row" }, g5 = {
  key: 0,
  class: "ack"
}, _5 = /* @__PURE__ */ Vd(() => /* @__PURE__ */ en("strong", null, " Duration: ", -1)), V5 = ["innerHTML"], y5 = /* @__PURE__ */ Vd(() => /* @__PURE__ */ en("strong", null, "First Event", -1)), b5 = /* @__PURE__ */ Vd(() => /* @__PURE__ */ en("strong", null, "Last Event", -1)), C5 = { class: "section memo-boxes" }, lw = window.Vue.ref, E5 = window.Vue.watch, M5 = /* @__PURE__ */ h5({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, i = lw(!1), a = lw(r.alarm), u = new Date().getTime();
    E5(r, () => {
      a.value = r.alarm, i.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (p) => {
      const v = await xv(p);
      v && (a.value = v);
    };
    return (p, v) => {
      var m, _, V, $, M;
      return a.value ? (sw(), iw("div", v5, [
        en("div", null, [
          en("div", m5, [
            lo(yr(Lo), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (P) => i.value = P),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            en("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                i.value = !i.value, c();
              })
            }, _s(a.value.nodeLabel) + " - " + _s(a.value.id), 1),
            lo(xm, {
              severity: (m = a.value) == null ? void 0 : m.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (sw(), iw("div", g5, [
              lo(yr(Y), {
                icon: yr(Io),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : aw("", !0)
          ]),
          en("div", null, [
            _5,
            fc(" " + _s(yr(Xa)(yr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          en("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, V5),
          en("div", null, [
            y5,
            fc(" - " + _s(yr(pn)(a.value.firstEventTime)), 1)
          ]),
          en("div", null, [
            b5,
            fc(" - " + _s(yr(pn)(a.value.lastEventTime)), 1)
          ]),
          en("div", C5, [
            lo(Oa, {
              id: (_ = a.value) == null ? void 0 : _.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (V = a.value) == null ? void 0 : V.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            lo(Oa, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (M = a.value) == null ? void 0 : M.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        lo(Sm, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : aw("", !0);
    };
  }
});
const B5 = /* @__PURE__ */ re(M5, [["__scopeId", "data-v-02d1e7f0"]]), $5 = window.Vue.openBlock, I5 = window.Vue.createElementBlock, Dm = window.Vue.createElementVNode;
var x5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const S5 = {}, T5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P5 = /* @__PURE__ */ Dm("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), k5 = /* @__PURE__ */ Dm("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), N5 = [
  P5,
  k5
];
function D5(e, o) {
  return $5(), I5("svg", T5, N5);
}
var Xc = /* @__PURE__ */ x5(S5, [["render", D5]]);
const O5 = window.Vue.watch, L5 = window.Vue.ref, z5 = window.Vue.onBeforeUnmount, Om = (e) => {
  const o = L5(!1), r = (i) => {
    i.keyCode === Q.ESCAPE && (i.preventDefault(), o.value = !o.value);
  };
  return O5(e, (i) => {
    i ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), z5(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, q5 = window.Vue.watch, Lm = (e) => {
  let o;
  q5(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, zm = window.Vue.watch, qm = window.Vue.onBeforeUnmount, Rm = window.Vue.nextTick, R5 = window.Vue.onMounted, Wm = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, La = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, Fm = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  qm(() => La(o, r)), R5(() => zm(e, (i) => {
    i ? Rm(() => {
      o = Wm(r);
    }) : La(o, r);
  }, { immediate: !0 }));
}, W5 = (e, o) => {
  let r;
  qm(() => La(r, o.value ? o.value.offsetParent : !1)), zm([e, o], ([i, a]) => {
    i && a ? Rm(() => {
      r = Wm(a.offsetParent);
    }) : a && La(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var F5 = Object.defineProperty, uw = Object.getOwnPropertySymbols, X5 = Object.prototype.hasOwnProperty, Z5 = Object.prototype.propertyIsEnumerable, cw = (e, o, r) => o in e ? F5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, U5 = (e, o) => {
  for (var r in o || (o = {}))
    X5.call(o, r) && cw(e, r, o[r]);
  if (uw)
    for (var r of uw(o))
      Z5.call(o, r) && cw(e, r, o[r]);
  return e;
};
const yd = window.Vue.defineComponent, qs = window.Vue.ref, Y5 = window.Vue.nextTick, Xm = window.Vue.openBlock, Zm = window.Vue.createElementBlock, bd = window.Vue.createElementVNode, H5 = window.Vue.renderSlot, G5 = window.Vue.resolveComponent, j5 = window.Vue.normalizeClass, K5 = window.Vue.withModifiers, Q5 = window.Vue.createVNode, dw = window.Vue.toRef, fw = window.Vue.computed, Aw = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Um = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const J5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, e9 = yd({
  props: J5,
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
      _ && _.focus ? Y5(() => {
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
}), t9 = /* @__PURE__ */ bd("div", { tabindex: "0" }, null, -1), n9 = {
  class: "focus-trap-content",
  ref: "content"
}, r9 = /* @__PURE__ */ bd("div", { tabindex: "0" }, null, -1);
function o9(e, o, r, i, a, u) {
  return Xm(), Zm("div", null, [
    t9,
    bd("div", n9, [
      H5(e.$slots, "default")
    ], 512),
    r9
  ]);
}
var Ym = /* @__PURE__ */ Um(e9, [["render", o9]]);
const s9 = yd({
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
    FeatherIcon: Y
  }
}), i9 = ["aria-label"];
function a9(e, o, r, i, a, u) {
  const c = G5("FeatherIcon");
  return Xm(), Zm("a", {
    href: "#",
    class: j5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = K5((f) => e.$emit("close"), ["prevent"]))
  }, [
    Q5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, i9);
}
var Hm = /* @__PURE__ */ Um(s9, [["render", a9], ["__scopeId", "data-v-fc0f3f00"]]);
const Gm = {
  title: "REQUIRED",
  close: "Close Dialog"
}, l9 = {
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
    default: () => Gm,
    validator: (e) => !!e.title
  }
}, u9 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
yd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: u9,
  props: l9,
  setup(e, o) {
    const r = Za(dw(e, "labels"), Gm), i = dw(e, "modelValue"), a = qs(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = fw(() => !!o.slots.footer), f = fw(() => ie("dialog-header"));
    e.relative ? W5(i, a) : Fm(i), Lm(i), Aw(Om(i), () => {
      u();
    });
    const p = qs(e.modelValue);
    return Aw(p, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), U5({ close: u, hasFooter: c, headerId: f, element: a, shown: p }, r);
  },
  components: {
    FocusTrap: Ym,
    DialogClose: Hm
  }
});
var c9 = Object.defineProperty, hw = Object.getOwnPropertySymbols, d9 = Object.prototype.hasOwnProperty, f9 = Object.prototype.propertyIsEnumerable, pw = (e, o, r) => o in e ? c9(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, tl = (e, o) => {
  for (var r in o || (o = {}))
    d9.call(o, r) && pw(e, r, o[r]);
  if (hw)
    for (var r of hw(o))
      f9.call(o, r) && pw(e, r, o[r]);
  return e;
};
const nl = window.Vue.defineComponent, ww = window.Vue.toRef, vw = window.Vue.watch, mw = window.Vue.ref, gw = window.Vue.resolveComponent, ua = window.Vue.openBlock, _w = window.Vue.createBlock, A9 = window.Vue.Teleport, Vw = window.Vue.createElementBlock, Ac = window.Vue.createVNode, yw = window.Vue.Transition, hc = window.Vue.withCtx, bw = window.Vue.createCommentVNode, h9 = window.Vue.withDirectives, p9 = window.Vue.normalizeStyle, w9 = window.Vue.normalizeClass, Cw = window.Vue.createElementVNode, v9 = window.Vue.renderSlot, m9 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var g9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jm = {
  title: "REQUIRED",
  close: "Close Dialog"
}, _9 = {
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
    default: () => jm,
    validator: (e) => !!e.title
  }
}, V9 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, y9 = nl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: V9,
  props: _9,
  setup(e, o) {
    const r = Za(ww(e, "labels"), jm), i = ww(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    Fm(i), Lm(i), vw(Om(i), () => {
      a();
    });
    const u = mw(), c = mw(!1);
    return vw(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), tl({ close: a, shown: c, isShown: i, element: u }, r);
  },
  components: {
    DialogClose: Hm,
    FocusTrap: Ym
  }
}), b9 = {
  key: 0,
  class: "drawer-container feather-styles"
}, C9 = {
  key: 0,
  class: "greyedOut"
}, E9 = ["aria-label"], M9 = { class: "slot" };
function B9(e, o, r, i, a, u) {
  const c = gw("dialog-close"), f = gw("focus-trap");
  return ua(), _w(A9, { to: "body" }, [
    e.modelValue ? (ua(), Vw("div", b9, [
      Ac(yw, { name: "greyOutShim" }, {
        default: hc(() => [
          e.modelValue ? (ua(), Vw("div", C9)) : bw("", !0)
        ]),
        _: 1
      }),
      Ac(yw, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (p) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (p) => e.shown = !1)
      }, {
        default: hc(() => [
          h9((ua(), _w(f, {
            enable: e.modelValue,
            style: p9({ width: e.width }),
            key: "sect",
            class: w9(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: hc(() => [
              Cw("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Cw("div", M9, [
                  v9(e.$slots, "default", {}, void 0, !0)
                ]),
                Ac(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, E9)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [m9, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : bw("", !0)
  ]);
}
var Km = /* @__PURE__ */ g9(y9, [["render", B9], ["__scopeId", "data-v-0a36e1dc"]]);
const $9 = tl({
  label: {
    type: String,
    required: !0
  }
}, Vm);
nl({
  name: "DrawerTab",
  props: $9,
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
      Tr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return ym(e);
  },
  components: {
    FeatherRipple: nr
  }
});
const I9 = tl({}, Em), x9 = Cm;
nl({
  emits: x9,
  model: bm,
  props: I9,
  setup(e, o) {
    return Mm(e, o);
  }
});
const S9 = tl({
  header: {
    type: String
  }
}, Bm);
nl({
  name: "DrawerTabContent",
  props: S9,
  setup(e) {
    return $m(e);
  },
  directives: {
    MenuFocusLoop: kx
  }
});
const T9 = window.Vue.defineComponent, Qm = window.Vue.createElementVNode, Ew = window.Vue.createVNode, P9 = window.Vue.renderList, k9 = window.Vue.Fragment, Vs = window.Vue.openBlock, pc = window.Vue.createElementBlock, Mw = window.Vue.createBlock, N9 = window.Vue.unref, D9 = window.Vue.withCtx, O9 = window.Vue.pushScopeId, L9 = window.Vue.popScopeId, z9 = (e) => (O9("data-v-c7c65659"), e = e(), L9(), e), q9 = { class: "content" }, R9 = /* @__PURE__ */ z9(() => /* @__PURE__ */ Qm("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), W9 = {
  key: 0,
  class: "situation-list"
}, wc = window.Vue.ref, Bw = window.Vue.watch, F9 = /* @__PURE__ */ T9({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, i = rn(), a = wc(r.visible), u = () => {
      let v = i.situations;
      r.situationId !== 0 && (v = i.situations.filter(
        (m) => m.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = wc(i.situations), f = wc(i.situations);
    Bw(r, () => {
      a.value = r.visible, u();
    }), Bw(
      () => i.situations,
      () => {
        u();
      }
    );
    const p = (v) => {
      f.value = v;
    };
    return (v, m) => (Vs(), Mw(N9(Km), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (_) => a.value = _),
        m[1] || (m[1] = (_) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: D9(() => [
        Qm("div", q9, [
          R9,
          Ew(Do, {
            list: c.value,
            isSituation: "",
            onFilteredList: p
          }, null, 8, ["list"]),
          f.value.length ? (Vs(), pc("div", W9, [
            (Vs(!0), pc(k9, null, P9(f.value, (_) => (Vs(), pc("div", {
              class: "card",
              key: _.id
            }, [
              Ew(zv, {
                onClick: (V) => o("situation-selected", _.id),
                "situation-info": _,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Vs(), Mw(Oo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Jm = /* @__PURE__ */ re(F9, [["__scopeId", "data-v-c7c65659"]]), X9 = window.Vue.defineComponent, $w = window.Vue.normalizeClass, _o = window.Vue.createElementVNode, ca = window.Vue.unref, Z9 = window.Vue.createVNode, da = window.Vue.toDisplayString, U9 = window.Vue.createTextVNode, Y9 = window.Vue.openBlock, H9 = window.Vue.createElementBlock, G9 = window.Vue.pushScopeId, j9 = window.Vue.popScopeId, K9 = (e) => (G9("data-v-64d0a9ea"), e = e(), j9(), e), Q9 = { class: "alarmInfo" }, J9 = { class: "alarm-title" }, eL = /* @__PURE__ */ K9(() => /* @__PURE__ */ _o("strong", null, " Duration: ", -1)), tL = { class: "description" }, nL = /* @__PURE__ */ X9({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, i = new Date().getTime();
    return (a, u) => (Y9(), H9("div", {
      class: $w(["alarm", { selected: r.selected }])
    }, [
      _o("div", Q9, [
        _o("div", {
          class: $w(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        Z9(ca(Lo), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        _o("div", J9, da(e.alarm.nodeLabel) + " - " + da(e.alarm.id), 1)
      ]),
      _o("div", null, [
        eL,
        U9(" " + da(ca(Xa)(ca(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      _o("div", tL, da(ca(Lv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Cd = /* @__PURE__ */ re(nL, [["__scopeId", "data-v-64d0a9ea"]]), rL = window.Vue.defineComponent, ba = window.Vue.createElementVNode, uo = window.Vue.unref, oL = window.Vue.toDisplayString, Iw = window.Vue.withCtx, vc = window.Vue.createVNode, sL = window.Vue.renderList, iL = window.Vue.Fragment, ys = window.Vue.openBlock, mc = window.Vue.createElementBlock, xw = window.Vue.createBlock, aL = window.Vue.pushScopeId, lL = window.Vue.popScopeId, uL = (e) => (aL("data-v-4bc80d4b"), e = e(), lL(), e), cL = { class: "content" }, dL = { class: "header" }, fL = /* @__PURE__ */ uL(() => /* @__PURE__ */ ba("h4", null, "ADD ALARMS", -1)), AL = {
  key: 0,
  class: "alarms-list"
}, fa = window.Vue.ref, Sw = window.Vue.watch, hL = /* @__PURE__ */ rL({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, i = rn(), a = fa(r.visible), u = fa([]), c = fa(["all"]), f = fa(i.unassignedAlarms);
    Sw(r, () => {
      a.value = r.visible, u.value = [], f.value = i.unassignedAlarms;
    }), Sw(
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
    return (V, $) => (ys(), xw(uo(Km), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        $[0] || ($[0] = (M) => a.value = M),
        $[1] || ($[1] = (M) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Iw(() => [
        ba("div", cL, [
          ba("div", dL, [
            fL,
            vc(uo(le), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Iw(() => [
                ba("span", null, "Add " + oL(uo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          vc(Do, {
            list: uo(i).unassignedAlarms,
            onFilteredList: _
          }, null, 8, ["list"]),
          f.value.length ? (ys(), mc("div", AL, [
            (ys(!0), mc(iL, null, sL(f.value, (M) => (ys(), mc("div", {
              class: "card",
              key: M.id
            }, [
              vc(Cd, {
                selected: uo(de.exports.includes)(uo(u), M.id),
                alarm: M,
                onSelectedAlarm: p
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ys(), xw(Oo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const pL = /* @__PURE__ */ re(hL, [["__scopeId", "data-v-4bc80d4b"]]), wL = window.Vue.openBlock, vL = window.Vue.createElementBlock, e1 = window.Vue.createElementVNode;
var mL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const gL = {}, _L = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VL = /* @__PURE__ */ e1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), yL = /* @__PURE__ */ e1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), bL = [
  VL,
  yL
];
function CL(e, o) {
  return wL(), vL("svg", _L, bL);
}
var Tw = /* @__PURE__ */ mL(gL, [["render", CL]]);
const EL = window.Vue.defineComponent, bt = window.Vue.createElementVNode, He = window.Vue.unref, tt = window.Vue.createVNode, bs = window.Vue.withCtx, ML = window.Vue.renderList, Pw = window.Vue.Fragment, Cs = window.Vue.openBlock, Aa = window.Vue.createElementBlock, BL = window.Vue.createBlock, $L = window.Vue.pushScopeId, IL = window.Vue.popScopeId, zo = (e) => ($L("data-v-524b0835"), e = e(), IL(), e), xL = { class: "container" }, SL = { class: "header" }, TL = /* @__PURE__ */ zo(() => /* @__PURE__ */ bt("div", { class: "title" }, "Alarms", -1)), PL = /* @__PURE__ */ zo(() => /* @__PURE__ */ bt("span", null, "Add Alarms", -1)), kL = { class: "alarms-container" }, NL = { class: "filters" }, DL = { class: "list" }, OL = { class: "row actions" }, LL = /* @__PURE__ */ zo(() => /* @__PURE__ */ bt("span", null, "Clear", -1)), zL = /* @__PURE__ */ zo(() => /* @__PURE__ */ bt("span", null, "Acknowledge", -1)), qL = /* @__PURE__ */ zo(() => /* @__PURE__ */ bt("span", null, "Move", -1)), RL = /* @__PURE__ */ zo(() => /* @__PURE__ */ bt("span", null, "Remove", -1)), WL = { class: "section" }, FL = {
  key: 0,
  class: "alarm-list"
}, ha = window.Vue.ref, XL = window.Vue.watch, ZL = window.Vue.reactive, UL = window.Vue.markRaw, YL = /* @__PURE__ */ EL({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = UL({
      Add: Ja,
      Delete: Tw,
      MarkComplete: Da,
      CheckCircle: Io,
      ExitToApp: Xc
    }), i = el(), a = rn(), u = ha(!1), c = ha(["all"]), f = ha(!1), p = ha(!1), v = ZL({
      selectedAlarms: [],
      alarms: o.alarms
    });
    XL(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const m = (S) => {
      v.selectedAlarms.includes(S) ? de.exports.remove(v.selectedAlarms, (q) => q == S) : v.selectedAlarms.push(S);
    }, _ = async (S) => {
      v.selectedAlarms.length ? (await b3(v.selectedAlarms, S), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, V = () => v.selectedAlarms.length === o.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), $ = async () => {
      V() && (await Np(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, M = async (S) => {
      V() && (await Np(
        o.situationId,
        v.selectedAlarms
      ) ? await P(S, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, P = async (S, q) => {
      q.length ? await mm(S, q) ? a.getSituation(S) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, D = async (S) => {
      await P(o.situationId, S), p.value = !1;
    }, T = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    }, N = (S) => {
      v.alarms = S;
    };
    return (S, q) => (Cs(), Aa(Pw, null, [
      bt("div", xL, [
        bt("div", SL, [
          TL,
          tt(He(le), {
            class: "add-alarms-btn",
            onClick: q[0] || (q[0] = (I) => p.value = !0)
          }, {
            default: bs(() => [
              tt(He(Y), {
                icon: He(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              PL
            ]),
            _: 1
          })
        ]),
        bt("div", kL, [
          bt("div", NL, [
            tt(Do, {
              list: o.alarms,
              onFilteredList: N,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          bt("div", DL, [
            bt("div", OL, [
              tt(He(Lo), {
                modelValue: u.value,
                "onUpdate:modelValue": q[1] || (q[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              tt(He(le), {
                onClick: q[2] || (q[2] = () => _("clear"))
              }, {
                default: bs(() => [
                  tt(He(Y), {
                    icon: He(Da),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  LL
                ]),
                _: 1
              }),
              tt(He(le), {
                onClick: q[3] || (q[3] = () => _("ack"))
              }, {
                default: bs(() => [
                  tt(He(Y), {
                    icon: He(Io),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  zL
                ]),
                _: 1
              }),
              tt(He(le), { onClick: T }, {
                default: bs(() => [
                  tt(He(Y), {
                    icon: He(Xc),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  qL
                ]),
                _: 1
              }),
              tt(He(le), { onClick: $ }, {
                default: bs(() => [
                  tt(He(Y), {
                    icon: He(Tw),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  RL
                ]),
                _: 1
              })
            ]),
            bt("div", WL, [
              v.alarms.length > 0 ? (Cs(), Aa("div", FL, [
                (Cs(!0), Aa(Pw, null, ML(v.alarms, (I) => (Cs(), Aa("div", {
                  key: I.id
                }, [
                  tt(B5, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: m
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Cs(), BL(Oo, { key: 1 }))
            ])
          ])
        ])
      ]),
      tt(Jm, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: M,
        onDrawerClosed: q[4] || (q[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      tt(pL, {
        visible: p.value,
        onAlarmsSelected: D,
        onDrawerAlarmsClosed: q[5] || (q[5] = () => p.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const HL = /* @__PURE__ */ re(YL, [["__scopeId", "data-v-524b0835"]]), GL = window.Vue.defineComponent, Ht = window.Vue.createVNode, Vt = window.Vue.unref, gc = window.Vue.normalizeClass, pa = window.Vue.toDisplayString, co = window.Vue.openBlock, fo = window.Vue.createElementBlock, _c = window.Vue.createCommentVNode, jL = window.Vue.withCtx, Qt = window.Vue.createElementVNode, KL = window.Vue.Fragment, QL = window.Vue.pushScopeId, JL = window.Vue.popScopeId, ez = (e) => (QL("data-v-8ed6502c"), e = e(), JL(), e), tz = { class: "section" }, nz = { class: "action-section" }, rz = {
  key: 0,
  class: "btn-row"
}, oz = { key: 0 }, sz = { key: 1 }, iz = {
  key: 0,
  class: "situation-detail"
}, az = { class: "situation-info" }, lz = { class: "id" }, uz = ["innerHTML"], cz = /* @__PURE__ */ ez(() => /* @__PURE__ */ Qt("p", null, null, -1)), dz = { class: "boxes" }, fz = { class: "parameters" }, Az = { class: "section memo-boxes" }, hz = { key: 0 }, kw = window.Vue.ref, pz = window.Vue.watch, wz = /* @__PURE__ */ GL({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = el(), i = rn(), a = Ce.REJECTED, u = Nn(), c = kw(o.situationInfo.status), f = kw(o.situationInfo);
    pz(o, () => {
      c.value = o.situationInfo.status || "", f.value = o.situationInfo;
    });
    const p = async (v) => {
      var _;
      await vm(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        v.toLowerCase()
      ) ? (c.value = v, i.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, m) => {
      var _, V, $, M, P, D, T, N, S, q, I, z;
      return co(), fo(KL, null, [
        Qt("div", tz, [
          Qt("div", nz, [
            Ht(Sm, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Vt(u).allowSave ? (co(), fo("div", rz, [
              Ht(Vt(le), {
                class: gc(["btn", { rejected: c.value == Vt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (O) => p(Vt(a)))
              }, {
                default: jL(() => [
                  Ht(Vt(Y), {
                    icon: Vt(Sv),
                    "aria-hidden": "true",
                    class: gc(["icon reject", { rejected: c.value == Vt(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == Vt(a) ? (co(), fo("span", oz, pa(Vt(a)), 1)) : (co(), fo("span", sz, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : _c("", !0)
          ]),
          f.value ? (co(), fo("div", iz, [
            Qt("div", {
              class: gc(["severity-line", [`${(V = (_ = f.value) == null ? void 0 : _.severity) == null ? void 0 : V.toLowerCase()}-bg dark`]])
            }, null, 2),
            Qt("div", az, [
              Qt("div", lz, [
                Qt("div", null, " Situation - " + pa(($ = f.value) == null ? void 0 : $.id) + " - " + pa(f.value.alarms.length) + " alarm(s) affects " + pa(Vt(de.exports.size)(Vt(de.exports.groupBy)((M = f.value) == null ? void 0 : M.alarms, "nodeId"))) + " node(s) ", 1),
                Ht(xm, {
                  severity: (P = f.value) == null ? void 0 : P.severity
                }, null, 8, ["severity"])
              ]),
              Qt("span", {
                innerHTML: f.value.description
              }, null, 8, uz),
              cz,
              Qt("div", dz, [
                Ht(nc, {
                  label: "First Event",
                  info: Vt(pn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                Ht(nc, {
                  label: "Last Event",
                  info: Vt(pn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                Ht(nc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Qt("div", fz, [
              Ht(ID, {
                alarms: (D = f.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : _c("", !0),
          Qt("div", Az, [
            Ht(Oa, {
              id: (T = f.value) == null ? void 0 : T.id,
              situationId: (N = f.value) == null ? void 0 : N.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (S = f.value) == null ? void 0 : S.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ht(Oa, {
              id: (q = f.value) == null ? void 0 : q.id,
              situationId: (I = f.value) == null ? void 0 : I.id,
              label: "Journal Memo",
              type: "journal",
              memo: (z = f.value) == null ? void 0 : z.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (co(), fo("div", hz, [
          Ht(HL, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : _c("", !0)
      ], 64);
    };
  }
});
const vz = /* @__PURE__ */ re(wz, [["__scopeId", "data-v-8ed6502c"]]);
var mz = Object.defineProperty, gz = Object.defineProperties, _z = Object.getOwnPropertyDescriptors, Nw = Object.getOwnPropertySymbols, Vz = Object.prototype.hasOwnProperty, yz = Object.prototype.propertyIsEnumerable, Dw = (e, o, r) => o in e ? mz(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Zc = (e, o) => {
  for (var r in o || (o = {}))
    Vz.call(o, r) && Dw(e, r, o[r]);
  if (Nw)
    for (var r of Nw(o))
      yz.call(o, r) && Dw(e, r, o[r]);
  return e;
}, bz = (e, o) => gz(e, _z(o));
const t1 = window.Vue.defineComponent, $r = window.Vue.resolveComponent, Ca = window.Vue.openBlock, Ow = window.Vue.createBlock, Ea = window.Vue.mergeProps, Ir = window.Vue.withCtx, n1 = window.Vue.createElementBlock, Cz = window.Vue.Fragment, Ez = window.Vue.renderList, Mz = window.Vue.createTextVNode, Bz = window.Vue.toDisplayString, $z = window.Vue.computed, Lw = window.Vue.toRef, Es = window.Vue.createVNode, zw = window.Vue.toHandlers, Iz = window.Vue.renderSlot, xz = window.Vue.normalizeClass, Sz = window.Vue.createElementVNode;
var r1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Tz = t1({
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
    FeatherListItem: ei
  }
});
function Pz(e, o, r, i, a, u) {
  const c = $r("FeatherListItem"), f = $r("FeatherList");
  return Ca(), Ow(f, Ea(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Ir(() => [
      (Ca(!0), n1(Cz, null, Ez(e.options, (p, v) => (Ca(), Ow(c, {
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
        default: Ir(() => [
          Mz(Bz(p[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var kz = /* @__PURE__ */ r1(Tz, [["render", Pz], ["__scopeId", "data-v-eae820da"]]);
const Nz = bz(Zc(Zc({}, id), Ks), {
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
}), Dz = {
  "update:modelValue": (e) => !0
}, Oz = t1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Dz,
  props: Nz,
  setup(e, o) {
    Qs(e), ad(e);
    const r = $z(() => ie("feather-select-input")), { validate: i } = Gs(r, Lw(e, "modelValue"), e.label, e.schema, Lw(e, "error"));
    return Zc({
      inputId: r,
      validate: i
    }, js(o.attrs));
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
    icon: () => ja
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
      Tr(this.delayTimeout), this.delayTimeout = Sr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: sd,
    InputSubText: Hs,
    FeatherMenu: jv,
    List: kz,
    FeatherIcon: Y
  }
});
function Lz(e, o, r, i, a, u) {
  const c = $r("FeatherIcon"), f = $r("InputWrapper"), p = $r("List"), v = $r("FeatherMenu"), m = $r("InputSubText");
  return Ca(), n1("div", Ea(e.inherittedAttrs, { class: "feather-select-container" }), [
    Es(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Ir((_) => [
        Es(f, Ea({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, _.attrs, zw(_.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Ir(() => [
            Iz(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Ir(() => [
            Es(c, {
              class: xz(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Ir(() => [
            Sz("input", Ea(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, zw(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Ir(() => [
        Es(p, {
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
    Es(m, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var zz = /* @__PURE__ */ r1(Oz, [["render", Lz], ["__scopeId", "data-v-ecb32d90"]]);
const qz = window.Vue.openBlock, Rz = window.Vue.createElementBlock, o1 = window.Vue.createElementVNode;
var Wz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Fz = {}, Xz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Zz = /* @__PURE__ */ o1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), Uz = /* @__PURE__ */ o1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Yz = [
  Zz,
  Uz
];
function Hz(e, o) {
  return qz(), Rz("svg", Xz, Yz);
}
var Gz = /* @__PURE__ */ Wz(Fz, [["render", Hz]]);
const Ma = window.Vue.openBlock, Uc = window.Vue.createElementBlock, s1 = window.Vue.createElementVNode, jz = window.Vue.defineComponent, br = window.Vue.ref, Kz = window.Vue.provide, qw = window.Vue.computed, Qz = window.Vue.onUnmounted, Rw = window.Vue.toRef, Jz = window.Vue.resolveComponent, e6 = window.Vue.Fragment, t6 = window.Vue.createBlock, n6 = window.Vue.Teleport, Ww = window.Vue.createVNode, r6 = window.Vue.Transition, o6 = window.Vue.withCtx, s6 = window.Vue.normalizeClass, i6 = window.Vue.normalizeStyle, a6 = window.Vue.toDisplayString, l6 = window.Vue.createCommentVNode, u6 = window.Vue.renderSlot, Vc = window.Vue.nextTick;
var i1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const c6 = {}, d6 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, f6 = /* @__PURE__ */ s1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), A6 = [
  f6
];
function h6(e, o) {
  return Ma(), Uc("svg", d6, A6);
}
var p6 = /* @__PURE__ */ i1(c6, [["render", h6]]), Fe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Fe || {}), Pn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Pn || {});
const w6 = (e, o, r, i = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + i && c.push(Fe.top), a >= o.height + i && c.push(Fe.bottom);
  const f = [];
  u >= o.width + i && f.push(Fe.right), e.left >= o.width + i && f.push(Fe.left);
  let p = [...f, ...c];
  return (r === Fe.top || r === Fe.bottom) && (p = [...c, ...f]), p.indexOf(r) > -1 ? r : p.length ? p[0] : r;
}, v6 = (e, o, r, i, a = 28) => {
  if (e === Fe.left || e === Fe.right)
    return Pn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], p = u, v = c + o.width / 2, m = r.width - a, _ = r.width / 2;
  return p >= _ && v >= _ && f.push(Pn.center), v >= m && f.push(Pn.left), p >= m && f.push(Pn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, m6 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Fe.top
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
}, g6 = jz({
  props: m6,
  setup(e) {
    const o = br(!1), r = br(!1), i = ie("feather-tooltip-trigger"), a = ie("feather-tooltip"), u = "data-feather-tooltip";
    Kz("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Tr(c), o.value || (c = Sr(P, e.enterDelay));
    }, p = () => {
      Tr(c), c = Sr(D, e.exitDelay);
    }, v = (ve) => {
      ve.keyCode === Q.ESCAPE && (ve.preventDefault(), D(!0));
    }, m = qw(() => ({
      [u]: i,
      "aria-describedby": a
    })), _ = {
      mouseenter: f,
      mouseleave: p,
      focus: f,
      blur: p,
      keydown: v
    }, V = br(document), $ = Gv(V, () => D(!0));
    Qz(() => D(!0));
    const M = () => document.getElementById(a), P = () => {
      r.value = !1, o.value = !0, Vc(() => {
        const ve = M();
        fe(ve), o.value = !1, Vc(() => {
          r.value = !0, o.value = !0, $.value = !0;
        });
      });
    }, D = (ve = !1) => {
      z.value = "", I.value = "", O.value = "", F.value = "", o.value = !1, ve && (r.value = !1), $.value = !1;
    }, T = Rw(e, "placement"), N = Rw(e, "pointerAlignment"), S = 8, q = 24, I = br(""), z = br(""), O = br(""), F = br(""), ge = qw(() => F.value ? "p-" + F.value : !1), fe = (ve) => {
      const ye = document.querySelector(`[${u}=${i}]`);
      if (!ye) {
        console.log("trigger not found");
        return;
      }
      Vc(() => {
        const Ee = ye.getBoundingClientRect(), Ie = ve.getBoundingClientRect(), Ae = w6(Ee, Ie, T.value, S), Le = v6(Ae, Ee, Ie, N.value, q);
        O.value = Le.toString(), F.value = Ae.toString();
        let ze = 0, Ke = 0;
        if ((Ae === Fe.left || Ae === Fe.right) && (ze = Ee.top + Ee.height / 2 - Ie.height / 2, Ae === Fe.left && (Ke = Ee.left - Ie.width - S), Ae === Fe.right && (Ke = Ee.right)), Ae === Fe.top || Ae === Fe.bottom) {
          ze = Ee.top - Ie.height - S, Ae === Fe.bottom && (ze = Ee.bottom);
          const Ro = Ee.left + Ee.width / 2;
          switch (Le) {
            case Pn.center:
              Ke = Ro - Ie.width / 2;
              break;
            case Pn.left:
              Ke = Ro - q;
              break;
            case Pn.right:
              Ke = Ro - Ie.width + q;
              break;
          }
        }
        I.value = ze.toString() + "px", z.value = Ke.toString() + "px";
      });
    };
    return {
      attrs: m,
      listeners: _,
      show: o,
      animate: r,
      alignmentClass: O,
      placementClass: ge,
      top: I,
      left: z,
      tooltipID: a
    };
  },
  components: {
    Pointer: p6
  }
}), _6 = ["id"];
function V6(e, o, r, i, a, u) {
  const c = Jz("Pointer");
  return Ma(), Uc(e6, null, [
    (Ma(), t6(n6, { to: "body" }, [
      Ww(r6, { css: e.animate }, {
        default: o6(() => [
          e.show ? (Ma(), Uc("div", {
            key: 0,
            class: s6(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: i6({ left: e.left, top: e.top })
          }, [
            s1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, a6(e.title), 9, _6),
            Ww(c, { class: "tooltip-pointer" })
          ], 6)) : l6("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    u6(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Fw = /* @__PURE__ */ i1(g6, [["render", V6], ["__scopeId", "data-v-3da6b22e"]]);
const y6 = window.Vue.defineComponent, yc = window.Vue.normalizeStyle, bc = window.Vue.createElementVNode, Ms = window.Vue.unref, Xw = window.Vue.toHandlers, Zw = window.Vue.mergeProps, Uw = window.Vue.withCtx, Yw = window.Vue.createVNode, b6 = window.Vue.renderList, C6 = window.Vue.Fragment, Bs = window.Vue.openBlock, $s = window.Vue.createElementBlock, Hw = window.Vue.normalizeClass, Gw = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const E6 = { class: "row" }, M6 = /* @__PURE__ */ y6({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), i = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Bs(), $s("div", E6, [
      bc("div", {
        class: "line-gray",
        style: yc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Yw(Ms(Fw), {
        title: Ms(pn)(e.alarm.firstEventTime)
      }, {
        default: Uw(({ attrs: f, on: p }) => [
          bc("div", Zw({ class: "circle" }, f, Xw(p), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Bs(!0), $s(C6, null, b6(o.events, (f, p) => (Bs(), $s("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[p + 1] ? (Bs(), $s("div", {
          key: 0,
          class: Hw(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: yc({
            width: i(f.createTime, o.events[p + 1].createTime) + "px"
          })
        }, null, 6)) : Gw("", !0),
        Yw(Ms(Fw), {
          title: Ms(pn)(e.alarm.firstEventTime)
        }, {
          default: Uw(({ attrs: v, on: m }) => [
            o.events[p + 1] ? (Bs(), $s("div", Zw({ key: 0 }, v, Xw(m), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Gw("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      bc("div", {
        class: Hw(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: yc({
          width: i(e.events[e.events.length - 1].createTime, Ms(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const B6 = /* @__PURE__ */ re(M6, [["__scopeId", "data-v-3341d12d"]]), $6 = window.Vue.openBlock, I6 = window.Vue.createElementBlock, a1 = window.Vue.createElementVNode;
var x6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const S6 = {}, T6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P6 = /* @__PURE__ */ a1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), k6 = /* @__PURE__ */ a1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), N6 = [
  P6,
  k6
];
function D6(e, o) {
  return $6(), I6("svg", T6, N6);
}
var O6 = /* @__PURE__ */ x6(S6, [["render", D6]]);
const L6 = window.Vue.defineComponent, Yc = window.Vue.createElementVNode, z6 = window.Vue.renderList, jw = window.Vue.Fragment, Cc = window.Vue.openBlock, Ec = window.Vue.createElementBlock, q6 = window.Vue.normalizeClass, R6 = window.Vue.unref, Kw = window.Vue.toDisplayString, W6 = window.Vue.pushScopeId, F6 = window.Vue.popScopeId, X6 = (e) => (W6("data-v-2e087f7b"), e = e(), F6(), e), Z6 = /* @__PURE__ */ X6(() => /* @__PURE__ */ Yc("strong", null, "Events:", -1)), U6 = /* @__PURE__ */ L6({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (Cc(), Ec(jw, null, [
      Z6,
      (Cc(!0), Ec(jw, null, z6(o.events, (a) => (Cc(), Ec("div", {
        class: "event-description",
        key: a.id
      }, [
        Yc("div", {
          class: q6(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Yc("div", null, Kw(R6(pn)(a.createTime)) + " - " + Kw(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const Y6 = /* @__PURE__ */ re(U6, [["__scopeId", "data-v-2e087f7b"]]), H6 = window.Vue.defineComponent, G6 = window.Vue.normalizeClass, yt = window.Vue.createElementVNode, Ao = window.Vue.toDisplayString, lt = window.Vue.unref, ho = window.Vue.createVNode, l1 = window.Vue.createTextVNode, j6 = window.Vue.renderList, Qw = window.Vue.Fragment, In = window.Vue.openBlock, Cr = window.Vue.createElementBlock, Jw = window.Vue.createBlock, wa = window.Vue.createCommentVNode, K6 = window.Vue.normalizeStyle, Q6 = window.Vue.pushScopeId, J6 = window.Vue.popScopeId, e8 = (e) => (Q6("data-v-01717d0d"), e = e(), J6(), e), t8 = { class: "section detail" }, n8 = { class: "id" }, r8 = {
  key: 0,
  class: "section"
}, o8 = /* @__PURE__ */ e8(() => /* @__PURE__ */ yt("div", { class: "id" }, "Alarms", -1)), s8 = { class: "action-btns" }, i8 = { class: "zoom" }, a8 = /* @__PURE__ */ l1(" Zoom "), l8 = { class: "times" }, u8 = {
  key: 0,
  class: "timeline-container"
}, c8 = { class: "alarm-id" }, d8 = {
  key: 0,
  class: "panel"
}, Gn = window.Vue.ref, f8 = window.Vue.watch, A8 = /* @__PURE__ */ H6({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var q, I;
    const o = e, r = rn(), i = Gn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Gn(a[0]), c = Gn(o.width), f = Gn(o.width), p = Gn(new Date().getTime()), v = () => {
      var z, O;
      if (!o.situation.events) {
        const F = (O = (z = o.situation) == null ? void 0 : z.alarms) == null ? void 0 : O.map((ge) => ge.id);
        r.getEvents(o.situation.id, F);
      }
    };
    v();
    const m = () => (p.value = new Date().getTime(), c.value / (Number(p.value) - Number(V.value))), _ = Gn(o.situation.alarms), V = Gn(
      ((I = de.exports.minBy((q = o.situation) == null ? void 0 : q.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), $ = Gn(m());
    f8(o, () => {
      var z, O;
      V.value = ((O = de.exports.minBy((z = o.situation) == null ? void 0 : z.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || new Date().getTime(), v(), c.value = f.value, $.value = m(), _.value = o.situation.alarms, u.value = a[0];
    });
    const M = (z) => {
      if ((z == null ? void 0 : z.id) === 1 && (_.value = o.situation.alarms), (z == null ? void 0 : z.id) === 2) {
        const O = de.exports.groupBy(_.value, "severity"), F = [
          ...O.CRITICAL || [],
          ...O.MAJOR || [],
          ...O.MINOR || [],
          ...O.WARNING || [],
          ...O.NORMAL || [],
          ...O.CLEARED || [],
          ...O.INDETERMINATE || []
        ];
        _.value = F.filter((ge) => ge);
      }
      if ((z == null ? void 0 : z.id) === 3) {
        const O = de.exports.reverse(
          de.exports.sortBy(
            o.situation.alarms,
            (F) => Number(F.lastEventTime) - Number(F.firstEventTime)
          )
        );
        _.value = O;
      }
    }, P = () => {
      c.value += 100, $.value = m();
    }, D = () => {
      c.value -= 100, $.value = m();
    }, T = () => {
      c.value = f.value, $.value = m();
    }, N = (z) => {
      i.value = z;
    }, S = () => {
      i.value = 0;
    };
    return (z, O) => {
      var F, ge;
      return In(), Cr(Qw, null, [
        yt("div", t8, [
          yt("div", {
            class: G6(["severity-line", [`${(ge = (F = o.situation) == null ? void 0 : F.severity) == null ? void 0 : ge.toLowerCase()}-bg dark`]])
          }, null, 2),
          yt("div", null, [
            yt("div", n8, "Situation " + Ao(o.situation.id), 1),
            yt("div", null, " Duration: " + Ao(lt(Xa)(p.value, new Date(V.value))), 1)
          ])
        ]),
        _.value && _.value.length > 0 ? (In(), Cr("div", r8, [
          o8,
          yt("div", s8, [
            ho(lt(zz), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                O[0] || (O[0] = (fe) => u.value = fe),
                M
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            yt("div", i8, [
              a8,
              yt("div", null, [
                ho(lt(Y), {
                  icon: lt(Gz),
                  class: "zoom-icon",
                  onClick: P
                }, null, 8, ["icon"]),
                ho(lt(Y), {
                  icon: lt(cm),
                  class: "zoom-icon",
                  onClick: T
                }, null, 8, ["icon"]),
                ho(lt(Y), {
                  icon: lt(O6),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (In(), Cr("div", {
            key: 0,
            class: "alarms",
            style: K6({
              width: f.value + 50 + "px"
            })
          }, [
            yt("div", l8, [
              yt("div", null, Ao(lt(pn)(V.value)), 1),
              yt("div", null, Ao(lt(pn)(p.value)), 1)
            ]),
            e.situation.events ? (In(), Cr("div", u8, [
              (In(!0), Cr(Qw, null, j6(_.value, (fe) => (In(), Cr("div", {
                class: "timeline",
                key: fe.id
              }, [
                yt("div", c8, [
                  l1(Ao(fe.nodeLabel) + " - " + Ao(fe.id) + " ", 1),
                  i.value === fe.id ? (In(), Jw(lt(Y), {
                    key: 0,
                    icon: lt(ja),
                    class: "zoom-icon expand",
                    onClick: S
                  }, null, 8, ["icon"])) : (In(), Jw(lt(Y), {
                    key: 1,
                    icon: lt(Rv),
                    class: "zoom-icon expand",
                    onClick: () => N(fe.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                ho(B6, {
                  alarm: fe,
                  proportion: $.value,
                  "min-start": V.value,
                  events: o.situation.events[fe.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === fe.id ? (In(), Cr("div", d8, [
                  ho(Y6, {
                    events: o.situation.events[fe.id]
                  }, null, 8, ["events"])
                ])) : wa("", !0)
              ]))), 128))
            ])) : wa("", !0)
          ], 4)) : wa("", !0)
        ])) : wa("", !0)
      ], 64);
    };
  }
});
const h8 = /* @__PURE__ */ re(A8, [["__scopeId", "data-v-01717d0d"]]), p8 = window.Vue.openBlock, w8 = window.Vue.createElementBlock, v8 = window.Vue.createElementVNode;
var m8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const g8 = {}, _8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, V8 = /* @__PURE__ */ v8("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), y8 = [
  V8
];
function b8(e, o) {
  return p8(), w8("svg", _8, y8);
}
var Mo = /* @__PURE__ */ m8(g8, [["render", b8]]);
const u1 = window.Vue.defineComponent, Mc = window.Vue.ref, C8 = window.Vue.toRef, Bc = window.Vue.inject, ev = window.Vue.watch, E8 = window.Vue.nextTick, tv = window.Vue.openBlock, nv = window.Vue.createElementBlock, $c = window.Vue.createElementVNode, M8 = window.Vue.normalizeClass, rv = window.Vue.renderSlot, ov = window.Vue.createCommentVNode, Ic = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var B8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const $8 = {
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
}, I8 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, x8 = u1({
  emits: I8,
  props: $8,
  setup(e, o) {
    const r = Mc(), i = Mc(!1), a = Mc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = C8(e, "modelValue"), f = Bc("queueSnackbar", !1), p = Bc("unqueueSnackbar", !1), v = Bc("nextSnackbar", () => {
    }), m = (P, D) => {
      let T, N, S = D;
      const q = () => {
        !T || (Tr(T), T = 0, S -= Date.now() - N);
      }, I = () => {
        T || (N = Date.now(), T = Sr(P, S));
      };
      return I(), { pause: q, resume: I };
    }, _ = () => {
      i.value = !1, o.emit("closed"), v && v();
    }, V = (P) => {
      P.keyCode === Q.ESCAPE && (a.value = !1);
    }, $ = () => {
      r.value.pause();
    }, M = () => {
      a.value && r.value.resume();
    };
    return ev(c, (P) => {
      P ? E8(() => {
        f === !1 ? a.value = P : f(u, a);
      }) : p === !1 ? a.value = P : p(u);
    }, { immediate: !0 }), ev(a, (P) => {
      P ? (i.value = !0, r.value = m(() => {
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
}), S8 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, T8 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, P8 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, k8 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function N8(e, o, r, i, a, u) {
  return e.modelValue || e.contentShow ? (tv(), nv("div", S8, [
    $c("div", {
      class: M8(["feather-snackbar", {
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
      $c("div", T8, [
        e.contentShow ? (tv(), nv("div", P8, [
          rv(e.$slots, "default", {}, void 0, !0)
        ])) : ov("", !0)
      ]),
      $c("div", k8, [
        rv(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : ov("", !0);
}
var rl = /* @__PURE__ */ B8(x8, [["render", N8], ["__scopeId", "data-v-5cf64a62"]]);
const D8 = {
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
  props: D8,
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
    return Ic("queueSnackbar", i), Ic("unqueueSnackbar", a), Ic("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: i,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const O8 = window.Vue.defineComponent, $e = window.Vue.unref, ut = window.Vue.createVNode, Us = window.Vue.createElementVNode, kt = window.Vue.withCtx, po = window.Vue.openBlock, sv = window.Vue.createBlock, L8 = window.Vue.createCommentVNode, ol = window.Vue.createTextVNode, va = window.Vue.createElementBlock, iv = window.Vue.toDisplayString, z8 = window.Vue.pushScopeId, q8 = window.Vue.popScopeId, Ed = (e) => (z8("data-v-9a7d0795"), e = e(), q8(), e), R8 = { id: "cont" }, W8 = { class: "btns-navigation" }, F8 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ Us("span", null, "Situation List", -1)), X8 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ Us("span", null, "Show Previous Situation ", -1)), Z8 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ Us("span", null, "Show Next Situation", -1)), U8 = { key: 1 }, Y8 = {
  key: 0,
  class: "detail"
}, H8 = /* @__PURE__ */ ol("Details"), G8 = /* @__PURE__ */ ol("Metrics"), j8 = {
  key: 1,
  class: "noSituation"
}, K8 = /* @__PURE__ */ ol("dismiss"), wo = window.Vue.ref, av = window.Vue.watch, Q8 = window.Vue.onMounted, J8 = window.VueRouter.useRoute, e4 = /* @__PURE__ */ O8({
  __name: "SituationDetail",
  setup(e) {
    const o = vn(), r = J8(), i = parseInt(r.params.id), a = wo(i), u = rn(), c = el();
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const f = wo(), p = wo(), v = wo(!0), m = wo(
      u.filteredSituations.findIndex((M) => M === a.value)
    ), _ = wo(!1);
    av(
      () => u.situationDetail,
      () => {
        f.value = u.situationDetail, v.value = !1, u.getUnassignedAlarms();
      }
    ), Q8(() => {
      var P;
      const M = ((P = document.getElementById("cont")) == null ? void 0 : P.getBoundingClientRect().width) || 1200;
      p.value = M - 90;
    });
    const V = () => {
      o.push({
        name: "situations"
      });
    }, $ = (M) => {
      const P = m.value, D = u.filteredSituations[P + M];
      o.push({
        name: "situationDetail",
        params: {
          id: D
        }
      });
    };
    return av(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), m.value = u.filteredSituations.findIndex((M) => M == a.value);
    }), c.$subscribe((M, P) => {
      _.value = P.showError;
    }), (M, P) => (po(), va("div", R8, [
      Us("div", W8, [
        ut($e(le), {
          primary: "",
          onClick: P[0] || (P[0] = () => V())
        }, {
          default: kt(() => [
            ut($e(Y), {
              icon: $e(Mo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            F8
          ]),
          _: 1
        }),
        Us("div", null, [
          ut($e(le), {
            disabled: !$e(u).filteredSituations[m.value - 1],
            primary: "",
            onClick: P[1] || (P[1] = () => $(-1))
          }, {
            default: kt(() => [
              ut($e(Y), {
                icon: $e(Mo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              X8
            ]),
            _: 1
          }, 8, ["disabled"]),
          ut($e(le), {
            disabled: !$e(u).filteredSituations[m.value + 1],
            primary: "",
            onClick: P[2] || (P[2] = () => $(1))
          }, {
            default: kt(() => [
              Z8,
              ut($e(Y), {
                icon: $e(Mo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      v.value ? (po(), sv($e(Ad), {
        key: 0,
        class: "spinner"
      })) : (po(), va("div", U8, [
        f.value ? (po(), va("div", Y8, [
          ut($e(rD), null, {
            tabs: kt(() => [
              ut($e(zp), null, {
                default: kt(() => [
                  H8
                ]),
                _: 1
              }),
              ut($e(zp), null, {
                default: kt(() => [
                  G8
                ]),
                _: 1
              })
            ]),
            default: kt(() => [
              ut($e(qp), { class: "panel" }, {
                default: kt(() => [
                  ut(vz, { "situation-info": f.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ut($e(qp), { class: "panel" }, {
                default: kt(() => [
                  p.value ? (po(), sv(h8, {
                    key: 0,
                    situation: f.value,
                    width: p.value
                  }, null, 8, ["situation", "width"])) : L8("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (po(), va("div", j8, " Error. The situation " + iv($e(i)) + " does not exist. ", 1))
      ])),
      ut($e(rl), {
        modelValue: _.value,
        "onUpdate:modelValue": P[4] || (P[4] = (D) => _.value = D),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: kt(() => [
          ut($e(le), {
            onClick: P[3] || (P[3] = (D) => _.value = !1),
            text: ""
          }, {
            default: kt(() => [
              K8
            ]),
            _: 1
          })
        ]),
        default: kt(() => [
          ol(iv($e(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const t4 = /* @__PURE__ */ re(e4, [["__scopeId", "data-v-9a7d0795"]]), n4 = window.Vue.defineComponent, We = window.Vue.unref, Nt = window.Vue.createVNode, rt = window.Vue.createElementVNode, vo = window.Vue.withCtx, mo = window.Vue.openBlock, Is = window.Vue.createElementBlock, r4 = window.Vue.createCommentVNode, o4 = window.Vue.toDisplayString, Md = window.Vue.createTextVNode, s4 = window.Vue.normalizeClass, i4 = window.Vue.renderList, a4 = window.Vue.Fragment, l4 = window.Vue.createBlock, u4 = window.Vue.pushScopeId, c4 = window.Vue.popScopeId, ti = (e) => (u4("data-v-fe87f507"), e = e(), c4(), e), d4 = { class: "container" }, f4 = /* @__PURE__ */ ti(() => /* @__PURE__ */ rt("span", null, "Situation List", -1)), A4 = /* @__PURE__ */ ti(() => /* @__PURE__ */ rt("h2", null, "New Situation", -1)), h4 = { class: "form" }, p4 = { class: "fields" }, w4 = {
  key: 0,
  class: "errorList"
}, v4 = { class: "footer" }, m4 = /* @__PURE__ */ ti(() => /* @__PURE__ */ rt("span", null, "Clear", -1)), g4 = /* @__PURE__ */ ti(() => /* @__PURE__ */ rt("span", null, "Add Situation", -1)), _4 = { class: "alarm-column" }, V4 = { class: "header-alarms" }, y4 = /* @__PURE__ */ ti(() => /* @__PURE__ */ rt("h3", null, "Add Unassociated Alarms", -1)), b4 = /* @__PURE__ */ Md(" Total Alarms Added: "), C4 = { class: "total" }, E4 = { class: "list" }, M4 = { class: "filters" }, B4 = {
  key: 0,
  class: "alarms"
}, $4 = /* @__PURE__ */ Md(" Error on creating new situation :( "), I4 = /* @__PURE__ */ Md("dismiss"), jn = window.Vue.ref, x4 = window.Vue.watch, S4 = /* @__PURE__ */ n4({
  __name: "AddSituation",
  setup(e) {
    const o = vn(), r = rn(), i = jn(), a = jn(""), u = jn(), c = jn(""), f = jn([]), p = jn(!1), v = jn(), m = jn(r.unassignedAlarms);
    m.value.length || r.getUnassignedAlarms(), x4(
      () => r.unassignedAlarms,
      () => {
        m.value = r.unassignedAlarms;
      }
    );
    const _ = () => {
      o.push({
        name: "situations"
      });
    }, V = (T) => {
      p.value = !1, de.exports.includes(f.value, T) ? de.exports.remove(f.value, (N) => N === T) : f.value.push(T);
    }, $ = () => {
      const T = "This field should not be empty";
      let N = !0;
      return i.value || (a.value = T, N = !1), u.value || (c.value = T, N = !1), f.value.length < 2 && (p.value = !0, N = !1), N;
    }, M = async () => {
      if ($()) {
        const T = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: i.value
        };
        await kk(T) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, P = () => {
      i.value = "", u.value = "", f.value = [], m.value = r.unassignedAlarms;
    }, D = (T) => {
      m.value = T;
    };
    return (T, N) => (mo(), Is("div", d4, [
      Nt(We(le), {
        primary: "",
        onClick: N[0] || (N[0] = () => _()),
        class: "back-btn"
      }, {
        default: vo(() => [
          Nt(We(Y), {
            icon: We(Mo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          f4
        ]),
        _: 1
      }),
      A4,
      rt("div", h4, [
        rt("div", p4, [
          Nt(We(Fc), {
            modelValue: i.value,
            "onUpdate:modelValue": N[1] || (N[1] = (S) => i.value = S),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Nt(We(Fc), {
            modelValue: u.value,
            "onUpdate:modelValue": N[2] || (N[2] = (S) => u.value = S),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          p.value ? (mo(), Is("div", w4, " You must add at least 2 alarms. ")) : r4("", !0),
          rt("div", v4, [
            Nt(We(le), {
              class: "btn",
              onClick: P
            }, {
              default: vo(() => [
                Nt(We(Y), {
                  icon: We(Po),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                m4
              ]),
              _: 1
            }),
            Nt(We(le), {
              class: "btn-add",
              onClick: M
            }, {
              default: vo(() => [
                Nt(We(Y), {
                  icon: We(Ja),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                g4
              ]),
              _: 1
            })
          ])
        ]),
        rt("div", _4, [
          rt("div", V4, [
            y4,
            rt("div", null, [
              rt("div", {
                class: s4(["totalAlarms", { errorList: p.value }])
              }, [
                b4,
                rt("span", C4, o4(We(f).length), 1)
              ], 2)
            ])
          ]),
          rt("div", E4, [
            rt("div", M4, [
              Nt(Do, {
                list: We(r).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            m.value.length ? (mo(), Is("div", B4, [
              (mo(!0), Is(a4, null, i4(m.value, (S) => (mo(), Is("div", {
                key: S.id,
                class: "alarm-card"
              }, [
                Nt(Cd, {
                  selected: We(de.exports.includes)(We(f), S.id),
                  alarm: S,
                  onSelectedAlarm: V
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (mo(), l4(Oo, { key: 1 }))
          ])
        ])
      ]),
      Nt(We(rl), {
        modelValue: v.value,
        "onUpdate:modelValue": N[4] || (N[4] = (S) => v.value = S),
        right: "",
        error: ""
      }, {
        button: vo(() => [
          Nt(We(le), {
            onClick: N[3] || (N[3] = (S) => v.value = !1),
            text: ""
          }, {
            default: vo(() => [
              I4
            ]),
            _: 1
          })
        ]),
        default: vo(() => [
          $4
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const T4 = /* @__PURE__ */ re(S4, [["__scopeId", "data-v-fe87f507"]]), P4 = window.Vue.openBlock, k4 = window.Vue.createElementBlock, N4 = window.Vue.createElementVNode;
var D4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const O4 = {}, L4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, z4 = /* @__PURE__ */ N4("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), q4 = [
  z4
];
function R4(e, o) {
  return P4(), k4("svg", L4, q4);
}
var W4 = /* @__PURE__ */ D4(O4, [["render", R4]]);
const F4 = window.Vue.openBlock, X4 = window.Vue.createElementBlock, Bd = window.Vue.createElementVNode;
var Z4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const U4 = {}, Y4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H4 = /* @__PURE__ */ Bd("circle", {
  cx: "12",
  cy: "14",
  r: "1.5"
}, null, -1), G4 = /* @__PURE__ */ Bd("path", { d: "M12,10a6.45,6.45,0,0,0-6,4,6.5,6.5,0,0,0,12,0A6.45,6.45,0,0,0,12,10Zm0,6.5A4.93,4.93,0,0,1,7.66,14a5,5,0,0,1,8.68,0A4.93,4.93,0,0,1,12,16.5Z" }, null, -1), j4 = /* @__PURE__ */ Bd("path", { d: "M19,3H14.82A3,3,0,0,0,9.18,3H5A2,2,0,0,0,3,5V21a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Zm-8,.75A.76.76,0,0,1,11.75,3h.5a.76.76,0,0,1,.75.75v.5a.76.76,0,0,1-.75.75h-.5A.76.76,0,0,1,11,4.25ZM19,21H5V5H7V6A1,1,0,0,0,8,7h8a1,1,0,0,0,1-1V5h2Z" }, null, -1), K4 = [
  H4,
  G4,
  j4
];
function Q4(e, o) {
  return F4(), X4("svg", Y4, K4);
}
var J4 = /* @__PURE__ */ Z4(U4, [["render", Q4]]);
const eq = window.Vue.openBlock, tq = window.Vue.createElementBlock, sl = window.Vue.createElementVNode;
var nq = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const rq = {}, oq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sq = /* @__PURE__ */ sl("path", { d: "M16,9.18v-4a.5.5,0,0,0-.72-.45L8.76,8H3a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H5v4.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V16H8.76l6.52,3.26a.5.5,0,0,0,.72-.45v-4a3,3,0,0,0,0-5.64ZM8,14H3V10H8Zm6-5v7.38l-4-2V9.62l4-2Z" }, null, -1), iq = /* @__PURE__ */ sl("rect", {
  x: "20",
  y: "11",
  width: "4",
  height: "2"
}, null, -1), aq = /* @__PURE__ */ sl("path", { d: "M22.53,6.85l-1.06-1.7L17.86,7.41A5.82,5.82,0,0,1,19.16,9Z" }, null, -1), lq = /* @__PURE__ */ sl("path", { d: "M17.86,16.59l3.61,2.26,1.06-1.7-3.37-2.1A5.82,5.82,0,0,1,17.86,16.59Z" }, null, -1), uq = [
  sq,
  iq,
  aq,
  lq
];
function cq(e, o) {
  return eq(), tq("svg", oq, uq);
}
var dq = /* @__PURE__ */ nq(rq, [["render", cq]]);
const fq = window.Vue.defineComponent, Se = window.Vue.createElementVNode, Pr = window.Vue.createTextVNode, Gt = window.Vue.unref, Er = window.Vue.createVNode, ma = window.Vue.withCtx, lv = window.Vue.openBlock, uv = window.Vue.createElementBlock, Aq = window.Vue.createCommentVNode, hq = window.Vue.pushScopeId, pq = window.Vue.popScopeId, on = (e) => (hq("data-v-7825abb2"), e = e(), pq(), e), wq = { class: "container" }, vq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("div", { class: "title" }, "ALEC", -1)), mq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("div", { class: "description" }, [
  /* @__PURE__ */ Pr(" The Architecture for Learning Enabled Correlation (ALEC) provides a machine learning-powered framework for logically grouping related alarms into higher-level situations. Because networks can produce an overwhelming number of events and alarms, ALEC helps you to better tackle and manage underlying issues. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Pr(" ALEC gives IT Operators the tools to address these issues by identifying alarm groups, which are easier to manage. ")
], -1)), gq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("h3", null, "Key Benefits", -1)), _q = { class: "list" }, Vq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("span", null, " Reduces the number of alarm and event notifications. ", -1)), yq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("span", null, "Streamlines root cause analysis.", -1)), bq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("span", null, " Provides oversight for ", -1)), Cq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("br", null, null, -1)), Eq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("span", null, " low-visibility alarms. ", -1)), Mq = { key: 0 }, Bq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("h3", null, "ALEC Data Sharing", -1)), $q = { class: "optin" }, Iq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("div", null, [
  /* @__PURE__ */ Pr(" Opt-in to send anonymous data to The OpenNMS Group. Your anonymized data helps to improve the machine learning algorithms behind the plugin, subject to our "),
  /* @__PURE__ */ Se("a", {
    href: "https://www.opennms.com/privacy/",
    target: "_blank"
  }, "privacy policy"),
  /* @__PURE__ */ Pr(", so you will see more precise results. ")
], -1)), xq = { class: "choices" }, Sq = /* @__PURE__ */ on(() => /* @__PURE__ */ Se("div", { class: "radio-text" }, " By opting in, you accept that we can store this information and use it to improve ALEC. You can change this setting at any time in the settings menu. ", -1)), Tq = /* @__PURE__ */ Pr("Yes"), Pq = /* @__PURE__ */ Pr("No"), kq = /* @__PURE__ */ Pr(" Continue "), Nq = window.Vue.markRaw, Dq = window.Vue.ref, Oq = /* @__PURE__ */ fq({
  __name: "WelcomePage",
  setup(e) {
    const o = Nq({
      FeedbackAlt: dq,
      ViewDetails: J4,
      Workflow: W4
    }), r = Nn(), i = vn(), a = Dq(!0), u = () => {
      const c = Boolean(a.value);
      r.savePermission(c), i.push({ name: "configuration" });
    };
    return (c, f) => (lv(), uv("div", wq, [
      vq,
      mq,
      Se("div", null, [
        gq,
        Se("div", _q, [
          Se("div", null, [
            Er(Gt(Y), {
              icon: Gt(o).FeedbackAlt,
              class: "icon"
            }, null, 8, ["icon"]),
            Vq
          ]),
          Se("div", null, [
            Er(Gt(Y), {
              icon: Gt(o).Workflow,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            yq
          ]),
          Se("div", null, [
            Er(Gt(Y), {
              icon: Gt(o).ViewDetails,
              class: "icon"
            }, null, 8, ["icon"]),
            bq,
            Cq,
            Eq
          ])
        ])
      ]),
      Gt(r).isAdmin ? (lv(), uv("div", Mq, [
        Bq,
        Se("div", $q, [
          Iq,
          Se("div", xq, [
            Sq,
            Er(Gt(Zs), {
              horizontal: "",
              modelValue: a.value,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => a.value = p),
              label: ""
            }, {
              default: ma(() => [
                Er(Gt(Tn), { value: !0 }, {
                  default: ma(() => [
                    Tq
                  ]),
                  _: 1
                }),
                Er(Gt(Tn), { value: !1 }, {
                  default: ma(() => [
                    Pq
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ])) : Aq("", !0),
      Er(Gt(le), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: u
      }, {
        default: ma(() => [
          kq
        ]),
        _: 1
      })
    ]));
  }
});
const Lq = /* @__PURE__ */ re(Oq, [["__scopeId", "data-v-7825abb2"]]), zq = window.Vue.defineComponent, qq = window.Vue.createElementVNode, Rq = window.Vue.createTextVNode, Wq = window.Vue.unref, Fq = window.Vue.withCtx, Xq = window.Vue.createVNode, Zq = window.Vue.Fragment, Uq = window.Vue.openBlock, Yq = window.Vue.createElementBlock, Hq = window.Vue.pushScopeId, Gq = window.Vue.popScopeId, jq = (e) => (Hq("data-v-bcb7dcc6"), e = e(), Gq(), e), Kq = /* @__PURE__ */ jq(() => /* @__PURE__ */ qq("div", { class: "main" }, "Something bad is happening...", -1)), Qq = /* @__PURE__ */ Rq(" Reload "), Jq = /* @__PURE__ */ zq({
  __name: "ErrorPage",
  setup(e) {
    const o = vn(), r = () => {
      o.push({ name: "situations" });
    };
    return (i, a) => (Uq(), Yq(Zq, null, [
      Kq,
      Xq(Wq(le), {
        primary: "",
        onClick: r
      }, {
        default: Fq(() => [
          Qq
        ]),
        _: 1
      })
    ], 64));
  }
});
const eR = /* @__PURE__ */ re(Jq, [["__scopeId", "data-v-bcb7dcc6"]]), tR = window.Vue.defineComponent, nt = window.Vue.unref, jt = window.Vue.createVNode, Jn = window.Vue.createElementVNode, xs = window.Vue.withCtx, Mr = window.Vue.openBlock, cv = window.Vue.createBlock, nR = window.Vue.renderList, rR = window.Vue.Fragment, Ss = window.Vue.createElementBlock, oR = window.Vue.toDisplayString, c1 = window.Vue.createTextVNode, sR = window.Vue.pushScopeId, iR = window.Vue.popScopeId, $d = (e) => (sR("data-v-5dda4d5e"), e = e(), iR(), e), aR = { class: "container" }, lR = { class: "nav-btns" }, uR = /* @__PURE__ */ $d(() => /* @__PURE__ */ Jn("span", null, "Situation List", -1)), cR = /* @__PURE__ */ $d(() => /* @__PURE__ */ Jn("h2", null, "List Unassociated Alarms", -1)), dR = { class: "content" }, fR = { class: "filters" }, AR = { class: "list" }, hR = { class: "action-btns" }, pR = /* @__PURE__ */ $d(() => /* @__PURE__ */ Jn("span", null, "Move", -1)), wR = { key: 1 }, vR = {
  key: 0,
  class: "alarms"
}, mR = /* @__PURE__ */ c1("dismiss"), Kn = window.Vue.ref, gR = window.Vue.watch, _R = window.Vue.markRaw, VR = /* @__PURE__ */ tR({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = _R({
      ArrowBack: Mo,
      ExitToApp: Xc
    }), r = vn(), i = rn();
    i.getUnassignedAlarms(), i.getSituations(), i.nodes.length || i.getNodes();
    const a = Kn([]), u = Kn([]), c = Kn(!1), f = Kn(!1), p = Kn(""), v = Kn(!1), m = Kn(!1), _ = Kn(!0);
    gR(
      () => i.unassignedAlarms,
      () => {
        a.value = i.unassignedAlarms, _.value = !1;
      }
    );
    const V = (N) => {
      de.exports.includes(u.value, N) ? de.exports.remove(u.value, (S) => S === N) : u.value.push(N);
    }, $ = () => {
      c.value ? u.value = a.value.map((N) => N.id) : u.value = [];
    }, M = async (N) => {
      await mm(N, u.value) ? i.getUnassignedAlarms() : (v.value = !0, m.value = !0, p.value = "Error on moving the alarms :("), f.value = !1;
    }, P = () => {
      r.push({
        name: "situations"
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (v.value = !0, m.value = !1, p.value = "You need to choose at least one alarm!");
    }, T = (N) => {
      a.value = N;
    };
    return (N, S) => (Mr(), Ss("div", aR, [
      Jn("div", lR, [
        jt(nt(le), {
          primary: "",
          onClick: S[0] || (S[0] = () => P())
        }, {
          default: xs(() => [
            jt(nt(Y), {
              icon: nt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            uR
          ]),
          _: 1
        }),
        jt(hm)
      ]),
      cR,
      Jn("div", dR, [
        Jn("div", fR, [
          jt(Do, {
            list: nt(i).unassignedAlarms,
            onFilteredList: T,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Jn("div", AR, [
          Jn("div", hR, [
            jt(nt(Lo), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                S[1] || (S[1] = (q) => c.value = q),
                $
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            jt(nt(le), { onClick: D }, {
              default: xs(() => [
                jt(nt(Y), {
                  icon: nt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                pR
              ]),
              _: 1
            })
          ]),
          _.value ? (Mr(), cv(nt(Ad), {
            key: 0,
            class: "spinner"
          })) : (Mr(), Ss("div", wR, [
            nt(a).length ? (Mr(), Ss("div", vR, [
              (Mr(!0), Ss(rR, null, nR(nt(a), (q) => (Mr(), Ss("div", {
                key: q.id,
                class: "card"
              }, [
                jt(Cd, {
                  selected: nt(de.exports.includes)(nt(u), q.id),
                  alarm: q,
                  onSelectedAlarm: V
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Mr(), cv(Oo, { key: 1 }))
          ]))
        ])
      ]),
      jt(Jm, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: M,
        onDrawerClosed: S[2] || (S[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      jt(nt(rl), {
        modelValue: v.value,
        "onUpdate:modelValue": S[4] || (S[4] = (q) => v.value = q),
        right: "",
        error: m.value
      }, {
        button: xs(() => [
          jt(nt(le), {
            onClick: S[3] || (S[3] = (q) => v.value = !1),
            text: ""
          }, {
            default: xs(() => [
              mR
            ]),
            _: 1
          })
        ]),
        default: xs(() => [
          c1(oR(p.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const yR = /* @__PURE__ */ re(VR, [["__scopeId", "data-v-5dda4d5e"]]), bR = "data:image/png;base64,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", CR = "data:image/png;base64,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", ER = window.Vue.defineComponent, Xe = window.Vue.createElementVNode, xn = window.Vue.unref, Id = window.Vue.createTextVNode, Ts = window.Vue.withCtx, Ps = window.Vue.createVNode, MR = window.Vue.openBlock, BR = window.Vue.createElementBlock, $R = window.Vue.pushScopeId, IR = window.Vue.popScopeId, qo = (e) => ($R("data-v-c07203bb"), e = e(), IR(), e), xR = { class: "container" }, SR = /* @__PURE__ */ qo(() => /* @__PURE__ */ Xe("h2", null, "Configuration", -1)), TR = /* @__PURE__ */ Id(" ALEC relies on correlation engines to group related alarms into situations. These engines are powered by machine learning techniques that leverage alarm metadata to make informed decisions. For more information about the correlation engines, see the "), PR = ["href"], kR = /* @__PURE__ */ Id(". "), NR = { class: "radio-content" }, DR = /* @__PURE__ */ qo(() => /* @__PURE__ */ Xe("strong", { class: "title" }, "Clustering", -1)), OR = /* @__PURE__ */ qo(() => /* @__PURE__ */ Xe("div", null, " The clustering engine uses the DBSCAN algorithm to build alarm clusters. It draws information from the locally persisted network inventory graph. ", -1)), LR = /* @__PURE__ */ qo(() => /* @__PURE__ */ Xe("img", {
  class: "img2",
  src: bR
}, null, -1)), zR = /* @__PURE__ */ qo(() => /* @__PURE__ */ Xe("div", { class: "hellinger" }, [
  /* @__PURE__ */ Xe("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Xe("br"),
  /* @__PURE__ */ Xe("span", { class: "description" }, " (Uses the Hellinger distance between alarms as a scaling variable. This pushes alarms further apart if the value is high, and vice versa.) ")
], -1)), qR = /* @__PURE__ */ qo(() => /* @__PURE__ */ Xe("div", { class: "radio-content" }, [
  /* @__PURE__ */ Xe("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Xe("div", null, " The deep learning engine uses a TensorFlow model to build alarm clusters. It draws information from the locally persisted network inventory graph. "),
  /* @__PURE__ */ Xe("img", {
    class: "img2",
    src: CR
  })
], -1)), RR = /* @__PURE__ */ Id(" Continue "), dv = window.Vue.ref, WR = /* @__PURE__ */ ER({
  __name: "ConfigurationPage",
  setup(e) {
    const o = vn(), r = dv(!1), i = dv(Ce.ENGINE_DBSCAN), a = Nn(), u = () => {
      a.setEngineInfo(i.value, r.value), o.push({ name: "situations" });
    };
    return (c, f) => (MR(), BR("div", xR, [
      SR,
      Xe("p", null, [
        TR,
        Xe("strong", null, [
          Xe("a", {
            target: "_blank",
            href: xn(Ce).URL_DOCUMENTATION
          }, " documentation ", 8, PR),
          kR
        ])
      ]),
      Xe("div", null, [
        Ps(xn(Zs), {
          class: "radio-group",
          label: "You can choose from two correlation engines. We recommend that you use the clustering engine, as it is easier to implement.Select one (you can change it later):",
          modelValue: i.value,
          "onUpdate:modelValue": f[1] || (f[1] = (p) => i.value = p)
        }, {
          default: Ts(() => [
            Ps(xn(Tn), {
              class: "radio",
              value: xn(Ce).ENGINE_DBSCAN
            }, {
              default: Ts(() => [
                Xe("div", NR, [
                  DR,
                  OR,
                  LR,
                  Ps(xn(Lo), {
                    modelValue: r.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p),
                    disabled: i.value !== xn(Ce).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ts(() => [
                      zR
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Ps(xn(Tn), {
              class: "radio",
              value: xn(Ce).ENGINE_DEEP_LEARNING
            }, {
              default: Ts(() => [
                qR
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      Ps(xn(le), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => u())
      }, {
        default: Ts(() => [
          RR
        ]),
        _: 1
      })
    ]));
  }
});
const FR = /* @__PURE__ */ re(WR, [["__scopeId", "data-v-c07203bb"]]), XR = window.Vue.defineComponent, xc = window.Vue.unref, ZR = window.Vue.createVNode, UR = window.Vue.createElementVNode, YR = window.Vue.withCtx, HR = window.Vue.openBlock, GR = window.Vue.createBlock, jR = window.Vue.pushScopeId, KR = window.Vue.popScopeId, QR = (e) => (jR("data-v-17251e76"), e = e(), KR(), e), JR = /* @__PURE__ */ QR(() => /* @__PURE__ */ UR("span", null, "Situation List", -1)), eW = window.Vue.markRaw, tW = /* @__PURE__ */ XR({
  __name: "SituationListBtn",
  setup(e) {
    const o = vn(), r = eW({
      ArrowBack: Mo
    }), i = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (HR(), GR(xc(le), {
      primary: "",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: YR(() => [
        ZR(xc(Y), {
          icon: xc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        JR
      ]),
      _: 1
    }));
  }
});
const nW = /* @__PURE__ */ re(tW, [["__scopeId", "data-v-17251e76"]]), rW = window.Vue.defineComponent, Dt = window.Vue.createVNode, fn = window.Vue.createElementVNode, sr = window.Vue.createTextVNode, Ge = window.Vue.unref, Kt = window.Vue.withCtx, oW = window.Vue.toDisplayString, sW = window.Vue.Fragment, iW = window.Vue.openBlock, aW = window.Vue.createElementBlock, lW = window.Vue.pushScopeId, uW = window.Vue.popScopeId, il = (e) => (lW("data-v-3757d955"), e = e(), uW(), e), cW = { class: "container" }, dW = /* @__PURE__ */ il(() => /* @__PURE__ */ fn("h3", null, "Configuration Page", -1)), fW = { class: "section" }, AW = /* @__PURE__ */ il(() => /* @__PURE__ */ fn("div", { class: "title" }, " Allow ALEC to send anonymous usage data to The OpenNMS Group? ", -1)), hW = /* @__PURE__ */ sr("Yes"), pW = /* @__PURE__ */ sr("No"), wW = { class: "section" }, vW = { class: "title" }, mW = /* @__PURE__ */ sr(" Choose the correlation engine that ALEC will use (see "), gW = ["href"], _W = /* @__PURE__ */ sr(" for more information): "), VW = /* @__PURE__ */ sr("Clustering"), yW = /* @__PURE__ */ il(() => /* @__PURE__ */ fn("div", { class: "hellinger" }, [
  /* @__PURE__ */ fn("strong", null, "Hellinger distance")
], -1)), bW = /* @__PURE__ */ sr("Deep Learning"), CW = /* @__PURE__ */ il(() => /* @__PURE__ */ fn("span", null, "Save Changes", -1)), EW = /* @__PURE__ */ sr("dismiss"), MW = window.Vue.markRaw, go = window.Vue.ref, BW = /* @__PURE__ */ rW({
  __name: "AccountSettings",
  setup(e) {
    var m, _;
    const o = MW({
      MarkComplete: Da
    }), r = Nn(), i = go(r.allowSave), a = go(((m = r.engineInfo) == null ? void 0 : m.engineName) || Ce.ENGINE_DBSCAN), u = go(
      ((_ = r.engineInfo) == null ? void 0 : _.distanceMeasureName) === Ce.HELLINGER_OPTION
    ), c = go(!1), f = go(!1), p = go(""), v = async () => {
      const V = Boolean(i.value);
      await r.savePermission(V);
      const $ = await r.setEngineInfo(
        a.value,
        u.value
      );
      c.value = !0, $ ? (r.getAlecInfo(), r.getEngineInfo(), p.value = "The settings were saved!", f.value = !1) : (p.value = "Error on saving the settings", f.value = !0);
    };
    return (V, $) => (iW(), aW(sW, null, [
      Dt(nW),
      fn("div", cW, [
        dW,
        fn("div", fW, [
          AW,
          Dt(Ge(Zs), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": $[0] || ($[0] = (M) => i.value = M),
            label: "",
            hideLabel: ""
          }, {
            default: Kt(() => [
              Dt(Ge(Tn), { value: !0 }, {
                default: Kt(() => [
                  hW
                ]),
                _: 1
              }),
              Dt(Ge(Tn), { value: !1 }, {
                default: Kt(() => [
                  pW
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        fn("div", wW, [
          fn("div", vW, [
            mW,
            fn("a", {
              target: "_blank",
              href: Ge(Ce).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, gW),
            _W
          ]),
          Dt(Ge(Zs), {
            vertical: "",
            modelValue: a.value,
            "onUpdate:modelValue": $[2] || ($[2] = (M) => a.value = M),
            label: "",
            hideLabel: ""
          }, {
            default: Kt(() => [
              Dt(Ge(Tn), {
                class: "radio-item",
                value: Ge(Ce).ENGINE_DBSCAN
              }, {
                default: Kt(() => [
                  VW
                ]),
                _: 1
              }, 8, ["value"]),
              Dt(Ge(Lo), {
                modelValue: u.value,
                "onUpdate:modelValue": $[1] || ($[1] = (M) => u.value = M),
                disabled: a.value !== Ge(Ce).ENGINE_DBSCAN,
                class: "checkbox"
              }, {
                default: Kt(() => [
                  yW
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Dt(Ge(Tn), {
                class: "radio-item",
                value: Ge(Ce).ENGINE_DEEP_LEARNING
              }, {
                default: Kt(() => [
                  bW
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Dt(Ge(le), {
          primary: "",
          class: "save-btn",
          onClick: v
        }, {
          default: Kt(() => [
            Dt(Ge(Y), {
              icon: Ge(o).MarkComplete,
              class: "icon"
            }, null, 8, ["icon"]),
            CW
          ]),
          _: 1
        }),
        Dt(Ge(rl), {
          modelValue: c.value,
          "onUpdate:modelValue": $[4] || ($[4] = (M) => c.value = M),
          right: "",
          error: f.value
        }, {
          button: Kt(() => [
            Dt(Ge(le), {
              onClick: $[3] || ($[3] = (M) => c.value = !1),
              text: ""
            }, {
              default: Kt(() => [
                EW
              ]),
              _: 1
            })
          ]),
          default: Kt(() => [
            sr(oW(p.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const $W = /* @__PURE__ */ re(BW, [["__scopeId", "data-v-3757d955"]]), IW = window.VueRouter.createRouter, xW = window.VueRouter.createWebHistory, Sc = async () => {
  const e = Nn();
  e.userId || (await e.getUserRole(), await e.getAlecInfo());
}, d1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || f1, r = Nn();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: e.params }) : o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Sc(),
    component: Lq
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Sc(),
    component: FR
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Sc(),
    component: IN
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: t4
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: T4
  },
  {
    path: "/error",
    name: "error",
    component: eR
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: yR
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      const e = Nn();
      await e.getAlecInfo(), await e.getEngineInfo();
    },
    component: $W
  }
], Tc = window.VRouter;
if (Tc) {
  const e = "Plugin-alecUiExtension", o = Tc.hasRoute(e) ? e : "Plugin";
  for (const r of d1) {
    const { path: i, name: a, component: u, beforeEnter: c } = r;
    Tc.addRoute(o, {
      path: i.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const f1 = IW({
  history: xW(),
  routes: d1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = f2;
