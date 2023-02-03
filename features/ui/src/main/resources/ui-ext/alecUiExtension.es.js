const re = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
}, V2 = {}, _2 = window.Vue.resolveComponent, y2 = window.Vue.createVNode, b2 = window.Vue.openBlock, C2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $2 = { class: "main" };
function E2(e, o) {
  const r = _2("router-view");
  return b2(), C2("div", $2, [
    y2(r)
  ]);
}
const M2 = /* @__PURE__ */ re(V2, [["render", E2], ["__scopeId", "data-v-5d32d140"]]), I2 = window.Vue.defineComponent, B2 = window.Vue.openBlock, x2 = window.Vue.createBlock, S2 = /* @__PURE__ */ I2({
  setup(e) {
    return (o, r) => (B2(), x2(M2));
  }
});
var ps = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function T2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ev = { exports: {} }, ad = { exports: {} }, Mv = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, k2 = Mv, ld = Object.prototype.toString, ud = function(e) {
  return function(o) {
    var r = ld.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function zr(e) {
  return e = e.toLowerCase(), function(r) {
    return ud(r) === e;
  };
}
function cd(e) {
  return Array.isArray(e);
}
function Sa(e) {
  return typeof e > "u";
}
function P2(e) {
  return e !== null && !Sa(e) && e.constructor !== null && !Sa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Iv = zr("ArrayBuffer");
function N2(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && Iv(e.buffer), o;
}
function D2(e) {
  return typeof e == "string";
}
function O2(e) {
  return typeof e == "number";
}
function Bv(e) {
  return e !== null && typeof e == "object";
}
function ya(e) {
  if (ud(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var L2 = zr("Date"), z2 = zr("File"), q2 = zr("Blob"), R2 = zr("FileList");
function dd(e) {
  return ld.call(e) === "[object Function]";
}
function W2(e) {
  return Bv(e) && dd(e.pipe);
}
function F2(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ld.call(e) === o || dd(e.toString) && e.toString() === o);
}
var X2 = zr("URLSearchParams");
function Z2(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function U2() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function fd(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), cd(e))
      for (var r = 0, i = e.length; r < i; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Fc() {
  var e = {};
  function o(a, u) {
    ya(e[u]) && ya(a) ? e[u] = Fc(e[u], a) : ya(a) ? e[u] = Fc({}, a) : cd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, i = arguments.length; r < i; r++)
    fd(arguments[r], o);
  return e;
}
function Y2(e, o, r) {
  return fd(o, function(a, u) {
    r && typeof a == "function" ? e[u] = k2(a, r) : e[u] = a;
  }), e;
}
function H2(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function G2(e, o, r, i) {
  e.prototype = Object.create(o.prototype, i), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function j2(e, o, r) {
  var i, a, u, c = {};
  o = o || {};
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      u = i[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function K2(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var i = e.indexOf(o, r);
  return i !== -1 && i === r;
}
function Q2(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Sa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var J2 = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ue = {
  isArray: cd,
  isArrayBuffer: Iv,
  isBuffer: P2,
  isFormData: F2,
  isArrayBufferView: N2,
  isString: D2,
  isNumber: O2,
  isObject: Bv,
  isPlainObject: ya,
  isUndefined: Sa,
  isDate: L2,
  isFile: z2,
  isBlob: q2,
  isFunction: dd,
  isStream: W2,
  isURLSearchParams: X2,
  isStandardBrowserEnv: U2,
  forEach: fd,
  merge: Fc,
  extend: Y2,
  trim: Z2,
  stripBOM: H2,
  inherits: G2,
  toFlatObject: j2,
  kindOf: ud,
  kindOfTest: zr,
  endsWith: K2,
  toArray: Q2,
  isTypedArray: J2,
  isFileList: R2
}, oo = Ue;
function gh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var xv = function(o, r, i) {
  if (!r)
    return o;
  var a;
  if (i)
    a = i(r);
  else if (oo.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    oo.forEach(r, function(p, v) {
      p === null || typeof p > "u" || (oo.isArray(p) ? v = v + "[]" : p = [p], oo.forEach(p, function(V) {
        oo.isDate(V) ? V = V.toISOString() : oo.isObject(V) && (V = JSON.stringify(V)), u.push(gh(v) + "=" + gh(V));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, e3 = Ue;
function Xa() {
  this.handlers = [];
}
Xa.prototype.use = function(o, r, i) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
Xa.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Xa.prototype.forEach = function(o) {
  e3.forEach(this.handlers, function(i) {
    i !== null && o(i);
  });
};
var t3 = Xa, n3 = Ue, r3 = function(o, r) {
  n3.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, Sv = Ue;
function So(e, o, r, i, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), i && (this.request = i), a && (this.response = a);
}
Sv.inherits(So, Error, {
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
var Tv = So.prototype, kv = {};
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
  kv[e] = { value: e };
});
Object.defineProperties(So, kv);
Object.defineProperty(Tv, "isAxiosError", { value: !0 });
So.from = function(e, o, r, i, a, u) {
  var c = Object.create(Tv);
  return Sv.toFlatObject(e, c, function(p) {
    return p !== Error.prototype;
  }), So.call(c, e.message, o, r, i, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Do = So, Pv = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yt = Ue;
function o3(e, o) {
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
          var m = c ? c + "." + v : v, V;
          if (p && !c && typeof p == "object") {
            if (Yt.endsWith(v, "{}"))
              p = JSON.stringify(p);
            else if (Yt.endsWith(v, "[]") && (V = Yt.toArray(p))) {
              V.forEach(function(_) {
                !Yt.isUndefined(_) && o.append(m, i(_));
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
var Nv = o3, Lu, Vh;
function s3() {
  if (Vh)
    return Lu;
  Vh = 1;
  var e = Do;
  return Lu = function(r, i, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : i(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Lu;
}
var zu, _h;
function i3() {
  if (_h)
    return zu;
  _h = 1;
  var e = Ue;
  return zu = e.isStandardBrowserEnv() ? function() {
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
  }(), zu;
}
var a3 = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, l3 = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, u3 = a3, c3 = l3, Dv = function(o, r) {
  return o && !u3(r) ? c3(o, r) : r;
}, qu, yh;
function d3() {
  if (yh)
    return qu;
  yh = 1;
  var e = Ue, o = [
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
  return qu = function(i) {
    var a = {}, u, c, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, qu;
}
var Ru, bh;
function f3() {
  if (bh)
    return Ru;
  bh = 1;
  var e = Ue;
  return Ru = e.isStandardBrowserEnv() ? function() {
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
  }(), Ru;
}
var Wu, Ch;
function Za() {
  if (Ch)
    return Wu;
  Ch = 1;
  var e = Do, o = Ue;
  function r(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Wu = r, Wu;
}
var Fu, $h;
function A3() {
  return $h || ($h = 1, Fu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Fu;
}
var Xu, Eh;
function Mh() {
  if (Eh)
    return Xu;
  Eh = 1;
  var e = Ue, o = s3(), r = i3(), i = xv, a = Dv, u = d3(), c = f3(), f = Pv, p = Do, v = Za(), m = A3();
  return Xu = function(_) {
    return new Promise(function(S, D) {
      var N = _.data, $ = _.headers, P = _.responseType, T;
      function O() {
        _.cancelToken && _.cancelToken.unsubscribe(T), _.signal && _.signal.removeEventListener("abort", T);
      }
      e.isFormData(N) && e.isStandardBrowserEnv() && delete $["Content-Type"];
      var I = new XMLHttpRequest();
      if (_.auth) {
        var q = _.auth.username || "", L = _.auth.password ? unescape(encodeURIComponent(_.auth.password)) : "";
        $.Authorization = "Basic " + btoa(q + ":" + L);
      }
      var F = a(_.baseURL, _.url);
      I.open(_.method.toUpperCase(), i(F, _.params, _.paramsSerializer), !0), I.timeout = _.timeout;
      function ge() {
        if (!!I) {
          var be = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, $e = !P || P === "text" || P === "json" ? I.responseText : I.response, Be = {
            data: $e,
            status: I.status,
            statusText: I.statusText,
            headers: be,
            config: _,
            request: I
          };
          o(function(ze) {
            S(ze), O();
          }, function(ze) {
            D(ze), O();
          }, Be), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = ge : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(ge);
      }, I.onabort = function() {
        !I || (D(new p("Request aborted", p.ECONNABORTED, _, I)), I = null);
      }, I.onerror = function() {
        D(new p("Network Error", p.ERR_NETWORK, _, I, I)), I = null;
      }, I.ontimeout = function() {
        var $e = _.timeout ? "timeout of " + _.timeout + "ms exceeded" : "timeout exceeded", Be = _.transitional || f;
        _.timeoutErrorMessage && ($e = _.timeoutErrorMessage), D(new p(
          $e,
          Be.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
          _,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var fe = (_.withCredentials || c(F)) && _.xsrfCookieName ? r.read(_.xsrfCookieName) : void 0;
        fe && ($[_.xsrfHeaderName] = fe);
      }
      "setRequestHeader" in I && e.forEach($, function($e, Be) {
        typeof N > "u" && Be.toLowerCase() === "content-type" ? delete $[Be] : I.setRequestHeader(Be, $e);
      }), e.isUndefined(_.withCredentials) || (I.withCredentials = !!_.withCredentials), P && P !== "json" && (I.responseType = _.responseType), typeof _.onDownloadProgress == "function" && I.addEventListener("progress", _.onDownloadProgress), typeof _.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", _.onUploadProgress), (_.cancelToken || _.signal) && (T = function(be) {
        !I || (D(!be || be && be.type ? new v() : be), I.abort(), I = null);
      }, _.cancelToken && _.cancelToken.subscribe(T), _.signal && (_.signal.aborted ? T() : _.signal.addEventListener("abort", T))), N || (N = null);
      var ve = m(F);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        D(new p("Unsupported protocol " + ve + ":", p.ERR_BAD_REQUEST, _));
        return;
      }
      I.send(N);
    });
  }, Xu;
}
var Zu, Ih;
function h3() {
  return Ih || (Ih = 1, Zu = null), Zu;
}
var Le = Ue, Bh = r3, xh = Do, p3 = Pv, w3 = Nv, v3 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Sh(e, o) {
  !Le.isUndefined(e) && Le.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function m3() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Mh()), e;
}
function g3(e, o, r) {
  if (Le.isString(e))
    try {
      return (o || JSON.parse)(e), Le.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (r || JSON.stringify)(e);
}
var Ua = {
  transitional: p3,
  adapter: m3(),
  transformRequest: [function(o, r) {
    if (Bh(r, "Accept"), Bh(r, "Content-Type"), Le.isFormData(o) || Le.isArrayBuffer(o) || Le.isBuffer(o) || Le.isStream(o) || Le.isFile(o) || Le.isBlob(o))
      return o;
    if (Le.isArrayBufferView(o))
      return o.buffer;
    if (Le.isURLSearchParams(o))
      return Sh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var i = Le.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Le.isFileList(o)) || i && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return w3(u ? { "files[]": o } : o, c && new c());
    } else if (i || a === "application/json")
      return Sh(r, "application/json"), g3(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ua.transitional, i = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !i && this.responseType === "json";
    if (u || a && Le.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? xh.from(c, xh.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: h3()
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
Le.forEach(["delete", "get", "head"], function(o) {
  Ua.headers[o] = {};
});
Le.forEach(["post", "put", "patch"], function(o) {
  Ua.headers[o] = Le.merge(v3);
});
var Ad = Ua, V3 = Ue, _3 = Ad, y3 = function(o, r, i) {
  var a = this || _3;
  return V3.forEach(i, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Uu, Th;
function Ov() {
  return Th || (Th = 1, Uu = function(o) {
    return !!(o && o.__CANCEL__);
  }), Uu;
}
var kh = Ue, Yu = y3, b3 = Ov(), C3 = Ad, $3 = Za();
function Hu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new $3();
}
var E3 = function(o) {
  Hu(o), o.headers = o.headers || {}, o.data = Yu.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = kh.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), kh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || C3.adapter;
  return r(o).then(function(a) {
    return Hu(o), a.data = Yu.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return b3(a) || (Hu(o), a && a.response && (a.response.data = Yu.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, gt = Ue, Lv = function(o, r) {
  r = r || {};
  var i = {};
  function a(m, V) {
    return gt.isPlainObject(m) && gt.isPlainObject(V) ? gt.merge(m, V) : gt.isPlainObject(V) ? gt.merge({}, V) : gt.isArray(V) ? V.slice() : V;
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
  return gt.forEach(Object.keys(o).concat(Object.keys(r)), function(V) {
    var _ = v[V] || u, x = _(V);
    gt.isUndefined(x) && _ !== p || (i[V] = x);
  }), i;
}, Gu, Ph;
function zv() {
  return Ph || (Ph = 1, Gu = {
    version: "0.27.2"
  }), Gu;
}
var M3 = zv().version, er = Do, hd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  hd[e] = function(i) {
    return typeof i === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Nh = {};
hd.transitional = function(o, r, i) {
  function a(u, c) {
    return "[Axios v" + M3 + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new er(
        a(c, " has been removed" + (r ? " in " + r : "")),
        er.ERR_DEPRECATED
      );
    return r && !Nh[c] && (Nh[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function I3(e, o, r) {
  if (typeof e != "object")
    throw new er("options must be an object", er.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), a = i.length; a-- > 0; ) {
    var u = i[a], c = o[u];
    if (c) {
      var f = e[u], p = f === void 0 || c(f, u, e);
      if (p !== !0)
        throw new er("option " + u + " must be " + p, er.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new er("Unknown option " + u, er.ERR_BAD_OPTION);
  }
}
var B3 = {
  assertOptions: I3,
  validators: hd
}, qv = Ue, x3 = xv, Dh = t3, Oh = E3, Ya = Lv, S3 = Dv, Rv = B3, so = Rv.validators;
function To(e) {
  this.defaults = e, this.interceptors = {
    request: new Dh(),
    response: new Dh()
  };
}
To.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ya(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var i = r.transitional;
  i !== void 0 && Rv.assertOptions(i, {
    silentJSONParsing: so.transitional(so.boolean),
    forcedJSONParsing: so.transitional(so.boolean),
    clarifyTimeoutError: so.transitional(so.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(x) {
    typeof x.runWhen == "function" && x.runWhen(r) === !1 || (u = u && x.synchronous, a.unshift(x.fulfilled, x.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(x) {
    c.push(x.fulfilled, x.rejected);
  });
  var f;
  if (!u) {
    var p = [Oh, void 0];
    for (Array.prototype.unshift.apply(p, a), p = p.concat(c), f = Promise.resolve(r); p.length; )
      f = f.then(p.shift(), p.shift());
    return f;
  }
  for (var v = r; a.length; ) {
    var m = a.shift(), V = a.shift();
    try {
      v = m(v);
    } catch (_) {
      V(_);
      break;
    }
  }
  try {
    f = Oh(v);
  } catch (_) {
    return Promise.reject(_);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
To.prototype.getUri = function(o) {
  o = Ya(this.defaults, o);
  var r = S3(o.baseURL, o.url);
  return x3(r, o.params, o.paramsSerializer);
};
qv.forEach(["delete", "get", "head", "options"], function(o) {
  To.prototype[o] = function(r, i) {
    return this.request(Ya(i || {}, {
      method: o,
      url: r,
      data: (i || {}).data
    }));
  };
});
qv.forEach(["post", "put", "patch"], function(o) {
  function r(i) {
    return function(u, c, f) {
      return this.request(Ya(f || {}, {
        method: o,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  To.prototype[o] = r(), To.prototype[o + "Form"] = r(!0);
});
var T3 = To, ju, Lh;
function k3() {
  if (Lh)
    return ju;
  Lh = 1;
  var e = Za();
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
  }, ju = o, ju;
}
var Ku, zh;
function P3() {
  return zh || (zh = 1, Ku = function(o) {
    return function(i) {
      return o.apply(null, i);
    };
  }), Ku;
}
var Qu, qh;
function N3() {
  if (qh)
    return Qu;
  qh = 1;
  var e = Ue;
  return Qu = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Qu;
}
var Rh = Ue, D3 = Mv, ba = T3, O3 = Lv, L3 = Ad;
function Wv(e) {
  var o = new ba(e), r = D3(ba.prototype.request, o);
  return Rh.extend(r, ba.prototype, o), Rh.extend(r, o), r.create = function(a) {
    return Wv(O3(e, a));
  }, r;
}
var ft = Wv(L3);
ft.Axios = ba;
ft.CanceledError = Za();
ft.CancelToken = k3();
ft.isCancel = Ov();
ft.VERSION = zv().version;
ft.toFormData = Nv;
ft.AxiosError = Do;
ft.Cancel = ft.CanceledError;
ft.all = function(o) {
  return Promise.all(o);
};
ft.spread = P3();
ft.isAxiosError = N3();
ad.exports = ft;
ad.exports.default = ft;
(function(e) {
  e.exports = ad.exports;
})(Ev);
const Fv = /* @__PURE__ */ T2(Ev.exports), zn = Fv.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), rn = Fv.create({
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
    var r, i = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", v = 500, m = "__lodash_placeholder__", V = 1, _ = 2, x = 4, S = 1, D = 2, N = 1, $ = 2, P = 4, T = 8, O = 16, I = 32, q = 64, L = 128, F = 256, ge = 512, fe = 30, ve = "...", be = 800, $e = 16, Be = 1, Ae = 2, ze = 3, qe = 1 / 0, Ke = 9007199254740991, Uo = 17976931348623157e292, si = 0 / 0, an = 4294967295, T1 = an - 1, k1 = an >>> 1, P1 = [
      ["ary", L],
      ["bind", N],
      ["bindKey", $],
      ["curry", T],
      ["curryRight", O],
      ["flip", ge],
      ["partial", I],
      ["partialRight", q],
      ["rearg", F]
    ], Wr = "[object Arguments]", ii = "[object Array]", N1 = "[object AsyncFunction]", Yo = "[object Boolean]", Ho = "[object Date]", D1 = "[object DOMException]", ai = "[object Error]", li = "[object Function]", Rd = "[object GeneratorFunction]", Rt = "[object Map]", Go = "[object Number]", O1 = "[object Null]", Vn = "[object Object]", Wd = "[object Promise]", L1 = "[object Proxy]", jo = "[object RegExp]", Wt = "[object Set]", Ko = "[object String]", ui = "[object Symbol]", z1 = "[object Undefined]", Qo = "[object WeakMap]", q1 = "[object WeakSet]", Jo = "[object ArrayBuffer]", Fr = "[object DataView]", vl = "[object Float32Array]", ml = "[object Float64Array]", gl = "[object Int8Array]", Vl = "[object Int16Array]", _l = "[object Int32Array]", yl = "[object Uint8Array]", bl = "[object Uint8ClampedArray]", Cl = "[object Uint16Array]", $l = "[object Uint32Array]", R1 = /\b__p \+= '';/g, W1 = /\b(__p \+=) '' \+/g, F1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Fd = /&(?:amp|lt|gt|quot|#39);/g, Xd = /[&<>"']/g, X1 = RegExp(Fd.source), Z1 = RegExp(Xd.source), U1 = /<%-([\s\S]+?)%>/g, Y1 = /<%([\s\S]+?)%>/g, Zd = /<%=([\s\S]+?)%>/g, H1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, G1 = /^\w*$/, j1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, El = /[\\^$.*+?()[\]{}|]/g, K1 = RegExp(El.source), Ml = /^\s+/, Q1 = /\s/, J1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, eg = /\{\n\/\* \[wrapped with (.+)\] \*/, tg = /,? & /, ng = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, rg = /[()=,{}\[\]\/\s]/, og = /\\(\\)?/g, sg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ud = /\w*$/, ig = /^[-+]0x[0-9a-f]+$/i, ag = /^0b[01]+$/i, lg = /^\[object .+?Constructor\]$/, ug = /^0o[0-7]+$/i, cg = /^(?:0|[1-9]\d*)$/, dg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ci = /($^)/, fg = /['\n\r\u2028\u2029\\]/g, di = "\\ud800-\\udfff", Ag = "\\u0300-\\u036f", hg = "\\ufe20-\\ufe2f", pg = "\\u20d0-\\u20ff", Yd = Ag + hg + pg, Hd = "\\u2700-\\u27bf", Gd = "a-z\\xdf-\\xf6\\xf8-\\xff", wg = "\\xac\\xb1\\xd7\\xf7", vg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mg = "\\u2000-\\u206f", gg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", jd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Kd = "\\ufe0e\\ufe0f", Qd = wg + vg + mg + gg, Il = "['\u2019]", Vg = "[" + di + "]", Jd = "[" + Qd + "]", fi = "[" + Yd + "]", ef = "\\d+", _g = "[" + Hd + "]", tf = "[" + Gd + "]", nf = "[^" + di + Qd + ef + Hd + Gd + jd + "]", Bl = "\\ud83c[\\udffb-\\udfff]", yg = "(?:" + fi + "|" + Bl + ")", rf = "[^" + di + "]", xl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Xr = "[" + jd + "]", of = "\\u200d", sf = "(?:" + tf + "|" + nf + ")", bg = "(?:" + Xr + "|" + nf + ")", af = "(?:" + Il + "(?:d|ll|m|re|s|t|ve))?", lf = "(?:" + Il + "(?:D|LL|M|RE|S|T|VE))?", uf = yg + "?", cf = "[" + Kd + "]?", Cg = "(?:" + of + "(?:" + [rf, xl, Sl].join("|") + ")" + cf + uf + ")*", $g = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Eg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", df = cf + uf + Cg, Mg = "(?:" + [_g, xl, Sl].join("|") + ")" + df, Ig = "(?:" + [rf + fi + "?", fi, xl, Sl, Vg].join("|") + ")", Bg = RegExp(Il, "g"), xg = RegExp(fi, "g"), Tl = RegExp(Bl + "(?=" + Bl + ")|" + Ig + df, "g"), Sg = RegExp([
      Xr + "?" + tf + "+" + af + "(?=" + [Jd, Xr, "$"].join("|") + ")",
      bg + "+" + lf + "(?=" + [Jd, Xr + sf, "$"].join("|") + ")",
      Xr + "?" + sf + "+" + af,
      Xr + "+" + lf,
      Eg,
      $g,
      ef,
      Mg
    ].join("|"), "g"), Tg = RegExp("[" + of + di + Yd + Kd + "]"), kg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Pg = [
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
    ], Ng = -1, me = {};
    me[vl] = me[ml] = me[gl] = me[Vl] = me[_l] = me[yl] = me[bl] = me[Cl] = me[$l] = !0, me[Wr] = me[ii] = me[Jo] = me[Yo] = me[Fr] = me[Ho] = me[ai] = me[li] = me[Rt] = me[Go] = me[Vn] = me[jo] = me[Wt] = me[Ko] = me[Qo] = !1;
    var pe = {};
    pe[Wr] = pe[ii] = pe[Jo] = pe[Fr] = pe[Yo] = pe[Ho] = pe[vl] = pe[ml] = pe[gl] = pe[Vl] = pe[_l] = pe[Rt] = pe[Go] = pe[Vn] = pe[jo] = pe[Wt] = pe[Ko] = pe[ui] = pe[yl] = pe[bl] = pe[Cl] = pe[$l] = !0, pe[ai] = pe[li] = pe[Qo] = !1;
    var Dg = {
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
    }, Og = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Lg = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, zg = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, qg = parseFloat, Rg = parseInt, ff = typeof ps == "object" && ps && ps.Object === Object && ps, Wg = typeof self == "object" && self && self.Object === Object && self, Re = ff || Wg || Function("return this")(), kl = o && !o.nodeType && o, ur = kl && !0 && e && !e.nodeType && e, Af = ur && ur.exports === kl, Pl = Af && ff.process, Mt = function() {
      try {
        var y = ur && ur.require && ur.require("util").types;
        return y || Pl && Pl.binding && Pl.binding("util");
      } catch {
      }
    }(), hf = Mt && Mt.isArrayBuffer, pf = Mt && Mt.isDate, wf = Mt && Mt.isMap, vf = Mt && Mt.isRegExp, mf = Mt && Mt.isSet, gf = Mt && Mt.isTypedArray;
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
    function Fg(y, E, C, R) {
      for (var H = -1, oe = y == null ? 0 : y.length; ++H < oe; ) {
        var Te = y[H];
        E(R, Te, C(Te), y);
      }
      return R;
    }
    function It(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R && E(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function Xg(y, E) {
      for (var C = y == null ? 0 : y.length; C-- && E(y[C], C, y) !== !1; )
        ;
      return y;
    }
    function Vf(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R; )
        if (!E(y[C], C, y))
          return !1;
      return !0;
    }
    function qn(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length, H = 0, oe = []; ++C < R; ) {
        var Te = y[C];
        E(Te, C, y) && (oe[H++] = Te);
      }
      return oe;
    }
    function Ai(y, E) {
      var C = y == null ? 0 : y.length;
      return !!C && Zr(y, E, 0) > -1;
    }
    function Nl(y, E, C) {
      for (var R = -1, H = y == null ? 0 : y.length; ++R < H; )
        if (C(E, y[R]))
          return !0;
      return !1;
    }
    function Ve(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length, H = Array(R); ++C < R; )
        H[C] = E(y[C], C, y);
      return H;
    }
    function Rn(y, E) {
      for (var C = -1, R = E.length, H = y.length; ++C < R; )
        y[H + C] = E[C];
      return y;
    }
    function Dl(y, E, C, R) {
      var H = -1, oe = y == null ? 0 : y.length;
      for (R && oe && (C = y[++H]); ++H < oe; )
        C = E(C, y[H], H, y);
      return C;
    }
    function Zg(y, E, C, R) {
      var H = y == null ? 0 : y.length;
      for (R && H && (C = y[--H]); H--; )
        C = E(C, y[H], H, y);
      return C;
    }
    function Ol(y, E) {
      for (var C = -1, R = y == null ? 0 : y.length; ++C < R; )
        if (E(y[C], C, y))
          return !0;
      return !1;
    }
    var Ug = Ll("length");
    function Yg(y) {
      return y.split("");
    }
    function Hg(y) {
      return y.match(ng) || [];
    }
    function _f(y, E, C) {
      var R;
      return C(y, function(H, oe, Te) {
        if (E(H, oe, Te))
          return R = oe, !1;
      }), R;
    }
    function hi(y, E, C, R) {
      for (var H = y.length, oe = C + (R ? 1 : -1); R ? oe-- : ++oe < H; )
        if (E(y[oe], oe, y))
          return oe;
      return -1;
    }
    function Zr(y, E, C) {
      return E === E ? i0(y, E, C) : hi(y, yf, C);
    }
    function Gg(y, E, C, R) {
      for (var H = C - 1, oe = y.length; ++H < oe; )
        if (R(y[H], E))
          return H;
      return -1;
    }
    function yf(y) {
      return y !== y;
    }
    function bf(y, E) {
      var C = y == null ? 0 : y.length;
      return C ? ql(y, E) / C : si;
    }
    function Ll(y) {
      return function(E) {
        return E == null ? r : E[y];
      };
    }
    function zl(y) {
      return function(E) {
        return y == null ? r : y[E];
      };
    }
    function Cf(y, E, C, R, H) {
      return H(y, function(oe, Te, he) {
        C = R ? (R = !1, oe) : E(C, oe, Te, he);
      }), C;
    }
    function jg(y, E) {
      var C = y.length;
      for (y.sort(E); C--; )
        y[C] = y[C].value;
      return y;
    }
    function ql(y, E) {
      for (var C, R = -1, H = y.length; ++R < H; ) {
        var oe = E(y[R]);
        oe !== r && (C = C === r ? oe : C + oe);
      }
      return C;
    }
    function Rl(y, E) {
      for (var C = -1, R = Array(y); ++C < y; )
        R[C] = E(C);
      return R;
    }
    function Kg(y, E) {
      return Ve(E, function(C) {
        return [C, y[C]];
      });
    }
    function $f(y) {
      return y && y.slice(0, Bf(y) + 1).replace(Ml, "");
    }
    function ht(y) {
      return function(E) {
        return y(E);
      };
    }
    function Wl(y, E) {
      return Ve(E, function(C) {
        return y[C];
      });
    }
    function es(y, E) {
      return y.has(E);
    }
    function Ef(y, E) {
      for (var C = -1, R = y.length; ++C < R && Zr(E, y[C], 0) > -1; )
        ;
      return C;
    }
    function Mf(y, E) {
      for (var C = y.length; C-- && Zr(E, y[C], 0) > -1; )
        ;
      return C;
    }
    function Qg(y, E) {
      for (var C = y.length, R = 0; C--; )
        y[C] === E && ++R;
      return R;
    }
    var Jg = zl(Dg), e0 = zl(Og);
    function t0(y) {
      return "\\" + zg[y];
    }
    function n0(y, E) {
      return y == null ? r : y[E];
    }
    function Ur(y) {
      return Tg.test(y);
    }
    function r0(y) {
      return kg.test(y);
    }
    function o0(y) {
      for (var E, C = []; !(E = y.next()).done; )
        C.push(E.value);
      return C;
    }
    function Fl(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R, H) {
        C[++E] = [H, R];
      }), C;
    }
    function If(y, E) {
      return function(C) {
        return y(E(C));
      };
    }
    function Wn(y, E) {
      for (var C = -1, R = y.length, H = 0, oe = []; ++C < R; ) {
        var Te = y[C];
        (Te === E || Te === m) && (y[C] = m, oe[H++] = C);
      }
      return oe;
    }
    function pi(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R) {
        C[++E] = R;
      }), C;
    }
    function s0(y) {
      var E = -1, C = Array(y.size);
      return y.forEach(function(R) {
        C[++E] = [R, R];
      }), C;
    }
    function i0(y, E, C) {
      for (var R = C - 1, H = y.length; ++R < H; )
        if (y[R] === E)
          return R;
      return -1;
    }
    function a0(y, E, C) {
      for (var R = C + 1; R--; )
        if (y[R] === E)
          return R;
      return R;
    }
    function Yr(y) {
      return Ur(y) ? u0(y) : Ug(y);
    }
    function Ft(y) {
      return Ur(y) ? c0(y) : Yg(y);
    }
    function Bf(y) {
      for (var E = y.length; E-- && Q1.test(y.charAt(E)); )
        ;
      return E;
    }
    var l0 = zl(Lg);
    function u0(y) {
      for (var E = Tl.lastIndex = 0; Tl.test(y); )
        ++E;
      return E;
    }
    function c0(y) {
      return y.match(Tl) || [];
    }
    function d0(y) {
      return y.match(Sg) || [];
    }
    var f0 = function y(E) {
      E = E == null ? Re : Hr.defaults(Re.Object(), E, Hr.pick(Re, Pg));
      var C = E.Array, R = E.Date, H = E.Error, oe = E.Function, Te = E.Math, he = E.Object, Xl = E.RegExp, A0 = E.String, Bt = E.TypeError, wi = C.prototype, h0 = oe.prototype, Gr = he.prototype, vi = E["__core-js_shared__"], mi = h0.toString, le = Gr.hasOwnProperty, p0 = 0, xf = function() {
        var t = /[^.]+$/.exec(vi && vi.keys && vi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), gi = Gr.toString, w0 = mi.call(he), v0 = Re._, m0 = Xl(
        "^" + mi.call(le).replace(El, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Vi = Af ? E.Buffer : r, Fn = E.Symbol, _i = E.Uint8Array, Sf = Vi ? Vi.allocUnsafe : r, yi = If(he.getPrototypeOf, he), Tf = he.create, kf = Gr.propertyIsEnumerable, bi = wi.splice, Pf = Fn ? Fn.isConcatSpreadable : r, ts = Fn ? Fn.iterator : r, cr = Fn ? Fn.toStringTag : r, Ci = function() {
        try {
          var t = pr(he, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), g0 = E.clearTimeout !== Re.clearTimeout && E.clearTimeout, V0 = R && R.now !== Re.Date.now && R.now, _0 = E.setTimeout !== Re.setTimeout && E.setTimeout, $i = Te.ceil, Ei = Te.floor, Zl = he.getOwnPropertySymbols, y0 = Vi ? Vi.isBuffer : r, Nf = E.isFinite, b0 = wi.join, C0 = If(he.keys, he), ke = Te.max, Ye = Te.min, $0 = R.now, E0 = E.parseInt, Df = Te.random, M0 = wi.reverse, Ul = pr(E, "DataView"), ns = pr(E, "Map"), Yl = pr(E, "Promise"), jr = pr(E, "Set"), rs = pr(E, "WeakMap"), os = pr(he, "create"), Mi = rs && new rs(), Kr = {}, I0 = wr(Ul), B0 = wr(ns), x0 = wr(Yl), S0 = wr(jr), T0 = wr(rs), Ii = Fn ? Fn.prototype : r, ss = Ii ? Ii.valueOf : r, Of = Ii ? Ii.toString : r;
      function A(t) {
        if (Ce(t) && !G(t) && !(t instanceof te)) {
          if (t instanceof xt)
            return t;
          if (le.call(t, "__wrapped__"))
            return LA(t);
        }
        return new xt(t);
      }
      var Qr = function() {
        function t() {
        }
        return function(n) {
          if (!_e(n))
            return {};
          if (Tf)
            return Tf(n);
          t.prototype = n;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function Bi() {
      }
      function xt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      A.templateSettings = {
        escape: U1,
        evaluate: Y1,
        interpolate: Zd,
        variable: "",
        imports: {
          _: A
        }
      }, A.prototype = Bi.prototype, A.prototype.constructor = A, xt.prototype = Qr(Bi.prototype), xt.prototype.constructor = xt;
      function te(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = an, this.__views__ = [];
      }
      function k0() {
        var t = new te(this.__wrapped__);
        return t.__actions__ = ot(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ot(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ot(this.__views__), t;
      }
      function P0() {
        if (this.__filtered__) {
          var t = new te(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function N0() {
        var t = this.__wrapped__.value(), n = this.__dir__, s = G(t), l = n < 0, d = s ? t.length : 0, h = YV(0, d, this.__views__), w = h.start, g = h.end, b = g - w, M = l ? g : w - 1, B = this.__iteratees__, k = B.length, z = 0, W = Ye(b, this.__takeCount__);
        if (!s || !l && d == b && W == b)
          return aA(t, this.__actions__);
        var U = [];
        e:
          for (; b-- && z < W; ) {
            M += n;
            for (var K = -1, Y = t[M]; ++K < k; ) {
              var ee = B[K], ne = ee.iteratee, vt = ee.type, et = ne(Y);
              if (vt == Ae)
                Y = et;
              else if (!et) {
                if (vt == Be)
                  continue e;
                break e;
              }
            }
            U[z++] = Y;
          }
        return U;
      }
      te.prototype = Qr(Bi.prototype), te.prototype.constructor = te;
      function dr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function D0() {
        this.__data__ = os ? os(null) : {}, this.size = 0;
      }
      function O0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function L0(t) {
        var n = this.__data__;
        if (os) {
          var s = n[t];
          return s === p ? r : s;
        }
        return le.call(n, t) ? n[t] : r;
      }
      function z0(t) {
        var n = this.__data__;
        return os ? n[t] !== r : le.call(n, t);
      }
      function q0(t, n) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = os && n === r ? p : n, this;
      }
      dr.prototype.clear = D0, dr.prototype.delete = O0, dr.prototype.get = L0, dr.prototype.has = z0, dr.prototype.set = q0;
      function _n(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function R0() {
        this.__data__ = [], this.size = 0;
      }
      function W0(t) {
        var n = this.__data__, s = xi(n, t);
        if (s < 0)
          return !1;
        var l = n.length - 1;
        return s == l ? n.pop() : bi.call(n, s, 1), --this.size, !0;
      }
      function F0(t) {
        var n = this.__data__, s = xi(n, t);
        return s < 0 ? r : n[s][1];
      }
      function X0(t) {
        return xi(this.__data__, t) > -1;
      }
      function Z0(t, n) {
        var s = this.__data__, l = xi(s, t);
        return l < 0 ? (++this.size, s.push([t, n])) : s[l][1] = n, this;
      }
      _n.prototype.clear = R0, _n.prototype.delete = W0, _n.prototype.get = F0, _n.prototype.has = X0, _n.prototype.set = Z0;
      function yn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function U0() {
        this.size = 0, this.__data__ = {
          hash: new dr(),
          map: new (ns || _n)(),
          string: new dr()
        };
      }
      function Y0(t) {
        var n = Wi(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function H0(t) {
        return Wi(this, t).get(t);
      }
      function G0(t) {
        return Wi(this, t).has(t);
      }
      function j0(t, n) {
        var s = Wi(this, t), l = s.size;
        return s.set(t, n), this.size += s.size == l ? 0 : 1, this;
      }
      yn.prototype.clear = U0, yn.prototype.delete = Y0, yn.prototype.get = H0, yn.prototype.has = G0, yn.prototype.set = j0;
      function fr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new yn(); ++n < s; )
          this.add(t[n]);
      }
      function K0(t) {
        return this.__data__.set(t, p), this;
      }
      function Q0(t) {
        return this.__data__.has(t);
      }
      fr.prototype.add = fr.prototype.push = K0, fr.prototype.has = Q0;
      function Xt(t) {
        var n = this.__data__ = new _n(t);
        this.size = n.size;
      }
      function J0() {
        this.__data__ = new _n(), this.size = 0;
      }
      function eV(t) {
        var n = this.__data__, s = n.delete(t);
        return this.size = n.size, s;
      }
      function tV(t) {
        return this.__data__.get(t);
      }
      function nV(t) {
        return this.__data__.has(t);
      }
      function rV(t, n) {
        var s = this.__data__;
        if (s instanceof _n) {
          var l = s.__data__;
          if (!ns || l.length < a - 1)
            return l.push([t, n]), this.size = ++s.size, this;
          s = this.__data__ = new yn(l);
        }
        return s.set(t, n), this.size = s.size, this;
      }
      Xt.prototype.clear = J0, Xt.prototype.delete = eV, Xt.prototype.get = tV, Xt.prototype.has = nV, Xt.prototype.set = rV;
      function Lf(t, n) {
        var s = G(t), l = !s && vr(t), d = !s && !l && Hn(t), h = !s && !l && !d && no(t), w = s || l || d || h, g = w ? Rl(t.length, A0) : [], b = g.length;
        for (var M in t)
          (n || le.call(t, M)) && !(w && (M == "length" || d && (M == "offset" || M == "parent") || h && (M == "buffer" || M == "byteLength" || M == "byteOffset") || En(M, b))) && g.push(M);
        return g;
      }
      function zf(t) {
        var n = t.length;
        return n ? t[ou(0, n - 1)] : r;
      }
      function oV(t, n) {
        return Fi(ot(t), Ar(n, 0, t.length));
      }
      function sV(t) {
        return Fi(ot(t));
      }
      function Hl(t, n, s) {
        (s !== r && !Zt(t[n], s) || s === r && !(n in t)) && bn(t, n, s);
      }
      function is(t, n, s) {
        var l = t[n];
        (!(le.call(t, n) && Zt(l, s)) || s === r && !(n in t)) && bn(t, n, s);
      }
      function xi(t, n) {
        for (var s = t.length; s--; )
          if (Zt(t[s][0], n))
            return s;
        return -1;
      }
      function iV(t, n, s, l) {
        return Xn(t, function(d, h, w) {
          n(l, d, s(d), w);
        }), l;
      }
      function qf(t, n) {
        return t && un(n, De(n), t);
      }
      function aV(t, n) {
        return t && un(n, it(n), t);
      }
      function bn(t, n, s) {
        n == "__proto__" && Ci ? Ci(t, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[n] = s;
      }
      function Gl(t, n) {
        for (var s = -1, l = n.length, d = C(l), h = t == null; ++s < l; )
          d[s] = h ? r : Bu(t, n[s]);
        return d;
      }
      function Ar(t, n, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), n !== r && (t = t >= n ? t : n)), t;
      }
      function St(t, n, s, l, d, h) {
        var w, g = n & V, b = n & _, M = n & x;
        if (s && (w = d ? s(t, l, d, h) : s(t)), w !== r)
          return w;
        if (!_e(t))
          return t;
        var B = G(t);
        if (B) {
          if (w = GV(t), !g)
            return ot(t, w);
        } else {
          var k = He(t), z = k == li || k == Rd;
          if (Hn(t))
            return cA(t, g);
          if (k == Vn || k == Wr || z && !d) {
            if (w = b || z ? {} : BA(t), !g)
              return b ? LV(t, aV(w, t)) : OV(t, qf(w, t));
          } else {
            if (!pe[k])
              return d ? t : {};
            w = jV(t, k, g);
          }
        }
        h || (h = new Xt());
        var W = h.get(t);
        if (W)
          return W;
        h.set(t, w), oh(t) ? t.forEach(function(Y) {
          w.add(St(Y, n, s, Y, t, h));
        }) : nh(t) && t.forEach(function(Y, ee) {
          w.set(ee, St(Y, n, s, ee, t, h));
        });
        var U = M ? b ? pu : hu : b ? it : De, K = B ? r : U(t);
        return It(K || t, function(Y, ee) {
          K && (ee = Y, Y = t[ee]), is(w, ee, St(Y, n, s, ee, t, h));
        }), w;
      }
      function lV(t) {
        var n = De(t);
        return function(s) {
          return Rf(s, t, n);
        };
      }
      function Rf(t, n, s) {
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
      function Wf(t, n, s) {
        if (typeof t != "function")
          throw new Bt(c);
        return As(function() {
          t.apply(r, s);
        }, n);
      }
      function as(t, n, s, l) {
        var d = -1, h = Ai, w = !0, g = t.length, b = [], M = n.length;
        if (!g)
          return b;
        s && (n = Ve(n, ht(s))), l ? (h = Nl, w = !1) : n.length >= a && (h = es, w = !1, n = new fr(n));
        e:
          for (; ++d < g; ) {
            var B = t[d], k = s == null ? B : s(B);
            if (B = l || B !== 0 ? B : 0, w && k === k) {
              for (var z = M; z--; )
                if (n[z] === k)
                  continue e;
              b.push(B);
            } else
              h(n, k, l) || b.push(B);
          }
        return b;
      }
      var Xn = pA(ln), Ff = pA(Kl, !0);
      function uV(t, n) {
        var s = !0;
        return Xn(t, function(l, d, h) {
          return s = !!n(l, d, h), s;
        }), s;
      }
      function Si(t, n, s) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], w = n(h);
          if (w != null && (g === r ? w === w && !wt(w) : s(w, g)))
            var g = w, b = h;
        }
        return b;
      }
      function cV(t, n, s, l) {
        var d = t.length;
        for (s = j(s), s < 0 && (s = -s > d ? 0 : d + s), l = l === r || l > d ? d : j(l), l < 0 && (l += d), l = s > l ? 0 : ih(l); s < l; )
          t[s++] = n;
        return t;
      }
      function Xf(t, n) {
        var s = [];
        return Xn(t, function(l, d, h) {
          n(l, d, h) && s.push(l);
        }), s;
      }
      function We(t, n, s, l, d) {
        var h = -1, w = t.length;
        for (s || (s = QV), d || (d = []); ++h < w; ) {
          var g = t[h];
          n > 0 && s(g) ? n > 1 ? We(g, n - 1, s, l, d) : Rn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var jl = wA(), Zf = wA(!0);
      function ln(t, n) {
        return t && jl(t, n, De);
      }
      function Kl(t, n) {
        return t && Zf(t, n, De);
      }
      function Ti(t, n) {
        return qn(n, function(s) {
          return Mn(t[s]);
        });
      }
      function hr(t, n) {
        n = Un(n, t);
        for (var s = 0, l = n.length; t != null && s < l; )
          t = t[cn(n[s++])];
        return s && s == l ? t : r;
      }
      function Uf(t, n, s) {
        var l = n(t);
        return G(t) ? l : Rn(l, s(t));
      }
      function Qe(t) {
        return t == null ? t === r ? z1 : O1 : cr && cr in he(t) ? UV(t) : s_(t);
      }
      function Ql(t, n) {
        return t > n;
      }
      function dV(t, n) {
        return t != null && le.call(t, n);
      }
      function fV(t, n) {
        return t != null && n in he(t);
      }
      function AV(t, n, s) {
        return t >= Ye(n, s) && t < ke(n, s);
      }
      function Jl(t, n, s) {
        for (var l = s ? Nl : Ai, d = t[0].length, h = t.length, w = h, g = C(h), b = 1 / 0, M = []; w--; ) {
          var B = t[w];
          w && n && (B = Ve(B, ht(n))), b = Ye(B.length, b), g[w] = !s && (n || d >= 120 && B.length >= 120) ? new fr(w && B) : r;
        }
        B = t[0];
        var k = -1, z = g[0];
        e:
          for (; ++k < d && M.length < b; ) {
            var W = B[k], U = n ? n(W) : W;
            if (W = s || W !== 0 ? W : 0, !(z ? es(z, U) : l(M, U, s))) {
              for (w = h; --w; ) {
                var K = g[w];
                if (!(K ? es(K, U) : l(t[w], U, s)))
                  continue e;
              }
              z && z.push(U), M.push(W);
            }
          }
        return M;
      }
      function hV(t, n, s, l) {
        return ln(t, function(d, h, w) {
          n(l, s(d), h, w);
        }), l;
      }
      function ls(t, n, s) {
        n = Un(n, t), t = kA(t, n);
        var l = t == null ? t : t[cn(kt(n))];
        return l == null ? r : At(l, t, s);
      }
      function Yf(t) {
        return Ce(t) && Qe(t) == Wr;
      }
      function pV(t) {
        return Ce(t) && Qe(t) == Jo;
      }
      function wV(t) {
        return Ce(t) && Qe(t) == Ho;
      }
      function us(t, n, s, l, d) {
        return t === n ? !0 : t == null || n == null || !Ce(t) && !Ce(n) ? t !== t && n !== n : vV(t, n, s, l, us, d);
      }
      function vV(t, n, s, l, d, h) {
        var w = G(t), g = G(n), b = w ? ii : He(t), M = g ? ii : He(n);
        b = b == Wr ? Vn : b, M = M == Wr ? Vn : M;
        var B = b == Vn, k = M == Vn, z = b == M;
        if (z && Hn(t)) {
          if (!Hn(n))
            return !1;
          w = !0, B = !1;
        }
        if (z && !B)
          return h || (h = new Xt()), w || no(t) ? EA(t, n, s, l, d, h) : XV(t, n, b, s, l, d, h);
        if (!(s & S)) {
          var W = B && le.call(t, "__wrapped__"), U = k && le.call(n, "__wrapped__");
          if (W || U) {
            var K = W ? t.value() : t, Y = U ? n.value() : n;
            return h || (h = new Xt()), d(K, Y, s, l, h);
          }
        }
        return z ? (h || (h = new Xt()), ZV(t, n, s, l, d, h)) : !1;
      }
      function mV(t) {
        return Ce(t) && He(t) == Rt;
      }
      function eu(t, n, s, l) {
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
          var b = g[0], M = t[b], B = g[1];
          if (w && g[2]) {
            if (M === r && !(b in t))
              return !1;
          } else {
            var k = new Xt();
            if (l)
              var z = l(M, B, b, t, n, k);
            if (!(z === r ? us(B, M, S | D, l, k) : z))
              return !1;
          }
        }
        return !0;
      }
      function Hf(t) {
        if (!_e(t) || e_(t))
          return !1;
        var n = Mn(t) ? m0 : lg;
        return n.test(wr(t));
      }
      function gV(t) {
        return Ce(t) && Qe(t) == jo;
      }
      function VV(t) {
        return Ce(t) && He(t) == Wt;
      }
      function _V(t) {
        return Ce(t) && Gi(t.length) && !!me[Qe(t)];
      }
      function Gf(t) {
        return typeof t == "function" ? t : t == null ? at : typeof t == "object" ? G(t) ? Qf(t[0], t[1]) : Kf(t) : vh(t);
      }
      function tu(t) {
        if (!fs(t))
          return C0(t);
        var n = [];
        for (var s in he(t))
          le.call(t, s) && s != "constructor" && n.push(s);
        return n;
      }
      function yV(t) {
        if (!_e(t))
          return o_(t);
        var n = fs(t), s = [];
        for (var l in t)
          l == "constructor" && (n || !le.call(t, l)) || s.push(l);
        return s;
      }
      function nu(t, n) {
        return t < n;
      }
      function jf(t, n) {
        var s = -1, l = st(t) ? C(t.length) : [];
        return Xn(t, function(d, h, w) {
          l[++s] = n(d, h, w);
        }), l;
      }
      function Kf(t) {
        var n = vu(t);
        return n.length == 1 && n[0][2] ? SA(n[0][0], n[0][1]) : function(s) {
          return s === t || eu(s, t, n);
        };
      }
      function Qf(t, n) {
        return gu(t) && xA(n) ? SA(cn(t), n) : function(s) {
          var l = Bu(s, t);
          return l === r && l === n ? xu(s, t) : us(n, l, S | D);
        };
      }
      function ki(t, n, s, l, d) {
        t !== n && jl(n, function(h, w) {
          if (d || (d = new Xt()), _e(h))
            bV(t, n, w, s, ki, l, d);
          else {
            var g = l ? l(_u(t, w), h, w + "", t, n, d) : r;
            g === r && (g = h), Hl(t, w, g);
          }
        }, it);
      }
      function bV(t, n, s, l, d, h, w) {
        var g = _u(t, s), b = _u(n, s), M = w.get(b);
        if (M) {
          Hl(t, s, M);
          return;
        }
        var B = h ? h(g, b, s + "", t, n, w) : r, k = B === r;
        if (k) {
          var z = G(b), W = !z && Hn(b), U = !z && !W && no(b);
          B = b, z || W || U ? G(g) ? B = g : Ee(g) ? B = ot(g) : W ? (k = !1, B = cA(b, !0)) : U ? (k = !1, B = dA(b, !0)) : B = [] : hs(b) || vr(b) ? (B = g, vr(g) ? B = ah(g) : (!_e(g) || Mn(g)) && (B = BA(b))) : k = !1;
        }
        k && (w.set(b, B), d(B, b, l, h, w), w.delete(b)), Hl(t, s, B);
      }
      function Jf(t, n) {
        var s = t.length;
        if (!!s)
          return n += n < 0 ? s : 0, En(n, s) ? t[n] : r;
      }
      function eA(t, n, s) {
        n.length ? n = Ve(n, function(h) {
          return G(h) ? function(w) {
            return hr(w, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [at];
        var l = -1;
        n = Ve(n, ht(X()));
        var d = jf(t, function(h, w, g) {
          var b = Ve(n, function(M) {
            return M(h);
          });
          return { criteria: b, index: ++l, value: h };
        });
        return jg(d, function(h, w) {
          return DV(h, w, s);
        });
      }
      function CV(t, n) {
        return tA(t, n, function(s, l) {
          return xu(t, l);
        });
      }
      function tA(t, n, s) {
        for (var l = -1, d = n.length, h = {}; ++l < d; ) {
          var w = n[l], g = hr(t, w);
          s(g, w) && cs(h, Un(w, t), g);
        }
        return h;
      }
      function $V(t) {
        return function(n) {
          return hr(n, t);
        };
      }
      function ru(t, n, s, l) {
        var d = l ? Gg : Zr, h = -1, w = n.length, g = t;
        for (t === n && (n = ot(n)), s && (g = Ve(t, ht(s))); ++h < w; )
          for (var b = 0, M = n[h], B = s ? s(M) : M; (b = d(g, B, b, l)) > -1; )
            g !== t && bi.call(g, b, 1), bi.call(t, b, 1);
        return t;
      }
      function nA(t, n) {
        for (var s = t ? n.length : 0, l = s - 1; s--; ) {
          var d = n[s];
          if (s == l || d !== h) {
            var h = d;
            En(d) ? bi.call(t, d, 1) : au(t, d);
          }
        }
        return t;
      }
      function ou(t, n) {
        return t + Ei(Df() * (n - t + 1));
      }
      function EV(t, n, s, l) {
        for (var d = -1, h = ke($i((n - t) / (s || 1)), 0), w = C(h); h--; )
          w[l ? h : ++d] = t, t += s;
        return w;
      }
      function su(t, n) {
        var s = "";
        if (!t || n < 1 || n > Ke)
          return s;
        do
          n % 2 && (s += t), n = Ei(n / 2), n && (t += t);
        while (n);
        return s;
      }
      function J(t, n) {
        return yu(TA(t, n, at), t + "");
      }
      function MV(t) {
        return zf(ro(t));
      }
      function IV(t, n) {
        var s = ro(t);
        return Fi(s, Ar(n, 0, s.length));
      }
      function cs(t, n, s, l) {
        if (!_e(t))
          return t;
        n = Un(n, t);
        for (var d = -1, h = n.length, w = h - 1, g = t; g != null && ++d < h; ) {
          var b = cn(n[d]), M = s;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != w) {
            var B = g[b];
            M = l ? l(B, b, g) : r, M === r && (M = _e(B) ? B : En(n[d + 1]) ? [] : {});
          }
          is(g, b, M), g = g[b];
        }
        return t;
      }
      var rA = Mi ? function(t, n) {
        return Mi.set(t, n), t;
      } : at, BV = Ci ? function(t, n) {
        return Ci(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Tu(n),
          writable: !0
        });
      } : at;
      function xV(t) {
        return Fi(ro(t));
      }
      function Tt(t, n, s) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), s = s > d ? d : s, s < 0 && (s += d), d = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var h = C(d); ++l < d; )
          h[l] = t[l + n];
        return h;
      }
      function SV(t, n) {
        var s;
        return Xn(t, function(l, d, h) {
          return s = n(l, d, h), !s;
        }), !!s;
      }
      function Pi(t, n, s) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= k1) {
          for (; l < d; ) {
            var h = l + d >>> 1, w = t[h];
            w !== null && !wt(w) && (s ? w <= n : w < n) ? l = h + 1 : d = h;
          }
          return d;
        }
        return iu(t, n, at, s);
      }
      function iu(t, n, s, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        n = s(n);
        for (var w = n !== n, g = n === null, b = wt(n), M = n === r; d < h; ) {
          var B = Ei((d + h) / 2), k = s(t[B]), z = k !== r, W = k === null, U = k === k, K = wt(k);
          if (w)
            var Y = l || U;
          else
            M ? Y = U && (l || z) : g ? Y = U && z && (l || !W) : b ? Y = U && z && !W && (l || !K) : W || K ? Y = !1 : Y = l ? k <= n : k < n;
          Y ? d = B + 1 : h = B;
        }
        return Ye(h, T1);
      }
      function oA(t, n) {
        for (var s = -1, l = t.length, d = 0, h = []; ++s < l; ) {
          var w = t[s], g = n ? n(w) : w;
          if (!s || !Zt(g, b)) {
            var b = g;
            h[d++] = w === 0 ? 0 : w;
          }
        }
        return h;
      }
      function sA(t) {
        return typeof t == "number" ? t : wt(t) ? si : +t;
      }
      function pt(t) {
        if (typeof t == "string")
          return t;
        if (G(t))
          return Ve(t, pt) + "";
        if (wt(t))
          return Of ? Of.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -qe ? "-0" : n;
      }
      function Zn(t, n, s) {
        var l = -1, d = Ai, h = t.length, w = !0, g = [], b = g;
        if (s)
          w = !1, d = Nl;
        else if (h >= a) {
          var M = n ? null : WV(t);
          if (M)
            return pi(M);
          w = !1, d = es, b = new fr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < h; ) {
            var B = t[l], k = n ? n(B) : B;
            if (B = s || B !== 0 ? B : 0, w && k === k) {
              for (var z = b.length; z--; )
                if (b[z] === k)
                  continue e;
              n && b.push(k), g.push(B);
            } else
              d(b, k, s) || (b !== g && b.push(k), g.push(B));
          }
        return g;
      }
      function au(t, n) {
        return n = Un(n, t), t = kA(t, n), t == null || delete t[cn(kt(n))];
      }
      function iA(t, n, s, l) {
        return cs(t, n, s(hr(t, n)), l);
      }
      function Ni(t, n, s, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && n(t[h], h, t); )
          ;
        return s ? Tt(t, l ? 0 : h, l ? h + 1 : d) : Tt(t, l ? h + 1 : 0, l ? d : h);
      }
      function aA(t, n) {
        var s = t;
        return s instanceof te && (s = s.value()), Dl(n, function(l, d) {
          return d.func.apply(d.thisArg, Rn([l], d.args));
        }, s);
      }
      function lu(t, n, s) {
        var l = t.length;
        if (l < 2)
          return l ? Zn(t[0]) : [];
        for (var d = -1, h = C(l); ++d < l; )
          for (var w = t[d], g = -1; ++g < l; )
            g != d && (h[d] = as(h[d] || w, t[g], n, s));
        return Zn(We(h, 1), n, s);
      }
      function lA(t, n, s) {
        for (var l = -1, d = t.length, h = n.length, w = {}; ++l < d; ) {
          var g = l < h ? n[l] : r;
          s(w, t[l], g);
        }
        return w;
      }
      function uu(t) {
        return Ee(t) ? t : [];
      }
      function cu(t) {
        return typeof t == "function" ? t : at;
      }
      function Un(t, n) {
        return G(t) ? t : gu(t, n) ? [t] : OA(ie(t));
      }
      var TV = J;
      function Yn(t, n, s) {
        var l = t.length;
        return s = s === r ? l : s, !n && s >= l ? t : Tt(t, n, s);
      }
      var uA = g0 || function(t) {
        return Re.clearTimeout(t);
      };
      function cA(t, n) {
        if (n)
          return t.slice();
        var s = t.length, l = Sf ? Sf(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function du(t) {
        var n = new t.constructor(t.byteLength);
        return new _i(n).set(new _i(t)), n;
      }
      function kV(t, n) {
        var s = n ? du(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function PV(t) {
        var n = new t.constructor(t.source, Ud.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function NV(t) {
        return ss ? he(ss.call(t)) : {};
      }
      function dA(t, n) {
        var s = n ? du(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function fA(t, n) {
        if (t !== n) {
          var s = t !== r, l = t === null, d = t === t, h = wt(t), w = n !== r, g = n === null, b = n === n, M = wt(n);
          if (!g && !M && !h && t > n || h && w && b && !g && !M || l && w && b || !s && b || !d)
            return 1;
          if (!l && !h && !M && t < n || M && s && d && !l && !h || g && s && d || !w && d || !b)
            return -1;
        }
        return 0;
      }
      function DV(t, n, s) {
        for (var l = -1, d = t.criteria, h = n.criteria, w = d.length, g = s.length; ++l < w; ) {
          var b = fA(d[l], h[l]);
          if (b) {
            if (l >= g)
              return b;
            var M = s[l];
            return b * (M == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function AA(t, n, s, l) {
        for (var d = -1, h = t.length, w = s.length, g = -1, b = n.length, M = ke(h - w, 0), B = C(b + M), k = !l; ++g < b; )
          B[g] = n[g];
        for (; ++d < w; )
          (k || d < h) && (B[s[d]] = t[d]);
        for (; M--; )
          B[g++] = t[d++];
        return B;
      }
      function hA(t, n, s, l) {
        for (var d = -1, h = t.length, w = -1, g = s.length, b = -1, M = n.length, B = ke(h - g, 0), k = C(B + M), z = !l; ++d < B; )
          k[d] = t[d];
        for (var W = d; ++b < M; )
          k[W + b] = n[b];
        for (; ++w < g; )
          (z || d < h) && (k[W + s[w]] = t[d++]);
        return k;
      }
      function ot(t, n) {
        var s = -1, l = t.length;
        for (n || (n = C(l)); ++s < l; )
          n[s] = t[s];
        return n;
      }
      function un(t, n, s, l) {
        var d = !s;
        s || (s = {});
        for (var h = -1, w = n.length; ++h < w; ) {
          var g = n[h], b = l ? l(s[g], t[g], g, s, t) : r;
          b === r && (b = t[g]), d ? bn(s, g, b) : is(s, g, b);
        }
        return s;
      }
      function OV(t, n) {
        return un(t, mu(t), n);
      }
      function LV(t, n) {
        return un(t, MA(t), n);
      }
      function Di(t, n) {
        return function(s, l) {
          var d = G(s) ? Fg : iV, h = n ? n() : {};
          return d(s, t, X(l, 2), h);
        };
      }
      function Jr(t) {
        return J(function(n, s) {
          var l = -1, d = s.length, h = d > 1 ? s[d - 1] : r, w = d > 2 ? s[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, w && Je(s[0], s[1], w) && (h = d < 3 ? r : h, d = 1), n = he(n); ++l < d; ) {
            var g = s[l];
            g && t(n, g, l, h);
          }
          return n;
        });
      }
      function pA(t, n) {
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
      function wA(t) {
        return function(n, s, l) {
          for (var d = -1, h = he(n), w = l(n), g = w.length; g--; ) {
            var b = w[t ? g : ++d];
            if (s(h[b], b, h) === !1)
              break;
          }
          return n;
        };
      }
      function zV(t, n, s) {
        var l = n & N, d = ds(t);
        function h() {
          var w = this && this !== Re && this instanceof h ? d : t;
          return w.apply(l ? s : this, arguments);
        }
        return h;
      }
      function vA(t) {
        return function(n) {
          n = ie(n);
          var s = Ur(n) ? Ft(n) : r, l = s ? s[0] : n.charAt(0), d = s ? Yn(s, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function eo(t) {
        return function(n) {
          return Dl(ph(hh(n).replace(Bg, "")), t, "");
        };
      }
      function ds(t) {
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
          var s = Qr(t.prototype), l = t.apply(s, n);
          return _e(l) ? l : s;
        };
      }
      function qV(t, n, s) {
        var l = ds(t);
        function d() {
          for (var h = arguments.length, w = C(h), g = h, b = to(d); g--; )
            w[g] = arguments[g];
          var M = h < 3 && w[0] !== b && w[h - 1] !== b ? [] : Wn(w, b);
          if (h -= M.length, h < s)
            return yA(
              t,
              n,
              Oi,
              d.placeholder,
              r,
              w,
              M,
              r,
              r,
              s - h
            );
          var B = this && this !== Re && this instanceof d ? l : t;
          return At(B, this, w);
        }
        return d;
      }
      function mA(t) {
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
      function gA(t) {
        return $n(function(n) {
          var s = n.length, l = s, d = xt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var h = n[l];
            if (typeof h != "function")
              throw new Bt(c);
            if (d && !w && Ri(h) == "wrapper")
              var w = new xt([], !0);
          }
          for (l = w ? l : s; ++l < s; ) {
            h = n[l];
            var g = Ri(h), b = g == "wrapper" ? wu(h) : r;
            b && Vu(b[0]) && b[1] == (L | T | I | F) && !b[4].length && b[9] == 1 ? w = w[Ri(b[0])].apply(w, b[3]) : w = h.length == 1 && Vu(h) ? w[g]() : w.thru(h);
          }
          return function() {
            var M = arguments, B = M[0];
            if (w && M.length == 1 && G(B))
              return w.plant(B).value();
            for (var k = 0, z = s ? n[k].apply(this, M) : B; ++k < s; )
              z = n[k].call(this, z);
            return z;
          };
        });
      }
      function Oi(t, n, s, l, d, h, w, g, b, M) {
        var B = n & L, k = n & N, z = n & $, W = n & (T | O), U = n & ge, K = z ? r : ds(t);
        function Y() {
          for (var ee = arguments.length, ne = C(ee), vt = ee; vt--; )
            ne[vt] = arguments[vt];
          if (W)
            var et = to(Y), mt = Qg(ne, et);
          if (l && (ne = AA(ne, l, d, W)), h && (ne = hA(ne, h, w, W)), ee -= mt, W && ee < M) {
            var Me = Wn(ne, et);
            return yA(
              t,
              n,
              Oi,
              Y.placeholder,
              s,
              ne,
              Me,
              g,
              b,
              M - ee
            );
          }
          var Ut = k ? s : this, Bn = z ? Ut[t] : t;
          return ee = ne.length, g ? ne = i_(ne, g) : U && ee > 1 && ne.reverse(), B && b < ee && (ne.length = b), this && this !== Re && this instanceof Y && (Bn = K || ds(Bn)), Bn.apply(Ut, ne);
        }
        return Y;
      }
      function VA(t, n) {
        return function(s, l) {
          return hV(s, t, n(l), {});
        };
      }
      function Li(t, n) {
        return function(s, l) {
          var d;
          if (s === r && l === r)
            return n;
          if (s !== r && (d = s), l !== r) {
            if (d === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = pt(s), l = pt(l)) : (s = sA(s), l = sA(l)), d = t(s, l);
          }
          return d;
        };
      }
      function fu(t) {
        return $n(function(n) {
          return n = Ve(n, ht(X())), J(function(s) {
            var l = this;
            return t(n, function(d) {
              return At(d, l, s);
            });
          });
        });
      }
      function zi(t, n) {
        n = n === r ? " " : pt(n);
        var s = n.length;
        if (s < 2)
          return s ? su(n, t) : n;
        var l = su(n, $i(t / Yr(n)));
        return Ur(n) ? Yn(Ft(l), 0, t).join("") : l.slice(0, t);
      }
      function RV(t, n, s, l) {
        var d = n & N, h = ds(t);
        function w() {
          for (var g = -1, b = arguments.length, M = -1, B = l.length, k = C(B + b), z = this && this !== Re && this instanceof w ? h : t; ++M < B; )
            k[M] = l[M];
          for (; b--; )
            k[M++] = arguments[++g];
          return At(z, d ? s : this, k);
        }
        return w;
      }
      function _A(t) {
        return function(n, s, l) {
          return l && typeof l != "number" && Je(n, s, l) && (s = l = r), n = In(n), s === r ? (s = n, n = 0) : s = In(s), l = l === r ? n < s ? 1 : -1 : In(l), EV(n, s, l, t);
        };
      }
      function qi(t) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = Pt(n), s = Pt(s)), t(n, s);
        };
      }
      function yA(t, n, s, l, d, h, w, g, b, M) {
        var B = n & T, k = B ? w : r, z = B ? r : w, W = B ? h : r, U = B ? r : h;
        n |= B ? I : q, n &= ~(B ? q : I), n & P || (n &= ~(N | $));
        var K = [
          t,
          n,
          d,
          W,
          k,
          U,
          z,
          g,
          b,
          M
        ], Y = s.apply(r, K);
        return Vu(t) && PA(Y, K), Y.placeholder = l, NA(Y, t, n);
      }
      function Au(t) {
        var n = Te[t];
        return function(s, l) {
          if (s = Pt(s), l = l == null ? 0 : Ye(j(l), 292), l && Nf(s)) {
            var d = (ie(s) + "e").split("e"), h = n(d[0] + "e" + (+d[1] + l));
            return d = (ie(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(s);
        };
      }
      var WV = jr && 1 / pi(new jr([, -0]))[1] == qe ? function(t) {
        return new jr(t);
      } : Nu;
      function bA(t) {
        return function(n) {
          var s = He(n);
          return s == Rt ? Fl(n) : s == Wt ? s0(n) : Kg(n, t(n));
        };
      }
      function Cn(t, n, s, l, d, h, w, g) {
        var b = n & $;
        if (!b && typeof t != "function")
          throw new Bt(c);
        var M = l ? l.length : 0;
        if (M || (n &= ~(I | q), l = d = r), w = w === r ? w : ke(j(w), 0), g = g === r ? g : j(g), M -= d ? d.length : 0, n & q) {
          var B = l, k = d;
          l = d = r;
        }
        var z = b ? r : wu(t), W = [
          t,
          n,
          s,
          l,
          d,
          B,
          k,
          h,
          w,
          g
        ];
        if (z && r_(W, z), t = W[0], n = W[1], s = W[2], l = W[3], d = W[4], g = W[9] = W[9] === r ? b ? 0 : t.length : ke(W[9] - M, 0), !g && n & (T | O) && (n &= ~(T | O)), !n || n == N)
          var U = zV(t, n, s);
        else
          n == T || n == O ? U = qV(t, n, g) : (n == I || n == (N | I)) && !d.length ? U = RV(t, n, s, l) : U = Oi.apply(r, W);
        var K = z ? rA : PA;
        return NA(K(U, W), t, n);
      }
      function CA(t, n, s, l) {
        return t === r || Zt(t, Gr[s]) && !le.call(l, s) ? n : t;
      }
      function $A(t, n, s, l, d, h) {
        return _e(t) && _e(n) && (h.set(n, t), ki(t, n, r, $A, h), h.delete(n)), t;
      }
      function FV(t) {
        return hs(t) ? r : t;
      }
      function EA(t, n, s, l, d, h) {
        var w = s & S, g = t.length, b = n.length;
        if (g != b && !(w && b > g))
          return !1;
        var M = h.get(t), B = h.get(n);
        if (M && B)
          return M == n && B == t;
        var k = -1, z = !0, W = s & D ? new fr() : r;
        for (h.set(t, n), h.set(n, t); ++k < g; ) {
          var U = t[k], K = n[k];
          if (l)
            var Y = w ? l(K, U, k, n, t, h) : l(U, K, k, t, n, h);
          if (Y !== r) {
            if (Y)
              continue;
            z = !1;
            break;
          }
          if (W) {
            if (!Ol(n, function(ee, ne) {
              if (!es(W, ne) && (U === ee || d(U, ee, s, l, h)))
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
      function XV(t, n, s, l, d, h, w) {
        switch (s) {
          case Fr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Jo:
            return !(t.byteLength != n.byteLength || !h(new _i(t), new _i(n)));
          case Yo:
          case Ho:
          case Go:
            return Zt(+t, +n);
          case ai:
            return t.name == n.name && t.message == n.message;
          case jo:
          case Ko:
            return t == n + "";
          case Rt:
            var g = Fl;
          case Wt:
            var b = l & S;
            if (g || (g = pi), t.size != n.size && !b)
              return !1;
            var M = w.get(t);
            if (M)
              return M == n;
            l |= D, w.set(t, n);
            var B = EA(g(t), g(n), l, d, h, w);
            return w.delete(t), B;
          case ui:
            if (ss)
              return ss.call(t) == ss.call(n);
        }
        return !1;
      }
      function ZV(t, n, s, l, d, h) {
        var w = s & S, g = hu(t), b = g.length, M = hu(n), B = M.length;
        if (b != B && !w)
          return !1;
        for (var k = b; k--; ) {
          var z = g[k];
          if (!(w ? z in n : le.call(n, z)))
            return !1;
        }
        var W = h.get(t), U = h.get(n);
        if (W && U)
          return W == n && U == t;
        var K = !0;
        h.set(t, n), h.set(n, t);
        for (var Y = w; ++k < b; ) {
          z = g[k];
          var ee = t[z], ne = n[z];
          if (l)
            var vt = w ? l(ne, ee, z, n, t, h) : l(ee, ne, z, t, n, h);
          if (!(vt === r ? ee === ne || d(ee, ne, s, l, h) : vt)) {
            K = !1;
            break;
          }
          Y || (Y = z == "constructor");
        }
        if (K && !Y) {
          var et = t.constructor, mt = n.constructor;
          et != mt && "constructor" in t && "constructor" in n && !(typeof et == "function" && et instanceof et && typeof mt == "function" && mt instanceof mt) && (K = !1);
        }
        return h.delete(t), h.delete(n), K;
      }
      function $n(t) {
        return yu(TA(t, r, RA), t + "");
      }
      function hu(t) {
        return Uf(t, De, mu);
      }
      function pu(t) {
        return Uf(t, it, MA);
      }
      var wu = Mi ? function(t) {
        return Mi.get(t);
      } : Nu;
      function Ri(t) {
        for (var n = t.name + "", s = Kr[n], l = le.call(Kr, n) ? s.length : 0; l--; ) {
          var d = s[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return n;
      }
      function to(t) {
        var n = le.call(A, "placeholder") ? A : t;
        return n.placeholder;
      }
      function X() {
        var t = A.iteratee || ku;
        return t = t === ku ? Gf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Wi(t, n) {
        var s = t.__data__;
        return JV(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function vu(t) {
        for (var n = De(t), s = n.length; s--; ) {
          var l = n[s], d = t[l];
          n[s] = [l, d, xA(d)];
        }
        return n;
      }
      function pr(t, n) {
        var s = n0(t, n);
        return Hf(s) ? s : r;
      }
      function UV(t) {
        var n = le.call(t, cr), s = t[cr];
        try {
          t[cr] = r;
          var l = !0;
        } catch {
        }
        var d = gi.call(t);
        return l && (n ? t[cr] = s : delete t[cr]), d;
      }
      var mu = Zl ? function(t) {
        return t == null ? [] : (t = he(t), qn(Zl(t), function(n) {
          return kf.call(t, n);
        }));
      } : Du, MA = Zl ? function(t) {
        for (var n = []; t; )
          Rn(n, mu(t)), t = yi(t);
        return n;
      } : Du, He = Qe;
      (Ul && He(new Ul(new ArrayBuffer(1))) != Fr || ns && He(new ns()) != Rt || Yl && He(Yl.resolve()) != Wd || jr && He(new jr()) != Wt || rs && He(new rs()) != Qo) && (He = function(t) {
        var n = Qe(t), s = n == Vn ? t.constructor : r, l = s ? wr(s) : "";
        if (l)
          switch (l) {
            case I0:
              return Fr;
            case B0:
              return Rt;
            case x0:
              return Wd;
            case S0:
              return Wt;
            case T0:
              return Qo;
          }
        return n;
      });
      function YV(t, n, s) {
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
              n = Ye(n, t + w);
              break;
            case "takeRight":
              t = ke(t, n - w);
              break;
          }
        }
        return { start: t, end: n };
      }
      function HV(t) {
        var n = t.match(eg);
        return n ? n[1].split(tg) : [];
      }
      function IA(t, n, s) {
        n = Un(n, t);
        for (var l = -1, d = n.length, h = !1; ++l < d; ) {
          var w = cn(n[l]);
          if (!(h = t != null && s(t, w)))
            break;
          t = t[w];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && Gi(d) && En(w, d) && (G(t) || vr(t)));
      }
      function GV(t) {
        var n = t.length, s = new t.constructor(n);
        return n && typeof t[0] == "string" && le.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function BA(t) {
        return typeof t.constructor == "function" && !fs(t) ? Qr(yi(t)) : {};
      }
      function jV(t, n, s) {
        var l = t.constructor;
        switch (n) {
          case Jo:
            return du(t);
          case Yo:
          case Ho:
            return new l(+t);
          case Fr:
            return kV(t, s);
          case vl:
          case ml:
          case gl:
          case Vl:
          case _l:
          case yl:
          case bl:
          case Cl:
          case $l:
            return dA(t, s);
          case Rt:
            return new l();
          case Go:
          case Ko:
            return new l(t);
          case jo:
            return PV(t);
          case Wt:
            return new l();
          case ui:
            return NV(t);
        }
      }
      function KV(t, n) {
        var s = n.length;
        if (!s)
          return t;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), t.replace(J1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function QV(t) {
        return G(t) || vr(t) || !!(Pf && t && t[Pf]);
      }
      function En(t, n) {
        var s = typeof t;
        return n = n == null ? Ke : n, !!n && (s == "number" || s != "symbol" && cg.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Je(t, n, s) {
        if (!_e(s))
          return !1;
        var l = typeof n;
        return (l == "number" ? st(s) && En(n, s.length) : l == "string" && n in s) ? Zt(s[n], t) : !1;
      }
      function gu(t, n) {
        if (G(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || wt(t) ? !0 : G1.test(t) || !H1.test(t) || n != null && t in he(n);
      }
      function JV(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Vu(t) {
        var n = Ri(t), s = A[n];
        if (typeof s != "function" || !(n in te.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = wu(s);
        return !!l && t === l[0];
      }
      function e_(t) {
        return !!xf && xf in t;
      }
      var t_ = vi ? Mn : Ou;
      function fs(t) {
        var n = t && t.constructor, s = typeof n == "function" && n.prototype || Gr;
        return t === s;
      }
      function xA(t) {
        return t === t && !_e(t);
      }
      function SA(t, n) {
        return function(s) {
          return s == null ? !1 : s[t] === n && (n !== r || t in he(s));
        };
      }
      function n_(t) {
        var n = Yi(t, function(l) {
          return s.size === v && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function r_(t, n) {
        var s = t[1], l = n[1], d = s | l, h = d < (N | $ | L), w = l == L && s == T || l == L && s == F && t[7].length <= n[8] || l == (L | F) && n[7].length <= n[8] && s == T;
        if (!(h || w))
          return t;
        l & N && (t[2] = n[2], d |= s & N ? 0 : P);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? AA(b, g, n[4]) : g, t[4] = b ? Wn(t[3], m) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? hA(b, g, n[6]) : g, t[6] = b ? Wn(t[5], m) : n[6]), g = n[7], g && (t[7] = g), l & L && (t[8] = t[8] == null ? n[8] : Ye(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function o_(t) {
        var n = [];
        if (t != null)
          for (var s in he(t))
            n.push(s);
        return n;
      }
      function s_(t) {
        return gi.call(t);
      }
      function TA(t, n, s) {
        return n = ke(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, h = ke(l.length - n, 0), w = C(h); ++d < h; )
            w[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = s(w), At(t, this, g);
        };
      }
      function kA(t, n) {
        return n.length < 2 ? t : hr(t, Tt(n, 0, -1));
      }
      function i_(t, n) {
        for (var s = t.length, l = Ye(n.length, s), d = ot(t); l--; ) {
          var h = n[l];
          t[l] = En(h, s) ? d[h] : r;
        }
        return t;
      }
      function _u(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var PA = DA(rA), As = _0 || function(t, n) {
        return Re.setTimeout(t, n);
      }, yu = DA(BV);
      function NA(t, n, s) {
        var l = n + "";
        return yu(t, KV(l, a_(HV(l), s)));
      }
      function DA(t) {
        var n = 0, s = 0;
        return function() {
          var l = $0(), d = $e - (l - s);
          if (s = l, d > 0) {
            if (++n >= be)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Fi(t, n) {
        var s = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++s < n; ) {
          var h = ou(s, d), w = t[h];
          t[h] = t[s], t[s] = w;
        }
        return t.length = n, t;
      }
      var OA = n_(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(j1, function(s, l, d, h) {
          n.push(d ? h.replace(og, "$1") : l || s);
        }), n;
      });
      function cn(t) {
        if (typeof t == "string" || wt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -qe ? "-0" : n;
      }
      function wr(t) {
        if (t != null) {
          try {
            return mi.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function a_(t, n) {
        return It(P1, function(s) {
          var l = "_." + s[0];
          n & s[1] && !Ai(t, l) && t.push(l);
        }), t.sort();
      }
      function LA(t) {
        if (t instanceof te)
          return t.clone();
        var n = new xt(t.__wrapped__, t.__chain__);
        return n.__actions__ = ot(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function l_(t, n, s) {
        (s ? Je(t, n, s) : n === r) ? n = 1 : n = ke(j(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, h = 0, w = C($i(l / n)); d < l; )
          w[h++] = Tt(t, d, d += n);
        return w;
      }
      function u_(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = 0, d = []; ++n < s; ) {
          var h = t[n];
          h && (d[l++] = h);
        }
        return d;
      }
      function c_() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), s = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Rn(G(s) ? ot(s) : [s], We(n, 1));
      }
      var d_ = J(function(t, n) {
        return Ee(t) ? as(t, We(n, 1, Ee, !0)) : [];
      }), f_ = J(function(t, n) {
        var s = kt(n);
        return Ee(s) && (s = r), Ee(t) ? as(t, We(n, 1, Ee, !0), X(s, 2)) : [];
      }), A_ = J(function(t, n) {
        var s = kt(n);
        return Ee(s) && (s = r), Ee(t) ? as(t, We(n, 1, Ee, !0), r, s) : [];
      });
      function h_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), Tt(t, n < 0 ? 0 : n, l)) : [];
      }
      function p_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), n = l - n, Tt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function w_(t, n) {
        return t && t.length ? Ni(t, X(n, 3), !0, !0) : [];
      }
      function v_(t, n) {
        return t && t.length ? Ni(t, X(n, 3), !0) : [];
      }
      function m_(t, n, s, l) {
        var d = t == null ? 0 : t.length;
        return d ? (s && typeof s != "number" && Je(t, n, s) && (s = 0, l = d), cV(t, n, s, l)) : [];
      }
      function zA(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : j(s);
        return d < 0 && (d = ke(l + d, 0)), hi(t, X(n, 3), d);
      }
      function qA(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return s !== r && (d = j(s), d = s < 0 ? ke(l + d, 0) : Ye(d, l - 1)), hi(t, X(n, 3), d, !0);
      }
      function RA(t) {
        var n = t == null ? 0 : t.length;
        return n ? We(t, 1) : [];
      }
      function g_(t) {
        var n = t == null ? 0 : t.length;
        return n ? We(t, qe) : [];
      }
      function V_(t, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n = n === r ? 1 : j(n), We(t, n)) : [];
      }
      function __(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = {}; ++n < s; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function WA(t) {
        return t && t.length ? t[0] : r;
      }
      function y_(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : j(s);
        return d < 0 && (d = ke(l + d, 0)), Zr(t, n, d);
      }
      function b_(t) {
        var n = t == null ? 0 : t.length;
        return n ? Tt(t, 0, -1) : [];
      }
      var C_ = J(function(t) {
        var n = Ve(t, uu);
        return n.length && n[0] === t[0] ? Jl(n) : [];
      }), $_ = J(function(t) {
        var n = kt(t), s = Ve(t, uu);
        return n === kt(s) ? n = r : s.pop(), s.length && s[0] === t[0] ? Jl(s, X(n, 2)) : [];
      }), E_ = J(function(t) {
        var n = kt(t), s = Ve(t, uu);
        return n = typeof n == "function" ? n : r, n && s.pop(), s.length && s[0] === t[0] ? Jl(s, r, n) : [];
      });
      function M_(t, n) {
        return t == null ? "" : b0.call(t, n);
      }
      function kt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function I_(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return s !== r && (d = j(s), d = d < 0 ? ke(l + d, 0) : Ye(d, l - 1)), n === n ? a0(t, n, d) : hi(t, yf, d, !0);
      }
      function B_(t, n) {
        return t && t.length ? Jf(t, j(n)) : r;
      }
      var x_ = J(FA);
      function FA(t, n) {
        return t && t.length && n && n.length ? ru(t, n) : t;
      }
      function S_(t, n, s) {
        return t && t.length && n && n.length ? ru(t, n, X(s, 2)) : t;
      }
      function T_(t, n, s) {
        return t && t.length && n && n.length ? ru(t, n, r, s) : t;
      }
      var k_ = $n(function(t, n) {
        var s = t == null ? 0 : t.length, l = Gl(t, n);
        return nA(t, Ve(n, function(d) {
          return En(d, s) ? +d : d;
        }).sort(fA)), l;
      });
      function P_(t, n) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, d = [], h = t.length;
        for (n = X(n, 3); ++l < h; ) {
          var w = t[l];
          n(w, l, t) && (s.push(w), d.push(l));
        }
        return nA(t, d), s;
      }
      function bu(t) {
        return t == null ? t : M0.call(t);
      }
      function N_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && Je(t, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : j(n), s = s === r ? l : j(s)), Tt(t, n, s)) : [];
      }
      function D_(t, n) {
        return Pi(t, n);
      }
      function O_(t, n, s) {
        return iu(t, n, X(s, 2));
      }
      function L_(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Pi(t, n);
          if (l < s && Zt(t[l], n))
            return l;
        }
        return -1;
      }
      function z_(t, n) {
        return Pi(t, n, !0);
      }
      function q_(t, n, s) {
        return iu(t, n, X(s, 2), !0);
      }
      function R_(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Pi(t, n, !0) - 1;
          if (Zt(t[l], n))
            return l;
        }
        return -1;
      }
      function W_(t) {
        return t && t.length ? oA(t) : [];
      }
      function F_(t, n) {
        return t && t.length ? oA(t, X(n, 2)) : [];
      }
      function X_(t) {
        var n = t == null ? 0 : t.length;
        return n ? Tt(t, 1, n) : [];
      }
      function Z_(t, n, s) {
        return t && t.length ? (n = s || n === r ? 1 : j(n), Tt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function U_(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : j(n), n = l - n, Tt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Y_(t, n) {
        return t && t.length ? Ni(t, X(n, 3), !1, !0) : [];
      }
      function H_(t, n) {
        return t && t.length ? Ni(t, X(n, 3)) : [];
      }
      var G_ = J(function(t) {
        return Zn(We(t, 1, Ee, !0));
      }), j_ = J(function(t) {
        var n = kt(t);
        return Ee(n) && (n = r), Zn(We(t, 1, Ee, !0), X(n, 2));
      }), K_ = J(function(t) {
        var n = kt(t);
        return n = typeof n == "function" ? n : r, Zn(We(t, 1, Ee, !0), r, n);
      });
      function Q_(t) {
        return t && t.length ? Zn(t) : [];
      }
      function J_(t, n) {
        return t && t.length ? Zn(t, X(n, 2)) : [];
      }
      function ey(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Zn(t, r, n) : [];
      }
      function Cu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = qn(t, function(s) {
          if (Ee(s))
            return n = ke(s.length, n), !0;
        }), Rl(n, function(s) {
          return Ve(t, Ll(s));
        });
      }
      function XA(t, n) {
        if (!(t && t.length))
          return [];
        var s = Cu(t);
        return n == null ? s : Ve(s, function(l) {
          return At(n, r, l);
        });
      }
      var ty = J(function(t, n) {
        return Ee(t) ? as(t, n) : [];
      }), ny = J(function(t) {
        return lu(qn(t, Ee));
      }), ry = J(function(t) {
        var n = kt(t);
        return Ee(n) && (n = r), lu(qn(t, Ee), X(n, 2));
      }), oy = J(function(t) {
        var n = kt(t);
        return n = typeof n == "function" ? n : r, lu(qn(t, Ee), r, n);
      }), sy = J(Cu);
      function iy(t, n) {
        return lA(t || [], n || [], is);
      }
      function ay(t, n) {
        return lA(t || [], n || [], cs);
      }
      var ly = J(function(t) {
        var n = t.length, s = n > 1 ? t[n - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, XA(t, s);
      });
      function ZA(t) {
        var n = A(t);
        return n.__chain__ = !0, n;
      }
      function uy(t, n) {
        return n(t), t;
      }
      function Xi(t, n) {
        return n(t);
      }
      var cy = $n(function(t) {
        var n = t.length, s = n ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Gl(h, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof te) || !En(s) ? this.thru(d) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Xi,
          args: [d],
          thisArg: r
        }), new xt(l, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function dy() {
        return ZA(this);
      }
      function fy() {
        return new xt(this.value(), this.__chain__);
      }
      function Ay() {
        this.__values__ === r && (this.__values__ = sh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function hy() {
        return this;
      }
      function py(t) {
        for (var n, s = this; s instanceof Bi; ) {
          var l = LA(s);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          s = s.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function wy() {
        var t = this.__wrapped__;
        if (t instanceof te) {
          var n = t;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: Xi,
            args: [bu],
            thisArg: r
          }), new xt(n, this.__chain__);
        }
        return this.thru(bu);
      }
      function vy() {
        return aA(this.__wrapped__, this.__actions__);
      }
      var my = Di(function(t, n, s) {
        le.call(t, s) ? ++t[s] : bn(t, s, 1);
      });
      function gy(t, n, s) {
        var l = G(t) ? Vf : uV;
        return s && Je(t, n, s) && (n = r), l(t, X(n, 3));
      }
      function Vy(t, n) {
        var s = G(t) ? qn : Xf;
        return s(t, X(n, 3));
      }
      var _y = mA(zA), yy = mA(qA);
      function by(t, n) {
        return We(Zi(t, n), 1);
      }
      function Cy(t, n) {
        return We(Zi(t, n), qe);
      }
      function $y(t, n, s) {
        return s = s === r ? 1 : j(s), We(Zi(t, n), s);
      }
      function UA(t, n) {
        var s = G(t) ? It : Xn;
        return s(t, X(n, 3));
      }
      function YA(t, n) {
        var s = G(t) ? Xg : Ff;
        return s(t, X(n, 3));
      }
      var Ey = Di(function(t, n, s) {
        le.call(t, s) ? t[s].push(n) : bn(t, s, [n]);
      });
      function My(t, n, s, l) {
        t = st(t) ? t : ro(t), s = s && !l ? j(s) : 0;
        var d = t.length;
        return s < 0 && (s = ke(d + s, 0)), ji(t) ? s <= d && t.indexOf(n, s) > -1 : !!d && Zr(t, n, s) > -1;
      }
      var Iy = J(function(t, n, s) {
        var l = -1, d = typeof n == "function", h = st(t) ? C(t.length) : [];
        return Xn(t, function(w) {
          h[++l] = d ? At(n, w, s) : ls(w, n, s);
        }), h;
      }), By = Di(function(t, n, s) {
        bn(t, s, n);
      });
      function Zi(t, n) {
        var s = G(t) ? Ve : jf;
        return s(t, X(n, 3));
      }
      function xy(t, n, s, l) {
        return t == null ? [] : (G(n) || (n = n == null ? [] : [n]), s = l ? r : s, G(s) || (s = s == null ? [] : [s]), eA(t, n, s));
      }
      var Sy = Di(function(t, n, s) {
        t[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Ty(t, n, s) {
        var l = G(t) ? Dl : Cf, d = arguments.length < 3;
        return l(t, X(n, 4), s, d, Xn);
      }
      function ky(t, n, s) {
        var l = G(t) ? Zg : Cf, d = arguments.length < 3;
        return l(t, X(n, 4), s, d, Ff);
      }
      function Py(t, n) {
        var s = G(t) ? qn : Xf;
        return s(t, Hi(X(n, 3)));
      }
      function Ny(t) {
        var n = G(t) ? zf : MV;
        return n(t);
      }
      function Dy(t, n, s) {
        (s ? Je(t, n, s) : n === r) ? n = 1 : n = j(n);
        var l = G(t) ? oV : IV;
        return l(t, n);
      }
      function Oy(t) {
        var n = G(t) ? sV : xV;
        return n(t);
      }
      function Ly(t) {
        if (t == null)
          return 0;
        if (st(t))
          return ji(t) ? Yr(t) : t.length;
        var n = He(t);
        return n == Rt || n == Wt ? t.size : tu(t).length;
      }
      function zy(t, n, s) {
        var l = G(t) ? Ol : SV;
        return s && Je(t, n, s) && (n = r), l(t, X(n, 3));
      }
      var qy = J(function(t, n) {
        if (t == null)
          return [];
        var s = n.length;
        return s > 1 && Je(t, n[0], n[1]) ? n = [] : s > 2 && Je(n[0], n[1], n[2]) && (n = [n[0]]), eA(t, We(n, 1), []);
      }), Ui = V0 || function() {
        return Re.Date.now();
      };
      function Ry(t, n) {
        if (typeof n != "function")
          throw new Bt(c);
        return t = j(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function HA(t, n, s) {
        return n = s ? r : n, n = t && n == null ? t.length : n, Cn(t, L, r, r, r, r, n);
      }
      function GA(t, n) {
        var s;
        if (typeof n != "function")
          throw new Bt(c);
        return t = j(t), function() {
          return --t > 0 && (s = n.apply(this, arguments)), t <= 1 && (n = r), s;
        };
      }
      var $u = J(function(t, n, s) {
        var l = N;
        if (s.length) {
          var d = Wn(s, to($u));
          l |= I;
        }
        return Cn(t, l, n, s, d);
      }), jA = J(function(t, n, s) {
        var l = N | $;
        if (s.length) {
          var d = Wn(s, to(jA));
          l |= I;
        }
        return Cn(n, l, t, s, d);
      });
      function KA(t, n, s) {
        n = s ? r : n;
        var l = Cn(t, T, r, r, r, r, r, n);
        return l.placeholder = KA.placeholder, l;
      }
      function QA(t, n, s) {
        n = s ? r : n;
        var l = Cn(t, O, r, r, r, r, r, n);
        return l.placeholder = QA.placeholder, l;
      }
      function JA(t, n, s) {
        var l, d, h, w, g, b, M = 0, B = !1, k = !1, z = !0;
        if (typeof t != "function")
          throw new Bt(c);
        n = Pt(n) || 0, _e(s) && (B = !!s.leading, k = "maxWait" in s, h = k ? ke(Pt(s.maxWait) || 0, n) : h, z = "trailing" in s ? !!s.trailing : z);
        function W(Me) {
          var Ut = l, Bn = d;
          return l = d = r, M = Me, w = t.apply(Bn, Ut), w;
        }
        function U(Me) {
          return M = Me, g = As(ee, n), B ? W(Me) : w;
        }
        function K(Me) {
          var Ut = Me - b, Bn = Me - M, mh = n - Ut;
          return k ? Ye(mh, h - Bn) : mh;
        }
        function Y(Me) {
          var Ut = Me - b, Bn = Me - M;
          return b === r || Ut >= n || Ut < 0 || k && Bn >= h;
        }
        function ee() {
          var Me = Ui();
          if (Y(Me))
            return ne(Me);
          g = As(ee, K(Me));
        }
        function ne(Me) {
          return g = r, z && l ? W(Me) : (l = d = r, w);
        }
        function vt() {
          g !== r && uA(g), M = 0, l = b = d = g = r;
        }
        function et() {
          return g === r ? w : ne(Ui());
        }
        function mt() {
          var Me = Ui(), Ut = Y(Me);
          if (l = arguments, d = this, b = Me, Ut) {
            if (g === r)
              return U(b);
            if (k)
              return uA(g), g = As(ee, n), W(b);
          }
          return g === r && (g = As(ee, n)), w;
        }
        return mt.cancel = vt, mt.flush = et, mt;
      }
      var Wy = J(function(t, n) {
        return Wf(t, 1, n);
      }), Fy = J(function(t, n, s) {
        return Wf(t, Pt(n) || 0, s);
      });
      function Xy(t) {
        return Cn(t, ge);
      }
      function Yi(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Bt(c);
        var s = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], h = s.cache;
          if (h.has(d))
            return h.get(d);
          var w = t.apply(this, l);
          return s.cache = h.set(d, w) || h, w;
        };
        return s.cache = new (Yi.Cache || yn)(), s;
      }
      Yi.Cache = yn;
      function Hi(t) {
        if (typeof t != "function")
          throw new Bt(c);
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
      function Zy(t) {
        return GA(2, t);
      }
      var Uy = TV(function(t, n) {
        n = n.length == 1 && G(n[0]) ? Ve(n[0], ht(X())) : Ve(We(n, 1), ht(X()));
        var s = n.length;
        return J(function(l) {
          for (var d = -1, h = Ye(l.length, s); ++d < h; )
            l[d] = n[d].call(this, l[d]);
          return At(t, this, l);
        });
      }), Eu = J(function(t, n) {
        var s = Wn(n, to(Eu));
        return Cn(t, I, r, n, s);
      }), eh = J(function(t, n) {
        var s = Wn(n, to(eh));
        return Cn(t, q, r, n, s);
      }), Yy = $n(function(t, n) {
        return Cn(t, F, r, r, r, n);
      });
      function Hy(t, n) {
        if (typeof t != "function")
          throw new Bt(c);
        return n = n === r ? n : j(n), J(t, n);
      }
      function Gy(t, n) {
        if (typeof t != "function")
          throw new Bt(c);
        return n = n == null ? 0 : ke(j(n), 0), J(function(s) {
          var l = s[n], d = Yn(s, 0, n);
          return l && Rn(d, l), At(t, this, d);
        });
      }
      function jy(t, n, s) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Bt(c);
        return _e(s) && (l = "leading" in s ? !!s.leading : l, d = "trailing" in s ? !!s.trailing : d), JA(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function Ky(t) {
        return HA(t, 1);
      }
      function Qy(t, n) {
        return Eu(cu(n), t);
      }
      function Jy() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return G(t) ? t : [t];
      }
      function eb(t) {
        return St(t, x);
      }
      function tb(t, n) {
        return n = typeof n == "function" ? n : r, St(t, x, n);
      }
      function nb(t) {
        return St(t, V | x);
      }
      function rb(t, n) {
        return n = typeof n == "function" ? n : r, St(t, V | x, n);
      }
      function ob(t, n) {
        return n == null || Rf(t, n, De(n));
      }
      function Zt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var sb = qi(Ql), ib = qi(function(t, n) {
        return t >= n;
      }), vr = Yf(function() {
        return arguments;
      }()) ? Yf : function(t) {
        return Ce(t) && le.call(t, "callee") && !kf.call(t, "callee");
      }, G = C.isArray, ab = hf ? ht(hf) : pV;
      function st(t) {
        return t != null && Gi(t.length) && !Mn(t);
      }
      function Ee(t) {
        return Ce(t) && st(t);
      }
      function lb(t) {
        return t === !0 || t === !1 || Ce(t) && Qe(t) == Yo;
      }
      var Hn = y0 || Ou, ub = pf ? ht(pf) : wV;
      function cb(t) {
        return Ce(t) && t.nodeType === 1 && !hs(t);
      }
      function db(t) {
        if (t == null)
          return !0;
        if (st(t) && (G(t) || typeof t == "string" || typeof t.splice == "function" || Hn(t) || no(t) || vr(t)))
          return !t.length;
        var n = He(t);
        if (n == Rt || n == Wt)
          return !t.size;
        if (fs(t))
          return !tu(t).length;
        for (var s in t)
          if (le.call(t, s))
            return !1;
        return !0;
      }
      function fb(t, n) {
        return us(t, n);
      }
      function Ab(t, n, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(t, n) : r;
        return l === r ? us(t, n, r, s) : !!l;
      }
      function Mu(t) {
        if (!Ce(t))
          return !1;
        var n = Qe(t);
        return n == ai || n == D1 || typeof t.message == "string" && typeof t.name == "string" && !hs(t);
      }
      function hb(t) {
        return typeof t == "number" && Nf(t);
      }
      function Mn(t) {
        if (!_e(t))
          return !1;
        var n = Qe(t);
        return n == li || n == Rd || n == N1 || n == L1;
      }
      function th(t) {
        return typeof t == "number" && t == j(t);
      }
      function Gi(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ke;
      }
      function _e(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Ce(t) {
        return t != null && typeof t == "object";
      }
      var nh = wf ? ht(wf) : mV;
      function pb(t, n) {
        return t === n || eu(t, n, vu(n));
      }
      function wb(t, n, s) {
        return s = typeof s == "function" ? s : r, eu(t, n, vu(n), s);
      }
      function vb(t) {
        return rh(t) && t != +t;
      }
      function mb(t) {
        if (t_(t))
          throw new H(u);
        return Hf(t);
      }
      function gb(t) {
        return t === null;
      }
      function Vb(t) {
        return t == null;
      }
      function rh(t) {
        return typeof t == "number" || Ce(t) && Qe(t) == Go;
      }
      function hs(t) {
        if (!Ce(t) || Qe(t) != Vn)
          return !1;
        var n = yi(t);
        if (n === null)
          return !0;
        var s = le.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && mi.call(s) == w0;
      }
      var Iu = vf ? ht(vf) : gV;
      function _b(t) {
        return th(t) && t >= -Ke && t <= Ke;
      }
      var oh = mf ? ht(mf) : VV;
      function ji(t) {
        return typeof t == "string" || !G(t) && Ce(t) && Qe(t) == Ko;
      }
      function wt(t) {
        return typeof t == "symbol" || Ce(t) && Qe(t) == ui;
      }
      var no = gf ? ht(gf) : _V;
      function yb(t) {
        return t === r;
      }
      function bb(t) {
        return Ce(t) && He(t) == Qo;
      }
      function Cb(t) {
        return Ce(t) && Qe(t) == q1;
      }
      var $b = qi(nu), Eb = qi(function(t, n) {
        return t <= n;
      });
      function sh(t) {
        if (!t)
          return [];
        if (st(t))
          return ji(t) ? Ft(t) : ot(t);
        if (ts && t[ts])
          return o0(t[ts]());
        var n = He(t), s = n == Rt ? Fl : n == Wt ? pi : ro;
        return s(t);
      }
      function In(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Pt(t), t === qe || t === -qe) {
          var n = t < 0 ? -1 : 1;
          return n * Uo;
        }
        return t === t ? t : 0;
      }
      function j(t) {
        var n = In(t), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function ih(t) {
        return t ? Ar(j(t), 0, an) : 0;
      }
      function Pt(t) {
        if (typeof t == "number")
          return t;
        if (wt(t))
          return si;
        if (_e(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = _e(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = $f(t);
        var s = ag.test(t);
        return s || ug.test(t) ? Rg(t.slice(2), s ? 2 : 8) : ig.test(t) ? si : +t;
      }
      function ah(t) {
        return un(t, it(t));
      }
      function Mb(t) {
        return t ? Ar(j(t), -Ke, Ke) : t === 0 ? t : 0;
      }
      function ie(t) {
        return t == null ? "" : pt(t);
      }
      var Ib = Jr(function(t, n) {
        if (fs(n) || st(n)) {
          un(n, De(n), t);
          return;
        }
        for (var s in n)
          le.call(n, s) && is(t, s, n[s]);
      }), lh = Jr(function(t, n) {
        un(n, it(n), t);
      }), Ki = Jr(function(t, n, s, l) {
        un(n, it(n), t, l);
      }), Bb = Jr(function(t, n, s, l) {
        un(n, De(n), t, l);
      }), xb = $n(Gl);
      function Sb(t, n) {
        var s = Qr(t);
        return n == null ? s : qf(s, n);
      }
      var Tb = J(function(t, n) {
        t = he(t);
        var s = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Je(n[0], n[1], d) && (l = 1); ++s < l; )
          for (var h = n[s], w = it(h), g = -1, b = w.length; ++g < b; ) {
            var M = w[g], B = t[M];
            (B === r || Zt(B, Gr[M]) && !le.call(t, M)) && (t[M] = h[M]);
          }
        return t;
      }), kb = J(function(t) {
        return t.push(r, $A), At(uh, r, t);
      });
      function Pb(t, n) {
        return _f(t, X(n, 3), ln);
      }
      function Nb(t, n) {
        return _f(t, X(n, 3), Kl);
      }
      function Db(t, n) {
        return t == null ? t : jl(t, X(n, 3), it);
      }
      function Ob(t, n) {
        return t == null ? t : Zf(t, X(n, 3), it);
      }
      function Lb(t, n) {
        return t && ln(t, X(n, 3));
      }
      function zb(t, n) {
        return t && Kl(t, X(n, 3));
      }
      function qb(t) {
        return t == null ? [] : Ti(t, De(t));
      }
      function Rb(t) {
        return t == null ? [] : Ti(t, it(t));
      }
      function Bu(t, n, s) {
        var l = t == null ? r : hr(t, n);
        return l === r ? s : l;
      }
      function Wb(t, n) {
        return t != null && IA(t, n, dV);
      }
      function xu(t, n) {
        return t != null && IA(t, n, fV);
      }
      var Fb = VA(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = gi.call(n)), t[n] = s;
      }, Tu(at)), Xb = VA(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = gi.call(n)), le.call(t, n) ? t[n].push(s) : t[n] = [s];
      }, X), Zb = J(ls);
      function De(t) {
        return st(t) ? Lf(t) : tu(t);
      }
      function it(t) {
        return st(t) ? Lf(t, !0) : yV(t);
      }
      function Ub(t, n) {
        var s = {};
        return n = X(n, 3), ln(t, function(l, d, h) {
          bn(s, n(l, d, h), l);
        }), s;
      }
      function Yb(t, n) {
        var s = {};
        return n = X(n, 3), ln(t, function(l, d, h) {
          bn(s, d, n(l, d, h));
        }), s;
      }
      var Hb = Jr(function(t, n, s) {
        ki(t, n, s);
      }), uh = Jr(function(t, n, s, l) {
        ki(t, n, s, l);
      }), Gb = $n(function(t, n) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        n = Ve(n, function(h) {
          return h = Un(h, t), l || (l = h.length > 1), h;
        }), un(t, pu(t), s), l && (s = St(s, V | _ | x, FV));
        for (var d = n.length; d--; )
          au(s, n[d]);
        return s;
      });
      function jb(t, n) {
        return ch(t, Hi(X(n)));
      }
      var Kb = $n(function(t, n) {
        return t == null ? {} : CV(t, n);
      });
      function ch(t, n) {
        if (t == null)
          return {};
        var s = Ve(pu(t), function(l) {
          return [l];
        });
        return n = X(n), tA(t, s, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Qb(t, n, s) {
        n = Un(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[cn(n[l])];
          h === r && (l = d, h = s), t = Mn(h) ? h.call(t) : h;
        }
        return t;
      }
      function Jb(t, n, s) {
        return t == null ? t : cs(t, n, s);
      }
      function eC(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : cs(t, n, s, l);
      }
      var dh = bA(De), fh = bA(it);
      function tC(t, n, s) {
        var l = G(t), d = l || Hn(t) || no(t);
        if (n = X(n, 4), s == null) {
          var h = t && t.constructor;
          d ? s = l ? new h() : [] : _e(t) ? s = Mn(h) ? Qr(yi(t)) : {} : s = {};
        }
        return (d ? It : ln)(t, function(w, g, b) {
          return n(s, w, g, b);
        }), s;
      }
      function nC(t, n) {
        return t == null ? !0 : au(t, n);
      }
      function rC(t, n, s) {
        return t == null ? t : iA(t, n, cu(s));
      }
      function oC(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : iA(t, n, cu(s), l);
      }
      function ro(t) {
        return t == null ? [] : Wl(t, De(t));
      }
      function sC(t) {
        return t == null ? [] : Wl(t, it(t));
      }
      function iC(t, n, s) {
        return s === r && (s = n, n = r), s !== r && (s = Pt(s), s = s === s ? s : 0), n !== r && (n = Pt(n), n = n === n ? n : 0), Ar(Pt(t), n, s);
      }
      function aC(t, n, s) {
        return n = In(n), s === r ? (s = n, n = 0) : s = In(s), t = Pt(t), AV(t, n, s);
      }
      function lC(t, n, s) {
        if (s && typeof s != "boolean" && Je(t, n, s) && (n = s = r), s === r && (typeof n == "boolean" ? (s = n, n = r) : typeof t == "boolean" && (s = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = In(t), n === r ? (n = t, t = 0) : n = In(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (s || t % 1 || n % 1) {
          var d = Df();
          return Ye(t + d * (n - t + qg("1e-" + ((d + "").length - 1))), n);
        }
        return ou(t, n);
      }
      var uC = eo(function(t, n, s) {
        return n = n.toLowerCase(), t + (s ? Ah(n) : n);
      });
      function Ah(t) {
        return Su(ie(t).toLowerCase());
      }
      function hh(t) {
        return t = ie(t), t && t.replace(dg, Jg).replace(xg, "");
      }
      function cC(t, n, s) {
        t = ie(t), n = pt(n);
        var l = t.length;
        s = s === r ? l : Ar(j(s), 0, l);
        var d = s;
        return s -= n.length, s >= 0 && t.slice(s, d) == n;
      }
      function dC(t) {
        return t = ie(t), t && Z1.test(t) ? t.replace(Xd, e0) : t;
      }
      function fC(t) {
        return t = ie(t), t && K1.test(t) ? t.replace(El, "\\$&") : t;
      }
      var AC = eo(function(t, n, s) {
        return t + (s ? "-" : "") + n.toLowerCase();
      }), hC = eo(function(t, n, s) {
        return t + (s ? " " : "") + n.toLowerCase();
      }), pC = vA("toLowerCase");
      function wC(t, n, s) {
        t = ie(t), n = j(n);
        var l = n ? Yr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return zi(Ei(d), s) + t + zi($i(d), s);
      }
      function vC(t, n, s) {
        t = ie(t), n = j(n);
        var l = n ? Yr(t) : 0;
        return n && l < n ? t + zi(n - l, s) : t;
      }
      function mC(t, n, s) {
        t = ie(t), n = j(n);
        var l = n ? Yr(t) : 0;
        return n && l < n ? zi(n - l, s) + t : t;
      }
      function gC(t, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), E0(ie(t).replace(Ml, ""), n || 0);
      }
      function VC(t, n, s) {
        return (s ? Je(t, n, s) : n === r) ? n = 1 : n = j(n), su(ie(t), n);
      }
      function _C() {
        var t = arguments, n = ie(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var yC = eo(function(t, n, s) {
        return t + (s ? "_" : "") + n.toLowerCase();
      });
      function bC(t, n, s) {
        return s && typeof s != "number" && Je(t, n, s) && (n = s = r), s = s === r ? an : s >>> 0, s ? (t = ie(t), t && (typeof n == "string" || n != null && !Iu(n)) && (n = pt(n), !n && Ur(t)) ? Yn(Ft(t), 0, s) : t.split(n, s)) : [];
      }
      var CC = eo(function(t, n, s) {
        return t + (s ? " " : "") + Su(n);
      });
      function $C(t, n, s) {
        return t = ie(t), s = s == null ? 0 : Ar(j(s), 0, t.length), n = pt(n), t.slice(s, s + n.length) == n;
      }
      function EC(t, n, s) {
        var l = A.templateSettings;
        s && Je(t, n, s) && (n = r), t = ie(t), n = Ki({}, n, l, CA);
        var d = Ki({}, n.imports, l.imports, CA), h = De(d), w = Wl(d, h), g, b, M = 0, B = n.interpolate || ci, k = "__p += '", z = Xl(
          (n.escape || ci).source + "|" + B.source + "|" + (B === Zd ? sg : ci).source + "|" + (n.evaluate || ci).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (le.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ng + "]") + `
`;
        t.replace(z, function(Y, ee, ne, vt, et, mt) {
          return ne || (ne = vt), k += t.slice(M, mt).replace(fg, t0), ee && (g = !0, k += `' +
__e(` + ee + `) +
'`), et && (b = !0, k += `';
` + et + `;
__p += '`), ne && (k += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), M = mt + Y.length, Y;
        }), k += `';
`;
        var U = le.call(n, "variable") && n.variable;
        if (!U)
          k = `with (obj) {
` + k + `
}
`;
        else if (rg.test(U))
          throw new H(f);
        k = (b ? k.replace(R1, "") : k).replace(W1, "$1").replace(F1, "$1;"), k = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + k + `return __p
}`;
        var K = wh(function() {
          return oe(h, W + "return " + k).apply(r, w);
        });
        if (K.source = k, Mu(K))
          throw K;
        return K;
      }
      function MC(t) {
        return ie(t).toLowerCase();
      }
      function IC(t) {
        return ie(t).toUpperCase();
      }
      function BC(t, n, s) {
        if (t = ie(t), t && (s || n === r))
          return $f(t);
        if (!t || !(n = pt(n)))
          return t;
        var l = Ft(t), d = Ft(n), h = Ef(l, d), w = Mf(l, d) + 1;
        return Yn(l, h, w).join("");
      }
      function xC(t, n, s) {
        if (t = ie(t), t && (s || n === r))
          return t.slice(0, Bf(t) + 1);
        if (!t || !(n = pt(n)))
          return t;
        var l = Ft(t), d = Mf(l, Ft(n)) + 1;
        return Yn(l, 0, d).join("");
      }
      function SC(t, n, s) {
        if (t = ie(t), t && (s || n === r))
          return t.replace(Ml, "");
        if (!t || !(n = pt(n)))
          return t;
        var l = Ft(t), d = Ef(l, Ft(n));
        return Yn(l, d).join("");
      }
      function TC(t, n) {
        var s = fe, l = ve;
        if (_e(n)) {
          var d = "separator" in n ? n.separator : d;
          s = "length" in n ? j(n.length) : s, l = "omission" in n ? pt(n.omission) : l;
        }
        t = ie(t);
        var h = t.length;
        if (Ur(t)) {
          var w = Ft(t);
          h = w.length;
        }
        if (s >= h)
          return t;
        var g = s - Yr(l);
        if (g < 1)
          return l;
        var b = w ? Yn(w, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (w && (g += b.length - g), Iu(d)) {
          if (t.slice(g).search(d)) {
            var M, B = b;
            for (d.global || (d = Xl(d.source, ie(Ud.exec(d)) + "g")), d.lastIndex = 0; M = d.exec(B); )
              var k = M.index;
            b = b.slice(0, k === r ? g : k);
          }
        } else if (t.indexOf(pt(d), g) != g) {
          var z = b.lastIndexOf(d);
          z > -1 && (b = b.slice(0, z));
        }
        return b + l;
      }
      function kC(t) {
        return t = ie(t), t && X1.test(t) ? t.replace(Fd, l0) : t;
      }
      var PC = eo(function(t, n, s) {
        return t + (s ? " " : "") + n.toUpperCase();
      }), Su = vA("toUpperCase");
      function ph(t, n, s) {
        return t = ie(t), n = s ? r : n, n === r ? r0(t) ? d0(t) : Hg(t) : t.match(n) || [];
      }
      var wh = J(function(t, n) {
        try {
          return At(t, r, n);
        } catch (s) {
          return Mu(s) ? s : new H(s);
        }
      }), NC = $n(function(t, n) {
        return It(n, function(s) {
          s = cn(s), bn(t, s, $u(t[s], t));
        }), t;
      });
      function DC(t) {
        var n = t == null ? 0 : t.length, s = X();
        return t = n ? Ve(t, function(l) {
          if (typeof l[1] != "function")
            throw new Bt(c);
          return [s(l[0]), l[1]];
        }) : [], J(function(l) {
          for (var d = -1; ++d < n; ) {
            var h = t[d];
            if (At(h[0], this, l))
              return At(h[1], this, l);
          }
        });
      }
      function OC(t) {
        return lV(St(t, V));
      }
      function Tu(t) {
        return function() {
          return t;
        };
      }
      function LC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var zC = gA(), qC = gA(!0);
      function at(t) {
        return t;
      }
      function ku(t) {
        return Gf(typeof t == "function" ? t : St(t, V));
      }
      function RC(t) {
        return Kf(St(t, V));
      }
      function WC(t, n) {
        return Qf(t, St(n, V));
      }
      var FC = J(function(t, n) {
        return function(s) {
          return ls(s, t, n);
        };
      }), XC = J(function(t, n) {
        return function(s) {
          return ls(t, s, n);
        };
      });
      function Pu(t, n, s) {
        var l = De(n), d = Ti(n, l);
        s == null && !(_e(n) && (d.length || !l.length)) && (s = n, n = t, t = this, d = Ti(n, De(n)));
        var h = !(_e(s) && "chain" in s) || !!s.chain, w = Mn(t);
        return It(d, function(g) {
          var b = n[g];
          t[g] = b, w && (t.prototype[g] = function() {
            var M = this.__chain__;
            if (h || M) {
              var B = t(this.__wrapped__), k = B.__actions__ = ot(this.__actions__);
              return k.push({ func: b, args: arguments, thisArg: t }), B.__chain__ = M, B;
            }
            return b.apply(t, Rn([this.value()], arguments));
          });
        }), t;
      }
      function ZC() {
        return Re._ === this && (Re._ = v0), this;
      }
      function Nu() {
      }
      function UC(t) {
        return t = j(t), J(function(n) {
          return Jf(n, t);
        });
      }
      var YC = fu(Ve), HC = fu(Vf), GC = fu(Ol);
      function vh(t) {
        return gu(t) ? Ll(cn(t)) : $V(t);
      }
      function jC(t) {
        return function(n) {
          return t == null ? r : hr(t, n);
        };
      }
      var KC = _A(), QC = _A(!0);
      function Du() {
        return [];
      }
      function Ou() {
        return !1;
      }
      function JC() {
        return {};
      }
      function e2() {
        return "";
      }
      function t2() {
        return !0;
      }
      function n2(t, n) {
        if (t = j(t), t < 1 || t > Ke)
          return [];
        var s = an, l = Ye(t, an);
        n = X(n), t -= an;
        for (var d = Rl(l, n); ++s < t; )
          n(s);
        return d;
      }
      function r2(t) {
        return G(t) ? Ve(t, cn) : wt(t) ? [t] : ot(OA(ie(t)));
      }
      function o2(t) {
        var n = ++p0;
        return ie(t) + n;
      }
      var s2 = Li(function(t, n) {
        return t + n;
      }, 0), i2 = Au("ceil"), a2 = Li(function(t, n) {
        return t / n;
      }, 1), l2 = Au("floor");
      function u2(t) {
        return t && t.length ? Si(t, at, Ql) : r;
      }
      function c2(t, n) {
        return t && t.length ? Si(t, X(n, 2), Ql) : r;
      }
      function d2(t) {
        return bf(t, at);
      }
      function f2(t, n) {
        return bf(t, X(n, 2));
      }
      function A2(t) {
        return t && t.length ? Si(t, at, nu) : r;
      }
      function h2(t, n) {
        return t && t.length ? Si(t, X(n, 2), nu) : r;
      }
      var p2 = Li(function(t, n) {
        return t * n;
      }, 1), w2 = Au("round"), v2 = Li(function(t, n) {
        return t - n;
      }, 0);
      function m2(t) {
        return t && t.length ? ql(t, at) : 0;
      }
      function g2(t, n) {
        return t && t.length ? ql(t, X(n, 2)) : 0;
      }
      return A.after = Ry, A.ary = HA, A.assign = Ib, A.assignIn = lh, A.assignInWith = Ki, A.assignWith = Bb, A.at = xb, A.before = GA, A.bind = $u, A.bindAll = NC, A.bindKey = jA, A.castArray = Jy, A.chain = ZA, A.chunk = l_, A.compact = u_, A.concat = c_, A.cond = DC, A.conforms = OC, A.constant = Tu, A.countBy = my, A.create = Sb, A.curry = KA, A.curryRight = QA, A.debounce = JA, A.defaults = Tb, A.defaultsDeep = kb, A.defer = Wy, A.delay = Fy, A.difference = d_, A.differenceBy = f_, A.differenceWith = A_, A.drop = h_, A.dropRight = p_, A.dropRightWhile = w_, A.dropWhile = v_, A.fill = m_, A.filter = Vy, A.flatMap = by, A.flatMapDeep = Cy, A.flatMapDepth = $y, A.flatten = RA, A.flattenDeep = g_, A.flattenDepth = V_, A.flip = Xy, A.flow = zC, A.flowRight = qC, A.fromPairs = __, A.functions = qb, A.functionsIn = Rb, A.groupBy = Ey, A.initial = b_, A.intersection = C_, A.intersectionBy = $_, A.intersectionWith = E_, A.invert = Fb, A.invertBy = Xb, A.invokeMap = Iy, A.iteratee = ku, A.keyBy = By, A.keys = De, A.keysIn = it, A.map = Zi, A.mapKeys = Ub, A.mapValues = Yb, A.matches = RC, A.matchesProperty = WC, A.memoize = Yi, A.merge = Hb, A.mergeWith = uh, A.method = FC, A.methodOf = XC, A.mixin = Pu, A.negate = Hi, A.nthArg = UC, A.omit = Gb, A.omitBy = jb, A.once = Zy, A.orderBy = xy, A.over = YC, A.overArgs = Uy, A.overEvery = HC, A.overSome = GC, A.partial = Eu, A.partialRight = eh, A.partition = Sy, A.pick = Kb, A.pickBy = ch, A.property = vh, A.propertyOf = jC, A.pull = x_, A.pullAll = FA, A.pullAllBy = S_, A.pullAllWith = T_, A.pullAt = k_, A.range = KC, A.rangeRight = QC, A.rearg = Yy, A.reject = Py, A.remove = P_, A.rest = Hy, A.reverse = bu, A.sampleSize = Dy, A.set = Jb, A.setWith = eC, A.shuffle = Oy, A.slice = N_, A.sortBy = qy, A.sortedUniq = W_, A.sortedUniqBy = F_, A.split = bC, A.spread = Gy, A.tail = X_, A.take = Z_, A.takeRight = U_, A.takeRightWhile = Y_, A.takeWhile = H_, A.tap = uy, A.throttle = jy, A.thru = Xi, A.toArray = sh, A.toPairs = dh, A.toPairsIn = fh, A.toPath = r2, A.toPlainObject = ah, A.transform = tC, A.unary = Ky, A.union = G_, A.unionBy = j_, A.unionWith = K_, A.uniq = Q_, A.uniqBy = J_, A.uniqWith = ey, A.unset = nC, A.unzip = Cu, A.unzipWith = XA, A.update = rC, A.updateWith = oC, A.values = ro, A.valuesIn = sC, A.without = ty, A.words = ph, A.wrap = Qy, A.xor = ny, A.xorBy = ry, A.xorWith = oy, A.zip = sy, A.zipObject = iy, A.zipObjectDeep = ay, A.zipWith = ly, A.entries = dh, A.entriesIn = fh, A.extend = lh, A.extendWith = Ki, Pu(A, A), A.add = s2, A.attempt = wh, A.camelCase = uC, A.capitalize = Ah, A.ceil = i2, A.clamp = iC, A.clone = eb, A.cloneDeep = nb, A.cloneDeepWith = rb, A.cloneWith = tb, A.conformsTo = ob, A.deburr = hh, A.defaultTo = LC, A.divide = a2, A.endsWith = cC, A.eq = Zt, A.escape = dC, A.escapeRegExp = fC, A.every = gy, A.find = _y, A.findIndex = zA, A.findKey = Pb, A.findLast = yy, A.findLastIndex = qA, A.findLastKey = Nb, A.floor = l2, A.forEach = UA, A.forEachRight = YA, A.forIn = Db, A.forInRight = Ob, A.forOwn = Lb, A.forOwnRight = zb, A.get = Bu, A.gt = sb, A.gte = ib, A.has = Wb, A.hasIn = xu, A.head = WA, A.identity = at, A.includes = My, A.indexOf = y_, A.inRange = aC, A.invoke = Zb, A.isArguments = vr, A.isArray = G, A.isArrayBuffer = ab, A.isArrayLike = st, A.isArrayLikeObject = Ee, A.isBoolean = lb, A.isBuffer = Hn, A.isDate = ub, A.isElement = cb, A.isEmpty = db, A.isEqual = fb, A.isEqualWith = Ab, A.isError = Mu, A.isFinite = hb, A.isFunction = Mn, A.isInteger = th, A.isLength = Gi, A.isMap = nh, A.isMatch = pb, A.isMatchWith = wb, A.isNaN = vb, A.isNative = mb, A.isNil = Vb, A.isNull = gb, A.isNumber = rh, A.isObject = _e, A.isObjectLike = Ce, A.isPlainObject = hs, A.isRegExp = Iu, A.isSafeInteger = _b, A.isSet = oh, A.isString = ji, A.isSymbol = wt, A.isTypedArray = no, A.isUndefined = yb, A.isWeakMap = bb, A.isWeakSet = Cb, A.join = M_, A.kebabCase = AC, A.last = kt, A.lastIndexOf = I_, A.lowerCase = hC, A.lowerFirst = pC, A.lt = $b, A.lte = Eb, A.max = u2, A.maxBy = c2, A.mean = d2, A.meanBy = f2, A.min = A2, A.minBy = h2, A.stubArray = Du, A.stubFalse = Ou, A.stubObject = JC, A.stubString = e2, A.stubTrue = t2, A.multiply = p2, A.nth = B_, A.noConflict = ZC, A.noop = Nu, A.now = Ui, A.pad = wC, A.padEnd = vC, A.padStart = mC, A.parseInt = gC, A.random = lC, A.reduce = Ty, A.reduceRight = ky, A.repeat = VC, A.replace = _C, A.result = Qb, A.round = w2, A.runInContext = y, A.sample = Ny, A.size = Ly, A.snakeCase = yC, A.some = zy, A.sortedIndex = D_, A.sortedIndexBy = O_, A.sortedIndexOf = L_, A.sortedLastIndex = z_, A.sortedLastIndexBy = q_, A.sortedLastIndexOf = R_, A.startCase = CC, A.startsWith = $C, A.subtract = v2, A.sum = m2, A.sumBy = g2, A.template = EC, A.times = n2, A.toFinite = In, A.toInteger = j, A.toLength = ih, A.toLower = MC, A.toNumber = Pt, A.toSafeInteger = Mb, A.toString = ie, A.toUpper = IC, A.trim = BC, A.trimEnd = xC, A.trimStart = SC, A.truncate = TC, A.unescape = kC, A.uniqueId = o2, A.upperCase = PC, A.upperFirst = Su, A.each = UA, A.eachRight = YA, A.first = WA, Pu(A, function() {
        var t = {};
        return ln(A, function(n, s) {
          le.call(A.prototype, s) || (t[s] = n);
        }), t;
      }(), { chain: !1 }), A.VERSION = i, It(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        A[t].placeholder = A;
      }), It(["drop", "take"], function(t, n) {
        te.prototype[t] = function(s) {
          s = s === r ? 1 : ke(j(s), 0);
          var l = this.__filtered__ && !n ? new te(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ye(s, l.__takeCount__) : l.__views__.push({
            size: Ye(s, an),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, te.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), It(["filter", "map", "takeWhile"], function(t, n) {
        var s = n + 1, l = s == Be || s == ze;
        te.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: X(d, 3),
            type: s
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), It(["head", "last"], function(t, n) {
        var s = "take" + (n ? "Right" : "");
        te.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), It(["initial", "tail"], function(t, n) {
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
          return ls(s, t, n);
        });
      }), te.prototype.reject = function(t) {
        return this.filter(Hi(X(t)));
      }, te.prototype.slice = function(t, n) {
        t = j(t);
        var s = this;
        return s.__filtered__ && (t > 0 || n < 0) ? new te(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), n !== r && (n = j(n), s = n < 0 ? s.dropRight(-n) : s.take(n - t)), s);
      }, te.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, te.prototype.toArray = function() {
        return this.take(an);
      }, ln(te.prototype, function(t, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = A[l ? "take" + (n == "last" ? "Right" : "") : n], h = l || /^find/.test(n);
        !d || (A.prototype[n] = function() {
          var w = this.__wrapped__, g = l ? [1] : arguments, b = w instanceof te, M = g[0], B = b || G(w), k = function(ee) {
            var ne = d.apply(A, Rn([ee], g));
            return l && z ? ne[0] : ne;
          };
          B && s && typeof M == "function" && M.length != 1 && (b = B = !1);
          var z = this.__chain__, W = !!this.__actions__.length, U = h && !z, K = b && !W;
          if (!h && B) {
            w = K ? w : new te(this);
            var Y = t.apply(w, g);
            return Y.__actions__.push({ func: Xi, args: [k], thisArg: r }), new xt(Y, z);
          }
          return U && K ? t.apply(this, g) : (Y = this.thru(k), U ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), It(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = wi[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), ln(te.prototype, function(t, n) {
        var s = A[n];
        if (s) {
          var l = s.name + "";
          le.call(Kr, l) || (Kr[l] = []), Kr[l].push({ name: n, func: s });
        }
      }), Kr[Oi(r, $).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = k0, te.prototype.reverse = P0, te.prototype.value = N0, A.prototype.at = cy, A.prototype.chain = dy, A.prototype.commit = fy, A.prototype.next = Ay, A.prototype.plant = py, A.prototype.reverse = wy, A.prototype.toJSON = A.prototype.valueOf = A.prototype.value = vy, A.prototype.first = A.prototype.head, ts && (A.prototype[ts] = hy), A;
    }, Hr = f0();
    ur ? ((ur.exports = Hr)._ = Hr, kl._ = Hr) : Re._ = Hr;
  }).call(ps);
})(de, de.exports);
const z3 = "/alarms?_s=", Ha = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, q3 = async (e, o) => {
  try {
    return (await rn.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ha
    )).status === 204;
  } catch {
    return !1;
  }
}, Xv = async (e, o) => {
  try {
    return (await rn.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ha
    )).status === 204;
  } catch {
    return !1;
  }
}, R3 = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await zn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ha
    )).status == 204;
  } catch {
    return !1;
  }
}, W3 = async () => {
  try {
    const e = `${z3}isSituation==true&limit=0`, o = await zn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, F3 = async (e) => {
  try {
    const o = e.join(",id=="), r = await zn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Zv = async (e) => {
  try {
    const o = await zn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, X3 = async (e) => {
  try {
    const o = await zn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, Z3 = async () => {
  try {
    const e = await zn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => de.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, U3 = async (e, o, r) => {
  try {
    return (await zn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ha
    )).status == 204;
  } catch {
    return !1;
  }
}, Y3 = async (e, o) => {
  try {
    return (await zn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, H3 = async () => {
  try {
    const e = await zn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, G3 = window.Pinia.defineStore, on = G3("situationsStore", {
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
      const e = await Z3();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await W3();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = de.exports.groupBy(o, "status"), a = [
          ...o.filter(
            (u) => u.status !== "REJECTED" && u.status !== "ACCEPTED"
          ),
          ...r.ACCEPTED || []
        ];
        this.situations = a;
      } else
        this.situations = [];
    },
    async getSituation(e) {
      var o, r;
      if (e) {
        const i = await Zv(e);
        if (i) {
          const a = (o = i.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await F3(a);
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
          const a = await X3(i);
          a && (r[i] = de.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await H3();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), j3 = window.Vue.openBlock, K3 = window.Vue.createElementBlock, Q3 = window.Vue.createElementVNode;
var J3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const e$ = {}, t$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, n$ = /* @__PURE__ */ Q3("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), r$ = [
  n$
];
function o$(e, o) {
  return j3(), K3("svg", t$, r$);
}
var ko = /* @__PURE__ */ J3(e$, [["render", o$]]);
var s$ = Object.defineProperty, Wh = Object.getOwnPropertySymbols, i$ = Object.prototype.hasOwnProperty, a$ = Object.prototype.propertyIsEnumerable, Fh = (e, o, r) => o in e ? s$(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xh = (e, o) => {
  for (var r in o || (o = {}))
    i$.call(o, r) && Fh(e, r, o[r]);
  if (Wh)
    for (var r of Wh(o))
      a$.call(o, r) && Fh(e, r, o[r]);
  return e;
};
const l$ = window.Vue.defineComponent, u$ = window.Vue.toRaw, Ju = window.Vue.h;
var c$ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const d$ = {
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
}, f$ = l$({
  props: d$,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let i = u$(this.icon);
    return this.$slots.default ? Ju("span", { class: "feather-icon-container" }, [
      Ju(this.$slots.default()[0], Xh({
        class: o
      }, r))
    ]) : Ju(i, Xh({
      class: o
    }, r));
  }
});
var Z = /* @__PURE__ */ c$(f$, [["__scopeId", "data-v-52cbf270"]]);
const A$ = window.Vue.openBlock, h$ = window.Vue.createElementBlock, p$ = window.Vue.createElementVNode;
var w$ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const v$ = {}, m$ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, g$ = /* @__PURE__ */ p$("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), V$ = [
  g$
];
function _$(e, o) {
  return A$(), h$("svg", m$, V$);
}
var Uv = /* @__PURE__ */ w$(v$, [["render", _$]]);
const ye = {
  URL_DOCUMENTATION: "https://docs.opennms.com/alec/3.0.1-SNAPSHOT/engines/introduction.html",
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
function wn(e) {
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
function y$(e, o) {
  we(2, arguments);
  var r = Ne(e), i = wn(o);
  return isNaN(i) ? new Date(NaN) : (i && r.setDate(r.getDate() + i), r);
}
function b$(e, o) {
  we(2, arguments);
  var r = Ne(e).getTime(), i = wn(o);
  return new Date(r + i);
}
var C$ = {};
function Oo() {
  return C$;
}
function Zh(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = Oo(), V = wn((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(V >= 0 && V <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var _ = Ne(e), x = _.getDay(), S = (x < V ? 7 : 0) + x - V;
  return _.setDate(_.getDate() - S), _.setHours(0, 0, 0, 0), _;
}
function Xc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Uh(e) {
  we(1, arguments);
  var o = Ne(e);
  return o.setHours(0, 0, 0, 0), o;
}
function $$(e, o) {
  we(2, arguments);
  var r = Ne(e), i = Ne(o), a = r.getTime() - i.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Yv(e, o) {
  we(2, arguments);
  var r = Uh(e), i = Uh(o);
  return r.getTime() === i.getTime();
}
function E$(e) {
  return we(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function M$(e) {
  if (we(1, arguments), !E$(e) && typeof e != "number")
    return !1;
  var o = Ne(e);
  return !isNaN(Number(o));
}
function I$(e, o) {
  we(2, arguments);
  var r = wn(o);
  return b$(e, -r);
}
var B$ = 864e5;
function x$(e) {
  we(1, arguments);
  var o = Ne(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var i = o.getTime(), a = r - i;
  return Math.floor(a / B$) + 1;
}
function Ta(e) {
  we(1, arguments);
  var o = 1, r = Ne(e), i = r.getUTCDay(), a = (i < o ? 7 : 0) + i - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Hv(e) {
  we(1, arguments);
  var o = Ne(e), r = o.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = Ta(i), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ta(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function S$(e) {
  we(1, arguments);
  var o = Hv(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = Ta(r);
  return i;
}
var T$ = 6048e5;
function k$(e) {
  we(1, arguments);
  var o = Ne(e), r = Ta(o).getTime() - S$(o).getTime();
  return Math.round(r / T$) + 1;
}
function ka(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = Oo(), V = wn((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : m.weekStartsOn) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(V >= 0 && V <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var _ = Ne(e), x = _.getUTCDay(), S = (x < V ? 7 : 0) + x - V;
  return _.setUTCDate(_.getUTCDate() - S), _.setUTCHours(0, 0, 0, 0), _;
}
function Gv(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = Ne(e), V = m.getUTCFullYear(), _ = Oo(), x = wn((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = _.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(x >= 1 && x <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(V + 1, 0, x), S.setUTCHours(0, 0, 0, 0);
  var D = ka(S, o), N = new Date(0);
  N.setUTCFullYear(V, 0, x), N.setUTCHours(0, 0, 0, 0);
  var $ = ka(N, o);
  return m.getTime() >= D.getTime() ? V + 1 : m.getTime() >= $.getTime() ? V : V - 1;
}
function P$(e, o) {
  var r, i, a, u, c, f, p, v;
  we(1, arguments);
  var m = Oo(), V = wn((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : m.firstWeekContainsDate) !== null && i !== void 0 ? i : (p = m.locale) === null || p === void 0 || (v = p.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), _ = Gv(e, o), x = new Date(0);
  x.setUTCFullYear(_, 0, V), x.setUTCHours(0, 0, 0, 0);
  var S = ka(x, o);
  return S;
}
var N$ = 6048e5;
function D$(e, o) {
  we(1, arguments);
  var r = Ne(e), i = ka(r, o).getTime() - P$(r, o).getTime();
  return Math.round(i / N$) + 1;
}
function ue(e, o) {
  for (var r = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < o; )
    i = "0" + i;
  return r + i;
}
var O$ = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), i = r > 0 ? r : 1 - r;
    return ue(o === "yy" ? i % 100 : i, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : ue(r + 1, 2);
  },
  d: function(e, o) {
    return ue(e.getUTCDate(), o.length);
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
    return ue(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return ue(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return ue(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return ue(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, i = e.getUTCMilliseconds(), a = Math.floor(i * Math.pow(10, r - 3));
    return ue(a, o.length);
  }
};
const Gn = O$;
var io = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, L$ = {
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
    return Gn.y(e, o);
  },
  Y: function(e, o, r, i) {
    var a = Gv(e, i), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return ue(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ue(u, o.length);
  },
  R: function(e, o) {
    var r = Hv(e);
    return ue(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return ue(r, o.length);
  },
  Q: function(e, o, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(i);
      case "QQ":
        return ue(i, 2);
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
        return ue(i, 2);
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
        return Gn.M(e, o);
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
        return ue(i + 1, 2);
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
    var a = D$(e, i);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ue(a, o.length);
  },
  I: function(e, o, r) {
    var i = k$(e);
    return o === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : ue(i, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Gn.d(e, o);
  },
  D: function(e, o, r) {
    var i = x$(e);
    return o === "Do" ? r.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : ue(i, o.length);
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
        return ue(u, 2);
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
        return ue(u, o.length);
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
        return ue(a, o.length);
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
    switch (i === 12 ? a = io.noon : i === 0 ? a = io.midnight : a = i / 12 >= 1 ? "pm" : "am", o) {
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
    switch (i >= 17 ? a = io.evening : i >= 12 ? a = io.afternoon : i >= 4 ? a = io.morning : a = io.night, o) {
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
    return Gn.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Gn.H(e, o);
  },
  K: function(e, o, r) {
    var i = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : ue(i, o.length);
  },
  k: function(e, o, r) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), o === "ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : ue(i, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Gn.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Gn.s(e, o);
  },
  S: function(e, o) {
    return Gn.S(e, o);
  },
  X: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Hh(u);
      case "XXXX":
      case "XX":
        return Tr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Tr(u, ":");
    }
  },
  x: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Hh(u);
      case "xxxx":
      case "xx":
        return Tr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Tr(u, ":");
    }
  },
  O: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Yh(u, ":");
      case "OOOO":
      default:
        return "GMT" + Tr(u, ":");
    }
  },
  z: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Yh(u, ":");
      case "zzzz":
      default:
        return "GMT" + Tr(u, ":");
    }
  },
  t: function(e, o, r, i) {
    var a = i._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return ue(u, o.length);
  },
  T: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTime();
    return ue(u, o.length);
  }
};
function Yh(e, o) {
  var r = e > 0 ? "-" : "+", i = Math.abs(e), a = Math.floor(i / 60), u = i % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + ue(u, 2);
}
function Hh(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ue(Math.abs(e) / 60, 2);
  }
  return Tr(e, o);
}
function Tr(e, o) {
  var r = o || "", i = e > 0 ? "-" : "+", a = Math.abs(e), u = ue(Math.floor(a / 60), 2), c = ue(a % 60, 2);
  return i + u + r + c;
}
const z$ = L$;
var Gh = function(e, o) {
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
}, jv = function(e, o) {
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
}, q$ = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], i = r[1], a = r[2];
  if (!a)
    return Gh(e, o);
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
  return u.replace("{{date}}", Gh(i, o)).replace("{{time}}", jv(a, o));
}, R$ = {
  p: jv,
  P: q$
};
const W$ = R$;
var F$ = ["D", "DD"], X$ = ["YY", "YYYY"];
function Z$(e) {
  return F$.indexOf(e) !== -1;
}
function U$(e) {
  return X$.indexOf(e) !== -1;
}
function jh(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Y$ = {
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
}, H$ = function(e, o, r) {
  var i, a = Y$[e];
  return typeof a == "string" ? i = a : o === 1 ? i = a.one : i = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const G$ = H$;
function ec(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, i = e.formats[r] || e.formats[e.defaultWidth];
    return i;
  };
}
var j$ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, K$ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Q$ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, J$ = {
  date: ec({
    formats: j$,
    defaultWidth: "full"
  }),
  time: ec({
    formats: K$,
    defaultWidth: "full"
  }),
  dateTime: ec({
    formats: Q$,
    defaultWidth: "full"
  })
};
const eE = J$;
var tE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nE = function(e, o, r, i) {
  return tE[e];
};
const rE = nE;
function ws(e) {
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
var oE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, iE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, aE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, lE = {
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
}, uE = {
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
}, cE = function(e, o) {
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
}, dE = {
  ordinalNumber: cE,
  era: ws({
    values: oE,
    defaultWidth: "wide"
  }),
  quarter: ws({
    values: sE,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ws({
    values: iE,
    defaultWidth: "wide"
  }),
  day: ws({
    values: aE,
    defaultWidth: "wide"
  }),
  dayPeriod: ws({
    values: lE,
    defaultWidth: "wide",
    formattingValues: uE,
    defaultFormattingWidth: "wide"
  })
};
const fE = dE;
function vs(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.width, a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], p = Array.isArray(f) ? hE(f, function(V) {
      return V.test(c);
    }) : AE(f, function(V) {
      return V.test(c);
    }), v;
    v = e.valueCallback ? e.valueCallback(p) : p, v = r.valueCallback ? r.valueCallback(v) : v;
    var m = o.slice(c.length);
    return {
      value: v,
      rest: m
    };
  };
}
function AE(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function hE(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function pE(e) {
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
var wE = /^(\d+)(th|st|nd|rd)?/i, vE = /\d+/i, mE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gE = {
  any: [/^b/i, /^(a|c)/i]
}, VE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, _E = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, yE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, bE = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, CE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, $E = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, EE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ME = {
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
}, IE = {
  ordinalNumber: pE({
    matchPattern: wE,
    parsePattern: vE,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: vs({
    matchPatterns: mE,
    defaultMatchWidth: "wide",
    parsePatterns: gE,
    defaultParseWidth: "any"
  }),
  quarter: vs({
    matchPatterns: VE,
    defaultMatchWidth: "wide",
    parsePatterns: _E,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: vs({
    matchPatterns: yE,
    defaultMatchWidth: "wide",
    parsePatterns: bE,
    defaultParseWidth: "any"
  }),
  day: vs({
    matchPatterns: CE,
    defaultMatchWidth: "wide",
    parsePatterns: $E,
    defaultParseWidth: "any"
  }),
  dayPeriod: vs({
    matchPatterns: EE,
    defaultMatchWidth: "any",
    parsePatterns: ME,
    defaultParseWidth: "any"
  })
};
const BE = IE;
var xE = {
  code: "en-US",
  formatDistance: G$,
  formatLong: eE,
  formatRelative: rE,
  localize: fE,
  match: BE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Kv = xE;
var SE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, TE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kE = /^'([^]*?)'?$/, PE = /''/g, NE = /[a-zA-Z]/;
function DE(e, o, r) {
  var i, a, u, c, f, p, v, m, V, _, x, S, D, N, $, P, T, O;
  we(2, arguments);
  var I = String(o), q = Oo(), L = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : q.locale) !== null && i !== void 0 ? i : Kv, F = wn((u = (c = (f = (p = r == null ? void 0 : r.firstWeekContainsDate) !== null && p !== void 0 ? p : r == null || (v = r.locale) === null || v === void 0 || (m = v.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && f !== void 0 ? f : q.firstWeekContainsDate) !== null && c !== void 0 ? c : (V = q.locale) === null || V === void 0 || (_ = V.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ge = wn((x = (S = (D = (N = r == null ? void 0 : r.weekStartsOn) !== null && N !== void 0 ? N : r == null || ($ = r.locale) === null || $ === void 0 || (P = $.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && D !== void 0 ? D : q.weekStartsOn) !== null && S !== void 0 ? S : (T = q.locale) === null || T === void 0 || (O = T.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && x !== void 0 ? x : 0);
  if (!(ge >= 0 && ge <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!L.localize)
    throw new RangeError("locale must contain localize property");
  if (!L.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var fe = Ne(e);
  if (!M$(fe))
    throw new RangeError("Invalid time value");
  var ve = Xc(fe), be = I$(fe, ve), $e = {
    firstWeekContainsDate: F,
    weekStartsOn: ge,
    locale: L,
    _originalDate: fe
  }, Be = I.match(TE).map(function(Ae) {
    var ze = Ae[0];
    if (ze === "p" || ze === "P") {
      var qe = W$[ze];
      return qe(Ae, L.formatLong);
    }
    return Ae;
  }).join("").match(SE).map(function(Ae) {
    if (Ae === "''")
      return "'";
    var ze = Ae[0];
    if (ze === "'")
      return OE(Ae);
    var qe = z$[ze];
    if (qe)
      return !(r != null && r.useAdditionalWeekYearTokens) && U$(Ae) && jh(Ae, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Z$(Ae) && jh(Ae, o, String(e)), qe(be, Ae, L.localize, $e);
    if (ze.match(NE))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ze + "`");
    return Ae;
  }).join("");
  return Be;
}
function OE(e) {
  var o = e.match(kE);
  return o ? o[1].replace(PE, "'") : e;
}
function Qv(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function LE(e) {
  return Qv({}, e);
}
var Kh = 1e3 * 60, Pa = 60 * 24, Qh = Pa * 30, Jh = Pa * 365;
function Ga(e, o, r) {
  var i, a, u;
  we(2, arguments);
  var c = Oo(), f = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && i !== void 0 ? i : Kv;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var p = $$(e, o);
  if (isNaN(p))
    throw new RangeError("Invalid time value");
  var v = Qv(LE(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: p
  }), m, V;
  p > 0 ? (m = Ne(o), V = Ne(e)) : (m = Ne(e), V = Ne(o));
  var _ = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), x;
  if (_ === "floor")
    x = Math.floor;
  else if (_ === "ceil")
    x = Math.ceil;
  else if (_ === "round")
    x = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var S = V.getTime() - m.getTime(), D = S / Kh, N = Xc(V) - Xc(m), $ = (S - N) / Kh, P = r == null ? void 0 : r.unit, T;
  if (P ? T = String(P) : D < 1 ? T = "second" : D < 60 ? T = "minute" : D < Pa ? T = "hour" : $ < Qh ? T = "day" : $ < Jh ? T = "month" : T = "year", T === "second") {
    var O = x(S / 1e3);
    return f.formatDistance("xSeconds", O, v);
  } else if (T === "minute") {
    var I = x(D);
    return f.formatDistance("xMinutes", I, v);
  } else if (T === "hour") {
    var q = x(D / 60);
    return f.formatDistance("xHours", q, v);
  } else if (T === "day") {
    var L = x($ / Pa);
    return f.formatDistance("xDays", L, v);
  } else if (T === "month") {
    var F = x($ / Qh);
    return F === 12 && P !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", F, v);
  } else if (T === "year") {
    var ge = x($ / Jh);
    return f.formatDistance("xYears", ge, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function zE(e, o, r) {
  we(2, arguments);
  var i = Zh(e, r), a = Zh(o, r);
  return i.getTime() === a.getTime();
}
function qE(e, o) {
  return we(1, arguments), zE(e, Date.now(), o);
}
function RE(e) {
  return we(1, arguments), Yv(e, Date.now());
}
function WE(e, o) {
  we(2, arguments);
  var r = wn(o);
  return y$(e, -r);
}
function FE(e) {
  return we(1, arguments), Yv(e, WE(Date.now(), 1));
}
const vn = (e) => {
  let o = "";
  if (e)
    try {
      o = DE(new Date(e), ye.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Jv = (e, o) => {
  const r = e.length > o ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, XE = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (i) => RE(i.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (i) => FE(i.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (i) => qE(i.firstEventTime)
      );
      break;
  }
  return r;
}, ZE = window.Vue.defineComponent, Vt = window.Vue.unref, ep = window.Vue.normalizeClass, fn = window.Vue.createElementVNode, ao = window.Vue.toDisplayString, tp = window.Vue.createVNode, mr = window.Vue.openBlock, gr = window.Vue.createElementBlock, Qi = window.Vue.createCommentVNode, Zc = window.Vue.createTextVNode, UE = window.Vue.renderList, YE = window.Vue.Fragment, HE = window.Vue.pushScopeId, GE = window.Vue.popScopeId, pd = (e) => (HE("data-v-fb22b492"), e = e(), GE(), e), jE = { class: "content" }, KE = { class: "title-row" }, QE = { class: "title" }, JE = {
  key: 0,
  class: "accepted"
}, eM = {
  key: 1,
  class: "rejected"
}, tM = /* @__PURE__ */ pd(() => /* @__PURE__ */ fn("span", { class: "info-title" }, " Duration: ", -1)), nM = { key: 0 }, rM = /* @__PURE__ */ pd(() => /* @__PURE__ */ fn("span", { class: "info-title" }, " First Event: ", -1)), oM = { class: "description" }, sM = /* @__PURE__ */ pd(() => /* @__PURE__ */ fn("hr", null, null, -1)), iM = {
  key: 1,
  class: "count-info"
}, aM = /* @__PURE__ */ Zc(" Alarms: "), lM = { class: "info-title" }, uM = /* @__PURE__ */ ZE({
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, i = ye.ACCEPTED, a = ye.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, p) => {
      var v, m, V;
      return mr(), gr("div", {
        onClick: c,
        class: ep(["card", {
          rejected: r.situationInfo.status == Vt(a)
        }])
      }, [
        fn("div", {
          class: ep(["severity-line", [`${(m = (v = r.situationInfo) == null ? void 0 : v.severity) == null ? void 0 : m.toLowerCase()}-bg dark`]])
        }, null, 2),
        fn("div", jE, [
          fn("div", KE, [
            fn("div", QE, "Situation " + ao((V = r.situationInfo) == null ? void 0 : V.id), 1),
            r.situationInfo.status == Vt(i) ? (mr(), gr("div", JE, [
              tp(Vt(Z), {
                icon: Vt(ko),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Qi("", !0),
            r.situationInfo.status == Vt(a) ? (mr(), gr("div", eM, [
              tp(Vt(Z), {
                icon: Vt(Uv),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Qi("", !0)
          ]),
          fn("div", null, [
            tM,
            Zc(" " + ao(Vt(Ga)(
              Vt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Qi("", !0) : (mr(), gr("div", nM, [
            rM,
            Zc(ao(Vt(vn)(r.situationInfo.firstEventTime)), 1)
          ])),
          fn("div", oM, ao(Vt(Jv)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          sM,
          r.situationInfo.relatedAlarms ? (mr(), gr("div", iM, [
            aM,
            fn("span", lM, ao(r.situationInfo.relatedAlarms.length), 1)
          ])) : Qi("", !0),
          (mr(!0), gr(YE, null, UE(Vt(de.exports.keys)(
            Vt(de.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (_) => (mr(), gr("div", {
            class: "info-title",
            key: _
          }, " - " + ao(_), 1))), 128))
        ])
      ], 2);
    };
  }
});
const em = /* @__PURE__ */ re(uM, [["__scopeId", "data-v-fb22b492"]]), cM = window.Vue.openBlock, dM = window.Vue.createElementBlock, fM = window.Vue.createElementVNode;
var AM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const hM = {}, pM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wM = /* @__PURE__ */ fM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), vM = [
  wM
];
function mM(e, o) {
  return cM(), dM("svg", pM, vM);
}
var gM = /* @__PURE__ */ AM(hM, [["render", mM]]);
const VM = window.Vue.openBlock, _M = window.Vue.createElementBlock, tm = window.Vue.createElementVNode;
var yM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const bM = {}, CM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $M = /* @__PURE__ */ tm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), EM = /* @__PURE__ */ tm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), MM = [
  $M,
  EM
];
function IM(e, o) {
  return VM(), _M("svg", CM, MM);
}
var BM = /* @__PURE__ */ yM(bM, [["render", IM]]);
const xM = window.Vue.openBlock, SM = window.Vue.createElementBlock, TM = window.Vue.createElementVNode;
var kM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const PM = {}, NM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DM = /* @__PURE__ */ TM("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), OM = [
  DM
];
function LM(e, o) {
  return xM(), SM("svg", NM, OM);
}
var zM = /* @__PURE__ */ kM(PM, [["render", LM]]);
const qM = window.Vue.openBlock, RM = window.Vue.createElementBlock, WM = window.Vue.createElementVNode;
var FM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const XM = {}, ZM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UM = /* @__PURE__ */ WM("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), YM = [
  UM
];
function HM(e, o) {
  return qM(), RM("svg", ZM, YM);
}
var nm = /* @__PURE__ */ FM(XM, [["render", HM]]);
const GM = window.Vue.defineComponent, jn = window.Vue.unref, Ji = window.Vue.normalizeClass, ea = window.Vue.createVNode, jM = window.Vue.openBlock, KM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const QM = { class: "paginator" }, JM = /* @__PURE__ */ GM({
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: o }) {
    const r = e, i = (a) => {
      a >= 0 && a <= r.totalPages - 1 && o("go-to-page", a);
    };
    return (a, u) => (jM(), KM("div", QM, [
      ea(jn(Z), {
        icon: jn(gM),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => i(0))
      }, null, 8, ["icon", "class"]),
      ea(jn(Z), {
        icon: jn(zM),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => i(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ea(jn(Z), {
        icon: jn(nm),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => i(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ea(jn(Z), {
        icon: jn(BM),
        "aria-hidden": "true",
        class: Ji(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => i(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const eI = /* @__PURE__ */ re(JM, [["__scopeId", "data-v-40758818"]]);
const ce = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, tI = window.Vue.computed, ja = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((i) => {
    r[`${i}Label`] = tI(() => e.value[i] ? e.value[i] : o[i]);
  }), r;
};
const Dr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Or = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var nI = Object.defineProperty, rI = Object.defineProperties, oI = Object.getOwnPropertyDescriptors, np = Object.getOwnPropertySymbols, sI = Object.prototype.hasOwnProperty, iI = Object.prototype.propertyIsEnumerable, rp = (e, o, r) => o in e ? nI(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, op = (e, o) => {
  for (var r in o || (o = {}))
    sI.call(o, r) && rp(e, r, o[r]);
  if (np)
    for (var r of np(o))
      iI.call(o, r) && rp(e, r, o[r]);
  return e;
}, aI = (e, o) => rI(e, oI(o));
const lI = window.Vue.defineComponent, uI = window.Vue.h;
var cI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const dI = {
  center: {
    type: Boolean,
    default: !1
  }
}, fI = lI({
  props: dI,
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
        this.styles = aI(op({}, a), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Or(this.failsafe), this.failsafe = Dr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return uI("div", {
        style: op({}, this.styles),
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
var sr = /* @__PURE__ */ cI(fI, [["__scopeId", "data-v-18e2a5db"]]);
const AI = window.Vue.openBlock, hI = window.Vue.createElementBlock, pI = window.Vue.createElementVNode;
var wI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const vI = {}, mI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gI = /* @__PURE__ */ pI("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), VI = [
  gI
];
function _I(e, o) {
  return AI(), hI("svg", mI, VI);
}
var qr = /* @__PURE__ */ wI(vI, [["render", _I]]);
const sp = window.Vue.computed, yI = (e, o, r) => {
  const i = sp(() => o.value.filter((u) => !u.disabled)), a = sp(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(i.value[i.value.length - 1]) : r(i.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === i.value.length - 1 ? r(i.value[0]) : r(i.value[a.value + 1]));
    }
  };
};
const bI = window.Vue.openBlock, CI = window.Vue.createElementBlock, wd = window.Vue.createElementVNode;
var $I = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const EI = {}, MI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, II = /* @__PURE__ */ wd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), BI = /* @__PURE__ */ wd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), xI = /* @__PURE__ */ wd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), SI = [
  II,
  BI,
  xI
];
function TI(e, o) {
  return bI(), CI("svg", MI, SI);
}
var rm = /* @__PURE__ */ $I(EI, [["render", TI]]), kI = Object.defineProperty, PI = Object.defineProperties, NI = Object.getOwnPropertyDescriptors, ip = Object.getOwnPropertySymbols, DI = Object.prototype.hasOwnProperty, OI = Object.prototype.propertyIsEnumerable, ap = (e, o, r) => o in e ? kI(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, om = (e, o) => {
  for (var r in o || (o = {}))
    DI.call(o, r) && ap(e, r, o[r]);
  if (ip)
    for (var r of ip(o))
      OI.call(o, r) && ap(e, r, o[r]);
  return e;
}, sm = (e, o) => PI(e, NI(o));
const Lo = window.Vue.defineComponent, Us = window.Vue.resolveComponent, hn = window.Vue.openBlock, $o = window.Vue.createElementBlock, LI = window.Vue.createVNode, Na = window.Vue.createBlock, zI = window.Vue.withModifiers, Po = window.Vue.inject, Ys = window.Vue.computed, qI = window.Vue.normalizeClass, lo = window.Vue.createElementVNode, Da = window.Vue.toDisplayString, Ca = window.Vue.renderSlot, Ls = window.Vue.createCommentVNode, RI = window.Vue.withDirectives, WI = window.Vue.vShow, Uc = window.Vue.ref, lp = window.Vue.toRef, up = window.Vue.nextTick, Yc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const vd = window.Vue.provide, cp = window.Vue.isRef, FI = window.Vue.onBeforeUnmount;
var ei = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const XI = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, ZI = Lo({
  props: XI,
  components: {
    FeatherIcon: Z
  }
}), UI = ["title"];
function YI(e, o, r, i, a, u) {
  const c = Us("FeatherIcon");
  return hn(), $o("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    LI(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, UI);
}
var HI = /* @__PURE__ */ ei(ZI, [["render", YI], ["__scopeId", "data-v-4265058e"]]);
const GI = Lo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return qr;
    }
  },
  components: {
    ActionIcon: HI
  }
});
function jI(e, o, r, i, a, u) {
  const c = Us("ActionIcon");
  return hn(), Na(c, {
    onClick: o[0] || (o[0] = zI((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var KI = /* @__PURE__ */ ei(GI, [["render", jI]]);
const QI = Lo({
  computed: {
    errorIcon() {
      return rm;
    }
  },
  components: {
    FeatherIcon: Z
  }
});
function JI(e, o, r, i, a, u) {
  const c = Us("FeatherIcon");
  return hn(), Na(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var eB = /* @__PURE__ */ ei(QI, [["render", JI], ["__scopeId", "data-v-0b8faef3"]]);
const tB = {
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
}, nB = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, rB = Lo({
  emits: nB,
  props: tB,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Po("wrapperOptions", {}), o = Po("validationErrorMessage", !1), r = Ys(() => e.error ? e.error : o && o.value ? o.value : !1);
    return sm(om({}, e), { error: r });
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
    ClearIcon: KI,
    ErrorIcon: eB
  }
}), oB = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, sB = ["for"], iB = { class: "prefix" }, aB = { class: "post" };
function lB(e, o, r, i, a, u) {
  const c = Us("ClearIcon"), f = Us("ErrorIcon");
  return hn(), $o("div", {
    class: qI(["feather-input-wrapper-container", e.containerCls])
  }, [
    lo("fieldset", oB, [
      lo("legend", null, Da(e.label), 1)
    ]),
    lo("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Da(e.label), 9, sB),
    lo("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...p) => e.handleWrapperClick && e.handleWrapperClick(...p))
    }, [
      lo("div", iB, [
        Ca(e.$slots, "pre", {}, void 0, !0)
      ]),
      Ca(e.$slots, "default", {}, void 0, !0),
      lo("div", aB, [
        e.showClear && e.computedClearText ? (hn(), Na(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (p) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ls("", !0),
        e.error ? (hn(), Na(f, { key: 1 })) : Ls("", !0),
        Ca(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var im = /* @__PURE__ */ ei(rB, [["render", lB], ["__scopeId", "data-v-4db296db"]]);
const uB = Lo({
  setup() {
    const e = Po("subTextOptions", {}), o = Po("validationErrorMessage", !1), r = Ys(() => e.error ? e.error : o && o.value ? o.value : "");
    return sm(om({}, e), { error: r });
  }
}), cB = { class: "feather-input-sub-text" }, dB = {
  key: 0,
  class: "feather-input-spacer"
}, fB = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, AB = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function hB(e, o, r, i, a, u) {
  return RI((hn(), $o("div", cB, [
    !e.hint && !e.error.length ? (hn(), $o("div", dB, "\xA0")) : Ls("", !0),
    e.hint && !e.error.length ? (hn(), $o("div", fB, Da(e.hint), 1)) : Ls("", !0),
    e.error.length > 0 ? (hn(), $o("div", AB, Da(e.error), 1)) : Ls("", !0),
    Ca(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [WI, !e.inline || e.hint || e.error.length]
  ]);
}
var Ka = /* @__PURE__ */ ei(uB, [["render", hB], ["__scopeId", "data-v-8e0ac99e"]]);
const pB = {
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
Lo({
  props: pB,
  setup(e) {
    const o = Po("featherFormErrors", Uc([])), r = lp(e, "errorList"), i = Ys(() => {
      var m;
      return (m = r.value) != null && m.length ? r.value : o.value;
    }), a = lp(e, "generalError"), u = (m) => {
      document.getElementById(m).focus();
    }, c = (m) => m.replace(/ \*$/, ""), f = Uc(), p = (m) => `${c(m.label)} - ${m.message}`, v = Ys(() => (i.value.length && up(() => f.value.focus()), e.headingText(i.value)));
    return Yc(a, (m) => {
      m.length && up(() => f.value.focus());
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
const Qa = (e, o, r, i, a) => {
  const u = Po("featherForm", !1);
  if (i && u && e.value) {
    const c = Uc("");
    vd("validationErrorMessage", c);
    const f = () => {
      if (a && cp(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return i.validateSync(o.value), c.value = "", { success: !0 };
      } catch (m) {
        const V = m;
        return c.value = V.errors[0], {
          success: !1,
          message: V.errors[0],
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
    return a && cp(a) && Yc(a, () => {
      u.runValidation();
    }), Yc(e, (m, V) => {
      m && u && u.register(m, v), V && u && u.deregister(V);
    }, { immediate: !0 }), FI(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Ja = (e) => ({
  inherittedAttrs: Ys(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), el = {
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
}, tl = (e) => {
  vd("subTextOptions", e);
}, am = {
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
}, lm = (e) => {
  vd("wrapperOptions", e);
}, ta = window.Vue.ref, wB = window.Vue.watch, vB = window.Vue.watchEffect, dp = window.Vue.computed, tc = window.Vue.provide, um = (e, o, r, i, a) => {
  const u = ta([]), c = ta(), f = ta(), p = ta();
  vB(() => {
    if (!u.value.length)
      return;
    const $ = u.value.map((P) => P.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[$.indexOf(e.value)]), !c.value && u.value.length) {
      let P = u.value.filter((T) => !T.disabled);
      P = P.length ? P : u.value, f.value = P[0], f.value.first = !0;
    }
  }), wB(c, ($, P) => {
    P && (P.checked = !1), $ && ($.checked = !0);
  });
  const v = ($) => {
    $ && $.disabled || (f.value && (f.value.first = !1), c.value !== $ && (o("update:modelValue", $.value), c.value = $, $.focus()));
  }, m = dp(() => c.value || f.value), V = yI(m, u, v), _ = dp(() => ce("feather-radio-group"));
  p.value = _.value;
  const { validate: x } = Qa(p, e, r, i, a);
  return tc("register", ($) => {
    u.value = [...u.value, $], p.value === _.value && (p.value = $.id);
  }), tc("select", v), tc("blur", ($) => {
    o("blur", $);
  }), {
    keydown: ($) => {
      switch ($.keyCode) {
        case 13:
        case 32:
          c.value ? v(c.value) : f.value && v(f.value);
          break;
        case 40:
        case 39:
          V.selectNext();
          break;
        case 37:
        case 38:
          V.selectPrevious();
          break;
      }
    },
    ...V,
    focus: () => {
      c.value && c.value.focus();
    },
    validate: x,
    firstElementId: p,
    groupId: _
  };
};
var mB = Object.defineProperty, gB = Object.defineProperties, VB = Object.getOwnPropertyDescriptors, fp = Object.getOwnPropertySymbols, _B = Object.prototype.hasOwnProperty, yB = Object.prototype.propertyIsEnumerable, Ap = (e, o, r) => o in e ? mB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Io = (e, o) => {
  for (var r in o || (o = {}))
    _B.call(o, r) && Ap(e, r, o[r]);
  if (fp)
    for (var r of fp(o))
      yB.call(o, r) && Ap(e, r, o[r]);
  return e;
}, cm = (e, o) => gB(e, VB(o));
const ir = window.Vue.defineComponent, zs = window.Vue.inject, Oa = window.Vue.computed, qs = window.Vue.ref, qt = window.Vue.resolveComponent, $t = window.Vue.openBlock, ti = window.Vue.createElementBlock, dm = window.Vue.normalizeClass, mn = window.Vue.renderSlot, rr = window.Vue.createBlock, Hs = window.Vue.createCommentVNode, La = window.Vue.createElementVNode, bB = window.Vue.withModifiers, nl = window.Vue.createVNode, fm = window.Vue.toRef, Hc = window.Vue.mergeProps, On = window.Vue.withCtx, CB = window.Vue.h, $B = window.Vue.provide;
var ar = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const EB = {
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
}, MB = ir({
  props: EB,
  setup(e) {
    const o = zs("isCondensed", null), r = Oa(() => o || e.condensed), i = qs(!1);
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
    FeatherRipple: sr
  }
}), IB = ["aria-disabled"];
function BB(e, o, r, i, a, u) {
  const c = qt("FeatherRipple");
  return $t(), ti("div", {
    class: dm(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    mn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? ($t(), rr(c, { key: 0 })) : Hs("", !0)
  ], 42, IB);
}
var rl = /* @__PURE__ */ ar(MB, [["render", BB], ["__scopeId", "data-v-44d413dc"]]);
const xB = {
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
}, SB = ir({
  emits: ["delete"],
  props: xB,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: qr
    };
  },
  components: {
    FeatherIcon: Z
  }
}), TB = { class: "chip-delete" }, kB = ["aria-label", "aria-describedby"];
function PB(e, o, r, i, a, u) {
  const c = qt("FeatherIcon");
  return $t(), ti("span", TB, [
    La("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = bB((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      nl(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, kB)
  ]);
}
var NB = /* @__PURE__ */ ar(SB, [["render", PB], ["__scopeId", "data-v-4bae6cb4"]]);
const DB = ir({
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
}), OB = ["title"];
function LB(e, o, r, i, a, u) {
  return $t(), ti("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    mn(e.$slots, "default", {}, void 0, !0)
  ], 8, OB);
}
var ol = /* @__PURE__ */ ar(DB, [["render", LB], ["__scopeId", "data-v-1a0445b2"]]);
const zB = {}, qB = {
  class: "chip-icon",
  role: "presentation"
};
function RB(e, o) {
  return $t(), ti("span", qB, [
    mn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var sl = /* @__PURE__ */ ar(zB, [["render", RB], ["__scopeId", "data-v-2230176f"]]);
const hp = {
  delete: "Remove"
}, WB = ir({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => hp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = ja(fm(e, "labels"), hp), i = Oa(() => ce("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Io({}, o.attrs);
    return e.disabled && delete u.onClick, cm(Io({}, r), {
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
    Chip: rl,
    DeleteIcon: NB,
    Label: ol,
    PreIcon: sl
  }
}), FB = ["aria-disabled"];
function XB(e, o, r, i, a, u) {
  const c = qt("PreIcon"), f = qt("Label"), p = qt("DeleteIcon"), v = qt("Chip");
  return $t(), rr(v, Hc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: On(() => [
      La("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        La("span", Hc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? ($t(), rr(c, { key: 0 }, {
            default: On(() => [
              mn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Hs("", !0),
          nl(f, { id: e.chipTextId }, {
            default: On(() => [
              mn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, FB),
      e.canDelete ? ($t(), rr(p, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (m) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Hs("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var ZB = /* @__PURE__ */ ar(WB, [["render", XB], ["__scopeId", "data-v-48b2704a"]]);
const UB = ir({
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
    Chip: rl,
    Label: ol,
    PreIcon: sl
  }
}), YB = ["aria-disabled"];
function HB(e, o, r, i, a, u) {
  const c = qt("PreIcon"), f = qt("Label"), p = qt("Chip");
  return $t(), rr(p, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: On(() => [
      La("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? ($t(), rr(c, { key: 0 }, {
          default: On(() => [
            mn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Hs("", !0),
        nl(f, null, {
          default: On(() => [
            mn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, YB)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var GB = /* @__PURE__ */ ar(UB, [["render", HB], ["__scopeId", "data-v-3e0c4eba"]]);
const jB = ir({
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
    const o = qs(!1), r = qs(!1), i = Oa(() => ce("chip-label-id")), a = Oa(() => o.value || r.value ? 0 : -1), u = qs(), c = () => {
      u.value.$el.focus();
    }, f = zs("register", (_) => {
    }), p = zs("blur", (_) => {
    }), v = zs("select", (_) => {
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
    Chip: rl,
    Label: ol,
    PreIcon: sl
  }
});
function KB(e, o, r, i, a, u) {
  const c = qt("PreIcon"), f = qt("Label"), p = qt("Chip");
  return $t(), rr(p, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: dm(["focus hover", { selected: e.checked }]),
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
    default: On(() => [
      e.hasIcon ? ($t(), rr(c, { key: 0 }, {
        default: On(() => [
          mn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Hs("", !0),
      nl(f, { id: e.labelId }, {
        default: On(() => [
          mn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var QB = /* @__PURE__ */ ar(jB, [["render", KB], ["__scopeId", "data-v-bbcc2f70"]]);
const JB = {
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
}, pp = ir({
  props: JB,
  setup() {
    return { format: zs("chipListFormat", "") };
  },
  render() {
    const e = (o) => CB(o, Io(Io({}, this.$props), this.$attrs), Io({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(ZB) : this.format === "radio" ? e(QB) : e(GB);
  }
}), ex = {
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
}, tx = ir({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: ex,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    $B("chipListFormat", r);
    const i = r === "single";
    if (r === "radio") {
      const c = fm(e, "modelValue");
      return cm(Io({
        attrs: {
          role: "radiogroup"
        }
      }, um(c, o.emit, e.label, {}, qs(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), nx = ["aria-label"];
function rx(e, o, r, i, a, u) {
  return $t(), ti("div", Hc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    mn(e.$slots, "default", {}, void 0, !0)
  ], 16, nx);
}
var ox = /* @__PURE__ */ ar(tx, [["render", rx], ["__scopeId", "data-v-1e06f41d"]]);
const sx = window.Vue.defineComponent, ix = window.Vue.normalizeClass, ax = window.Vue.openBlock, lx = window.Vue.createElementBlock, ux = window.Vue.createCommentVNode, cx = /* @__PURE__ */ sx({
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (ax(), lx("span", {
      key: 0,
      class: ix(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : ux("", !0);
  }
});
const dx = /* @__PURE__ */ re(cx, [["__scopeId", "data-v-e08880d6"]]), fx = window.Vue.defineComponent, ms = window.Vue.unref, Am = window.Vue.createTextVNode, nc = window.Vue.normalizeClass, rc = window.Vue.withCtx, Ax = window.Vue.createVNode, hx = window.Vue.renderList, px = window.Vue.Fragment, na = window.Vue.openBlock, wx = window.Vue.createElementBlock, oc = window.Vue.createBlock, wp = window.Vue.createCommentVNode, vx = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const mx = /* @__PURE__ */ Am(" ALL "), vp = window.Vue.ref, gx = window.Vue.watch, Vx = window.Vue.computed, _x = window.Vue.reactive, yx = /* @__PURE__ */ fx({
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: o }) {
    var p;
    const r = e, i = vp(!1), a = Vx(() => de.exports.keys(de.exports.groupBy(r.alarms, r.property))), u = vp(
      (p = r.preSelected) != null && p.length ? r.preSelected : ["all"]
    ), c = _x({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((m) => m !== "all"), u.value.includes(v) ? u.value = u.value.filter((m) => m !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return gx(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, i.value = !1;
    }), (v, m) => ms(a).length > 0 ? (na(), oc(ms(ox), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: nc({ vertical: r.isVertical })
    }, {
      default: rc(() => [
        Ax(ms(pp), {
          class: nc({ clicked: u.value.includes("all") }),
          onClick: m[0] || (m[0] = (V) => f("all"))
        }, {
          default: rc(() => [
            mx
          ]),
          _: 1
        }, 8, ["class"]),
        (na(!0), wx(px, null, hx(ms(a), (V) => (na(), oc(ms(pp), {
          class: nc([
            { clicked: u.value.includes(V) },
            `${V == null ? void 0 : V.toLowerCase()}-bg`
          ]),
          key: V,
          onClick: (_) => f(V)
        }, {
          default: rc(() => [
            e.property == "severity" ? (na(), oc(dx, {
              key: 0,
              severity: V
            }, null, 8, ["severity"])) : wp("", !0),
            Am(vx(V), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : wp("", !0);
  }
});
const bx = /* @__PURE__ */ re(yx, [["__scopeId", "data-v-d83b0f85"]]);
const Cx = window.Vue.watch, $x = window.Vue.onBeforeUnmount, Ex = window.Vue.ref, Mx = window.Vue.onMounted, Ix = (e) => {
  const o = Ex(!1);
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
  return Mx(() => {
    const c = Cx(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    $x(() => {
      c(), u();
    });
  }), o;
}, Bx = window.Vue.watch, xx = window.Vue.onBeforeUnmount, Sx = window.Vue.ref, Tx = window.Vue.onMounted, kx = (e, o) => {
  const r = Sx(!1), i = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", i));
  };
  return Tx(() => {
    const c = Bx(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", i)) : u();
    }, {
      immediate: !0
    });
    xx(() => {
      c(), u();
    });
  }), r;
}, Px = window.Vue.watch, Nx = window.Vue.onBeforeUnmount, Dx = window.Vue.ref, hm = (e, o) => {
  const r = Dx(!1);
  let i = !1;
  const a = (p) => {
    o(p), i = !1;
  };
  function u(p) {
    i || (requestAnimationFrame(() => a(p)), i = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = Px([e, r], ([p, v], m) => {
    m && m.length && m[0] && m[0].removeEventListener("scroll", u, !0), v && p ? p.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return Nx(() => {
    f(), c();
  }), r;
}, Ox = window.Vue.defineComponent, xn = window.Vue.ref, mp = window.Vue.toRef, Lx = window.Vue.onMounted, zx = window.Vue.watch, gp = window.Vue.computed, qx = window.Vue.nextTick, Vp = window.Vue.openBlock, _p = window.Vue.createElementBlock, yp = window.Vue.renderSlot, Rx = window.Vue.normalizeClass, Wx = window.Vue.normalizeStyle, Fx = window.Vue.createCommentVNode;
var Xx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Zx = {
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
}, Ux = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, Yx = Ox({
  emits: Ux,
  props: Zx,
  setup(e, o) {
    const r = xn(), i = xn(), a = mp(e, "open"), u = mp(e, "noExpand"), c = xn("auto"), f = xn(), p = xn(e.triggerId || ce("feather-menu-trigger")), v = xn(ce("feather-menu-dropdown")), m = xn(""), V = xn("");
    Lx(() => {
      f.value = window;
    });
    const _ = xn(!1), x = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), S = () => {
      if (!i.value)
        return;
      const I = r.value.getBoundingClientRect();
      _.value = !0, c.value = "auto", qx(() => {
        let { height: q, width: L } = i.value.getBoundingClientRect();
        const F = x(), ge = F.height, fe = F.width;
        e.fill && L < I.width ? (c.value = I.width + "px", L = I.width) : c.value = L + "px";
        let ve = 0;
        ge - I.bottom < q && I.top >= q ? (ve = I.top - q, e.cover && (ve += I.height)) : (ve = I.bottom, e.cover && (ve -= I.height));
        let be = e.right ? I.right - L : I.left;
        !e.right && I.right >= L && fe - I.left < L && (be = I.right - L), e.right && I.right <= L && fe - I.left > L && (be = I.left), V.value = `${be}px`, m.value = `${ve}px`, _.value = !1;
      });
    }, N = kx(r, (I) => {
      o.emit("outside-click", I);
    }), $ = Ix(S), P = hm(f, S);
    zx([a, i], ([I, q]) => {
      I && q && S(), N.value = I, $.value = I, P.value = I;
    });
    const T = gp(() => {
      const I = {
        id: p.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = v.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), O = gp(() => ({
      click: (I) => {
        o.emit("trigger-click", I);
      }
    }));
    return {
      positionTop: m,
      positionLeft: V,
      triggerId: p,
      triggerAttrs: T,
      triggerListeners: O,
      menuId: v,
      menu: i,
      menuWidth: c,
      root: r,
      calculatePosition: S,
      calculating: _
    };
  }
}), Hx = ["data-ref-id"], Gx = ["data-ref-id", "id"];
function jx(e, o, r, i, a, u) {
  return Vp(), _p("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    yp(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Vp(), _p("div", {
      key: 0,
      class: Rx(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: Wx({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      yp(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, Gx)) : Fx("", !0)
  ], 8, Hx);
}
var pm = /* @__PURE__ */ Xx(Yx, [["render", jx], ["__scopeId", "data-v-f75af406"]]), Kx = {
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
const Qx = window.Vue.openBlock, Jx = window.Vue.createElementBlock, eS = window.Vue.createElementVNode;
var tS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const nS = {}, rS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oS = /* @__PURE__ */ eS("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), sS = [
  oS
];
function iS(e, o) {
  return Qx(), Jx("svg", rS, sS);
}
var aS = /* @__PURE__ */ tS(nS, [["render", iS]]);
const lS = window.Vue.openBlock, uS = window.Vue.createElementBlock, md = window.Vue.createElementVNode;
var cS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const dS = {}, fS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AS = /* @__PURE__ */ md("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), hS = /* @__PURE__ */ md("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), pS = /* @__PURE__ */ md("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), wS = [
  AS,
  hS,
  pS
];
function vS(e, o) {
  return lS(), uS("svg", fS, wS);
}
var mS = /* @__PURE__ */ cS(dS, [["render", vS]]);
const gS = window.Vue.openBlock, VS = window.Vue.createElementBlock, _S = window.Vue.createElementVNode;
var yS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const bS = {}, CS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $S = /* @__PURE__ */ _S("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ES = [
  $S
];
function MS(e, o) {
  return gS(), VS("svg", CS, ES);
}
var il = /* @__PURE__ */ yS(bS, [["render", MS]]);
const Gs = function(e, o) {
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
const IS = window.Vue.defineComponent, BS = window.Vue.openBlock, xS = window.Vue.createElementBlock, SS = window.Vue.normalizeClass, TS = window.Vue.pushScopeId, kS = window.Vue.popScopeId, Gc = window.Vue.createElementVNode;
var PS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const NS = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, DS = {
  click: (e) => !0
}, OS = IS({
  emits: DS,
  props: NS,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), wm = (e) => (TS("data-v-07e020f5"), e = e(), kS(), e), LS = /* @__PURE__ */ wm(() => /* @__PURE__ */ Gc("div", { class: "track" }, null, -1)), zS = /* @__PURE__ */ wm(() => /* @__PURE__ */ Gc("div", { class: "switcher" }, [
  /* @__PURE__ */ Gc("div", { class: "switch-circle" })
], -1)), qS = [
  LS,
  zS
];
function RS(e, o, r, i, a, u) {
  return BS(), xS("div", {
    class: SS(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, qS, 2);
}
var WS = /* @__PURE__ */ PS(OS, [["render", RS], ["__scopeId", "data-v-07e020f5"]]), FS = Object.defineProperty, XS = Object.defineProperties, ZS = Object.getOwnPropertyDescriptors, bp = Object.getOwnPropertySymbols, US = Object.prototype.hasOwnProperty, YS = Object.prototype.propertyIsEnumerable, Cp = (e, o, r) => o in e ? FS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, $p = (e, o) => {
  for (var r in o || (o = {}))
    US.call(o, r) && Cp(e, r, o[r]);
  if (bp)
    for (var r of bp(o))
      YS.call(o, r) && Cp(e, r, o[r]);
  return e;
}, Ep = (e, o) => XS(e, ZS(o));
const gd = window.Vue.defineComponent, Vr = window.Vue.h, HS = window.Vue.openBlock, GS = window.Vue.createElementBlock, jS = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var vm = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const KS = {
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
}, QS = gd({
  inheritAttrs: !1,
  props: KS,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Vr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Vr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = Vr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Vr(sr);
    if (this.asLi)
      return Vr("li", Ep($p({}, this.$attrs), {
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
    const u = Vr("a", Ep($p({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, i, a]);
    return Vr("li", {}, [u]);
  }
});
var ni = /* @__PURE__ */ vm(QS, [["__scopeId", "data-v-7c46b2b3"]]);
gd({
  components: {
    FeatherListItem: ni
  }
});
const JS = {}, e7 = { class: "feather-list" };
function t7(e, o) {
  return HS(), GS("ul", e7, [
    jS(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Vd = /* @__PURE__ */ vm(JS, [["render", t7], ["__scopeId", "data-v-941a1d50"]]);
const n7 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, r7 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
gd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: n7,
  props: r7,
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
      (e.keyCode === Q.SPACE || e.keyCode === Q.ENTER) && this.updateValue(), e.keyCode === Q.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: WS, FeatherListItem: ni }
});
var o7 = Object.defineProperty, s7 = Object.defineProperties, i7 = Object.getOwnPropertyDescriptors, Mp = Object.getOwnPropertySymbols, a7 = Object.prototype.hasOwnProperty, l7 = Object.prototype.propertyIsEnumerable, Ip = (e, o, r) => o in e ? o7(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Et = (e, o) => {
  for (var r in o || (o = {}))
    a7.call(o, r) && Ip(e, r, o[r]);
  if (Mp)
    for (var r of Mp(o))
      l7.call(o, r) && Ip(e, r, o[r]);
  return e;
}, u7 = (e, o) => s7(e, i7(o));
const zo = window.Vue.defineComponent, se = window.Vue.openBlock, Pe = window.Vue.createElementBlock, ct = window.Vue.createElementVNode, nn = window.Vue.toDisplayString, zt = window.Vue.createCommentVNode, xe = window.Vue.resolveComponent, Lt = window.Vue.createBlock, je = window.Vue.withCtx, Bo = window.Vue.Fragment, Rs = window.Vue.renderList, dt = window.Vue.createVNode, _d = window.Vue.withModifiers, Nr = window.Vue.normalizeClass, jc = window.Vue.renderSlot, mm = window.Vue.createTextVNode, c7 = window.Vue.pushScopeId, d7 = window.Vue.popScopeId, gm = window.Vue.reactive, Vm = window.Vue.nextTick, sc = window.Vue.markRaw, ic = window.Vue.toRef, Bp = window.Vue.computed, f7 = window.Vue.toRefs, uo = window.Vue.ref, ac = window.Vue.mergeProps, xp = window.Vue.toHandlers, ra = window.Vue.withDirectives, oa = window.Vue.vShow;
var al = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, yd = {
  query: {
    type: String
  }
}, Rr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const A7 = zo({
  mixins: [],
  props: Et(Et({
    text: {
      type: String,
      required: !0
    }
  }, al), yd),
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
}), h7 = {
  key: 0,
  class: "highlight"
}, p7 = { key: 1 };
function w7(e, o, r, i, a, u) {
  return se(), Pe("span", null, [
    ct("span", null, nn(e.beginning), 1),
    e.highlighted ? (se(), Pe("span", h7, nn(e.highlighted), 1)) : zt("", !0),
    e.end ? (se(), Pe("span", p7, nn(e.end), 1)) : zt("", !0)
  ]);
}
var _m = /* @__PURE__ */ Rr(A7, [["render", w7], ["__scopeId", "data-v-8abe2492"]]);
const v7 = zo({
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
  }, al), yd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        Gs(o, r.$el);
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
    FeatherList: Vd,
    FeatherListItem: ni,
    Highlighter: _m
  }
}), m7 = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function g7(e, o, r, i, a, u) {
  const c = xe("Highlighter"), f = xe("FeatherListItem"), p = xe("FeatherList");
  return se(), Lt(p, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: je(() => [
      (se(!0), Pe(Bo, null, Rs(e.items, (v, m) => (se(), Pe(Bo, {
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
          onClick: _d((V) => e.select(v), ["stop"])
        }, {
          default: je(() => [
            dt(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (se(), Pe("span", m7, nn(e.newLabel), 1)) : zt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (se(), Pe("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : zt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var V7 = /* @__PURE__ */ Rr(v7, [["render", g7], ["__scopeId", "data-v-f623434a"]]);
const _7 = zo({
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
  }, al), yd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        Gs(o, r);
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
    Highlighter: _m
  }
}), y7 = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, b7 = ["aria-multiselectable"], C7 = { role: "row" }, $7 = ["aria-selected", "onClick"], E7 = ["id", "aria-selected"], M7 = { key: 1 };
function I7(e, o, r, i, a, u) {
  const c = xe("Highlighter");
  return se(), Pe("div", y7, [
    ct("table", {
      class: Nr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      ct("thead", null, [
        ct("tr", C7, [
          (se(!0), Pe(Bo, null, Rs(e.config, (f) => (se(), Pe("th", {
            key: f.title
          }, nn(f.title), 1))), 128))
        ])
      ]),
      ct("tbody", null, [
        (se(!0), Pe(Bo, null, Rs(e.items, (f, p) => (se(), Pe("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Nr({ focus: e.isActive(p), selected: e.isSelected(f) }),
          onClick: _d((v) => e.select(f), ["stop"])
        }, [
          (se(!0), Pe(Bo, null, Rs(e.config, (v, m) => (se(), Pe("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(p, m),
            "aria-selected": e.isSelected(f),
            class: Nr({ "focus-cell": e.isActiveCell(p, m) })
          }, [
            v.prop === e.textProp ? (se(), Lt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (se(), Pe("p", M7, nn(f[v.prop]), 1))
          ], 10, E7))), 128))
        ], 10, $7))), 128))
      ])
    ], 10, b7)
  ], 512);
}
var B7 = /* @__PURE__ */ Rr(_7, [["render", I7], ["__scopeId", "data-v-58c88fd1"]]);
const x7 = zo({
  components: {
    FeatherList: Vd,
    FeatherListItem: ni
  }
});
function S7(e, o, r, i, a, u) {
  const c = xe("FeatherListItem"), f = xe("FeatherList");
  return se(), Lt(f, { class: "result-list" }, {
    default: je(() => [
      dt(c, { "as-li": "" }, {
        default: je(() => [
          jc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var T7 = /* @__PURE__ */ Rr(x7, [["render", S7], ["__scopeId", "data-v-06b752c6"]]);
const k7 = zo({
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
    Cancel: qr,
    BaseChip: rl,
    BaseChipLabel: ol,
    BaseChipPreIcon: sl
  }
});
function P7(e, o, r, i, a, u) {
  const c = xe("FeatherIcon"), f = xe("BaseChipPreIcon"), p = xe("BaseChipLabel"), v = xe("Cancel"), m = xe("BaseChip");
  return se(), Lt(m, {
    class: Nr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: je(() => [
      e.showPreIcon ? (se(), Lt(f, { key: 0 }, {
        default: je(() => {
          var V, _;
          return [
            dt(c, {
              icon: (V = e.pre) == null ? void 0 : V.icon,
              title: (_ = e.pre) == null ? void 0 : _.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : zt("", !0),
      dt(p, null, {
        default: je(() => [
          mm(nn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? zt("", !0) : (se(), Pe("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = _d((...V) => e.handleClick && e.handleClick(...V), ["stop"]))
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
var N7 = /* @__PURE__ */ Rr(k7, [["render", P7], ["__scopeId", "data-v-e0fc6ac0"]]);
const D7 = {}, O7 = (e) => (c7("data-v-aa720e06"), e = e(), d7(), e), L7 = { class: "spinner-container" }, z7 = /* @__PURE__ */ O7(() => /* @__PURE__ */ ct("svg", {
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
], -1)), q7 = [
  z7
];
function R7(e, o) {
  return se(), Pe("div", L7, q7);
}
var W7 = /* @__PURE__ */ Rr(D7, [["render", R7], ["__scopeId", "data-v-aa720e06"]]), ll = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(ll || {});
const ym = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, F7 = Et(Et(Et({
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
    validator: (e) => !!ll[e]
  },
  labels: {
    type: Object,
    default: () => ym
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, al), el), am), X7 = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, Z7 = (e, o, r, i) => {
  if (r.toLowerCase() === ll.multi) {
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
}, U7 = () => {
  const e = gm({
    row: -1
  }), o = (u) => {
    Vm(() => {
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
}, Y7 = (e) => {
  const o = gm({
    row: -1,
    col: -1
  }), r = (c, f) => {
    Vm(() => {
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
}, H7 = zo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: X7,
  props: F7,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ll.multi;
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
      return sc(aS);
    },
    minCharIcon() {
      return sc(mS);
    },
    dropdownIcon() {
      return sc(il);
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
        Gs(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Gs(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = ce("active-chip"), this.activeChipId;
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
      r !== void 0 && (Or(this.typingTimeout), this.typingTimeout = Dr(() => {
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
    const r = ja(ic(e, "labels"), ym);
    tl(e), lm(e);
    let i;
    e.gridConfig ? i = Y7(e.gridConfig) : i = U7();
    const a = ic(e, "id"), u = Bp(() => a.value ? a.value : ce("feather-autocomplete-input")), { validate: c } = Qa(u, ic(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: p, textProp: v, allowNew: m, type: V, minChar: _ } = f7(e), x = uo(!1), S = uo(!1), D = uo(!1), N = uo(""), $ = uo([]), P = uo(), T = Bp(() => P.value), O = () => {
      x.value && !S.value && (N.value && N.value.length >= _.value && o.emit("search", N.value), _.value <= 0 && o.emit("search", N.value || ""), $.value = [], i.reset());
    }, I = Z7({
      selectionLimit: f,
      selectionLimitReached: S,
      modelValue: p,
      textProp: v,
      allowNew: m,
      forceCloseResults: D,
      query: N,
      internalResults: $,
      input: T,
      emitSearch: O
    }, i, V.value, o.emit);
    return u7(Et(Et({}, r), Ja(o.attrs)), {
      query: N,
      internalResults: $,
      selectionLimitReached: S,
      forceCloseResults: D,
      hasFocus: x,
      strategy: I,
      emitSearch: O,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: u,
      input: P,
      incomingId: a,
      inputRef: T,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: im,
    InputSubText: Ka,
    AutocompleteResults: V7,
    AutocompleteResultsGrid: B7,
    Chip: N7,
    MenuMessage: T7,
    FeatherIcon: Z,
    FeatherMenu: pm,
    Spinner: W7
  }
}), G7 = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, j7 = ["id"], K7 = { "data-ref-id": "feather-autocomplete-no-results" }, Q7 = { "data-ref-id": "feather-autocomplete-selection-limit" }, J7 = { "data-ref-id": "feather-autocomplete-min-char" };
function eT(e, o, r, i, a, u) {
  const c = xe("FeatherIcon"), f = xe("Chip"), p = xe("InputWrapper"), v = xe("AutocompleteResults"), m = xe("AutocompleteResultsGrid"), V = xe("MenuMessage"), _ = xe("Spinner"), x = xe("FeatherMenu"), S = xe("InputSubText");
  return se(), Pe("div", ac(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    dt(x, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Nr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: je(({ attrs: D, on: N }) => [
        dt(p, ac(Et(Et({}, D), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, xp(N), { ref: "scroll" }), {
          pre: je(() => [
            jc(e.$slots, "pre", {}, () => [
              dt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: je(() => [
            dt(c, {
              icon: e.dropdownIcon,
              class: Nr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: je(() => [
            ct("div", {
              class: Nr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              ct("div", G7, null, 512),
              ct("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, nn(e.selectedDescribedByText), 9, j7),
              (se(!0), Pe(Bo, null, Rs(e.modelValueList, ($, P) => ra((se(), Lt(f, {
                key: $[e.textProp],
                role: "button",
                id: P === e.activeChipIndex ? e.activeChipId : null,
                focused: P === e.activeChipIndex,
                disabled: e.disabled,
                text: $[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre($),
                onDelete: (T) => e.removeFromValue($)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [oa, !e.singleSelect]
              ])), 128)),
              ct("textarea", ac(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, xp(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: je(() => [
        e.gridConfig ? zt("", !0) : ra((se(), Lt(v, {
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
          [oa, e.showResults]
        ]),
        e.gridConfig ? ra((se(), Lt(m, {
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
          [oa, e.showResults]
        ]) : zt("", !0),
        e.showNoResults ? (se(), Lt(V, { key: 2 }, {
          default: je(() => [
            ct("span", K7, nn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : zt("", !0),
        e.showSelectionLimit ? (se(), Lt(V, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: je(() => [
            dt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", Q7, nn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : zt("", !0),
        e.minChar ? ra((se(), Lt(V, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: je(() => [
            dt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", J7, [
              jc(e.$slots, "min-char", {}, () => [
                mm(nn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [oa, e.showMinCharWarning]
        ]) : zt("", !0),
        e.showLoading ? (se(), Lt(_, { key: 5 })) : zt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    dt(S, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var tT = /* @__PURE__ */ Rr(H7, [["render", eT], ["__scopeId", "data-v-43a7e951"]]);
var nT = Object.defineProperty, rT = Object.defineProperties, oT = Object.getOwnPropertyDescriptors, Sp = Object.getOwnPropertySymbols, sT = Object.prototype.hasOwnProperty, iT = Object.prototype.propertyIsEnumerable, Tp = (e, o, r) => o in e ? nT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, $a = (e, o) => {
  for (var r in o || (o = {}))
    sT.call(o, r) && Tp(e, r, o[r]);
  if (Sp)
    for (var r of Sp(o))
      iT.call(o, r) && Tp(e, r, o[r]);
  return e;
}, bm = (e, o) => rT(e, oT(o));
const Cm = window.Vue.defineComponent, aT = window.Vue.ref, Ws = window.Vue.computed, lT = window.Vue.reactive, kp = window.Vue.watch, lc = window.Vue.inject, $m = window.Vue.resolveComponent, Kc = window.Vue.openBlock, Em = window.Vue.createElementBlock, or = window.Vue.createElementVNode, uT = window.Vue.createBlock, cT = window.Vue.createCommentVNode, Mm = window.Vue.renderSlot, dT = window.Vue.pushScopeId, fT = window.Vue.popScopeId, uc = window.Vue.toRef, Pp = window.Vue.mergeProps, AT = window.Vue.toDisplayString, hT = window.Vue.createVNode;
var Im = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const pT = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, wT = Cm({
  props: pT,
  setup(e) {
    const o = aT(), r = () => {
      o.value.focus();
    }, i = Ws(() => ce("feather-radio-button")), a = lT({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), u = Ws(() => ce("radio-label-id")), c = Ws(() => a.first || a.checked ? 0 : -1);
    kp(() => e.disabled, (V) => {
      a.disabled = V;
    }, { immediate: !0 }), kp(() => e.value, (V) => {
      a.value = V;
    }, { immediate: !0 });
    const f = lc("register", (V) => {
    }), p = lc("blur", (V) => {
    }), v = lc("select", (V) => {
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
    FeatherRipple: sr
  }
}), vT = (e) => (dT("data-v-24790cf0"), e = e(), fT(), e), mT = { class: "layout-container" }, gT = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], VT = { class: "radio hover focus" }, _T = /* @__PURE__ */ vT(() => /* @__PURE__ */ or("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ or("svg", { class: "dot" }, [
    /* @__PURE__ */ or("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), yT = ["id"];
function bT(e, o, r, i, a, u) {
  const c = $m("feather-ripple");
  return Kc(), Em("div", mT, [
    or("div", {
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
      or("div", VT, [
        _T,
        e.vm.disabled ? cT("", !0) : (Kc(), uT(c, {
          key: 0,
          center: ""
        }))
      ]),
      or("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        Mm(e.$slots, "default", {}, void 0, !0)
      ], 8, yT)
    ], 40, gT)
  ]);
}
var Nn = /* @__PURE__ */ Im(wT, [["render", bT], ["__scopeId", "data-v-24790cf0"]]);
const CT = bm($a({}, el), {
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
}), $T = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, ET = Cm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: CT,
  emits: $T,
  setup(e, o) {
    tl(e);
    const r = uc(e, "error"), i = uc(e, "modelValue"), a = Ws(() => ce("feather-input-description")), u = Ws(() => {
      const c = bm($a({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return $a($a({
      descriptionId: a,
      attrs: u
    }, um(i, o.emit, e.label, e.schema, uc(e, "error"))), Ja(o.attrs));
  },
  components: {
    InputSubText: Ka
  }
}), MT = ["for"], IT = ["id"];
function BT(e, o, r, i, a, u) {
  const c = $m("InputSubText");
  return Kc(), Em("div", Pp(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    or("label", {
      for: e.groupId,
      class: "group-label"
    }, AT(e.label), 9, MT),
    or("div", Pp(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      Mm(e.$slots, "default", {}, void 0, !0)
    ], 16, IT),
    hT(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var js = /* @__PURE__ */ Im(ET, [["render", BT], ["__scopeId", "data-v-6775aeb9"]]);
const xT = window.Vue.defineComponent, ST = window.Vue.renderList, TT = window.Vue.Fragment, Np = window.Vue.openBlock, kT = window.Vue.createElementBlock, PT = window.Vue.toDisplayString, NT = window.Vue.createTextVNode, Dp = window.Vue.unref, Op = window.Vue.withCtx, DT = window.Vue.createVNode, OT = window.Vue.createBlock, LT = window.Vue.watch, zT = window.Vue.ref, qT = /* @__PURE__ */ xT({
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
    ], a = zT(r.preSelected || i[0].id);
    return LT(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (Np(), OT(Dp(js), {
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
      default: Op(() => [
        (Np(), kT(TT, null, ST(i, (f) => DT(Dp(Nn), {
          value: f.id,
          key: f.id
        }, {
          default: Op(() => [
            NT(PT(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const RT = /* @__PURE__ */ re(qT, [["__scopeId", "data-v-0363302c"]]);
var WT = Object.defineProperty, FT = Object.defineProperties, XT = Object.getOwnPropertyDescriptors, Lp = Object.getOwnPropertySymbols, ZT = Object.prototype.hasOwnProperty, UT = Object.prototype.propertyIsEnumerable, zp = (e, o, r) => o in e ? WT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, gs = (e, o) => {
  for (var r in o || (o = {}))
    ZT.call(o, r) && zp(e, r, o[r]);
  if (Lp)
    for (var r of Lp(o))
      UT.call(o, r) && zp(e, r, o[r]);
  return e;
}, qp = (e, o) => FT(e, XT(o));
const YT = window.Vue.defineComponent, HT = window.Vue.inject, Vs = window.Vue.h;
var GT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jT = {
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
}, KT = YT({
  inheritAttrs: !1,
  props: jT,
  setup() {
    return { hasTooltip: HT("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const p = ["btn", "hover", "focus", f];
      return this.icon && (p.push("btn-icon"), p.push("btn-icon-table")), this.onColor && p.push("on-color"), p;
    }, o = this.asAnchor ? "a" : "button", r = {}, i = gs({}, this.$attrs);
    r.attrs = i || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Vs(sr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Vs(o, qp(gs(gs({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Vs(sr, { center: !0 })
      ]);
    }
    const c = Vs("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Vs(o, qp(gs(gs({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ae = /* @__PURE__ */ GT(KT, [["__scopeId", "data-v-702d1074"]]);
const QT = window.Vue.openBlock, JT = window.Vue.createElementBlock, ek = window.Vue.createElementVNode;
var tk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const nk = {}, rk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ok = /* @__PURE__ */ ek("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), sk = [
  ok
];
function ik(e, o) {
  return QT(), JT("svg", rk, sk);
}
var ak = /* @__PURE__ */ tk(nk, [["render", ik]]);
const lk = window.Vue.openBlock, uk = window.Vue.createElementBlock, ck = window.Vue.createElementVNode;
var dk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const fk = {}, Ak = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hk = /* @__PURE__ */ ck("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), pk = [
  hk
];
function wk(e, o) {
  return lk(), uk("svg", Ak, pk);
}
var vk = /* @__PURE__ */ dk(fk, [["render", wk]]);
const mk = window.Vue.openBlock, gk = window.Vue.createElementBlock, Vk = window.Vue.createElementVNode;
var _k = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const yk = {}, bk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ck = /* @__PURE__ */ Vk("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), $k = [
  Ck
];
function Ek(e, o) {
  return mk(), gk("svg", bk, $k);
}
var Bm = /* @__PURE__ */ _k(yk, [["render", Ek]]);
const Mk = window.Vue.defineComponent, _t = window.Vue.unref, _r = window.Vue.createVNode, Rp = window.Vue.toDisplayString, Pn = window.Vue.createElementVNode, xm = window.Vue.createTextVNode, Wp = window.Vue.openBlock, Fp = window.Vue.createElementBlock, Ik = window.Vue.createCommentVNode, Bk = window.Vue.withCtx, xk = window.Vue.vShow, Sk = window.Vue.normalizeClass, Tk = window.Vue.withDirectives, kk = window.Vue.Fragment, Pk = window.Vue.pushScopeId, Nk = window.Vue.popScopeId, Sm = (e) => (Pk("data-v-b1dc2670"), e = e(), Nk(), e), Dk = /* @__PURE__ */ xm(" Filters "), Ok = { class: "count" }, Lk = { class: "results" }, zk = { class: "total" }, qk = /* @__PURE__ */ xm(" Reset "), Rk = /* @__PURE__ */ Sm(() => /* @__PURE__ */ Pn("div", { class: "title" }, "By Severities:", -1)), Wk = /* @__PURE__ */ Sm(() => /* @__PURE__ */ Pn("div", { class: "title" }, "By Start Date:", -1)), yr = window.Vue.ref, Fk = window.Vue.reactive, Xk = window.Vue.markRaw, Xp = window.Vue.watch, Zk = /* @__PURE__ */ Mk({
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, i = Xk({
      FilterAlt: ak,
      ExpandLess: vk,
      ExpandMore: il,
      Refresh: Bm
    }), a = on(), u = yr(r.isOpen), c = yr(["all"]), f = yr(1), p = yr(r.list), v = yr(!1), m = yr(0), V = yr(null), _ = Fk({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), x = () => {
      var q, L;
      r.saveFilters && a.filters && (a.filters.node && (_.nodeSelectedValue = a.filters.node), ((q = a.filters) == null ? void 0 : q.severities) && !((L = a.filters) != null && L.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, T());
    }, S = () => {
      _.nodes = a.nodes, _.results = a.nodes;
    };
    Xp(
      () => a.nodes,
      () => {
        S();
      }
    ), Xp(r, () => {
      p.value = r.list, x();
    });
    const D = (q) => {
      c.value = q, T();
    }, N = (q) => {
      f.value = q, T();
    }, $ = (q) => {
      if (!q)
        return _.nodeSelectedValue = void 0, [];
      v.value = !0, _.results = _.nodes.filter((L) => L.label.toLowerCase().indexOf(q) > -1).map((L) => ({
        _text: L.label,
        id: L.id
      })), v.value = !1;
    }, P = () => {
      c.value = ["all"], f.value = 1, _.nodeSelectedValue = void 0, m.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), p.value = r.list;
    }, T = () => {
      m.value = 0;
      let q = r.list;
      _.nodeSelectedValue && _.nodeSelectedValue._text && (m.value++, r.isSituation ? q = q.map((L) => {
        if (L.relatedAlarms.filter(
          (fe) => {
            var ve;
            return fe.nodeLabel === ((ve = _.nodeSelectedValue) == null ? void 0 : ve._text);
          }
        ).length > 0)
          return L;
      }).filter((L) => L) : q = q.filter(
        (L) => {
          var F;
          return L.nodeLabel === ((F = _.nodeSelectedValue) == null ? void 0 : F._text);
        }
      )), c.value.includes("all") || (m.value++, q = q.filter(
        (L) => c.value.includes(L.severity)
      )), f.value !== 1 && (m.value++, q = XE(
        f.value,
        q
      )), p.value = q, r.saveFilters && O(), o("filtered-list", q);
    }, O = () => {
      a.filters = {
        node: _.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, I = () => {
      u.value = !u.value;
    };
    return (q, L) => (Wp(), Fp(kk, null, [
      r.isOpen ? Ik("", !0) : (Wp(), Fp("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        Pn("div", null, [
          _r(_t(Z), {
            icon: _t(i).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          Dk,
          Pn("span", Ok, Rp(m.value), 1)
        ]),
        _r(_t(Z), {
          icon: u.value ? _t(i).ExpandLess : _t(i).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      Tk(Pn("div", {
        class: Sk(["filters", { collapsed: !r.isOpen }])
      }, [
        Pn("div", Lk, [
          Pn("div", zk, "Results: " + Rp(_t(p).length), 1),
          _r(_t(ae), {
            class: "btn-reset",
            onClick: P
          }, {
            default: Bk(() => [
              _r(_t(Z), {
                icon: _t(i).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              qk
            ]),
            _: 1
          })
        ]),
        Pn("div", null, [
          _r(_t(tT), {
            ref_key: "autocomplete",
            ref: V,
            label: "Search by node",
            loading: v.value,
            modelValue: _t(_).nodeSelectedValue,
            "onUpdate:modelValue": [
              L[0] || (L[0] = (F) => _t(_).nodeSelectedValue = F),
              T
            ],
            results: _t(_).results,
            type: "single",
            onSearch: $
          }, null, 8, ["loading", "modelValue", "results"]),
          Rk,
          _r(bx, {
            alarms: r.list,
            onSelectedOption: D,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Pn("div", null, [
            Wk,
            _r(RT, {
              onFilterDateSelected: N,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [xk, u.value]
      ])
    ], 64));
  }
});
const qo = /* @__PURE__ */ re(Zk, [["__scopeId", "data-v-b1dc2670"]]), Uk = window.Vue.openBlock, Yk = window.Vue.createElementBlock, Hk = window.Vue.createElementVNode;
var Gk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jk = {}, Kk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Qk = /* @__PURE__ */ Hk("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), Jk = [
  Qk
];
function eP(e, o) {
  return Uk(), Yk("svg", Kk, Jk);
}
var ul = /* @__PURE__ */ Gk(jk, [["render", eP]]);
const tP = window.Vue.openBlock, nP = window.Vue.createElementBlock, Tm = window.Vue.createElementVNode;
var rP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const oP = {}, sP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iP = /* @__PURE__ */ Tm("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), aP = /* @__PURE__ */ Tm("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), lP = [
  iP,
  aP
];
function uP(e, o) {
  return tP(), nP("svg", sP, lP);
}
var cP = /* @__PURE__ */ rP(oP, [["render", uP]]);
const dP = window.Vue.openBlock, fP = window.Vue.createElementBlock, AP = window.Vue.createElementVNode;
var hP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const pP = {}, wP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vP = /* @__PURE__ */ AP("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), mP = [
  vP
];
function gP(e, o) {
  return dP(), fP("svg", wP, mP);
}
var VP = /* @__PURE__ */ hP(pP, [["render", gP]]);
const gn = () => window.VRouter || S1;
const _P = window.Vue.openBlock, yP = window.Vue.createElementBlock, bP = window.Vue.pushScopeId, CP = window.Vue.popScopeId, Zp = window.Vue.createElementVNode;
var $P = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const EP = {}, MP = (e) => (bP("data-v-2263be39"), e = e(), CP(), e), IP = { class: "spinner-container" }, BP = /* @__PURE__ */ MP(() => /* @__PURE__ */ Zp("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Zp("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), xP = [
  BP
];
function SP(e, o) {
  return _P(), yP("div", IP, xP);
}
var bd = /* @__PURE__ */ $P(EP, [["render", SP], ["__scopeId", "data-v-2263be39"]]);
const TP = window.Vue.defineComponent, cc = window.Vue.unref, kP = window.Vue.createVNode, PP = window.Vue.createElementVNode, NP = window.Vue.withCtx, DP = window.Vue.openBlock, OP = window.Vue.createBlock, LP = window.Vue.pushScopeId, zP = window.Vue.popScopeId, qP = (e) => (LP("data-v-fba500de"), e = e(), zP(), e), RP = /* @__PURE__ */ qP(() => /* @__PURE__ */ PP("span", null, "New Situation", -1)), WP = window.Vue.markRaw, FP = /* @__PURE__ */ TP({
  setup(e) {
    const o = gn(), r = WP({
      Add: ul
    }), i = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (DP(), OP(cc(ae), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: NP(() => [
        kP(cc(Z), {
          icon: cc(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        RP
      ]),
      _: 1
    }));
  }
});
const km = /* @__PURE__ */ re(FP, [["__scopeId", "data-v-fba500de"]]), XP = "/whoami", ZP = async () => {
  try {
    const e = await rn.get(XP);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Cd = "/alec", Pm = "/alec/engine/configuration", Nm = "/alec/agreement/configuration", UP = "/alec/situation", YP = async (e) => {
  try {
    return (await rn.post(`${Nm}`, {
      agreed: e
    })).status === 200;
  } catch {
    return !1;
  }
}, HP = async () => {
  try {
    const e = await rn.get(`${Nm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, GP = async () => {
  try {
    const e = await rn.get(`${Pm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, jP = async (e) => {
  try {
    return (await rn.post(Pm, e)).status === 200;
  } catch {
    return !1;
  }
}, Dm = async (e, o) => {
  try {
    const r = await rn.post(`${Cd}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == ye.REJECTED.toLowerCase() && r.status === 200 && await Xv(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Up = async (e, o) => {
  try {
    return (await rn.delete(`${Cd}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Om = async (e, o) => {
  try {
    return (await rn.put(`${Cd}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, KP = async (e) => {
  try {
    return (await rn.post(UP, e)).status === 200;
  } catch {
    return !1;
  }
}, QP = window.Pinia.defineStore, JP = {
  alpha: 144.47117699,
  beta: 0.55257784,
  epsilon: 100
}, Ln = QP("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await ZP();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await HP();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async getEngineInfo() {
      const e = await GP();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o) {
      const r = {
        ...JP,
        distanceMeasureName: o ? ye.HELLINGER_OPTION : ye.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return await jP(r) ? (this.engineInfo = r, !0) : !1;
    },
    async savePermission(e) {
      await YP(e) && (this.allowSave = e);
    }
  }
}), eN = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", tN = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", nN = window.Vue.defineComponent, _s = window.Vue.unref, dc = window.Vue.createElementVNode, co = window.Vue.openBlock, fo = window.Vue.createElementBlock, rN = window.Vue.createCommentVNode, Lm = window.Vue.createTextVNode, oN = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const sN = {
  key: 0,
  class: "info-engine"
}, iN = ["src"], aN = /* @__PURE__ */ Lm(" ENGINE "), lN = {
  key: 0,
  class: "type"
}, uN = {
  key: 1,
  class: "type"
}, cN = /* @__PURE__ */ Lm(" OPT-IN "), dN = {
  key: 0,
  class: "optin-on"
}, fN = {
  key: 1,
  class: "optin-off"
}, AN = window.Vue.watch, hN = window.Vue.ref, pN = /* @__PURE__ */ nN({
  setup(e) {
    var u;
    const o = gn(), r = Ln(), i = () => {
      o.push({
        name: "settings"
      });
    }, a = hN(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == ye.ENGINE_DBSCAN
    );
    return AN(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == ye.ENGINE_DBSCAN;
      }
    ), (c, f) => (co(), fo(oN, null, [
      _s(r).engineInfo && _s(r).engineInfo.engineName ? (co(), fo("div", sN, [
        dc("img", {
          src: a.value ? _s(tN) : _s(eN),
          class: "icon-type"
        }, null, 8, iN),
        dc("div", {
          class: "engine",
          onClick: i
        }, [
          aN,
          a.value ? (co(), fo("div", lN, "CLUSTERING")) : (co(), fo("div", uN, "DEEP LEARNING"))
        ])
      ])) : rN("", !0),
      dc("div", {
        class: "optin",
        onClick: i
      }, [
        cN,
        _s(r).allowSave ? (co(), fo("div", dN, "ON")) : (co(), fo("div", fN, "OFF"))
      ])
    ], 64));
  }
});
const wN = /* @__PURE__ */ re(pN, [["__scopeId", "data-v-28fe775c"]]);
const vN = {}, mN = window.Vue.openBlock, gN = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const VN = { class: "empty" };
function _N(e, o) {
  return mN(), gN("div", VN, "No results found.");
}
const Ro = /* @__PURE__ */ re(vN, [["render", _N], ["__scopeId", "data-v-725433ac"]]), yN = window.Vue.defineComponent, dn = window.Vue.createElementVNode, Ht = window.Vue.unref, br = window.Vue.createVNode, bN = window.Vue.withCtx, sa = window.Vue.toDisplayString, Sn = window.Vue.openBlock, Cr = window.Vue.createElementBlock, Yp = window.Vue.createCommentVNode, Hp = window.Vue.createBlock, CN = window.Vue.renderList, $N = window.Vue.Fragment, EN = window.Vue.pushScopeId, MN = window.Vue.popScopeId, zm = (e) => (EN("data-v-2675e2f8"), e = e(), MN(), e), IN = { class: "list-main" }, BN = { class: "header" }, xN = /* @__PURE__ */ zm(() => /* @__PURE__ */ dn("h2", null, "Situation List", -1)), SN = { class: "link-btns" }, TN = /* @__PURE__ */ zm(() => /* @__PURE__ */ dn("span", null, "View Unassociated Alarms", -1)), kN = { class: "content" }, PN = { class: "left-filters" }, NN = { class: "container" }, DN = { class: "autocomplete" }, ON = { key: 0 }, LN = { key: 1 }, zN = { key: 0 }, qN = { class: "situation-list" }, RN = {
  key: 0,
  class: "footer-pager"
}, WN = window.Vue.reactive, ia = window.Vue.ref, FN = window.Vue.watch, XN = window.Vue.markRaw, ZN = /* @__PURE__ */ yN({
  setup(e) {
    const o = XN({
      Add: ul,
      View: cP,
      Settings: VP
    }), r = gn(), i = on(), a = Ln();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = WN({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = ia(!0), p = ia(0), v = ia(1), m = ia(0), V = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    FN(
      () => i.situations,
      () => {
        f.value = !1, V(), D(i.situations);
      }
    );
    const _ = ($) => {
      p.value = $, c.situations = c.allSituations[p.value];
    }, x = ($) => {
      r.push({
        name: "situationDetail",
        params: {
          id: $
        }
      });
    }, S = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, D = ($) => {
      m.value = $.length, c.allSituations = de.exports.chunk($, u);
      const P = $.map((T) => T.id);
      i.filteredSituations = P, p.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, N = ($) => {
      $.length ? D($) : c.situations = [];
    };
    return ($, P) => {
      var T;
      return Sn(), Cr("div", IN, [
        dn("div", BN, [
          xN,
          dn("div", SN, [
            br(Ht(ae), {
              class: "view-situation-btn",
              onClick: P[0] || (P[0] = () => S())
            }, {
              default: bN(() => [
                br(Ht(Z), {
                  icon: Ht(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                TN
              ]),
              _: 1
            }),
            br(km),
            br(wN)
          ])
        ]),
        dn("div", kN, [
          dn("div", PN, [
            br(qo, {
              list: Ht(i).situations,
              onFilteredList: N,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          dn("div", NN, [
            dn("div", DN, [
              Ht(c).situations && Ht(c).situations.length ? (Sn(), Cr("div", ON, " Result: " + sa((T = Ht(c).situations) == null ? void 0 : T.length) + " of " + sa(m.value), 1)) : Yp("", !0)
            ]),
            f.value ? (Sn(), Hp(Ht(bd), {
              key: 0,
              class: "spinner"
            })) : (Sn(), Cr("div", LN, [
              Ht(c).situations && Ht(c).situations.length ? (Sn(), Cr("div", zN, [
                dn("div", qN, [
                  (Sn(!0), Cr($N, null, CN(Ht(c).situations, (O) => (Sn(), Cr("div", {
                    class: "card",
                    key: O.id
                  }, [
                    br(em, {
                      onClick: () => x(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                m.value > u ? (Sn(), Cr("div", RN, [
                  dn("div", null, "Page: " + sa(p.value + 1) + " of " + sa(v.value), 1),
                  br(eI, {
                    onGoToPage: _,
                    currentPage: p.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Yp("", !0)
              ])) : (Sn(), Hp(Ro, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const UN = /* @__PURE__ */ re(ZN, [["__scopeId", "data-v-2675e2f8"]]);
const aa = window.Vue.ref, YN = window.Vue.inject, HN = window.Vue.computed, GN = window.Vue.onMounted, qm = {
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
}, Rm = (e) => {
  const o = aa(!1), r = aa(), i = aa(e.controls), a = aa(e.id), u = () => {
    r.value && r.value.focus();
  }, c = YN("registerTab");
  GN(() => {
    if (r.value && c) {
      const p = r.value.parentElement, v = p && p.parentElement ? p.parentElement : void 0, m = Array.from(v ? v.children : []).filter((_) => _.querySelectorAll("[role=tab]").length), V = p ? m.indexOf(p) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: o,
        id: a,
        controls: i,
        index: V
      });
    }
  });
  const f = HN(() => ({
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
}, Gp = window.Vue.ref, jN = window.Vue.toRef, KN = window.Vue.watch, jp = window.Vue.provide, Wm = {
  prop: "modelValue",
  event: "update:modelValue"
}, Fm = {
  "update:modelValue": (e) => !0
}, Xm = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, Zm = (e, o) => {
  const r = jN(e, "modelValue"), i = Gp(e.modelValue), a = Gp([]);
  KN(r, (S) => {
    p(S);
  });
  const u = (S) => {
    S.preventDefault(), a.value.some((D, N) => D.tab && D.tab.el.contains(S.target) ? (f(N), p(N), !0) : !1);
  }, c = (S) => {
    if (((F) => F.shiftKey || F.ctrlKey || F.metaKey || F.altKey)(S))
      return;
    const N = S.keyCode, $ = (F) => {
      F.stopPropagation(), F.preventDefault();
    }, P = a.value.filter((F) => F.tab && !F.tab.disabled), T = a.value.findIndex((F) => F.tab && F.tab.el.contains(document.activeElement));
    let O = T !== -1 ? T : i.value;
    const I = [Q.RIGHT], q = [Q.LEFT], L = [Q.ENTER, Q.SPACE];
    e.vertical && (I.push(Q.DOWN), q.push(Q.UP)), I.indexOf(N) > -1 ? (O++, O >= P.length && (O = 0), $(S), f(a.value.indexOf(P[O]))) : q.indexOf(N) > -1 && (O--, O < 0 && (O = P.length - 1), $(S), f(a.value.indexOf(P[O]))), L.indexOf(N) > -1 && p(O);
  }, f = (S) => {
    a.value.forEach(function(D, N) {
      S === N && D.tab && D.tab.focus();
    });
  }, p = (S) => {
    const D = a.value[S];
    !D || D.tab && D.tab.disabled || (a.value.forEach((N, $) => {
      N.tab && (N.tab.selected = S === $), N.panel && (N.panel.selected = S === $);
    }), i.value = S, o.emit("update:modelValue", S));
  };
  jp("registerTab", (S) => {
    const D = S.index;
    D > -1 && (a.value[D] = { ...a.value[D], tab: S }, a.value = [...a.value], V());
  }), jp("registerPanel", (S) => {
    const D = S.index;
    D > -1 && (a.value[D] = {
      ...a.value[D],
      panel: S
    }, a.value = [...a.value], V());
  });
  const V = () => {
    a.value.forEach(({ tab: S, panel: D }, N) => {
      if (D && S) {
        const $ = S.id || ce("tab"), P = S.controls || ce("panel");
        S.controls = P, S.id = $, D.tab = $, D.id = P;
      }
      N === i.value && (D && (D.selected = !0), S && (S.selected = !0));
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
}, la = window.Vue.ref, QN = window.Vue.inject, JN = window.Vue.computed, eD = window.Vue.onMounted, Um = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, Ym = (e) => {
  const o = la(!1), r = la(), i = la(e.tab), a = la(e.id), u = QN("registerPanel");
  eD(() => {
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
  const c = JN(() => ({
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
}, $d = window.Vue.defineComponent, tD = window.Vue.resolveComponent, Ed = window.Vue.openBlock, Md = window.Vue.createElementBlock, Fs = window.Vue.createElementVNode, Hm = window.Vue.mergeProps, za = window.Vue.renderSlot, nD = window.Vue.createVNode, rD = window.Vue.normalizeStyle, oD = window.Vue.toHandlers, sD = window.Vue.withDirectives, iD = window.Vue.normalizeProps, aD = window.Vue.guardReactiveProps, lD = window.Vue.vShow;
var Id = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const uD = qm, cD = $d({
  props: uD,
  setup(e) {
    return Rm(e);
  },
  components: {
    FeatherRipple: sr
  }
}), dD = { role: "presentation" }, fD = { class: "tab-text" };
function AD(e, o, r, i, a, u) {
  const c = tD("FeatherRipple");
  return Ed(), Md("li", dD, [
    Fs("button", Hm(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Fs("span", fD, [
        za(e.$slots, "default", {}, void 0, !0)
      ]),
      nD(c)
    ], 16)
  ]);
}
var Kp = /* @__PURE__ */ Id(cD, [["render", AD], ["__scopeId", "data-v-e6bb52b6"]]);
const hD = Xm, pD = Fm, wD = $d({
  model: Wm,
  emits: pD,
  props: hD,
  setup(e, o) {
    return Zm(e, o);
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
}), vD = { class: "feather-tab-container" }, mD = { class: "tab-panels" };
function gD(e, o, r, i, a, u) {
  return Ed(), Md("div", vD, [
    Fs("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: rD({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Fs("ul", Hm(e.attrs, oD(e.listeners)), [
      za(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Fs("div", mD, [
      za(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var VD = /* @__PURE__ */ Id(wD, [["render", gD], ["__scopeId", "data-v-27adffb9"]]);
const _D = Um, yD = $d({
  props: _D,
  setup(e) {
    return Ym(e);
  }
});
function bD(e, o, r, i, a, u) {
  return sD((Ed(), Md("div", iD(aD(e.attrs)), [
    za(e.$slots, "default")
  ], 16)), [
    [lD, e.selected]
  ]);
}
var Qp = /* @__PURE__ */ Id(yD, [["render", bD]]);
const CD = window.Vue.defineComponent, $D = window.Vue.toDisplayString, ED = window.Vue.normalizeClass, MD = window.Vue.openBlock, ID = window.Vue.createElementBlock, BD = window.Vue.createCommentVNode, xD = /* @__PURE__ */ CD({
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (MD(), ID("span", {
      key: 0,
      class: ED(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, $D(o.severity), 3)) : BD("", !0);
  }
});
const Gm = /* @__PURE__ */ re(xD, [["__scopeId", "data-v-83c2cdce"]]), SD = window.Vue.defineComponent, Jp = window.Vue.toDisplayString, ew = window.Vue.createElementVNode, TD = window.Vue.openBlock, kD = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const PD = { class: "box" }, ND = { class: "label" }, DD = { class: "date" }, OD = /* @__PURE__ */ SD({
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (TD(), kD("div", PD, [
      ew("div", ND, Jp(o.label), 1),
      ew("div", DD, Jp(o.info), 1)
    ]));
  }
});
const fc = /* @__PURE__ */ re(OD, [["__scopeId", "data-v-b4afa751"]]), LD = window.Vue.defineComponent, zD = window.Vue.unref, qD = window.Vue.renderList, RD = window.Vue.Fragment, Ac = window.Vue.openBlock, hc = window.Vue.createElementBlock, WD = window.Vue.toDisplayString, FD = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XD = { class: "alarms-list" }, ZD = /* @__PURE__ */ LD({
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (Ac(), hc("div", XD, [
      (Ac(!0), hc(RD, null, qD(zD(de.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Ac(), hc("div", {
        class: FD(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, WD(a.length), 3))), 128))
    ]));
  }
});
const UD = /* @__PURE__ */ re(ZD, [["__scopeId", "data-v-52d63440"]]), YD = window.Vue.openBlock, HD = window.Vue.createElementBlock, GD = window.Vue.createElementVNode;
var jD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const KD = {}, QD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JD = /* @__PURE__ */ GD("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), eO = [
  JD
];
function tO(e, o) {
  return YD(), HD("svg", QD, eO);
}
var nO = /* @__PURE__ */ jD(KD, [["render", tO]]);
const rO = window.Vue.openBlock, oO = window.Vue.createElementBlock, sO = window.Vue.createStaticVNode;
var iO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const aO = {}, lO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uO = /* @__PURE__ */ sO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), cO = [
  uO
];
function dO(e, o) {
  return rO(), oO("svg", lO, cO);
}
var qa = /* @__PURE__ */ iO(aO, [["render", dO]]);
const fO = window.Vue.defineComponent, Gt = window.Vue.unref, pc = window.Vue.createVNode, Bd = window.Vue.createElementVNode, wc = window.Vue.withCtx, ua = window.Vue.openBlock, vc = window.Vue.createBlock, mc = window.Vue.createCommentVNode, AO = window.Vue.normalizeClass, hO = window.Vue.createElementBlock, pO = window.Vue.pushScopeId, wO = window.Vue.popScopeId, xd = (e) => (pO("data-v-e073070b"), e = e(), wO(), e), vO = /* @__PURE__ */ xd(() => /* @__PURE__ */ Bd("span", null, "Acknowledge", -1)), mO = /* @__PURE__ */ xd(() => /* @__PURE__ */ Bd("span", null, "Escalate", -1)), gO = /* @__PURE__ */ xd(() => /* @__PURE__ */ Bd("span", null, "Clear", -1)), VO = /* @__PURE__ */ fO({
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = on(), i = async (u) => {
      await q3(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await Dm(
        o.situationId,
        ye.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Xv(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (ua(), hO("div", {
      class: AO(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? mc("", !0) : (ua(), vc(Gt(ae), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => i(!0))
      }, {
        default: wc(() => [
          pc(Gt(Z), {
            icon: Gt(ko),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          vO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (ua(), vc(Gt(ae), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(Gt(ye).ESCALATE))
      }, {
        default: wc(() => [
          pc(Gt(Z), {
            icon: Gt(nO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          mO
        ]),
        _: 1
      })) : mc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (ua(), vc(Gt(ae), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(Gt(ye).CLEAR))
      }, {
        default: wc(() => [
          pc(Gt(Z), {
            icon: Gt(qa),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          gO
        ]),
        _: 1
      })) : mc("", !0)
    ], 2));
  }
});
const jm = /* @__PURE__ */ re(VO, [["__scopeId", "data-v-e073070b"]]);
var _O = Object.defineProperty, yO = Object.defineProperties, bO = Object.getOwnPropertyDescriptors, tw = Object.getOwnPropertySymbols, CO = Object.prototype.hasOwnProperty, $O = Object.prototype.propertyIsEnumerable, nw = (e, o, r) => o in e ? _O(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Qc = (e, o) => {
  for (var r in o || (o = {}))
    CO.call(o, r) && nw(e, r, o[r]);
  if (tw)
    for (var r of tw(o))
      $O.call(o, r) && nw(e, r, o[r]);
  return e;
}, Km = (e, o) => yO(e, bO(o));
const Qm = window.Vue.defineComponent, EO = window.Vue.inject, MO = window.Vue.resolveComponent, gc = window.Vue.openBlock, rw = window.Vue.createElementBlock, Eo = window.Vue.createElementVNode, IO = window.Vue.createBlock, ow = window.Vue.createCommentVNode, BO = window.Vue.renderSlot, xO = window.Vue.pushScopeId, SO = window.Vue.popScopeId, Vc = window.Vue.toRef, ca = window.Vue.computed, TO = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var kO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const PO = {
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
}, NO = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, DO = Qm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: NO,
  props: PO,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: EO("registerCheckbox", (o) => {
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
      (e.keyCode === Q.SPACE || e.keyCode === Q.ENTER) && this.updateValue(), e.keyCode === Q.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: sr
  }
}), OO = (e) => (xO("data-v-a7af27e2"), e = e(), SO(), e), LO = { class: "layout-container" }, zO = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], qO = { class: "checkbox hover focus" }, RO = /* @__PURE__ */ OO(() => /* @__PURE__ */ Eo("div", { class: "box" }, [
  /* @__PURE__ */ Eo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Eo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Eo("div", { class: "indeterminate" })
], -1)), WO = ["id", "for"];
function FO(e, o, r, i, a, u) {
  const c = MO("feather-ripple");
  return gc(), rw("div", LO, [
    Eo("div", {
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
      Eo("div", qO, [
        RO,
        e.disabled ? ow("", !0) : (gc(), IO(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? ow("", !0) : (gc(), rw("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        BO(e.$slots, "default", {}, void 0, !0)
      ], 8, WO))
    ], 40, zO)
  ]);
}
var Wo = /* @__PURE__ */ kO(DO, [["render", FO], ["__scopeId", "data-v-a7af27e2"]]);
const XO = Km(Qc({}, el), {
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
Qm({
  props: XO,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    tl(e);
    const r = Vc(e, "error"), i = ca(() => ce("feather-checkbox-group")), a = ca(() => ce("feather-input-description")), u = ca(() => ce("feather-input-label")), c = ca(() => {
      const m = JSON.parse(JSON.stringify(o.attrs));
      return m["aria-invalid"] || (m["aria-invalid"] = !!r.value), Km(Qc({}, m), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = TO(i.value), { validate: p } = Qa(f, Vc(e, "modelValue"), e.label, e.schema, Vc(e, "error"));
    return Qc({
      groupId: i,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: p,
      registerCheckbox: (m) => {
        m && f.value === i.value && (f.value = m);
      }
    }, Ja(o.attrs));
  },
  components: {
    InputSubText: Ka
  }
});
const ZO = window.Vue.openBlock, UO = window.Vue.createElementBlock, Jm = window.Vue.createElementVNode;
var YO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const HO = {}, GO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jO = /* @__PURE__ */ Jm("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), KO = /* @__PURE__ */ Jm("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), QO = [
  jO,
  KO
];
function JO(e, o) {
  return ZO(), UO("svg", GO, QO);
}
var e5 = /* @__PURE__ */ YO(HO, [["render", JO]]);
const sw = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
};
const Fo = window.Vue.defineComponent, Ks = window.Vue.resolveComponent, pn = window.Vue.openBlock, Mo = window.Vue.createElementBlock, t5 = window.Vue.createVNode, Ra = window.Vue.createBlock, n5 = window.Vue.withModifiers, No = window.Vue.inject, Qs = window.Vue.computed, r5 = window.Vue.normalizeClass, tr = window.Vue.createElementVNode, o5 = window.Vue.normalizeStyle, Jc = window.Vue.toDisplayString, Ea = window.Vue.renderSlot, Xs = window.Vue.createCommentVNode, s5 = window.Vue.pushScopeId, i5 = window.Vue.popScopeId, a5 = window.Vue.withDirectives, l5 = window.Vue.vShow, ed = window.Vue.ref, iw = window.Vue.toRef, aw = window.Vue.nextTick, td = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Sd = window.Vue.provide, lw = window.Vue.isRef, u5 = window.Vue.onBeforeUnmount, c5 = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, d5 = Fo({
  props: c5,
  components: {
    FeatherIcon: Z
  }
}), ri = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
}, f5 = ["title"];
function A5(e, o, r, i, a, u) {
  const c = Ks("FeatherIcon");
  return pn(), Mo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    t5(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, f5);
}
const h5 = /* @__PURE__ */ ri(d5, [["render", A5], ["__scopeId", "data-v-8bb27a5c"]]), p5 = Fo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return qr;
    }
  },
  components: {
    ActionIcon: h5
  }
});
function w5(e, o, r, i, a, u) {
  const c = Ks("ActionIcon");
  return pn(), Ra(c, {
    onClick: o[0] || (o[0] = n5((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
const v5 = /* @__PURE__ */ ri(p5, [["render", w5]]), m5 = Fo({
  computed: {
    errorIcon() {
      return rm;
    }
  },
  components: {
    FeatherIcon: Z
  }
});
function g5(e, o, r, i, a, u) {
  const c = Ks("FeatherIcon");
  return pn(), Ra(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
const V5 = /* @__PURE__ */ ri(m5, [["render", g5], ["__scopeId", "data-v-2b61105f"]]), _5 = {
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
}, y5 = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, b5 = Fo({
  emits: y5,
  props: _5,
  data() {
    return {
      labelWidth: "0px",
      labelObserver: void 0
    };
  },
  setup() {
    const e = No(
      "wrapperOptions",
      {}
    ), o = No(
      "validationErrorMessage",
      !1
    ), r = Qs(() => e.error ? e.error : o && o.value ? o.value : !1);
    return { ...e, error: r };
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
      return this.hideLabel && e.push("hide-label"), this.raised && e.push("raised"), this.focused && e.push("focused"), this.error && e.push("error"), this.disabled && e.push("disabled"), this.inline && e.push("inline"), this.hasPre && e.push("has-prefix"), e;
    }
  },
  methods: {
    handleWrapperClick(e) {
      this.disabled || this.$emit("wrapper-click", e);
    }
  },
  mounted() {
    const e = this.$el.querySelector(".feather-input-label");
    if (e) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const i = this.$el.querySelector(".feather-input-label"), { width: a } = i.getBoundingClientRect();
        a > 2 ? this.raised || this.focused ? this.labelWidth = a + "px" : this.labelWidth = a * 0.75 + 8 + "px" : this.labelWidth = "0px";
      };
      this.labelObserver = new MutationObserver(r), this.labelObserver.observe(e, o), this.$nextTick(r);
    }
  },
  unmounted() {
    this.labelObserver && this.labelObserver.disconnect();
  },
  components: {
    ClearIcon: v5,
    ErrorIcon: V5
  }
}), e1 = (e) => (s5("data-v-ab1739ff"), e = e(), i5(), e), C5 = { class: "feather-input-border" }, $5 = /* @__PURE__ */ e1(() => /* @__PURE__ */ tr("div", { class: "pre-border" }, null, -1)), E5 = ["for"], M5 = /* @__PURE__ */ e1(() => /* @__PURE__ */ tr("div", { class: "post-border" }, null, -1)), I5 = { class: "prefix" }, B5 = { class: "post" };
function x5(e, o, r, i, a, u) {
  const c = Ks("ClearIcon"), f = Ks("ErrorIcon");
  return pn(), Mo("div", {
    class: r5(["feather-input-wrapper-container", e.containerCls])
  }, [
    tr("div", C5, [
      $5,
      tr("div", {
        class: "label-border",
        style: o5({ width: e.labelWidth })
      }, [
        tr("label", {
          class: "feather-input-label",
          for: e.inputId,
          "data-ref-id": "feather-form-element-label"
        }, Jc(e.label), 9, E5)
      ], 4),
      M5
    ]),
    tr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...p) => e.handleWrapperClick && e.handleWrapperClick(...p))
    }, [
      tr("div", I5, [
        Ea(e.$slots, "pre", {}, void 0, !0)
      ]),
      Ea(e.$slots, "default", {}, void 0, !0),
      tr("div", B5, [
        e.showClear && e.computedClearText ? (pn(), Ra(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (p) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Xs("", !0),
        e.error ? (pn(), Ra(f, { key: 1 })) : Xs("", !0),
        Ea(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
const S5 = /* @__PURE__ */ ri(b5, [["render", x5], ["__scopeId", "data-v-ab1739ff"]]), T5 = Fo({
  setup() {
    const e = No(
      "subTextOptions",
      {}
    ), o = No(
      "validationErrorMessage",
      !1
    ), r = Qs(() => e.error ? e.error : o && o.value ? o.value : "");
    return { ...e, error: r };
  }
}), k5 = { class: "feather-input-sub-text" }, P5 = {
  key: 0,
  class: "feather-input-spacer"
}, N5 = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, D5 = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function O5(e, o, r, i, a, u) {
  return a5((pn(), Mo("div", k5, [
    !e.hint && !e.error.length ? (pn(), Mo("div", P5, "\xA0")) : Xs("", !0),
    e.hint && !e.error.length ? (pn(), Mo("div", N5, Jc(e.hint), 1)) : Xs("", !0),
    e.error.length > 0 ? (pn(), Mo("div", D5, Jc(e.error), 1)) : Xs("", !0),
    Ea(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [l5, !e.inline || e.hint || e.error.length]
  ]);
}
const L5 = /* @__PURE__ */ ri(T5, [["render", O5], ["__scopeId", "data-v-f0789880"]]), z5 = {
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
Fo({
  props: z5,
  setup(e) {
    const o = No(
      "featherFormErrors",
      ed([])
    ), r = iw(e, "errorList"), i = Qs(() => {
      var m;
      return (m = r.value) != null && m.length ? r.value : o.value;
    }), a = iw(e, "generalError"), u = (m) => {
      document.getElementById(m).focus();
    }, c = (m) => m.replace(/ \*$/, ""), f = ed(), p = (m) => `${c(m.label)} - ${m.message}`, v = Qs(() => (i.value.length && aw(() => f.value.focus()), e.headingText(i.value)));
    return td(a, (m) => {
      m.length && aw(() => f.value.focus());
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
const q5 = (e, o, r, i, a) => {
  const u = No("featherForm", !1);
  if (i && u && e.value) {
    const c = ed("");
    Sd("validationErrorMessage", c);
    const f = () => {
      if (a && lw(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return i.validateSync(o.value), c.value = "", { success: !0 };
      } catch (m) {
        const V = m;
        return c.value = V.errors[0], {
          success: !1,
          message: V.errors[0],
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
    return a && lw(a) && td(a, () => {
      u.runValidation();
    }), td(
      e,
      (m, V) => {
        m && u && u.register(m, v), V && u && u.deregister(V);
      },
      { immediate: !0 }
    ), u5(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, R5 = (e) => ({
  inherittedAttrs: Qs(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), W5 = {
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
}, F5 = (e) => {
  Sd("subTextOptions", e);
}, X5 = {
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
}, Z5 = (e) => {
  Sd("wrapperOptions", e);
}, U5 = window.Vue.defineComponent, _c = window.Vue.toRef, Y5 = window.Vue.computed, uw = window.Vue.resolveComponent, cw = window.Vue.openBlock, dw = window.Vue.createElementBlock, fw = window.Vue.mergeProps, Aw = window.Vue.createVNode, H5 = window.Vue.normalizeClass, hw = window.Vue.withCtx, G5 = window.Vue.createElementVNode, j5 = window.Vue.toDisplayString, K5 = window.Vue.createCommentVNode, Q5 = {
  ...X5,
  ...W5,
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
}, J5 = {
  "update:modelValue": (e) => !0
}, e9 = U5({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: J5,
  props: Q5,
  setup(e, o) {
    F5(e), Z5(e);
    const r = _c(e, "id"), i = Y5(() => r.value ? r.value : sw("feather-textarea-label")), { validate: a } = q5(
      i,
      _c(e, "modelValue"),
      e.label,
      e.schema,
      _c(e, "error")
    );
    return {
      inputId: i,
      incomingId: r,
      validate: a,
      ...R5(o.attrs)
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
      return sw("feather-textarea-description");
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
      const e = { ...this.$attrs };
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), {
        ...e,
        ...this.listeners,
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (e["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      };
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
    InputSubText: L5,
    InputWrapper: S5
  }
}), t9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
}, n9 = ["maxlength"], r9 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function o9(e, o, r, i, a, u) {
  const c = uw("InputWrapper"), f = uw("InputSubText");
  return cw(), dw("div", fw(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Aw(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: H5(["feather-textarea-content", e.contentCls])
    }, {
      default: hw(() => [
        G5("textarea", fw(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, n9)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Aw(f, { id: e.descriptionId }, {
      right: hw(() => [
        e.maxlength ? (cw(), dw("div", r9, j5(e.charCount), 1)) : K5("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
const nd = /* @__PURE__ */ t9(e9, [["render", o9], ["__scopeId", "data-v-eee43a95"]]), s9 = window.Pinia.defineStore, cl = s9("appStore", {
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
}), i9 = window.Vue.defineComponent, pw = window.Vue.toDisplayString, ys = window.Vue.createElementVNode, $r = window.Vue.unref, Ao = window.Vue.openBlock, ww = window.Vue.createBlock, bs = window.Vue.createCommentVNode, vw = window.Vue.createVNode, da = window.Vue.createElementBlock, a9 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const l9 = { class: "row" }, u9 = { class: "label" }, c9 = { class: "action-icons" }, d9 = { class: "icon-btn" }, f9 = {
  key: 0,
  class: "icon-btn"
}, A9 = {
  key: 1,
  class: "icon-btn"
}, h9 = {
  key: 0,
  class: "text"
}, p9 = window.Vue.watch, mw = window.Vue.ref, w9 = /* @__PURE__ */ i9({
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
    const o = e, r = cl(), i = mw(!1), a = mw((p = o.memo) == null ? void 0 : p.body);
    p9(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const u = () => {
      i.value = !i.value;
    }, c = async () => {
      i.value = !1, await Y3(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, a.value && a.value !== "" && (await U3(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, m) => (Ao(), da("div", {
      class: a9([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ys("div", l9, [
        ys("div", u9, pw(e.label), 1),
        ys("div", c9, [
          ys("div", d9, [
            i.value ? bs("", !0) : (Ao(), ww($r(Z), {
              key: 0,
              icon: $r(e5),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          i.value ? (Ao(), da("div", f9, [
            vw($r(Z), {
              icon: $r(ko),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : bs("", !0),
          a.value && a.value != "" || i.value ? (Ao(), da("div", A9, [
            vw($r(Z), {
              icon: $r(qr),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : bs("", !0)
        ])
      ]),
      ys("div", null, [
        !i.value && a.value != null ? (Ao(), da("div", h9, pw(a.value), 1)) : bs("", !0),
        i.value ? (Ao(), ww($r(nd), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": m[0] || (m[0] = (V) => a.value = V),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : bs("", !0)
      ])
    ], 2));
  }
});
const Wa = /* @__PURE__ */ re(w9, [["__scopeId", "data-v-3f44e250"]]), v9 = window.Vue.defineComponent, Er = window.Vue.unref, ho = window.Vue.createVNode, Cs = window.Vue.toDisplayString, tn = window.Vue.createElementVNode, gw = window.Vue.openBlock, Vw = window.Vue.createElementBlock, _w = window.Vue.createCommentVNode, yc = window.Vue.createTextVNode, m9 = window.Vue.pushScopeId, g9 = window.Vue.popScopeId, Td = (e) => (m9("data-v-02d1e7f0"), e = e(), g9(), e), V9 = {
  key: 0,
  class: "card"
}, _9 = { class: "row" }, y9 = {
  key: 0,
  class: "ack"
}, b9 = /* @__PURE__ */ Td(() => /* @__PURE__ */ tn("strong", null, " Duration: ", -1)), C9 = ["innerHTML"], $9 = /* @__PURE__ */ Td(() => /* @__PURE__ */ tn("strong", null, "First Event", -1)), E9 = /* @__PURE__ */ Td(() => /* @__PURE__ */ tn("strong", null, "Last Event", -1)), M9 = { class: "section memo-boxes" }, yw = window.Vue.ref, I9 = window.Vue.watch, B9 = /* @__PURE__ */ v9({
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, i = yw(!1), a = yw(r.alarm), u = new Date().getTime();
    I9(r, () => {
      a.value = r.alarm, i.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (p) => {
      const v = await Zv(p);
      v && (a.value = v);
    };
    return (p, v) => {
      var m, V, _, x, S;
      return a.value ? (gw(), Vw("div", V9, [
        tn("div", null, [
          tn("div", _9, [
            ho(Er(Wo), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (D) => i.value = D),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            tn("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                i.value = !i.value, c();
              })
            }, Cs(a.value.nodeLabel) + " - " + Cs(a.value.id), 1),
            ho(Gm, {
              severity: (m = a.value) == null ? void 0 : m.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (gw(), Vw("div", y9, [
              ho(Er(Z), {
                icon: Er(ko),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : _w("", !0)
          ]),
          tn("div", null, [
            b9,
            yc(" " + Cs(Er(Ga)(Er(u), new Date(a.value.firstEventTime))), 1)
          ]),
          tn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, C9),
          tn("div", null, [
            $9,
            yc(" - " + Cs(Er(vn)(a.value.firstEventTime)), 1)
          ]),
          tn("div", null, [
            E9,
            yc(" - " + Cs(Er(vn)(a.value.lastEventTime)), 1)
          ]),
          tn("div", M9, [
            ho(Wa, {
              id: (V = a.value) == null ? void 0 : V.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (_ = a.value) == null ? void 0 : _.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ho(Wa, {
              id: (x = a.value) == null ? void 0 : x.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (S = a.value) == null ? void 0 : S.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ho(jm, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : _w("", !0);
    };
  }
});
const x9 = /* @__PURE__ */ re(B9, [["__scopeId", "data-v-02d1e7f0"]]), S9 = window.Vue.openBlock, T9 = window.Vue.createElementBlock, t1 = window.Vue.createElementVNode;
var k9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const P9 = {}, N9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D9 = /* @__PURE__ */ t1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), O9 = /* @__PURE__ */ t1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), L9 = [
  D9,
  O9
];
function z9(e, o) {
  return S9(), T9("svg", N9, L9);
}
var rd = /* @__PURE__ */ k9(P9, [["render", z9]]);
const q9 = window.Vue.watch, R9 = window.Vue.ref, W9 = window.Vue.onBeforeUnmount, n1 = (e) => {
  const o = R9(!1), r = (i) => {
    i.keyCode === Q.ESCAPE && (i.preventDefault(), o.value = !o.value);
  };
  return q9(e, (i) => {
    i ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), W9(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, F9 = window.Vue.watch, r1 = (e) => {
  let o;
  F9(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, o1 = window.Vue.watch, s1 = window.Vue.onBeforeUnmount, i1 = window.Vue.nextTick, X9 = window.Vue.onMounted, a1 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Fa = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, l1 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  s1(() => Fa(o, r)), X9(() => o1(e, (i) => {
    i ? i1(() => {
      o = a1(r);
    }) : Fa(o, r);
  }, { immediate: !0 }));
}, Z9 = (e, o) => {
  let r;
  s1(() => Fa(r, o.value ? o.value.offsetParent : !1)), o1([e, o], ([i, a]) => {
    i && a ? i1(() => {
      r = a1(a.offsetParent);
    }) : a && Fa(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var U9 = Object.defineProperty, bw = Object.getOwnPropertySymbols, Y9 = Object.prototype.hasOwnProperty, H9 = Object.prototype.propertyIsEnumerable, Cw = (e, o, r) => o in e ? U9(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, G9 = (e, o) => {
  for (var r in o || (o = {}))
    Y9.call(o, r) && Cw(e, r, o[r]);
  if (bw)
    for (var r of bw(o))
      H9.call(o, r) && Cw(e, r, o[r]);
  return e;
};
const kd = window.Vue.defineComponent, Zs = window.Vue.ref, j9 = window.Vue.nextTick, u1 = window.Vue.openBlock, c1 = window.Vue.createElementBlock, Pd = window.Vue.createElementVNode, K9 = window.Vue.renderSlot, Q9 = window.Vue.resolveComponent, J9 = window.Vue.normalizeClass, eL = window.Vue.withModifiers, tL = window.Vue.createVNode, $w = window.Vue.toRef, Ew = window.Vue.computed, Mw = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var d1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const nL = {
  enable: {
    type: Boolean,
    required: !0
  }
}, rL = kd({
  props: nL,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Zs(), o = Zs(!1), r = (m, V) => {
      let _ = m.compareDocumentPosition(V);
      if (_ === 2)
        return "before";
      if (_ === 4)
        return "after";
      if (_ === 10 || _ === 12)
        return "parent";
    }, i = (m) => {
      for (var V = 0; V < m.childNodes.length; V++) {
        var _ = m.childNodes[V];
        if (u(_) || i(_))
          return !0;
      }
      return !1;
    }, a = (m) => {
      for (var V = m.childNodes.length - 1; V >= 0; V--) {
        var _ = m.childNodes[V];
        if (u(_) || a(_))
          return !0;
      }
      return !1;
    }, u = (m) => c(m) ? (o.value = !0, m.focus && m.focus(), o.value = !1, document.activeElement === m) : !1, c = (m) => {
      if (m.tabIndex > 0 || m.tabIndex === 0 && m.getAttribute("tabIndex") !== null)
        return !0;
      const V = m;
      if (V.disabled || V.tabIndex === -1)
        return !1;
      switch (m.nodeName) {
        case "A":
          const _ = m;
          return !!_.href && _.rel !== "ignore";
        case "INPUT":
          const x = m;
          return x.type !== "hidden" && x.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (m) => {
      const V = m.querySelector("[first-focus]");
      V && V.focus ? j9(() => {
        V.focus();
      }) : i(m);
    }, p = Zs();
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
}), oL = /* @__PURE__ */ Pd("div", { tabindex: "0" }, null, -1), sL = {
  class: "focus-trap-content",
  ref: "content"
}, iL = /* @__PURE__ */ Pd("div", { tabindex: "0" }, null, -1);
function aL(e, o, r, i, a, u) {
  return u1(), c1("div", null, [
    oL,
    Pd("div", sL, [
      K9(e.$slots, "default")
    ], 512),
    iL
  ]);
}
var f1 = /* @__PURE__ */ d1(rL, [["render", aL]]);
const lL = kd({
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
    icon: () => qr
  },
  components: {
    FeatherIcon: Z
  }
}), uL = ["aria-label"];
function cL(e, o, r, i, a, u) {
  const c = Q9("FeatherIcon");
  return u1(), c1("a", {
    href: "#",
    class: J9(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = eL((f) => e.$emit("close"), ["prevent"]))
  }, [
    tL(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, uL);
}
var A1 = /* @__PURE__ */ d1(lL, [["render", cL], ["__scopeId", "data-v-fc0f3f00"]]);
const h1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, dL = {
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
    default: () => h1,
    validator: (e) => !!e.title
  }
}, fL = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
kd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: fL,
  props: dL,
  setup(e, o) {
    const r = ja($w(e, "labels"), h1), i = $w(e, "modelValue"), a = Zs(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = Ew(() => !!o.slots.footer), f = Ew(() => ce("dialog-header"));
    e.relative ? Z9(i, a) : l1(i), r1(i), Mw(n1(i), () => {
      u();
    });
    const p = Zs(e.modelValue);
    return Mw(p, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), G9({ close: u, hasFooter: c, headerId: f, element: a, shown: p }, r);
  },
  components: {
    FocusTrap: f1,
    DialogClose: A1
  }
});
var AL = Object.defineProperty, Iw = Object.getOwnPropertySymbols, hL = Object.prototype.hasOwnProperty, pL = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? AL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, dl = (e, o) => {
  for (var r in o || (o = {}))
    hL.call(o, r) && Bw(e, r, o[r]);
  if (Iw)
    for (var r of Iw(o))
      pL.call(o, r) && Bw(e, r, o[r]);
  return e;
};
const fl = window.Vue.defineComponent, xw = window.Vue.toRef, Sw = window.Vue.watch, Tw = window.Vue.ref, kw = window.Vue.resolveComponent, fa = window.Vue.openBlock, Pw = window.Vue.createBlock, wL = window.Vue.Teleport, Nw = window.Vue.createElementBlock, bc = window.Vue.createVNode, Dw = window.Vue.Transition, Cc = window.Vue.withCtx, Ow = window.Vue.createCommentVNode, vL = window.Vue.withDirectives, mL = window.Vue.normalizeStyle, gL = window.Vue.normalizeClass, Lw = window.Vue.createElementVNode, VL = window.Vue.renderSlot, _L = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var yL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const p1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, bL = {
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
    default: () => p1,
    validator: (e) => !!e.title
  }
}, CL = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, $L = fl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: CL,
  props: bL,
  setup(e, o) {
    const r = ja(xw(e, "labels"), p1), i = xw(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    l1(i), r1(i), Sw(n1(i), () => {
      a();
    });
    const u = Tw(), c = Tw(!1);
    return Sw(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), dl({ close: a, shown: c, isShown: i, element: u }, r);
  },
  components: {
    DialogClose: A1,
    FocusTrap: f1
  }
}), EL = {
  key: 0,
  class: "drawer-container feather-styles"
}, ML = {
  key: 0,
  class: "greyedOut"
}, IL = ["aria-label"], BL = { class: "slot" };
function xL(e, o, r, i, a, u) {
  const c = kw("dialog-close"), f = kw("focus-trap");
  return fa(), Pw(wL, { to: "body" }, [
    e.modelValue ? (fa(), Nw("div", EL, [
      bc(Dw, { name: "greyOutShim" }, {
        default: Cc(() => [
          e.modelValue ? (fa(), Nw("div", ML)) : Ow("", !0)
        ]),
        _: 1
      }),
      bc(Dw, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (p) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (p) => e.shown = !1)
      }, {
        default: Cc(() => [
          vL((fa(), Pw(f, {
            enable: e.modelValue,
            style: mL({ width: e.width }),
            key: "sect",
            class: gL(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Cc(() => [
              Lw("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Lw("div", BL, [
                  VL(e.$slots, "default", {}, void 0, !0)
                ]),
                bc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, IL)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [_L, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Ow("", !0)
  ]);
}
var w1 = /* @__PURE__ */ yL($L, [["render", xL], ["__scopeId", "data-v-0a36e1dc"]]);
const SL = dl({
  label: {
    type: String,
    required: !0
  }
}, qm);
fl({
  name: "DrawerTab",
  props: SL,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Dr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Or(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return Rm(e);
  },
  components: {
    FeatherRipple: sr
  }
});
const TL = dl({}, Xm), kL = Fm;
fl({
  emits: kL,
  model: Wm,
  props: TL,
  setup(e, o) {
    return Zm(e, o);
  }
});
const PL = dl({
  header: {
    type: String
  }
}, Um);
fl({
  name: "DrawerTabContent",
  props: PL,
  setup(e) {
    return Ym(e);
  },
  directives: {
    MenuFocusLoop: Kx
  }
});
const NL = window.Vue.defineComponent, v1 = window.Vue.createElementVNode, zw = window.Vue.createVNode, DL = window.Vue.renderList, OL = window.Vue.Fragment, $s = window.Vue.openBlock, $c = window.Vue.createElementBlock, qw = window.Vue.createBlock, LL = window.Vue.unref, zL = window.Vue.withCtx, qL = window.Vue.pushScopeId, RL = window.Vue.popScopeId, WL = (e) => (qL("data-v-c7c65659"), e = e(), RL(), e), FL = { class: "content" }, XL = /* @__PURE__ */ WL(() => /* @__PURE__ */ v1("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), ZL = {
  key: 0,
  class: "situation-list"
}, Ec = window.Vue.ref, Rw = window.Vue.watch, UL = /* @__PURE__ */ NL({
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, i = on(), a = Ec(r.visible), u = () => {
      let v = i.situations;
      r.situationId !== 0 && (v = i.situations.filter(
        (m) => m.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = Ec(i.situations), f = Ec(i.situations);
    Rw(r, () => {
      a.value = r.visible, u();
    }), Rw(
      () => i.situations,
      () => {
        u();
      }
    );
    const p = (v) => {
      f.value = v;
    };
    return (v, m) => ($s(), qw(LL(w1), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        m[0] || (m[0] = (V) => a.value = V),
        m[1] || (m[1] = (V) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: zL(() => [
        v1("div", FL, [
          XL,
          zw(qo, {
            list: c.value,
            isSituation: "",
            onFilteredList: p
          }, null, 8, ["list"]),
          f.value.length ? ($s(), $c("div", ZL, [
            ($s(!0), $c(OL, null, DL(f.value, (V) => ($s(), $c("div", {
              class: "card",
              key: V.id
            }, [
              zw(em, {
                onClick: (_) => o("situation-selected", V.id),
                "situation-info": V,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : ($s(), qw(Ro, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const m1 = /* @__PURE__ */ re(UL, [["__scopeId", "data-v-c7c65659"]]), YL = window.Vue.defineComponent, Ww = window.Vue.normalizeClass, Co = window.Vue.createElementVNode, Aa = window.Vue.unref, HL = window.Vue.createVNode, ha = window.Vue.toDisplayString, GL = window.Vue.createTextVNode, jL = window.Vue.openBlock, KL = window.Vue.createElementBlock, QL = window.Vue.pushScopeId, JL = window.Vue.popScopeId, e6 = (e) => (QL("data-v-e1e9b696"), e = e(), JL(), e), t6 = { class: "alarmInfo" }, n6 = { class: "alarm-title" }, r6 = /* @__PURE__ */ e6(() => /* @__PURE__ */ Co("strong", null, " Duration: ", -1)), o6 = { class: "description" }, s6 = /* @__PURE__ */ YL({
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, i = new Date().getTime();
    return (a, u) => (jL(), KL("div", {
      class: Ww(["alarm", { selected: r.selected }])
    }, [
      Co("div", t6, [
        Co("div", {
          class: Ww(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        HL(Aa(Wo), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Co("div", n6, ha(e.alarm.nodeLabel) + " - " + ha(e.alarm.id), 1)
      ]),
      Co("div", null, [
        r6,
        GL(" " + ha(Aa(Ga)(Aa(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Co("div", o6, ha(Aa(Jv)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Nd = /* @__PURE__ */ re(s6, [["__scopeId", "data-v-e1e9b696"]]), i6 = window.Vue.defineComponent, Ma = window.Vue.createElementVNode, po = window.Vue.unref, a6 = window.Vue.toDisplayString, Fw = window.Vue.withCtx, Mc = window.Vue.createVNode, l6 = window.Vue.renderList, u6 = window.Vue.Fragment, Es = window.Vue.openBlock, Ic = window.Vue.createElementBlock, Xw = window.Vue.createBlock, c6 = window.Vue.pushScopeId, d6 = window.Vue.popScopeId, f6 = (e) => (c6("data-v-4bc80d4b"), e = e(), d6(), e), A6 = { class: "content" }, h6 = { class: "header" }, p6 = /* @__PURE__ */ f6(() => /* @__PURE__ */ Ma("h4", null, "ADD ALARMS", -1)), w6 = {
  key: 0,
  class: "alarms-list"
}, pa = window.Vue.ref, Zw = window.Vue.watch, v6 = /* @__PURE__ */ i6({
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, i = on(), a = pa(r.visible), u = pa([]), c = pa(["all"]), f = pa(i.unassignedAlarms);
    Zw(r, () => {
      a.value = r.visible, u.value = [], f.value = i.unassignedAlarms;
    }), Zw(
      () => i.unassignedAlarms,
      () => {
        m();
      }
    );
    const p = (_) => {
      de.exports.includes(u.value, _) ? de.exports.remove(u.value, (x) => x === _) : u.value.push(_);
    }, v = () => {
      o("alarms-selected", u.value);
    }, m = () => {
      let _ = i.unassignedAlarms;
      c.value.includes("all") || (_ = _.filter(
        (x) => c.value.includes(x.severity)
      )), f.value = _;
    }, V = (_) => {
      f.value = _;
    };
    return (_, x) => (Es(), Xw(po(w1), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        x[0] || (x[0] = (S) => a.value = S),
        x[1] || (x[1] = (S) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Fw(() => [
        Ma("div", A6, [
          Ma("div", h6, [
            p6,
            Mc(po(ae), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Fw(() => [
                Ma("span", null, "Add " + a6(po(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Mc(qo, {
            list: po(i).unassignedAlarms,
            onFilteredList: V
          }, null, 8, ["list"]),
          f.value.length ? (Es(), Ic("div", w6, [
            (Es(!0), Ic(u6, null, l6(f.value, (S) => (Es(), Ic("div", {
              class: "card",
              key: S.id
            }, [
              Mc(Nd, {
                selected: po(de.exports.includes)(po(u), S.id),
                alarm: S,
                onSelectedAlarm: p
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Es(), Xw(Ro, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const m6 = /* @__PURE__ */ re(v6, [["__scopeId", "data-v-4bc80d4b"]]), g6 = window.Vue.openBlock, V6 = window.Vue.createElementBlock, g1 = window.Vue.createElementVNode;
var _6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const y6 = {}, b6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, C6 = /* @__PURE__ */ g1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), $6 = /* @__PURE__ */ g1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), E6 = [
  C6,
  $6
];
function M6(e, o) {
  return g6(), V6("svg", b6, E6);
}
var Uw = /* @__PURE__ */ _6(y6, [["render", M6]]);
const I6 = window.Vue.defineComponent, Ct = window.Vue.createElementVNode, Oe = window.Vue.unref, tt = window.Vue.createVNode, Ms = window.Vue.withCtx, B6 = window.Vue.renderList, Yw = window.Vue.Fragment, Is = window.Vue.openBlock, wa = window.Vue.createElementBlock, x6 = window.Vue.createBlock, S6 = window.Vue.pushScopeId, T6 = window.Vue.popScopeId, Xo = (e) => (S6("data-v-524b0835"), e = e(), T6(), e), k6 = { class: "container" }, P6 = { class: "header" }, N6 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Ct("div", { class: "title" }, "Alarms", -1)), D6 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Ct("span", null, "Add Alarms", -1)), O6 = { class: "alarms-container" }, L6 = { class: "filters" }, z6 = { class: "list" }, q6 = { class: "row actions" }, R6 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Ct("span", null, "Clear", -1)), W6 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Ct("span", null, "Acknowledge", -1)), F6 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Ct("span", null, "Move", -1)), X6 = /* @__PURE__ */ Xo(() => /* @__PURE__ */ Ct("span", null, "Remove", -1)), Z6 = { class: "section" }, U6 = {
  key: 0,
  class: "alarm-list"
}, va = window.Vue.ref, Y6 = window.Vue.watch, H6 = window.Vue.reactive, G6 = window.Vue.markRaw, j6 = /* @__PURE__ */ I6({
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = G6({
      Add: ul,
      Delete: Uw,
      MarkComplete: qa,
      CheckCircle: ko,
      ExitToApp: rd
    }), i = cl(), a = on(), u = va(!1), c = va(["all"]), f = va(!1), p = va(!1), v = H6({
      selectedAlarms: [],
      alarms: o.alarms
    });
    Y6(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const m = (T) => {
      v.selectedAlarms.includes(T) ? de.exports.remove(v.selectedAlarms, (O) => O == T) : v.selectedAlarms.push(T);
    }, V = async (T) => {
      v.selectedAlarms.length ? (await R3(v.selectedAlarms, T), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, _ = () => v.selectedAlarms.length === o.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), x = async () => {
      _() && (await Up(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, S = async (T) => {
      _() && (await Up(
        o.situationId,
        v.selectedAlarms
      ) ? await D(T, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, D = async (T, O) => {
      O.length ? await Om(T, O) ? a.getSituation(T) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, N = async (T) => {
      await D(o.situationId, T), p.value = !1;
    }, $ = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    }, P = (T) => {
      v.alarms = T;
    };
    return (T, O) => (Is(), wa(Yw, null, [
      Ct("div", k6, [
        Ct("div", P6, [
          N6,
          tt(Oe(ae), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (I) => p.value = !0)
          }, {
            default: Ms(() => [
              tt(Oe(Z), {
                icon: Oe(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              D6
            ]),
            _: 1
          })
        ]),
        Ct("div", O6, [
          Ct("div", L6, [
            tt(qo, {
              list: o.alarms,
              onFilteredList: P,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Ct("div", z6, [
            Ct("div", q6, [
              tt(Oe(Wo), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              tt(Oe(ae), {
                onClick: O[2] || (O[2] = () => V("clear"))
              }, {
                default: Ms(() => [
                  tt(Oe(Z), {
                    icon: Oe(qa),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  R6
                ]),
                _: 1
              }),
              tt(Oe(ae), {
                onClick: O[3] || (O[3] = () => V("ack"))
              }, {
                default: Ms(() => [
                  tt(Oe(Z), {
                    icon: Oe(ko),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  W6
                ]),
                _: 1
              }),
              tt(Oe(ae), { onClick: $ }, {
                default: Ms(() => [
                  tt(Oe(Z), {
                    icon: Oe(rd),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  F6
                ]),
                _: 1
              }),
              tt(Oe(ae), { onClick: x }, {
                default: Ms(() => [
                  tt(Oe(Z), {
                    icon: Oe(Uw),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  X6
                ]),
                _: 1
              })
            ]),
            Ct("div", Z6, [
              Oe(v).alarms.length > 0 ? (Is(), wa("div", U6, [
                (Is(!0), wa(Yw, null, B6(Oe(v).alarms, (I) => (Is(), wa("div", {
                  key: I.id
                }, [
                  tt(x9, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: m
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Is(), x6(Ro, { key: 1 }))
            ])
          ])
        ])
      ]),
      tt(m1, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: S,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      tt(m6, {
        visible: p.value,
        onAlarmsSelected: N,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => p.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const K6 = /* @__PURE__ */ re(j6, [["__scopeId", "data-v-524b0835"]]), Q6 = window.Vue.defineComponent, jt = window.Vue.createVNode, yt = window.Vue.unref, Bc = window.Vue.normalizeClass, ma = window.Vue.toDisplayString, wo = window.Vue.openBlock, vo = window.Vue.createElementBlock, xc = window.Vue.createCommentVNode, J6 = window.Vue.withCtx, en = window.Vue.createElementVNode, e8 = window.Vue.Fragment, t8 = window.Vue.pushScopeId, n8 = window.Vue.popScopeId, r8 = (e) => (t8("data-v-8ed6502c"), e = e(), n8(), e), o8 = { class: "section" }, s8 = { class: "action-section" }, i8 = {
  key: 0,
  class: "btn-row"
}, a8 = { key: 0 }, l8 = { key: 1 }, u8 = {
  key: 0,
  class: "situation-detail"
}, c8 = { class: "situation-info" }, d8 = { class: "id" }, f8 = ["innerHTML"], A8 = /* @__PURE__ */ r8(() => /* @__PURE__ */ en("p", null, null, -1)), h8 = { class: "boxes" }, p8 = { class: "parameters" }, w8 = { class: "section memo-boxes" }, v8 = { key: 0 }, Hw = window.Vue.ref, m8 = window.Vue.watch, g8 = /* @__PURE__ */ Q6({
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = cl(), i = on(), a = ye.REJECTED, u = Ln(), c = Hw(o.situationInfo.status), f = Hw(o.situationInfo);
    m8(o, () => {
      c.value = o.situationInfo.status || "", f.value = o.situationInfo;
    });
    const p = async (v) => {
      var V;
      await Dm(
        (V = o.situationInfo) == null ? void 0 : V.id,
        v.toLowerCase()
      ) ? (c.value = v, i.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, m) => {
      var V, _, x, S, D, N, $, P, T, O, I, q;
      return wo(), vo(e8, null, [
        en("div", o8, [
          en("div", s8, [
            jt(jm, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            yt(u).allowSave ? (wo(), vo("div", i8, [
              jt(yt(ae), {
                class: Bc(["btn", { rejected: c.value == yt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (L) => p(yt(a)))
              }, {
                default: J6(() => [
                  jt(yt(Z), {
                    icon: yt(Uv),
                    "aria-hidden": "true",
                    class: Bc(["icon reject", { rejected: c.value == yt(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == yt(a) ? (wo(), vo("span", a8, ma(yt(a)), 1)) : (wo(), vo("span", l8, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : xc("", !0)
          ]),
          f.value ? (wo(), vo("div", u8, [
            en("div", {
              class: Bc(["severity-line", [`${(_ = (V = f.value) == null ? void 0 : V.severity) == null ? void 0 : _.toLowerCase()}-bg dark`]])
            }, null, 2),
            en("div", c8, [
              en("div", d8, [
                en("div", null, " Situation - " + ma((x = f.value) == null ? void 0 : x.id) + " - " + ma(f.value.alarms.length) + " alarm(s) affects " + ma(yt(de.exports.size)(yt(de.exports.groupBy)((S = f.value) == null ? void 0 : S.alarms, "nodeId"))) + " node(s) ", 1),
                jt(Gm, {
                  severity: (D = f.value) == null ? void 0 : D.severity
                }, null, 8, ["severity"])
              ]),
              en("span", {
                innerHTML: f.value.description
              }, null, 8, f8),
              A8,
              en("div", h8, [
                jt(fc, {
                  label: "First Event",
                  info: yt(vn)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                jt(fc, {
                  label: "Last Event",
                  info: yt(vn)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                jt(fc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            en("div", p8, [
              jt(UD, {
                alarms: (N = f.value) == null ? void 0 : N.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : xc("", !0),
          en("div", w8, [
            jt(Wa, {
              id: ($ = f.value) == null ? void 0 : $.id,
              situationId: (P = f.value) == null ? void 0 : P.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = f.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            jt(Wa, {
              id: (O = f.value) == null ? void 0 : O.id,
              situationId: (I = f.value) == null ? void 0 : I.id,
              label: "Journal Memo",
              type: "journal",
              memo: (q = f.value) == null ? void 0 : q.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (wo(), vo("div", v8, [
          jt(K6, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : xc("", !0)
      ], 64);
    };
  }
});
const V8 = /* @__PURE__ */ re(g8, [["__scopeId", "data-v-8ed6502c"]]);
var _8 = Object.defineProperty, y8 = Object.defineProperties, b8 = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, C8 = Object.prototype.hasOwnProperty, $8 = Object.prototype.propertyIsEnumerable, jw = (e, o, r) => o in e ? _8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, od = (e, o) => {
  for (var r in o || (o = {}))
    C8.call(o, r) && jw(e, r, o[r]);
  if (Gw)
    for (var r of Gw(o))
      $8.call(o, r) && jw(e, r, o[r]);
  return e;
}, E8 = (e, o) => y8(e, b8(o));
const V1 = window.Vue.defineComponent, kr = window.Vue.resolveComponent, Ia = window.Vue.openBlock, Kw = window.Vue.createBlock, Ba = window.Vue.mergeProps, Pr = window.Vue.withCtx, _1 = window.Vue.createElementBlock, M8 = window.Vue.Fragment, I8 = window.Vue.renderList, B8 = window.Vue.createTextVNode, x8 = window.Vue.toDisplayString, S8 = window.Vue.computed, Qw = window.Vue.toRef, Bs = window.Vue.createVNode, Jw = window.Vue.toHandlers, T8 = window.Vue.renderSlot, k8 = window.Vue.normalizeClass, P8 = window.Vue.createElementVNode;
var y1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const N8 = V1({
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
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        Gs(o, this.$refs.list.$el);
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
    FeatherList: Vd,
    FeatherListItem: ni
  }
});
function D8(e, o, r, i, a, u) {
  const c = kr("FeatherListItem"), f = kr("FeatherList");
  return Ia(), Kw(f, Ba(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Pr(() => [
      (Ia(!0), _1(M8, null, I8(e.options, (p, v) => (Ia(), Kw(c, {
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
          B8(x8(p[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var O8 = /* @__PURE__ */ y1(N8, [["render", D8], ["__scopeId", "data-v-eae820da"]]);
const L8 = E8(od(od({}, am), el), {
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
}), z8 = {
  "update:modelValue": (e) => !0
}, q8 = V1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: z8,
  props: L8,
  setup(e, o) {
    tl(e), lm(e);
    const r = S8(() => ce("feather-select-input")), { validate: i } = Qa(r, Qw(e, "modelValue"), e.label, e.schema, Qw(e, "error"));
    return od({
      inputId: r,
      validate: i
    }, Ja(o.attrs));
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
        const e = this.internalValue, o = this.options.filter((r) => r[this.textProp] === e[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => il
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
      Or(this.delayTimeout), this.delayTimeout = Dr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: im,
    InputSubText: Ka,
    FeatherMenu: pm,
    List: O8,
    FeatherIcon: Z
  }
});
function R8(e, o, r, i, a, u) {
  const c = kr("FeatherIcon"), f = kr("InputWrapper"), p = kr("List"), v = kr("FeatherMenu"), m = kr("InputSubText");
  return Ia(), _1("div", Ba(e.inherittedAttrs, { class: "feather-select-container" }), [
    Bs(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Pr((V) => [
        Bs(f, Ba({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, V.attrs, Jw(V.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Pr(() => [
            T8(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Pr(() => [
            Bs(c, {
              class: k8(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Pr(() => [
            P8("input", Ba(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jw(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Pr(() => [
        Bs(p, {
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
    Bs(m, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var W8 = /* @__PURE__ */ y1(q8, [["render", R8], ["__scopeId", "data-v-ecb32d90"]]);
const F8 = window.Vue.openBlock, X8 = window.Vue.createElementBlock, b1 = window.Vue.createElementVNode;
var Z8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const U8 = {}, Y8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H8 = /* @__PURE__ */ b1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), G8 = /* @__PURE__ */ b1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), j8 = [
  H8,
  G8
];
function K8(e, o) {
  return F8(), X8("svg", Y8, j8);
}
var Q8 = /* @__PURE__ */ Z8(U8, [["render", K8]]);
const xa = window.Vue.openBlock, sd = window.Vue.createElementBlock, C1 = window.Vue.createElementVNode, J8 = window.Vue.defineComponent, Mr = window.Vue.ref, ez = window.Vue.provide, ev = window.Vue.computed, tz = window.Vue.onUnmounted, tv = window.Vue.toRef, nz = window.Vue.resolveComponent, rz = window.Vue.Fragment, oz = window.Vue.createBlock, sz = window.Vue.Teleport, nv = window.Vue.createVNode, iz = window.Vue.Transition, az = window.Vue.withCtx, lz = window.Vue.normalizeClass, uz = window.Vue.normalizeStyle, cz = window.Vue.toDisplayString, dz = window.Vue.createCommentVNode, fz = window.Vue.renderSlot, Sc = window.Vue.nextTick;
var $1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Az = {}, hz = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, pz = /* @__PURE__ */ C1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), wz = [
  pz
];
function vz(e, o) {
  return xa(), sd("svg", hz, wz);
}
var mz = /* @__PURE__ */ $1(Az, [["render", vz]]), Xe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Xe || {}), Dn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Dn || {});
const gz = (e, o, r, i = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + i && c.push(Xe.top), a >= o.height + i && c.push(Xe.bottom);
  const f = [];
  u >= o.width + i && f.push(Xe.right), e.left >= o.width + i && f.push(Xe.left);
  let p = [...f, ...c];
  return (r === Xe.top || r === Xe.bottom) && (p = [...c, ...f]), p.indexOf(r) > -1 ? r : p.length ? p[0] : r;
}, Vz = (e, o, r, i, a = 28) => {
  if (e === Xe.left || e === Xe.right)
    return Dn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], p = u, v = c + o.width / 2, m = r.width - a, V = r.width / 2;
  return p >= V && v >= V && f.push(Dn.center), v >= m && f.push(Dn.left), p >= m && f.push(Dn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
}, _z = {
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
    default: () => Dn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, yz = J8({
  props: _z,
  setup(e) {
    const o = Mr(!1), r = Mr(!1), i = ce("feather-tooltip-trigger"), a = ce("feather-tooltip"), u = "data-feather-tooltip";
    ez("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Or(c), o.value || (c = Dr(D, e.enterDelay));
    }, p = () => {
      Or(c), c = Dr(N, e.exitDelay);
    }, v = (ve) => {
      ve.keyCode === Q.ESCAPE && (ve.preventDefault(), N(!0));
    }, m = ev(() => ({
      [u]: i,
      "aria-describedby": a
    })), V = {
      mouseenter: f,
      mouseleave: p,
      focus: f,
      blur: p,
      keydown: v
    }, _ = Mr(document), x = hm(_, () => N(!0));
    tz(() => N(!0));
    const S = () => document.getElementById(a), D = () => {
      r.value = !1, o.value = !0, Sc(() => {
        const ve = S();
        fe(ve), o.value = !1, Sc(() => {
          r.value = !0, o.value = !0, x.value = !0;
        });
      });
    }, N = (ve = !1) => {
      q.value = "", I.value = "", L.value = "", F.value = "", o.value = !1, ve && (r.value = !1), x.value = !1;
    }, $ = tv(e, "placement"), P = tv(e, "pointerAlignment"), T = 8, O = 24, I = Mr(""), q = Mr(""), L = Mr(""), F = Mr(""), ge = ev(() => F.value ? "p-" + F.value : !1), fe = (ve) => {
      const be = document.querySelector(`[${u}=${i}]`);
      if (!be) {
        console.log("trigger not found");
        return;
      }
      Sc(() => {
        const $e = be.getBoundingClientRect(), Be = ve.getBoundingClientRect(), Ae = gz($e, Be, $.value, T), ze = Vz(Ae, $e, Be, P.value, O);
        L.value = ze.toString(), F.value = Ae.toString();
        let qe = 0, Ke = 0;
        if ((Ae === Xe.left || Ae === Xe.right) && (qe = $e.top + $e.height / 2 - Be.height / 2, Ae === Xe.left && (Ke = $e.left - Be.width - T), Ae === Xe.right && (Ke = $e.right)), Ae === Xe.top || Ae === Xe.bottom) {
          qe = $e.top - Be.height - T, Ae === Xe.bottom && (qe = $e.bottom);
          const Uo = $e.left + $e.width / 2;
          switch (ze) {
            case Dn.center:
              Ke = Uo - Be.width / 2;
              break;
            case Dn.left:
              Ke = Uo - O;
              break;
            case Dn.right:
              Ke = Uo - Be.width + O;
              break;
          }
        }
        I.value = qe.toString() + "px", q.value = Ke.toString() + "px";
      });
    };
    return {
      attrs: m,
      listeners: V,
      show: o,
      animate: r,
      alignmentClass: L,
      placementClass: ge,
      top: I,
      left: q,
      tooltipID: a
    };
  },
  components: {
    Pointer: mz
  }
}), bz = ["id"];
function Cz(e, o, r, i, a, u) {
  const c = nz("Pointer");
  return xa(), sd(rz, null, [
    (xa(), oz(sz, { to: "body" }, [
      nv(iz, { css: e.animate }, {
        default: az(() => [
          e.show ? (xa(), sd("div", {
            key: 0,
            class: lz(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: uz({ left: e.left, top: e.top })
          }, [
            C1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, cz(e.title), 9, bz),
            nv(c, { class: "tooltip-pointer" })
          ], 6)) : dz("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    fz(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var rv = /* @__PURE__ */ $1(yz, [["render", Cz], ["__scopeId", "data-v-3da6b22e"]]);
const $z = window.Vue.defineComponent, Tc = window.Vue.normalizeStyle, kc = window.Vue.createElementVNode, xs = window.Vue.unref, ov = window.Vue.toHandlers, sv = window.Vue.mergeProps, iv = window.Vue.withCtx, av = window.Vue.createVNode, Ez = window.Vue.renderList, Mz = window.Vue.Fragment, Ss = window.Vue.openBlock, Ts = window.Vue.createElementBlock, lv = window.Vue.normalizeClass, uv = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Iz = { class: "row" }, Bz = /* @__PURE__ */ $z({
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), i = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Ss(), Ts("div", Iz, [
      kc("div", {
        class: "line-gray",
        style: Tc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      av(xs(rv), {
        title: xs(vn)(e.alarm.firstEventTime)
      }, {
        default: iv(({ attrs: f, on: p }) => [
          kc("div", sv({ class: "circle" }, f, ov(p), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Ss(!0), Ts(Mz, null, Ez(o.events, (f, p) => (Ss(), Ts("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[p + 1] ? (Ss(), Ts("div", {
          key: 0,
          class: lv(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Tc({
            width: i(f.createTime, o.events[p + 1].createTime) + "px"
          })
        }, null, 6)) : uv("", !0),
        av(xs(rv), {
          title: xs(vn)(e.alarm.firstEventTime)
        }, {
          default: iv(({ attrs: v, on: m }) => [
            o.events[p + 1] ? (Ss(), Ts("div", sv({ key: 0 }, v, ov(m), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : uv("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      kc("div", {
        class: lv(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Tc({
          width: i(e.events[e.events.length - 1].createTime, xs(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const xz = /* @__PURE__ */ re(Bz, [["__scopeId", "data-v-3341d12d"]]), Sz = window.Vue.openBlock, Tz = window.Vue.createElementBlock, E1 = window.Vue.createElementVNode;
var kz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Pz = {}, Nz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Dz = /* @__PURE__ */ E1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Oz = /* @__PURE__ */ E1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), Lz = [
  Dz,
  Oz
];
function zz(e, o) {
  return Sz(), Tz("svg", Nz, Lz);
}
var qz = /* @__PURE__ */ kz(Pz, [["render", zz]]);
const Rz = window.Vue.defineComponent, id = window.Vue.createElementVNode, Wz = window.Vue.renderList, cv = window.Vue.Fragment, Pc = window.Vue.openBlock, Nc = window.Vue.createElementBlock, Fz = window.Vue.normalizeClass, Xz = window.Vue.unref, dv = window.Vue.toDisplayString, Zz = window.Vue.pushScopeId, Uz = window.Vue.popScopeId, Yz = (e) => (Zz("data-v-2e087f7b"), e = e(), Uz(), e), Hz = /* @__PURE__ */ Yz(() => /* @__PURE__ */ id("strong", null, "Events:", -1)), Gz = /* @__PURE__ */ Rz({
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (Pc(), Nc(cv, null, [
      Hz,
      (Pc(!0), Nc(cv, null, Wz(o.events, (a) => (Pc(), Nc("div", {
        class: "event-description",
        key: a.id
      }, [
        id("div", {
          class: Fz(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        id("div", null, dv(Xz(vn)(a.createTime)) + " - " + dv(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const jz = /* @__PURE__ */ re(Gz, [["__scopeId", "data-v-2e087f7b"]]), Kz = window.Vue.defineComponent, Qz = window.Vue.normalizeClass, bt = window.Vue.createElementVNode, mo = window.Vue.toDisplayString, lt = window.Vue.unref, go = window.Vue.createVNode, M1 = window.Vue.createTextVNode, Jz = window.Vue.renderList, fv = window.Vue.Fragment, Tn = window.Vue.openBlock, Ir = window.Vue.createElementBlock, Av = window.Vue.createBlock, ga = window.Vue.createCommentVNode, e4 = window.Vue.normalizeStyle, t4 = window.Vue.pushScopeId, n4 = window.Vue.popScopeId, r4 = (e) => (t4("data-v-01717d0d"), e = e(), n4(), e), o4 = { class: "section detail" }, s4 = { class: "id" }, i4 = {
  key: 0,
  class: "section"
}, a4 = /* @__PURE__ */ r4(() => /* @__PURE__ */ bt("div", { class: "id" }, "Alarms", -1)), l4 = { class: "action-btns" }, u4 = { class: "zoom" }, c4 = /* @__PURE__ */ M1(" Zoom "), d4 = { class: "times" }, f4 = {
  key: 0,
  class: "timeline-container"
}, A4 = { class: "alarm-id" }, h4 = {
  key: 0,
  class: "panel"
}, Kn = window.Vue.ref, p4 = window.Vue.watch, w4 = /* @__PURE__ */ Kz({
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, I;
    const o = e, r = on(), i = Kn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Kn(a[0]), c = Kn(o.width), f = Kn(o.width), p = Kn(new Date().getTime()), v = () => {
      var q, L;
      if (!o.situation.events) {
        const F = (L = (q = o.situation) == null ? void 0 : q.alarms) == null ? void 0 : L.map((ge) => ge.id);
        r.getEvents(o.situation.id, F);
      }
    };
    v();
    const m = () => (p.value = new Date().getTime(), c.value / (Number(p.value) - Number(_.value))), V = Kn(o.situation.alarms), _ = Kn(
      ((I = de.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), x = Kn(m());
    p4(o, () => {
      var q, L;
      _.value = ((L = de.exports.minBy((q = o.situation) == null ? void 0 : q.alarms, "firstEventTime")) == null ? void 0 : L.firstEventTime) || new Date().getTime(), v(), c.value = f.value, x.value = m(), V.value = o.situation.alarms, u.value = a[0];
    });
    const S = (q) => {
      if ((q == null ? void 0 : q.id) === 1 && (V.value = o.situation.alarms), (q == null ? void 0 : q.id) === 2) {
        const L = de.exports.groupBy(V.value, "severity"), F = [
          ...L.CRITICAL || [],
          ...L.MAJOR || [],
          ...L.MINOR || [],
          ...L.WARNING || [],
          ...L.NORMAL || [],
          ...L.CLEARED || [],
          ...L.INDETERMINATE || []
        ];
        V.value = F.filter((ge) => ge);
      }
      if ((q == null ? void 0 : q.id) === 3) {
        const L = de.exports.reverse(
          de.exports.sortBy(
            o.situation.alarms,
            (F) => Number(F.lastEventTime) - Number(F.firstEventTime)
          )
        );
        V.value = L;
      }
    }, D = () => {
      c.value += 100, x.value = m();
    }, N = () => {
      c.value -= 100, x.value = m();
    }, $ = () => {
      c.value = f.value, x.value = m();
    }, P = (q) => {
      i.value = q;
    }, T = () => {
      i.value = 0;
    };
    return (q, L) => {
      var F, ge;
      return Tn(), Ir(fv, null, [
        bt("div", o4, [
          bt("div", {
            class: Qz(["severity-line", [`${(ge = (F = o.situation) == null ? void 0 : F.severity) == null ? void 0 : ge.toLowerCase()}-bg dark`]])
          }, null, 2),
          bt("div", null, [
            bt("div", s4, "Situation " + mo(o.situation.id), 1),
            bt("div", null, " Duration: " + mo(lt(Ga)(p.value, new Date(_.value))), 1)
          ])
        ]),
        V.value && V.value.length > 0 ? (Tn(), Ir("div", i4, [
          a4,
          bt("div", l4, [
            go(lt(W8), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                L[0] || (L[0] = (fe) => u.value = fe),
                S
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            bt("div", u4, [
              c4,
              bt("div", null, [
                go(lt(Z), {
                  icon: lt(Q8),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"]),
                go(lt(Z), {
                  icon: lt(Bm),
                  class: "zoom-icon",
                  onClick: $
                }, null, 8, ["icon"]),
                go(lt(Z), {
                  icon: lt(qz),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Tn(), Ir("div", {
            key: 0,
            class: "alarms",
            style: e4({
              width: f.value + 50 + "px"
            })
          }, [
            bt("div", d4, [
              bt("div", null, mo(lt(vn)(_.value)), 1),
              bt("div", null, mo(lt(vn)(p.value)), 1)
            ]),
            e.situation.events ? (Tn(), Ir("div", f4, [
              (Tn(!0), Ir(fv, null, Jz(V.value, (fe) => (Tn(), Ir("div", {
                class: "timeline",
                key: fe.id
              }, [
                bt("div", A4, [
                  M1(mo(fe.nodeLabel) + " - " + mo(fe.id) + " ", 1),
                  i.value === fe.id ? (Tn(), Av(lt(Z), {
                    key: 0,
                    icon: lt(il),
                    class: "zoom-icon expand",
                    onClick: T
                  }, null, 8, ["icon"])) : (Tn(), Av(lt(Z), {
                    key: 1,
                    icon: lt(nm),
                    class: "zoom-icon expand",
                    onClick: () => P(fe.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                go(xz, {
                  alarm: fe,
                  proportion: x.value,
                  "min-start": _.value,
                  events: o.situation.events[fe.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === fe.id ? (Tn(), Ir("div", h4, [
                  go(jz, {
                    events: o.situation.events[fe.id]
                  }, null, 8, ["events"])
                ])) : ga("", !0)
              ]))), 128))
            ])) : ga("", !0)
          ], 4)) : ga("", !0)
        ])) : ga("", !0)
      ], 64);
    };
  }
});
const v4 = /* @__PURE__ */ re(w4, [["__scopeId", "data-v-01717d0d"]]), m4 = window.Vue.openBlock, g4 = window.Vue.createElementBlock, V4 = window.Vue.createElementVNode;
var _4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const y4 = {}, b4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, C4 = /* @__PURE__ */ V4("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), $4 = [
  C4
];
function E4(e, o) {
  return m4(), g4("svg", b4, $4);
}
var xo = /* @__PURE__ */ _4(y4, [["render", E4]]);
const I1 = window.Vue.defineComponent, Dc = window.Vue.ref, M4 = window.Vue.toRef, Oc = window.Vue.inject, hv = window.Vue.watch, I4 = window.Vue.nextTick, pv = window.Vue.openBlock, wv = window.Vue.createElementBlock, Lc = window.Vue.createElementVNode, B4 = window.Vue.normalizeClass, vv = window.Vue.renderSlot, mv = window.Vue.createCommentVNode, zc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var x4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const S4 = {
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
}, T4 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, k4 = I1({
  emits: T4,
  props: S4,
  setup(e, o) {
    const r = Dc(), i = Dc(!1), a = Dc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = M4(e, "modelValue"), f = Oc("queueSnackbar", !1), p = Oc("unqueueSnackbar", !1), v = Oc("nextSnackbar", () => {
    }), m = (D, N) => {
      let $, P, T = N;
      const O = () => {
        !$ || (Or($), $ = 0, T -= Date.now() - P);
      }, I = () => {
        $ || (P = Date.now(), $ = Dr(D, T));
      };
      return I(), { pause: O, resume: I };
    }, V = () => {
      i.value = !1, o.emit("closed"), v && v();
    }, _ = (D) => {
      D.keyCode === Q.ESCAPE && (a.value = !1);
    }, x = () => {
      r.value.pause();
    }, S = () => {
      a.value && r.value.resume();
    };
    return hv(c, (D) => {
      D ? I4(() => {
        f === !1 ? a.value = D : f(u, a);
      }) : p === !1 ? a.value = D : p(u);
    }, { immediate: !0 }), hv(a, (D) => {
      D ? (i.value = !0, r.value = m(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), x());
    }), {
      hideTimeout: r,
      contentShow: i,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: V,
      keyPressed: _,
      stopTimer: x,
      resumeTimer: S
    };
  }
}), P4 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, N4 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, D4 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, O4 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function L4(e, o, r, i, a, u) {
  return e.modelValue || e.contentShow ? (pv(), wv("div", P4, [
    Lc("div", {
      class: B4(["feather-snackbar", {
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
      Lc("div", N4, [
        e.contentShow ? (pv(), wv("div", D4, [
          vv(e.$slots, "default", {}, void 0, !0)
        ])) : mv("", !0)
      ]),
      Lc("div", O4, [
        vv(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : mv("", !0);
}
var Al = /* @__PURE__ */ x4(k4, [["render", L4], ["__scopeId", "data-v-5cf64a62"]]);
const z4 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
I1({
  props: z4,
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
    return zc("queueSnackbar", i), zc("unqueueSnackbar", a), zc("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: i,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const q4 = window.Vue.defineComponent, Ie = window.Vue.unref, ut = window.Vue.createVNode, Js = window.Vue.createElementVNode, Nt = window.Vue.withCtx, Vo = window.Vue.openBlock, gv = window.Vue.createBlock, R4 = window.Vue.createCommentVNode, hl = window.Vue.createTextVNode, Va = window.Vue.createElementBlock, Vv = window.Vue.toDisplayString, W4 = window.Vue.pushScopeId, F4 = window.Vue.popScopeId, Dd = (e) => (W4("data-v-1f2913d3"), e = e(), F4(), e), X4 = { id: "cont" }, Z4 = { class: "btns-navigation" }, U4 = /* @__PURE__ */ Dd(() => /* @__PURE__ */ Js("span", null, "Situation List", -1)), Y4 = /* @__PURE__ */ Dd(() => /* @__PURE__ */ Js("span", null, "Show Previous Situation ", -1)), H4 = /* @__PURE__ */ Dd(() => /* @__PURE__ */ Js("span", null, "Show Next Situation", -1)), G4 = { key: 1 }, j4 = {
  key: 0,
  class: "detail"
}, K4 = /* @__PURE__ */ hl("Details"), Q4 = /* @__PURE__ */ hl("Metrics"), J4 = {
  key: 1,
  class: "noSituation"
}, eq = /* @__PURE__ */ hl("dismiss"), Br = window.Vue.ref, _v = window.Vue.watch, tq = window.Vue.onMounted, nq = window.VueRouter.useRoute, rq = /* @__PURE__ */ q4({
  setup(e) {
    const o = gn(), r = nq(), i = parseInt(r.params.id), a = Br(i), u = on(), c = cl(), f = Br(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const p = Br(), v = Br(), m = Br(!0), V = Br(
      u.filteredSituations.findIndex((N) => N === a.value)
    ), _ = Br(!1);
    _v(
      () => u.situationDetail,
      () => {
        p.value = u.situationDetail, m.value = !1, u.getUnassignedAlarms();
      }
    ), tq(() => {
      var $;
      const N = (($ = document.getElementById("cont")) == null ? void 0 : $.getBoundingClientRect().width) || 1200;
      v.value = N - 90;
    });
    const x = () => {
      o.push({
        name: "situations"
      });
    }, S = (N) => {
      const $ = V.value, P = u.filteredSituations[$ + N];
      o.push({
        name: "situationDetail",
        params: {
          id: P
        }
      });
    };
    _v(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), V.value = u.filteredSituations.findIndex((N) => N == a.value);
    }), c.$subscribe((N, $) => {
      _.value = $.showError;
    });
    const D = (N) => {
      f.value = N || 0;
    };
    return (N, $) => (Vo(), Va("div", X4, [
      Js("div", Z4, [
        ut(Ie(ae), {
          primary: "",
          onClick: $[0] || ($[0] = () => x())
        }, {
          default: Nt(() => [
            ut(Ie(Z), {
              icon: Ie(xo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            U4
          ]),
          _: 1
        }),
        Js("div", null, [
          ut(Ie(ae), {
            disabled: !Ie(u).filteredSituations[V.value - 1],
            primary: "",
            onClick: $[1] || ($[1] = () => S(-1))
          }, {
            default: Nt(() => [
              ut(Ie(Z), {
                icon: Ie(xo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              Y4
            ]),
            _: 1
          }, 8, ["disabled"]),
          ut(Ie(ae), {
            disabled: !Ie(u).filteredSituations[V.value + 1],
            primary: "",
            onClick: $[2] || ($[2] = () => S(1))
          }, {
            default: Nt(() => [
              H4,
              ut(Ie(Z), {
                icon: Ie(xo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      m.value ? (Vo(), gv(Ie(bd), {
        key: 0,
        class: "spinner"
      })) : (Vo(), Va("div", G4, [
        p.value ? (Vo(), Va("div", j4, [
          ut(Ie(VD), { "onUpdate:modelValue": D }, {
            tabs: Nt(() => [
              ut(Ie(Kp), null, {
                default: Nt(() => [
                  K4
                ]),
                _: 1
              }),
              ut(Ie(Kp), null, {
                default: Nt(() => [
                  Q4
                ]),
                _: 1
              })
            ]),
            default: Nt(() => [
              ut(Ie(Qp), { class: "panel" }, {
                default: Nt(() => [
                  ut(V8, { "situation-info": p.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ut(Ie(Qp), { class: "panel" }, {
                default: Nt(() => [
                  v.value && f.value == 1 ? (Vo(), gv(v4, {
                    key: 0,
                    situation: p.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : R4("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Vo(), Va("div", J4, " Error. The situation " + Vv(Ie(i)) + " does not exist. ", 1))
      ])),
      ut(Ie(Al), {
        modelValue: _.value,
        "onUpdate:modelValue": $[4] || ($[4] = (P) => _.value = P),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Nt(() => [
          ut(Ie(ae), {
            onClick: $[3] || ($[3] = (P) => _.value = !1),
            text: ""
          }, {
            default: Nt(() => [
              eq
            ]),
            _: 1
          })
        ]),
        default: Nt(() => [
          hl(Vv(Ie(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const oq = /* @__PURE__ */ re(rq, [["__scopeId", "data-v-1f2913d3"]]), sq = window.Vue.defineComponent, Fe = window.Vue.unref, Dt = window.Vue.createVNode, rt = window.Vue.createElementVNode, _o = window.Vue.withCtx, yo = window.Vue.openBlock, ks = window.Vue.createElementBlock, iq = window.Vue.createCommentVNode, aq = window.Vue.toDisplayString, Od = window.Vue.createTextVNode, lq = window.Vue.normalizeClass, uq = window.Vue.renderList, cq = window.Vue.Fragment, dq = window.Vue.createBlock, fq = window.Vue.pushScopeId, Aq = window.Vue.popScopeId, oi = (e) => (fq("data-v-1a57a9f3"), e = e(), Aq(), e), hq = { class: "container" }, pq = /* @__PURE__ */ oi(() => /* @__PURE__ */ rt("span", null, "Situation List", -1)), wq = /* @__PURE__ */ oi(() => /* @__PURE__ */ rt("h2", null, "New Situation", -1)), vq = { class: "form" }, mq = { class: "fields" }, gq = {
  key: 0,
  class: "errorList"
}, Vq = { class: "footer" }, _q = /* @__PURE__ */ oi(() => /* @__PURE__ */ rt("span", null, "Clear", -1)), yq = /* @__PURE__ */ oi(() => /* @__PURE__ */ rt("span", null, "Add Situation", -1)), bq = { class: "alarm-column" }, Cq = { class: "header-alarms" }, $q = /* @__PURE__ */ oi(() => /* @__PURE__ */ rt("h3", null, "Add Unassociated Alarms", -1)), Eq = /* @__PURE__ */ Od(" Total Alarms Added: "), Mq = { class: "total" }, Iq = { class: "list" }, Bq = { class: "filters" }, xq = {
  key: 0,
  class: "alarms"
}, Sq = /* @__PURE__ */ Od(" Error on creating new situation :( "), Tq = /* @__PURE__ */ Od("dismiss"), Qn = window.Vue.ref, kq = window.Vue.watch, Pq = /* @__PURE__ */ sq({
  setup(e) {
    const o = gn(), r = on(), i = Qn(), a = Qn(""), u = Qn(), c = Qn(""), f = Qn([]), p = Qn(!1), v = Qn(), m = Qn(r.unassignedAlarms);
    m.value.length || r.getUnassignedAlarms(), kq(
      () => r.unassignedAlarms,
      () => {
        m.value = r.unassignedAlarms;
      }
    );
    const V = () => {
      o.push({
        name: "situations"
      });
    }, _ = ($) => {
      p.value = !1, de.exports.includes(f.value, $) ? de.exports.remove(f.value, (P) => P === $) : f.value.push($);
    }, x = () => {
      const $ = "This field should not be empty";
      let P = !0;
      return i.value || (a.value = $, P = !1), u.value || (c.value = $, P = !1), f.value.length < 2 && (p.value = !0, P = !1), P;
    }, S = async () => {
      if (x()) {
        const $ = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: i.value
        };
        await KP($) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, D = () => {
      i.value = "", u.value = "", f.value = [], m.value = r.unassignedAlarms;
    }, N = ($) => {
      m.value = $;
    };
    return ($, P) => (yo(), ks("div", hq, [
      Dt(Fe(ae), {
        primary: "",
        onClick: P[0] || (P[0] = () => V()),
        class: "back-btn"
      }, {
        default: _o(() => [
          Dt(Fe(Z), {
            icon: Fe(xo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          pq
        ]),
        _: 1
      }),
      wq,
      rt("div", vq, [
        rt("div", mq, [
          Dt(Fe(nd), {
            modelValue: i.value,
            "onUpdate:modelValue": P[1] || (P[1] = (T) => i.value = T),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Dt(Fe(nd), {
            modelValue: u.value,
            "onUpdate:modelValue": P[2] || (P[2] = (T) => u.value = T),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          p.value ? (yo(), ks("div", gq, " You must add at least 2 alarms. ")) : iq("", !0),
          rt("div", Vq, [
            Dt(Fe(ae), {
              class: "btn",
              onClick: D
            }, {
              default: _o(() => [
                Dt(Fe(Z), {
                  icon: Fe(qr),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                _q
              ]),
              _: 1
            }),
            Dt(Fe(ae), {
              class: "btn-add",
              onClick: S
            }, {
              default: _o(() => [
                Dt(Fe(Z), {
                  icon: Fe(ul),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                yq
              ]),
              _: 1
            })
          ])
        ]),
        rt("div", bq, [
          rt("div", Cq, [
            $q,
            rt("div", null, [
              rt("div", {
                class: lq(["totalAlarms", { errorList: p.value }])
              }, [
                Eq,
                rt("span", Mq, aq(Fe(f).length), 1)
              ], 2)
            ])
          ]),
          rt("div", Iq, [
            rt("div", Bq, [
              Dt(qo, {
                list: Fe(r).unassignedAlarms,
                onFilteredList: N,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            m.value.length ? (yo(), ks("div", xq, [
              (yo(!0), ks(cq, null, uq(m.value, (T) => (yo(), ks("div", {
                key: T.id,
                class: "alarm-card"
              }, [
                Dt(Nd, {
                  selected: Fe(de.exports.includes)(Fe(f), T.id),
                  alarm: T,
                  onSelectedAlarm: _
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (yo(), dq(Ro, { key: 1 }))
          ])
        ])
      ]),
      Dt(Fe(Al), {
        modelValue: v.value,
        "onUpdate:modelValue": P[4] || (P[4] = (T) => v.value = T),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: _o(() => [
          Dt(Fe(ae), {
            onClick: P[3] || (P[3] = (T) => v.value = !1),
            text: ""
          }, {
            default: _o(() => [
              Tq
            ]),
            _: 1
          })
        ]),
        default: _o(() => [
          Sq
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const Nq = /* @__PURE__ */ re(Pq, [["__scopeId", "data-v-1a57a9f3"]]), Dq = window.Vue.openBlock, Oq = window.Vue.createElementBlock, Lq = window.Vue.createElementVNode;
var zq = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const qq = {}, Rq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Wq = /* @__PURE__ */ Lq("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), Fq = [
  Wq
];
function Xq(e, o) {
  return Dq(), Oq("svg", Rq, Fq);
}
var Zq = /* @__PURE__ */ zq(qq, [["render", Xq]]);
const Uq = window.Vue.openBlock, Yq = window.Vue.createElementBlock, Ld = window.Vue.createElementVNode;
var Hq = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Gq = {}, jq = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Kq = /* @__PURE__ */ Ld("circle", {
  cx: "12",
  cy: "14",
  r: "1.5"
}, null, -1), Qq = /* @__PURE__ */ Ld("path", { d: "M12,10a6.45,6.45,0,0,0-6,4,6.5,6.5,0,0,0,12,0A6.45,6.45,0,0,0,12,10Zm0,6.5A4.93,4.93,0,0,1,7.66,14a5,5,0,0,1,8.68,0A4.93,4.93,0,0,1,12,16.5Z" }, null, -1), Jq = /* @__PURE__ */ Ld("path", { d: "M19,3H14.82A3,3,0,0,0,9.18,3H5A2,2,0,0,0,3,5V21a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Zm-8,.75A.76.76,0,0,1,11.75,3h.5a.76.76,0,0,1,.75.75v.5a.76.76,0,0,1-.75.75h-.5A.76.76,0,0,1,11,4.25ZM19,21H5V5H7V6A1,1,0,0,0,8,7h8a1,1,0,0,0,1-1V5h2Z" }, null, -1), eR = [
  Kq,
  Qq,
  Jq
];
function tR(e, o) {
  return Uq(), Yq("svg", jq, eR);
}
var nR = /* @__PURE__ */ Hq(Gq, [["render", tR]]);
const rR = window.Vue.openBlock, oR = window.Vue.createElementBlock, pl = window.Vue.createElementVNode;
var sR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const iR = {}, aR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lR = /* @__PURE__ */ pl("path", { d: "M16,9.18v-4a.5.5,0,0,0-.72-.45L8.76,8H3a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H5v4.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V16H8.76l6.52,3.26a.5.5,0,0,0,.72-.45v-4a3,3,0,0,0,0-5.64ZM8,14H3V10H8Zm6-5v7.38l-4-2V9.62l4-2Z" }, null, -1), uR = /* @__PURE__ */ pl("rect", {
  x: "20",
  y: "11",
  width: "4",
  height: "2"
}, null, -1), cR = /* @__PURE__ */ pl("path", { d: "M22.53,6.85l-1.06-1.7L17.86,7.41A5.82,5.82,0,0,1,19.16,9Z" }, null, -1), dR = /* @__PURE__ */ pl("path", { d: "M17.86,16.59l3.61,2.26,1.06-1.7-3.37-2.1A5.82,5.82,0,0,1,17.86,16.59Z" }, null, -1), fR = [
  lR,
  uR,
  cR,
  dR
];
function AR(e, o) {
  return rR(), oR("svg", aR, fR);
}
var hR = /* @__PURE__ */ sR(iR, [["render", AR]]);
const pR = window.Vue.defineComponent, Se = window.Vue.createElementVNode, Lr = window.Vue.createTextVNode, Kt = window.Vue.unref, xr = window.Vue.createVNode, _a = window.Vue.withCtx, yv = window.Vue.openBlock, bv = window.Vue.createElementBlock, wR = window.Vue.createCommentVNode, vR = window.Vue.pushScopeId, mR = window.Vue.popScopeId, sn = (e) => (vR("data-v-7825abb2"), e = e(), mR(), e), gR = { class: "container" }, VR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("div", { class: "title" }, "ALEC", -1)), _R = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("div", { class: "description" }, [
  /* @__PURE__ */ Lr(" The Architecture for Learning Enabled Correlation (ALEC) provides a machine learning-powered framework for logically grouping related alarms into higher-level situations. Because networks can produce an overwhelming number of events and alarms, ALEC helps you to better tackle and manage underlying issues. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Lr(" ALEC gives IT Operators the tools to address these issues by identifying alarm groups, which are easier to manage. ")
], -1)), yR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("h3", null, "Key Benefits", -1)), bR = { class: "list" }, CR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("span", null, " Reduces the number of alarm and event notifications. ", -1)), $R = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("span", null, "Streamlines root cause analysis.", -1)), ER = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("span", null, " Provides oversight for ", -1)), MR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("br", null, null, -1)), IR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("span", null, " low-visibility alarms. ", -1)), BR = { key: 0 }, xR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("h3", null, "ALEC Data Sharing", -1)), SR = { class: "optin" }, TR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("div", null, [
  /* @__PURE__ */ Lr(" Opt-in to send anonymous data to The OpenNMS Group. Your anonymized data helps to improve the machine learning algorithms behind the plugin, subject to our "),
  /* @__PURE__ */ Se("a", {
    href: "https://www.opennms.com/privacy/",
    target: "_blank"
  }, "privacy policy"),
  /* @__PURE__ */ Lr(", so you will see more precise results. ")
], -1)), kR = { class: "choices" }, PR = /* @__PURE__ */ sn(() => /* @__PURE__ */ Se("div", { class: "radio-text" }, " By opting in, you accept that we can store this information and use it to improve ALEC. You can change this setting at any time in the settings menu. ", -1)), NR = /* @__PURE__ */ Lr("Yes"), DR = /* @__PURE__ */ Lr("No"), OR = /* @__PURE__ */ Lr(" Continue "), LR = window.Vue.markRaw, zR = window.Vue.ref, qR = /* @__PURE__ */ pR({
  setup(e) {
    const o = LR({
      FeedbackAlt: hR,
      ViewDetails: nR,
      Workflow: Zq
    }), r = Ln(), i = gn(), a = zR(!0), u = () => {
      const c = Boolean(a.value);
      r.savePermission(c), i.push({ name: "configuration" });
    };
    return (c, f) => (yv(), bv("div", gR, [
      VR,
      _R,
      Se("div", null, [
        yR,
        Se("div", bR, [
          Se("div", null, [
            xr(Kt(Z), {
              icon: Kt(o).FeedbackAlt,
              class: "icon"
            }, null, 8, ["icon"]),
            CR
          ]),
          Se("div", null, [
            xr(Kt(Z), {
              icon: Kt(o).Workflow,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            $R
          ]),
          Se("div", null, [
            xr(Kt(Z), {
              icon: Kt(o).ViewDetails,
              class: "icon"
            }, null, 8, ["icon"]),
            ER,
            MR,
            IR
          ])
        ])
      ]),
      Kt(r).isAdmin ? (yv(), bv("div", BR, [
        xR,
        Se("div", SR, [
          TR,
          Se("div", kR, [
            PR,
            xr(Kt(js), {
              horizontal: "",
              modelValue: a.value,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => a.value = p),
              label: ""
            }, {
              default: _a(() => [
                xr(Kt(Nn), { value: !0 }, {
                  default: _a(() => [
                    NR
                  ]),
                  _: 1
                }),
                xr(Kt(Nn), { value: !1 }, {
                  default: _a(() => [
                    DR
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ])) : wR("", !0),
      xr(Kt(ae), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: u
      }, {
        default: _a(() => [
          OR
        ]),
        _: 1
      })
    ]));
  }
});
const RR = /* @__PURE__ */ re(qR, [["__scopeId", "data-v-7825abb2"]]), WR = window.Vue.defineComponent, FR = window.Vue.createElementVNode, XR = window.Vue.createTextVNode, ZR = window.Vue.unref, UR = window.Vue.withCtx, YR = window.Vue.createVNode, HR = window.Vue.Fragment, GR = window.Vue.openBlock, jR = window.Vue.createElementBlock, KR = window.Vue.pushScopeId, QR = window.Vue.popScopeId, JR = (e) => (KR("data-v-bcb7dcc6"), e = e(), QR(), e), eW = /* @__PURE__ */ JR(() => /* @__PURE__ */ FR("div", { class: "main" }, "Something bad is happening...", -1)), tW = /* @__PURE__ */ XR(" Reload "), nW = /* @__PURE__ */ WR({
  setup(e) {
    const o = gn(), r = () => {
      o.push({ name: "situations" });
    };
    return (i, a) => (GR(), jR(HR, null, [
      eW,
      YR(ZR(ae), {
        primary: "",
        onClick: r
      }, {
        default: UR(() => [
          tW
        ]),
        _: 1
      })
    ], 64));
  }
});
const rW = /* @__PURE__ */ re(nW, [["__scopeId", "data-v-bcb7dcc6"]]), oW = window.Vue.defineComponent, nt = window.Vue.unref, Qt = window.Vue.createVNode, nr = window.Vue.createElementVNode, Ps = window.Vue.withCtx, Sr = window.Vue.openBlock, Cv = window.Vue.createBlock, sW = window.Vue.renderList, iW = window.Vue.Fragment, Ns = window.Vue.createElementBlock, aW = window.Vue.toDisplayString, B1 = window.Vue.createTextVNode, lW = window.Vue.pushScopeId, uW = window.Vue.popScopeId, zd = (e) => (lW("data-v-6078e4ad"), e = e(), uW(), e), cW = { class: "container" }, dW = { class: "nav-btns" }, fW = /* @__PURE__ */ zd(() => /* @__PURE__ */ nr("span", null, "Situation List", -1)), AW = /* @__PURE__ */ zd(() => /* @__PURE__ */ nr("h2", null, "List Unassociated Alarms", -1)), hW = { class: "content" }, pW = { class: "filters" }, wW = { class: "list" }, vW = { class: "action-btns" }, mW = /* @__PURE__ */ zd(() => /* @__PURE__ */ nr("span", null, "Move", -1)), gW = { key: 1 }, VW = {
  key: 0,
  class: "alarms"
}, _W = /* @__PURE__ */ B1("dismiss"), Jn = window.Vue.ref, yW = window.Vue.watch, bW = window.Vue.markRaw, CW = /* @__PURE__ */ oW({
  setup(e) {
    const o = bW({
      ArrowBack: xo,
      ExitToApp: rd
    }), r = gn(), i = on();
    i.getUnassignedAlarms(), i.getSituations(), i.nodes.length || i.getNodes();
    const a = Jn([]), u = Jn([]), c = Jn(!1), f = Jn(!1), p = Jn(""), v = Jn(!1), m = Jn(!1), V = Jn(!0);
    yW(
      () => i.unassignedAlarms,
      () => {
        a.value = i.unassignedAlarms, V.value = !1;
      }
    );
    const _ = (P) => {
      de.exports.includes(u.value, P) ? de.exports.remove(u.value, (T) => T === P) : u.value.push(P);
    }, x = () => {
      c.value ? u.value = a.value.map((P) => P.id) : u.value = [];
    }, S = async (P) => {
      await Om(P, u.value) ? i.getUnassignedAlarms() : (v.value = !0, m.value = !0, p.value = "Error on moving the alarms :("), f.value = !1;
    }, D = () => {
      r.push({
        name: "situations"
      });
    }, N = () => {
      u.value.length ? f.value = !0 : (v.value = !0, m.value = !1, p.value = "You need to choose at least one alarm!");
    }, $ = (P) => {
      a.value = P;
    };
    return (P, T) => (Sr(), Ns("div", cW, [
      nr("div", dW, [
        Qt(nt(ae), {
          primary: "",
          onClick: T[0] || (T[0] = () => D())
        }, {
          default: Ps(() => [
            Qt(nt(Z), {
              icon: nt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fW
          ]),
          _: 1
        }),
        Qt(km)
      ]),
      AW,
      nr("div", hW, [
        nr("div", pW, [
          Qt(qo, {
            list: nt(i).unassignedAlarms,
            onFilteredList: $,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        nr("div", wW, [
          nr("div", vW, [
            Qt(nt(Wo), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                T[1] || (T[1] = (O) => c.value = O),
                x
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Qt(nt(ae), { onClick: N }, {
              default: Ps(() => [
                Qt(nt(Z), {
                  icon: nt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                mW
              ]),
              _: 1
            })
          ]),
          V.value ? (Sr(), Cv(nt(bd), {
            key: 0,
            class: "spinner"
          })) : (Sr(), Ns("div", gW, [
            nt(a).length ? (Sr(), Ns("div", VW, [
              (Sr(!0), Ns(iW, null, sW(nt(a), (O) => (Sr(), Ns("div", {
                key: O.id,
                class: "card"
              }, [
                Qt(Nd, {
                  selected: nt(de.exports.includes)(nt(u), O.id),
                  alarm: O,
                  onSelectedAlarm: _
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Sr(), Cv(Ro, { key: 1 }))
          ]))
        ])
      ]),
      Qt(m1, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: S,
        onDrawerClosed: T[2] || (T[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      Qt(nt(Al), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (O) => v.value = O),
        right: "",
        error: m.value,
        timeout: 6e3
      }, {
        button: Ps(() => [
          Qt(nt(ae), {
            onClick: T[3] || (T[3] = (O) => v.value = !1),
            text: ""
          }, {
            default: Ps(() => [
              _W
            ]),
            _: 1
          })
        ]),
        default: Ps(() => [
          B1(aW(p.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const $W = /* @__PURE__ */ re(CW, [["__scopeId", "data-v-6078e4ad"]]), EW = "data:image/png;base64,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", MW = "data:image/png;base64,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", IW = window.Vue.defineComponent, Ze = window.Vue.createElementVNode, kn = window.Vue.unref, qd = window.Vue.createTextVNode, Ds = window.Vue.withCtx, Os = window.Vue.createVNode, BW = window.Vue.openBlock, xW = window.Vue.createElementBlock, SW = window.Vue.pushScopeId, TW = window.Vue.popScopeId, Zo = (e) => (SW("data-v-c07203bb"), e = e(), TW(), e), kW = { class: "container" }, PW = /* @__PURE__ */ Zo(() => /* @__PURE__ */ Ze("h2", null, "Configuration", -1)), NW = /* @__PURE__ */ qd(" ALEC relies on correlation engines to group related alarms into situations. These engines are powered by machine learning techniques that leverage alarm metadata to make informed decisions. For more information about the correlation engines, see the "), DW = ["href"], OW = /* @__PURE__ */ qd(". "), LW = { class: "radio-content" }, zW = /* @__PURE__ */ Zo(() => /* @__PURE__ */ Ze("strong", { class: "title" }, "Clustering", -1)), qW = /* @__PURE__ */ Zo(() => /* @__PURE__ */ Ze("div", null, " The clustering engine uses the DBSCAN algorithm to build alarm clusters. It draws information from the locally persisted network inventory graph. ", -1)), RW = /* @__PURE__ */ Zo(() => /* @__PURE__ */ Ze("img", {
  class: "img2",
  src: EW
}, null, -1)), WW = /* @__PURE__ */ Zo(() => /* @__PURE__ */ Ze("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ze("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Ze("span", { class: "description" }, " (Uses the Hellinger distance between alarms as a scaling variable. This pushes alarms further apart if the value is high, and vice versa.) ")
], -1)), FW = /* @__PURE__ */ Zo(() => /* @__PURE__ */ Ze("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ze("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ze("div", null, " The deep learning engine uses a TensorFlow model to build alarm clusters. It draws information from the locally persisted network inventory graph. "),
  /* @__PURE__ */ Ze("img", {
    class: "img2",
    src: MW
  })
], -1)), XW = /* @__PURE__ */ qd(" Continue "), $v = window.Vue.ref, ZW = /* @__PURE__ */ IW({
  setup(e) {
    const o = gn(), r = $v(!1), i = $v(ye.ENGINE_DBSCAN), a = Ln(), u = () => {
      a.setEngineInfo(i.value, r.value), o.push({ name: "situations" });
    };
    return (c, f) => (BW(), xW("div", kW, [
      PW,
      Ze("p", null, [
        NW,
        Ze("strong", null, [
          Ze("a", {
            target: "_blank",
            href: kn(ye).URL_DOCUMENTATION
          }, " documentation ", 8, DW),
          OW
        ])
      ]),
      Ze("div", null, [
        Os(kn(js), {
          class: "radio-group",
          label: "You can choose from two correlation engines. We recommend that you use the clustering engine, as it is easier to implement.Select one (you can change it later):",
          modelValue: i.value,
          "onUpdate:modelValue": f[1] || (f[1] = (p) => i.value = p)
        }, {
          default: Ds(() => [
            Os(kn(Nn), {
              class: "radio",
              value: kn(ye).ENGINE_DBSCAN
            }, {
              default: Ds(() => [
                Ze("div", LW, [
                  zW,
                  qW,
                  RW,
                  Os(kn(Wo), {
                    modelValue: r.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p),
                    disabled: i.value !== kn(ye).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ds(() => [
                      WW
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Os(kn(Nn), {
              class: "radio",
              value: kn(ye).ENGINE_DEEP_LEARNING
            }, {
              default: Ds(() => [
                FW
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]),
      Os(kn(ae), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => u())
      }, {
        default: Ds(() => [
          XW
        ]),
        _: 1
      })
    ]));
  }
});
const UW = /* @__PURE__ */ re(ZW, [["__scopeId", "data-v-c07203bb"]]), YW = window.Vue.defineComponent, qc = window.Vue.unref, HW = window.Vue.createVNode, GW = window.Vue.createElementVNode, jW = window.Vue.withCtx, KW = window.Vue.openBlock, QW = window.Vue.createBlock, JW = window.Vue.pushScopeId, eF = window.Vue.popScopeId, tF = (e) => (JW("data-v-17251e76"), e = e(), eF(), e), nF = /* @__PURE__ */ tF(() => /* @__PURE__ */ GW("span", null, "Situation List", -1)), rF = window.Vue.markRaw, oF = /* @__PURE__ */ YW({
  setup(e) {
    const o = gn(), r = rF({
      ArrowBack: xo
    }), i = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (KW(), QW(qc(ae), {
      primary: "",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: jW(() => [
        HW(qc(Z), {
          icon: qc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        nF
      ]),
      _: 1
    }));
  }
});
const sF = /* @__PURE__ */ re(oF, [["__scopeId", "data-v-17251e76"]]), iF = window.Vue.defineComponent, Ot = window.Vue.createVNode, An = window.Vue.createElementVNode, lr = window.Vue.createTextVNode, Ge = window.Vue.unref, Jt = window.Vue.withCtx, aF = window.Vue.toDisplayString, lF = window.Vue.Fragment, uF = window.Vue.openBlock, cF = window.Vue.createElementBlock, dF = window.Vue.pushScopeId, fF = window.Vue.popScopeId, wl = (e) => (dF("data-v-f91e9577"), e = e(), fF(), e), AF = { class: "container" }, hF = /* @__PURE__ */ wl(() => /* @__PURE__ */ An("h3", null, "Configuration Page", -1)), pF = { class: "section" }, wF = /* @__PURE__ */ wl(() => /* @__PURE__ */ An("div", { class: "title" }, " Allow ALEC to send anonymous usage data to The OpenNMS Group? ", -1)), vF = /* @__PURE__ */ lr("Yes"), mF = /* @__PURE__ */ lr("No"), gF = { class: "section" }, VF = { class: "title" }, _F = /* @__PURE__ */ lr(" Choose the correlation engine that ALEC will use (see "), yF = ["href"], bF = /* @__PURE__ */ lr(" for more information): "), CF = /* @__PURE__ */ lr("Clustering"), $F = /* @__PURE__ */ wl(() => /* @__PURE__ */ An("div", { class: "hellinger" }, [
  /* @__PURE__ */ An("strong", null, "Hellinger distance")
], -1)), EF = /* @__PURE__ */ lr("Deep Learning"), MF = /* @__PURE__ */ wl(() => /* @__PURE__ */ An("span", null, "Save Changes", -1)), IF = /* @__PURE__ */ lr("dismiss"), BF = window.Vue.markRaw, bo = window.Vue.ref, xF = /* @__PURE__ */ iF({
  setup(e) {
    var m, V;
    const o = BF({
      MarkComplete: qa
    }), r = Ln(), i = bo(r.allowSave), a = bo(((m = r.engineInfo) == null ? void 0 : m.engineName) || ye.ENGINE_DBSCAN), u = bo(
      ((V = r.engineInfo) == null ? void 0 : V.distanceMeasureName) === ye.HELLINGER_OPTION
    ), c = bo(!1), f = bo(!1), p = bo(""), v = async () => {
      const _ = Boolean(i.value);
      await r.savePermission(_);
      const x = await r.setEngineInfo(
        a.value,
        u.value
      );
      c.value = !0, x ? (r.getAlecInfo(), r.getEngineInfo(), p.value = "The settings were saved!", f.value = !1) : (p.value = "Error on saving the settings", f.value = !0);
    };
    return (_, x) => (uF(), cF(lF, null, [
      Ot(sF),
      An("div", AF, [
        hF,
        An("div", pF, [
          wF,
          Ot(Ge(js), {
            horizontal: "",
            modelValue: i.value,
            "onUpdate:modelValue": x[0] || (x[0] = (S) => i.value = S),
            label: "",
            hideLabel: ""
          }, {
            default: Jt(() => [
              Ot(Ge(Nn), { value: !0 }, {
                default: Jt(() => [
                  vF
                ]),
                _: 1
              }),
              Ot(Ge(Nn), { value: !1 }, {
                default: Jt(() => [
                  mF
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        An("div", gF, [
          An("div", VF, [
            _F,
            An("a", {
              target: "_blank",
              href: Ge(ye).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, yF),
            bF
          ]),
          Ot(Ge(js), {
            vertical: "",
            modelValue: a.value,
            "onUpdate:modelValue": x[2] || (x[2] = (S) => a.value = S),
            label: "",
            hideLabel: ""
          }, {
            default: Jt(() => [
              Ot(Ge(Nn), {
                class: "radio-item",
                value: Ge(ye).ENGINE_DBSCAN
              }, {
                default: Jt(() => [
                  CF
                ]),
                _: 1
              }, 8, ["value"]),
              Ot(Ge(Wo), {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (S) => u.value = S),
                disabled: a.value !== Ge(ye).ENGINE_DBSCAN,
                class: "checkbox"
              }, {
                default: Jt(() => [
                  $F
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Ot(Ge(Nn), {
                class: "radio-item",
                value: Ge(ye).ENGINE_DEEP_LEARNING
              }, {
                default: Jt(() => [
                  EF
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Ot(Ge(ae), {
          primary: "",
          class: "save-btn",
          onClick: v
        }, {
          default: Jt(() => [
            Ot(Ge(Z), {
              icon: Ge(o).MarkComplete,
              class: "icon"
            }, null, 8, ["icon"]),
            MF
          ]),
          _: 1
        }),
        Ot(Ge(Al), {
          modelValue: c.value,
          "onUpdate:modelValue": x[4] || (x[4] = (S) => c.value = S),
          right: "",
          error: f.value,
          timeout: 6e3
        }, {
          button: Jt(() => [
            Ot(Ge(ae), {
              onClick: x[3] || (x[3] = (S) => c.value = !1),
              text: ""
            }, {
              default: Jt(() => [
                IF
              ]),
              _: 1
            })
          ]),
          default: Jt(() => [
            lr(aF(p.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const SF = /* @__PURE__ */ re(xF, [["__scopeId", "data-v-f91e9577"]]), TF = window.VueRouter.createRouter, kF = window.VueRouter.createWebHistory, Rc = async () => {
  const e = Ln();
  e.userId || (await e.getUserRole(), await e.getAlecInfo());
}, x1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || S1, r = Ln();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: e.params }) : o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Rc(),
    component: RR
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Rc(),
    component: UW
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Rc(),
    component: UN
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: oq
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: Nq
  },
  {
    path: "/error",
    name: "error",
    component: rW
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: $W
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      const e = Ln();
      await e.getAlecInfo(), await e.getEngineInfo();
    },
    component: SF
  }
], Wc = window.VRouter;
if (Wc) {
  const e = "Plugin-alecUiExtension", o = Wc.hasRoute(e) ? e : "Plugin";
  for (const r of x1) {
    const { path: i, name: a, component: u, beforeEnter: c } = r;
    Wc.addRoute(o, {
      path: i.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const S1 = TF({
  history: kF(),
  routes: x1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = S2;
